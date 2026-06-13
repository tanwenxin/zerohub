'use strict';

const axios = require('axios');
const config = require('../config');
const { extractUpstreamErrorMessage } = require('../utils/upstreamError');

/**
 * Agnes 2.0 Flash 文本模型接口封装。
 * 严格遵循接口文档（https://agnes-ai.com/doc/agnes-20-flash）：
 * - OpenAI 兼容：POST /v1/chat/completions
 * - Bearer 鉴权，model = agnes-2.0-flash
 * - messages: [{ role, content }]；content 可为字符串或多模态数组
 *   （多模态元素支持 { type: 'text' | 'image_url', ... }）
 */

const http = axios.create({
  baseURL: config.agnes.baseUrl,
  timeout: config.text?.requestTimeoutMs || 300000,
});

/** 解析 Retry-After 响应头（支持秒数或 HTTP 日期），返回毫秒 */
function parseRetryAfter(headers) {
  if (!headers) return null;
  const raw = headers['retry-after'] || headers['Retry-After'];
  if (!raw) return null;
  const secs = Number(raw);
  if (Number.isFinite(secs)) return Math.max(0, secs * 1000);
  const date = Date.parse(raw);
  if (Number.isFinite(date)) return Math.max(0, date - Date.now());
  return null;
}

/**
 * 将 axios 错误归一化为带 status/code/retryable 的错误，并生成用户友好提示，
 * 与图片/视频客户端保持一致的错误处理范式。
 */
function normalizeError(err) {
  const e = new Error();
  if (err.response) {
    const status = err.response.status;
    e.status = status;
    e.data = err.response.data;
    e.upstreamMessage = extractUpstreamErrorMessage(err.response.data);
    const retryAfterMs = parseRetryAfter(err.response.headers);
    if (retryAfterMs != null) e.retryAfterMs = retryAfterMs;

    if (status === 503) {
      e.code = 'UPSTREAM_UNAVAILABLE';
      e.retryable = true;
      e.userMessage = e.upstreamMessage || '文本服务繁忙，请稍后重试';
      e.message = '上游文本服务暂时不可用（HTTP 503）';
    } else if (status === 429) {
      e.code = 'RATE_LIMITED';
      e.retryable = true;
      e.userMessage = e.upstreamMessage || '请求过于频繁，请稍后重试';
      e.message = '触发限流（HTTP 429）';
    } else if (status >= 500) {
      e.code = 'UPSTREAM_ERROR';
      e.retryable = true;
      e.userMessage = e.upstreamMessage || '文本服务暂时异常，请稍后重试';
      e.message = `上游服务错误（HTTP ${status}）`;
    } else if (status === 401 || status === 403) {
      e.code = 'AUTH_ERROR';
      e.retryable = false;
      e.userMessage = e.upstreamMessage || '鉴权失败，请检查 API Key 配置';
      e.message = `鉴权失败（HTTP ${status}）`;
    } else {
      e.code = 'REQUEST_ERROR';
      e.retryable = false;
      e.userMessage = e.upstreamMessage || '请求未能完成，请调整内容后重试';
      e.message = `Agnes 文本 API 错误 HTTP ${status}`;
    }
  } else if (err.code === 'ECONNABORTED') {
    e.code = 'ECONNABORTED';
    e.retryable = true;
    e.userMessage = '请求超时，请稍后重试';
    e.message = '请求 Agnes 文本 API 超时';
  } else {
    e.code = err.code || 'UNKNOWN';
    e.retryable = ['ECONNRESET', 'ETIMEDOUT', 'EAI_AGAIN'].includes(err.code);
    e.userMessage = e.retryable ? '网络异常，请稍后重试' : '调用文本服务失败，请稍后再试';
    e.message = err.message || '调用 Agnes 文本 API 失败';
  }
  return e;
}

/** 从 chat/completions 响应提取首个回复文本 */
function extractContent(data) {
  const choice = data && Array.isArray(data.choices) ? data.choices[0] : null;
  const content = choice && choice.message ? choice.message.content : null;
  return typeof content === 'string' ? content.trim() : '';
}

/** 本地无 Key 时的占位文本，便于联调验证流程 */
function mockContent(messages) {
  const last = Array.isArray(messages) ? messages[messages.length - 1] : null;
  const c = last && last.content;
  if (Array.isArray(c)) {
    // 图片理解：返回一条可直接使用、符合规范结构的提示词
    return 'A detailed scene generated from the uploaded image, main subject in sharp focus, rich background environment, cinematic realism, dramatic lighting, wide-angle composition, high visual density';
  }
  const text = typeof c === 'string' ? c : '';
  // Prompt 完整度校验：识别评估请求，返回可解析的 JSON（根据文本长度粗略估算分值）
  if (text.includes('评估以下提示词的完整度') || text.includes('评估以下提示词')) {
    const body = text.split('\n').slice(1).join(' ').trim();
    const wordCount = body.split(/[，,。\s]+/).filter(Boolean).length;
    const score = Math.max(12, Math.min(96, wordCount * 7));
    const level = score >= 80 ? 'strong' : score >= 50 ? 'fair' : 'weak';
    const missing = score >= 80 ? [] : ['光照', '镜头角度', '构图'].slice(0, score >= 50 ? 1 : 3);
    const suggestions =
      score >= 80
        ? ['描述已较完整，可直接生成']
        : ['补充光照与氛围描述', '明确镜头角度与构图', '增加材质与细节密度关键词'].slice(0, score >= 50 ? 1 : 3);
    return JSON.stringify({
      score,
      level,
      missing,
      suggestions,
      summary: score >= 80 ? '提示词维度充分，可直接提交生成。' : '提示词较为简略，建议补全关键视觉维度。',
    });
  }
  return `${text}, main subject clearly defined, detailed environment, cinematic realism, dramatic lighting, wide-angle composition, ultra-detailed, high visual density`;
}

/**
 * 调用一次文本模型对话补全。
 * @param {object} input
 * @param {Array} input.messages OpenAI 兼容 messages 数组
 * @param {object} [opts]
 * @param {string} [opts.apiKey] 指定使用的 API Key（共享池调度时传入）；缺省用配置首个
 * @returns {Promise<string>} 模型返回的首条回复文本（已 trim）
 */
async function chat({ messages }, opts = {}) {
  if (config.agnes.mock) {
    await new Promise((r) => setTimeout(r, 800));
    return mockContent(messages);
  }

  const apiKey = opts.apiKey || config.agnes.apiKey;
  if (!apiKey) {
    const e = new Error('未配置 AGNES_API_KEY，请在 server/.env 中填写');
    e.status = 401;
    e.code = 'AUTH_ERROR';
    e.userMessage = '鉴权失败，请检查 API Key 配置';
    throw e;
  }

  const body = {
    model: config.text.model,
    messages,
    max_tokens: config.text.maxTokens,
    temperature: config.text.temperature,
  };

  try {
    const res = await http.post(config.text.endpoint, body, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    const content = extractContent(res.data);
    if (!content) {
      const e = new Error('文本模型未返回有效内容');
      e.status = 502;
      e.code = 'BAD_UPSTREAM_RESPONSE';
      e.userMessage = '文本服务返回异常，请稍后再试';
      throw e;
    }
    return content;
  } catch (err) {
    if (err.code === 'BAD_UPSTREAM_RESPONSE') throw err;
    throw normalizeError(err);
  }
}

module.exports = { chat };
