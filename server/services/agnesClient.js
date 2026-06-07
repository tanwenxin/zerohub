'use strict';

const axios = require('axios');
const config = require('../config');
const { normalizePublicUrl } = require('../utils/url');

/**
 * Agnes Image 2.0 Flash 接口封装。
 * 严格遵循接口文档：
 * - 文生图：不传 image
 * - 图生图/多图：传顶层 image 数组；不传 tags
 * - response_format 必须放在 extra_body（放顶层会 400）
 * - 输出统一请求 url；如需 base64 可设置 b64_json
 */

const http = axios.create({
  baseURL: config.agnes.baseUrl,
  timeout: config.agnes.requestTimeoutMs,
});

/**
 * 尺寸适配：把请求尺寸约束在合理范围内，降低上游 GPU 资源占用。
 * - 解析 "WxH"，非法则回退默认；
 * - 单边裁剪到 [minSide, maxSide]；
 * - 若总像素超过 maxPixels，按比例等比缩小；
 * - 对齐到 sizeStep 的倍数（多数模型要求 8 的倍数）。
 * @returns {{ size: string, adjusted: boolean, original: string }}
 */
function normalizeSize(rawSize) {
  const { maxPixels, maxSide, minSide, sizeStep } = config.image;
  const original = typeof rawSize === 'string' ? rawSize : '1024x1024';
  const m = /^(\d+)\s*[xX]\s*(\d+)$/.exec(original.trim());
  let w = m ? parseInt(m[1], 10) : 1024;
  let h = m ? parseInt(m[2], 10) : 1024;
  if (!Number.isFinite(w) || w <= 0) w = 1024;
  if (!Number.isFinite(h) || h <= 0) h = 1024;

  // 1) 单边上限（等比缩放，保持长宽比）
  const sideScale = Math.min(1, maxSide / w, maxSide / h);
  w = Math.round(w * sideScale);
  h = Math.round(h * sideScale);

  // 2) 总像素上限（等比缩放）
  const pixels = w * h;
  if (pixels > maxPixels) {
    const pScale = Math.sqrt(maxPixels / pixels);
    w = Math.round(w * pScale);
    h = Math.round(h * pScale);
  }

  // 3) 对齐步长 + 下限
  const align = (v) => {
    let x = Math.round(v / sizeStep) * sizeStep;
    if (x < minSide) x = minSide;
    if (x > maxSide) x = Math.floor(maxSide / sizeStep) * sizeStep;
    return x;
  };
  w = align(w);
  h = align(h);

  const size = `${w}x${h}`;
  return { size, adjusted: size !== original, original };
}

/**
 * 构造符合文档规范的请求体。
 * @param {object} input
 * @param {'text2img'|'img2img'|'multi'} input.type
 * @param {string} input.prompt
 * @param {string} [input.size]
 * @param {string[]} [input.image] URL 或 Data URI 数组
 * @param {'url'|'b64_json'} [input.responseFormat]
 */
function buildRequestBody({ type, prompt, size, image, responseFormat = 'url' }) {
  const body = {
    model: config.agnes.model,
    prompt,
  };
  if (size) body.size = size;

  // extra_body 承载 response_format（文档强约束）
  body.extra_body = { response_format: responseFormat };

  if (type !== 'text2img') {
    // 图生图 / 多图：顶层 image 数组；不传 tags
    body.image = Array.isArray(image) ? image : [];
  }

  return body;
}

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
 * 将 axios 错误归一化为带 status/code/retryable 的错误，供队列判断是否重试，
 * 并为上游不可用（503）等场景生成对用户友好的提示。
 */
