import { cn } from '@/lib/cn';
import { type ReactNode } from 'react';

interface EditorialPanelProps {
  children: ReactNode;
  className?: string;
  /**
   * `filled`: solid inverted background (black in light, white in dark).
   * `outline`: transparent background, relies on parent's inverted section.
   */
  variant?: 'filled' | 'outline';
}

/**
 * Large-text editorial callout panel.
 * Used for bold typographic statements that punctuate a section layout.
 *
 * In `filled` mode it has an inverted background (black / white depending on theme).
 * In `outline` mode it inherits the parent container colours.
 */
export default function EditorialPanel({
  children,
  className,
  variant = 'filled',
}: EditorialPanelProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-end p-8 lg:p-10 h-full min-h-[260px]',
        variant === 'filled' && 'bg-inverted text-inverted-fg',
        variant === 'outline' && 'bg-transparent',
        className,
      )}
    >
      {/* Short accent dash above text */}
      <span
        className={cn(
          'block h-px w-8 mb-6',
          variant === 'filled' ? 'bg-inverted-fg/40' : 'bg-foreground/30',
        )}
        aria-hidden="true"
      />

      <p
        className={cn(
          'font-display font-black uppercase leading-[1.05]',
          'text-2xl lg:text-3xl',
        )}
      >
        {children}
      </p>

      {/* Bottom dash */}
      <span
        className={cn(
          'block h-px w-8 mt-6',
          variant === 'filled' ? 'bg-inverted-fg/40' : 'bg-foreground/30',
        )}
        aria-hidden="true"
      />
    </div>
  );
}
