import type { LocalTask } from '../hooks/useGeneration';
import { ProgressBar } from './ProgressBar';
import { ResultGallery } from './ResultGallery';
import { VideoResult } from './VideoResult';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

const TYPE_LABEL_KEY: Record<LocalTask['type'], TranslationKey> = {
  text2img: 'task.type.text2img',
  img2img: 'task.type.img2img',
  multi: 'task.type.multi',
  text2vid: 'task.type.text2vid',
  img2vid: 'task.type.img2vid',
  multivid: 'task.type.multivid',
  keyframes: 'task.type.keyframes',
};

const VIDEO_TYPES: LocalTask['type'][] = ['text2vid', 'img2vid', 'multivid', 'keyframes'];

// 单个任务卡片：展示提交摘要 + 排队/生成进度 + 结果
export function TaskCard({
  item,
  onRemove,
  onRetry,
}: {
  item: LocalTask;
  onRemove: (id: string) => void;
  onRetry: (id: string) => void;
}) {
  const { t } = usePreferences();
  const queuePos = (() => {
    const evts = item.task?.debugInfo?.events;
    if (!evts) return null;
    const queued = [...evts].reverse().find((e) => e.phase === 'queued');
    return queued ? (queued.queuePosition as number) : null;
  })();

  return (
    <div className="task-card">
      <div className="task-card-head">
        <span className="task-type">{t(TYPE_LABEL_KEY[item.type])}</span>
        <span className="task-label" title={item.prompt}>
          {item.label || t('task.noPrompt')}
        </span>
        <span className="task-size">{item.size}</span>
        <button
          className="task-remove"
          onClick={() => onRemove(item.localId)}
          aria-label={t('task.remove')}
          title={t('task.remove')}
        >
          ×
        </button>
      </div>

      {item.submitError && (
        <div className="result-error">
          <span className="result-error-msg">{item.submitError}</span>
          {item.task?.id && (
            <button
              className={`retry-btn ${item.retrying ? 'is-loading' : ''}`}
              onClick={() => onRetry(item.localId)}
              disabled={item.retrying}
              aria-label={t('task.retry')}
              title={t('task.retry')}
            >
              <span className="retry-icon" aria-hidden="true">
                ↻
              </span>
              <span className="retry-text">{item.retrying ? t('task.retrying') : t('task.retry')}</span>
            </button>
          )}
        </div>
      )}

      {!item.task && !item.submitError && (
        <div className="task-pending">{t('task.submitting')}</div>
      )}

      {item.task && (
        <>
          {item.task.status === 'queued' && queuePos != null && (
            <p className="queue-pos">{t('task.queuePosition', { position: queuePos })}</p>
          )}
          <ProgressBar task={item.task} />
          {VIDEO_TYPES.includes(item.type) ? (
            <VideoResult task={item.task} />
          ) : (
            <ResultGallery task={item.task} />
          )}
        </>
      )}
    </div>
  );
}
