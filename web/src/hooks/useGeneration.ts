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
import { upsertLocalHistory } from '../utils/localHistory';

const POLL_INTERVAL_MS = 1200;

interface SubmitOptions {
  onTaskAccepted?: () => void;
  onTaskRejected?: (failure: { localId: string; type: TaskType; message: string }) => void;
}

interface PollingSession {
  id: number;
  timerId: number | null;
}

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
 * - 轮询到服务端任务后写入本地历史 localStorage
 */
export function useMultiGeneration(language: Language = 'zh') {
  const [tasks, setTasks] = useState<LocalTask[]>([]);
  const pollingSessions = useRef<Map<string, PollingSession>>(new Map());
  const nextPollingSessionId = useRef(0);

  const updateTask = useCallback((localId: string, patch: Partial<LocalTask>) => {
    setTasks((prev) => prev.map((t) => (t.localId === localId ? { ...t, ...patch } : t)));
  }, []);

  const stopPolling = useCallback((localId: string) => {
    const session = pollingSessions.current.get(localId);
    if (session?.timerId != null) {
      window.clearTimeout(session.timerId);
    }
    pollingSessions.current.delete(localId);
  }, []);

  const isPollingSessionActive = useCallback((localId: string, sessionId: number) => {
    return pollingSessions.current.get(localId)?.id === sessionId;
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
      stopPolling(localId); // 防止重复轮询，同时让旧请求响应失效
      updateTask(localId, { submitError: null, retrying: true });
      const sessionId = nextPollingSessionId.current + 1;
      nextPollingSessionId.current = sessionId;
      pollingSessions.current.set(localId, { id: sessionId, timerId: null });

      function scheduleNext() {
        if (!isPollingSessionActive(localId, sessionId)) return;
        const timerId = window.setTimeout(() => {
          void tick();
        }, POLL_INTERVAL_MS);
        pollingSessions.current.set(localId, { id: sessionId, timerId });
      }

      async function tick() {
        try {
          const t = await getTask(taskId);
          if (!isPollingSessionActive(localId, sessionId)) return;

          upsertLocalHistory(t);
          updateTask(localId, { task: t, submitError: null, retrying: false });
          if (t.status === 'done' || t.status === 'error') {
            stopPolling(localId);
            if (t.status === 'done') {
              const firstImg = t.result?.images?.[0];
              notifyTaskFinished({
                language,
                type: local.type,
                prompt: local.prompt,
                success: true,
                imageUrl: firstImg ? imageSrc(firstImg) : undefined,
                completedAt: t.updatedAt,
              });
            } else {
              notifyTaskFinished({
                language,
                type: local.type,
                prompt: local.prompt,
                success: false,
                errorMessage: t.error?.message,
                completedAt: t.updatedAt,
              });
            }
            return;
          }

          scheduleNext();
        } catch (e) {
          if (!isPollingSessionActive(localId, sessionId)) return;

          stopPolling(localId);
          updateTask(localId, { submitError: (e as Error).message, retrying: false });
        }
      }
      void tick(); // 立即查询一次，重试时无需等待 1200ms
    },
    [isPollingSessionActive, language, stopPolling, updateTask]
  );

  const submit = useCallback(
    async (params: GenerateParams, options: SubmitOptions = {}) => {
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

      try {
        const { taskId } = await generate(params);
        setTasks((prev) => [local, ...prev]);
        options.onTaskAccepted?.();
        startPolling(local, taskId);
      } catch (e) {
        options.onTaskRejected?.({
          localId,
          type: params.type,
          message: formatSubmitError(e),
        });
      }
    },
    [startPolling, formatSubmitError]
  );

  const submitVideo = useCallback(
    async (params: VideoGenerateParams, options: SubmitOptions = {}) => {
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

      try {
        const { taskId } = await generateVideo(params);
        setTasks((prev) => [local, ...prev]);
        options.onTaskAccepted?.();
        startPolling(local, taskId);
      } catch (e) {
        options.onTaskRejected?.({
          localId,
          type: params.type,
          message: formatSubmitError(e),
        });
      }
    },
    [startPolling, formatSubmitError]
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
      stopPolling(localId);
      setTasks((prev) => prev.filter((t) => t.localId !== localId));
    },
    [stopPolling]
  );

  // 卸载时清理所有轮询会话
  useEffect(() => {
    const sessions = pollingSessions.current;
    return () => {
      for (const session of sessions.values()) {
        if (session.timerId != null) window.clearTimeout(session.timerId);
      }
      sessions.clear();
    };
  }, []);

  return { tasks, submit, submitVideo, removeTask, retryTask };
}
