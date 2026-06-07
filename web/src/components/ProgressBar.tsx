import { useEffect, useRef, useState } from 'react';
import type { Task } from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

const STATUS_TEXT_KEY: Record<Task['status'], TranslationKey> = {
  pending: 'status.pending',
  queued: 'status.queued',
  running: 'status.running',
  done: 'status.done',
  error: 'status.error',
};

/**
 * 进度条：本地平滑动画。
 * - 任务处于排队/生成中时，进度从 1% 缓慢推进到 99%（越接近越慢），避免长时间卡住不动；
 * - 任务真正完成后直接跳到 100%；失败则冻结当前进度。
 */
export function ProgressBar({ task }: { task: Task }) {
  const { t } = usePreferences();
  const [display, setDisplay] = useState(1);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const clear = () => {
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
    };

    if (task.status === 'done') return clear;
    if (task.status === 'error') {
      clear();
      return clear;
    }

    // queued / running：缓慢逼近 99%
    clear();
    timer.current = window.setInterval(() => {
      setDisplay((prev) => {
        if (prev >= 99) return 99;
        // 剩余空间越小，步进越小，呈现"缓慢推进"的效果
        const step = Math.max(0.4, (99 - prev) * 0.04);
        return Math.min(99, prev + step);
      });
    }, 200);

    return clear;
  }, [task.status]);

  const displayValue = task.status === 'done' ? 100 : display;
  const pct = Math.round(displayValue);

  return (
    <div className="progress-block">
      <div className="progress-head">
        <span className={`status-dot ${task.status}`} />
        <span>{t(STATUS_TEXT_KEY[task.status])}</span>
        <span className="progress-pct">{pct}%</span>
      </div>
      <div className="progress-track">
        <div
          className={`progress-fill ${task.status}`}
          style={{ width: `${displayValue}%` }}
        />
      </div>
      {task.debugInfo?.events?.length > 0 && (
        <details className="debug">
          <summary>{t('progress.debug', { count: task.debugInfo.events.length })}</summary>
          <pre>{JSON.stringify(task.debugInfo, null, 2)}</pre>
        </details>
      )}
    </div>
  );
}
