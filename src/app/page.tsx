import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Services from '@/components/Services';
import Studio from '@/components/Studio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PAR SOFTWARE – AI Automation & Software Development South Africa',
  description:
    'PAR SOFTWARE specialises in AI automation, custom software, web development, and mobile apps for South African businesses. Get a free quote today.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Work />
        <Services />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
