'use strict';

const express = require('express');
const multer = require('multer');
const axios = require('axios');

const config = require('../config');
const taskStore = require('../services/taskStore');
const videoClient = require('../services/videoClient');
const imgbbClient = require('../services/imgbbClient');
const logger = require('../services/logger');
const { keyPool } = require('../services/keyPool');
const { assertGenerationTextAllowed } = require('../services/contentModeration');
const { bufferToDataUri, isValidImageInput } = require('../utils/image');
const { getRequestOwnerId, canAccessTask } = require('../utils/requestOwner');

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.imgbb.maxBytes, files: 8 }, // 单文件上限对齐 imgbb（32MB）
});

// 视频生成模式：文生视频 / 图生视频 / 多图视频 / 关键帧动画
const VALID_TYPES = ['text2vid', 'img2vid', 'multivid', 'keyframes'];

// 同进程缓存任务输入（含上传图片 data URI）+ 上游 id/key，供刷新复用
const videoRuntime = new Map(); // taskId -> { input, videoId, upstreamTaskId, apiKey }

/** 收集图片输入（URL 文本数组 + 上传文件转 Data URI） */
function collectImages(req) {
  const images = [];
  let urls = req.body.imageUrls;
  if (typeof urls === 'string' && urls.trim()) {
    try {
      urls = JSON.parse(urls);
    } catch {
      urls = [urls];
    }
  }
  if (Array.isArray(urls)) {
    for (const u of urls) {
      if (typeof u === 'string' && u.trim()) images.push(u.trim());
    }
  }
  if (Array.isArray(req.files)) {
    for (const f of req.files) images.push(bufferToDataUri(f.buffer, f.mimetype));
  }
  return images;
}

function hasValue(value) {
  return value !== undefined && value !== null && value !== '';
}

