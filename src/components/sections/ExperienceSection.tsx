'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SectionRail from '@/components/layout/SectionRail';
import SectionShell from '@/components/layout/SectionShell';
import MotionReveal from '@/components/motion/MotionReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { experienceContent, type ExperienceRole } from '@/data/experience';
import { cn } from '@/lib/cn';

// ─── Tab row ───────────────────────────────────────────────────────────────

interface TabRowProps {
  roles: ExperienceRole[];
  activeIndex: number;
  onChange: (index: number) => void;
}

function TabRow({ roles, activeIndex, onChange }: TabRowProps) {
  function handleKeyDown(e: React.KeyboardEvent, i: number) {
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = (i + 1) % roles.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + roles.length) % roles.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = roles.length - 1;

    if (next !== null) {
      e.preventDefault();
      onChange(next);
      document.getElementById(`exp-tab-${next}`)?.focus();
    }
  }

  return (
    <div
      role="tablist"
      aria-label="Experience roles"
      className="flex flex-1 overflow-x-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      {roles.map((role, i) => (
        <button
          key={role.tabLabel}
          role="tab"
          id={`exp-tab-${i}`}
          aria-selected={i === activeIndex}
          aria-controls={`exp-panel-${i}`}
          tabIndex={i === activeIndex ? 0 : -1}
          onClick={() => onChange(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={cn(
            'relative shrink-0 pb-3 pr-6 text-left font-body text-[0.75rem] tracking-[0.14em] uppercase transition-colors duration-150 last:pr-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:pr-8 sm:text-[0.78rem]',
            i === activeIndex
              ? 'font-bold text-foreground'
              : 'font-normal text-muted-fg hover:text-foreground',
          )}
        >
          <span className="sm:hidden">{role.mobileLabel}</span>
          <span className="hidden sm:inline">{role.tabLabel}</span>

          {i === activeIndex && (
            <span
              className="absolute bottom-0 left-0 h-0.5 w-full bg-foreground"
              aria-hidden="true"
            />
          )}
        </button>
      ))}
    </div>
  );
}

// ─── Prev / Next arrow button ────────────────────────────────────────────────

interface NavArrowProps {
  direction: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}

function NavArrow({ direction, disabled, onClick }: NavArrowProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous role' : 'Next role'}
      className={cn(
        'shrink-0 pb-3 font-body text-[0.8rem] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground',
        disabled
          ? 'cursor-default text-muted-fg opacity-25'
          : 'text-muted-fg hover:text-foreground',
      )}
    >
      {direction === 'prev' ? (
        <ArrowLeft size={14} strokeWidth={1.5} />
      ) : (
        <ArrowRight size={14} strokeWidth={1.5} />
      )}
    </button>
  );
}

// ─── Role panel ────────────────────────────────────────────────────────────

interface RolePanelProps {
  role: ExperienceRole;
  panelIndex: number;
}

function RolePanel({ role, panelIndex }: RolePanelProps) {
  return (
    <div id={`exp-panel-${panelIndex}`} role="tabpanel" aria-labelledby={`exp-tab-${panelIndex}`}>
      {/* Date range */}
      <p className="mt-8 font-body text-[0.72rem] tracking-[0.15em] text-muted-fg uppercase lg:mt-10">
        <time dateTime={role.startDate}>{role.start}</time>
        <span aria-hidden="true"> — </span>
        {role.endDate ? <time dateTime={role.endDate}>{role.end}</time> : role.end}
      </p>

      {/* Role title */}
      <h3
        className="mt-2 font-display font-black uppercase leading-[0.93] text-foreground"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 4.6rem)' }}
      >
        {role.title}
      </h3>

      {/* Company */}
      <p className="mt-3 font-body text-[0.85rem] font-bold tracking-[0.07em] text-foreground uppercase md:text-[0.9rem]">
        {role.company}
      </p>

      {/* Summary */}
      <p className="mt-5 max-w-[66ch] font-body text-[0.88rem] leading-relaxed text-foreground md:text-[0.93rem]">
        {role.summary}
      </p>

      {/* Selected contributions */}
      <div className="mt-8 border-t border-border pt-6 lg:mt-10 lg:pt-7">
        <p className="font-body text-[0.68rem] font-bold tracking-[0.2em] text-muted-fg uppercase">
          Selected Contributions
        </p>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
          {role.contributions.slice(0, 2).map((contribution, i) => (
            <div
              key={contribution.title}
              className={cn(
                'py-6',
                i > 0 && 'border-t border-border md:border-t-0',
                i === 0 && 'md:pr-10 lg:pr-14',
                i === 1 && 'md:pl-10 lg:pl-14',
              )}
            >
              <div className="flex items-baseline gap-2">
                <span
                  className="shrink-0 font-body text-[0.68rem] tabular-nums text-muted-fg"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-[0.68rem] text-muted-fg" aria-hidden="true">
                  —
                </span>
                <h4 className="font-body text-[0.85rem] font-bold uppercase leading-snug tracking-[0.04em] text-foreground">
                  {contribution.title}
                </h4>
              </div>
              <p className="mt-2 font-body text-[0.82rem] leading-relaxed text-foreground md:text-[0.85rem]">
                {contribution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduce = useReducedMotion();
  const total = experienceContent.roles.length;

  function goPrev() {
    setActiveIndex((i) => Math.max(0, i - 1));
  }
  function goNext() {
    setActiveIndex((i) => Math.min(total - 1, i + 1));
  }

  const panelVariants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      y: shouldReduce ? 0 : -6,
      transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] as const },
    },
  };

  return (
    <SectionShell id="experience" className="py-0">
      <div className="grid min-h-svh gap-x-10 gap-y-8 md:grid-cols-[172px_minmax(0,1fr)] md:gap-x-12 lg:grid-cols-[196px_minmax(0,1fr)] lg:gap-x-16 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-x-20">
        {/* Section rail */}
        <SectionRail
          number={experienceContent.railNumber}
          label={experienceContent.eyebrow}
          className="mt-14"
        />

        {/* Main content */}
        <div className="flex flex-col justify-start pt-2 mt-14">
          {/* Tab row + desktop prev/next */}
          <MotionReveal delay={0.08}>
            <div className="flex items-end border-b border-border">
              <TabRow
                roles={experienceContent.roles}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
              />
              {/* Desktop-only prev/next arrows */}
              <div className="ml-auto hidden shrink-0 items-center gap-5 pl-6 md:flex">
                <NavArrow direction="prev" disabled={activeIndex === 0} onClick={goPrev} />
                <NavArrow direction="next" disabled={activeIndex === total - 1} onClick={goNext} />
              </div>
            </div>
          </MotionReveal>

          {/* Active role panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <RolePanel role={experienceContent.roles[activeIndex]} panelIndex={activeIndex} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionShell>
  );
}
