import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  ApiError,
  checkPromptCompleteness,
  sanitizePrompt,
  type PromptCompleteness,
  type TaskType,
} from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

interface Props {
  prompt: string;
  mode: TaskType;
  assessKey: number;
  onSanitized?: (text: string) => void;
}

type Status = 'idle' | 'loading' | 'done' | 'error';

// 命中内容安全策略的错误码：完整度评估失败若为这些码，说明提示词包含违规内容，可一键清洗
const MODERATION_CODES = new Set([
  'SEXUAL_EXPLICIT',
  'VIOLENCE_HARM',
  'HATE_HARASSMENT',
  'ILLEGAL_DECEPTIVE',
  'PUBLIC_FIGURE_DECEPTION',
]);

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
export function PromptCompleteness({ prompt, mode, assessKey, onSanitized }: Props) {
  const { t } = usePreferences();
  const [status, setStatus] = useState<Status>('idle');
  const [result, setResult] = useState<PromptCompleteness | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [violation, setViolation] = useState(false); // 当前错误是否为内容违规（可一键清洗）
  const [sanitizing, setSanitizing] = useState(false);
  const [sanitizeNote, setSanitizeNote] = useState('');
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
    setViolation(false);
    setSanitizeNote('');
    try {
      const res = await checkPromptCompleteness(value, currentMode);
      if (reqId !== reqIdRef.current) return; // 已有更新的请求，丢弃本次结果
      lastCompletedKeyRef.current = requestKey;
      setResult(res);
      setStatus('done');
    } catch (err) {
      if (reqId !== reqIdRef.current) return;
      setErrorMessage(err instanceof Error ? err.message : '');
      setViolation(err instanceof ApiError && !!err.code && MODERATION_CODES.has(err.code));
      setStatus('error');
    }
  }, []);

  // 一键清洗：去除提示词中的违规敏感词后回填，并对清洗结果重新发起评估
  const sanitizeAndReassess = useCallback(async () => {
    if (sanitizing || !onSanitized) return;
    setSanitizing(true);
    setSanitizeNote('');
    try {
      const res = await sanitizePrompt(trimmed);
      const next = res.prompt.trim();
      if (!next) {
        setSanitizeNote(t('completeness.sanitizeEmpty'));
        return;
      }
      onSanitized(next);
      lastCompletedKeyRef.current = '';
      setSanitizeNote(res.changed ? t('completeness.sanitizeDone') : t('completeness.sanitizeNoChange'));
      void run(next, mode);
    } catch (err) {
      setSanitizeNote(err instanceof Error ? err.message : t('completeness.sanitizeError'));
    } finally {
      setSanitizing(false);
    }
  }, [mode, onSanitized, run, sanitizing, t, trimmed]);

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
              {violation && onSanitized && (
                <p className="completeness-state">{t('completeness.sanitizeHint')}</p>
              )}
              <div className="completeness-foot-actions">
                {violation && onSanitized && (
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => void sanitizeAndReassess()}
                    disabled={sanitizing}
                  >
                    {sanitizing ? t('completeness.sanitizing') : t('completeness.sanitizeAction')}
                  </button>
                )}
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => void run(trimmed, mode)}
                  disabled={tooShort || sanitizing}
                >
                  {t('completeness.retry')}
                </button>
              </div>
              {sanitizeNote && <p className="completeness-state">{sanitizeNote}</p>}
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
