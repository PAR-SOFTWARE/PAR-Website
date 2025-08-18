'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Globe, Smartphone, Zap, Database, Shield, Code, Terminal } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions that learn and adapt.',
      features: ['Process Automation', 'Machine Learning', 'Predictive Analytics'],
      code: 'const ai = new Automation();'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers with stunning design.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
      code: 'npm install @par-software/web'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive growth.',
      features: ['iOS & Android', 'Cross-Platform', 'User-Centric Design'],
      code: 'flutter create par_app'
    },
    {
      icon: Zap,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs.',
      features: ['Bespoke Solutions', 'Scalable Architecture', 'Integration Ready'],
      code: 'git clone par-software/core'
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Analytics', 'Business Intelligence', 'Real-time Dashboards'],
      code: 'SELECT * FROM insights;'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures to protect your business and ensure compliance.',
      features: ['Data Protection', 'GDPR Compliance', 'Security Audits'],
      code: 'encrypt(data, AES256);'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" ref={ref} className="section-padding bg-[#0a0a0a] relative overflow-hidden">
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
            <span>services/</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 font-mono">
            <span className="text-yellow-400">function</span>{' '}
            <span className="text-blue-400">getServices</span>() {'{'}
            <br />
            <span className="text-gray-400 ml-8">{'// Our core offerings'}</span>
            <br />
            {'}'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            We deliver comprehensive solutions that drive innovation and growth for your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="terminal-card group relative overflow-hidden"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center mb-6 group-hover:border-yellow-400/40 transition-colors duration-300">
                <service.icon size={32} className="text-yellow-400" />
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors duration-300 font-mono">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-400 mb-6 leading-relaxed font-mono">
                {service.description}
              </p>
              
              {/* Code Snippet */}
              <div className="bg-gray-900 border border-gray-700 rounded-md p-3 mb-6 font-mono text-sm">
                <span className="text-green-400">{service.code}</span>
              </div>
              
              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400 font-mono text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            <Code size={18} />
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