function parseOptionalNumber(value) {
  if (!hasValue(value)) return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function validateVideoParams(fields) {
  const width = parseOptionalNumber(fields.width);
  if (width === null || (width !== undefined && (!Number.isSafeInteger(width) || width <= 0))) {
    return 'width 非法，应为正整数';
  }

  const height = parseOptionalNumber(fields.height);
  if (height === null || (height !== undefined && (!Number.isSafeInteger(height) || height <= 0))) {
    return 'height 非法，应为正整数';
  }

  const numFrames = parseOptionalNumber(fields.numFrames);
  if (
    numFrames === null ||
    (numFrames !== undefined &&
      (!Number.isSafeInteger(numFrames) ||
        numFrames < 9 ||
        numFrames > config.video.maxFrames ||
        (numFrames - 1) % 8 !== 0))
  ) {
    return `numFrames 非法，应为 9-${config.video.maxFrames} 内且满足 8n+1 的整数`;
  }

  const frameRate = parseOptionalNumber(fields.frameRate);
  if (frameRate === null || (frameRate !== undefined && (!Number.isSafeInteger(frameRate) || frameRate < 1 || frameRate > 60))) {
    return 'frameRate 非法，应为 1-60 的整数';
  }

  const seed = parseOptionalNumber(fields.seed);
  if (seed === null || (seed !== undefined && !Number.isSafeInteger(seed))) {
    return 'seed 非法，应为整数';
  }

  return null;
}

/** 将任务置为失败 */
function failTask(task, err) {
  taskStore.update(task.id, {
    status: 'error',
    progress: 100,
    error: {
      message: err.message || '视频生成失败',
      userMessage: err.userMessage || err.message || '视频生成失败，请稍后再试',
      code: err.code || null,
      retryable: err.retryable !== false,
      status: err.status || null,
      data: err.data || null,
    },
  });
  logger.error('video.failed', { taskId: task.id, code: err.code || null, message: err.message });
}

/**
 * 后台轮询上游视频结果，直到完成/失败/超时。查询为只读操作，不占用 RPM 令牌。
 * @param {string} localTaskId
 * @param {{videoId, taskId, apiKey}} ids
 */
function startVideoPolling(localTaskId, ids) {
  const startedAt = Date.now();
  const { pollIntervalMs, pollTimeoutMs } = config.video;

  const poll = async () => {
    const exists = taskStore.get(localTaskId);
    if (!exists) return; // 已被删除

    if (Date.now() - startedAt > pollTimeoutMs) {
      failTask(exists, {
        message: '视频生成超时',
        userMessage: '视频生成超时，请点击刷新重试',
        code: 'POLL_TIMEOUT',
        retryable: true,
      });
      logger.warn('video.poll_timeout', { taskId: localTaskId });
      return;
    }

    try {
      const r = await videoClient.queryVideo(
        { videoId: ids.videoId, taskId: ids.taskId },
        { apiKey: ids.apiKey }
      );
      taskStore.addEvent(localTaskId, {
        phase: 'polling',
        upstreamStatus: r.rawStatus,
        progress: r.progress,
      });

      if (r.status === 'done') {
        // 生成耗时：从任务开始生成（genStartedAt）到拿到结果；缺失时回退到本轮轮询开始时间。
        const durationMs = Date.now() - (exists.genStartedAt || startedAt);
        taskStore.update(localTaskId, {
          status: 'done',
          progress: 100,
          durationMs,
          result: {
            created: Math.floor(Date.now() / 1000),
            videoUrl: r.videoUrl,
            size: r.size,
            seconds: r.seconds,
            videoId: r.videoId || ids.videoId || null,
          },
        });
        logger.info('video.completed', { taskId: localTaskId, totalMs: Date.now() - startedAt, durationMs });
        return;
      }

      if (r.status === 'error') {
        failTask(exists, {
          message: (r.error && (r.error.message || r.error.code)) || '视频生成失败',
          code: (r.error && r.error.code) || 'VIDEO_FAILED',
          retryable: false,
          data: r.error || null,
        });
        return;
      }

      taskStore.update(localTaskId, {
        status: r.status === 'queued' ? 'queued' : 'running',
        progress: r.progress || (r.status === 'queued' ? 5 : 30),
      });
      setTimeout(poll, pollIntervalMs);
    } catch (err) {
      logger.warn('video.poll_error', {
        taskId: localTaskId,
        code: err.code,
        status: err.status,
        message: err.message,
      });
      setTimeout(poll, pollIntervalMs);
    }
  };

  setTimeout(poll, pollIntervalMs);
}

/**
 * 执行一个视频任务：keyPool 调度（含等待）→ 创建上游任务（含重试）→ 后台轮询。
 * 同时被首次提交与刷新（需要重新创建时）复用。
 */
async function runVideoTask(task, input) {
  const arrivedAt = Date.now();
  taskStore.update(task.id, { status: 'pending', progress: 1, error: null });

  let apiKey;
  try {
    apiKey = await keyPool.acquire('video', {
      onWait: ({ retryAfterMs }) => {
        taskStore.update(task.id, { status: 'pending', progress: 2 });
        taskStore.addEvent(task.id, { phase: 'waiting_key', retryAfterMs });
      },
      isAborted: () => !taskStore.get(task.id),
    });
  } catch (err) {
    return failTask(task, err);
  }

  const keyIndex = keyPool.keys.indexOf(apiKey);
  taskStore.update(task.id, { status: 'queued', progress: 5, apiKeyIndex: keyIndex });
  taskStore.addEvent(task.id, { phase: 'key_assigned', keyIndex });
  logger.info('video.key_assigned', { taskId: task.id, keyIndex, type: input.type });

  // Agnes 视频接口仅支持图片 URL：将本地上传的 Data URI 先转存到 imgbb 换公网 URL。
  // 已是 http(s) URL 的原样保留。转换后回写到持久化 params，便于刷新复用。
  if (Array.isArray(input.image) && input.image.length) {
    const hasDataUri = input.image.some((v) => typeof v === 'string' && v.startsWith('data:'));
    if (hasDataUri) {
      try {
        taskStore.update(task.id, { status: 'running', progress: 8 });
        taskStore.addEvent(task.id, { phase: 'uploading_images', count: input.image.length });
        const urls = await imgbbClient.resolveImagesToUrls(input.image);
        input.image = urls;
        // 回写 params.imageUrls，使刷新/重试不再依赖已失效的本地文件缓存
        const prevParams = (taskStore.get(task.id) || {}).params || {};
        taskStore.update(task.id, { params: { ...prevParams, imageUrls: urls, hadFiles: false } });
        const rt = videoRuntime.get(task.id) || {};
        videoRuntime.set(task.id, { ...rt, input: { ...input, image: urls } });
        logger.info('video.images_resolved', { taskId: task.id, count: urls.length });
      } catch (err) {
        return failTask(task, err);
      }
    }
  }

  // 创建上游任务（带重试退避）
  const maxAttempts = config.queue.maxRetries + 1;
  let lastErr;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      taskStore.update(task.id, { status: 'running', progress: 10 });
      const { videoId, taskId } = await videoClient.createVideo(input, { apiKey });
      taskStore.update(task.id, {
        status: 'running',
        progress: 20,
        videoId,
        upstreamTaskId: taskId,
        genStartedAt: Date.now(),
      });
      const rt = videoRuntime.get(task.id) || {};
      videoRuntime.set(task.id, { ...rt, input, videoId, upstreamTaskId: taskId, apiKey });
      logger.info('video.created', {
        taskId: task.id,
        videoId,
        keyIndex,
        waitedMs: Date.now() - arrivedAt,
      });
      startVideoPolling(task.id, { videoId, taskId, apiKey });
      return;
    } catch (err) {
      lastErr = err;
      const retriable = err.retryable !== false && attempt < maxAttempts;
      if (!retriable) break;
      const delay = Math.min(
        config.queue.retryBaseDelayMs * 2 ** (attempt - 1),
        config.queue.retryMaxDelayMs
      );
      taskStore.addEvent(task.id, { phase: 'retrying', attempt, delayMs: delay, reason: err.code });
      logger.warn('video.create_retrying', { taskId: task.id, attempt, delayMs: delay });
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  failTask(task, lastErr || new Error('视频任务创建失败'));
}

/**
 * POST /api/videos —— 创建视频生成任务
 */
router.post('/videos', upload.array('images', 8), (req, res) => {
  const { type, prompt, negativePrompt, width, height, numFrames, frameRate, seed } = req.body;
  const ownerId = getRequestOwnerId(req);

  if (!VALID_TYPES.includes(type)) {
    return res.status(400).json({ error: `type 非法，应为 ${VALID_TYPES.join('/')}` });
  }
  if (!ownerId) {
    return res.status(400).json({ error: '缺少有效会话标识，请刷新页面后重试' });
  }
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'prompt 不能为空' });
  }
  try {
    assertGenerationTextAllowed({ prompt, negativePrompt });
  } catch (err) {
    return res.status(err.status || 400).json({ error: err.message, code: err.code || 'CONTENT_POLICY' });
  }
  const paramError = validateVideoParams({ width, height, numFrames, frameRate, seed });
  if (paramError) {
    return res.status(400).json({ error: paramError });
  }

  let urlList = [];
  let image = [];
  if (type !== 'text2vid') {
    let urls = req.body.imageUrls;
    if (typeof urls === 'string' && urls.trim()) {
      try {
        urls = JSON.parse(urls);
      } catch {
        urls = [urls];
      }
    }
    if (Array.isArray(urls)) urlList = urls.filter((u) => typeof u === 'string' && u.trim());

    image = collectImages(req);
    if (image.length === 0) {
      return res.status(400).json({ error: '图生视频/多图视频/关键帧至少需要 1 张输入图片（URL 或上传文件）' });
    }
    if ((type === 'multivid' || type === 'keyframes') && image.length < 2) {
      return res.status(400).json({ error: '多图视频/关键帧动画至少需要 2 张输入图片' });
    }
    const invalid = image.find((v) => !isValidImageInput(v, { requireHttps: true }));
    if (invalid) {
      return res.status(400).json({ error: '存在非法图片输入，必须为 HTTPS URL 或图片 Data URI' });
    }
  }

  const input = {
    type,
    prompt: prompt.trim(),
    image,
    width: width ? Number(width) : undefined,
    height: height ? Number(height) : undefined,
    numFrames: numFrames ? Number(numFrames) : undefined,
    frameRate: frameRate ? Number(frameRate) : undefined,
    negativePrompt,
    seed: seed !== undefined && seed !== '' ? Number(seed) : undefined,
  };

  const reqBody = videoClient.buildRequestBody(input);
  const payloadPreview = {
    model: reqBody.model,
    prompt: reqBody.prompt,
    size: `${reqBody.width}x${reqBody.height}`,
    num_frames: reqBody.num_frames,
    frame_rate: reqBody.frame_rate,
    mode: type,
    imageCount: image.length,
  };

  const task = taskStore.create(type, payloadPreview, {
    category: 'video',
    ownerId,
    status: 'pending',
    params: {
      type,
      prompt: input.prompt,
      negativePrompt: negativePrompt || '',
      width: input.width,
      height: input.height,
      numFrames: input.numFrames,
      frameRate: input.frameRate,
      seed: input.seed,
      imageUrls: urlList,
      hadFiles: image.length > urlList.length,
    },
  });
  videoRuntime.set(task.id, { input });

  logger.info('video.request.arrived', {
    taskId: task.id,
    type,
    numFrames: reqBody.num_frames,
    frameRate: reqBody.frame_rate,
    imageCount: image.length,
    rate: keyPool.snapshot('video'),
  });

  runVideoTask(task, input);

  return res.json({ taskId: task.id });
});

