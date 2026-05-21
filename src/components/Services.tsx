'use client';

import { motion } from 'framer-motion';
import { Bot, Globe, Smartphone, Zap, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline operations with intelligent automation that learns and adapts to your business processes.',
    features: ['Process Automation', 'Machine Learning', 'Predictive Analytics'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, performant web platforms built to convert visitors and scale with your growth.',
    features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that engage users and drive retention.',
    features: ['iOS & Android', 'Cross-Platform', 'User-Centric Design'],
  },
  {
    icon: Zap,
    title: 'Custom Software',
    description: 'Tailored software built precisely around your business requirements - no off-the-shelf compromise.',
    features: ['Bespoke Solutions', 'Scalable Architecture', 'Integration Ready'],
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'Turn raw data into decisions with advanced analytics, BI tools, and real-time dashboards.',
    features: ['Data Analytics', 'Business Intelligence', 'Real-time Dashboards'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade protection to keep your systems, data, and customers safe.',
    features: ['Data Protection', 'GDPR Compliance', 'Security Audits'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <p
          className="text-xs font-medium uppercase mb-4"
          style={{ color: 'var(--teal-600)', letterSpacing: '0.06em', fontWeight: 500 }}
        >
          What we do
        </p>
        <h2
          className="max-w-lg"
          style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, color: 'var(--gray-900)' }}
        >
          Services built for businesses that want to grow.
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="p-8"
            style={{
              backgroundColor: 'var(--gray-50)',
              border: '1px solid var(--gray-100)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div
              className="w-10 h-10 flex items-center justify-center mb-6"
              style={{
                backgroundColor: 'var(--mint-100)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <service.icon size={18} style={{ color: 'var(--teal-600)' }} />
            </div>

            <h3
              className="mb-2"
              style={{ fontSize: '1.0625rem', fontWeight: 500, color: 'var(--gray-900)', lineHeight: 1.3 }}
            >
              {service.title}
            </h3>

            <p
              className="mb-6"
              style={{ fontSize: '0.9375rem', fontWeight: 400, color: 'var(--gray-500)', lineHeight: 1.7 }}
            >
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.features.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1 text-xs"
                  style={{
                    backgroundColor: 'var(--mint-100)',
                    color: 'var(--teal-600)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm transition-all duration-200 active:scale-[0.97]"
          style={{
            backgroundColor: 'var(--teal-600)',
            color: '#ffffff',
            borderRadius: 'var(--radius-md)',
            fontWeight: 500,
          }}
        >
          Discuss your project
        </button>
      </motion.div>
    </div>
  </section>
);

export default Services;
