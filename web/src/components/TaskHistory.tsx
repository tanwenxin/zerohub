import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import {
  getTask,
  refreshTask,
  downloadUrl,
  videoDownloadUrl,
  type Task,
} from '../api/client';
import {
  LOCAL_HISTORY_UPDATED_EVENT,
  readLocalHistory,
  refreshActiveLocalHistory,
  removeLocalHistory,
  upsertLocalHistory,
} from '../utils/localHistory';
import { MediaPreviewModal, type PreviewMedia } from './MediaPreviewModal';
import {
  HistoryToolbar,
  type HistoryLayout,
  type HistorySort,
  type HistoryStatusFilter,
} from './HistoryToolbar';
import { BlobDownloadButton } from './BlobDownloadButton';
import { usePreferences } from '../usePreferences';
import { formatDuration } from '../utils/duration';
import type { TranslationKey } from '../i18n';

const TYPE_LABEL_KEY: Record<Task['type'], TranslationKey> = {
  text2img: 'task.type.text2img',
  img2img: 'task.type.img2img',
  multi: 'task.type.multi',
  text2vid: 'task.type.text2vid',
  img2vid: 'task.type.img2vid',
  multivid: 'task.type.multivid',
  keyframes: 'task.type.keyframes',
};

const STATUS_KEY: Record<Task['status'], TranslationKey> = {
  pending: 'status.pending',
  queued: 'status.queued',
  running: 'status.running',
  done: 'status.done',
  error: 'status.error',
};

const ACTIVE_STATUSES: Task['status'][] = ['pending', 'queued', 'running'];
type HistoryCategory = 'image' | 'video';

function historyStorageKey(category: HistoryCategory, name: string): string {
  return `agnes:${category}-history-${name}`;
}

function historyLayoutKey(category: HistoryCategory): string {
  return `agnes:${category}-history-layout`;
}

function readHistoryLayout(category: HistoryCategory): HistoryLayout {
  if (typeof window === 'undefined') return 'list';
  try {
    return window.localStorage.getItem(historyLayoutKey(category)) === 'masonry' ? 'masonry' : 'list';
  } catch {
    return 'list';
  }
}

function readHistoryStatusFilter(category: HistoryCategory): HistoryStatusFilter {
  if (typeof window === 'undefined') return 'all';
  try {
    const value = window.localStorage.getItem(historyStorageKey(category, 'status-filter'));
    return value === 'active' || value === 'done' || value === 'error' ? value : 'all';
  } catch {
    return 'all';
  }
}

function readHistorySort(category: HistoryCategory): HistorySort {
  if (typeof window === 'undefined') return 'newest';
  try {
    return window.localStorage.getItem(historyStorageKey(category, 'sort')) === 'oldest' ? 'oldest' : 'newest';
  } catch {
    return 'newest';
  }
}

function readHistorySearch(category: HistoryCategory): string {
  if (typeof window === 'undefined') return '';
  try {
    return window.localStorage.getItem(historyStorageKey(category, 'search')) || '';
  } catch {
    return '';
  }
}

function buildTaskSearchText(task: Task, t: (key: TranslationKey) => string): string {
  const prompt = (task.params?.prompt as string) || '';
  const negativePrompt = (task.params?.negativePrompt as string) || '';
  const size = (task.params?.size as string) || (task.result?.size as string) || '';
  const width = typeof task.params?.width === 'number' ? String(task.params.width) : '';
  const height = typeof task.params?.height === 'number' ? String(task.params.height) : '';
  const seconds = task.result?.seconds || '';
  const videoUrl = task.result?.videoUrl || '';
  const videoId = task.result?.videoId || task.videoId || '';
  const revisedPrompts = (task.result?.images || []).map((img) => img.revisedPrompt || '').join(' ');
  const imageUrls = (task.result?.images || []).map((img) => img.url || '').join(' ');
  return [
    t(TYPE_LABEL_KEY[task.type]),
    t(STATUS_KEY[task.status]),
    prompt,
    negativePrompt,
    size,
    width,
    height,
    seconds,
    videoUrl,
    videoId,
    revisedPrompts,
    imageUrls,
  ].join(' ').toLowerCase();
}

function matchesStatusFilter(task: Task, statusFilter: HistoryStatusFilter): boolean {
  if (statusFilter === 'all') return true;
  if (statusFilter === 'active') return ACTIVE_STATUSES.includes(task.status);
  return task.status === statusFilter;
}

