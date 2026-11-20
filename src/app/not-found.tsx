import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Out of bounds',
  robots: { index: false },
};

// Grass tufts in the rough: [x, height, lean]
const tufts: [number, number, number][] = [
  [548, 14, -3], [566, 10, 2], [584, 17, -1], [603, 12, 3], [641, 15, -2], [658, 11, 2],
  [676, 18, -3], [694, 12, 1], [713, 16, -2], [731, 10, 3], [750, 15, -1], [770, 12, 2], [788, 16, -2],
];
const tuftPath = ([x, h, l]: [number, number, number]) =>
  `M${x - 5} 230 Q${x - 4 + l} ${230 - h * 0.6} ${x - 2 + l} ${230 - h} M${x} 230 Q${x + l} ${230 - h * 0.7} ${x + l * 1.5} ${230 - h * 1.15} M${x + 5} 230 Q${x + 4 + l} ${230 - h * 0.6} ${x + 3 + l} ${230 - h * 0.9}`;
const front: [number, number, number][] = [
  [612, 13, -2], [630, 11, 2],
];

const NotFound = () => (
  <>
    <Navigation />
    <main className="ob wrap">
      <div className="ob-scene" aria-hidden="true">
        <svg viewBox="0 0 800 260" className="ob-back">
          <path className="ob-ground" d="M0 230 H800" />
          <path className="ob-flight-ghost" d="M40 228 C 200 -40, 500 -30, 621 219" />
          <path className="ob-flight" d="M40 228 C 200 -40, 500 -30, 621 219" pathLength={1} />
          <circle cx="40" cy="228" r="3" className="ob-tee" />
          <g className="ob-stakes">
            <rect x="470" y="190" width="5" height="40" rx="1" />
            <rect x="512" y="196" width="5" height="34" rx="1" />
          </g>
          <text x="493" y="252" textAnchor="middle" className="ob-label">
            Out of bounds
          </text>
          <g className="ob-grass">
            {tufts.map((t) => (
              <path key={t[0]} d={tuftPath(t)} />
            ))}
          </g>
        </svg>
        <div className="ob-ball">
          <div className="golf-ball-body">
            <div className="golf-ball-dimples" />
            <div className="golf-ball-shine" />
          </div>
        </div>
        <svg viewBox="0 0 800 260" className="ob-front">
          <g className="ob-grass">
            {front.map((t) => (
              <path key={t[0]} d={tuftPath(t)} />
            ))}
          </g>
        </svg>
      </div>

      <div className="ob-copy">
        <p className="eyebrow accent">404 · Out of bounds</p>
        <h1 className="h-section">This page is out of bounds.</h1>
        <p>The link you followed went wide. Take a drop and play on from the homepage.</p>
        <div className="hero-actions">
          <Link href="/" className="btn">
            Take a drop
          </Link>
          <Link href="/#work" className="btn ghost">
            See our work
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default NotFound;
