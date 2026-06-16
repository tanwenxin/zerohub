'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const defaultInput = path.join(rootDir, 'temp', '两份文档提示词合并分类整理_优化版_v2.json');
const defaultOutput = path.join(rootDir, 'server', 'content', 'prompt-templates.json');

const CATEGORY_META = {
  '人像与时尚摄影': {
    slug: 'portrait-fashion-photography',
    description: '人像、时尚、旅行、情侣与摄影风格相关 AI 图像提示词。',
  },
  '海报与插画': {
    slug: 'poster-illustration',
    description: '海报设计、插画风格、视觉叙事与创意构图提示词。',
  },
  '角色设计与动漫': {
    slug: 'character-anime-design',
    description: '角色设定、动漫风格、游戏人物与拟人化视觉提示词。',
  },
  '城市与建筑空间': {
    slug: 'city-architecture-space',
    description: '城市景观、建筑空间、室内外场景与空间氛围提示词。',
  },
  '产品与电商广告': {
    slug: 'product-ecommerce-ads',
    description: '产品摄影、电商主图、商业广告与营销视觉提示词。',
  },
  'UI与社交媒体': {
    slug: 'ui-social-media',
    description: 'UI 画面、社交媒体封面、内容模板与数字界面提示词。',
  },
  '信息图、图标与规则模板': {
    slug: 'infographic-icon-rule-template',
    description: '信息图、图标、规则说明、流程图与结构化视觉提示词。',
  },
  '体育与动作场景': {
    slug: 'sports-action-scenes',
    description: '体育运动、动作瞬间、赛事视觉与动态场景提示词。',
  },
  '品牌与标志视觉': {
    slug: 'brand-logo-visual',
    description: '品牌识别、标志视觉、字体图形与商业形象提示词。',
  },
  '美食与饮品': {
    slug: 'food-beverage',
    description: '美食摄影、饮品广告、餐饮场景与食物质感提示词。',
  },
  '自然与风景': {
    slug: 'nature-landscape',
    description: '自然风景、户外环境、季节氛围与旅行景观提示词。',
  },
  '复古与怀旧': {
    slug: 'retro-nostalgia',
    description: '复古风格、怀旧质感、年代摄影与旧物场景提示词。',
  },
  '幻想与科幻': {
    slug: 'fantasy-sci-fi',
    description: '幻想世界、科幻场景、未来视觉与超现实概念提示词。',
  },
  '微缩场景与3D装置': {
    slug: 'miniature-3d-installation',
    description: '微缩景观、3D 装置、模型摄影与创意立体视觉提示词。',
  },
  '其他': {
    slug: 'others',
    description: '暂未归入固定主题的综合提示词。',
  },
};

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

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJsonAtomic(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const tmp = `${filePath}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  fs.renameSync(tmp, filePath);
}

function hash(input, length = 10) {
  return crypto.createHash('sha1').update(String(input)).digest('hex').slice(0, length);
}

function slugify(value, fallback) {
  const normalized = String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
  return normalized || fallback;
}

function uniqueSlug(base, used, suffix) {
  let slug = base;
  if (!used.has(slug)) {
    used.add(slug);
    return slug;
  }
  slug = `${base}-${suffix}`;
  let i = 2;
  while (used.has(slug)) {
    slug = `${base}-${suffix}-${i}`;
    i += 1;
  }
  used.add(slug);
  return slug;
}

function existingById(filePath) {
  if (!fs.existsSync(filePath)) return new Map();
  try {
    const data = readJson(filePath);
    const templates = Array.isArray(data.templates) ? data.templates : [];
    return new Map(templates.filter((item) => item && item.id).map((item) => [item.id, item]));
  } catch {
    return new Map();
  }
}

function normalizeItem(item, category, index, usedSlugs, oldItem) {
  const title = String(item.title || '').trim() || `Prompt ${index + 1}`;
  const prompt = String(item.prompt || '').trim();
  const sourceLine = Number.isFinite(item.line) ? item.line : null;
  const rawCategory = String(item.raw_category || '').trim();
  const id = `tpl-${hash(`${title}\n${prompt}\n${sourceLine || ''}`, 14)}`;
  const slugBase = slugify(title, `template-${hash(id, 8)}`).slice(0, 96).replace(/-+$/g, '');
  const slug = uniqueSlug(slugBase, usedSlugs, hash(id, 6));

  return {
    id,
    slug,
    title,
    prompt,
    category: category.name,
    categorySlug: category.slug,
    rawCategory,
    sourceLine,
    imageUrl: oldItem && oldItem.imageUrl ? oldItem.imageUrl : null,
    imageGeneratedAt: oldItem && oldItem.imageGeneratedAt ? oldItem.imageGeneratedAt : null,
    imageStatus: oldItem && oldItem.imageStatus ? oldItem.imageStatus : 'missing',
    imageError: oldItem && oldItem.imageError ? oldItem.imageError : null,
    imagePrompt: oldItem && oldItem.imagePrompt ? oldItem.imagePrompt : null,
  };
}

function normalize(raw, outputPath) {
  const oldItems = existingById(outputPath);
  const rawCategories = Array.isArray(raw.unified_categories) ? raw.unified_categories : [];
  const categories = [];
  const templates = [];

  for (const rawCategory of rawCategories) {
    const name = String(rawCategory.name || '').trim();
    if (!name) continue;
    const meta = CATEGORY_META[name] || {
      slug: slugify(name, `category-${hash(name, 6)}`),
      description: `${name}相关 AI 图像提示词。`,
    };
    const category = {
      name,
      slug: meta.slug,
      count: Array.isArray(rawCategory.items) ? rawCategory.items.length : 0,
      description: meta.description,
    };
    categories.push(category);

    const usedSlugs = new Set();
    const items = Array.isArray(rawCategory.items) ? rawCategory.items : [];
    for (let i = 0; i < items.length; i += 1) {
      const probeId = `tpl-${hash(`${String(items[i].title || '').trim()}\n${String(items[i].prompt || '').trim()}\n${Number.isFinite(items[i].line) ? items[i].line : ''}`, 14)}`;
      templates.push(normalizeItem(items[i], category, i, usedSlugs, oldItems.get(probeId)));
    }
  }

  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    source: {
      totalPrompts: Number(raw.total_prompts) || templates.length,
      unifiedCategoryCount: Number(raw.unified_category_count) || categories.length,
    },
    categories,
    templates,
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = path.resolve(rootDir, args.input || defaultInput);
  const output = path.resolve(rootDir, args.output || defaultOutput);
  const raw = readJson(input);
  const data = normalize(raw, output);
  writeJsonAtomic(output, data);
  console.log(`Normalized ${data.templates.length} templates in ${data.categories.length} categories`);
  console.log(output);
}

main();
