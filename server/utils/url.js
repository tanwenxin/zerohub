'use strict';

function normalizePublicUrl(value) {
  if (typeof value !== 'string') return null;
  const url = value.trim();
  if (!url) return null;
  if (/^(https?:|data:)/i.test(url)) return url;
  if (/^\/\//.test(url)) return `https:${url}`;
  if (/^[a-z0-9.-]+\.[a-z]{2,}(?:\/|$)/i.test(url)) return `https://${url}`;
  return url;
}

module.exports = { normalizePublicUrl };
