'use client';

import { motion, useReducedMotion, type MotionProps } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/data/social';

type AnimProps = Pick<MotionProps, 'initial' | 'animate' | 'transition'>;

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HEADLINE_LINES = ['I BUILD', 'SYSTEMS,', 'NOT JUST', 'COMPONENTS.'] as const;

const headlineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

const headlineLine = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export default function HeroSection() {
  const shouldReduce = useReducedMotion();

  /** Fade-up motion props with explicit delay; no-ops when reduced motion is on. */
  const fp = (delay: number, y = 16): AnimProps => ({
    initial: shouldReduce ? undefined : { opacity: 0, y },
    animate: shouldReduce ? undefined : { opacity: 1, y: 0 },
    transition: shouldReduce ? undefined : { duration: 0.55, ease, delay },
  });

  /** Fade-only motion props; no-ops when reduced motion is on. */
  const fi = (delay: number): AnimProps => ({
    initial: shouldReduce ? undefined : { opacity: 0 },
    animate: shouldReduce ? undefined : { opacity: 1 },
    transition: shouldReduce ? undefined : { duration: 0.5, ease: 'easeOut' as const, delay },
  });

  return (
    <section id="hero" aria-label="Hero" className="flex min-h-svh flex-col justify-between">
      <div className="mx-auto flex w-full max-w-360 flex-1 flex-col justify-center gap-x-12 px-5 pt-20 pb-6 sm:px-10 md:grid md:grid-cols-hero-md md:items-center lg:grid-cols-hero-lg lg:gap-x-20 lg:px-16 lg:pt-24 xl:px-20">
        <div>
          <motion.h1
            className="font-display text-[clamp(3.25rem,16vw,4.75rem)] font-black uppercase leading-none text-foreground md:text-[clamp(4rem,9vw,10rem)]"
            variants={shouldReduce ? undefined : headlineContainer}
            initial={shouldReduce ? undefined : 'hidden'}
            animate={shouldReduce ? undefined : 'visible'}
          >
            {HEADLINE_LINES.map((line) => (
              <motion.span
                key={line}
                className="block"
                variants={shouldReduce ? undefined : headlineLine}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div className="mt-4 md:mt-6 flex items-center gap-3" {...fp(0.42)}>
            <span className="inline-block h-px w-10 bg-foreground" aria-hidden="true" />
            <span className="font-body text-md tracking-widest uppercase">Omar Adel</span>
          </motion.div>

          <motion.p
            className="mt-2 font-body text-[clamp(0.95rem,1vw,1.125rem)] text-muted-fg leading-relaxed max-w-hero-copy"
            {...fp(0.52)}
          >
            Senior Frontend Engineer building scalable, maintainable frontend systems with React,
            Next.js, Vue, and TypeScript.
          </motion.p>

          <motion.div className="md:hidden mt-5" {...fi(0.62)}>
            <div className="h-px bg-border mb-4" role="separator" />
            <div className="flex flex-col gap-4 mb-4">
              {/* Metadata: focus + status */}
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-fg mb-1">
                  Focus
                </p>
                <p className="font-body text-xs leading-snug">
                  Building products that create real impact.
                </p>
              </div>
              <div className="h-px bg-border" role="separator" />
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-fg mb-1">
                  Status
                </p>
                <p className="font-body text-xs leading-snug">Open to senior frontend roles</p>
              </div>
            </div>
            <div className="h-px bg-border mb-3" role="separator" />
            <div className="flex flex-col gap-1">
              <nav aria-label="Social links">
                {socialLinks.map((link, i) => (
                  <div key={link.label}>
                    {i !== 0 && <div className="h-px bg-border" role="separator" />}
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="flex items-center gap-2 py-2.5 font-body text-xs tracking-widest uppercase hover:opacity-60 transition-opacity duration-200"
                    >
                      <span className="text-muted-fg" aria-hidden="true">
                        /
                      </span>
                      <span className="flex-1">{link.label}</span>
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>

        <motion.aside
          aria-label="Profile metadata"
          className="hidden md:flex flex-col"
          {...fi(0.62)}
        >
          <div className="mb-5">
            <p className="font-body text-xs tracking-widest uppercase text-muted-fg mb-2">Focus</p>
            <p className="font-body text-sm leading-snug">
              Building products
              <br />
              that create real impact.
            </p>
          </div>

          <div className="h-px bg-border mb-5" role="separator" />

          <div className="mb-5">
            <p className="font-body text-xs tracking-widest uppercase text-muted-fg mb-2">Status</p>
            <p className="font-body text-sm leading-snug">
              Open to senior
              <br />
              frontend roles
            </p>
          </div>

          <div className="h-px bg-border" role="separator" />

          <nav aria-label="Social links">
            {socialLinks.map((link, i) => (
              <div key={link.label}>
                {i !== 0 && <div className="h-px bg-border" role="separator" />}
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 py-2.5 font-body text-xs tracking-widest uppercase hover:opacity-60 transition-opacity duration-200"
                >
                  <span className="text-muted-fg" aria-hidden="true">
                    /
                  </span>
                  <span className="flex-1">{link.label}</span>
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </div>
            ))}
          </nav>
        </motion.aside>
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-360 items-center gap-4 px-5 py-6 sm:px-10 sm:py-8 lg:px-16 xl:px-20"
        {...fi(0.95)}
      >
        <div
          className="flex items-center gap-3 shrink-0 cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.span
            className="font-body text-xs leading-none"
            aria-hidden="true"
            animate={shouldReduce ? undefined : { y: [0, 4, 0] }}
            transition={
              shouldReduce
                ? undefined
                : {
                    duration: 1.6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                  }
            }
          >
            <ArrowDown size={16} />
          </motion.span>
          <span className="font-body text-xs tracking-widest uppercase">Scroll to explore</span>
        </div>
        <div className="flex-1 h-px bg-border" role="separator" />
      </motion.div>
    </section>
  );
}
