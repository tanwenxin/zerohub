'use strict';

const axios = require('axios');
const config = require('../config');

/**
 * Agnes Video V2.0 接口封装。
 * 严格遵循 API 文档（https://agnes-ai.com/doc/agnes-video-v20）：
 * - 创建任务：POST /v1/videos，JSON，Bearer 鉴权，model = agnes-video-v2.0
 *   - 文生视频：仅 model + prompt
 *   - 图生视频：顶层 image 传单个图片 URL
 *   - 多图视频 / 关键帧：图片放入 extra_body.image 数组；关键帧设 extra_body.mode = "keyframes"
 *   - num_frames 必须 ≤ 441 且满足 8n+1；frame_rate 取值 1~60
 * - 查询结果（推荐）：GET /agnesapi?video_id=<VIDEO_ID>
 *   - status: queued | in_progress | completed | failed
 *   - 完成后视频 URL 在 remixed_from_video_id 字段
 */

const http = axios.create({
  baseURL: config.agnes.baseUrl,
  timeout: config.video.requestTimeoutMs,
});

/**
 * 规整帧数：必须满足 num_frames ≤ maxFrames 且为 8n+1。
 * 取最接近的合法值（向下对齐到 8n+1），并裁剪到 [9, maxFrames]。
 */
function normalizeFrames(rawFrames) {
  const { maxFrames, defaultFrames } = config.video;
  let n = parseInt(rawFrames, 10);
  if (!Number.isFinite(n) || n <= 0) n = defaultFrames;
  // 对齐到 8k+1：k = round((n-1)/8)
  let k = Math.round((n - 1) / 8);
  if (k < 1) k = 1; // 至少 9 帧
  let frames = 8 * k + 1;
  if (frames > maxFrames) {
    // 向下取到不超过上限的最大 8n+1
    const maxK = Math.floor((maxFrames - 1) / 8);
    frames = 8 * maxK + 1;
  }
  return frames;
}

/** 规整帧率到 [1, 60] */
function normalizeFrameRate(rawRate) {
  let r = Number(rawRate);
  if (!Number.isFinite(r) || r <= 0) r = config.video.defaultFrameRate;
  r = Math.round(r);
  if (r < 1) r = 1;
  if (r > 60) r = 60;
  return r;
}

/**
 * 构造创建视频任务的请求体。
 * @param {object} input
 * @param {'text2vid'|'img2vid'|'multivid'|'keyframes'} input.type
 * @param {string} input.prompt
 * @param {string[]} [input.image] 图片 URL 数组
 * @param {number} [input.width]
 * @param {number} [input.height]
 * @param {number} [input.numFrames]
 * @param {number} [input.frameRate]
 * @param {string} [input.negativePrompt]
 * @param {number} [input.seed]
 */
function buildRequestBody(input) {
  const { video } = config;
  const body = {
    model: video.model,
    prompt: input.prompt,
    height: Number(input.height) || video.defaultHeight,
    width: Number(input.width) || video.defaultWidth,
    num_frames: normalizeFrames(input.numFrames),
    frame_rate: normalizeFrameRate(input.frameRate),
  };

  if (input.negativePrompt && input.negativePrompt.trim()) {
    body.negative_prompt = input.negativePrompt.trim();
  }
  if (Number.isFinite(Number(input.seed))) {
    body.seed = Number(input.seed);
  }

  const images = Array.isArray(input.image) ? input.image.filter(Boolean) : [];

  if (input.type === 'img2vid') {
    // 图生视频：顶层 image 传单个 URL
    if (images.length) body.image = images[0];
  } else if (input.type === 'multivid') {
    // 多图视频：extra_body.image 数组
    body.extra_body = { image: images };
  } else if (input.type === 'keyframes') {
    // 关键帧动画：extra_body.image 数组 + mode=keyframes
    body.extra_body = { image: images, mode: 'keyframes' };
  }
  // text2vid：仅 model + prompt（+ 尺寸/帧）

  return body;
}

/** 解析 Retry-After 响应头（秒或 HTTP 日期），返回毫秒 */
function parseRetryAfter(headers) {
  if (!headers) return null;
  const raw = headers['retry-after'] || headers['Retry-After'];
  if (!raw) return null;
  const secs = Number(raw);
  if (Number.isFinite(secs)) return Math.max(0, secs * 1000);
  const date = Date.parse(raw);
  if (Number.isFinite(date)) return Math.max(0, date - Date.now());
  return null;
}

