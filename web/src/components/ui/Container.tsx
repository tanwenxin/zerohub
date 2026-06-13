import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** 渲染的 HTML 标签，默认 div */
  as?: ElementType;
}

/** 居中内容容器，最大宽度与左右留白由设计令牌控制。 */
export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return <Tag className={`ui-container ${className}`.trim()}>{children}</Tag>;
}
