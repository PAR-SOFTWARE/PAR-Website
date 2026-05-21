'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: 'var(--teal-600)',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex-shrink-0">
            <img src="/logo-trans.png" alt="PAR SOFTWARE" className="h-9 w-9 object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 text-sm transition-all duration-200 active:scale-[0.97]"
              style={{
                backgroundColor: 'var(--mint-300)',
                color: 'var(--teal-800)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 500,
              }}
            >
              Get started
            </a>
          </div>

          <button
            className="md:hidden transition-opacity duration-200"
            style={{ color: 'rgba(255,255,255,0.85)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'var(--teal-800)' }}
          >
            <div className="px-4 py-5 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2.5 text-sm"
                  style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contact"
                  className="block w-full text-center py-2.5 text-sm"
                  style={{
                    backgroundColor: 'var(--mint-300)',
                    color: 'var(--teal-800)',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 500,
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
