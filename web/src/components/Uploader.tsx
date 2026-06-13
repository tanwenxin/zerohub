import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { usePreferences } from '../usePreferences';
import { MediaPreviewModal, type PreviewMedia } from './MediaPreviewModal';

interface Props {
  files: File[];
  urls: string[];
  onFilesChange: (files: File[]) => void;
  onUrlsChange: (urls: string[]) => void;
  maxItems?: number;
  allowLocalFiles?: boolean;
  maxFileBytes?: number; // 单文件大小上限（字节），超出则拒绝并提示
  /** slots：还原 temp 参考素材槽栅格；list（默认）：原有的缩略图列表 */
  variant?: 'list' | 'slots';
  /** slots 变体下显示在标题右侧的说明（如"当前模式不强制上传"） */
  note?: ReactNode;
}

// 图片输入组件：支持本地文件上传 + 粘贴公网 URL
export function Uploader({
  files,
  urls,
  onFilesChange,
  onUrlsChange,
  maxItems = 8,
  allowLocalFiles = true,
  maxFileBytes,
  variant = 'list',
  note,
}: Props) {
  const { t } = usePreferences();
  const inputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState('');
  const [sizeError, setSizeError] = useState('');
  const [previewMedia, setPreviewMedia] = useState<PreviewMedia | null>(null);

  const total = files.length + urls.length;
  const filePreviews = useMemo(
    () => files.map((file) => ({ file, src: URL.createObjectURL(file) })),
    [files]
  );

  useEffect(() => {
    return () => {
      filePreviews.forEach((item) => URL.revokeObjectURL(item.src));
    };
  }, [filePreviews]);

  function addFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files];
    let rejected = false;
    for (const f of Array.from(list)) {
      if (next.length + urls.length >= maxItems) break;
      if (maxFileBytes && f.size > maxFileBytes) {
        rejected = true;
        continue;
      }
      next.push(f);
    }
    if (rejected && maxFileBytes) {
      const mb = Math.round(maxFileBytes / (1024 * 1024));
      setSizeError(t('uploader.tooLarge', { max: mb }));
    } else {
      setSizeError('');
    }
    onFilesChange(next);
    if (inputRef.current) inputRef.current.value = '';
  }

  function addUrl() {
    const v = urlInput.trim();
    if (!v) return;
    if (total >= maxItems) return;
    onUrlsChange([...urls, v]);
    setUrlInput('');
  }

  // slots 变体：还原 temp 参考素材槽栅格。
  // 仅渲染「已上传的素材槽」+ 末尾一个「添加素材」槽（未达上限时），
  // 不预设固定数量的空槽，槽位随上传动态增减。
  if (variant === 'slots') {
    const showAddSlot = total < maxItems;

    return (
      <div className="uploader asset-block">
        <div className="asset-head">
          <span className="eyebrow">{t('asset.title')}</span>
          {note ?? <span className="badge">{t('asset.noteOptional')}</span>}
        </div>
        <div className="asset-grid">
          {filePreviews.map(({ file, src }, i) => (
            <div className="asset is-filled" key={`f-${i}`}>
              <img className="asset-thumb" src={src} alt={file.name} />
              <button
                type="button"
                className="asset-remove"
                onClick={() => onFilesChange(files.filter((_, idx) => idx !== i))}
                title={t('asset.remove')}
                aria-label={t('asset.remove')}
              >
                ×
              </button>
              <span className="asset-filled-tag">{t('asset.filled', { index: i + 1 })}</span>
            </div>
          ))}
          {urls.map((u, i) => (
            <div className="asset is-filled" key={`u-${i}`}>
              <img
                className="asset-thumb"
                src={u}
                alt={`url-${i}`}
                onError={(e) => (e.currentTarget.style.opacity = '0.3')}
              />
              <button
                type="button"
                className="asset-remove"
                onClick={() => onUrlsChange(urls.filter((_, idx) => idx !== i))}
                title={t('asset.remove')}
                aria-label={t('asset.remove')}
              >
                ×
              </button>
              <span className="asset-filled-tag">{t('asset.filled', { index: files.length + i + 1 })}</span>
            </div>
          ))}
          {showAddSlot && (
            <button type="button" className="asset" onClick={() => inputRef.current?.click()}>
              <span className="asset-add-label">＋ {t('asset.add')}</span>
            </button>
          )}
        </div>
        <input
          ref={inputRef}
          type="file"
          name="images"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => addFiles(e.target.files)}
        />
        <div className="url-add" style={{ marginTop: 'var(--space-3)' }}>
          <input
            type="text"
            name="imageUrl"
            placeholder={t('uploader.urlPlaceholder')}
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addUrl())}
          />
          <button type="button" className="btn-secondary" onClick={addUrl}>
            {t('uploader.add')}
          </button>
        </div>
        <p className="hint">{t('uploader.selected', { count: total, max: maxItems })}</p>
        {sizeError && <p className="hint uploader-error">{sizeError}</p>}
        <MediaPreviewModal media={previewMedia} onClose={() => setPreviewMedia(null)} />
      </div>
    );
  }

  return (
    <div className="uploader">
      <div className="uploader-actions">
        {allowLocalFiles && (
          <>
            <button type="button" className="btn-secondary" onClick={() => inputRef.current?.click()}>
              {t('uploader.choose')}
            </button>
            <input
              ref={inputRef}
              type="file"
              name="images"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => addFiles(e.target.files)}
            />
          </>
        )}
        <div className="url-add">
          <input
            type="text"
            name="imageUrl"
            placeholder={t('uploader.urlPlaceholder')}
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addUrl())}
          />
          <button type="button" className="btn-secondary" onClick={addUrl}>
            {t('uploader.add')}
          </button>
        </div>
      </div>

      <div className="preview-list">
        {filePreviews.map(({ file, src }, i) => (
          <div className="preview-item" key={`f-${i}`}>
            <button
              type="button"
              className="preview-thumb"
              onClick={() => {
                setPreviewMedia({
                  kind: 'image',
                  src,
                  alt: file.name,
                  downloadHref: src,
                  title: file.name,
                  meta: t('uploader.file'),
                });
              }}
            >
              <img src={src} alt={file.name} />
            </button>
            <button
              type="button"
              className="remove"
              onClick={() => onFilesChange(files.filter((_, idx) => idx !== i))}
            >
              ×
            </button>
            <span className="tag">{t('uploader.file')}</span>
          </div>
        ))}
        {urls.map((u, i) => (
          <div className="preview-item" key={`u-${i}`}>
            <button
              type="button"
              className="preview-thumb"
              onClick={() => {
                setPreviewMedia({
                  kind: 'image',
                  src: u,
                  alt: `url-${i}`,
                  downloadHref: u,
                  title: t('uploader.url'),
                  meta: u,
                });
              }}
            >
              <img src={u} alt={`url-${i}`} onError={(e) => (e.currentTarget.style.opacity = '0.3')} />
            </button>
            <button
              type="button"
              className="remove"
              onClick={() => onUrlsChange(urls.filter((_, idx) => idx !== i))}
            >
              ×
            </button>
            <span className="tag">{t('uploader.url')}</span>
          </div>
        ))}
      </div>
      <p className="hint">{t('uploader.selected', { count: total, max: maxItems })}</p>
      {sizeError && <p className="hint uploader-error">{sizeError}</p>}
      <MediaPreviewModal media={previewMedia} onClose={() => setPreviewMedia(null)} />
    </div>
  );
}