function normalizeError(err) {
  const e = new Error();
  if (err.response) {
    const status = err.response.status;
    e.status = status;
    e.data = err.response.data;
    const retryAfterMs = parseRetryAfter(err.response.headers);
    if (retryAfterMs != null) e.retryAfterMs = retryAfterMs;

    if (status === 503) {
      // 上游推理服务（GPU）临时不可用——高峰期资源打满
      e.code = 'UPSTREAM_UNAVAILABLE';
      e.retryable = true;
      e.userMessage = '图像服务繁忙，正在自动重试，请稍候…';
      e.message = '上游图像服务暂时不可用（HTTP 503）';
    } else if (status === 429) {
      e.code = 'RATE_LIMITED';
      e.retryable = true;
      e.userMessage = '请求过于频繁，正在自动重试，请稍候…';
      e.message = '触发限流（HTTP 429）';
    } else if (status >= 500) {
      e.code = 'UPSTREAM_ERROR';
      e.retryable = true;
      e.userMessage = '图像服务暂时异常，正在自动重试，请稍候…';
      e.message = `上游服务错误（HTTP ${status}）`;
    } else if (status === 401 || status === 403) {
      e.code = 'AUTH_ERROR';
      e.retryable = false;
      e.userMessage = '鉴权失败，请检查 API Key 配置';
      e.message = `鉴权失败（HTTP ${status}）`;
    } else {
      e.code = 'REQUEST_ERROR';
      e.retryable = false;
      e.userMessage = '请求未能完成，请调整参数后重试';
      e.message = `Agnes API 错误 HTTP ${status}`;
    }
  } else if (err.code === 'ECONNABORTED') {
    e.code = 'ECONNABORTED';
    e.retryable = true;
    e.userMessage = '请求超时，正在自动重试，请稍候…';
    e.message = '请求 Agnes API 超时';
  } else {
    e.code = err.code || 'UNKNOWN';
    e.retryable = ['ECONNRESET', 'ETIMEDOUT', 'EAI_AGAIN'].includes(err.code);
    e.userMessage = e.retryable
      ? '网络异常，正在自动重试，请稍候…'
      : '调用图像服务失败，请稍后再试';
    e.message = err.message || '调用 Agnes API 失败';
  }
  return e;
}

/** 解析响应为统一结构 */
function parseResponse(data) {
  const items = Array.isArray(data && data.data) ? data.data : [];
  return {
    created: data && data.created,
    images: items.map((it) => ({
      url: normalizePublicUrl(it.url),
      b64: it.b64_json || null,
      revisedPrompt: it.revised_prompt || null,
    })),
  };
}

/**
 * 调用一次生成接口。
 * @param {object} input 生成参数
 * @param {object} [opts]
 * @param {string} [opts.apiKey] 指定使用的 API Key（共享池调度时传入）；缺省用配置首个
 * @returns {Promise<{created:number, images:Array}>}
 */
async function generate(input, opts = {}) {
  // 模拟模式：用于本地无 Key 时验证排队/进度/下载/存储流程
  if (config.agnes.mock) {
    await new Promise((r) => setTimeout(r, 1500));
    // 故障注入：按概率模拟上游 503，用于验证重试与恢复（AGNES_MOCK_FAIL_RATE）
    if (config.agnes.mockFailRate > 0 && Math.random() < config.agnes.mockFailRate) {
      throw normalizeError({
        response: {
          status: 503,
          headers: {},
          data: {
            error: {
              message: 'ServiceUnavailableError - Model service temporarily unavailable',
              type: 'upstream_error',
              code: '503',
            },
          },
        },
      });
    }
    const [w, h] = (input.size || '512x512').split('x');
    const seed = Math.floor(Math.random() * 100000);
    return {
      created: Math.floor(Date.now() / 1000),
      images: [
        {
          url: `https://picsum.photos/seed/${seed}/${w || 512}/${h || 512}`,
          b64: null,
          revisedPrompt: null,
        },
      ],
    };
  }

  const apiKey = opts.apiKey || config.agnes.apiKey;
  if (!apiKey) {
    const e = new Error('未配置 AGNES_API_KEY，请在 server/.env 中填写');
    e.status = 401;
    throw e;
  }

  const body = buildRequestBody(input);
  try {
    const res = await http.post(config.agnes.endpoint, body, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return parseResponse(res.data);
  } catch (err) {
    throw normalizeError(err);
  }
}

module.exports = { generate, buildRequestBody, normalizeSize };
