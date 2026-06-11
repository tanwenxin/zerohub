import { useEffect, useRef, useState } from 'react';
import { optimizePrompt, type TaskType } from '../api/client';
import { usePreferences } from '../usePreferences';

interface Props {
  prompt: string;
  mode: TaskType;
  onOptimized: (text: string) => void;
  disabled?: boolean;
}

// 「优化提示词」按钮：调用文本模型，将原始提示词按当前模式规范润色后回填
export function PromptOptimizeButton({ prompt, mode, onOptimized, disabled }: Props) {
  const { t } = usePreferences();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const doneTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (doneTimerRef.current) window.clearTimeout(doneTimerRef.current);
    };
  }, []);

  async function onClick() {
    if (loading || disabled) return;
    if (!prompt.trim()) {
      setError(t('prompt.optimizeEmpty'));
      return;
    }
    setError('');
    setDone(false);
    setLoading(true);
    try {
      const res = await optimizePrompt(prompt.trim(), mode);
      if (res.prompt && res.prompt.trim()) {
        onOptimized(res.prompt.trim());
        setDone(true);
        if (doneTimerRef.current) window.clearTimeout(doneTimerRef.current);
        doneTimerRef.current = window.setTimeout(() => setDone(false), 1600);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('prompt.optimizeError'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="prompt-optimize-control">
      <button
        type="button"
        className={`prompt-optimize-btn ${done ? 'is-done' : ''}`}
        disabled={loading || disabled}
        onClick={onClick}
        title={loading ? t('prompt.optimizing') : done ? t('prompt.optimized') : t('prompt.optimize')}
        aria-label={loading ? t('prompt.optimizing') : done ? t('prompt.optimized') : t('prompt.optimize')}
      >
        {loading && <span className="spinner" aria-hidden="true" />}
        {!loading && <span aria-hidden="true">{done ? '✓' : '✦'}</span>}
      </button>
      {error && <span className="prompt-optimize-error">{error}</span>}
    </div>
  );
}
