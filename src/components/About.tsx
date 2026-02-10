'use client';

import { motion } from 'framer-motion';
import { Award, Users, Database, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive edge.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Every project is crafted with attention to detail and a commitment to delivering exceptional quality.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and ensure their vision becomes reality.'
    }
  ];

  const stats = [
    { number: '4+', label: 'Years Experience', icon: Award },
    { number: '20+', label: 'Happy Clients', icon: Users },
    { number: '2hr', label: 'Average Response Time', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Database }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
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
            About <span className="text-blue-600">PAR SOFTWARE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A South African tech company dedicated to transforming African businesses through intelligent automation, cutting-edge technology, and exceptional service.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To revolutionize how African businesses operate by leveraging cutting-edge AI automation, 
                  innovative software solutions, and exceptional service that drives sustainable growth 
                  and digital transformation across the continent.
                </p>
              </div>
              
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be Africa's leading technology partner, empowering businesses across the continent 
                  to harness the power of intelligent automation and digital innovation for unprecedented success 
                  and sustainable competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Our <span className="text-blue-600">Core Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:border-blue-300 transition-colors duration-300">
                  <value.icon size={32} className="text-blue-600" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-12">
            By The <span className="text-blue-600">Numbers</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-blue-600" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
