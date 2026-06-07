// 与后端交互的 API 封装
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


// 统一处理非 2xx 响应：429 抛 RateLimitError，其余抛普通 Error
async function throwResponseError(res: Response): Promise<never> {
  const data = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
  if (res.status === 429) {
    throw new RateLimitError(data.error || '请求过于频繁', {
      category: data.category || 'request',
      retryAfterMs: Number(data.retryAfterMs) || 0,
      limit: Number(data.limit) || 0,
    });
  }
  throw new Error(data.error || `HTTP ${res.status}`);
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
  if (params.files) {
    for (const f of params.files) form.append('images', f);
  }

  const res = await fetch('/api/generate', { method: 'POST', body: form });
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

  const res = await fetch('/api/videos', { method: 'POST', body: form });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

export async function getTask(id: string): Promise<Task> {
  const res = await fetch(`/api/tasks/${id}`);
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
  const res = await fetch(`/api/tasks?${qs.toString()}`);
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
  const res = await fetch(path, { method: 'POST' });
  if (!res.ok) await throwResponseError(res);
  return res.json();
}

/** 删除任务（从历史中移除） */
export async function deleteTask(id: string): Promise<void> {
  const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const data = await res.json().catch(() => ({ error: 'Delete failed' }));
    throw new Error(data.error || `HTTP ${res.status}`);
  }
}

export function downloadUrl(taskId: string, index: number): string {
  return `/api/tasks/${taskId}/download/${index}`;
}

export function videoDownloadUrl(taskId: string): string {
  return `/api/videos/${taskId}/download`;
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
