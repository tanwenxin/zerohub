import { useEffect, useRef } from 'react';
import { usePreferences } from '../usePreferences';

const SCROLL_THRESHOLD_MULTIPLIER = 1.5;
const SCROLL_DEBOUNCE_MS = 120;
const SCROLL_DURATION_MS = 560;

function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

function scrollTop(): number {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

export function BackToTopButton() {
  const { t } = usePreferences();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const debounceRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const setVisible = (visible: boolean) => {
      button.classList.toggle('is-visible', visible);
      button.setAttribute('aria-hidden', visible ? 'false' : 'true');
      button.tabIndex = visible ? 0 : -1;
    };

    const updateVisibility = () => {
      setVisible(scrollTop() > window.innerHeight * SCROLL_THRESHOLD_MULTIPLIER);
    };

    const onScroll = () => {
      if (debounceRef.current != null) window.clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(updateVisibility, SCROLL_DEBOUNCE_MS);
    };

    const animateToTop = () => {
      if (frameRef.current != null) window.cancelAnimationFrame(frameRef.current);
      const start = scrollTop();
      if (start <= 0) {
        setVisible(false);
        return;
      }

      const startedAt = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / SCROLL_DURATION_MS);
        const nextTop = start * (1 - easeOutCubic(progress));
        window.scrollTo(0, nextTop);

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(step);
          return;
        }

        frameRef.current = null;
        window.scrollTo(0, 0);
        setVisible(false);
      };

      frameRef.current = window.requestAnimationFrame(step);
    };

    button.addEventListener('click', animateToTop);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateVisibility);
    updateVisibility();

    return () => {
      button.removeEventListener('click', animateToTop);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateVisibility);
      if (debounceRef.current != null) window.clearTimeout(debounceRef.current);
      if (frameRef.current != null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      className="back-to-top"
      aria-label={t('backToTop.label')}
      title={t('backToTop.label')}
      aria-hidden="true"
      tabIndex={-1}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
