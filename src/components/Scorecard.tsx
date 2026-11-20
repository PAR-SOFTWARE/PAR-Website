'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * The services table. Each row gets "scored" in pencil as it scrolls into view:
 * a hand-drawn circle around its number, and an underline on the total.
 */
const Scorecard = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const rows = Array.from(card.querySelectorAll<HTMLElement>('.sc-row:not(.sc-head)'));
    if (!('IntersectionObserver' in window)) {
      rows.forEach((r) => r.classList.add('is-scored'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        // Rows that arrive together are pencilled in one after another.
        let k = 0;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const row = e.target as HTMLElement;
          row.style.setProperty('--score-delay', `${k++ * 160}ms`);
          row.classList.add('is-scored');
          io.unobserve(row);
        });
      },
      { rootMargin: '0px 0px -18% 0px' },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} role="table" aria-label="Services" className="scorecard">
      {children}
    </div>
  );
};

export default Scorecard;
