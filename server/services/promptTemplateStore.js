'use strict';

const fs = require('fs');
const path = require('path');

const dataFile = path.resolve(__dirname, '..', 'content', 'prompt-templates.json');

function clampInt(value, fallback, min, max) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function normalizeQuery(value) {
  return String(value || '').trim().toLowerCase();
}

function publicTemplate(template) {
  return {
    id: template.id,
    slug: template.slug,
    title: template.title,
    prompt: template.prompt,
    category: template.category,
    categorySlug: template.categorySlug,
    rawCategory: template.rawCategory,
    sourceLine: template.sourceLine,
    imageUrl: template.imageUrl || null,
    imageStatus: template.imageStatus || 'missing',
    imageGeneratedAt: template.imageGeneratedAt || null,
  };
}

class PromptTemplateStore {
  constructor(filePath = dataFile) {
    this._file = filePath;
    this._mtimeMs = 0;
    this._data = { version: 1, updatedAt: null, categories: [], templates: [] };
    this._load();
  }

  _load() {
    const stat = fs.statSync(this._file);
    const raw = fs.readFileSync(this._file, 'utf8');
    const data = JSON.parse(raw);
    this._mtimeMs = stat.mtimeMs;
    this._data = {
      version: data.version || 1,
      updatedAt: data.updatedAt || null,
      categories: Array.isArray(data.categories) ? data.categories : [],
      templates: Array.isArray(data.templates) ? data.templates : [],
    };
  }

  _loadIfChanged() {
    const stat = fs.statSync(this._file);
    if (stat.mtimeMs !== this._mtimeMs) this._load();
  }

  get meta() {
    this._loadIfChanged();
    return {
      version: this._data.version,
      updatedAt: this._data.updatedAt,
      total: this._data.templates.length,
    };
  }

  categories() {
    this._loadIfChanged();
    return this._data.categories.map((category) => ({ ...category }));
  }

  list({ page = 1, pageSize = 24, category, q } = {}) {
    this._loadIfChanged();
    const currentPageSize = clampInt(pageSize, 24, 1, 60);
    let currentPage = clampInt(page, 1, 1, 100000);
    const categorySlug = normalizeQuery(category);
    const query = normalizeQuery(q);

    let items = this._data.templates;
    if (categorySlug) {
      items = items.filter((template) => template.categorySlug === categorySlug);
    }
    if (query) {
      items = items.filter((template) => {
        const haystack = [
          template.title,
          template.prompt,
          template.category,
          template.categorySlug,
          template.rawCategory,
        ].join('\n').toLowerCase();
        return haystack.includes(query);
      });
    }

    const total = items.length;
    const totalPages = Math.max(1, Math.ceil(total / currentPageSize));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * currentPageSize;
    const pageItems = items.slice(start, start + currentPageSize).map(publicTemplate);

    return {
      items: pageItems,
      pagination: {
        page: currentPage,
        pageSize: currentPageSize,
        total,
        totalPages,
        hasPrev: currentPage > 1,
        hasNext: currentPage < totalPages,
      },
      categories: this.categories(),
      meta: this.meta,
    };
  }

  findBySlug(slug) {
    this._loadIfChanged();
    const normalized = normalizeQuery(slug);
    const item = this._data.templates.find((template) => template.slug === normalized);
    return item ? publicTemplate(item) : null;
  }

  findByPath(categorySlug, templateSlug) {
    this._loadIfChanged();
    const category = normalizeQuery(categorySlug);
    const template = normalizeQuery(templateSlug);
    const item = this._data.templates.find(
      (candidate) => candidate.categorySlug === category && candidate.slug === template
    );
    return item ? publicTemplate(item) : null;
  }
}

module.exports = new PromptTemplateStore();
module.exports.PromptTemplateStore = PromptTemplateStore;
