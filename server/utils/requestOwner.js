'use strict';

const OWNER_ID_RE = /^[a-zA-Z0-9_-]{16,96}$/;

function normalizeOwnerId(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return OWNER_ID_RE.test(trimmed) ? trimmed : null;
}

function getRequestOwnerId(req) {
  return normalizeOwnerId(req.get('x-agnes-session-id')) || normalizeOwnerId(req.query.sessionId);
}

function canAccessTask(req, task) {
  if (!task) return false;
  const ownerId = getRequestOwnerId(req);
  return Boolean(ownerId && task.ownerId && ownerId === task.ownerId);
}

module.exports = {
  getRequestOwnerId,
  canAccessTask,
};