/** 将 axios 错误归一化为带 status/code/retryable 的错误，并生成用户友好提示。 */
function normalizeError(err) {
  const e = new Error();
  if (err.response) {
    const status = err.response.status;
    e.status = status;
    e.data = err.response.data;
    const retryAfterMs = parseRetryAfter(err.response.headers);
    if (retryAfterMs != null) e.retryAfterMs = retryAfterMs;

    if (status === 503) {
      e.code = 'UPSTREAM_UNAVAILABLE';
      e.retryable = true;
      e.userMessage = '视频服务繁忙，正在自动重试，请稍候…';
      e.message = '上游视频服务暂时不可用（HTTP 503）';
    } else if (status === 429) {
      e.code = 'RATE_LIMITED';
      e.retryable = true;
      e.userMessage = '请求过于频繁，正在自动重试，请稍候…';
      e.message = '触发上游限流（HTTP 429）';
    } else if (status >= 500) {
      e.code = 'UPSTREAM_ERROR';
      e.retryable = true;
      e.userMessage = '视频服务暂时异常，正在自动重试，请稍候…';
      e.message = `上游服务错误（HTTP ${status}）`;
    } else if (status === 401 || status === 403) {
      e.code = 'AUTH_ERROR';
      e.retryable = false;
      e.userMessage = '鉴权失败，请检查 API Key 配置';
      e.message = `鉴权失败（HTTP ${status}）`;
    } else if (status === 404) {
      e.code = 'NOT_FOUND';
      e.retryable = false;
      e.userMessage = '任务或视频不存在';
      e.message = '任务或视频不存在（HTTP 404）';
    } else {
      e.code = 'REQUEST_ERROR';
      e.retryable = false;
      e.userMessage = '请求未能完成，请调整参数后重试';
      e.message = `Agnes Video API 错误 HTTP ${status}`;
    }
  } else if (err.code === 'ECONNABORTED') {
    e.code = 'ECONNABORTED';
    e.retryable = true;
    e.userMessage = '请求超时，正在自动重试，请稍候…';
    e.message = '请求 Agnes Video API 超时';
  } else {
    e.code = err.code || 'UNKNOWN';
    e.retryable = ['ECONNRESET', 'ETIMEDOUT', 'EAI_AGAIN'].includes(err.code);
    e.userMessage = e.retryable
      ? '网络异常，正在自动重试，请稍候…'
      : '调用视频服务失败，请稍后再试';
    e.message = err.message || '调用 Agnes Video API 失败';
  }
  return e;
}

/** 统一上游状态到内部状态：queued/running/done/error */
function mapStatus(raw) {
  switch (raw) {
    case 'completed':
      return 'done';
    case 'failed':
      return 'error';
    case 'in_progress':
      return 'running';
    case 'queued':
    default:
      return 'queued';
  }
}

/** 解析查询响应为统一结构 */
function parseQueryResponse(data) {
  const status = mapStatus(data && data.status);
  return {
    status, // queued | running | done | error
    rawStatus: data && data.status,
    progress: Number(data && data.progress) || 0,
    videoId: (data && data.video_id) || null,
    taskId: (data && (data.id || data.task_id)) || null,
    videoUrl: (data && data.remixed_from_video_id) || null, // 完成后才有
    size: (data && data.size) || null,
    seconds: (data && data.seconds) || null,
    error: data && data.error ? data.error : null,
  };
}

// ===== Mock 支持：本地无 Key 时模拟异步视频任务 =====
const mockJobs = new Map(); // videoId -> { createdAt, durationMs, willFail, size, seconds }

