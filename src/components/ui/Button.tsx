import { cn } from '@/lib/cn';
import { type ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md';
}

/**
 * Base button component.
 * - `primary`: filled background (foreground color), inverted text.
 * - `ghost`: text-only with underline on hover.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-body tracking-[0.15em] uppercase transition-opacity duration-200 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground',
        variant === 'primary' && 'bg-foreground text-background',
        variant === 'ghost' &&
          'bg-transparent text-foreground underline-offset-4 hover:underline hover:opacity-100',
        size === 'sm' && 'text-[10px] px-4 py-2',
        size === 'md' && 'text-[11px] px-5 py-3',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
