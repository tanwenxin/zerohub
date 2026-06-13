'use strict';

const express = require('express');

const config = require('../config');
const textClient = require('../services/textClient');
const logger = require('../services/logger');
const { keyPool } = require('../services/keyPool');
const { isValidImageInput } = require('../utils/image');
const {
  isValidMode,
  ALL_MODES,
  buildOptimizeMessages,
  buildUnderstandMessages,
  buildCompletenessMessages,
} = require('../services/promptTemplates');

const router = express.Router();

function sendDirectError(res, err) {
  const status = err.status || 500;
  return res.status(status).json({
    error: {
      message: err.userMessage || err.message || '请求失败',
      code: err.code || String(status),
      status,
    },
  });
}

function ensureApiConfigured(res) {
  if (!config.isApiKeyConfigured && !config.agnes.mock) {
    sendDirectError(res, {
      status: 401,
      code: 'AUTH_ERROR',
      message: '未配置 AGNES_API_KEY',
      userMessage: '鉴权失败，请检查 API Key 配置',
    });
    return false;
  }
  return true;
}

/**
 * POST /api/text/optimize-prompt
 * body: { prompt: string, mode: 'text2img'|'img2img'|'multi'|'text2vid'|'img2vid'|'multivid'|'keyframes' }
 * 同步返回 { prompt: <符合该模式规范的提示词> }
 */
router.post('/text/optimize-prompt', async (req, res) => {
  if (!ensureApiConfigured(res)) return;

  const { prompt, mode } = req.body || {};
  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return sendDirectError(res, { status: 400, code: 'REQUEST_ERROR', message: 'prompt 不能为空' });
  }
  if (!isValidMode(mode)) {
    return sendDirectError(res, {
      status: 400,
      code: 'REQUEST_ERROR',
      message: `mode 非法，应为 ${ALL_MODES.join('/')}`,
    });
  }

  const messages = buildOptimizeMessages(mode, prompt.trim());

  try {
    const apiKey = await keyPool.acquire('text');
    const optimized = await textClient.chat({ messages }, { apiKey });
    logger.info('text.optimize.completed', { mode });
    return res.json({ prompt: optimized });
  } catch (err) {
    logger.error('text.optimize.failed', { mode, code: err.code || null, message: err.message });
    return sendDirectError(res, err);
  }
});

/**
 * POST /api/text/understand-image
 * body: { image: string, mode: <生成模式>, prompt?: string }
 * 分析图片（可结合用户已输入的 prompt），返回符合该模式规范的提示词。
 * 同步返回 { result: <提示词> }
 */
router.post('/text/understand-image', async (req, res) => {
  if (!ensureApiConfigured(res)) return;

  const { image, mode, prompt } = req.body || {};
  if (!image || typeof image !== 'string' || !image.trim()) {
    return sendDirectError(res, { status: 400, code: 'REQUEST_ERROR', message: 'image 不能为空' });
  }
  if (!isValidMode(mode)) {
    return sendDirectError(res, {
      status: 400,
      code: 'REQUEST_ERROR',
      message: `mode 非法，应为 ${ALL_MODES.join('/')}`,
    });
  }
  const imageInput = image.trim();
  if (!isValidImageInput(imageInput, { requireHttps: true })) {
    return sendDirectError(res, {
      status: 400,
      code: 'REQUEST_ERROR',
      message: '存在非法图片输入，必须为 HTTPS URL 或图片 Data URI Base64',
    });
  }

  const userPrompt = typeof prompt === 'string' ? prompt : '';
  const messages = buildUnderstandMessages(mode, imageInput, userPrompt);

  try {
    const apiKey = await keyPool.acquire('text');
    const result = await textClient.chat({ messages }, { apiKey });
    logger.info('text.understand.completed', { mode });
    return res.json({ result });
  } catch (err) {
    logger.error('text.understand.failed', { mode, code: err.code || null, message: err.message });
    return sendDirectError(res, err);
  }
});

/**
 * 解析文本模型返回的完整度 JSON：容错处理可能的 markdown 代码块包裹与字段缺失，
 * 并对取值做归一化（score 限制 0-100，level 校验，数组裁剪）。
 */
function parseCompleteness(raw) {
  let text = String(raw || '').trim();
  // 去除可能的 ```json ... ``` 代码块包裹
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) text = fenced[1].trim();
  // 截取首个 JSON 对象
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start >= 0 && end > start) text = text.slice(start, end + 1);

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return null;
  }

  let score = Number(data.score);
  if (!Number.isFinite(score)) score = 0;
  score = Math.max(0, Math.min(100, Math.round(score)));

  let level = typeof data.level === 'string' ? data.level.toLowerCase() : '';
  if (!['weak', 'fair', 'strong'].includes(level)) {
    level = score >= 80 ? 'strong' : score >= 50 ? 'fair' : 'weak';
  }

  const toStringArray = (value, max) =>
    (Array.isArray(value) ? value : [])
      .map((item) => String(item || '').trim())
      .filter(Boolean)
      .slice(0, max);

  return {
    score,
    level,
    missing: toStringArray(data.missing, 4),
    suggestions: toStringArray(data.suggestions, 3),
    summary: typeof data.summary === 'string' ? data.summary.trim() : '',
  };
}

/**
 * POST /api/text/prompt-completeness
 * body: { prompt: string, mode: <生成模式> }
 * 调用文本模型评估提示词完整度，返回结构化结果：
 * { score: number, level: 'weak'|'fair'|'strong', missing: string[], suggestions: string[], summary: string }
 */
router.post('/text/prompt-completeness', async (req, res) => {
  if (!ensureApiConfigured(res)) return;

  const { prompt, mode } = req.body || {};
  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return sendDirectError(res, { status: 400, code: 'REQUEST_ERROR', message: 'prompt 不能为空' });
  }
  if (!isValidMode(mode)) {
    return sendDirectError(res, {
      status: 400,
      code: 'REQUEST_ERROR',
      message: `mode 非法，应为 ${ALL_MODES.join('/')}`,
    });
  }

  const messages = buildCompletenessMessages(mode, prompt.trim());

  try {
    const apiKey = await keyPool.acquire('text');
    const raw = await textClient.chat({ messages }, { apiKey });
    const parsed = parseCompleteness(raw);
    if (!parsed) {
      return sendDirectError(res, {
        status: 502,
        code: 'BAD_UPSTREAM_RESPONSE',
        message: '完整度评估返回格式异常',
        userMessage: '完整度评估暂不可用，请稍后再试',
      });
    }
    logger.info('text.completeness.completed', { mode, score: parsed.score, level: parsed.level });
    return res.json(parsed);
  } catch (err) {
    logger.error('text.completeness.failed', { mode, code: err.code || null, message: err.message });
    return sendDirectError(res, err);
  }
});

module.exports = router;
