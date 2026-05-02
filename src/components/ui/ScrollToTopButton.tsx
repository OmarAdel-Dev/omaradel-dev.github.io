'use client';

import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-1.5 text-panel-fg/60 hover:text-panel-fg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-panel-fg rounded-sm"
      aria-label="Scroll to top"
    >
      <span className="font-body text-[0.7rem] tracking-[0.1em] uppercase">Top</span>
      <ArrowUp size={12} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
