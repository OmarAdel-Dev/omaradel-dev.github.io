'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { slideMenu, staggerContainer, fadeUp } from '@/lib/motion';
import { navItems, CTA_EMAIL } from '@/data/navigation';
import { cn } from '@/lib/cn';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

/**
 * Slide-in mobile navigation panel.
 * Enters from the right; nav links stagger in.
 * Respects reduced-motion via Framer Motion's global setting.
 */
export default function MobileNav({ isOpen, onClose, activeSection }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide panel */}
          <motion.nav
            id="mobile-nav"
            className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-background border-l border-border flex flex-col px-8 py-10"
            variants={slideMenu}
            initial="closed"
            animate="open"
            exit="closed"
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="self-end mb-10 flex items-center justify-center w-8 h-8 text-muted-fg hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded-sm"
              aria-label="Close navigation menu"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {/* Nav links */}
            <motion.ul
              className="flex flex-col gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              role="list"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.li key={item.href} variants={fadeUp}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 font-display text-4xl font-black uppercase leading-none transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    >
                      <span
                        className={cn(
                          'inline-block h-px w-5 bg-foreground transition-all duration-300 shrink-0',
                          isActive ? 'w-5 opacity-100' : 'w-0 opacity-0',
                        )}
                        aria-hidden="true"
                      />
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Bottom CTA */}
            <div className="mt-auto">
              <a
                href={CTA_EMAIL}
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-foreground text-background font-body text-xs tracking-widest uppercase px-5 py-3 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                Let&apos;s Talk <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
