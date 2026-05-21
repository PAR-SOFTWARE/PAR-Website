'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HeroLogoMark from './HeroLogoMark';
import ClientBanner from './ClientBanner';

const ease = [0.16, 1, 0.3, 1] as const;

const Hero = () => (
  <section
    id="home"
    className="min-h-[100dvh] flex flex-col justify-between pt-16"
    style={{ backgroundColor: 'var(--teal-600)' }}
  >
    <div className="flex-1 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-medium uppercase mb-8"
              style={{ color: 'var(--mint-300)', letterSpacing: '0.06em', fontWeight: 500 }}
            >
              South African Software Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                color: '#ffffff',
              }}
            >
              We build software<br />
              that moves{' '}
              <span style={{ color: 'var(--mint-300)' }}>businesses<br />forward.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-base mb-12 max-w-md"
              style={{ color: 'var(--teal-200)', lineHeight: 1.7, fontWeight: 400 }}
            >
              PAR SOFTWARE specializes in AI automation, web development, and custom
              software solutions for South African companies ready to grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition-all duration-200 active:scale-[0.97]"
                style={{
                  backgroundColor: 'var(--mint-300)',
                  color: 'var(--teal-800)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 500,
                }}
              >
                Start a project
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm transition-all duration-200 active:scale-[0.97]"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 500,
                }}
              >
                Our services
              </button>
            </motion.div>
          </div>

          {/* Right — logo mark with animated rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroLogoMark />
          </motion.div>

        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 grid grid-cols-3 gap-8 max-w-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
        >
          {[
            { number: '50+', label: 'Projects delivered' },
            { number: '4+', label: 'Years building' },
            { number: '2hr', label: 'Response time' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl mb-1" style={{ color: '#ffffff', fontWeight: 500 }}>
                {stat.number}
              </div>
              <div
                className="text-xs"
                style={{ color: 'var(--teal-200)', fontWeight: 400, lineHeight: 1.4 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center pb-6"
      >
        <motion.button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'rgba(255,255,255,0.35)' }}
          aria-label="Scroll down"
        >
          <ChevronDown size={22} />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ClientBanner />
      </motion.div>
    </div>

  </section>
);

export default Hero;
