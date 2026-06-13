import type { ReactNode } from 'react';

export type BadgeTone = 'default' | 'ok' | 'warn' | 'danger';

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

/** 状态徽标，等宽字体小标签。 */
export function Badge({ children, tone = 'default', className = '' }: BadgeProps) {
  const toneClass = tone === 'default' ? '' : `ui-badge--${tone}`;
  return <span className={['ui-badge', toneClass, className].filter(Boolean).join(' ')}>{children}</span>;
}
