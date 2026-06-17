// 与后端交互的 API 封装
import { getClientSessionId, withSessionQuery } from '../utils/session';

export type ImageTaskType = 'text2img' | 'img2img' | 'multi';
export type VideoTaskType = 'text2vid' | 'img2vid' | 'multivid' | 'keyframes';
export type TaskType = ImageTaskType | VideoTaskType;
export type ResponseFormat = 'url' | 'b64_json';

export interface GeneratedImage {
  url: string | null;
  b64: string | null;
  revisedPrompt: string | null;
}

export interface Task {
  id: string;
  type: TaskType;
  category?: 'image' | 'video';
  status: 'pending' | 'queued' | 'running' | 'done' | 'error';
  progress: number;
  createdAt: number;
  updatedAt: number;
  apiKeyIndex?: number | null;
  videoId?: string | null;
  durationMs?: number | null; // 生成耗时（毫秒），任务完成后回填
  params?: Record<string, unknown> | null;
  result:
    | {
        created: number;
        images?: GeneratedImage[];
        // 视频结果字段
        videoUrl?: string;
        size?: string;
        seconds?: string;
        videoId?: string;
      }
    | null;
  error: {
    message: string;
    userMessage?: string;
    code?: string | null;
    retryable?: boolean;
    status: number | null;
    data: unknown;
  } | null;
  debugInfo: {
    payloadPreview: unknown;
    events: Array<Record<string, unknown>>;
  };
}

export interface GenerateParams {
  type: ImageTaskType;
  prompt: string;
  size: string;
  responseFormat: ResponseFormat;
  imageUrls?: string[];
  files?: File[];
  source?: 'prompt-template';
  templateId?: string;
  templateSlug?: string;
  templateCategorySlug?: string;
}

export interface VideoGenerateParams {
  type: VideoTaskType;
  prompt: string;
  negativePrompt?: string;
  width?: number;
  height?: number;
  numFrames?: number;
  frameRate?: number;
  seed?: number;
  imageUrls?: string[];
  files?: File[];
}

// 频率超限错误：携带分类与重试时间，供前端友好提示
export class RateLimitError extends Error {
  category: string;
  retryAfterMs: number;
  limit: number;
  constructor(message: string, opts: { category: string; retryAfterMs: number; limit: number }) {
    super(message);
    this.name = 'RateLimitError';
    this.category = opts.category;
    this.retryAfterMs = opts.retryAfterMs;
    this.limit = opts.limit;
  }
}

// 通用 API 错误：携带后端返回的 code，供前端按错误类型分支处理（如内容违规清洗）
export class ApiError extends Error {
  code: string | null;
  status: number | null;
  constructor(message: string, opts: { code?: string | null; status?: number | null } = {}) {
    super(message);
    this.name = 'ApiError';
    this.code = opts.code ?? null;
    this.status = opts.status ?? null;
  }
}

function stringValue(value: unknown): string {
  return typeof value === 'string' && value.trim() ? value.trim() : '';
}

function extractErrorMessage(data: unknown, fallback: string): string {
  if (!data || typeof data !== 'object') return stringValue(data) || fallback;
  const record = data as Record<string, unknown>;
  const error = record.error as unknown;
  const message = record.message as unknown;

  const candidates = [
    error && typeof error === 'object' ? (error as Record<string, unknown>).message : null,
    error && typeof error === 'object' ? (error as Record<string, unknown>).error : null,
    message && typeof message === 'object' ? (message as Record<string, unknown>).error : null,
    error,
    message,
  ];

  for (const item of candidates) {
    const text = stringValue(item);
    if (text) return text;
  }

  return fallback;
}

function errorField(data: unknown, field: string): unknown {
  if (!data || typeof data !== 'object') return undefined;
  const record = data as Record<string, unknown>;
  const error = record.error;
  if (error && typeof error === 'object') return (error as Record<string, unknown>)[field];
  return record[field];
}

// 统一处理非 2xx 响应：429 抛 RateLimitError，其余抛普通 Error
async function throwResponseError(res: Response): Promise<never> {
  const data = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
  const message = extractErrorMessage(data, `HTTP ${res.status}`);
  if (res.status === 429) {
    throw new RateLimitError(message || '请求过于频繁', {
      category: String(errorField(data, 'category') || 'request'),
      retryAfterMs: Number(errorField(data, 'retryAfterMs')) || 0,
      limit: Number(errorField(data, 'limit')) || 0,
    });
  }
  const code = errorField(data, 'code');
  throw new ApiError(message, { code: code != null ? String(code) : null, status: res.status });
}

function sessionHeaders(extra?: HeadersInit): HeadersInit {
  return {
    ...(extra || {}),
    'X-Agnes-Session-Id': getClientSessionId(),
  };
}

