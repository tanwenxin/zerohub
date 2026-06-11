import { useState } from 'react';
import { fileToDataUri, understandImage, type TaskType } from '../api/client';
import { usePreferences } from '../usePreferences';

interface Props {
  files: File[];
  urls: string[];
  mode: TaskType;
  prompt?: string;
  onUseAsPrompt: (text: string) => void;
}

// 图片理解面板：基于已上传图片（可结合用户已输入内容），生成符合当前模式规范的提示词
export function ImageUnderstandPanel({ files, urls, mode, prompt, onUseAsPrompt }: Props) {
  const { t } = usePreferences();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const total = files.length + urls.length;
  if (total === 0) {
    return null;
  }

  const multiple = total > 1;

  async function onAnalyze() {
    if (loading) return;
    setError('');
    setResult('');
    setCopied(false);
    setLoading(true);
    try {
      // 多图场景仅分析第一张：优先取上传文件，其次取 URL
      const image = files.length > 0 ? await fileToDataUri(files[0]) : urls[0];
      const res = await understandImage(image, mode, prompt);
      setResult(res.result || '');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('understand.error'));
    } finally {
      setLoading(false);
    }
  }

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // 复制失败静默处理，用户可手动选择文本
    }
  }

  return (
    <div className="understand-panel">
      <div className="understand-head">
        <button
          type="button"
          className="btn-secondary understand-btn"
          disabled={loading}
          onClick={onAnalyze}
        >
          {loading && <span className="spinner" aria-hidden="true" />}
          <span>{loading ? t('understand.analyzing') : t('understand.button')}</span>
        </button>
        {multiple && <span className="hint understand-firstonly">{t('understand.firstOnly')}</span>}
      </div>

      {error && <p className="hint understand-error">{error}</p>}

      {result && (
        <div className="understand-result-wrap">
          <div className="understand-result-title">{t('understand.resultTitle')}</div>
          <div className="understand-result">{result}</div>
          <div className="understand-actions">
            <button type="button" className="btn-secondary" onClick={() => onUseAsPrompt(result)}>
              {t('understand.useAsPrompt')}
            </button>
            <button type="button" className="btn-secondary" onClick={onCopy}>
              {copied ? t('understand.copied') : t('understand.copy')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
