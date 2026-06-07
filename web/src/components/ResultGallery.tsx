import { downloadUrl, type Task } from '../api/client';
import { usePreferences } from '../usePreferences';
import { formatDuration } from '../utils/duration';

export function ResultGallery({ task }: { task: Task }) {
  const { t } = usePreferences();

  if (task.status === 'error') {
    const err = task.error;
    // 上游繁忙/不可用（503/429/5xx/超时）等可重试错误：展示友好提示，不暴露原始报文
    const isBusy =
      err?.retryable === true ||
      err?.status === 503 ||
      err?.status === 429 ||
      err?.code === 'UPSTREAM_UNAVAILABLE' ||
      err?.code === 'RATE_LIMITED';

    if (isBusy) {
      return (
        <div className="result-error result-busy">
          <strong>{t('gallery.busy')}</strong>
          <p className="retry-hint">{t('gallery.retryHint')}</p>
        </div>
      );
    }

    return (
      <div className="result-error">
        <strong>{t('gallery.error')}</strong> {err?.userMessage || err?.message}
        {err?.data ? <pre>{JSON.stringify(err.data, null, 2)}</pre> : null}
      </div>
    );
  }

  if (task.status !== 'done' || !task.result) return null;

  const images = task.result.images || [];
  if (!images.length) return <div className="result-error">{t('gallery.noImages')}</div>;

  const duration = formatDuration(task.durationMs);

  return (
    <div className="gallery">
      {duration && (
        <div className="duration-badge gallery-duration" title={t('gallery.duration', { duration })}>
          <span className="duration-icon" aria-hidden="true">⏱</span>
          {t('gallery.duration', { duration })}
        </div>
      )}
      {images.map((img, i) => {
        const src = img.url || (img.b64 ? `data:image/png;base64,${img.b64}` : '');
        return (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`result-${i}`} />
            <div className="gallery-actions">
              <a className="btn-primary" href={downloadUrl(task.id, i)}>
                {t('gallery.download')}
              </a>
              {img.url && (
                <a className="btn-secondary" href={img.url} target="_blank" rel="noreferrer">
                  {t('gallery.original')}
                </a>
              )}
            </div>
            {img.revisedPrompt && (
              <p className="revised">{t('gallery.revisedPrompt', { prompt: img.revisedPrompt })}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
