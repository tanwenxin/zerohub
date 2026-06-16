'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const config = require('../config');
const logger = require('./logger');
const { normalizePublicUrl } = require('../utils/url');

const PUBLIC_STATUSES = ['pending', 'queued', 'running', 'done', 'error'];
const PUBLIC_CATEGORIES = ['image', 'video'];
const PUBLIC_TYPES = ['text2img', 'img2img', 'multi', 'text2vid', 'img2vid', 'multivid', 'keyframes'];
const DAY_MS = 24 * 60 * 60 * 1000;

function clampInt(value, fallback, min, max) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function dayKey(timestamp) {
  return new Date(timestamp).toISOString().slice(0, 10);
}

function emptyBucket(key) {
  const byStatus = {};
  for (const status of PUBLIC_STATUSES) byStatus[status] = 0;
  return {
    key,
    total: 0,
    done: 0,
    error: 0,
    active: 0,
    successRate: 0,
    avgDurationMs: null,
    p50DurationMs: null,
    p95DurationMs: null,
    byStatus,
    _durations: [],
  };
}

function addToBucket(bucket, task) {
  const status = PUBLIC_STATUSES.includes(task.status) ? task.status : 'error';
  bucket.total += 1;
  bucket.byStatus[status] = (bucket.byStatus[status] || 0) + 1;
  if (status === 'done') bucket.done += 1;
  else if (status === 'error') bucket.error += 1;
  else bucket.active += 1;
  if (Number.isFinite(task.durationMs) && task.durationMs >= 0) {
    bucket._durations.push(task.durationMs);
  }
}

function percentile(sorted, ratio) {
  if (!sorted.length) return null;
  const index = Math.min(sorted.length - 1, Math.max(0, Math.ceil(sorted.length * ratio) - 1));
  return sorted[index];
}

function finalizeBucket(bucket) {
  const durations = bucket._durations.slice().sort((a, b) => a - b);
  const durationTotal = durations.reduce((sum, value) => sum + value, 0);
  const out = { ...bucket };
  delete out._durations;
  out.successRate = out.total > 0 ? out.done / out.total : 0;
  out.avgDurationMs = durations.length ? Math.round(durationTotal / durations.length) : null;
  out.p50DurationMs = percentile(durations, 0.5);
  out.p95DurationMs = percentile(durations, 0.95);
  return out;
}

function incrementCounter(map, key, patch = {}) {
  const normalizedKey = key == null || key === '' ? 'unknown' : String(key);
  const current = map.get(normalizedKey) || { key: normalizedKey, count: 0, ...patch };
  current.count += 1;
  for (const [patchKey, value] of Object.entries(patch)) {
    if (current[patchKey] == null) current[patchKey] = value;
  }
  map.set(normalizedKey, current);
}

function topCounters(map, limit = 8) {
  return Array.from(map.values())
    .sort((a, b) => b.count - a.count || String(a.key).localeCompare(String(b.key)))
    .slice(0, limit);
}

/**
 * 任务存储（JSON 文件持久化）。
 *
 * 设计：
 * - 任务在「创建时」即落盘（前端发起即持久化），含状态、进度、结果、错误、诊断；
 * - 状态机：pending(等待配额) -> queued -> running -> (retrying) -> done | error；
 * - 写盘做节流合并（flushIntervalMs），降低高频更新的 IO 压力；
 * - 启动时加载历史任务；对「中断态」（pending/queued/running）的任务统一置为 error，
 *   因为进程重启后内存中的执行链路已丢失，需用户在历史中点击「刷新/重试」恢复；
 * - GC：按 TTL 与最大条数清理，避免文件无限膨胀。
 *
 * 注意：为控制文件体积，持久化时会剥离体积较大的字段（如上传图片的 base64 预览过长部分），
 * 结果中的图片以 URL 为主；base64 结果不落盘（仅保留运行期内存）。
 */
class TaskStore {
  constructor() {
    this._file = config.persistence.file;
    this._ttlMs = config.persistence.ttlMs;
    this._maxItems = config.persistence.maxItems;
    this._flushIntervalMs = config.persistence.flushIntervalMs;

    this._tasks = new Map();
    this._dirty = false;
    this._flushTimer = null;

    this._load();
  }

  // ===== 持久化读写 =====

  _load() {
    try {
      if (!fs.existsSync(this._file)) {
        this._ensureDir();
        return;
      }
      const raw = fs.readFileSync(this._file, 'utf8');
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return;

      let interrupted = 0;
      for (const task of arr) {
        if (!task || !task.id) continue;
        this._normalizeTask(task);
        // 进程重启：未完成的任务执行链路已丢失，标记为失败，供用户刷新/重试
        if (['pending', 'queued', 'running'].includes(task.status)) {
          task.status = 'error';
          task.progress = 100;
          task.error = task.error || {
            message: '服务重启导致任务中断',
            userMessage: '任务因服务重启而中断，请点击刷新重新发起',
            code: 'INTERRUPTED',
            retryable: true,
            status: null,
            data: null,
          };
          interrupted += 1;
        }
        this._tasks.set(task.id, task);
      }
      logger.info('taskstore.loaded', { count: this._tasks.size, interrupted });
      if (interrupted > 0) this._scheduleFlush();
    } catch (err) {
      logger.error('taskstore.load_failed', { message: err.message });
    }
  }

