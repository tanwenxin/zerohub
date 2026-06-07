export const DEFAULT_IMAGE_SIZE = '1024x1024';
export const DEFAULT_VIDEO_SIZE = '1152x768';
export const DEFAULT_VIDEO_MODE = 'text2vid';
export const DEFAULT_VIDEO_FRAMES = 121;
export const DEFAULT_VIDEO_FRAME_RATE = 24;

const STORAGE_KEYS = {
  imageSize: 'agnes:image-size',
  videoSize: 'agnes:video-size',
  videoMode: 'agnes:video-mode',
  videoFrames: 'agnes:video-frames',
  videoFrameRate: 'agnes:video-frame-rate',
  videoNegativePrompt: 'agnes:video-negative-prompt',
  videoSeed: 'agnes:video-seed',
} as const;

const VIDEO_MODES = ['text2vid', 'img2vid', 'multivid', 'keyframes'] as const;
const VIDEO_FRAME_VALUES = [81, 121, 241, 441] as const;
const VIDEO_FRAME_RATE_VALUES = [8, 12, 16, 24, 30] as const;

function isSizeValue(value: string | null): value is string {
  return Boolean(value && /^\d+x\d+$/.test(value));
}

function isVideoMode(value: string | null): value is (typeof VIDEO_MODES)[number] {
  return VIDEO_MODES.some((mode) => mode == value);
}

function readNumberPreference(key: keyof typeof STORAGE_KEYS, fallback: number, allowed: readonly number[]): number {
  if (typeof window === 'undefined') return fallback;
  try {
    const value = Number(window.localStorage.getItem(STORAGE_KEYS[key]));
    return allowed.some((item) => item == value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeNumberPreference(key: keyof typeof STORAGE_KEYS, value: number, allowed: readonly number[]) {
  if (typeof window === 'undefined' || !allowed.some((item) => item == value)) return;
  try {
    window.localStorage.setItem(STORAGE_KEYS[key], String(value));
  } catch {
    /* 忽略本地存储不可用 */
  }
}

function readStringPreference(key: keyof typeof STORAGE_KEYS): string {
  if (typeof window === 'undefined') return '';
  try {
    return window.localStorage.getItem(STORAGE_KEYS[key]) || '';
  } catch {
    return '';
  }
}

function writeStringPreference(key: keyof typeof STORAGE_KEYS, value: string) {
  if (typeof window === 'undefined') return;
  try {
    const next = value.trim();
    if (next) {
      window.localStorage.setItem(STORAGE_KEYS[key], next);
    } else {
      window.localStorage.removeItem(STORAGE_KEYS[key]);
    }
  } catch {
    /* 忽略本地存储不可用 */
  }
}

function readSizePreference(key: keyof typeof STORAGE_KEYS, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  try {
    const value = window.localStorage.getItem(STORAGE_KEYS[key]);
    return isSizeValue(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeSizePreference(key: keyof typeof STORAGE_KEYS, value: string) {
  if (typeof window === 'undefined' || !isSizeValue(value)) return;
  try {
    window.localStorage.setItem(STORAGE_KEYS[key], value);
  } catch {
    /* 忽略本地存储不可用 */
  }
}

function clearSizePreference(key: keyof typeof STORAGE_KEYS) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEYS[key]);
  } catch {
    /* 忽略本地存储不可用 */
  }
}

export function readImageSizePreference(): string {
  return readSizePreference('imageSize', DEFAULT_IMAGE_SIZE);
}

export function saveImageSizePreference(value: string) {
  writeSizePreference('imageSize', value);
}

export function clearImageSizePreference() {
  clearSizePreference('imageSize');
}

export function readVideoSizePreference(): string {
  return readSizePreference('videoSize', DEFAULT_VIDEO_SIZE);
}

export function saveVideoSizePreference(value: string) {
  writeSizePreference('videoSize', value);
}

export function clearVideoSizePreference() {
  clearSizePreference('videoSize');
}

export function readVideoModePreference(): (typeof VIDEO_MODES)[number] {
  if (typeof window === 'undefined') return DEFAULT_VIDEO_MODE;
  try {
    const value = window.localStorage.getItem(STORAGE_KEYS.videoMode);
    return isVideoMode(value) ? value : DEFAULT_VIDEO_MODE;
  } catch {
    return DEFAULT_VIDEO_MODE;
  }
}

export function saveVideoModePreference(value: string) {
  if (typeof window === 'undefined' || !isVideoMode(value)) return;
  try {
    window.localStorage.setItem(STORAGE_KEYS.videoMode, value);
  } catch {
    /* 忽略本地存储不可用 */
  }
}

export function clearVideoModePreference() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEYS.videoMode);
  } catch {
    /* 忽略本地存储不可用 */
  }
}

export function readVideoFramesPreference(): number {
  return readNumberPreference('videoFrames', DEFAULT_VIDEO_FRAMES, VIDEO_FRAME_VALUES);
}

export function saveVideoFramesPreference(value: number) {
  writeNumberPreference('videoFrames', value, VIDEO_FRAME_VALUES);
}

export function readVideoFrameRatePreference(): number {
  return readNumberPreference('videoFrameRate', DEFAULT_VIDEO_FRAME_RATE, VIDEO_FRAME_RATE_VALUES);
}

export function saveVideoFrameRatePreference(value: number) {
  writeNumberPreference('videoFrameRate', value, VIDEO_FRAME_RATE_VALUES);
}

export function readVideoNegativePromptPreference(): string {
  return readStringPreference('videoNegativePrompt');
}

export function saveVideoNegativePromptPreference(value: string) {
  writeStringPreference('videoNegativePrompt', value);
}

export function readVideoSeedPreference(): string {
  return readStringPreference('videoSeed');
}

export function saveVideoSeedPreference(value: string) {
  writeStringPreference('videoSeed', value);
}
