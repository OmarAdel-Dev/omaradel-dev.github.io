import { cn } from '@/lib/cn';
import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Centered max-width container with consistent horizontal padding.
 * Renders a <div> by default; use `as` to change the HTML element.
 */
export default function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-360 px-5 sm:px-10 lg:px-16 xl:px-20', className)}>
      {children}
    </Tag>
  );
}
