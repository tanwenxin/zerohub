'use strict';

const express = require('express');
const multer = require('multer');
const axios = require('axios');

const config = require('../config');
const RequestQueue = require('../services/queue');
const taskStore = require('../services/taskStore');
const agnesClient = require('../services/agnesClient');
const logger = require('../services/logger');
const { keyPool } = require('../services/keyPool');
const {
  bufferToDataUri,
  isValidImageInput,
  buildPayloadPreview,
} = require('../utils/image');

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 12 * 1024 * 1024, files: 8 }, // 单文件 12MB，最多 8 张
});

// 上游调用队列：并发至少覆盖 key 数量，确保多 key 能真正并行分散压力。
// RPM 严格由 keyPool 控制；此队列负责并发上限、最小间隔与失败重试/退避。
const queue = new RequestQueue({
  ...config.queue,
  maxConcurrency: Math.max(config.queue.maxConcurrency, config.keyCount || 1),
});

const VALID_TYPES = ['text2img', 'img2img', 'multi'];
const VALID_RESPONSE_FORMATS = ['url', 'b64_json'];

// 同进程内保存任务的完整输入（含上传图片的 data URI），供「刷新→重试」复用；
// 持久化文件中不含 base64，重启后该缓存丢失，刷新将退化为用 URL 参数重跑。
const taskInputs = new Map(); // taskId -> resolved input

/**
 * 收集图片输入：合并 URL 文本数组与上传文件（转 Data URI）。
 */
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
    for (const f of req.files) {
      images.push(bufferToDataUri(f.buffer, f.mimetype));
    }
  }
  return images;
}

function isValidSize(value) {
  if (value === undefined || value === null || value === '') return true;
  if (typeof value !== 'string') return false;
  const match = /^(\d+)\s*[xX]\s*(\d+)$/.exec(value.trim());
  if (!match) return false;
  const width = Number(match[1]);
  const height = Number(match[2]);
  return Number.isSafeInteger(width) && Number.isSafeInteger(height) && width > 0 && height > 0;
}

function isValidResponseFormat(value) {
  return value === undefined || value === null || value === '' || VALID_RESPONSE_FORMATS.includes(value);
}

/**
 * 执行一个图片生成任务：keyPool 调度（含等待）→ 队列执行（含重试）→ 落库。
 * 该函数同时被首次提交与「刷新/重试」复用。
 * @param {object} task taskStore 中的任务对象
 * @param {object} input 生成输入（type/prompt/size/image/responseFormat）
 */
