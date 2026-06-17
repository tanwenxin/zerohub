import type { ReactNode } from 'react';
import type { PreviewMedia } from './MediaPreviewModal';
import { usePreferences } from '../usePreferences';

interface MediaPreviewTriggerProps {
  media: PreviewMedia;
  onPreview: (media: PreviewMedia) => void;
  children: ReactNode;
  className?: string;
  title?: string;
}

export function MediaPreviewTrigger({
  media,
  onPreview,
  children,
  className = 'media-preview-trigger',
  title,
}: MediaPreviewTriggerProps) {
  const { t } = usePreferences();

  return (
    <button
      className={className}
      type="button"
      onClick={() => onPreview(media)}
      aria-label={title || t('preview.open')}
      title={title || t('preview.open')}
    >
      {children}
    </button>
  );
}
