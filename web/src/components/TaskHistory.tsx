import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
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
  type HistorySort,
  type HistoryStatusFilter,
} from './HistoryToolbar';
import { BlobDownloadButton } from './BlobDownloadButton';
import { HistoryAdSlot } from './HistoryAdSlot';
import { MasonryGrid } from './MasonryGrid';
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
const PROMPT_COLLAPSE_THRESHOLD = 120;
const HISTORY_MEDIA_ROOT_MARGIN = '80px';

function useLazyMedia<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: HISTORY_MEDIA_ROOT_MARGIN }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return { ref, shouldLoad };
}

function LazyHistoryImage({ src, alt }: { src: string; alt: string }) {
  const { ref, shouldLoad } = useLazyMedia<HTMLSpanElement>();
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      ref={ref}
      className={[
        'lazy-history-media',
        'lazy-history-image',
        shouldLoad ? 'is-requested' : '',
        loaded ? 'is-loaded' : '',
      ].filter(Boolean).join(' ')}
    >
      {shouldLoad ? (
        <img
          className={`lazy-history-media-content ${loaded ? 'is-loaded' : ''}`}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      ) : null}
    </span>
  );
}

function LazyHistoryVideo({ src, label }: { src: string; label: string }) {
  const { ref, shouldLoad } = useLazyMedia<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={[
        'lazy-history-media',
        'lazy-history-video',
        shouldLoad ? 'is-requested' : '',
        loaded ? 'is-loaded' : '',
      ].filter(Boolean).join(' ')}
    >
      {shouldLoad ? (
        <video
          className={`video-player lazy-history-media-content ${loaded ? 'is-loaded' : ''}`}
          src={src}
          controls
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        >
          {label}
        </video>
      ) : null}
    </div>
  );
}

function historyStorageKey(category: HistoryCategory, name: string): string {
  return `agnes:${category}-history-${name}`;
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
  showToolbar?: boolean; // 是否展示搜索/筛选/排序/布局工具栏（默认展示）
}

/**
 * 任务历史列表（本地历史驱动）：
 * - 仅展示当前浏览器 localStorage 中记录过的任务；
 * - 进行中任务按本地 task id 自动轮询刷新；
 * - 图片失败任务提供「刷新」按钮，重新查询或重新发起。
 */
