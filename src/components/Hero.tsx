'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, Terminal, Code, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#121212]">
      {/* Terminal Header Bar */}
      <div className="terminal-header" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="terminal-window p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Terminal size={16} />
              <span>PAR_SOFTWARE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-left"
          >
            <div className="mb-4">
              <span className="text-yellow-400">$</span>
              <span className="text-gray-400 ml-2">Welcome to PAR Software</span>
            </div>
            <div className="mb-4">
              <span className="text-yellow-400">$</span>
              <span className="text-gray-400 ml-2">Loading amazing solutions...</span>
            </div>
            <div className="mb-6">
              <span className="text-green-400">✓</span>
              <span className="text-gray-400 ml-2">Ready to transform your business</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 leading-tight"
          >
            <span className="text-yellow-400">PAR SOFTWARE</span>
            <br />
            <span className="text-blue-400">We Build The Future</span>
            <br />
            <span className="text-gray-400 text-2xl md:text-3xl">of Business</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            <span className="text-yellow-400">PAR SOFTWARE</span> specializes in{' '}
            <span className="text-green-400">AI Automation</span> for companies. 
            We build cutting-edge <span className="text-blue-400">apps</span>,{' '}
            <span className="text-blue-400">websites</span>, and intelligent solutions 
            that transform how businesses operate.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="btn-primary flex items-center gap-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code size={18} />
            Start Your Project
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="btn-secondary flex items-center gap-2"
          >
            <Play size={18} />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats in Terminal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Projects Delivered', icon: Code },
            { number: '100%', label: 'Client Satisfaction', icon: Zap },
            { number: '24/7', label: 'Support Available', icon: Terminal }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1, ease: "easeOut" }}
              className="terminal-card text-center group"
            >
              <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:border-yellow-400/40 transition-colors duration-300">
                <stat.icon size={24} className="text-yellow-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-500 hover:text-yellow-400 transition-colors duration-200"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
