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

export function notificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export function getPermission(): NotificationPermission | 'unsupported' {
  if (!notificationSupported()) return 'unsupported';
  return Notification.permission;
}

/** 主动请求通知权限（需在用户交互中调用，如点击生成） */
export async function ensurePermission(): Promise<NotificationPermission | 'unsupported'> {
  if (!notificationSupported()) return 'unsupported';
  if (Notification.permission === 'granted' || Notification.permission === 'denied') {
    return Notification.permission;
  }
  try {
    return await Notification.requestPermission();
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
}

/** 任务完成（成功/失败）时发送通知 */
export function notifyTaskFinished(opts: NotifyOptions): void {
  if (!notificationSupported() || Notification.permission !== 'granted') return;

  const label = translate(opts.language, TYPE_LABEL_KEY[opts.type]);
  const title = opts.success
    ? translate(opts.language, 'notify.taskSuccess', { type: label })
    : translate(opts.language, 'notify.taskError', { type: label });
  const body = opts.success
    ? translate(opts.language, 'notify.prompt', {
        prompt: opts.prompt.slice(0, 60) || translate(opts.language, 'notify.emptyPrompt'),
      })
    : translate(opts.language, 'notify.reason', {
        reason: opts.errorMessage || translate(opts.language, 'notify.defaultError'),
      });

  try {
    const n = new Notification(title, {
      body,
      icon: opts.success ? opts.imageUrl : undefined,
      tag: `agnes-${Date.now()}`,
    });
    // 点击通知聚焦回页面
    n.onclick = () => {
      window.focus();
      n.close();
    };
  } catch {
    /* 某些浏览器在非安全上下文会抛错，忽略 */
  }
}