async function runImageTask(task, input) {
  const arrivedAt = Date.now();
  taskStore.update(task.id, { status: 'pending', progress: 1, error: null });

  let apiKey;
  try {
    // 1) 申请一个有空闲 RPM 配额的 Key；配额全满则等待（不超出每个 key 的限制）
    apiKey = await keyPool.acquire('image', {
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
  logger.info('image.key_assigned', { taskId: task.id, keyIndex, type: input.type });

  let startedAt = null;
  try {
    const result = await queue.enqueue(
      async () => {
        startedAt = Date.now();
        taskStore.update(task.id, { status: 'running', progress: 30 });
        return agnesClient.generate(input, { apiKey });
      },
      (state) => {
        taskStore.addEvent(task.id, state);
        if (state.phase === 'queued') {
          taskStore.update(task.id, { status: 'queued', progress: 5 });
        } else if (state.phase === 'running') {
          taskStore.update(task.id, { status: 'running', progress: 30 });
        } else if (state.phase === 'retrying') {
          taskStore.update(task.id, { status: 'running', progress: 20 });
          logger.warn('image.retrying', {
            taskId: task.id,
            attempt: state.attempt,
            delayMs: state.delayMs,
            reason: state.reason,
          });
        }
      }
    );

    const finishedAt = Date.now();
    // 生成耗时：从实际开始调用上游（running）到拿到结果；缺失时回退到任务到达时间。
    const durationMs = finishedAt - (startedAt || arrivedAt);
    taskStore.update(task.id, { status: 'done', progress: 100, result, durationMs });
    logger.info('image.completed', {
      taskId: task.id,
      keyIndex,
      imageCount: result.images ? result.images.length : 0,
      processMs: startedAt ? finishedAt - startedAt : null,
      totalMs: finishedAt - arrivedAt,
      durationMs,
    });
  } catch (err) {
    failTask(task, err);
  }
}

/** 将任务置为失败并记录日志 */
function failTask(task, err) {
  taskStore.update(task.id, {
    status: 'error',
    progress: 100,
    error: {
      message: err.message || '生成失败',
      userMessage: err.userMessage || '生成失败，请稍后再试',
      code: err.code || null,
      retryable: err.retryable !== false,
      status: err.status || null,
      data: err.data || null,
    },
  });
  logger.error('image.failed', {
    taskId: task.id,
    code: err.code || null,
    message: err.message,
    status: err.status || null,
  });
}

/**
 * POST /api/generate
 * 表单字段：type, prompt, size, responseFormat, imageUrls(JSON 字符串), images(文件)
 * 返回：{ taskId }
 */
router.post('/generate', upload.array('images', 8), (req, res) => {
  const { type, prompt, size, responseFormat } = req.body;

  if (!VALID_TYPES.includes(type)) {
    return res.status(400).json({ error: `type 非法，应为 ${VALID_TYPES.join('/')}` });
  }
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: 'prompt 不能为空' });
  }
  if (!isValidSize(size)) {
    return res.status(400).json({ error: 'size 非法，应为正整数尺寸，如 1024x1024' });
  }
  if (!isValidResponseFormat(responseFormat)) {
    return res.status(400).json({ error: `responseFormat 非法，应为 ${VALID_RESPONSE_FORMATS.join('/')}` });
  }

  let urlList = [];
  let image = [];
  if (type !== 'text2img') {
    // 拆分 URL 与文件，便于持久化（仅存 URL）
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
      return res.status(400).json({ error: '图生图/多图至少需要 1 张输入图片（URL 或上传文件）' });
    }
    if (type === 'multi' && image.length < 2) {
      return res.status(400).json({ error: '多图合成至少需要 2 张输入图片' });
    }
    const invalid = image.find((v) => !isValidImageInput(v));
    if (invalid) {
      return res.status(400).json({ error: '存在非法图片输入，必须为 http(s) URL 或 Data URI' });
    }
  }

  const sizeInfo = agnesClient.normalizeSize(size || '1024x1024');
  const input = {
    type,
    prompt: prompt.trim(),
    size: sizeInfo.size,
    image,
    responseFormat: responseFormat || 'url',
  };
  if (sizeInfo.adjusted) {
    logger.info('request.size_adjusted', { type, original: sizeInfo.original, adjusted: sizeInfo.size });
  }

  const payloadPreview = buildPayloadPreview({
    model: config.agnes.model,
    prompt: input.prompt,
    size: input.size,
    image: input.image,
    extra_body: { response_format: input.responseFormat },
  });

  // 创建任务并立即持久化（前端发起即落盘）。params 仅保存可重放的 URL/文本类字段。
  const task = taskStore.create(type, payloadPreview, {
    category: 'image',
    status: 'pending',
    params: {
      type,
      prompt: input.prompt,
      size: input.size,
      responseFormat: input.responseFormat,
      imageUrls: urlList,
      hadFiles: image.length > urlList.length,
    },
  });
  taskInputs.set(task.id, input);

  logger.info('image.request.arrived', {
    taskId: task.id,
    type,
    size: input.size,
    imageCount: input.image.length,
    rate: keyPool.snapshot('image'),
  });

  // 后台执行（不阻塞响应；超限会进入等待，不超出配额）
  runImageTask(task, input);

  return res.json({ taskId: task.id });
});

/**
 * 重建图片任务输入：优先用同进程缓存（含上传图片 data URI），
 * 否则用持久化的 params（仅 URL）。返回 null 表示无法重放。
 */
