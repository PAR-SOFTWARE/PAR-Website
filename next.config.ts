import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strip trailing slashes for canonical consistency
  trailingSlash: false,

  // Security + SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // 301 redirects for any old/changed URLs
  async redirects() {
    return [
      // Example: redirect www to non-www (Vercel handles this,
      // but add any page-level redirects here)
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
