'use client';

const clients = [
  { name: 'Clearpath Legal', url: 'https://clearpath-legal.vercel.app' },
  { name: 'Harrow & Sons Joinery', url: 'https://harrow-and-sons-joinery.vercel.app' },
  { name: 'Ironclad Gym', url: 'https://ironclad-gym.vercel.app' },
  { name: 'Kestrel Co', url: 'https://kestrel-co.vercel.app' },
  { name: 'Lumis Dental', url: 'https://lumis-dental.vercel.app' },
  { name: 'Nimble Kids', url: 'https://nimble-kids.vercel.app' },
  { name: 'Tidewater Brewing', url: 'https://tidewater-brewing.vercel.app' },
  { name: 'Veldfire Studio', url: 'https://veldfire-studio.vercel.app' },
  { name: 'Wavelink IT', url: 'https://wavelink-it.vercel.app' },
  { name: 'Wolfram Studio', url: 'https://wolfram-studio.vercel.app' },
];

const Dot = () => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: 3,
      height: 3,
      borderRadius: '50%',
      backgroundColor: 'rgba(172,254,165,0.5)',
      flexShrink: 0,
    }}
  />
);

const ClientBanner = () => {
  const items = [...clients, ...clients];

  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div
        className="client-ticker"
        style={{ display: 'flex', alignItems: 'center', gap: 28, whiteSpace: 'nowrap' }}
      >
        {items.map((c, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, flexShrink: 0 }}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'rgba(172,254,165,0.65)',
                transition: 'color 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ACFEA5')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(172,254,165,0.65)')}
            >
              {c.name}
            </a>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClientBanner;
