'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Zap, Award, Terminal, Database, Shield } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build solutions that align with your business goals.'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'Fast, iterative development that adapts to your evolving needs and market changes.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing and best practices ensure reliable, scalable, and secure solutions.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Database }
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-[#121212] relative overflow-hidden">
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
            <span>about/</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 font-mono">
            <span className="text-yellow-400">class</span>{' '}
            <span className="text-blue-400">AboutPAR</span> {'{'}
            <br />
            <span className="text-gray-400 ml-8">{'// Our story & mission'}</span>
            <br />
            {'}'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Discover the team behind the technology and our mission to transform businesses through innovation
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="terminal-window p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm font-mono ml-4">mission.md</span>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="text-gray-300 font-mono">
                <span className="text-yellow-400">#</span> Our Mission
              </div>
              <p className="text-gray-400 font-mono leading-relaxed">
                To revolutionize how businesses operate by leveraging cutting-edge AI automation, 
                innovative software solutions, and exceptional user experiences that drive growth 
                and efficiency in the digital age.
              </p>
              
              <div className="text-gray-300 font-mono mt-6">
                <span className="text-yellow-400">##</span> Vision
              </div>
              <p className="text-gray-400 font-mono leading-relaxed">
                To be the leading force in business transformation, where every company can 
                harness the power of intelligent automation and digital innovation to achieve 
                unprecedented success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-12 text-center font-mono">
            <span className="text-yellow-400">const</span>{' '}
            <span className="text-blue-400">coreValues</span> = [
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                className="terminal-card text-center group"
              >
                <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:border-yellow-400/40 transition-colors duration-300">
                  <value.icon size={32} className="text-yellow-400" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-100 mb-4 font-mono">
                  {value.title}
                </h4>
                
                <p className="text-gray-400 text-sm font-mono leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <span className="text-gray-400 font-mono text-2xl">];</span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-12 font-mono">
            <span className="text-yellow-400">console</span>.
            <span className="text-blue-400">log</span>(stats);
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: "easeOut" }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-yellow-400" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 font-mono">
                  {stat.number}
                </div>
                
                <div className="text-gray-400 text-sm font-mono">
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
