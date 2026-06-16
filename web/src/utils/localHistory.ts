import type { Task } from '../api/client';

type HistoryCategory = 'image' | 'video';
export type LocalHistoryUpdateDetail =
  | { action: 'upsert'; task: Task; category: HistoryCategory }
  | { action: 'remove'; id: string }
  | { action: 'replace' };

interface LocalHistoryState {
  version: 1;
  tasks: Task[];
}

const STORAGE_KEY = 'agnes:task-history:v1';
const MAX_ITEMS_PER_CATEGORY = 100;
const MAX_ITEMS_TOTAL = 200;
const ACTIVE_STATUSES: Task['status'][] = ['pending', 'queued', 'running'];
const VIDEO_TYPES: Task['type'][] = ['text2vid', 'img2vid', 'multivid', 'keyframes'];

export const LOCAL_HISTORY_UPDATED_EVENT = 'agnes:local-history-updated';

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object');
}

function isTask(value: unknown): value is Task {
  return isObject(value) && (typeof value.id === 'string' || typeof value.id === 'number');
}

function taskTime(task: Task): number {
  return Number(task.updatedAt || task.createdAt || 0);
}

function taskCategory(task: Task): HistoryCategory {
  if (task.category === 'video') return 'video';
  if (task.category === 'image') return 'image';
  return VIDEO_TYPES.some((type) => type == task.type) ? 'video' : 'image';
}

function sortTasks(tasks: Task[]): Task[] {
  return [...tasks].sort((a, b) => taskTime(b) - taskTime(a));
}

function normalizeTasks(tasks: unknown): Task[] {
  if (!Array.isArray(tasks)) return [];
  return sortTasks(tasks.filter(isTask));
}

function trimTasks(tasks: Task[]): Task[] {
  const counts: Record<HistoryCategory, number> = { image: 0, video: 0 };
  const out: Task[] = [];

  for (const task of sortTasks(tasks)) {
    const category = taskCategory(task);
    if (counts[category] >= MAX_ITEMS_PER_CATEGORY) continue;
    if (out.length >= MAX_ITEMS_TOTAL) break;
    counts[category] += 1;
    out.push(task);
  }

  return out;
}

function readState(): LocalHistoryState {
  if (typeof window === 'undefined') return { version: 1, tasks: [] };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { version: 1, tasks: [] };

    const data = JSON.parse(raw) as Partial<LocalHistoryState> | Task[];
    const tasks = Array.isArray(data) ? data : data.tasks;
    return { version: 1, tasks: trimTasks(normalizeTasks(tasks)) };
  } catch {
    return { version: 1, tasks: [] };
  }
}

function dispatchLocalHistoryUpdated(detail: LocalHistoryUpdateDetail) {
  window.dispatchEvent(new CustomEvent<LocalHistoryUpdateDetail>(LOCAL_HISTORY_UPDATED_EVENT, { detail }));
}

function writeState(tasks: Task[], detail: LocalHistoryUpdateDetail = { action: 'replace' }) {
  if (typeof window === 'undefined') return;

  try {
    const state: LocalHistoryState = { version: 1, tasks: trimTasks(tasks) };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    dispatchLocalHistoryUpdated(detail);
  } catch {
    /* 忽略本地存储不可用 / 超出配额 */
  }
}

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return '任务不存在或已过期';
}

function markExpired(task: Task, message: string): Task {
  return {
    ...task,
    status: 'error',
    progress: 100,
    updatedAt: Date.now(),
    error: {
      message,
      userMessage: message,
      code: 'LOCAL_HISTORY_TASK_EXPIRED',
      retryable: false,
      status: null,
      data: null,
    },
  };
}

function upsertTask(tasks: Task[], task: Task): Task[] {
  const index = tasks.findIndex((item) => item.id == task.id);
  if (index < 0) return trimTasks([task, ...tasks]);

  const next = [...tasks];
  next[index] = {
    ...next[index],
    ...task,
    category: task.category || next[index].category,
  };
  return trimTasks(next);
}

export function readLocalHistory(category?: HistoryCategory, limit = MAX_ITEMS_PER_CATEGORY): Task[] {
  const tasks = readState().tasks;
  const filtered = category ? tasks.filter((task) => taskCategory(task) === category) : tasks;
  return filtered.slice(0, limit);
}

export function upsertLocalHistory(task: Task): void {
  writeState(upsertTask(readState().tasks, task), {
    action: 'upsert',
    task,
    category: taskCategory(task),
  });
}

export function removeLocalHistory(id: string): void {
  writeState(readState().tasks.filter((task) => task.id != id), { action: 'remove', id });
}

export async function refreshLocalHistoryTask(
  id: string,
  fetchTask: (id: string) => Promise<Task>
): Promise<Task | null> {
  const state = readState();
  const existing = state.tasks.find((task) => task.id == id);

  try {
    const task = await fetchTask(id);
    writeState(upsertTask(readState().tasks, task), {
      action: 'upsert',
      task,
      category: taskCategory(task),
    });
    return task;
  } catch (error) {
    if (!existing) return null;
    const expired = markExpired(existing, errorMessage(error));
    writeState(upsertTask(readState().tasks, expired), {
      action: 'upsert',
      task: expired,
      category: taskCategory(expired),
    });
    return expired;
  }
}

export async function refreshActiveLocalHistory(
  category: HistoryCategory,
  fetchTask: (id: string) => Promise<Task>
): Promise<Task[]> {
  const activeTasks = readLocalHistory(category).filter((task) => ACTIVE_STATUSES.includes(task.status));
  if (!activeTasks.length) return readLocalHistory(category);

  await Promise.all(activeTasks.map((task) => refreshLocalHistoryTask(String(task.id), fetchTask)));
  return readLocalHistory(category);
}
