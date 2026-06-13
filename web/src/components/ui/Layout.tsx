import type { ElementType, ReactNode } from 'react';

interface BaseProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** 区块容器，带上下大间距。 */
export function Section({ children, className = '', as: Tag = 'section' }: BaseProps) {
  return <Tag className={`ui-section ${className}`.trim()}>{children}</Tag>;
}

interface GridProps extends BaseProps {
  cols?: 2 | 3;
}

/** 等宽栅格，窄屏自动单列。 */
export function Grid({ children, className = '', cols = 3, as: Tag = 'div' }: GridProps) {
  return <Tag className={`ui-grid-${cols} ${className}`.trim()}>{children}</Tag>;
}

/** 横向排列容器，自动换行。 */
export function Row({ children, className = '', as: Tag = 'div' }: BaseProps) {
  return <Tag className={`ui-row ${className}`.trim()}>{children}</Tag>;
}

/** 纵向堆叠容器，统一间距。 */
export function Stack({ children, className = '', as: Tag = 'div' }: BaseProps) {
  return <Tag className={`ui-stack ${className}`.trim()}>{children}</Tag>;
}
