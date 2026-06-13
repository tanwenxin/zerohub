import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** 眉题：等宽大写小标题，用于区块上方的分类标签。 */
export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return <p className={`ui-eyebrow ${className}`.trim()}>{children}</p>;
}
