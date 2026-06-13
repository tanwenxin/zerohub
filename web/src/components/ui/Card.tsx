import type { ElementType, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** tile 变体带角部光晕装饰，card 为标准面板 */
  variant?: 'card' | 'tile';
  /** 去除投影，用于嵌套或列表内卡片 */
  flat?: boolean;
  as?: ElementType;
}

/** 玻璃命令面卡片。variant=tile 时带角部光晕。 */
export function Card({ children, className = '', variant = 'card', flat = false, as: Tag = 'div' }: CardProps) {
  const base = variant === 'tile' ? 'ui-tile' : 'ui-card';
  return <Tag className={[base, flat ? 'ui-card--flat' : '', className].filter(Boolean).join(' ')}>{children}</Tag>;
}
