'use client';

import { motion } from 'framer-motion';
import { Bot, Globe, Smartphone, Zap, Database, Shield, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions that learn and adapt.',
      features: ['Process Automation', 'Machine Learning', 'Predictive Analytics'],
      price: 'From R 40,000'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers with stunning design.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
      price: 'From R 15,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive growth.',
      features: ['iOS & Android', 'Cross-Platform', 'User-Centric Design'],
      price: 'From R 35,000'
    },
    {
      icon: Zap,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs.',
      features: ['Bespoke Solutions', 'Scalable Architecture', 'Integration Ready'],
      price: 'From R 60,000+'
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Analytics', 'Business Intelligence', 'Real-time Dashboards'],
      price: 'From R 25,000'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures to protect your business and ensure compliance.',
      features: ['Data Protection', 'GDPR Compliance', 'Security Audits'],
      price: 'From R 15,000'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving South African businesses with cutting-edge solutions that transform enterprises through intelligent automation and innovative technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="card group"
            >
              <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center mb-6 group-hover:border-blue-300 transition-colors duration-300">
                <service.icon size={24} className="text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  {service.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="btn-primary flex items-center gap-2 mx-auto"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code size={18} />
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
