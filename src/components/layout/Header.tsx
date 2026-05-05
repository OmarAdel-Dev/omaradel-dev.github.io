'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navItems, CTA_EMAIL } from '@/data/navigation';
import MobileNav from './MobileNav';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Button from '@/components/ui/Button';
import { useActiveSection } from '@/hooks/useActiveSection';
import { fadeIn } from '@/lib/motion';
import { scrollToSection } from '@/lib/scrollToSection';

/**
 * Site-wide header: sticky, transparent initially, picks up a
 * subtle background once the user scrolls past the fold.
 *
 * Desktop: logo | nav links | theme toggle + CTA
 * Mobile: logo | theme toggle + burger | slide-in overlay
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const logoResetTimeout = useRef<number | null>(null);
  const shouldReduce = useReducedMotion();
  const activeSection = useActiveSection();

  const clearLogoResetTimeout = () => {
    if (logoResetTimeout.current) {
      window.clearTimeout(logoResetTimeout.current);
      logoResetTimeout.current = null;
    }
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => clearLogoResetTimeout, []);

  useEffect(() => {
    const scrollToCurrentHash = () => {
      if (window.location.hash) {
        requestAnimationFrame(() => scrollToSection(window.location.hash));
      }
    };

    scrollToCurrentHash();
    window.addEventListener('hashchange', scrollToCurrentHash);

    return () => window.removeEventListener('hashchange', scrollToCurrentHash);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent',
        )}
        initial={shouldReduce ? undefined : 'hidden'}
        animate={shouldReduce ? undefined : 'visible'}
        variants={shouldReduce ? undefined : fadeIn}
      >
        <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between gap-8 px-5 sm:px-10 lg:px-16 xl:px-20">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', window.location.pathname);
              if (window.matchMedia('(max-width: 767px)').matches) {
                clearLogoResetTimeout();
                setLogoHovered(true);
                logoResetTimeout.current = window.setTimeout(() => {
                  setLogoHovered(false);
                  logoResetTimeout.current = null;
                }, 2000);
              }
            }}
            className="font-display text-5xl font-black shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground flex items-baseline gap-0 overflow-hidden cursor-pointer bg-transparent border-0 p-0 text-foreground"
            aria-label="Omar Adel home, scroll to top"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => {
              clearLogoResetTimeout();
              setLogoHovered(false);
            }}
            onFocus={() => setLogoHovered(true)}
            onBlur={() => {
              clearLogoResetTimeout();
              setLogoHovered(false);
            }}
          >
            <span>O</span>
            <AnimatePresence initial={false}>
              {logoHovered && (
                <motion.span
                  key="mar"
                  className="inline-block"
                  initial={shouldReduce ? undefined : { opacity: 0, width: 0 }}
                  animate={shouldReduce ? undefined : { opacity: 1, width: 'auto' }}
                  exit={shouldReduce ? undefined : { opacity: 0, width: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  mar
                </motion.span>
              )}
            </AnimatePresence>
            <span className="ml-0.5">A</span>
            <AnimatePresence initial={false}>
              {logoHovered && (
                <motion.span
                  key="del"
                  className="inline-block"
                  initial={shouldReduce ? undefined : { opacity: 0, width: 0 }}
                  animate={shouldReduce ? undefined : { opacity: 1, width: 'auto' }}
                  exit={shouldReduce ? undefined : { opacity: 0, width: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
                  style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  del
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-10" role="list">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.href} className="relative pb-1">
                    <a
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={cn(
                        'font-display font-bold text-sm tracking-widest uppercase text-foreground transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded-sm',
                      )}
                    >
                      {item.label}
                    </a>
                    {isActive && !shouldReduce && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    {isActive && shouldReduce && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <ThemeToggle />

            <Button as="a" href={CTA_EMAIL} className="hidden md:inline-flex">
              Let&apos;s Talk
            </Button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-8 h-8 text-foreground hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded-sm"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <X size={18} strokeWidth={1.5} />
              ) : (
                <Menu size={18} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
