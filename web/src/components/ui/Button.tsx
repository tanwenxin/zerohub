import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'default' | 'primary' | 'ghost' | 'danger';

function buttonClass(variant: ButtonVariant, block: boolean, size: 'md' | 'sm', className: string): string {
  const variantClass = variant === 'default' ? '' : `ui-btn--${variant}`;
  return ['ui-btn', variantClass, block ? 'ui-btn--block' : '', size === 'sm' ? 'ui-btn--sm' : '', className]
    .filter(Boolean)
    .join(' ');
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  block?: boolean;
  size?: 'md' | 'sm';
  children: ReactNode;
}

/** 通用按钮。通过 variant / size / block 扩展，避免重复定义相似按钮。 */
export function Button({
  variant = 'default',
  block = false,
  size = 'md',
  className = '',
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonClass(variant, block, size, className)} {...rest}>
      {children}
    </button>
  );
}

interface ButtonLinkProps {
  to: string;
  variant?: ButtonVariant;
  block?: boolean;
  size?: 'md' | 'sm';
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

/** 与 Button 视觉一致的路由链接，用于需要导航的按钮场景。 */
export function ButtonLink({
  to,
  variant = 'default',
  block = false,
  size = 'md',
  className = '',
  children,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={buttonClass(variant, block, size, className)} onClick={onClick}>
      {children}
    </Link>
  );
}
