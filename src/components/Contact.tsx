'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

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

  const contactInfo = [
    {
      id: 'email-ruben',
      icon: Mail,
      label: 'Email',
      value: 'ruben@parsoftware.co.za',
      link: 'mailto:ruben@parsoftware.co.za'
    },
    {
      id: 'email-erik',
      icon: Mail,
      label: 'Email',
      value: 'erik@parsoftware.co.za',
      link: 'mailto:erik@parsoftware.co.za'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: 'South Africa',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-black">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based in South Africa, serving businesses locally and across Africa. Ready to transform your business? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h3>
              
              {status === 'success' ? (
                <div className="text-center py-12">
                  <p className="text-xl font-semibold text-gray-900">Message sent!</p>
                  <p className="text-gray-600 mt-2">We&apos;ll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:bg-white focus:outline-none transition-colors duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:bg-white focus:outline-none transition-colors duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:bg-white focus:outline-none transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:bg-white focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center group-hover:border-gray-400 transition-colors duration-300">
                      <info.icon size={24} className="text-black" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {info.label}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-black transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Response Time
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 font-medium">Initial Response:</span>
                  <span className="text-black font-semibold">Within 2 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 font-medium">Project Quote:</span>
                  <span className="text-black font-semibold">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 font-medium">Support:</span>
                  <span className="text-black font-semibold">24/7 Available</span>
                </div>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
