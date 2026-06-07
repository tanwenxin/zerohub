'use strict';

const axios = require('axios');
const config = require('../config');
const logger = require('./logger');

/**
 * imgbb 图床上传服务。
 *
 * 背景：Agnes 视频接口的图片输入仅支持公网 URL，不接受 base64/Data URI。
 * 因此本地上传的图片需先经 imgbb（https://api.imgbb.com/）转存为公网 URL，
 * 再传给 Agnes 调用。
 *
 * 接口：POST https://api.imgbb.com/1/upload?key=API_KEY
 *   - image：base64 字符串（不含 data URI 前缀）/ 图片 URL / 二进制
 *   - 返回：{ success: true, data: { url, display_url, ... } }
 *   - 单图上限 32MB
 */

const http = axios.create({
  baseURL: config.imgbb.baseUrl,
  timeout: config.imgbb.requestTimeoutMs,
});

/** 从 Data URI 中剥离出纯 base64 内容；非 Data URI 原样返回 */
function stripDataUri(value) {
  if (typeof value !== 'string') return '';
  const comma = value.indexOf(',');
  if (value.startsWith('data:') && comma !== -1) {
    return value.slice(comma + 1);
  }
  return value;
}

/**
 * 上传单张图片（Data URI / 纯 base64）到 imgbb，返回公网 URL。
 * @param {string} dataUri data:image/...;base64,xxx 或纯 base64
 * @param {object} [opts]
 * @param {string} [opts.name] 文件名（可选）
 * @returns {Promise<string>} 公网图片 URL
 */
async function uploadImage(dataUri, opts = {}) {
  if (!config.imgbb.apiKey) {
    const e = new Error('未配置 IMGBB_API_KEY，无法上传本地图片');
    e.code = 'IMGBB_NOT_CONFIGURED';
    e.userMessage = '服务未配置图床密钥，请改用公网图片 URL 或联系管理员';
    e.retryable = false;
    throw e;
  }

  const base64 = stripDataUri(dataUri);
  if (!base64) {
    const e = new Error('图片内容为空，无法上传');
    e.code = 'IMGBB_EMPTY';
    e.userMessage = '图片内容无效';
    e.retryable = false;
    throw e;
  }

  const form = new URLSearchParams();
  form.append('key', config.imgbb.apiKey);
  form.append('image', base64);
  if (opts.name) form.append('name', opts.name);
  if (config.imgbb.expirationSec > 0) {
    form.append('expiration', String(config.imgbb.expirationSec));
  }

  try {
    const res = await http.post('/1/upload', form.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const url = res.data && res.data.data && res.data.data.url;
    if (!res.data || res.data.success !== true || !url) {
      const e = new Error('imgbb 返回异常，未获取到图片 URL');
      e.code = 'IMGBB_BAD_RESPONSE';
      e.userMessage = '图床返回异常，请稍后再试';
      e.retryable = true;
      throw e;
    }
    return url;
  } catch (err) {
    if (err.code && err.code.startsWith('IMGBB_')) throw err;
    const status = err.response && err.response.status;
    const e = new Error(`imgbb 上传失败${status ? `（HTTP ${status}）` : ''}：${err.message}`);
    e.code = 'IMGBB_UPLOAD_FAILED';
    e.status = status || null;
    // 4xx 多为参数/密钥问题，不可重试；5xx/网络问题可重试
    e.retryable = !status || status >= 500;
    e.userMessage = '图片上传图床失败，请稍后重试';
    logger.error('imgbb.upload_failed', { status: status || null, message: err.message });
    throw e;
  }
}

/**
 * 批量处理图片输入：Data URI 上传到 imgbb 换公网 URL；已是 http(s) URL 的原样保留。
 * 保持原数组顺序。
 * @param {string[]} images 混合的 URL / Data URI 数组
 * @returns {Promise<string[]>} 全部为公网 URL 的数组
 */
async function resolveImagesToUrls(images) {
  const list = Array.isArray(images) ? images : [];
  const out = [];
  for (let i = 0; i < list.length; i += 1) {
    const item = list[i];
    if (typeof item === 'string' && /^https?:\/\//i.test(item)) {
      out.push(item);
    } else {
      const url = await uploadImage(item, { name: `agnes-video-${Date.now()}-${i}` });
      logger.info('imgbb.uploaded', { index: i, url });
      out.push(url);
    }
  }
  return out;
}

module.exports = {
  uploadImage,
  resolveImagesToUrls,
};
