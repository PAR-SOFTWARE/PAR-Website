'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'The site perfectly captures what our practice is about - clean, calm, and professional. Our patients comment on it regularly. It just feels right.',
    author: 'Practice Manager',
    company: 'Lumis Dental',
  },
  {
    quote:
      'We needed something that actually looked like we belonged in enterprise conversations. PAR delivered a sharp, modern presence we are proud to send prospects to.',
    author: 'Director',
    company: 'Wavelink IT',
  },
  {
    quote:
      'They nailed the brief immediately - playful, on-brand, and straight to the point. The whole process was smooth and the end result genuinely delights our parents.',
    author: 'Founder',
    company: 'Nimble Kids',
  },
  {
    quote:
      'Every detail was considered. The portfolio site reflects exactly the kind of care and craft we put into our own work. Could not have asked for more.',
    author: 'Creative Director',
    company: 'Kestrel Co',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const Testimonials = () => (
  <section className="py-24 bg-white">
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
          Client feedback
        </p>
        <h2
          className="max-w-md"
          style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, color: 'var(--gray-900)' }}
        >
          What our clients say.
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.company}
            variants={item}
            className="p-8 flex flex-col justify-between gap-8"
            style={{
              backgroundColor: 'var(--gray-50)',
              border: '1px solid var(--gray-100)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--gray-700)',
                lineHeight: 1.75,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--mint-100)',
                  flexShrink: 0,
                }}
              />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--gray-900)' }}>
                  {t.author}
                </p>
                <p style={{ fontSize: '0.8125rem', fontWeight: 400, color: 'var(--teal-600)' }}>
                  {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
