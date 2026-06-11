'use strict';

const RateLimiter = require('./rateLimiter');
const config = require('../config');
const logger = require('./logger');

/**
 * API Key 共享池 + 负载均衡调度器。
 *
 * 设计目标（硬性要求）：
 * - 支持配置多个 AGNES_API_KEY，以数组形式存储；
 * - 每个 Key 各自独立的 RPM 限制（如单 key 20 RPM），多 key 总配额叠加；
 * - 根据任务输入情况，自动分配到「当前最空闲」的 Key 以分散压力；
 * - 当所有 Key 当前请求量都已达 RPM 上限时，新任务进入等待，直到有空闲槽位，
 *   严格不超出每个 Key 的配额。
 *
 * 计数口径：一次「创建生成任务」（图片/视频）占用对应 Key + 分类（category）的一个令牌。
 * 任务状态轮询为查询类请求，不占用令牌。
 *
 * 分类（category）：'image' | 'video'，两者各自独立计算（互不影响）。
 */
class KeyPool {
  /**
   * @param {object} opts
   * @param {string[]} opts.keys API Key 列表
   * @param {number} opts.windowMs 滑动窗口长度
   * @param {object} opts.limits 各分类的单 key 限额，如 { image: 20, video: 20 }
   * @param {number} opts.waitPollMs 等待轮询间隔
   * @param {number} opts.maxWaitMs 最长等待时间
   */
  constructor({ keys, windowMs, limits, waitPollMs, maxWaitMs }) {
    // 没有真实 key（如 mock 模式）时，用占位 key 保证调度链路可用
    this._keys = keys && keys.length ? keys.slice() : ['__default__'];
    this._windowMs = windowMs;
    this._limits = limits; // { image, video }
    this._waitPollMs = Math.max(50, waitPollMs || 500);
    this._maxWaitMs = Math.max(0, maxWaitMs || 0);

    // 每个 key 各分类一个独立的 RateLimiter：Map<key, Map<category, RateLimiter>>
    this._byKey = new Map();
    for (const key of this._keys) {
      const m = new Map();
      for (const [cat, limit] of Object.entries(limits)) {
        m.set(cat, new RateLimiter({ limit, windowMs }));
      }
      this._byKey.set(key, m);
    }

    // 轮询起点指针，用于在并列空闲时实现轮转（round-robin）均衡
    this._rrCursor = 0;
  }

  get keys() {
    return this._keys.slice();
  }

  get keyCount() {
    return this._keys.length;
  }

  _limiterFor(key, category) {
    const m = this._byKey.get(key);
    if (!m) return null;
    let lim = m.get(category);
    if (!lim) {
      // 未知分类：按图片默认配额兜底创建
      lim = new RateLimiter({ limit: this._limits.image || 20, windowMs: this._windowMs });
      m.set(category, lim);
    }
    return lim;
  }

  /**
   * 尝试同步占用一个令牌：选择剩余配额最多的 Key（并列时轮转），成功则返回 key。
   * @param {string} category
   * @returns {{ ok: boolean, key?: string, remaining?: number, retryAfterMs?: number }}
   */
  tryAcquire(category) {
    let best = null; // { key, remaining }
    let minRetryAfterMs = Infinity;

    const n = this._keys.length;
    // 从 round-robin 游标处开始遍历，保证并列空闲时雨露均沾
    for (let i = 0; i < n; i += 1) {
      const idx = (this._rrCursor + i) % n;
      const key = this._keys[idx];
      const snap = this._limiterFor(key, category).snapshot(category);
      if (snap.remaining > 0) {
        if (!best || snap.remaining > best.remaining) {
          best = { key, remaining: snap.remaining, idx };
        }
      } else {
        minRetryAfterMs = Math.min(minRetryAfterMs, snap.retryAfterMs);
      }
    }

    if (best) {
      const r = this._limiterFor(best.key, category).tryAcquire(category);
      // 占用成功后推进游标，下一次从下一个 key 开始挑选
      this._rrCursor = (best.idx + 1) % n;
      return { ok: true, key: best.key, remaining: r.remaining };
    }

    return {
      ok: false,
      retryAfterMs: Number.isFinite(minRetryAfterMs) ? minRetryAfterMs : this._windowMs,
    };
  }

  /**
   * 异步获取一个可用 Key：若当前无空闲配额则等待（轮询），直到拿到或超时。
   * @param {string} category
   * @param {object} [opts]
   * @param {(info:{waitedMs:number, retryAfterMs:number})=>void} [opts.onWait] 进入等待时回调（仅首次）
   * @param {()=>boolean} [opts.isAborted] 中止判断（如任务被删除），返回 true 则放弃等待
   * @returns {Promise<string>} 解析为分配到的 key
   */
  async acquire(category, opts = {}) {
    const startedAt = Date.now();
    let notifiedWait = false;

    for (;;) {
      if (opts.isAborted && opts.isAborted()) {
        const e = new Error('任务已取消');
        e.code = 'ABORTED';
        throw e;
      }

      const res = this.tryAcquire(category);
      if (res.ok) return res.key;

      const waitedMs = Date.now() - startedAt;
      if (this._maxWaitMs > 0 && waitedMs >= this._maxWaitMs) {
        const e = new Error('等待 API Key 配额超时');
        e.code = 'RATE_WAIT_TIMEOUT';
        e.retryable = true;
        e.userMessage = '当前请求繁忙，配额已满且等待超时，请稍后重试';
        throw e;
      }

      if (!notifiedWait) {
        notifiedWait = true;
        if (opts.onWait) opts.onWait({ waitedMs, retryAfterMs: res.retryAfterMs });
        logger.warn('keypool.wait', {
          category,
          retryAfterMs: res.retryAfterMs,
          keyCount: this._keys.length,
        });
      }

      const sleep = Math.min(this._waitPollMs, res.retryAfterMs || this._waitPollMs);
      await new Promise((r) => setTimeout(r, Math.max(50, sleep)));
    }
  }

  /** 整体用量快照（聚合所有 key），用于健康检查与前端展示 */
  snapshot(category) {
    let used = 0;
    let limit = 0;
    let remaining = 0;
    let retryAfterMs = 0;
    const perKey = [];
    this._keys.forEach((key, i) => {
      const s = this._limiterFor(key, category).snapshot(category);
      used += s.used;
      limit += s.limit;
      remaining += s.remaining;
      retryAfterMs = Math.max(retryAfterMs, s.remaining === 0 ? s.retryAfterMs : 0);
      perKey.push({ index: i, used: s.used, limit: s.limit, remaining: s.remaining });
    });
    return {
      used,
      limit,
      remaining,
      windowMs: this._windowMs,
      retryAfterMs: remaining > 0 ? 0 : retryAfterMs,
      keyCount: this._keys.length,
      perKey,
    };
  }
}

// ===== 单例：图片与视频共用同一套 keys，但分类独立计数 =====
const keyPool = new KeyPool({
  keys: config.agnes.apiKeys,
  windowMs: config.rateLimit.windowMs,
  limits: { image: config.rateLimit.imageRpm, video: config.rateLimit.videoRpm, text: config.rateLimit.textRpm },
  waitPollMs: config.rateLimit.waitPollMs,
  maxWaitMs: config.rateLimit.maxWaitMs,
});

module.exports = { KeyPool, keyPool };