export function TaskHistory({ category, refreshSignal, currentPrompt = '', onPromptFill, onFill, showToolbar = true }: Props) {
  const { t } = usePreferences();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshingId, setRefreshingId] = useState<string | null>(null);
  const [previewMedia, setPreviewMedia] = useState<PreviewMedia | null>(null);
  const [pendingTask, setPendingTask] = useState<Task | null>(null);
  const [expandedPrompt, setExpandedPrompt] = useState<string | null>(null);
  const [promptCopied, setPromptCopied] = useState(false);
  const [searchText, setSearchText] = useState(() => readHistorySearch(category));
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
      window.localStorage.setItem(historyStorageKey(category, 'status-filter'), statusFilter);
      window.localStorage.setItem(historyStorageKey(category, 'sort'), sortOrder);
      window.localStorage.setItem(historyStorageKey(category, 'search'), searchText);
    } catch {
      /* 忽略本地存储不可用 */
    }
  }, [category, searchText, sortOrder, statusFilter]);

  useEffect(() => {
    const id = window.setTimeout(() => {
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

  useEffect(() => {
    if (!expandedPrompt) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedPrompt(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [expandedPrompt]);

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

  function confirmFill() {
    if (pendingTask) applyFill(pendingTask);
    setPendingTask(null);
  }

  function openPrompt(prompt: string) {
    setExpandedPrompt(prompt);
    setPromptCopied(false);
  }

  async function copyExpandedPrompt() {
    if (!expandedPrompt) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(expandedPrompt);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = expandedPrompt;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setPromptCopied(true);
    window.setTimeout(() => setPromptCopied(false), 1800);
  }

  if (loading) {
    return (
      <div className="history">
        <HistoryAdSlot category={category} />
        <div className="empty">{t('history.loading')}</div>
      </div>
    );
  }
  if (!tasks.length) {
    return (
      <div className="history">
        <HistoryAdSlot category={category} />
        <div className="empty">{t('history.empty')}</div>
      </div>
    );
  }

  return (
    <div className="history">
      <HistoryAdSlot category={category} />
      <p className="history-subtitle">{t('history.count', { count: tasks.length })}</p>
      {showToolbar && (
        <HistoryToolbar
          searchText={searchText}
          filtering={filtering}
          statusFilter={statusFilter}
          sortOrder={sortOrder}
          onSearchTextChange={setSearchText}
          onStatusFilterChange={setStatusFilter}
          onSortOrderChange={setSortOrder}
        />
      )}
      {(searchText.trim() || statusFilter !== 'all') && visibleTasks.length === 0 ? (
        <div className="empty history-empty-filter">{t('history.noMatches')}</div>
      ) : (
      <MasonryGrid className="task-history-list" gap={12} minColumnWidth={220} maxColumns={2}>
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
          const isLongPrompt = prompt.trim().length > PROMPT_COLLAPSE_THRESHOLD;
          // 回填按钮：与下载按钮同形态、同一操作行展示
          const fillButton = fillable ? (
            <button type="button" className="btn-secondary" onClick={() => fillTask(task)}>
              {t('history.fillPromptHint')}
            </button>
          ) : null;
          return (
            <div className={`history-item status-${task.status}`} key={task.id}>
              <div className="history-item-head">
                <span className="history-item-tags">
                  <span className="task-type">{t(TYPE_LABEL_KEY[task.type])}</span>
                  <span className={`status-badge ${task.status}`}>{t(STATUS_KEY[task.status])}</span>
                  {duration && (
                    <span className="duration-badge" title={t('gallery.duration', { duration })}>
                      <span className="duration-icon" aria-hidden="true">⏱</span>
                      {duration}
                    </span>
                  )}
                </span>
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
                isLongPrompt ? (
                  <button
                    type="button"
                    className="history-prompt history-prompt-button"
                    onClick={() => openPrompt(prompt)}
                    aria-label={t('history.promptOpen')}
                    title={t('history.promptOpen')}
                  >
                    <span className="history-prompt-text">{prompt}</span>
                    <span className="history-prompt-more">{t('history.promptMore')}</span>
                  </button>
                ) : (
                  <p className="history-prompt" title={prompt}>
                    {prompt}
                  </p>
                )
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
                      <LazyHistoryVideo key={videoUrl} src={videoUrl} label={t('gallery.video.unsupported')} />
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
                          className="btn-secondary"
                        />
                        {fillButton}
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
                              <LazyHistoryImage key={src} src={src} alt={`result-${i}`} />
                            </button>
                            <div className="gallery-actions">
                              <BlobDownloadButton
                                href={downloadUrl(task.id, i)}
                                fileName={downloadFileName(task, 'image', i)}
                                label={t('gallery.download')}
                                loadingLabel={t('gallery.downloading')}
                                className="btn-secondary"
                              />
                              {i === 0 && fillButton}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {!isDone && fillButton && (
                <div className="gallery-actions">{fillButton}</div>
              )}
            </div>
          );
        })}
      </MasonryGrid>
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
      {expandedPrompt && (
        <div className="prompt-detail-backdrop" role="presentation" onClick={() => setExpandedPrompt(null)}>
          <div
            className="prompt-detail-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="prompt-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="prompt-detail-head">
              <strong id="prompt-detail-title">{t('history.promptTitle')}</strong>
              <button
                className="prompt-detail-close"
                type="button"
                onClick={() => setExpandedPrompt(null)}
                aria-label={t('preview.close')}
                title={t('preview.close')}
              >
                ×
              </button>
            </div>
            <div className="prompt-detail-body">{expandedPrompt}</div>
            <div className="prompt-detail-actions">
              <button className="btn-secondary" type="button" onClick={copyExpandedPrompt}>
                {promptCopied ? t('history.promptCopied') : t('history.promptCopy')}
              </button>
            </div>
          </div>
        </div>
      )}
      <MediaPreviewModal media={previewMedia} onClose={() => setPreviewMedia(null)} />
    </div>
  );
}
