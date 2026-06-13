import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { checkPromptCompleteness, type PromptCompleteness, type TaskType } from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

interface Props {
  prompt: string;
  mode: TaskType;
}

type Status = 'idle' | 'loading' | 'done' | 'error';

// 触发评估的最小有效字符数，避免对极短输入频繁请求
const MIN_PROMPT_LENGTH = 8;
// 输入防抖时延（毫秒）
const DEBOUNCE_MS = 1000;

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
 * 用户输入提示词后（防抖），调用后台文本模型按当前模式规范评估完整度，
 * 展示评分环、完整度等级、概述、薄弱维度与改进建议。失败可手动重试。
 */
export function PromptCompleteness({ prompt, mode }: Props) {
  const { t } = usePreferences();
  const [status, setStatus] = useState<Status>('idle');
  const [result, setResult] = useState<PromptCompleteness | null>(null);
  const reqIdRef = useRef(0);

  const trimmed = prompt.trim();
  const tooShort = trimmed.length < MIN_PROMPT_LENGTH;

  // 实际发起评估：用递增的请求 id 丢弃过期响应，避免乱序覆盖
  async function run(value: string, currentMode: TaskType) {
    const reqId = ++reqIdRef.current;
    setStatus('loading');
    try {
      const res = await checkPromptCompleteness(value, currentMode);
      if (reqId !== reqIdRef.current) return; // 已有更新的请求，丢弃本次结果
      setResult(res);
      setStatus('done');
    } catch {
      if (reqId !== reqIdRef.current) return;
      setStatus('error');
    }
  }

  // prompt / mode 变化时防抖触发；过短或为空则回到 idle。
  // 所有状态更新都放到定时器回调中，避免在 effect 体内同步 setState。
  useEffect(() => {
    reqIdRef.current += 1; // 使进行中的请求立即失效，丢弃其响应
    const timer = window.setTimeout(() => {
      if (tooShort) {
        setStatus('idle');
        setResult(null);
        return;
      }
      void run(trimmed, mode);
    }, tooShort ? 0 : DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trimmed, mode]);

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
              <p className="completeness-error">{t('completeness.error')}</p>
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