/** 重建视频任务输入：优先同进程缓存，否则用持久化 params（仅 URL） */
function rebuildVideoInput(task) {
  const rt = videoRuntime.get(task.id);
  if (rt && rt.input) return rt.input;
  const p = task.params;
  if (!p) return null;
  if (p.type !== 'text2vid') {
    const urls = Array.isArray(p.imageUrls) ? p.imageUrls : [];
    if (urls.length === 0) return null;
    return {
      type: p.type,
      prompt: p.prompt,
      image: urls,
      width: p.width,
      height: p.height,
      numFrames: p.numFrames,
      frameRate: p.frameRate,
      negativePrompt: p.negativePrompt,
      seed: p.seed,
    };
  }
  return {
    type: p.type,
    prompt: p.prompt,
    image: [],
    width: p.width,
    height: p.height,
    numFrames: p.numFrames,
    frameRate: p.frameRate,
    negativePrompt: p.negativePrompt,
    seed: p.seed,
  };
}

/**
 * POST /api/videos/:id/refresh —— 刷新/重试视频任务
 * - 若已有 videoId（任务已创建成功）：重新轮询查询结果（不占用 RPM）；
 * - 否则：重新创建上游任务（占用 RPM）。
 */
router.post('/videos/:id/refresh', (req, res) => {
  const task = taskStore.get(req.params.id);
  if (!task) return res.status(404).json({ error: '任务不存在或已过期' });
  if (!canAccessTask(req, task)) return res.status(404).json({ error: '任务不存在或已过期' });
  if (task.category !== 'video') return res.status(400).json({ error: '该任务不是视频任务' });
  if (task.status === 'done') return res.json({ taskId: task.id, status: task.status });

  const rt = videoRuntime.get(task.id);
  const videoId = (rt && rt.videoId) || task.videoId;
  const upstreamTaskId = (rt && rt.upstreamTaskId) || task.upstreamTaskId;

  // 已创建成功：直接重新查询（无需占用配额）
  if (videoId || upstreamTaskId) {
    taskStore.update(task.id, { status: 'running', progress: 30, error: null });
    taskStore.addEvent(task.id, { phase: 'refresh_requery' });
    const apiKey =
      (rt && rt.apiKey) ||
      (Number.isInteger(task.apiKeyIndex) ? keyPool.keys[task.apiKeyIndex] : undefined);
    logger.info('video.refresh_requery', { taskId: task.id, videoId });
    startVideoPolling(task.id, { videoId, taskId: upstreamTaskId, apiKey });
    return res.json({ taskId: task.id, status: 'running', mode: 'requery' });
  }

  // 未创建成功：重新创建（占用 RPM）
  const input = rebuildVideoInput(task);
  if (!input) {
    return res.status(409).json({
      error: '该任务包含本地上传图片且服务已重启，无法自动重试，请重新发起',
      code: 'CANNOT_REPLAY',
    });
  }
  taskStore.addEvent(task.id, { phase: 'refresh_recreate' });
  logger.info('video.refresh_recreate', { taskId: task.id, type: input.type });
  runVideoTask(task, input);
  return res.json({ taskId: task.id, status: 'pending', mode: 'recreate' });
});

/**
 * GET /api/videos/:id/download —— 代理下载生成的视频文件
 */
router.get('/videos/:id/download', async (req, res) => {
  const task = taskStore.get(req.params.id);
  if (!task || task.status !== 'done' || !task.result || !task.result.videoUrl) {
    return res.status(404).json({ error: '视频结果不存在' });
  }
  if (!canAccessTask(req, task)) return res.status(404).json({ error: '视频结果不存在' });
  const filename = `agnes-video-${task.id.slice(0, 8)}.mp4`;
  try {
    const upstream = await axios.get(task.result.videoUrl, { responseType: 'stream' });
    res.setHeader('Content-Type', upstream.headers['content-type'] || 'video/mp4');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    upstream.data.pipe(res);
  } catch (err) {
    return res.status(502).json({ error: '下载上游视频失败', detail: err.message });
  }
});

module.exports = router;
