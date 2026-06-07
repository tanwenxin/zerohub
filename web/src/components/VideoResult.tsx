import { videoDownloadUrl, type Task } from '../api/client';
import { BlobDownloadButton } from './BlobDownloadButton';
import { usePreferences } from '../usePreferences';
import { formatDuration } from '../utils/duration';

// 视频结果展示：内嵌播放器 + 下载/新标签打开
export function VideoResult({ task }: { task: Task }) {
  const { t } = usePreferences();

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
    <div className="video-result">
      {duration && (
        <div className="duration-badge gallery-duration" title={t('gallery.duration', { duration })}>
          <span className="duration-icon" aria-hidden="true">⏱</span>
          {t('gallery.duration', { duration })}
        </div>
      )}
      <video className="video-player" src={videoUrl} controls playsInline preload="metadata">
        {t('gallery.video.unsupported')}
      </video>
      <div className="gallery-actions">
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
  );
}