export async function generate(params: GenerateParams): Promise<{ taskId: string }> {
  const form = new FormData();
  form.append('type', params.type);
  form.append('prompt', params.prompt);
  form.append('size', params.size);
  form.append('responseFormat', params.responseFormat);
  if (params.imageUrls && params.imageUrls.length) {
    form.append('imageUrls', JSON.stringify(params.imageUrls));
  }
  if (params.source) form.append('source', params.source);
  if (params.templateId) form.append('templateId', params.templateId);
  if (params.templateSlug) form.append('templateSlug', params.templateSlug);
  if (params.templateCategorySlug) form.append('templateCategorySlug', params.templateCategorySlug);
  if (params.files) {
    for (const f of params.files) form.append('images', f);
  }

  const res = await fetch('/api/generate', { method: 'POST', headers: sessionHeaders(), body: form });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

export async function generateVideo(params: VideoGenerateParams): Promise<{ taskId: string }> {
  const form = new FormData();
  form.append('type', params.type);
  form.append('prompt', params.prompt);
  if (params.negativePrompt) form.append('negativePrompt', params.negativePrompt);
  if (params.width != null) form.append('width', String(params.width));
  if (params.height != null) form.append('height', String(params.height));
  if (params.numFrames != null) form.append('numFrames', String(params.numFrames));
  if (params.frameRate != null) form.append('frameRate', String(params.frameRate));
  if (params.seed != null) form.append('seed', String(params.seed));
  if (params.imageUrls && params.imageUrls.length) {
    form.append('imageUrls', JSON.stringify(params.imageUrls));
  }
  if (params.files) {
    for (const f of params.files) form.append('images', f);
  }

  const res = await fetch('/api/videos', { method: 'POST', headers: sessionHeaders(), body: form });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

export async function getTask(id: string): Promise<Task> {
  const res = await fetch(`/api/tasks/${id}`, { headers: sessionHeaders() });
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Query failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
  return res.json();
}

/** 获取任务列表（历史记录），可按分类过滤 */
export async function listTasks(category?: 'image' | 'video', limit = 100): Promise<Task[]> {
  const qs = new URLSearchParams();
  if (category) qs.set('category', category);
  qs.set('limit', String(limit));
  const res = await fetch(`/api/tasks?${qs.toString()}`, { headers: sessionHeaders() });
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Query failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
  const data = await res.json();
  return Array.isArray(data.tasks) ? data.tasks : [];
}

/** 刷新/重试任务：图片走 /tasks/:id/refresh，视频走 /videos/:id/refresh */
export async function refreshTask(id: string, category: 'image' | 'video'): Promise<{ taskId: string; status: string }> {
  const path = category === 'video' ? `/api/videos/${id}/refresh` : `/api/tasks/${id}/refresh`;
  const res = await fetch(path, { method: 'POST', headers: sessionHeaders() });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

/** 删除任务（从历史中移除） */
export async function deleteTask(id: string): Promise<void> {
  const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE', headers: sessionHeaders() });
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Delete failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
}

export function downloadUrl(taskId: string, index: number): string {
  return withSessionQuery(`/api/tasks/${taskId}/download/${index}`);
}

/** 调用文本模型优化提示词，按当前生成模式走对应的结构化规范，返回优化后的提示词 */
export async function optimizePrompt(
  prompt: string,
  mode: TaskType
): Promise<{ prompt: string }> {
  const res = await fetch('/api/text/optimize-prompt', {
    method: 'POST',
    headers: sessionHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ prompt, mode }),
  });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

export async function translatePrompt(
  prompt: string,
  targetLanguage: 'zh' | 'en'
): Promise<{ prompt: string; targetLanguage: 'zh' | 'en' }> {
  const res = await fetch('/api/text/translate-prompt', {
    method: 'POST',
    headers: sessionHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ prompt, targetLanguage }),
  });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

export type PromptCompletenessLevel = 'weak' | 'fair' | 'strong';

export interface PromptCompleteness {
  score: number;
  level: PromptCompletenessLevel;
  missing: string[];
  suggestions: string[];
  summary: string;
}

/**
 * 调用文本模型评估提示词完整度，按当前生成模式规范返回结构化结果：
 * 评分、薄弱/缺失维度、改进建议与一句话概述。
 */
export async function checkPromptCompleteness(
  prompt: string,
  mode: TaskType
): Promise<PromptCompleteness> {
  const res = await fetch('/api/text/prompt-completeness', {
    method: 'POST',
    headers: sessionHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ prompt, mode }),
  });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

/**
 * 调用后端去除提示词中命中违规策略的敏感词（如露骨色情/性剥削相关词汇），
 * 返回清洗后的提示词，便于用户重新评估与提交，无需手动修改。
 */
