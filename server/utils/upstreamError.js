'use strict';

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : '';
}

/**
 * 提取上游 API 返回给用户的错误信息。
 * 优先级最高的是 Agnes 常见结构 response.data.message.error。
 */
function extractUpstreamErrorMessage(data) {
  if (!data || typeof data !== 'object') return nonEmptyString(data);

  const candidates = [
    data.message && data.message.error,
    data.message && data.message.message,
    data.error && data.error.message,
    data.error,
    data.message,
    data.detail,
  ];

  for (const value of candidates) {
    const message = nonEmptyString(value);
    if (message) return message;
  }

  return '';
}

module.exports = { extractUpstreamErrorMessage };