function createMockJob(input) {
  const videoId = `video_mock_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const taskId = `task_mock_${Math.random().toString(36).slice(2, 8)}`;
  const willFail =
    config.agnes.mockFailRate > 0 && Math.random() < config.agnes.mockFailRate;
  const frames = normalizeFrames(input.numFrames);
  const rate = normalizeFrameRate(input.frameRate);
  mockJobs.set(videoId, {
    createdAt: Date.now(),
    durationMs: 6000, // 模拟 6s 完成
    willFail,
    size: `${Number(input.width) || config.video.defaultWidth}x${Number(input.height) || config.video.defaultHeight}`,
    seconds: (frames / rate).toFixed(1),
  });
  return { videoId, taskId };
}

function queryMockJob(videoId) {
  const job = mockJobs.get(videoId);
  if (!job) {
    const e = new Error('任务或视频不存在');
    e.status = 404;
    e.code = 'NOT_FOUND';
    e.retryable = false;
    e.userMessage = '任务或视频不存在';
    throw e;
  }
  const elapsed = Date.now() - job.createdAt;
  const ratio = Math.min(1, elapsed / job.durationMs);
  if (ratio >= 1) {
    if (job.willFail) {
      return {
        status: 'error',
        rawStatus: 'failed',
        progress: 100,
        videoId,
        taskId: null,
        videoUrl: null,
        size: job.size,
        seconds: job.seconds,
        error: { message: 'Mock video generation failed', code: 'mock_failed' },
      };
    }
    return {
      status: 'done',
      rawStatus: 'completed',
      progress: 100,
      videoId,
      taskId: null,
      // 一个公开可播放的示例视频，便于本地联调
      videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      size: job.size,
      seconds: job.seconds,
      error: null,
    };
  }
  return {
    status: ratio < 0.15 ? 'queued' : 'running',
    rawStatus: ratio < 0.15 ? 'queued' : 'in_progress',
    progress: Math.round(ratio * 100),
    videoId,
    taskId: null,
    videoUrl: null,
    size: job.size,
    seconds: job.seconds,
    error: null,
  };
}

/**
 * 创建视频任务。
 * @param {object} input
 * @param {object} [opts]
 * @param {string} [opts.apiKey] 指定使用的 API Key（共享池调度时传入）
 * @returns {Promise<{ videoId: string, taskId: string|null, raw: object }>}
 */
async function createVideo(input, opts = {}) {
  if (config.agnes.mock) {
    await new Promise((r) => setTimeout(r, 600));
    if (config.agnes.mockFailRate > 0 && Math.random() < config.agnes.mockFailRate * 0.3) {
      // 小概率在创建阶段注入 503，验证创建重试
      throw normalizeError({ response: { status: 503, headers: {}, data: {} } });
    }
    const { videoId, taskId } = createMockJob(input);
    return { videoId, taskId, raw: { video_id: videoId, task_id: taskId, status: 'queued' } };
  }

  const apiKey = opts.apiKey || config.agnes.apiKey;
  if (!apiKey) {
    const e = new Error('未配置 AGNES_API_KEY，请在 server/.env 中填写');
    e.status = 401;
    e.code = 'AUTH_ERROR';
    e.userMessage = '鉴权失败，请检查 API Key 配置';
    throw e;
  }

  const body = buildRequestBody(input);
  try {
    const res = await http.post(config.video.createEndpoint, body, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    const data = res.data || {};
    const videoId = data.video_id || null;
    const taskId = data.id || data.task_id || null;
    if (!videoId && !taskId) {
      const e = new Error('创建视频任务未返回 video_id/task_id');
      e.status = 502;
      e.code = 'BAD_UPSTREAM_RESPONSE';
      e.userMessage = '视频服务返回异常，请稍后再试';
      throw e;
    }
    return { videoId, taskId, raw: data };
  } catch (err) {
    if (err.code === 'BAD_UPSTREAM_RESPONSE') throw err;
    throw normalizeError(err);
  }
}

/**
 * 查询视频结果（推荐用 video_id；缺失时回退 task_id）。
 * @param {{ videoId?: string|null, taskId?: string|null }} ids
 * @param {object} [opts]
 * @param {string} [opts.apiKey] 指定使用的 API Key（建议与创建时同一个）
 * @returns {Promise<object>} parseQueryResponse 结果
 */
async function queryVideo({ videoId, taskId }, opts = {}) {
  if (config.agnes.mock) {
    return queryMockJob(videoId);
  }

  const apiKey = opts.apiKey || config.agnes.apiKey;
  if (!apiKey) {
    const e = new Error('未配置 AGNES_API_KEY');
    e.status = 401;
    e.code = 'AUTH_ERROR';
    throw e;
  }

  const headers = { Authorization: `Bearer ${apiKey}` };
  try {
    let res;
    if (videoId) {
      res = await http.get(config.video.queryEndpoint, {
        params: { video_id: videoId, model_name: config.video.model },
        headers,
      });
    } else if (taskId) {
      // 兼容旧方式
      res = await http.get(`${config.video.createEndpoint}/${encodeURIComponent(taskId)}`, {
        headers,
      });
    } else {
      const e = new Error('缺少 video_id / task_id');
      e.status = 400;
      e.code = 'REQUEST_ERROR';
      throw e;
    }
    return parseQueryResponse(res.data || {});
  } catch (err) {
    throw normalizeError(err);
  }
}

module.exports = {
  createVideo,
  queryVideo,
  buildRequestBody,
  normalizeFrames,
  normalizeFrameRate,
};
