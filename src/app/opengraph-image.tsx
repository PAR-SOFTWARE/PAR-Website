import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PAR SOFTWARE – AI Automation & Software Development South Africa';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
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
            color: '#9A9A96',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          South Africa · AI Automation
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#0D0D0C',
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
            color: '#5C5C58',
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
              background: '#0D0D0C',
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 18,
              color: '#9A9A96',
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
