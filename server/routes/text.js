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

module.exports = router;
