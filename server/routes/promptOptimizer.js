'use strict';

const express = require('express');

const config = require('../config');
const textClient = require('../services/textClient');
const logger = require('../services/logger');
const { keyPool } = require('../services/keyPool');
const { assertGenerationTextAllowed } = require('../services/contentModeration');
const {
  publicOptions,
  getRule,
  validProviderIds,
  validVersionsFor,
  fallbackOptimize,
  cleanOptimizedPrompt,
  buildPromptOptimizerMessages,
} = require('../services/promptOptimizer');

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

async function chatWithTextKeyRotation(messages, meta = {}) {
  const maxAttempts = Math.max(1, keyPool.keyCount);
  let lastErr = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const apiKey = await keyPool.acquire('text');
    const keyIndex = keyPool.keys.indexOf(apiKey);
    try {
      const result = await textClient.chat({ messages }, { apiKey });
      if (attempt > 1) logger.info('prompt_optimizer.key_rotation_recovered', { ...meta, attempt, keyIndex });
      return result;
    } catch (err) {
      lastErr = err;
      const limited = err.status === 429 || err.code === 'RATE_LIMITED';
      if (!limited) throw err;
      keyPool.markLimited(apiKey, 'text', err.retryAfterMs);
      logger.warn('prompt_optimizer.key_rotation_retry', {
        ...meta,
        attempt,
        keyIndex,
        retryAfterMs: err.retryAfterMs || null,
      });
      if (attempt >= maxAttempts) break;
    }
  }

  throw lastErr || new Error('提示词优化调用失败');
}

router.get('/prompt-optimizer/options', (req, res) => {
  return res.json(publicOptions());
});

router.post('/prompt-optimizer/optimize', async (req, res) => {
  const { prompt, provider, version } = req.body || {};
  const promptText = typeof prompt === 'string' ? prompt.trim() : '';
  const providerId = typeof provider === 'string' ? provider.trim() : '';
  const versionValue = typeof version === 'string' ? version.trim() : '';

  if (!promptText) {
    return sendDirectError(res, { status: 400, code: 'REQUEST_ERROR', message: 'prompt 不能为空' });
  }
  try {
    assertGenerationTextAllowed({ prompt: promptText });
  } catch (err) {
    return sendDirectError(res, err);
  }

  const rule = getRule(providerId, versionValue);
  if (!rule) {
    const validProviders = validProviderIds().join('/');
    const validVersions = providerId ? validVersionsFor(providerId).join('/') : '';
    return sendDirectError(res, {
      status: 400,
      code: 'REQUEST_ERROR',
      message: validVersions
        ? `provider/version 非法，provider 应为 ${validProviders}，当前 provider 可用 version：${validVersions}`
        : `provider 非法，应为 ${validProviders}`,
    });
  }

  if (!config.isApiKeyConfigured && !config.agnes.mock) {
    const optimized = fallbackOptimize(rule, promptText);
    logger.warn('prompt_optimizer.fallback_no_api_key', { provider: providerId, version: versionValue });
    return res.json({ prompt: optimized, provider: providerId, version: versionValue, fallback: true });
  }

  const messages = buildPromptOptimizerMessages(rule, promptText);

  try {
    const rawOptimized = await chatWithTextKeyRotation(messages, {
      action: 'prompt_optimizer',
      provider: providerId,
      version: versionValue,
    });
    const optimized = cleanOptimizedPrompt(rawOptimized);
    logger.info('prompt_optimizer.completed', { provider: providerId, version: versionValue });
    return res.json({ prompt: optimized, provider: providerId, version: versionValue });
  } catch (err) {
    if (err.code === 'ENOTFOUND' || err.code === 'EAI_AGAIN') {
      const optimized = fallbackOptimize(rule, promptText);
      logger.warn('prompt_optimizer.fallback_network', { provider: providerId, version: versionValue, code: err.code });
      return res.json({ prompt: optimized, provider: providerId, version: versionValue, fallback: true });
    }
    logger.error('prompt_optimizer.failed', {
      provider: providerId,
      version: versionValue,
      code: err.code || null,
      status: err.status || null,
      message: err.message,
      userMessage: err.userMessage || null,
      upstreamMessage: err.upstreamMessage || null,
    });
    return sendDirectError(res, err);
  }
});

module.exports = router;
