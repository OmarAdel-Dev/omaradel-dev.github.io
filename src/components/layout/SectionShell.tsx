import { cn } from '@/lib/cn';
import { type ReactNode } from 'react';
import Container from './Container';

interface SectionShellProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Remove the top border (e.g. for the very first section after the hero) */
  noBorder?: boolean;
  /** Render an inverted (dark/foreground-swap) background */
  inverted?: boolean;
}

/**
 * Full-width section wrapper.
 * Provides consistent vertical rhythm, an optional top border,
 * and an optional inverted (dark panel) background.
 */
export default function SectionShell({
  children,
  id,
  className,
  noBorder = false,
  inverted = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-svh py-16 md:py-20 lg:py-24 xl:py-[7.5rem]',
        !noBorder && 'border-t border-border',
        inverted && 'bg-inverted text-inverted-fg',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
