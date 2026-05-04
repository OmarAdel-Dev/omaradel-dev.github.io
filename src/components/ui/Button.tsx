import { cn } from '@/lib/cn';
import { type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type BaseProps = {
  icon?: ReactNode | boolean;
  inverted?: boolean;
  className?: string;
};

type ButtonLinkProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    children: ReactNode;
    as?: 'a';
    href: string;
  };

type ButtonElementProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    children: ReactNode;
    as?: 'button';
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

/**
 * CTA button that can render as either an anchor or a button.
 * Normal context uses foreground fill; inverted context keeps contrast inside dark panels.
 */
export default function Button({
  children,
  icon = true,
  inverted = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center gap-2 border font-display font-bold text-sm tracking-widest uppercase px-5 py-2.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 w-fit',
    inverted
      ? 'border-panel-fg bg-panel-fg text-panel hover:bg-transparent hover:text-panel-fg focus-visible:outline-panel-fg'
      : 'border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground focus-visible:outline-foreground',
    className,
  );

  const renderIcon = () => {
    if (icon === false) return null;
    if (typeof icon === 'object' && icon !== null) return icon;
    return <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />;
  };

  if ('href' in props) {
    // Strip the discriminating `as` prop before spreading onto the DOM element.
    const linkProps = { ...props } as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: 'a';
    };
    delete linkProps.as;

    return (
      <a className={baseStyles} {...linkProps}>
        {children}
        {renderIcon()}
      </a>
    );
  }

  // Strip the discriminating `as` prop before spreading onto the DOM element.
  const buttonProps = { ...props } as React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };
  delete buttonProps.as;

  return (
    <button className={baseStyles} {...buttonProps}>
      {children}
      {renderIcon()}
    </button>
  );
}
