'use client';

import { motion } from 'framer-motion';
import { Zap, Award, Users } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { number: '4+', label: 'Years experience' },
  { number: '20+', label: 'Happy clients' },
  { number: '50+', label: 'Projects delivered' },
  { number: '99.9%', label: 'Uptime' },
];

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We push boundaries to deliver solutions that give clients a real competitive edge.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Every project is crafted with attention to detail and a commitment to exceptional quality.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients to understand their needs and bring their vision to life.',
  },
];

const About = () => (
  <section id="about" className="py-24" style={{ backgroundColor: 'var(--gray-50)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="mb-16"
      >
        <p
          className="text-xs font-medium uppercase mb-4"
          style={{ color: 'var(--teal-600)', letterSpacing: '0.06em', fontWeight: 500 }}
        >
          About
        </p>
        <h2
          className="max-w-lg"
          style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, color: 'var(--gray-900)' }}
        >
          A South African studio building for Africa and beyond.
        </h2>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16"
        style={{ borderBottom: '1px solid var(--gray-100)' }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="text-3xl mb-1"
              style={{ fontWeight: 500, color: 'var(--teal-600)' }}
            >
              {stat.number}
            </div>
            <div
              className="text-sm"
              style={{ color: 'var(--gray-500)', fontWeight: 400 }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mission / Vision — teal inverted card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-8 md:p-12 mb-16"
        style={{
          backgroundColor: 'var(--teal-600)',
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <div>
          <p
            className="text-xs uppercase mb-4"
            style={{ color: 'var(--mint-300)', letterSpacing: '0.06em', fontWeight: 500 }}
          >
            Our Mission
          </p>
          <p
            className="text-base"
            style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, fontWeight: 400 }}
          >
            To help African businesses operate smarter by applying AI automation and modern
            software — driving sustainable growth and digital transformation across the continent.
          </p>
        </div>
        <div>
          <p
            className="text-xs uppercase mb-4"
            style={{ color: 'var(--mint-300)', letterSpacing: '0.06em', fontWeight: 500 }}
          >
            Our Vision
          </p>
          <p
            className="text-base"
            style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, fontWeight: 400 }}
          >
            To become a leading technology partner in Africa, empowering businesses to harness
            intelligent automation for sustainable competitive advantage.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
      >
        <p
          className="text-xs font-medium uppercase mb-10"
          style={{ color: 'var(--teal-600)', letterSpacing: '0.06em', fontWeight: 500 }}
        >
          Core Values
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08, ease }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center mb-4"
                style={{
                  backgroundColor: 'var(--mint-100)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <value.icon size={17} style={{ color: 'var(--teal-600)' }} />
              </div>
              <h4
                className="mb-2"
                style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--gray-900)' }}
              >
                {value.title}
              </h4>
              <p
                className="text-sm"
                style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontWeight: 400 }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
