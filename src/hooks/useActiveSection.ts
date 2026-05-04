'use client';

import { useEffect, useState } from 'react';

// All section IDs in page order; missing ones are silently skipped.
const SECTION_IDS = ['hero', 'about', 'experience', 'stack', 'contact'] as const;

/**
 * Returns the ID of the section currently visible in the active viewport zone.
 */
export function useActiveSection(): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // The active zone is 20%-50% from the top of the viewport.
      { rootMargin: '-20% 0px -50% 0px', threshold: 0 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}
