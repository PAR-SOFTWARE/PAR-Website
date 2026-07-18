'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUp, Globe, Code } from 'lucide-react';

const socialLinks = [
  { icon: Code, href: '#', label: 'GitHub' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Mail, href: 'mailto:ruben@parsoftware.co.za', label: 'Email' },
];

type FooterLink = { name: string; href: string };
type FooterLinks = { [section: string]: FooterLink[] };

const footerLinks: FooterLinks = {
  Company: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ],
  Services: [
    { name: 'AI Automation', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Custom Software', href: '#services' },
  ],
  Contact: [
    { name: 'ruben@parsoftware.co.za', href: 'mailto:ruben@parsoftware.co.za' },
    { name: 'erik@parsoftware.co.za', href: 'mailto:erik@parsoftware.co.za' },
    { name: 'South Africa', href: '#' },
  ],
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ backgroundColor: 'var(--teal-900)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo-trans.png" alt="PAR SOFTWARE" className="h-10 w-10 object-contain mb-6" />
            <p
              className="text-sm mb-8 max-w-xs"
              style={{ color: 'var(--teal-200)', lineHeight: 1.7, fontWeight: 400 }}
            >
              Building intelligent software for South African businesses.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                  style={{
                    color: 'var(--teal-200)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, items]: [string, FooterLink[]]) => (
            <div key={title}>
              <p
                className="text-xs uppercase mb-5"
                style={{ color: 'var(--mint-300)', letterSpacing: '0.06em', fontWeight: 500 }}
              >
                {title}
              </p>
              <ul className="space-y-2.5">
                {items.map((link: FooterLink) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--teal-200)', fontWeight: 400 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'var(--teal-200)', fontWeight: 400 }}>
            &copy; {new Date().getFullYear()} PAR SOFTWARE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs" style={{ color: 'var(--teal-200)', fontWeight: 400 }}>
              Privacy Policy
            </a>
            <a href="/support/cps" className="text-xs" style={{ color: 'var(--teal-200)', fontWeight: 400 }}>
              CPS Support
            </a>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-6 right-6 w-10 h-10 flex items-center justify-center shadow-lg"
        style={{
          backgroundColor: 'var(--mint-300)',
          color: 'var(--teal-800)',
          borderRadius: 'var(--radius-md)',
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={17} />
      </motion.button>
    </footer>
  );
};

export default Footer;
