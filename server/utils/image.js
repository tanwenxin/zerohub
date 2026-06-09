'use strict';

/**
 * 图片输入处理工具：
 * - 将上传的文件 buffer 转为 Data URI Base64（供图生图/多图输入）
 * - 校验公网 URL 是否为合法 https 地址
 * - 生成 payload 预览（截断 base64，便于诊断日志）
 */

function bufferToDataUri(buffer, mimeType) {
  const mime = mimeType || 'image/png';
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

function isHttpUrl(value, { requireHttps = false } = {}) {
  if (typeof value !== 'string') return false;
  try {
    const u = new URL(value);
    return requireHttps ? u.protocol === 'https:' : u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function isDataUri(value) {
  return typeof value === 'string' && /^data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/]+={0,2}$/.test(value);
}

/** 校验一个图片输入项是否合法（URL 或 Data URI） */
function isValidImageInput(value, opts) {
  return isHttpUrl(value, opts) || isDataUri(value);
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
