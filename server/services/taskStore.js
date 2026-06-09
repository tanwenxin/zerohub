'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const config = require('../config');
const logger = require('./logger');
const { normalizePublicUrl } = require('../utils/url');

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
        data: Array.isArray(copy.result.data)
          ? copy.result.data.map((img) => ({
              url: normalizePublicUrl(img && img.url),
              // base64 体积过大，不落盘
              b64_json: null,
              revised_prompt: img && img.revised_prompt ? img.revised_prompt : null,
            }))
          : copy.result.data,
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
        data: Array.isArray(task.result.data)
          ? task.result.data.map((img) => ({
              ...img,
              url: normalizePublicUrl(img && img.url),
            }))
          : task.result.data,
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
   * @param {object} [meta] 额外元信息：{ category, status, params }
   */
  create(type, payloadPreview, meta = {}) {
    const id = crypto.randomUUID();
    const now = Date.now();
    const task = {
      id,
      type,
      category: meta.category || 'image', // image | video
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

  /** 返回任务列表（按更新时间倒序），可选按 category 过滤与数量限制 */
  list({ category, limit = 100 } = {}) {
    let arr = Array.from(this._tasks.values());
    if (category) arr = arr.filter((t) => t.category === category);
    arr.sort((a, b) => b.updatedAt - a.updatedAt);
    return arr.slice(0, limit);
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
