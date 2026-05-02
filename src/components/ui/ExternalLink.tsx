import { cn } from '@/lib/cn';
import { ArrowUpRight } from 'lucide-react';
import { type ReactNode } from 'react';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  /** Show the arrow indicator (default: true) */
  showArrow?: boolean;
  className?: string;
}

/**
 * Safe external link: always opens in a new tab with `noopener noreferrer`.
 * Shows an optional directional indicator.
 */
export default function ExternalLink({
  children,
  href,
  showArrow = true,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1 transition-opacity duration-200 hover:opacity-70',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
      )}
    </a>
  );
}
