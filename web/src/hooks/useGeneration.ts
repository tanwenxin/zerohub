import { useCallback, useEffect, useRef, useState } from 'react';
import {
  generate,
  generateVideo,
  getTask,
  RateLimitError,
  type GenerateParams,
  type VideoGenerateParams,
  type TaskType,
  type Task,
} from '../api/client';
import { notifyTaskFinished } from '../utils/notify';
import { translate, type Language } from '../i18n';

// 本地任务条目：包含一个标识 + 提交参数摘要 + 服务端任务状态
export interface LocalTask {
  localId: string;
  label: string; // 展示用：prompt 摘要
  type: TaskType;
  size: string;
  prompt: string;
  task: Task | null; // 服务端返回的任务状态
  submitError: string | null; // 提交阶段错误
  retrying: boolean; // 是否正在重试查询（点击重试后到拿到结果前）
}

function imageSrc(img: { url: string | null; b64: string | null }): string {
  return img.url || (img.b64 ? `data:image/png;base64,${img.b64}` : '');
}

/**
 * 多任务并行生成 hook：
 * - 同一标签页可同时提交多个任务（前端不做并发限制，交由服务端排队）
 * - 每个任务独立轮询，展示排队/生成进度
 * - 任务完成后把图像地址写入 localStorage
 */
export function useMultiGeneration(language: Language = 'zh') {
  const [tasks, setTasks] = useState<LocalTask[]>([]);
  const timers = useRef<Map<string, number>>(new Map());

  const updateTask = useCallback((localId: string, patch: Partial<LocalTask>) => {
    setTasks((prev) => prev.map((t) => (t.localId === localId ? { ...t, ...patch } : t)));
  }, []);

  const stopTimer = useCallback((localId: string) => {
    const id = timers.current.get(localId);
    if (id) {
      window.clearInterval(id);
      timers.current.delete(localId);
    }
  }, []);

  // 将提交阶段错误转成对用户友好的文案（重点处理频率超限 429）
  const formatSubmitError = useCallback(
    (e: unknown): string => {
      if (e instanceof RateLimitError) {
        const seconds = Math.max(1, Math.ceil(e.retryAfterMs / 1000));
        return translate(language, 'rate.limited', { limit: e.limit, seconds });
      }
      return (e as Error).message;
    },
    [language]
  );

  // 启动对指定服务端任务的轮询；出错时停止并记录 submitError
  const startPolling = useCallback(
    (local: LocalTask, taskId: string) => {
      const { localId } = local;
      stopTimer(localId); // 防止重复轮询
      updateTask(localId, { submitError: null, retrying: true });
      const tick = async () => {
        try {
          const t = await getTask(taskId);
          updateTask(localId, { task: t, submitError: null, retrying: false });
          if (t.status === 'done' || t.status === 'error') {
            stopTimer(localId);
            if (t.status === 'done') {
              const firstImg = t.result?.images?.[0];
              notifyTaskFinished({
                language,
                type: local.type,
                prompt: local.prompt,
                success: true,
                imageUrl: firstImg ? imageSrc(firstImg) : undefined,
              });
            } else {
              notifyTaskFinished({
                language,
                type: local.type,
                prompt: local.prompt,
                success: false,
                errorMessage: t.error?.message,
              });
            }
          }
        } catch (e) {
          stopTimer(localId);
          updateTask(localId, { submitError: (e as Error).message, retrying: false });
        }
      };
      const intervalId = window.setInterval(tick, 1200);
      timers.current.set(localId, intervalId);
      void tick(); // 立即查询一次，重试时无需等待 1200ms
    },
    [language, stopTimer, updateTask]
  );

  const submit = useCallback(
    async (params: GenerateParams) => {
      const localId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const local: LocalTask = {
        localId,
        label: params.prompt.slice(0, 40),
        type: params.type,
        size: params.size,
        prompt: params.prompt,
        task: null,
        submitError: null,
        retrying: false,
      };
      setTasks((prev) => [local, ...prev]);

      try {
        const { taskId } = await generate(params);
        startPolling(local, taskId);
      } catch (e) {
        updateTask(localId, { submitError: formatSubmitError(e) });
      }
    },
    [startPolling, updateTask, formatSubmitError]
  );

  const submitVideo = useCallback(
    async (params: VideoGenerateParams) => {
      const localId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const size = `${params.width ?? 1152}x${params.height ?? 768}`;
      const local: LocalTask = {
        localId,
        label: params.prompt.slice(0, 40),
        type: params.type,
        size,
        prompt: params.prompt,
        task: null,
        submitError: null,
        retrying: false,
      };
      setTasks((prev) => [local, ...prev]);

      try {
        const { taskId } = await generateVideo(params);
        startPolling(local, taskId);
      } catch (e) {
        updateTask(localId, { submitError: formatSubmitError(e) });
      }
    },
    [startPolling, updateTask, formatSubmitError]
  );

  // 重试查询：复用已存在的服务端 taskId 重新轮询，不创建新任务
  const retryTask = useCallback(
    (localId: string) => {
      const local = tasks.find((t) => t.localId === localId);
      const taskId = local?.task?.id;
      if (!local || !taskId) return;
      startPolling(local, taskId);
    },
    [tasks, startPolling]
  );


  const removeTask = useCallback(
    (localId: string) => {
      stopTimer(localId);
      setTasks((prev) => prev.filter((t) => t.localId !== localId));
    },
    [stopTimer]
  );

  // 卸载时清理所有计时器
  useEffect(() => {
    const map = timers.current;
    return () => {
      for (const id of map.values()) window.clearInterval(id);
      map.clear();
    };
  }, []);

  return { tasks, submit, submitVideo, removeTask, retryTask };
}