export async function sanitizePrompt(
  prompt: string
): Promise<{ prompt: string; changed: boolean; removed: string[] }> {
  const res = await fetch('/api/text/sanitize-prompt', {
    method: 'POST',
    headers: sessionHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

/**
 * 调用文本模型理解图片（https URL 或 data URI），结合用户已输入的 prompt（可选），
 * 返回符合当前生成模式规范的提示词。
 */
export async function understandImage(
  image: string,
  mode: TaskType,
  prompt?: string
): Promise<{ result: string }> {
  const res = await fetch('/api/text/understand-image', {
    method: 'POST',
    headers: sessionHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ image, mode, prompt }),
  });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

/** 将本地文件读取为 Data URI（base64），供图片理解传给后端 */
export function fileToDataUri(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error || new Error('读取文件失败'));
    reader.readAsDataURL(file);
  });
}

export function videoDownloadUrl(taskId: string): string {
  return withSessionQuery(`/api/videos/${taskId}/download`);
}

export interface RateLimitSnapshot {
  used: number;
  remaining: number;
  limit: number;
  windowMs: number;
  retryAfterMs: number;
  keyCount?: number;
  perKey?: Array<{ index: number; used: number; limit: number; remaining: number }>;
}

export interface Health {
  ok: boolean;
  apiKeyConfigured: boolean;
  keyCount?: number;
  model: string;
  queue: { pending: number; running: number; maxConcurrency: number };
  rateLimit?: { image: RateLimitSnapshot; video: RateLimitSnapshot };
}

export async function getHealth(): Promise<Health> {
  const res = await fetch('/api/health');
  return res.json();
}

export type PublicTaskStatus = Task['status'];
export type PublicTaskCategory = 'image' | 'video';

export interface PublicStatsBucket {
  key: string;
  total: number;
  done: number;
  error: number;
  active: number;
  successRate: number;
  avgDurationMs: number | null;
  p50DurationMs: number | null;
  p95DurationMs: number | null;
  byStatus: Record<PublicTaskStatus, number>;
}

export interface PublicStatsDailyBucket {
  date: string;
  total: number;
  done: number;
  error: number;
  active: number;
  image: number;
  video: number;
}

export interface PublicStatsCounter {
  key: string;
  count: number;
  status?: number | null;
}

export interface PublicStatsRecentTask {
  createdAt: number;
  updatedAt: number;
  category: PublicTaskCategory;
  type: string;
  status: PublicTaskStatus;
  progress: number;
  durationMs: number | null;
  errorCode: string | null;
  errorStatus: number | null;
  eventCount: number;
  lastPhase: string | null;
}

export interface PublicGenerationStats {
  rangeDays: number;
  generatedAt: number;
  since: number;
  retentionDays: number;
  retentionMaxItems: number;
  summary: PublicStatsBucket;
  byCategory: PublicStatsBucket[];
  byType: PublicStatsBucket[];
  byStatus: Record<PublicTaskStatus, number>;
  daily: PublicStatsDailyBucket[];
  errors: PublicStatsCounter[];
  phases: PublicStatsCounter[];
  recentTasks: PublicStatsRecentTask[];
}

export async function getPublicGenerationStats(days = 30): Promise<PublicGenerationStats> {
  const qs = new URLSearchParams();
  qs.set('days', String(days));
  const res = await fetch(`/api/public-stats?${qs.toString()}`);
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Stats query failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export interface PromptTemplateCategory {
  name: string;
  slug: string;
  count: number;
  description: string;
}

export interface PromptTemplate {
  id: string;
  slug: string;
  title: string;
  prompt: string;
  category: string;
  categorySlug: string;
  rawCategory: string;
  sourceLine: number | null;
  imageUrl: string | null;
  imageOptimized: Record<string, Record<string, string>> | null;
  imageStatus: string;
  imageGeneratedAt: string | null;
}

export interface PromptTemplatePagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface PromptTemplateListResponse {
  items: PromptTemplate[];
  pagination: PromptTemplatePagination;
  categories: PromptTemplateCategory[];
  meta?: {
    version: number;
    updatedAt: string | null;
    total: number;
  };
}

export async function listPromptTemplates(params: {
  page?: number;
  pageSize?: number;
  category?: string;
  q?: string;
} = {}): Promise<PromptTemplateListResponse> {
  const qs = new URLSearchParams();
  if (params.page) qs.set('page', String(params.page));
  if (params.pageSize) qs.set('pageSize', String(params.pageSize));
  if (params.category) qs.set('category', params.category);
  if (params.q) qs.set('q', params.q);
  const res = await fetch(`/api/prompt-templates?${qs.toString()}`);
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Template query failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export async function listPromptTemplateCategories(): Promise<PromptTemplateCategory[]> {
  const res = await fetch('/api/prompt-templates/categories');
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Category query failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
  const data = await res.json();
  return Array.isArray(data.categories) ? data.categories : [];
}

export async function getPromptTemplateByPath(
  categorySlug: string,
  templateSlug: string
): Promise<PromptTemplate> {
  const res = await fetch(
    `/api/prompt-templates/category/${encodeURIComponent(categorySlug)}/${encodeURIComponent(templateSlug)}`
  );
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Template query failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
  const data = await res.json();
  return data.template;
}
