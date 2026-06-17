'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..', '..');
const dataFile = path.join(rootDir, 'server', 'content', 'prompt-templates.json');
const outputDir = path.join(rootDir, 'web', 'public', 'prompt-template-images');
const publicPrefix = '/prompt-template-images';

const DEFAULT_SIZES = [320, 640, 960];
const DEFAULT_FORMATS = ['webp'];
const DEFAULT_QUALITY = 72;
const DEFAULT_TIMEOUT_MS = 30000;
const DEFAULT_CONCURRENCY = 4;

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

function toInt(value, fallback, min, max) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function parseList(value, fallback, normalize) {
  if (!value) return fallback;
  const items = String(value)
    .split(',')
    .map((item) => normalize(item.trim()))
    .filter(Boolean);
  return items.length ? Array.from(new Set(items)) : fallback;
}

function parseSizes(value) {
  return parseList(value, DEFAULT_SIZES, (item) => {
    const n = Number.parseInt(item, 10);
    return Number.isFinite(n) && n >= 120 && n <= 2000 ? n : null;
  }).sort((a, b) => a - b);
}

function parseFormats(value) {
  return parseList(value, DEFAULT_FORMATS, (item) => {
    const format = item.toLowerCase();
    return ['webp', 'avif'].includes(format) ? format : null;
  });
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

function hashValue(value) {
  return crypto.createHash('sha1').update(String(value)).digest('hex').slice(0, 10);
}

function safeName(value) {
  return String(value || 'template')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'template';
}

function fileFor(template, imageHash, width, format) {
  const basename = `${safeName(template.id || template.slug)}-${imageHash}-${width}.${format}`;
  return {
    filePath: path.join(outputDir, basename),
    publicPath: `${publicPrefix}/${basename}`,
  };
}

function hasAllOutputs(template, imageHash, sizes, formats) {
  const optimized = template.imageOptimized || {};
  return formats.every((format) =>
    sizes.every((width) => {
      const current = optimized[format] && optimized[format][String(width)];
      if (!current) return false;
      const expected = fileFor(template, imageHash, width, format).publicPath;
      return current === expected && fs.existsSync(path.join(rootDir, 'web', 'public', current.replace(/^\//, '')));
    })
  );
}

async function fetchImage(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        accept: 'image/avif,image/webp,image/png,image/jpeg,image/*,*/*;q=0.8',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } finally {
    clearTimeout(timer);
  }
}

async function writeVariant(buffer, filePath, width, format, quality) {
  let pipeline = sharp(buffer, { failOn: 'none' })
    .rotate()
    .resize({
      width,
      withoutEnlargement: true,
    });

  if (format === 'avif') {
    pipeline = pipeline.avif({ quality, effort: 4 });
  } else {
    pipeline = pipeline.webp({ quality, effort: 4 });
  }

  await pipeline.toFile(filePath);
}

function shouldProcess(template, missingOnly, imageHash, sizes, formats) {
  if (!template || template.imageStatus !== 'done' || !template.imageUrl) return false;
  if (!missingOnly) return true;
  return !hasAllOutputs(template, imageHash, sizes, formats);
}

async function generateOne(template, options) {
  const imageHash = hashValue(template.imageUrl);
  const nextOptimized = { ...(template.imageOptimized || {}) };

  if (options.dryRun) {
    console.log(`[dry-run] ${template.categorySlug}/${template.slug}`);
    return false;
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const buffer = await fetchImage(template.imageUrl, options.timeoutMs);
  for (const format of options.formats) {
    nextOptimized[format] = { ...(nextOptimized[format] || {}) };
    for (const width of options.sizes) {
      const { filePath, publicPath } = fileFor(template, imageHash, width, format);
      if (!fs.existsSync(filePath)) {
        await writeVariant(buffer, filePath, width, format, options.quality);
      }
      nextOptimized[format][String(width)] = publicPath;
    }
  }

  template.imageOptimized = nextOptimized;
  delete template.imageThumbnailError;
  return true;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sizes = parseSizes(args.sizes);
  const formats = parseFormats(args.format || args.formats);
  const quality = toInt(args.quality, DEFAULT_QUALITY, 35, 95);
  const timeoutMs = toInt(args.timeout, DEFAULT_TIMEOUT_MS, 5000, 120000);
  const concurrency = toInt(args.concurrency, DEFAULT_CONCURRENCY, 1, 8);
  const limit = toInt(args.limit, 10000, 1, 10000);
  const category = typeof args.category === 'string' ? args.category : '';
  const missingOnly = args['missing-only'] !== false;
  const dryRun = Boolean(args['dry-run']);

  const data = readData();
  let templates = Array.isArray(data.templates) ? data.templates : [];
  let changed = false;
  for (const template of templates) {
    if (!template.imageThumbnailError) continue;
    if (hasAllOutputs(template, hashValue(template.imageUrl || ''), sizes, formats)) {
      delete template.imageThumbnailError;
      changed = true;
    }
  }
  if (category) templates = templates.filter((template) => template.categorySlug === category);
  templates = templates
    .filter((template) => shouldProcess(template, missingOnly, hashValue(template.imageUrl || ''), sizes, formats))
    .slice(0, limit);

  console.log('Prompt template thumbnail generation');
  console.log(`data=${path.relative(rootDir, dataFile)}`);
  console.log(`output=${path.relative(rootDir, outputDir)}`);
  console.log(`selected=${templates.length} missingOnly=${missingOnly ? '1' : '0'} dryRun=${dryRun ? '1' : '0'}`);
  console.log(`sizes=${sizes.join(',')} formats=${formats.join(',')} quality=${quality} concurrency=${concurrency}`);

  let cursor = 0;

  async function worker() {
    while (cursor < templates.length) {
      const template = templates[cursor];
      cursor += 1;
      try {
        const didChange = await generateOne(template, { sizes, formats, quality, timeoutMs, dryRun });
        changed = changed || didChange;
        console.log(`[done] ${template.id} ${template.title}`);
      } catch (err) {
        template.imageThumbnailError = {
          message: err.message || '缩略图生成失败',
          updatedAt: new Date().toISOString(),
        };
        changed = true;
        console.log(`[error] ${template.id} ${template.title}: ${err.message}`);
      }

      if (changed && !dryRun) writeDataAtomic(data);
    }
  }

  const workerCount = Math.min(concurrency, templates.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));

  if (changed && !dryRun) writeDataAtomic(data);
}

main().catch((err) => {
  console.error(err && err.stack ? err.stack : err);
  process.exitCode = 1;
});
