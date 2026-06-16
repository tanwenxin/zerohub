'use strict';

const fs = require('fs');
const path = require('path');

const agnesClient = require('../../server/services/agnesClient');
const config = require('../../server/config');
const { keyPool } = require('../../server/services/keyPool');
const { assertGenerationTextAllowed } = require('../../server/services/contentModeration');

const rootDir = path.resolve(__dirname, '..', '..');
const dataFile = path.join(rootDir, 'server', 'content', 'prompt-templates.json');

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (!item.startsWith('--')) continue;
    const key = item.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      out[key] = true;
    } else {
      out[key] = next;
      i += 1;
    }
  }
  return out;
}

function readData() {
  return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

function writeDataAtomic(data) {
  const tmp = `${dataFile}.tmp`;
  data.updatedAt = new Date().toISOString();
  fs.writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  fs.renameSync(tmp, dataFile);
}

function toInt(value, fallback, min, max) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function needsImage(template, missingOnly) {
  if (!missingOnly) return true;
  return !template.imageUrl || template.imageStatus !== 'done';
}

function publicError(err) {
  return {
    message: err.userMessage || err.message || '生成失败',
    code: err.code || null,
    status: err.status || null,
  };
}

async function generateOne(data, template, size) {
  try {
    assertGenerationTextAllowed({ prompt: template.prompt });
  } catch (err) {
    Object.assign(template, {
      imageStatus: 'blocked',
      imageError: publicError(err),
    });
    writeDataAtomic(data);
    console.log(`[blocked] ${template.id} ${template.title}`);
    return;
  }

  let apiKey = null;
  try {
    apiKey = await keyPool.acquire('image', {
      onWait: ({ retryAfterMs }) => {
        console.log(`[wait] retryAfterMs=${retryAfterMs}`);
      },
    });

    const sizeInfo = agnesClient.normalizeSize(size);
    const result = await agnesClient.generate(
      {
        type: 'text2img',
        prompt: template.prompt,
        size: sizeInfo.size,
        responseFormat: 'url',
      },
      { apiKey }
    );
    const image = result.images && result.images[0];
    if (!image || !image.url) {
      const err = new Error('Agnes 未返回图片 URL');
      err.code = 'NO_IMAGE_URL';
      throw err;
    }

    Object.assign(template, {
      imageUrl: image.url,
      imageGeneratedAt: new Date().toISOString(),
      imageStatus: 'done',
      imageError: null,
      imagePrompt: image.revisedPrompt || template.prompt,
    });
    writeDataAtomic(data);
    console.log(`[done] ${template.id} ${template.title}`);
  } catch (err) {
    if (apiKey && err.status === 429) {
      keyPool.markLimited(apiKey, 'image', err.retryAfterMs);
    }
    Object.assign(template, {
      imageStatus: 'error',
      imageError: publicError(err),
    });
    writeDataAtomic(data);
    console.log(`[error] ${template.id} ${template.title}: ${err.message}`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const limit = toInt(args.limit, 30, 1, 10000);
  const size = String(args.size || args['page-size'] || '1024x1024');
  const category = typeof args.category === 'string' ? args.category : '';
  const missingOnly = args['missing-only'] !== false;
  const dryRun = Boolean(args['dry-run']);

  const data = readData();
  let templates = Array.isArray(data.templates) ? data.templates : [];
  if (category) templates = templates.filter((template) => template.categorySlug === category);
  templates = templates.filter((template) => needsImage(template, missingOnly)).slice(0, limit);

  console.log(`Prompt template image generation`);
  console.log(`data=${path.relative(rootDir, dataFile)}`);
  console.log(`mock=${config.agnes.mock ? '1' : '0'} keyCount=${config.keyCount} size=${size}`);
  console.log(`selected=${templates.length} missingOnly=${missingOnly ? '1' : '0'} dryRun=${dryRun ? '1' : '0'}`);

  if (dryRun) {
    for (const template of templates) {
      console.log(`[dry-run] ${template.categorySlug}/${template.slug} ${template.title}`);
    }
    return;
  }

  for (const template of templates) {
    await generateOne(data, template, size);
  }
}

main().catch((err) => {
  console.error(err && err.stack ? err.stack : err);
  process.exitCode = 1;
});
