'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const compression = require('compression');

const config = require('./config');
const imagesRouter = require('./routes/images');
const videosRouter = require('./routes/videos');
const textRouter = require('./routes/text');
const statsRouter = require('./routes/stats');
const promptTemplatesRouter = require('./routes/promptTemplates');
const logger = require('./services/logger');

const app = express();
const publicDir = path.resolve(__dirname, '..', 'public');
const publicIndex = path.join(publicDir, 'index.html');
const publicNotFound = path.join(publicDir, '404.html');

function prerenderedPageFor(requestPath) {
  const normalized = requestPath.replace(/\/+$/, '') || '/';
  if (normalized === '/') return publicIndex;
  const relativePath = normalized.replace(/^\/+/, '');
  const candidate = path.resolve(publicDir, `${relativePath}.html`);
  if (!candidate.startsWith(`${publicDir}${path.sep}`)) return null;
  return candidate;
}

function redactSensitive(value) {
  if (Array.isArray(value)) return value.map(redactSensitive);
  if (!value || typeof value !== 'object') return value;
  const out = {};
  for (const [key, item] of Object.entries(value)) {
    if (/key|token|authorization|secret|password/i.test(key)) {
      out[key] = '[REDACTED]';
    } else {
      out[key] = redactSensitive(item);
    }
  }
  return out;
}

function summarizeBody(body) {
  if (body == null) return null;
  const redacted = redactSensitive(body);
  const text = typeof redacted === 'string' ? redacted : JSON.stringify(redacted);
  if (text.length <= 2000) return redacted;
  return {
    truncated: true,
    preview: text.slice(0, 2000),
  };
}

app.use(cors());
app.use(compression({ threshold: 1024 }));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// HTTP 访问与错误响应日志（跳过高频轮询的 GET /api/tasks 与健康检查，避免日志噪音）
app.use((req, res, next) => {
  if (!req.path.startsWith('/api')) return next();

  const startedAt = Date.now();
  const requestPath = req.originalUrl.split('?')[0];
  const isPolling = req.method === 'GET' && /^\/tasks\//.test(requestPath.replace('/api', ''));
  const isHealth = requestPath === '/api/health';
  const shouldLog = !isPolling && !isHealth;

  if (shouldLog) {
    logger.info('http.access', { method: req.method, path: requestPath });
  }

  const originalJson = res.json.bind(res);
  res.json = (body) => {
    res.locals.responseBody = body;
    return originalJson(body);
  };

  res.on('finish', () => {
    if (!shouldLog || res.statusCode < 400) return;
    const payload = {
      method: req.method,
      path: requestPath,
      status: res.statusCode,
      durationMs: Date.now() - startedAt,
      response: summarizeBody(res.locals.responseBody),
    };
    if (res.statusCode >= 500) {
      logger.error('http.error_response', payload);
    } else {
      logger.warn('http.error_response', payload);
    }
  });

  next();
});

app.use('/api', imagesRouter);
app.use('/api', videosRouter);
app.use('/api', textRouter);
app.use('/api', statsRouter);
app.use('/api', promptTemplatesRouter);

function setStaticCacheHeaders(res, filePath) {
  if (filePath.includes(`${path.sep}assets${path.sep}`)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return;
  }
  if (filePath.includes(`${path.sep}prompt-template-images${path.sep}`)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return;
  }
  if (/\.(?:avif|webp|png|jpe?g|gif|svg|ico|woff2?|ttf|otf)$/i.test(filePath)) {
    res.setHeader('Cache-Control', 'public, max-age=2592000, stale-while-revalidate=86400');
    return;
  }
  if (/\.(?:json|xml|txt)$/i.test(filePath)) {
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    return;
  }
  if (filePath.endsWith('.html') || !path.extname(filePath)) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    return;
  }
  res.setHeader('Cache-Control', 'public, max-age=86400');
}

// 生产同域部署：Serv00 会优先处理 public/ 静态文件；这里保留本地/代理部署兜底。
// vite-react-ssg 产出扁平化预渲染页（如 image.html），通过 extensions 让 /image 命中 image.html。
app.use(express.static(publicDir, { extensions: ['html'], redirect: false, setHeaders: setStaticCacheHeaders }));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  const prerenderedPage = prerenderedPageFor(req.path);
  if (prerenderedPage && fs.existsSync(prerenderedPage)) return res.sendFile(prerenderedPage);
  // 未命中任何预渲染页面：优先返回预渲染 404 页，缺省回退首页。
  if (fs.existsSync(publicNotFound)) return res.status(404).sendFile(publicNotFound);
  if (fs.existsSync(publicIndex)) return res.sendFile(publicIndex);
  return next();
});

// 兜底错误处理
app.use((err, req, res, next) => {
  const status = err.status || 500;
  logger.error('server.error', { message: err.message, path: req.path, status });
  res.status(status).json({ error: err.message || '服务器内部错误' });
});

app.listen(config.port, () => {
  console.log(`\nAgnes Image Studio 后端已启动`);
  console.log(`  地址: http://localhost:${config.port}`);
  console.log(`  模型: ${config.agnes.model}`);
  console.log(`  API Key: ${config.isApiKeyConfigured ? '已配置' : '⚠️ 未配置（请在 server/.env 填写 AGNES_API_KEY）'}`);
  console.log(`  队列: 并发=${config.queue.maxConcurrency} 间隔=${config.queue.minIntervalMs}ms 重试=${config.queue.maxRetries}`);
  console.log(`  日志目录: ${logger.logDir}\n`);
  logger.info('server.started', {
    port: config.port,
    model: config.agnes.model,
    maxConcurrency: config.queue.maxConcurrency,
  });
});
