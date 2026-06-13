import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { checkPromptCompleteness, type PromptCompleteness, type TaskType } from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

interface Props {
  prompt: string;
  mode: TaskType;
  assessKey: number;
}

type Status = 'idle' | 'loading' | 'done' | 'error';

// 触发评估的最小有效字符数，避免对极短输入频繁请求
const MIN_PROMPT_LENGTH = 8;
// 失焦后短防抖，避免 blur 与状态更新挤在同一轮事件里造成重复请求
const DEBOUNCE_MS = 300;

const LEVEL_KEY: Record<PromptCompleteness['level'], TranslationKey> = {
  weak: 'completeness.level.weak',
  fair: 'completeness.level.fair',
  strong: 'completeness.level.strong',
};

// 评分对应的环形进度颜色
function ringColor(level: PromptCompleteness['level']): string {
  if (level === 'strong') return 'var(--success)';
  if (level === 'fair') return 'var(--warn)';
  return 'var(--danger)';
}

/**
 * Prompt 完整度校验：
 * 用户修改提示词并离开输入框后（防抖），调用后台文本模型按当前模式规范评估完整度，
 * 展示评分环、完整度等级、概述、薄弱维度与改进建议。失败可手动重试。
 */
export function PromptCompleteness({ prompt, mode, assessKey }: Props) {
  const { t } = usePreferences();
  const [status, setStatus] = useState<Status>('idle');
  const [result, setResult] = useState<PromptCompleteness | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const reqIdRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);
  const lastCompletedKeyRef = useRef('');

  const trimmed = prompt.trim();
  const tooShort = trimmed.length < MIN_PROMPT_LENGTH;
  const promptKey = `${mode}\n${trimmed}`;

  // 实际发起评估：用递增的请求 id 丢弃过期响应，避免乱序覆盖
  const run = useCallback(async (value: string, currentMode: TaskType) => {
    const requestKey = `${currentMode}\n${value.trim()}`;
    const reqId = ++reqIdRef.current;
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await checkPromptCompleteness(value, currentMode);
      if (reqId !== reqIdRef.current) return; // 已有更新的请求，丢弃本次结果
      lastCompletedKeyRef.current = requestKey;
      setResult(res);
      setStatus('done');
    } catch (err) {
      if (reqId !== reqIdRef.current) return;
      setErrorMessage(err instanceof Error ? err.message : '');
      setStatus('error');
    }
  }, []);

  // prompt / mode 变化时只作废旧请求和旧结果，不主动发起评估。
  useEffect(() => {
    reqIdRef.current += 1; // 使进行中的请求立即失效，丢弃其响应
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (resetTimerRef.current != null) window.clearTimeout(resetTimerRef.current);
    const timer = window.setTimeout(() => {
      if (tooShort || lastCompletedKeyRef.current !== promptKey) {
        setStatus('idle');
        setResult(null);
        setErrorMessage('');
      }
    }, 0);
    resetTimerRef.current = timer;
    return () => {
      window.clearTimeout(timer);
      if (resetTimerRef.current === timer) resetTimerRef.current = null;
    };
  }, [promptKey, tooShort]);

  // 输入框失焦后由外部递增 assessKey 触发评估；同一 prompt 成功评估过则不重复请求。
  useEffect(() => {
    if (assessKey <= 0 || tooShort || lastCompletedKeyRef.current === promptKey) return;
    if (timerRef.current != null) window.clearTimeout(timerRef.current);
    const timer = window.setTimeout(() => {
      void run(trimmed, mode);
    }, DEBOUNCE_MS);
    timerRef.current = timer;
    return () => {
      window.clearTimeout(timer);
      if (timerRef.current === timer) timerRef.current = null;
    };
  }, [assessKey, mode, promptKey, run, tooShort, trimmed]);

  const showRing = status === 'loading' || (status === 'done' && result);
  const score = result?.score ?? 0;
  const level = result?.level ?? 'weak';

  return (
    <div className="completeness" aria-live="polite">
      <div className="completeness-meter">
        <div
          className={`completeness-ring ${status === 'loading' ? 'is-loading' : ''}`}
          data-score={showRing ? score : '—'}
          style={{ '--score': showRing ? score : 0, '--ring-color': ringColor(level) } as CSSProperties}
          role="img"
          aria-label={t('completeness.title')}
        />
        <div className="completeness-body">
          <h3>
            {t('completeness.title')}
            {status === 'done' && result && (
              <span className={`completeness-level ${level}`}>{t(LEVEL_KEY[level])}</span>
            )}
          </h3>

          {status === 'idle' && <p className="completeness-state">{t('completeness.idle')}</p>}
          {status === 'loading' && <p className="completeness-state">{t('completeness.checking')}</p>}
          {status === 'done' && result && (
            <p className="completeness-summary">{result.summary || t('completeness.hint')}</p>
          )}
          {status === 'error' && (
            <div className="completeness-foot">
              <p className="completeness-error">{errorMessage || t('completeness.error')}</p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => void run(trimmed, mode)}
                disabled={tooShort}
              >
                {t('completeness.retry')}
              </button>
            </div>
          )}
        </div>
      </div>

      {status === 'done' && result && result.missing.length > 0 && (
        <div>
          <p className="completeness-hint" style={{ marginTop: 'var(--space-3)' }}>
            {t('completeness.missing')}
          </p>
          <div className="completeness-tags">
            {result.missing.map((item) => (
              <span className="completeness-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {status === 'done' && result && result.suggestions.length > 0 && (
        <ul className="completeness-suggestions" aria-label={t('completeness.suggestions')}>
          {result.suggestions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
