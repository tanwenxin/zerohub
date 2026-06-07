'use strict';

/**
 * 轻量并发队列 + 限流 + 指数退避重试。
 * 文档未给出明确并发/RPM 限制，故全部参数可通过 .env 配置。
 */
class RequestQueue {
  constructor({ maxConcurrency, minIntervalMs, maxRetries, retryBaseDelayMs, retryMaxDelayMs, retryJitterRatio }) {
    this.maxConcurrency = Math.max(1, maxConcurrency);
    this.minIntervalMs = Math.max(0, minIntervalMs);
    this.maxRetries = Math.max(0, maxRetries);
    this.retryBaseDelayMs = Math.max(0, retryBaseDelayMs);
    this.retryMaxDelayMs = Math.max(this.retryBaseDelayMs, retryMaxDelayMs || 20000);
    this.retryJitterRatio = Math.min(1, Math.max(0, retryJitterRatio ?? 0.3));

    this._queue = [];
    this._running = 0;
    this._lastDispatchAt = 0;
  }

  get stats() {
    return {
      pending: this._queue.length,
      running: this._running,
      maxConcurrency: this.maxConcurrency,
    };
  }

  /**
   * 入队一个异步任务。
   * @param {(ctx: {attempt:number}) => Promise<any>} taskFn
   * @param {(info:object)=>void} [onState] 状态回调，用于上报排队/执行/重试
   * @returns {Promise<any>}
   */
  enqueue(taskFn, onState) {
    return new Promise((resolve, reject) => {
      this._queue.push({ taskFn, onState, resolve, reject });
      if (onState) onState({ phase: 'queued', queuePosition: this._queue.length });
      this._drain();
    });
  }

  _sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async _drain() {
    if (this._running >= this.maxConcurrency) return;
    const job = this._queue.shift();
    if (!job) return;

    this._running += 1;

    // 限流：保证相邻派发间隔
    const now = Date.now();
    const wait = Math.max(0, this._lastDispatchAt + this.minIntervalMs - now);
    if (wait > 0) await this._sleep(wait);
    this._lastDispatchAt = Date.now();

    this._execute(job).finally(() => {
      this._running -= 1;
      this._drain();
    });

    // 继续尝试填充并发槽位
    this._drain();
  }

  async _execute(job) {
    const { taskFn, onState, resolve, reject } = job;
    let lastErr;
    for (let attempt = 1; attempt <= this.maxRetries + 1; attempt += 1) {
      try {
        if (onState) onState({ phase: 'running', attempt });
        const result = await taskFn({ attempt });
        resolve(result);
        return;
      } catch (err) {
        lastErr = err;
        const retriable = this._isRetriable(err);
        if (!retriable || attempt > this.maxRetries) break;
        const delay = this._computeDelay(attempt, err);
        if (onState) {
          onState({
            phase: 'retrying',
            attempt,
            delayMs: delay,
            reason: err.status ? `HTTP ${err.status}` : err.code || 'error',
          });
        }
        await this._sleep(delay);
      }
    }
    reject(lastErr);
  }

  /**
   * 计算重试退避时长：
   * 1) 若上游返回 Retry-After（秒），优先尊重；
   * 2) 否则使用指数退避（base * 2^(n-1)），并限制不超过上限；
   * 3) 叠加随机抖动，打散并发客户端的"同步重试"，避免对上游造成二次冲击。
   */
  _computeDelay(attempt, err) {
    let base;
    if (err && Number.isFinite(err.retryAfterMs) && err.retryAfterMs > 0) {
      base = err.retryAfterMs;
    } else {
      base = this.retryBaseDelayMs * Math.pow(2, attempt - 1);
    }
    base = Math.min(base, this.retryMaxDelayMs);
    const jitter = base * this.retryJitterRatio * Math.random();
    return Math.round(base + jitter);
  }

  _isRetriable(err) {
    const status = err && err.status;
    if (status === 429) return true;
    if (status >= 500 && status < 600) return true; // 含 503 上游不可用
    // 网络层错误/超时
    const code = err && err.code;
    if (['ECONNRESET', 'ETIMEDOUT', 'ECONNABORTED', 'EAI_AGAIN'].includes(code)) return true;
    return false;
  }
}

module.exports = RequestQueue;
