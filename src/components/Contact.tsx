'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Terminal, Code, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@parsoftware.com',
      link: 'mailto:hello@parsoftware.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-mono mb-4">
            <Terminal size={16} />
            <span>contact/</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 font-mono">
            <span className="text-yellow-400">Get In</span>{' '}
            <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Ready to transform your business? We&apos;d love to hear from you and discuss how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="terminal-window p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm font-mono ml-4">contact-form.js</span>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-mono mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-gray-100 font-mono focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-mono mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-gray-100 font-mono focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-mono mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-gray-100 font-mono focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-gray-100 font-mono focus:border-yellow-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  className="terminal-card group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center group-hover:border-yellow-400/40 transition-colors duration-300">
                      <info.icon size={24} className="text-yellow-400" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-100 font-mono">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 font-mono"
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
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              className="terminal-window p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare size={20} className="text-yellow-400" />
                <span className="text-gray-300 font-mono font-medium">Response Time</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-mono">Initial Response:</span>
                  <span className="text-green-400 font-mono">Within 2 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-mono">Project Quote:</span>
                  <span className="text-green-400 font-mono">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-mono">Support:</span>
                  <span className="text-green-400 font-mono">24/7 Available</span>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-gray-400 font-mono mb-4">
                Ready to start your project?
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="btn-secondary flex items-center gap-2 mx-auto"
              >
                <Code size={18} />
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
