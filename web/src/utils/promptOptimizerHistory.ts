export interface PromptOptimizerHistoryItem {
  id: string;
  sourcePrompt: string;
  optimizedPrompt: string;
  providerId: string;
  providerLabel: string;
  version: string;
  versionLabel: string;
  createdAt: number;
}

interface PromptOptimizerHistoryState {
  version: 1;
  items: PromptOptimizerHistoryItem[];
}

const STORAGE_KEY = 'agnes:prompt-optimizer-history:v1';
const MAX_ITEMS = 50;

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object');
}

function isHistoryItem(value: unknown): value is PromptOptimizerHistoryItem {
  return (
    isObject(value) &&
    typeof value.id === 'string' &&
    typeof value.sourcePrompt === 'string' &&
    typeof value.optimizedPrompt === 'string' &&
    typeof value.providerId === 'string' &&
    typeof value.version === 'string'
  );
}

function sortItems(items: PromptOptimizerHistoryItem[]): PromptOptimizerHistoryItem[] {
  return [...items].sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
}

function trimItems(items: PromptOptimizerHistoryItem[]): PromptOptimizerHistoryItem[] {
  return sortItems(items).slice(0, MAX_ITEMS);
}

function readState(): PromptOptimizerHistoryState {
  if (typeof window === 'undefined') return { version: 1, items: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { version: 1, items: [] };
    const data = JSON.parse(raw) as Partial<PromptOptimizerHistoryState> | PromptOptimizerHistoryItem[];
    const items = Array.isArray(data) ? data : data.items;
    return { version: 1, items: trimItems(Array.isArray(items) ? items.filter(isHistoryItem) : []) };
  } catch {
    return { version: 1, items: [] };
  }
}

function writeState(items: PromptOptimizerHistoryItem[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, items: trimItems(items) }));
  } catch {
    /* 忽略本地存储不可用 / 超出配额 */
  }
}

function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function readPromptOptimizerHistory(): PromptOptimizerHistoryItem[] {
  return readState().items;
}

export function addPromptOptimizerHistory(
  item: Omit<PromptOptimizerHistoryItem, 'id' | 'createdAt'>
): PromptOptimizerHistoryItem {
  const next: PromptOptimizerHistoryItem = {
    ...item,
    id: createId(),
    createdAt: Date.now(),
  };
  writeState([next, ...readState().items]);
  return next;
}

export function removePromptOptimizerHistory(id: string): void {
  writeState(readState().items.filter((item) => item.id !== id));
}

export function clearPromptOptimizerHistory(): void {
  writeState([]);
}
