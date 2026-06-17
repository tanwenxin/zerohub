import { useState } from 'react';
import { videoDownloadUrl, type Task } from '../api/client';
import { BlobDownloadButton } from './BlobDownloadButton';
import { usePreferences } from '../usePreferences';
import { formatDuration } from '../utils/duration';
import { LazyVideo } from './LazyMedia';
import { MediaPreviewModal, type PreviewMedia } from './MediaPreviewModal';
import { MediaPreviewTrigger } from './MediaPreviewTrigger';

// 视频结果展示：内嵌播放器 + 下载/新标签打开
export function VideoResult({ task }: { task: Task }) {
  const { t } = usePreferences();
  const [previewMedia, setPreviewMedia] = useState<PreviewMedia | null>(null);

  if (task.status === 'error') {
    const err = task.error;
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

  const videoUrl = task.result.videoUrl;
  if (!videoUrl) return <div className="result-error">{t('gallery.noImages')}</div>;

  const duration = formatDuration(task.durationMs);

  return (
    <>
      <div className="video-result">
        {duration && (
          <div className="duration-badge gallery-duration" title={t('gallery.duration', { duration })}>
            <span className="duration-icon" aria-hidden="true">⏱</span>
            {t('gallery.duration', { duration })}
          </div>
        )}
        <LazyVideo src={videoUrl} label={t('gallery.video.unsupported')} contentClassName="video-player" />
        <div className="gallery-actions">
          <MediaPreviewTrigger
            className="btn-secondary"
            onPreview={setPreviewMedia}
            media={{
              kind: 'video',
              src: videoUrl,
              downloadHref: videoDownloadUrl(task.id),
              originalHref: videoUrl,
              title: t('page.video.title'),
            }}
          >
            {t('preview.open')}
          </MediaPreviewTrigger>
          <BlobDownloadButton
            href={videoDownloadUrl(task.id)}
            fileName={`agnes-video-${task.id}.mp4`}
            label={t('gallery.video.download')}
            loadingLabel={t('gallery.downloading')}
          />
          <a className="btn-secondary" href={videoUrl} target="_blank" rel="noreferrer">
            {t('gallery.video.open')}
          </a>
        </div>
      </div>
      <MediaPreviewModal media={previewMedia} onClose={() => setPreviewMedia(null)} />
    </>
  );
}
