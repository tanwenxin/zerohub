'use strict';

/**
 * 图片输入处理工具：
 * - 将上传的文件 buffer 转为 Data URI Base64（供图生图/多图输入）
 * - 校验公网 URL 或图片 Data URI 是否合法
 * - 生成 payload 预览（截断 base64，便于诊断日志）
 */

function bufferToDataUri(buffer, mimeType) {
  const mime = mimeType || 'image/png';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

function isHttpUrl(value, options = {}) {
  if (typeof value !== 'string') return false;
  try {
    const u = new URL(value);
    if (options.requireHttps) return u.protocol === 'https:';
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function isDataUri(value) {
  if (typeof value !== 'string') return false;
  const match = /^data:image\/[a-z0-9.+-]+;base64,([A-Za-z0-9+/]+={0,2})$/i.exec(value.trim());
  if (!match) return false;
  const body = match[1];
  if (body.length === 0 || body.length % 4 !== 0) return false;
  try {
    return Buffer.from(body, 'base64').length > 0;
  } catch {
    return false;
  }
}

/** 校验一个图片输入项是否合法（URL 或 Data URI） */
function isValidImageInput(value, options = {}) {
  return isHttpUrl(value, options) || isDataUri(value);
}

/** 生成用于日志的安全预览，截断超长的 base64 字符串 */
function previewImageInput(value) {
  if (typeof value !== 'string') return value;
  if (value.length <= 64) return value;
  return `${value.slice(0, 48)}...(${value.length} chars)`;
}

function buildPayloadPreview(payload) {
  const preview = { ...payload };
  if (Array.isArray(preview.image)) {
    preview.image = preview.image.map(previewImageInput);
  }
  return preview;
}

module.exports = {
  bufferToDataUri,
  isHttpUrl,
  isDataUri,
  isValidImageInput,
  previewImageInput,
  buildPayloadPreview,
};
