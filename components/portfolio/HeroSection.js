import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Send, GraduationCap, Briefcase, Network, Brain } from 'lucide-react';

// ── Neural-network / distributed-system background ──────────────────────────
// 23 nodes across 6 "layers" — looks like both a neural net AND a mesh
const NODES = [
  // Layer 0 – input
  { x: 5,  y: 22 }, { x: 5,  y: 50 }, { x: 5,  y: 78 },
  // Layer 1
  { x: 22, y: 12 }, { x: 22, y: 36 }, { x: 22, y: 62 }, { x: 22, y: 88 },
  // Layer 2
  { x: 39, y: 8  }, { x: 39, y: 30 }, { x: 39, y: 52 }, { x: 39, y: 74 }, { x: 39, y: 94 },
  // Layer 3
  { x: 56, y: 18 }, { x: 56, y: 40 }, { x: 56, y: 62 }, { x: 56, y: 85 },
  // Layer 4
  { x: 73, y: 12 }, { x: 73, y: 34 }, { x: 73, y: 58 }, { x: 73, y: 80 },
  // Layer 5 – output
  { x: 90, y: 28 }, { x: 90, y: 52 }, { x: 90, y: 76 },
];

const EDGES = [
  [0,3],[0,4],[1,4],[1,5],[2,5],[2,6],
  [3,7],[4,8],[4,9],[5,9],[5,10],[6,10],[6,11],
  [7,12],[8,12],[8,13],[9,13],[9,14],[10,14],[11,15],
  [12,16],[13,16],[13,17],[14,17],[14,18],[15,18],[15,19],
  [16,20],[17,21],[17,20],[18,21],[18,22],[19,22],
];

// Packets travel along these edges (forward pass through the network)
const PACKETS = [
  { from: 0, to: 4,  dur: 2.8, delay: 0.0 },
  { from: 1, to: 5,  dur: 3.2, delay: 0.7 },
  { from: 4, to: 9,  dur: 2.5, delay: 1.4 },
  { from: 5, to: 10, dur: 3.0, delay: 0.4 },
  { from: 9, to: 13, dur: 2.7, delay: 1.1 },
  { from: 10,to: 14, dur: 2.4, delay: 1.8 },
  { from: 13,to: 17, dur: 2.9, delay: 0.9 },
  { from: 17,to: 21, dur: 3.1, delay: 0.3 },
];

// Deterministic pulse timings (avoids SSR hydration mismatch)
const PULSE_DUR  = [3.2,3.8,4.4,2.9,3.5,4.1,2.7,3.3,3.9,4.5,3.0,3.6,4.2,2.8,3.4,4.0,2.6,3.2,3.8,4.4,3.1,3.7,4.3];
const PULSE_DELAY= [0.0,0.5,1.0,1.5,2.0,0.8,1.3,0.3,1.8,0.7,2.2,0.4,1.6,0.9,2.5,1.1,0.6,2.0,1.4,2.8,0.2,1.7,2.3];

function NetworkBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.13 }}
    >
      {/* Edges */}
      {EDGES.map(([a, b]) => (
        <line
          key={`e-${a}-${b}`}
          x1={NODES[a].x} y1={NODES[a].y}
          x2={NODES[b].x} y2={NODES[b].y}
          stroke="white"
          strokeWidth="0.15"
          opacity="0.45"
        />
      ))}

      {/* Nodes with pulse */}
      {NODES.map((n, i) => (
        <circle key={`n-${i}`} cx={n.x} cy={n.y} r="0.55" fill="white">
          <animate
            attributeName="r"
            values="0.55;1.3;0.55"
            dur={`${PULSE_DUR[i]}s`}
            repeatCount="indefinite"
            begin={`${PULSE_DELAY[i]}s`}
          />
          <animate
            attributeName="opacity"
            values="0.7;0.15;0.7"
            dur={`${PULSE_DUR[i]}s`}
            repeatCount="indefinite"
            begin={`${PULSE_DELAY[i]}s`}
          />
        </circle>
      ))}

      {/* Travelling data packets */}
      {PACKETS.map((p, i) => (
        <circle key={`pk-${i}`} r="0.75" fill="rgba(167,139,250,0.95)">
          <animateMotion
            dur={`${p.dur}s`}
            repeatCount="indefinite"
            begin={`${p.delay}s`}
            path={`M ${NODES[p.from].x} ${NODES[p.from].y} L ${NODES[p.to].x} ${NODES[p.to].y}`}
          />
          <animate
            attributeName="opacity"
            values="0;0.9;0.9;0"
            keyTimes="0;0.12;0.88;1"
            dur={`${p.dur}s`}
            repeatCount="indefinite"
            begin={`${p.delay}s`}
          />
        </circle>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      {/* Star field — layer 1 */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Star field — layer 2 (offset) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '140px 140px',
          backgroundPosition: '40px 55px',
        }}
      />

      {/* Neural network background */}
      <NetworkBackground />

      {/* Violet orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[130px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-28 lg:py-0">

          {/* ── Left: text ────────────────────────────── */}
          <div className="text-center lg:text-left">

            {/* Mobile profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex lg:hidden justify-center mb-8"
            >
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-xl" />
                <img
                  src="/images/hero.png"
                  alt="Nithin Pulla"
                  className="relative w-full h-full rounded-full object-cover border-2 border-violet-500/40"
                />
              </div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/70 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.05]"
            >
              Hi, I'm{' '}
              <span className="text-violet-400">Nithin.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              I build scalable systems &amp; optimized solutions
            </motion.p>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/65">
                <GraduationCap className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                MS CS @ University at Buffalo
              </span>
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/65">
                <Briefcase className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                Ex-SWE @ GE Healthcare
              </span>
            </motion.div>

            {/* Specialization pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10"
            >
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/35 bg-violet-500/8 text-sm text-violet-300">
                <Network className="w-3.5 h-3.5 flex-shrink-0" />
                Distributed Systems
              </span>
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/35 bg-violet-500/8 text-sm text-violet-300">
                <Brain className="w-3.5 h-3.5 flex-shrink-0" />
                Machine Learning
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
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
                className="group flex items-center gap-2 px-7 py-3 border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* ── Right: profile image (desktop) ────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              {/* Outer violet glow */}
              <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-3xl scale-110" />
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-violet-500/20 border-dashed"
              />
              {/* Static ring */}
              <div className="absolute -inset-1.5 rounded-full border border-violet-500/30" />
              {/* Image */}
              <img
                src="/images/hero.png"
                alt="Nithin Pulla"
                className="relative w-full h-full rounded-full object-cover border border-white/10"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
