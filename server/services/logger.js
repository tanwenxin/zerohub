'use strict';

const fs = require('fs');
const path = require('path');

/**
 * 轻量日志服务：
 * - 同时输出到控制台与按天分割的日志文件（logs/YYYY-MM-DD.log）
 * - 结构化记录：时间戳、级别、事件、上下文（任务 ID、状态、耗时等）
 * - 专门用于记录请求到达 / 排队 / 开始 / 完成 / 错误等关键节点
 */

const LOG_DIR = path.resolve(__dirname, '..', 'logs');

function ensureDir() {
  try {
    if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
  } catch {
    /* 忽略目录创建失败，仍可输出到控制台 */
  }
}

function currentLogFile() {
  const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return path.join(LOG_DIR, `${day}.log`);
}

function write(level, event, context = {}) {
  const entry = {
    ...context,
    time: new Date().toISOString(),
    level,
    event,
  };
  const line = JSON.stringify(entry);

  // 控制台
  const consoleFn = level === 'error' ? console.error : console.log;
  consoleFn(`[${entry.time}] ${level.toUpperCase()} ${event}`, context);

  // 文件
  try {
    ensureDir();
    fs.appendFile(currentLogFile(), line + '\n', () => {});
  } catch {
    /* 忽略写入失败 */
  }
}

module.exports = {
  info: (event, context) => write('info', event, context),
  warn: (event, context) => write('warn', event, context),
  error: (event, context) => write('error', event, context),
  logDir: LOG_DIR,
};