  _ensureDir() {
    try {
      const dir = path.dirname(this._file);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    } catch {
      /* 忽略目录创建失败 */
    }
  }

  _scheduleFlush() {
    this._dirty = true;
    if (this._flushTimer) return;
    this._flushTimer = setTimeout(() => {
      this._flushTimer = null;
      this._flush();
    }, this._flushIntervalMs);
    // 不阻止进程退出
    if (this._flushTimer.unref) this._flushTimer.unref();
  }

  /** 立即写盘（同步），用于进程退出钩子 */
  flushNow() {
    if (this._flushTimer) {
      clearTimeout(this._flushTimer);
      this._flushTimer = null;
    }
    this._flush();
  }

  _flush() {
    if (!this._dirty) return;
    this._dirty = false;
    try {
      this._ensureDir();
      // 按更新时间倒序，截断到最大条数
      const arr = Array.from(this._tasks.values())
        .sort((a, b) => b.updatedAt - a.updatedAt)
        .slice(0, this._maxItems)
        .map((t) => this._serialize(t));
      const tmp = `${this._file}.tmp`;
      fs.writeFileSync(tmp, JSON.stringify(arr), 'utf8');
      fs.renameSync(tmp, this._file); // 原子替换，避免半截文件
    } catch (err) {
      logger.error('taskstore.flush_failed', { message: err.message });
    }
  }

  /** 序列化：剥离过大的 base64 结果，避免文件膨胀（仅保留可持久的 URL 结果） */
  _serialize(task) {
    const copy = { ...task };
    if (copy.result && Array.isArray(copy.result.images)) {
      copy.result = {
        ...copy.result,
        images: copy.result.images.map((img) => ({
          url: normalizePublicUrl(img.url),
          // base64 体积过大，不落盘
          b64: null,
          revisedPrompt: img.revisedPrompt || null,
        })),
      };
    }
    return copy;
  }

  _normalizeTask(task) {
    if (task.result && Array.isArray(task.result.images)) {
      task.result = {
        ...task.result,
        images: task.result.images.map((img) => ({
          ...img,
          url: normalizePublicUrl(img && img.url),
        })),
      };
    }
  }

  // ===== 任务 CRUD =====

  /**
   * 创建任务。
   * @param {string} type 生成类型
   * @param {object} payloadPreview 诊断预览
   * @param {object} [meta] 额外元信息：{ category, status, params, ownerId }
   */
  create(type, payloadPreview, meta = {}) {
    const id = crypto.randomUUID();
    const now = Date.now();
    const task = {
      id,
      type,
      category: meta.category || 'image', // image | video
      ownerId: meta.ownerId || null,
      status: meta.status || 'pending', // pending -> queued -> running -> done|error
      progress: 0,
      createdAt: now,
      updatedAt: now,
      // 重新发起任务所需的参数（不含文件，仅 URL/文本类），供历史「刷新→重试」使用
      params: meta.params || null,
      apiKeyIndex: null, // 实际分配到的 key 序号（调度后回填）
      result: null,
      error: null,
      debugInfo: {
        payloadPreview,
        events: [],
      },
    };
    this._tasks.set(id, task);
    this._gc();
    this._scheduleFlush();
    return task;
  }

  get(id) {
    return this._tasks.get(id) || null;
  }

  /** 返回任务列表（按更新时间倒序），可选按 ownerId/category 过滤与数量限制 */
  list({ ownerId, category, limit = 100 } = {}) {
    let arr = Array.from(this._tasks.values());
    if (ownerId) arr = arr.filter((t) => t.ownerId === ownerId);
    if (category) arr = arr.filter((t) => t.category === category);
    arr.sort((a, b) => b.updatedAt - a.updatedAt);
    return arr.slice(0, limit);
  }

