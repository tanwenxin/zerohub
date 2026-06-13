import type { ReactNode } from 'react';

interface FieldProps {
  label: ReactNode;
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

/** 表单字段容器：标签 + 控件竖向堆叠。 */
export function Field({ label, htmlFor, children, className = '' }: FieldProps) {
  return (
    <div className={`ui-field ${className}`.trim()}>
      <label className="ui-field-label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}
