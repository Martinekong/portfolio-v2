import {type ButtonHTMLAttributes, type ReactNode} from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'card';
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'button',
        variant === 'primary' && 'primary-btn',
        variant === 'secondary' && 'secondary-btn',
        variant === 'card' && 'card-btn',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
