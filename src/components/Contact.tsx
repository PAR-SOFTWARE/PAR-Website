'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

const contactInfo = [
  {
    id: 'ruben',
    icon: Mail,
    label: 'Ruben',
    value: 'ruben@parsoftware.co.za',
    link: 'mailto:ruben@parsoftware.co.za',
  },
  {
    id: 'erik',
    icon: Mail,
    label: 'Erik',
    value: 'erik@parsoftware.co.za',
    link: 'mailto:erik@parsoftware.co.za',
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Location',
    value: 'South Africa',
    link: '#',
  },
];

const responseTimes = [
  { label: 'Initial response', value: 'Within 2 hours' },
  { label: 'Project quote', value: 'Within 24 hours' },
  { label: 'Support', value: '24/7 available' },
];

const inputStyle = {
  width: '100%',
  backgroundColor: 'var(--gray-50)',
  border: '1px solid var(--gray-100)',
  borderRadius: 'var(--radius-md)',
  padding: '12px 16px',
  fontSize: '0.9375rem',
  color: 'var(--gray-900)',
  outline: 'none',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  fontWeight: 400,
};

const Contact = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            Contact
          </p>
          <h2
            className="max-w-md"
            style={{ fontSize: '2rem', fontWeight: 500, lineHeight: 1.2, color: 'var(--gray-900)' }}
          >
            Let&apos;s build something together.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {status === 'success' ? (
              <div
                className="p-8"
                style={{
                  backgroundColor: 'var(--mint-50)',
                  border: '1px solid var(--mint-100)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <p
                  className="mb-1"
                  style={{ fontWeight: 500, color: 'var(--teal-600)', fontSize: '1rem' }}
                >
                  Message sent.
                </p>
                <p className="text-sm" style={{ color: 'var(--gray-500)', fontWeight: 400 }}>
                  We&apos;ll get back to you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className="block text-xs"
                      style={{ color: 'var(--gray-700)', fontWeight: 500, letterSpacing: '0.02em' }}
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                      placeholder="Jane"
                      style={inputStyle}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      className="block text-xs"
                      style={{ color: 'var(--gray-700)', fontWeight: 500, letterSpacing: '0.02em' }}
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                      placeholder="Smith"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-xs"
                    style={{ color: 'var(--gray-700)', fontWeight: 500, letterSpacing: '0.02em' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="jane@company.co.za"
                    style={inputStyle}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-xs"
                    style={{ color: 'var(--gray-700)', fontWeight: 500, letterSpacing: '0.02em' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your project..."
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm" style={{ color: '#8B2020', fontWeight: 400 }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 text-sm transition-all duration-200 active:scale-[0.97] disabled:opacity-60"
                  style={{
                    backgroundColor: 'var(--teal-600)',
                    color: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="space-y-10"
          >
            <p
              className="text-base"
              style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontWeight: 400 }}
            >
              Based in South Africa, serving businesses locally and across Africa.
            </p>

            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.id} className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--teal-50)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <info.icon size={15} style={{ color: 'var(--teal-600)' }} />
                  </div>
                  <div>
                    <p
                      className="text-xs mb-0.5"
                      style={{ color: 'var(--gray-300)', fontWeight: 500 }}
                    >
                      {info.label}
                    </p>
                    <a
                      href={info.link}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--gray-700)', fontWeight: 400 }}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--gray-50)',
                border: '1px solid var(--gray-100)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <p
                className="text-xs uppercase mb-5"
                style={{ color: 'var(--teal-600)', letterSpacing: '0.06em', fontWeight: 500 }}
              >
                Response times
              </p>
              <div className="space-y-3">
                {responseTimes.map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--gray-500)', fontWeight: 400 }}>
                      {row.label}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--gray-700)', fontWeight: 500 }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
