'use strict';

const express = require('express');

const taskStore = require('../services/taskStore');

const router = express.Router();

function parseDays(value) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return 30;
  return Math.min(30, Math.max(1, n));
}

/**
 * GET /api/public-stats
 * 公开、脱敏的生成任务统计。只返回聚合与白名单字段，不返回 prompt、素材 URL、ownerId 或原始任务。
 */
router.get('/public-stats', (req, res) => {
  const days = parseDays(req.query.days);
  const stats = taskStore.publicStats({ days, recentLimit: 30 });
  res.json(stats);
});

module.exports = router;
