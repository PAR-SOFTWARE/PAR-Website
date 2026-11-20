const inputs = [
  { y: 74, label: 'your brief' },
  { y: 194, label: 'spreadsheets' },
  { y: 334, label: 'legacy system' },
  { y: 454, label: 'manual process' },
];

const outputs = [
  { y: 134, label: 'web platform', delay: '' },
  { y: 264, label: 'mobile app', delay: 'd2' },
  { y: 394, label: 'AI automation', delay: 'd3' },
];

const paths = [
  { d: 'M124 90 H210 Q230 90 230 110 V260 Q230 280 250 280 H260', delay: '' },
  { d: 'M124 210 H170 Q190 210 190 230 V260 Q190 280 210 280 H260', delay: 'd1' },
  { d: 'M124 350 H170 Q190 350 190 330 V300 Q190 280 210 280 H260', delay: 'd2' },
  { d: 'M124 470 H210 Q230 470 230 450 V300 Q230 280 250 280 H260', delay: 'd3' },
  { d: 'M340 280 H370 Q390 280 390 260 V170 Q390 150 410 150 H436', delay: 'd1' },
  { d: 'M340 280 H436', delay: 'd2' },
  { d: 'M340 280 H370 Q390 280 390 300 V390 Q390 410 410 410 H436', delay: 'd3' },
];

const Hero = () => (
  <section id="top" className="wrap hero">
    <div className="hero-row">
      <div className="hero-copy">
        <h1 className="h-hero">
          We build the software your business runs on.
        </h1>
        <p className="hero-lede">
          Web platforms, mobile apps, custom systems and AI automation for South African businesses. You
          deal directly with the two engineers who build it, from first call to launch.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn">
            Start a project
          </a>
          <a href="#work" className="btn ghost">
            See our work
          </a>
        </div>
      </div>

      <div className="hero-art">
        <svg
          role="img"
          aria-label="Animation: a brief, spreadsheets, a legacy system and manual processes flow into Par Software and come out as a web platform, a mobile app and an AI automation"
          viewBox="0 0 560 560"
        >
          <g fill="none" stroke="rgba(190,252,174,.16)" strokeWidth="1.5">
            {paths.map((p) => (
              <path key={p.d} d={p.d} />
            ))}
          </g>
          <g fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round">
            {paths.map((p) => (
              <path key={p.d} className={`flow ${p.delay}`} pathLength={100} d={p.d} />
            ))}
          </g>
          <g>
            {inputs.map((n) => (
              <g key={n.label}>
                <rect x="0" y={n.y} width="124" height="32" rx="6" fill="#0f2224" stroke="rgba(190,252,174,.2)" />
                <text x="14" y={n.y + 20} fill="#a6c4c6">
                  {n.label}
                </text>
              </g>
            ))}
            {outputs.map((n) => (
              <g key={n.label}>
                <rect x="436" y={n.y} width="124" height="32" rx="6" fill="#0f2224" stroke="rgba(190,252,174,.4)" />
                <circle className={`dot ${n.delay}`} cx="452" cy={n.y + 16} r="4" fill="var(--accent)" />
                <text x="464" y={n.y + 20} fill="#ffffff">
                  {n.label}
                </text>
              </g>
            ))}
          </g>
          <circle className="pulse" cx="300" cy="280" r="40" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          <circle cx="300" cy="280" r="40" fill="#0b1718" stroke="rgba(190,252,174,.4)" strokeWidth="1.5" />
          <circle cx="300" cy="280" r="26" fill="var(--accent)" />
          <text x="300" y="285" textAnchor="middle" style={{ fontSize: 13, fontWeight: 500 }} fill="#275559">
            PAR
          </text>
        </svg>
      </div>
    </div>
  </section>
);

export default Hero;
