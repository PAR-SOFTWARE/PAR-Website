'use client';

import { motion } from 'framer-motion';

const pulseRings = [
  { delay: 0 },
  { delay: 1.1 },
  { delay: 2.2 },
];

const HeroLogoMark = () => (
  <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>

    {/* Sonar pulse rings */}
    {pulseRings.map((ring, i) => (
      <motion.span
        key={i}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ border: '1px solid #ACFEA5' }}
        animate={{ scale: [1, 2.1], opacity: [0.45, 0] }}
        transition={{
          duration: 3.3,
          delay: ring.delay,
          repeat: Infinity,
          ease: 'easeOut',
          repeatDelay: 0,
        }}
      />
    ))}

    {/* Slow rotating dashed ring - just outside logo */}
    <motion.span
      className="absolute rounded-full pointer-events-none"
      style={{
        inset: -18,
        border: '1px dashed rgba(172,254,165,0.28)',
        borderRadius: '9999px',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
    />

    {/* Reverse-rotating dotted ring - wider */}
    <motion.span
      className="absolute rounded-full pointer-events-none"
      style={{
        inset: -44,
        border: '1px dotted rgba(172,254,165,0.14)',
        borderRadius: '9999px',
      }}
      animate={{ rotate: -360 }}
      transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
    />

    {/* Logo */}
    <img
      src="/logo-trans.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      className="relative z-10 select-none"
      style={{
        width: 288,
        height: 288,
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 40px rgba(172,254,165,0.18))',
      }}
    />
  </div>
);

export default HeroLogoMark;
