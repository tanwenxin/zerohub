import { createContext } from 'react';
import type { LocalTask } from './hooks/useGeneration';
import type { GenerateParams, VideoGenerateParams } from './api/client';

export interface TaskQueueContextValue {
  tasks: LocalTask[];
  submit: (params: GenerateParams) => boolean;
  submitVideo: (params: VideoGenerateParams) => boolean;
  removeTask: (localId: string) => void;
  retryTask: (localId: string) => void;
  activeCount: number; // 进行中任务数（提交中 / 排队 / 生成中）
  maxActive: number; // 最大同时进行任务数
  canSubmit: boolean; // 是否还有名额可提交（activeCount < maxActive）
  lastAcceptedAt: number | null; // 最近一次被接收进入队列的时间
  submitLocked: boolean; // 是否处于提交节流窗口
  submitLockRemainingMs: number; // 当前节流窗口剩余毫秒数
}

export const TaskQueueContext = createContext<TaskQueueContextValue | null>(null);
