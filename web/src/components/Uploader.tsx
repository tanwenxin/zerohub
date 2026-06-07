import { useRef, useState } from 'react';
import { usePreferences } from '../usePreferences';

interface Props {
  files: File[];
  urls: string[];
  onFilesChange: (files: File[]) => void;
  onUrlsChange: (urls: string[]) => void;
  maxItems?: number;
  allowLocalFiles?: boolean;
  maxFileBytes?: number; // 单文件大小上限（字节），超出则拒绝并提示
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
}: Props) {
  const { t } = usePreferences();
  const inputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState('');
  const [sizeError, setSizeError] = useState('');

  const total = files.length + urls.length;

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
        {files.map((f, i) => (
          <div className="preview-item" key={`f-${i}`}>
            <img src={URL.createObjectURL(f)} alt={f.name} />
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
            <img src={u} alt={`url-${i}`} onError={(e) => (e.currentTarget.style.opacity = '0.3')} />
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
    </div>
  );
}
