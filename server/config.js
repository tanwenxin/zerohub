'use strict';

const path = require('path');
const dotenv = require('dotenv');

// 优先加载 server/.env
dotenv.config({ path: path.resolve(__dirname, '.env') });

function int(name, fallback) {
  const v = parseInt(process.env[name], 10);
  return Number.isFinite(v) ? v : fallback;
}

/**
 * 解析多 API Key 配置，支持负载均衡共享池：
 * - AGNES_API_KEYS：逗号分隔的多个 key（优先）；
 * - AGNES_API_KEY：单个 key（向后兼容）。
 * 去重并过滤空白，返回字符串数组。
 */
function parseApiKeys() {
  const keys = [];
  const multi = process.env.AGNES_API_KEYS || '';
  for (const k of multi.split(',')) {
    const v = k.trim();
    if (v) keys.push(v);
  }
  const single = (process.env.AGNES_API_KEY || '').trim();
  if (single) keys.push(single);
  return Array.from(new Set(keys));
}

const apiKeys = parseApiKeys();

const config = {
  port: int('PORT', 8787),

  agnes: {
    // 共享池：所有可用 key（按需轮询/负载均衡）
    apiKeys,
    // 兼容旧用法：取第一个 key
    apiKey: apiKeys[0] || '',
    baseUrl: process.env.AGNES_BASE_URL || 'https://apihub.agnes-ai.com',
    endpoint: process.env.AGNES_ENDPOINT || '/v1/images/generations',
    model: process.env.AGNES_MODEL || 'agnes-image-2.0-flash',
    requestTimeoutMs: int('REQUEST_TIMEOUT_MS', 300000),
    // 本地无 Key 时的模拟模式（仅用于联调验证流程）
    mock: process.env.AGNES_MOCK === '1',
    // 模拟模式下按概率注入 503 故障（0~1），用于验证重试/恢复
    mockFailRate: Number(process.env.AGNES_MOCK_FAIL_RATE) || 0,
  },

  // 文本模型（Agnes 2.0 Flash，OpenAI 兼容）：用于提示词优化、图片理解、Prompt 完整度校验
  text: {
    endpoint: process.env.AGNES_TEXT_ENDPOINT || '/v1/chat/completions',
    model: process.env.AGNES_TEXT_MODEL || 'agnes-2.0-flash',
    requestTimeoutMs: int('TEXT_REQUEST_TIMEOUT_MS', 60000),
    maxTokens: int('TEXT_MAX_TOKENS', 1024),
    temperature: Number(process.env.TEXT_TEMPERATURE) || 0.7,
  },

  // 视频生成（Agnes Video V2.0）配置
  video: {
    createEndpoint: process.env.AGNES_VIDEO_ENDPOINT || '/v1/videos',
    // 推荐查询方式：GET /agnesapi?video_id=...
    queryEndpoint: process.env.AGNES_VIDEO_QUERY_ENDPOINT || '/agnesapi',
    model: process.env.AGNES_VIDEO_MODEL || 'agnes-video-v2.0',
    // 视频生成耗时较长，单独的超时（毫秒）
    requestTimeoutMs: int('VIDEO_REQUEST_TIMEOUT_MS', 300000),
    // 默认尺寸（文档默认 1152x768）
    defaultWidth: int('VIDEO_DEFAULT_WIDTH', 1152),
    defaultHeight: int('VIDEO_DEFAULT_HEIGHT', 768),
    // 帧数上限与对齐约束：num_frames ≤ 441 且满足 8n+1
    maxFrames: int('VIDEO_MAX_FRAMES', 441),
    defaultFrames: int('VIDEO_DEFAULT_FRAMES', 121),
    defaultFrameRate: int('VIDEO_DEFAULT_FRAME_RATE', 24),
    // 后端轮询上游查询结果的间隔与上限（文档建议 5s）
    pollIntervalMs: int('VIDEO_POLL_INTERVAL_MS', 5000),
    pollTimeoutMs: int('VIDEO_POLL_TIMEOUT_MS', 600000),
  },

  // imgbb 图床：Agnes 视频接口仅支持图片 URL，本地上传的图片先转存到 imgbb 换公网 URL。
  imgbb: {
    apiKey: (process.env.IMGBB_API_KEY || '').trim(),
    baseUrl: process.env.IMGBB_BASE_URL || 'https://api.imgbb.com',
    requestTimeoutMs: int('IMGBB_REQUEST_TIMEOUT_MS', 60000),
    // 单图最大字节数（imgbb 上限 32MB），前后端共用此约束
    maxBytes: int('IMGBB_MAX_BYTES', 32 * 1024 * 1024),
    // 图片自动过期时间（秒，60~15552000）；0 表示永不过期
    expirationSec: int('IMGBB_EXPIRATION_SEC', 0),
  },

  // RPM 限流：上游硬性限制每个 Key 每分钟 20 个请求。
  // 多 Key 共享池下，总配额 = 单 key 配额 × key 数量；图片与视频分别独立计算。
  rateLimit: {
    windowMs: int('RATE_LIMIT_WINDOW_MS', 60000),
    imageRpm: int('IMAGE_RPM', 20),
    videoRpm: int('VIDEO_RPM', 20),
    // 等待队列轮询间隔（毫秒）：配额耗尽时多久检查一次是否有空闲 key 槽位
    waitPollMs: int('RATE_LIMIT_WAIT_POLL_MS', 500),
    // 单个任务最长等待时间（毫秒），超过则置失败，避免无限堆积
    maxWaitMs: int('RATE_LIMIT_MAX_WAIT_MS', 300000),
  },

  // 任务持久化（JSON 文件）
  persistence: {
    file: process.env.TASKS_DB_FILE || path.resolve(__dirname, 'data', 'tasks.json'),
    // 任务保留时长（毫秒），超过则在 GC 时清除
    ttlMs: int('TASKS_TTL_MS', 24 * 60 * 60 * 1000),
    // 最多保留的任务条数
    maxItems: int('TASKS_MAX_ITEMS', 500),
    // 写盘节流间隔（毫秒），合并高频更新，降低 IO
    flushIntervalMs: int('TASKS_FLUSH_INTERVAL_MS', 800),
  },

  queue: {
    // 默认并发数 1：同一时间只处理一个生成任务，避免超出接口并发限制
    maxConcurrency: int('MAX_CONCURRENCY', 1),
    minIntervalMs: int('MIN_INTERVAL_MS', 500),
    maxRetries: int('MAX_RETRIES', 3),
    retryBaseDelayMs: int('RETRY_BASE_DELAY_MS', 1500),
    // 单次重试退避上限（毫秒），避免指数退避无限增长
    retryMaxDelayMs: int('RETRY_MAX_DELAY_MS', 20000),
    // 退避抖动比例（0~1），打散并发客户端的"同步重试"，缓解上游二次冲击
    retryJitterRatio: Number(process.env.RETRY_JITTER_RATIO) || 0.3,
  },

  // 大尺寸适配：限制单张图像的总像素与单边长度，降低上游 GPU 资源占用
  image: {
    // 最大总像素（宽×高）。默认约 2.4MP（如 1920×1280），超出按比例缩小
    maxPixels: int('IMAGE_MAX_PIXELS', 2_359_296),
    // 单边最大长度
    maxSide: int('IMAGE_MAX_SIDE', 2048),
    // 单边最小长度
    minSide: int('IMAGE_MIN_SIDE', 256),
    // 尺寸需对齐的步长（多数模型要求 8 的倍数）
    sizeStep: int('IMAGE_SIZE_STEP', 8),
  },
};

config.isApiKeyConfigured = config.agnes.apiKeys.length > 0;
config.keyCount = config.agnes.apiKeys.length;

module.exports = config;
