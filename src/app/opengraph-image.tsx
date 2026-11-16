import { ImageResponse } from 'next/og';

export const alt = 'PAR SOFTWARE – AI Automation & Software Development South Africa';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b1718',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top label */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: '#6a9a9d',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Software studio · South Africa
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          PAR SOFTWARE
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: '#d8e6e6',
            lineHeight: 1.5,
            maxWidth: 700,
            marginBottom: 56,
          }}
        >
          AI Automation · Custom Software · Web &amp; Mobile Development
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 4,
              background: '#befcae',
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 18,
              color: '#6a9a9d',
            }}
          >
            parsoftware.co.za
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
