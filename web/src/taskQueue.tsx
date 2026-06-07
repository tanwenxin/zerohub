import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useMultiGeneration, type LocalTask } from './hooks/useGeneration';
import { usePreferences } from './usePreferences';
import type { GenerateParams, VideoGenerateParams } from './api/client';
import { TaskQueueContext, type TaskQueueContextValue } from './taskQueueContext';

// 三种类型加起来最多同时进行的任务数
export const MAX_ACTIVE_TASKS = 3;
export const SUBMIT_THROTTLE_MS = 1200;

// 判断任务是否处于"进行中"（计入上限）
function isActive(item: LocalTask): boolean {
  if (item.submitError) return false; // 提交失败，终止态
  if (!item.task) return true; // 提交中
  return item.task.status === 'queued' || item.task.status === 'running';
}

/**
 * 全局任务队列：将文生图/图生图/多图合成/视频生成的任务统一到一个队列，
 * 各类型加起来最多同时存在 MAX_ACTIVE_TASKS 个进行中任务。
 */
export function TaskQueueProvider({ children }: { children: ReactNode }) {
  const { language } = usePreferences();
  const { tasks, submit: rawSubmit, submitVideo: rawSubmitVideo, removeTask, retryTask } =
    useMultiGeneration(language);
  const lastSubmitAtRef = useRef(0);
  const unlockTimerRef = useRef<number | null>(null);
  const [lastAcceptedAt, setLastAcceptedAt] = useState<number | null>(null);
  const [submitLocked, setSubmitLocked] = useState(false);
  const [submitLockRemainingMs, setSubmitLockRemainingMs] = useState(0);

  const activeCount = useMemo(() => tasks.filter(isActive).length, [tasks]);
  const canSubmit = activeCount < MAX_ACTIVE_TASKS;

  // 公共的提交闸门：名额检查 + 节流；通过则执行 run() 并加锁
  const guardedSubmit = useCallback(
    (run: () => void): boolean => {
      const now = Date.now();
      const elapsed = now - lastSubmitAtRef.current;
      if (activeCount >= MAX_ACTIVE_TASKS) return false; // 双保险：超过上限直接忽略
      if (elapsed < SUBMIT_THROTTLE_MS) {
        setSubmitLockRemainingMs(SUBMIT_THROTTLE_MS - elapsed);
        return false;
      }

      lastSubmitAtRef.current = now;
      setLastAcceptedAt(now);
      setSubmitLocked(true);
      setSubmitLockRemainingMs(SUBMIT_THROTTLE_MS);
      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = window.setTimeout(() => {
        setSubmitLocked(false);
        setSubmitLockRemainingMs(0);
        unlockTimerRef.current = null;
      }, SUBMIT_THROTTLE_MS);
      run();
      return true;
    },
    [activeCount]
  );

  const submit = useCallback(
    (params: GenerateParams) => guardedSubmit(() => rawSubmit(params)),
    [guardedSubmit, rawSubmit]
  );

  const submitVideo = useCallback(
    (params: VideoGenerateParams) => guardedSubmit(() => rawSubmitVideo(params)),
    [guardedSubmit, rawSubmitVideo]
  );

  useEffect(() => {
    return () => {
      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
    };
  }, []);

  const value = useMemo<TaskQueueContextValue>(
    () => ({
      tasks,
      submit,
      submitVideo,
      removeTask,
      retryTask,
      activeCount,
      maxActive: MAX_ACTIVE_TASKS,
      canSubmit,
      lastAcceptedAt,
      submitLocked,
      submitLockRemainingMs,
    }),
    [
      tasks,
      submit,
      submitVideo,
      removeTask,
      retryTask,
      activeCount,
      canSubmit,
      lastAcceptedAt,
      submitLocked,
      submitLockRemainingMs,
    ]
  );

  return <TaskQueueContext.Provider value={value}>{children}</TaskQueueContext.Provider>;
}
