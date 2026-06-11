// 浏览器桌面通知工具：请求权限 + 任务完成时通知
import type { TaskType } from '../api/client';
import { translate, type Language, type TranslationKey } from '../i18n';

const TYPE_LABEL_KEY: Record<TaskType, TranslationKey> = {
  text2img: 'task.type.text2img',
  img2img: 'task.type.img2img',
  multi: 'task.type.multi',
  text2vid: 'task.type.text2vid',
  img2vid: 'task.type.img2vid',
  multivid: 'task.type.multivid',
  keyframes: 'task.type.keyframes',
};

const NOTIFICATION_ENABLED_KEY = 'agnes:notifications-enabled';
const NOTIFICATION_STATUS_KEY = 'agnes:notification-permission-status';
const activeNotifications = new Set<Notification>();
type PersistedNotificationStatus = NotificationPermission | 'unsupported';

export function notificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export function getPermission(): NotificationPermission | 'unsupported' {
  if (!notificationSupported()) return 'unsupported';
  return Notification.permission;
}

export function readNotificationEnabled(): boolean {
  if (!notificationSupported()) return false;
  try {
    const status = window.localStorage.getItem(NOTIFICATION_STATUS_KEY);
    if (status === 'granted') return Notification.permission === 'granted';
    if (status === 'denied' || status === 'default' || status === 'unsupported') return false;

    // 兼容旧版本布尔开关。首次迁移后仍以浏览器真实权限为准。
    const saved = window.localStorage.getItem(NOTIFICATION_ENABLED_KEY);
    if (saved === '1') return Notification.permission === 'granted';
    if (saved === '0') return false;
  } catch {
    return false;
  }
  return false;
}

export function setNotificationEnabled(enabled: boolean): void {
  if (!notificationSupported()) return;
  if (!enabled) closeActiveNotifications();
  try {
    window.localStorage.setItem(NOTIFICATION_ENABLED_KEY, enabled ? '1' : '0');
    window.localStorage.setItem(NOTIFICATION_STATUS_KEY, enabled ? 'granted' : 'default');
  } catch {
    // localStorage may be unavailable in private contexts; notification sending still checks permission.
  }
}

function closeActiveNotifications(): void {
  for (const notification of activeNotifications) {
    try {
      notification.close();
    } catch {
      /* 忽略浏览器关闭通知失败 */
    }
  }
  activeNotifications.clear();
}

function readPersistedStatus(): PersistedNotificationStatus | null {
  if (typeof window === 'undefined') return null;
  try {
    const status = window.localStorage.getItem(NOTIFICATION_STATUS_KEY);
    if (status === 'granted' || status === 'denied' || status === 'default' || status === 'unsupported') {
      return status;
    }
  } catch {
    return null;
  }
  return null;
}

function writePersistedStatus(status: PersistedNotificationStatus): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(NOTIFICATION_STATUS_KEY, status);
    window.localStorage.setItem(NOTIFICATION_ENABLED_KEY, status === 'granted' ? '1' : '0');
  } catch {
    // localStorage may be unavailable in private contexts; notification sending still checks permission.
  }
}

/**
 * 后台通知初始化：
 * - 首次打开页面自动请求浏览器通知权限；
 * - 后续打开页面读取持久化状态，避免重复弹窗；
 * - 浏览器不支持或用户拒绝时仅记录状态，不再尝试发送通知。
 */
export async function initializeBackgroundNotifications(): Promise<PersistedNotificationStatus> {
  if (!notificationSupported()) {
    writePersistedStatus('unsupported');
    return 'unsupported';
  }

  const browserPermission = Notification.permission;
  const persisted = readPersistedStatus();

  if (persisted) {
    if (persisted === 'granted' && browserPermission !== 'granted') {
      writePersistedStatus(browserPermission);
      return browserPermission;
    }
    return persisted;
  }

  if (browserPermission === 'granted' || browserPermission === 'denied') {
    writePersistedStatus(browserPermission);
    return browserPermission;
  }

  try {
    const permission = await Notification.requestPermission();
    writePersistedStatus(permission);
    return permission;
  } catch {
    const fallback = Notification.permission;
    writePersistedStatus(fallback);
    return fallback;
  }
}

/** 主动请求通知权限（需在用户交互中调用，如点击生成） */
export async function ensurePermission(forceEnable = false): Promise<NotificationPermission | 'unsupported'> {
  if (!notificationSupported()) return 'unsupported';
  try {
    if (!forceEnable && window.localStorage.getItem(NOTIFICATION_ENABLED_KEY) !== '1') {
      return Notification.permission;
    }
  } catch {
    // Continue with browser permission if preference storage is unavailable.
  }
  if (Notification.permission === 'granted' || Notification.permission === 'denied') {
    if (Notification.permission === 'granted' && forceEnable) setNotificationEnabled(true);
    return Notification.permission;
  }
  try {
    const permission = await Notification.requestPermission();
    setNotificationEnabled(permission === 'granted');
    return permission;
  } catch {
    return Notification.permission;
  }
}

interface NotifyOptions {
  language: Language;
  type: TaskType;
  prompt: string;
  success: boolean;
  imageUrl?: string;
  errorMessage?: string;
  completedAt?: number;
}

/** 任务完成（成功/失败）时发送通知 */
export function notifyTaskFinished(opts: NotifyOptions): void {
  if (!notificationSupported() || Notification.permission !== 'granted' || !readNotificationEnabled()) return;

  const label = translate(opts.language, TYPE_LABEL_KEY[opts.type]);
  const title = opts.success
    ? translate(opts.language, 'notify.taskSuccess', { type: label })
    : translate(opts.language, 'notify.taskError', { type: label });
  const completedAt = new Date(opts.completedAt || Date.now()).toLocaleString(opts.language === 'zh' ? 'zh-CN' : 'en-US');
  const detail = opts.success
    ? translate(opts.language, 'notify.prompt', {
        prompt: opts.prompt.slice(0, 60) || translate(opts.language, 'notify.emptyPrompt'),
      })
    : translate(opts.language, 'notify.reason', {
        reason: opts.errorMessage || translate(opts.language, 'notify.defaultError'),
      });
  const body = `${translate(opts.language, 'notify.completedAt', { time: completedAt })}\n${detail}`;

  try {
    const n = new Notification(title, {
      body,
      icon: opts.success ? opts.imageUrl : undefined,
      tag: `agnes-${Date.now()}`,
    });
    activeNotifications.add(n);
    n.onclose = () => {
      activeNotifications.delete(n);
    };
    // 点击通知聚焦回页面
    n.onclick = () => {
      window.focus();
      n.close();
    };
  } catch {
    /* 某些浏览器在非安全上下文会抛错，忽略 */
  }
}
