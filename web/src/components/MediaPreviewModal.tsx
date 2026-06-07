import { useEffect } from 'react';
import { usePreferences } from '../usePreferences';

export type PreviewMedia =
  | {
      kind: 'image';
      src: string;
      alt: string;
      downloadHref: string;
      title?: string;
      meta?: string;
    }
  | {
      kind: 'video';
      src: string;
      downloadHref: string;
      title?: string;
      meta?: string;
    };

interface MediaPreviewModalProps {
  media: PreviewMedia | null;
  onClose: () => void;
}

export function MediaPreviewModal({ media, onClose }: MediaPreviewModalProps) {
  const { t } = usePreferences();

  useEffect(() => {
    if (!media) return undefined;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [media, onClose]);

  if (!media) return null;

  const label = media.kind === 'image' ? t('preview.imageLabel') : t('preview.videoLabel');
  const downloadLabel = media.kind === 'image' ? t('gallery.download') : t('gallery.video.download');

  return (
    <div
      className="media-preview-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <div className="media-preview-dialog" onClick={(event) => event.stopPropagation()}>
        <div className="media-preview-header">
          <div>
            <strong>{media.title || label}</strong>
            {media.meta && <span>{media.meta}</span>}
          </div>
          <button className="media-preview-close" type="button" onClick={onClose} aria-label={t('preview.close')}>
            ×
          </button>
        </div>

        <div className="media-preview-body">
          {media.kind === 'image' ? (
            <img src={media.src} alt={media.alt} />
          ) : (
            <video src={media.src} controls autoPlay playsInline preload="metadata">
              {t('gallery.video.unsupported')}
            </video>
          )}
        </div>

        <div className="media-preview-actions">
          <a className="btn-primary" href={media.downloadHref}>
            {downloadLabel}
          </a>
          <button className="btn-secondary" type="button" onClick={onClose}>
            {t('preview.close')}
          </button>
        </div>
      </div>
    </div>
  );
}
