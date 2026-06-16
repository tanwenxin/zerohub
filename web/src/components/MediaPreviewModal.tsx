import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!media) return undefined;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [media, onClose]);

  useEffect(() => {
    if (!media || typeof document === 'undefined') return undefined;

    const dialog = dialogRef.current;
    document.body.classList.add('is-media-preview-open');

    if (dialog && typeof dialog.showModal === 'function' && !dialog.open) {
      try {
        dialog.showModal();
      } catch {
        dialog.setAttribute('open', '');
      }
    } else if (dialog && !dialog.open) {
      dialog.setAttribute('open', '');
    }

    return () => {
      document.body.classList.remove('is-media-preview-open');
      if (dialog?.open) dialog.close();
    };
  }, [media]);

  if (!media) return null;

  const label = media.kind === 'image' ? t('preview.imageLabel') : t('preview.videoLabel');
  const downloadLabel = media.kind === 'image' ? t('gallery.download') : t('gallery.video.download');

  const modal = (
    <dialog
      ref={dialogRef}
      className="media-preview-backdrop"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
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
    </dialog>
  );

  if (typeof document === 'undefined') return modal;
  return createPortal(modal, document.body);
}
