'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Pt = [number, number];
type Seg = [Pt, Pt, Pt, Pt];

const CONFETTI_COLOURS = ['var(--accent)', '#ffffff', '#6a9a9d', 'var(--accent)'];
const confetti = Array.from({ length: 22 }, (_, i) => {
  const angle = ((-160 + i * (140 / 21)) * Math.PI) / 180;
  const dist = 70 + ((i * 37) % 60);
  return {
    '--dx': `${Math.round(Math.cos(angle) * dist)}px`,
    '--dy': `${Math.round(Math.sin(angle) * dist - 20)}px`,
    '--r': `${((i * 97) % 540) - 270}deg`,
    animationDelay: `${(i % 5) * 30}ms`,
    width: 4 + (i % 3) * 2,
    background: CONFETTI_COLOURS[i % 4],
  } as CSSProperties;
});

/**
 * Wraps the work rows with a golf ball that rolls down a trail as the page
 * scrolls and drops into a hole below the last project.
 */
const GolfTrail = ({ children }: { children: ReactNode }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const dimplesRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let geo: { pts: [number, number, number][]; L: number; startY: number; holeY: number; size: number } | null =
      null;
    let isDone = false;
    let raf = 0;
    let needsLayout = true;

    const layout = () => {
      const r = wrap.getBoundingClientRect();
      const W = r.width;
      const arts = wrap.querySelectorAll('article');
      const hole = wrap.querySelector('.golf-hole');
      if (!arts.length || !hole || !W) return;

      const rows = Array.from(arts, (a) => {
        const ar = a.getBoundingClientRect();
        return { t: ar.top - r.top, b: ar.bottom - r.top, pad: parseFloat(getComputedStyle(a).paddingBottom) || 0 };
      });
      const hr = hole.getBoundingClientRect();
      const hx = hr.left - r.left + hr.width / 2;
      const hy = hr.top - r.top + hr.height / 2;
      const vw = document.documentElement.clientWidth || window.innerWidth;
      const avail = Math.max(0, vw - r.right);
      const stacked = window.matchMedia('(max-width: 820px)').matches;
      const segs: Seg[] = [];
      let size = 26;

      if (stacked) {
        // Rows are stacked: run down the right-hand gutter and swoop into the gap between projects.
        size = Math.max(12, Math.min(18, avail - 4));
        const rx = W + avail / 2;
        const sx = W * 0.15;
        let cur: Pt = [rx, rows[0].t + 6];
        rows.forEach((row, i) => {
          const k = Math.max(12, row.pad - 14);
          const end: Pt = [rx, row.b - k];
          const third = (end[1] - cur[1]) / 3;
          segs.push([cur, [rx, cur[1] + third], [rx, end[1] - third], end]);
          cur = end;
          if (i < rows.length - 1) {
            const next: Pt = [rx, row.b + k];
            segs.push([cur, [sx, row.b - k], [sx, row.b + k], next]);
            cur = next;
          }
        });
        segs.push([cur, [rx, cur[1] + 70], [hx + W * 0.34, hy + 34], [hx, hy]]);
      } else {
        // Two columns: roll down the column gutter, out round the right edge, and back in.
        const gx = ((W - 56) * 5) / 12 + 28;
        const rx = W + Math.max(0, Math.min(30, avail - 24));
        const R1 = rows[0];
        const R2 = rows[1] || rows[0];
        const R3 = rows[rows.length - 1];
        const h1 = R1.b - R1.t;
        const h2 = R2.b - R2.t;
        const h3 = R3.b - R3.t;
        const s0: Pt = [gx, R1.t - 40];
        const e1: Pt = [gx, R1.b - 40];
        segs.push([s0, [gx + 14, R1.t + h1 * 0.3], [gx - 14, R1.t + h1 * 0.7], e1]);
        const e2: Pt = [rx, R2.t + h2 * 0.3];
        segs.push([e1, [gx, R1.b + 30], [rx, R2.t - 10], e2]);
        const e3: Pt = [rx, R2.b - h2 * 0.3];
        segs.push([e2, [rx + 8, R2.t + h2 * 0.45], [rx + 8, R2.t + h2 * 0.55], e3]);
        const e4: Pt = [gx, R3.t + h3 * 0.18];
        segs.push([e3, [rx, R2.b + 50], [gx + 150, R3.t - 30], e4]);
        const e5: Pt = [gx, R3.b - 30];
        segs.push([e4, [gx - 70, R3.t + h3 * 0.18 + 60], [gx + 12, R3.b - h3 * 0.3], e5]);
        segs.push([e5, [gx - 6, R3.b + 110], [hx - W * 0.22, hy + 70], [hx, hy]]);
      }

      const start = segs[0][0];
      const pts: [number, number, number][] = [[start[0], start[1], 0]];
      let L = 0;
      let d = `M${start[0].toFixed(1)} ${start[1].toFixed(1)}`;
      for (const S of segs) {
        d += ' C' + [S[1], S[2], S[3]].map((q) => `${q[0].toFixed(1)} ${q[1].toFixed(1)}`).join(' ');
        for (let n = 1; n <= 48; n++) {
          const u = n / 48;
          const v = 1 - u;
          const x = v * v * v * S[0][0] + 3 * v * v * u * S[1][0] + 3 * v * u * u * S[2][0] + u * u * u * S[3][0];
          const y = v * v * v * S[0][1] + 3 * v * v * u * S[1][1] + 3 * v * u * u * S[2][1] + u * u * u * S[3][1];
          const last = pts[pts.length - 1];
          L += Math.hypot(x - last[0], y - last[1]);
          pts.push([x, y, L]);
        }
      }

      geo = { pts, L, startY: start[1], holeY: hy, size };
      svgRef.current?.setAttribute('width', String(W));
      svgRef.current?.setAttribute('height', String(r.height));
      baseRef.current?.setAttribute('d', d);
      trailRef.current?.setAttribute('d', d);
      trailRef.current?.setAttribute('stroke-dasharray', `${L.toFixed(1)} ${L.toFixed(1)}`);
      wrap.style.setProperty('--ball', `${size}px`);
      setReady(true);
    };

    const update = () => {
      if (!geo) return;
      const { pts, L, startY, holeY, size } = geo;
      const top = wrap.getBoundingClientRect().top;
      const vh = window.innerHeight || 800;
      const prog = (vh * 0.55 - top - startY) / (holeY - startY);
      const target = Math.max(0, Math.min(1, prog)) * L;
      let lo = 0;
      let hi = pts.length - 1;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (pts[mid][2] < target) lo = mid;
        else hi = mid;
      }
      const A = pts[lo];
      const B = pts[hi];
      const f = B[2] > A[2] ? (target - A[2]) / (B[2] - A[2]) : 0;
      const bx = A[0] + (B[0] - A[0]) * f - size / 2;
      const by = A[1] + (B[1] - A[1]) * f - size / 2;
      if (ballRef.current) ballRef.current.style.transform = `translate(${bx.toFixed(1)}px, ${by.toFixed(1)}px)`;
      if (dimplesRef.current) dimplesRef.current.style.transform = `rotate(${Math.round(target * 2.8)}deg)`;
      trailRef.current?.setAttribute('stroke-dashoffset', (L - target).toFixed(1));
      const nextDone = isDone ? prog > 0.97 : prog >= 1;
      if (nextDone !== isDone) {
        isDone = nextDone;
        setDone(nextDone);
      }
    };

    const frame = () => {
      raf = 0;
      if (needsLayout) {
        needsLayout = false;
        layout();
      }
      update();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onResize = () => {
      needsLayout = true;
      onScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(wrap);
    onResize();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`golf-wrap${ready ? ' is-ready' : ''}${done ? ' is-done' : ''}`}>
      <svg ref={svgRef} className="golf-trail" aria-hidden="true" width="0" height="0">
        <path
          ref={baseRef}
          fill="none"
          stroke="rgba(190,252,174,.22)"
          strokeWidth="1.5"
          strokeDasharray="2 9"
          strokeLinecap="round"
        />
        <path
          ref={trailRef}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity=".55"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div ref={ballRef} className="golf-ball" aria-hidden="true">
        <div className="golf-ball-body">
          <div ref={dimplesRef} className="golf-ball-dimples" />
          <div className="golf-ball-shine" />
        </div>
      </div>

      {children}

      <div className="golf-green">
        <div className="golf-green-art" aria-hidden="true">
          <div className="golf-glow" />
          <div className="golf-pin" />
          <svg className="golf-flag" width="40" height="26" viewBox="0 0 40 26">
            <path d="M0 0 L40 9 L0 22 Z" fill="var(--accent)" />
          </svg>
          <div className="golf-hole" />
          {done && (
            <>
              <div className="golf-ring" />
              <div className="golf-confetti">
                {confetti.map((style, i) => (
                  <span key={i} style={style} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="golf-sunk">
          <p className="golf-sunk-kicker">Sunk it</p>
          <p className="golf-sunk-title">Your project could be next.</p>
          <a href="#contact">Start a project →</a>
        </div>
      </div>
    </div>
  );
};

export default GolfTrail;
