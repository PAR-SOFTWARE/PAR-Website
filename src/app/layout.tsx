import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

const BASE_URL = 'https://parsoftware.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'PAR SOFTWARE – AI Automation & Software Development South Africa',
    template: '%s | PAR SOFTWARE',
  },
  description:
    'PAR SOFTWARE is a South African tech company specialising in AI automation, custom software development, web development, and mobile apps. Based in South Africa, serving businesses across Africa.',
  keywords: [
    'AI Automation South Africa',
    'Software Development South Africa',
    'Web Development South Africa',
    'Mobile App Development South Africa',
    'Custom Software South Africa',
    'Business Automation',
    'PAR SOFTWARE',
  ],
  authors: [{ name: 'PAR SOFTWARE', url: BASE_URL }],
  creator: 'PAR SOFTWARE',
  publisher: 'PAR SOFTWARE',

  // Canonical
  alternates: {
    canonical: '/',
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: BASE_URL,
    siteName: 'PAR SOFTWARE',
    title: 'PAR SOFTWARE – AI Automation & Software Development South Africa',
    description:
      'South African tech company specialising in AI automation, custom software, web development, and mobile apps. Transforming African businesses with intelligent solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PAR SOFTWARE – AI Automation & Software Development South Africa',
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'PAR SOFTWARE – AI Automation & Software Development South Africa',
    description:
      'South African tech company specialising in AI automation, custom software, web development, and mobile apps.',
    images: ['/og-image.png'],
    creator: '@parsoftware',
  },

  // Favicon / icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  // Google Search Console verification
  // Replace the content value with your actual verification code from Search Console
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  // },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// LocalBusiness JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BASE_URL,
  name: 'PAR SOFTWARE',
  description:
    'South African tech company specialising in AI automation, custom software development, web development, and mobile apps.',
  url: BASE_URL,
  telephone: '',
  email: 'ruben@parsoftware.co.za',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
    addressRegion: 'South Africa',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -29.0,
    longitude: 25.0,
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: 'R15,000 – R60,000+',
  currenciesAccepted: 'ZAR',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software & AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security & Compliance' } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
