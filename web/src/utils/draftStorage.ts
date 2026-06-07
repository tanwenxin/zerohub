// 生成页「草稿」持久化：在图片/视频模式切换、页面刷新后保留用户输入。
//
// 设计：
// - 文本与参数字段同步存入 localStorage（成本低）；
// - 上传的本地图片（File 对象无法直接序列化）转为 base64 Data URI 单独存储，
//   恢复时再还原为 File 对象，保证既能预览又能正常提交；
// - 仅当用户点击「生成」时由页面主动调用 clear*，为下次输入准备干净环境。

import type { ImageTaskType, ResponseFormat, VideoTaskType } from '../api/client';

export interface SerializedFile {
  name: string;
  type: string;
  dataUri: string; // data:image/...;base64,xxx
}

export interface ImageDraft {
  mode: ImageTaskType;
  prompt: string;
  size: string;
  responseFormat: ResponseFormat;
  urls: string[];
}

export interface VideoDraft {
  mode: VideoTaskType;
  prompt: string;
  negativePrompt: string;
  frames: number;
  frameRate: number;
  size: string;
  seed: string;
  urls: string[];
}

const KEYS = {
  imageDraft: 'agnes:image-draft',
  imageDraftFiles: 'agnes:image-draft-files',
  videoDraft: 'agnes:video-draft',
  videoDraftFiles: 'agnes:video-draft-files',
} as const;

function readJson<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* 忽略本地存储不可用 / 超出配额 */
  }
}

function removeKey(key: string) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* 忽略本地存储不可用 */
  }
}

// ===== File <-> base64 互转 =====

/** 将 File 列表序列化为 base64（异步） */
export function serializeFiles(files: File[]): Promise<SerializedFile[]> {
  return Promise.all(
    files.map(
      (file) =>
        new Promise<SerializedFile>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () =>
            resolve({ name: file.name, type: file.type, dataUri: String(reader.result || '') });
          reader.onerror = () => reject(reader.error || new Error('读取文件失败'));
          reader.readAsDataURL(file);
        })
    )
  );
}

/** 将 Data URI 还原为 File 对象 */
export function dataUriToFile(dataUri: string, name: string, type: string): File {
  const comma = dataUri.indexOf(',');
  const meta = dataUri.slice(0, comma);
  const base64 = dataUri.slice(comma + 1);
  const mime = type || (meta.match(/data:([^;]+)/)?.[1] ?? 'image/png');
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new File([bytes], name || 'image.png', { type: mime });
}

/** 将序列化文件还原为 File 列表 */
export function deserializeFiles(items: SerializedFile[] | null): File[] {
  if (!Array.isArray(items)) return [];
  const out: File[] = [];
  for (const item of items) {
    if (item && typeof item.dataUri === 'string' && item.dataUri.startsWith('data:')) {
      try {
        out.push(dataUriToFile(item.dataUri, item.name, item.type));
      } catch {
        /* 跳过损坏项 */
      }
    }
  }
  return out;
}

// ===== 图片页草稿 =====

export function readImageDraft(): ImageDraft | null {
  return readJson<ImageDraft>(KEYS.imageDraft);
}

export function saveImageDraft(draft: ImageDraft) {
  writeJson(KEYS.imageDraft, draft);
}

export function readImageDraftFiles(): File[] {
  return deserializeFiles(readJson<SerializedFile[]>(KEYS.imageDraftFiles));
}

export async function saveImageDraftFiles(files: File[]) {
  if (!files.length) {
    removeKey(KEYS.imageDraftFiles);
    return;
  }
  writeJson(KEYS.imageDraftFiles, await serializeFiles(files));
}

export function clearImageDraft() {
  removeKey(KEYS.imageDraft);
  removeKey(KEYS.imageDraftFiles);
}

// ===== 视频页草稿 =====

export function readVideoDraft(): VideoDraft | null {
  return readJson<VideoDraft>(KEYS.videoDraft);
}

export function saveVideoDraft(draft: VideoDraft) {
  writeJson(KEYS.videoDraft, draft);
}

export function readVideoDraftFiles(): File[] {
  return deserializeFiles(readJson<SerializedFile[]>(KEYS.videoDraftFiles));
}

export async function saveVideoDraftFiles(files: File[]) {
  if (!files.length) {
    removeKey(KEYS.videoDraftFiles);
    return;
  }
  writeJson(KEYS.videoDraftFiles, await serializeFiles(files));
}

export function clearVideoDraft() {
  removeKey(KEYS.videoDraft);
  removeKey(KEYS.videoDraftFiles);
}