function taskTime(task: Task): number {
  return Number(task.updatedAt || task.createdAt || 0);
}

function downloadFileName(task: Task, kind: 'image' | 'video', index?: number): string {
  const suffix = kind === 'video' ? 'mp4' : 'png';
  const indexPart = typeof index === 'number' ? `-${index + 1}` : '';
  return `agnes-${kind}-${task.id}${indexPart}.${suffix}`;
}

interface Props {
  category: HistoryCategory;
  refreshSignal?: number; // 父组件提交后变更以触发立即刷新
  currentPrompt?: string;
  onPromptFill?: (prompt: string) => void;
  onFill?: (task: Task) => void; // 回填整条记录（提示词+参数+参考图）
}

/**
 * 任务历史列表（本地历史驱动）：
 * - 仅展示当前浏览器 localStorage 中记录过的任务；
 * - 进行中任务按本地 task id 自动轮询刷新；
 * - 图片失败任务提供「刷新」按钮，重新查询或重新发起。
 */
export function TaskHistory({ category, refreshSignal, currentPrompt = '', onPromptFill, onFill }: Props) {
  const { t } = usePreferences();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshingId, setRefreshingId] = useState<string | null>(null);
  const [previewMedia, setPreviewMedia] = useState<PreviewMedia | null>(null);
  const [pendingTask, setPendingTask] = useState<Task | null>(null);
  const [searchText, setSearchText] = useState(() => readHistorySearch(category));
  const [layout, setLayout] = useState<HistoryLayout>(() => readHistoryLayout(category));
  const [statusFilter, setStatusFilter] = useState<HistoryStatusFilter>(() => readHistoryStatusFilter(category));
  const [sortOrder, setSortOrder] = useState<HistorySort>(() => readHistorySort(category));
  const deferredSearchText = useDeferredValue(searchText);
  const filtering = searchText !== deferredSearchText;
  const timerRef = useRef<number | null>(null);

  const load = useCallback(async () => {
    try {
      const localTasks = readLocalHistory(category, 100);
      setTasks(localTasks);
      setLoading(false);
      if (localTasks.some((t) => ACTIVE_STATUSES.includes(t.status))) {
        setTasks(await refreshActiveLocalHistory(category, getTask));
      }
    } catch {
      /* 忽略瞬时错误，下次轮询重试 */
    } finally {
      setLoading(false);
    }
  }, [category]);

  // 初次加载 + 父级信号触发
  useEffect(() => {
    const id = window.setTimeout(() => {
      void load();
    }, 0);
    return () => window.clearTimeout(id);
  }, [load, refreshSignal]);

  // 有进行中任务时自动轮询
  useEffect(() => {
    const hasActive = tasks.some((t) => ACTIVE_STATUSES.includes(t.status));
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (hasActive) {
      timerRef.current = window.setInterval(load, 1500);
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [tasks, load]);

  useEffect(() => {
    try {
      window.localStorage.setItem(historyLayoutKey(category), layout);
      window.localStorage.setItem(historyStorageKey(category, 'status-filter'), statusFilter);
      window.localStorage.setItem(historyStorageKey(category, 'sort'), sortOrder);
      window.localStorage.setItem(historyStorageKey(category, 'search'), searchText);
    } catch {
      /* 忽略本地存储不可用 */
    }
  }, [category, layout, searchText, sortOrder, statusFilter]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setLayout(readHistoryLayout(category));
      setSearchText(readHistorySearch(category));
      setStatusFilter(readHistoryStatusFilter(category));
      setSortOrder(readHistorySort(category));
    }, 0);
    return () => window.clearTimeout(id);
  }, [category]);

  useEffect(() => {
    const syncLocalHistory = () => {
      setTasks(readLocalHistory(category, 100));
      setLoading(false);
    };
    window.addEventListener(LOCAL_HISTORY_UPDATED_EVENT, syncLocalHistory);
    return () => window.removeEventListener(LOCAL_HISTORY_UPDATED_EVENT, syncLocalHistory);
  }, [category]);

  const visibleTasks = useMemo(() => {
    const query = deferredSearchText.trim().toLowerCase();
    return tasks
      .filter((task) => matchesStatusFilter(task, statusFilter))
      .filter((task) => !query || buildTaskSearchText(task, t).includes(query))
      .toSorted((a, b) => sortOrder === 'newest' ? taskTime(b) - taskTime(a) : taskTime(a) - taskTime(b));
  }, [deferredSearchText, sortOrder, statusFilter, tasks, t]);

  async function onRefresh(task: Task) {
    setRefreshingId(task.id);
    try {
      await refreshTask(task.id, category);
      const refreshed = await getTask(task.id);
      upsertLocalHistory(refreshed);
      setTasks(readLocalHistory(category, 100));
    } catch (e) {
      // 刷新失败（如限流/无法重放）：提示并仍刷新列表
      alert((e as Error).message);
      setTasks(readLocalHistory(category, 100));
    } finally {
      setRefreshingId(null);
    }
  }

  function onDelete(task: Task) {
    removeLocalHistory(task.id);
    setTasks((prev) => prev.filter((x) => x.id != task.id));
  }

  function shouldIgnorePromptFill(target: EventTarget | null): boolean {
    if (!(target instanceof Element)) return false;
    return Boolean(target.closest('button,a,input,select,textarea,label'));
  }

  // 回填整条记录：若提供 onFill 则回填全部（提示词+参数+参考图），否则退回仅回填提示词。
  // 当前输入框已有内容时弹窗确认，避免误覆盖。
  function fillTask(task: Task) {
    const promptText = ((task.params?.prompt as string) || '').trim();
    if (!onFill && (!promptText || !onPromptFill)) return;
    if (currentPrompt.trim()) {
      setPendingTask(task);
      return;
    }
    applyFill(task);
  }

  function applyFill(task: Task) {
    if (onFill) {
      onFill(task);
    } else if (onPromptFill) {
      const promptText = ((task.params?.prompt as string) || '').trim();
      if (promptText) onPromptFill(promptText);
    }
  }

  function onHistoryItemClick(event: MouseEvent<HTMLDivElement>, task: Task) {
    if (shouldIgnorePromptFill(event.target)) return;
    fillTask(task);
  }

  function onHistoryItemKeyDown(event: KeyboardEvent<HTMLDivElement>, task: Task) {
    if (event.target !== event.currentTarget) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    fillTask(task);
  }

  function confirmFill() {
    if (pendingTask) applyFill(pendingTask);
    setPendingTask(null);
  }

  if (loading) return <div className="empty">{t('history.loading')}</div>;
  if (!tasks.length) return <div className="empty">{t('history.empty')}</div>;

  return (
    <div className="history">
      <HistoryToolbar
        visibleCount={visibleTasks.length}
        totalCount={tasks.length}
        searchText={searchText}
        filtering={filtering}
        statusFilter={statusFilter}
        sortOrder={sortOrder}
        layout={layout}
        onSearchTextChange={setSearchText}
        onStatusFilterChange={setStatusFilter}
        onSortOrderChange={setSortOrder}
        onLayoutChange={setLayout}
      />
      {(searchText.trim() || statusFilter !== 'all') && visibleTasks.length === 0 ? (
        <div className="empty history-empty-filter">{t('history.noMatches')}</div>
      ) : (
      <div className={`task-history-list layout-${layout}`}>
        {visibleTasks.map((task) => {
          const isActive = ACTIVE_STATUSES.includes(task.status);
          const isError = task.status === 'error';
          const isDone = task.status === 'done';
          const canRefresh = category === 'image' && isError;
          const prompt = (task.params?.prompt as string) || '';
          const size = (task.params?.size as string) || (task.result?.size as string) || '';
          const duration = isDone ? formatDuration(task.durationMs) : '';
          const videoUrl = isDone && task.result?.videoUrl ? task.result.videoUrl : '';
          const fillable = Boolean(onFill || (prompt && onPromptFill));
          return (
            <div
              className={`history-item status-${task.status} ${fillable ? 'prompt-fillable' : ''}`}
              key={task.id}
              role={fillable ? 'button' : undefined}
              tabIndex={fillable ? 0 : undefined}
              title={fillable ? t('history.fillPromptHint') : undefined}
              onClick={(event) => onHistoryItemClick(event, task)}
              onKeyDown={(event) => onHistoryItemKeyDown(event, task)}
            >
              <div className="history-item-head">
                <span className="task-type">{t(TYPE_LABEL_KEY[task.type])}</span>
                <span className={`status-badge ${task.status}`}>{t(STATUS_KEY[task.status])}</span>
                {fillable && <span className="prompt-fill-hint">{t('history.fillPromptHint')}</span>}
                {duration && (
                  <span className="duration-badge" title={t('gallery.duration', { duration })}>
                    <span className="duration-icon" aria-hidden="true">⏱</span>
                    {duration}
                  </span>
                )}
                <span className="history-actions-inline">
                  {canRefresh && (
                    <button
                      className={`refresh-btn ${refreshingId === task.id ? 'is-loading' : ''}`}
                      onClick={() => onRefresh(task)}
                      disabled={refreshingId === task.id}
                      title={t('history.refresh')}
                      aria-label={t('history.refresh')}
                    >
                      <span className="refresh-icon" aria-hidden="true">↻</span>
                      <span className="refresh-text">{t('history.refresh')}</span>
                    </button>
                  )}
                  <button
                    className="task-remove"
                    onClick={() => onDelete(task)}
                    title={t('task.remove')}
                    aria-label={t('task.remove')}
                  >
                    ×
                  </button>
                </span>
              </div>

              {prompt && (
                <p className="history-prompt" title={prompt}>
                  {prompt}
                </p>
              )}

              {isActive && (
                <div className="history-progress">
                  <div className="progress-track">
                    <div className={`progress-fill ${task.status}`} style={{ width: `${task.progress}%` }} />
                  </div>
                </div>
              )}

              {isError && (
                <div className="result-error">
                  <span className="result-error-msg">
                    {task.error?.userMessage || task.error?.message || t('gallery.error')}
                  </span>
                </div>
              )}

              {isDone && task.result && (
                <div className="history-result">
                  {category === 'video' && videoUrl ? (
                    <>
                      <video
                        className="video-player"
                        src={videoUrl}
                        controls
                        playsInline
                        preload="metadata"
                      />
                      <div className="gallery-actions">
                        <button
                          className="btn-secondary"
                          type="button"
                          onClick={() =>
                            setPreviewMedia({
                              kind: 'video',
                              src: videoUrl,
                              downloadHref: videoDownloadUrl(task.id),
                              title: t(TYPE_LABEL_KEY[task.type]),
                            })
                          }
                        >
                          {t('preview.open')}
                        </button>
                        <BlobDownloadButton
                          href={videoDownloadUrl(task.id)}
                          fileName={downloadFileName(task, 'video')}
                          label={t('gallery.video.download')}
                          loadingLabel={t('gallery.downloading')}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="gallery">
                      {(task.result.images || []).map((img, i) => {
                        const src = img.url || (img.b64 ? `data:image/png;base64,${img.b64}` : '');
                        return (
                          <div className="gallery-item" key={i}>
                            <button
                              className="media-preview-trigger"
                              type="button"
                              onClick={() =>
                                setPreviewMedia({
                                  kind: 'image',
                                  src,
                                  alt: `result-${i}`,
                                  downloadHref: downloadUrl(task.id, i),
                                  title: t(TYPE_LABEL_KEY[task.type]),
                                  meta: size,
                                })
                              }
                              aria-label={t('preview.open')}
                            >
                              <img src={src} alt={`result-${i}`} loading="lazy" />
                            </button>
                            <div className="gallery-actions">
                              <BlobDownloadButton
                                href={downloadUrl(task.id, i)}
                                fileName={downloadFileName(task, 'image', i)}
                                label={t('gallery.download')}
                                loadingLabel={t('gallery.downloading')}
                              />
                              {size && <span className="history-size">{size}</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      )}
      {pendingTask && (
        <div className="prompt-confirm-backdrop" role="presentation" onClick={() => setPendingTask(null)}>
          <div
            className="prompt-confirm-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="prompt-confirm-title"
            onClick={(event) => event.stopPropagation()}
          >
            <strong id="prompt-confirm-title">{t('history.confirmTitle')}</strong>
            <p>{t('history.confirmOverwrite')}</p>
            <div className="prompt-confirm-actions">
              <button className="btn-secondary" type="button" onClick={() => setPendingTask(null)}>
                {t('history.confirmCancel')}
              </button>
              <button className="btn-primary" type="button" onClick={confirmFill}>
                {t('history.confirmOk')}
              </button>
            </div>
          </div>
        </div>
      )}
      <MediaPreviewModal media={previewMedia} onClose={() => setPreviewMedia(null)} />
    </div>
  );
}
