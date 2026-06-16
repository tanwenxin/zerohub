'use strict';

const express = require('express');
const promptTemplateStore = require('../services/promptTemplateStore');

const router = express.Router();

/**
 * GET /api/prompt-templates
 * 分页查询提示词，支持 category/q/page/pageSize。
 */
router.get('/prompt-templates', (req, res) => {
  const { page, pageSize, category, q } = req.query;
  return res.json(promptTemplateStore.list({ page, pageSize, category, q }));
});

/**
 * GET /api/prompt-templates/categories
 * 返回全部模板分类。
 */
router.get('/prompt-templates/categories', (req, res) => {
  return res.json({
    categories: promptTemplateStore.categories(),
    meta: promptTemplateStore.meta,
  });
});

/**
 * GET /api/prompt-templates/category/:categorySlug/:templateSlug
 * 按分类 slug + 模板 slug 获取详情，供前端详情页使用。
 */
router.get('/prompt-templates/category/:categorySlug/:templateSlug', (req, res) => {
  const item = promptTemplateStore.findByPath(req.params.categorySlug, req.params.templateSlug);
  if (!item) return res.status(404).json({ error: '模板不存在' });
  return res.json({ template: item });
});

/**
 * GET /api/prompt-templates/:slug
 * 按模板 slug 获取详情。若不同分类存在同名 slug，推荐使用 category 路径。
 */
router.get('/prompt-templates/:slug', (req, res) => {
  const item = promptTemplateStore.findBySlug(req.params.slug);
  if (!item) return res.status(404).json({ error: '模板不存在' });
  return res.json({ template: item });
});

module.exports = router;
