'use strict';

/**
 * 滑动窗口 RPM 限流器。
 *
 * 硬性要求：系统对上游 API 的调用频率限制为每分钟 20 个请求（RPM=20），
 * 且「生成图片」与「生成视频」分别独立计算。本类按「分类（category）」维护
 * 各自独立的时间戳窗口，互不影响。
 *
 * 计数口径：一次「生成请求」（创建图片任务 / 创建视频任务）= 占用一个令牌
 * = 对应一次上游创建调用。任务状态轮询为查询类请求，不计入该限制。
 */
class RateLimiter {
  /**
   * @param {object} opts
   * @param {number} opts.limit   窗口内允许的最大请求数（默认 20）
   * @param {number} opts.windowMs 滑动窗口长度，毫秒（默认 60000）
   */
  constructor({ limit = 20, windowMs = 60_000 } = {}) {
    this.limit = Math.max(1, limit);
    this.windowMs = Math.max(1, windowMs);
    // category -> number[]（请求发生时间戳，升序）
    this._hits = new Map();
  }

  /** 清理某分类窗口外的过期时间戳 */
  _sweep(category, now) {
    const arr = this._hits.get(category);
    if (!arr) return [];
    const threshold = now - this.windowMs;
    // 时间戳升序，从头部移除过期项
    let i = 0;
    while (i < arr.length && arr[i] <= threshold) i += 1;
    if (i > 0) arr.splice(0, i);
    return arr;
  }

  /**
   * 尝试占用一个令牌。
   * @param {string} category 分类，如 'image' | 'video'
   * @returns {{ ok: boolean, remaining: number, limit: number, retryAfterMs: number }}
   */
  tryAcquire(category) {
    const now = Date.now();
    const arr = this._sweep(category, now);
    if (arr.length < this.limit) {
      arr.push(now);
      this._hits.set(category, arr);
      return {
        ok: true,
        remaining: this.limit - arr.length,
        limit: this.limit,
        retryAfterMs: 0,
      };
    }
    // 已达上限：最早一条过期后才会释放名额
    const retryAfterMs = Math.max(0, arr[0] + this.windowMs - now);
    return { ok: false, remaining: 0, limit: this.limit, retryAfterMs };
  }

  /**
   * 查看当前分类的用量（不占用令牌），用于健康检查/诊断。
   * @param {string} category
   */
  snapshot(category) {
    const now = Date.now();
    const arr = this._sweep(category, now);
    const used = arr.length;
    const remaining = Math.max(0, this.limit - used);
    const retryAfterMs = used >= this.limit ? Math.max(0, arr[0] + this.windowMs - now) : 0;
    return { used, remaining, limit: this.limit, windowMs: this.windowMs, retryAfterMs };
  }
}

module.exports = RateLimiter;