function rebuildImageInput(task) {
  const cached = taskInputs.get(task.id);
  if (cached) return cached;
  const p = task.params;
  if (!p) return null;
  if (p.type !== 'text2img') {
    const urls = Array.isArray(p.imageUrls) ? p.imageUrls : [];
    if (urls.length === 0) return null; // 仅有上传文件、缓存已失效，无法重放
    return { type: p.type, prompt: p.prompt, size: p.size, image: urls, responseFormat: p.responseFormat };
  }
  return { type: p.type, prompt: p.prompt, size: p.size, image: [], responseFormat: p.responseFormat };
}

/**
 * POST /api/tasks/:id/refresh —— 刷新/重试任务
 * - 图片任务（同步）：重新发起生成（复用已保存参数），计入 RPM；
 * - 该接口也被前端历史列表的「刷新」按钮调用。
 */
router.post('/tasks/:id/refresh', (req, res) => {
  const task = taskStore.get(req.params.id);
  if (!task) return res.status(404).json({ error: '任务不存在或已过期' });
  if (task.category !== 'image') {
    return res.status(400).json({ error: '该任务不是图片任务' });
  }
  // 已完成的无需刷新
  if (task.status === 'done') return res.json({ taskId: task.id, status: task.status });

  const input = rebuildImageInput(task);
  if (!input) {
    return res.status(409).json({
      error: '该任务包含本地上传图片且服务已重启，无法自动重试，请重新发起',
      code: 'CANNOT_REPLAY',
    });
  }

  taskStore.addEvent(task.id, { phase: 'refresh_requested' });
  logger.info('image.refresh', { taskId: task.id, type: input.type });
  runImageTask(task, input);
  return res.json({ taskId: task.id, status: 'pending' });
});

/**
 * GET /api/tasks —— 任务列表（历史记录），支持 ?category=image|video&limit=
 */
router.get('/tasks', (req, res) => {
  const { category, limit } = req.query;
  const tasks = taskStore.list({
    category: category || undefined,
    limit: limit ? parseInt(limit, 10) : 100,
  });
  return res.json({ tasks });
});

/**
 * GET /api/tasks/:id  —— 轮询任务状态
 */
router.get('/tasks/:id', (req, res) => {
  const task = taskStore.get(req.params.id);
  if (!task) return res.status(404).json({ error: '任务不存在或已过期' });
  return res.json(task);
});

/**
 * DELETE /api/tasks/:id —— 删除任务（从历史中移除）
 */
router.delete('/tasks/:id', (req, res) => {
  const ok = taskStore.remove(req.params.id);
  taskInputs.delete(req.params.id);
  if (!ok) return res.status(404).json({ error: '任务不存在' });
  return res.json({ ok: true });
});

/**
 * GET /api/tasks/:id/download/:index —— 代理下载结果图片
 */
router.get('/tasks/:id/download/:index', async (req, res) => {
  const task = taskStore.get(req.params.id);
  if (!task || task.status !== 'done' || !task.result) {
    return res.status(404).json({ error: '结果不存在' });
  }
  const idx = parseInt(req.params.index, 10) || 0;
  const img = task.result.images && task.result.images[idx];
  if (!img) return res.status(404).json({ error: '图片索引越界' });

  const filename = `agnes-${task.type}-${task.id.slice(0, 8)}-${idx}.png`;

  try {
    if (img.b64) {
      const buf = Buffer.from(img.b64, 'base64');
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      return res.send(buf);
    }
    if (img.url) {
      const upstream = await axios.get(img.url, { responseType: 'arraybuffer' });
      res.setHeader('Content-Type', upstream.headers['content-type'] || 'image/png');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      return res.send(Buffer.from(upstream.data));
    }
    return res.status(404).json({ error: '该图片没有可下载内容' });
  } catch (err) {
    return res.status(502).json({ error: '下载上游图片失败', detail: err.message });
  }
});

/**
 * GET /api/health —— 健康检查与配置/队列/限流状态
 */
router.get('/health', (req, res) => {
  res.json({
    ok: true,
    apiKeyConfigured: config.isApiKeyConfigured,
    keyCount: config.keyCount,
    model: config.agnes.model,
    queue: queue.stats,
    rateLimit: {
      image: keyPool.snapshot('image'),
      video: keyPool.snapshot('video'),
    },
  });
});

module.exports = router;
