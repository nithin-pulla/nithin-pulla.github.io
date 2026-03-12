import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Send, GraduationCap, Briefcase } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Star field — layer 1 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Star field — layer 2 (offset, smaller) */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '140px 140px',
          backgroundPosition: '40px 55px',
        }}
      />

      {/* Violet orb glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-5 tracking-tight leading-[1.05]"
        >
          Hi, I'm{' '}
          <span className="text-violet-400">Nithin.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-white/40 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          I build scalable systems &amp; optimized solutions
        </motion.p>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/50">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
            MS CS @ University at Buffalo
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/50">
            <Briefcase className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
            Ex-SWE @ GE Healthcare
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group flex items-center gap-2 px-7 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-violet-900/40"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 px-7 py-3 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