  /** 构建公开统计：只返回脱敏聚合字段，禁止暴露 prompt、URL、ownerId 或原始任务对象 */
  publicStats({ days = 30, recentLimit = 30 } = {}) {
    const rangeDays = clampInt(days, 30, 1, 30);
    const recentTaskLimit = clampInt(recentLimit, 30, 1, 100);
    const now = Date.now();
    const since = now - rangeDays * DAY_MS;

    const summary = emptyBucket('summary');
    const byCategory = new Map(PUBLIC_CATEGORIES.map((category) => [category, emptyBucket(category)]));
    const byType = new Map(PUBLIC_TYPES.map((type) => [type, emptyBucket(type)]));
    const byStatus = {};
    for (const status of PUBLIC_STATUSES) byStatus[status] = 0;

    const daily = new Map();
    for (let i = rangeDays - 1; i >= 0; i -= 1) {
      const date = dayKey(now - i * DAY_MS);
      daily.set(date, {
        date,
        total: 0,
        done: 0,
        error: 0,
        active: 0,
        image: 0,
        video: 0,
      });
    }

    const errors = new Map();
    const phases = new Map();
    const recentTasks = [];

    const tasks = Array.from(this._tasks.values())
      .filter((task) => task && task.createdAt >= since)
      .sort((a, b) => b.createdAt - a.createdAt);

    for (const task of tasks) {
      const status = PUBLIC_STATUSES.includes(task.status) ? task.status : 'error';
      const category = PUBLIC_CATEGORIES.includes(task.category) ? task.category : 'image';
      const type = PUBLIC_TYPES.includes(task.type) ? task.type : 'unknown';

      addToBucket(summary, { ...task, status });
      addToBucket(byCategory.get(category), { ...task, status });
      if (!byType.has(type)) byType.set(type, emptyBucket(type));
      addToBucket(byType.get(type), { ...task, status });
      byStatus[status] = (byStatus[status] || 0) + 1;

      const date = dayKey(task.createdAt);
      const dailyItem = daily.get(date);
      if (dailyItem) {
        dailyItem.total += 1;
        dailyItem[category] = (dailyItem[category] || 0) + 1;
        if (status === 'done') dailyItem.done += 1;
        else if (status === 'error') dailyItem.error += 1;
        else dailyItem.active += 1;
      }

      if (task.error) {
        incrementCounter(errors, task.error.code || 'UNKNOWN', {
          status: task.error.status || null,
        });
      }

      const events = task.debugInfo && Array.isArray(task.debugInfo.events) ? task.debugInfo.events : [];
      for (const event of events) {
        if (event && event.phase) incrementCounter(phases, event.phase);
      }
      const lastEvent = events.length ? events[events.length - 1] : null;

      if (recentTasks.length < recentTaskLimit) {
        recentTasks.push({
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
          category,
          type,
          status,
          progress: Number.isFinite(task.progress) ? task.progress : 0,
          durationMs: Number.isFinite(task.durationMs) ? task.durationMs : null,
          errorCode: task.error && task.error.code ? task.error.code : null,
          errorStatus: task.error && task.error.status ? task.error.status : null,
          eventCount: events.length,
          lastPhase: lastEvent && lastEvent.phase ? lastEvent.phase : null,
        });
      }
    }

    return {
      rangeDays,
      generatedAt: now,
      since,
      retentionDays: Math.round(this._ttlMs / DAY_MS),
      retentionMaxItems: this._maxItems,
      summary: finalizeBucket(summary),
      byCategory: Array.from(byCategory.values()).map(finalizeBucket),
      byType: Array.from(byType.values()).map(finalizeBucket).filter((item) => item.total > 0 || PUBLIC_TYPES.includes(item.key)),
      byStatus,
      daily: Array.from(daily.values()),
      errors: topCounters(errors),
      phases: topCounters(phases),
      recentTasks,
    };
  }

  update(id, patch) {
    const task = this._tasks.get(id);
    if (!task) return null;
    Object.assign(task, patch, { updatedAt: Date.now() });
    this._scheduleFlush();
    return task;
  }

  addEvent(id, event) {
    const task = this._tasks.get(id);
    if (!task) return;
    task.debugInfo.events.push({ at: Date.now(), ...event });
    task.updatedAt = Date.now();
    this._scheduleFlush();
  }

  remove(id) {
    const ok = this._tasks.delete(id);
    if (ok) this._scheduleFlush();
    return ok;
  }

  _gc() {
    const now = Date.now();
    // TTL 清理
    for (const [id, task] of this._tasks) {
      if (now - task.updatedAt > this._ttlMs) this._tasks.delete(id);
    }
    // 条数上限清理（保留最近更新的）
    if (this._tasks.size > this._maxItems) {
      const sorted = Array.from(this._tasks.values()).sort((a, b) => b.updatedAt - a.updatedAt);
      for (const task of sorted.slice(this._maxItems)) this._tasks.delete(task.id);
    }
  }
}

const store = new TaskStore();

// 进程退出时尽量落盘，避免丢失最新状态
const flushOnExit = () => {
  try {
    store.flushNow();
  } catch {
    /* noop */
  }
};
process.on('exit', flushOnExit);
process.on('SIGINT', () => {
  flushOnExit();
  process.exit(0);
});
process.on('SIGTERM', () => {
  flushOnExit();
  process.exit(0);
});

module.exports = store;
