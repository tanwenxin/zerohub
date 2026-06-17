import { useState } from 'react';
import { downloadUrl, type Task } from '../api/client';
import { usePreferences } from '../usePreferences';
import { formatDuration } from '../utils/duration';
import { aspectRatioFromSize } from '../utils/media';
import { BlobDownloadButton } from './BlobDownloadButton';
import { LazyImage } from './LazyMedia';
import { MediaPreviewModal, type PreviewMedia } from './MediaPreviewModal';
import { MediaPreviewTrigger } from './MediaPreviewTrigger';

export function ResultGallery({ task }: { task: Task }) {
  const { t } = usePreferences();
  const [previewMedia, setPreviewMedia] = useState<PreviewMedia | null>(null);

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
  const size = (task.params?.size as string) || (task.result?.size as string) || '';

  return (
    <>
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
              <MediaPreviewTrigger
                onPreview={setPreviewMedia}
                media={{
                  kind: 'image',
                  src,
                  alt: `result-${i}`,
                  downloadHref: downloadUrl(task.id, i),
                  originalHref: img.url || undefined,
                  title: t('task.historyTitle'),
                  meta: size,
                }}
              >
                <LazyImage
                  src={src}
                  alt={`result-${i}`}
                  aspectRatio={aspectRatioFromSize(size)}
                />
              </MediaPreviewTrigger>
              <div className="gallery-actions">
                <BlobDownloadButton
                  href={downloadUrl(task.id, i)}
                  fileName={`agnes-image-${task.id}-${i + 1}.png`}
                  label={t('gallery.download')}
                  loadingLabel={t('gallery.downloading')}
                />
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
      <MediaPreviewModal media={previewMedia} onClose={() => setPreviewMedia(null)} />
    </>
  );
}
