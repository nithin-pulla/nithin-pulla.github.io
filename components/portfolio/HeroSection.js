import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Send, GraduationCap, Briefcase, Network, Brain } from 'lucide-react';

// ── Canvas-based particle network ────────────────────────────────────────────
// Runs entirely client-side via requestAnimationFrame — no SSR, no SMIL glitches
function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let rafId;

    // Size canvas to its CSS dimensions
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    // ── Particles ──────────────────────────────────────────────────────────
    const COUNT     = 62;
    const MAX_DIST  = 160; // px — connection threshold

    const pts = Array.from({ length: COUNT }, (_, i) => ({
      x:     Math.random() * W(),
      y:     Math.random() * H(),
      vx:    (Math.random() - 0.5) * 0.28,
      vy:    (Math.random() - 0.5) * 0.28,
      r:     Math.random() * 1.0 + 0.7,
      phase: (i / COUNT) * Math.PI * 2,   // deterministic phase spread
      isHub: i < 9,                        // first 9 are "hub" nodes
    }));

    // ── Data packets (travel between hub nodes) ─────────────────────────────
    const PACKET_COUNT = 7;
    const packets = Array.from({ length: PACKET_COUNT }, (_, i) => {
      const from = i % 9;
      const to   = (i + 3) % 9;
      return { fromIdx: from, toIdx: to, progress: i / PACKET_COUNT };
    });

    const nextHub = (exclude) => {
      let idx;
      do { idx = Math.floor(Math.random() * 9); } while (idx === exclude);
      return idx;
    };

    // ── Draw loop ───────────────────────────────────────────────────────────
    let frame = 0;
    const draw = () => {
      frame++;
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);

      // Move particles
      pts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.012;
        if (p.x < 0)  { p.x = 0;  p.vx = Math.abs(p.vx); }
        if (p.x > w)  { p.x = w;  p.vx = -Math.abs(p.vx); }
        if (p.y < 0)  { p.y = 0;  p.vy = Math.abs(p.vy); }
        if (p.y > h)  { p.y = h;  p.vy = -Math.abs(p.vy); }
      });

      // Draw edges between nearby particles
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.16;
            // Violet tint on hub-to-hub edges
            const color = (pts[i].isHub && pts[j].isHub)
              ? `rgba(167,139,250,${a * 2})`
              : `rgba(255,255,255,${a})`;
            ctx.strokeStyle = color;
            ctx.lineWidth   = pts[i].isHub && pts[j].isHub ? 0.8 : 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      pts.forEach(p => {
        const pulse = 0.5 + Math.sin(p.phase) * 0.25;
        if (p.isHub) {
          // Outer halo
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
          grad.addColorStop(0, `rgba(167,139,250,${pulse * 0.3})`);
          grad.addColorStop(1, 'rgba(167,139,250,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
          ctx.fill();
          // Core dot
          ctx.fillStyle = `rgba(167,139,250,${pulse * 0.95})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 1.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(255,255,255,${pulse * 0.55})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw travelling packets (smooth linear interpolation)
      packets.forEach(pk => {
        pk.progress += 0.004;
        if (pk.progress >= 1) {
          pk.progress = 0;
          pk.fromIdx  = pk.toIdx;
          pk.toIdx    = nextHub(pk.toIdx);
        }
        const from  = pts[pk.fromIdx];
        const to    = pts[pk.toIdx];
        const t     = pk.progress;
        const px    = from.x + (to.x - from.x) * t;
        const py    = from.y + (to.y - from.y) * t;
        // Bell-curve opacity: bright in middle, fades at ends
        const fade  = Math.sin(t * Math.PI);
        // Glow
        const g = ctx.createRadialGradient(px, py, 0, px, py, 8);
        g.addColorStop(0, `rgba(167,139,250,${fade * 0.7})`);
        g.addColorStop(1, 'rgba(167,139,250,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fill();
        // Core dot
        ctx.fillStyle = `rgba(220,200,255,${fade * 0.95})`;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

// ── Floating concept badges (CSS keyframe animated, no hydration issues) ──────
const BADGES = [
  { label: 'High Availability', style: { top: '12%',  left: '2%'  }, delay: '0s'   },
  { label: 'Raft Consensus',    style: { top: '25%',  left: '1%'  }, delay: '0.8s' },
  { label: 'Low Latency',       style: { bottom: '22%', left: '2%' }, delay: '1.6s' },
  { label: 'Fault Tolerance',   style: { bottom: '10%', left: '1%' }, delay: '2.4s' },
  { label: 'Neural Networks',   style: { top: '12%',  right: '2%' }, delay: '0.4s' },
  { label: 'AI Agents',         style: { top: '25%',  right: '1%' }, delay: '1.2s' },
  { label: 'Computer Vision',   style: { bottom: '22%', right: '2%' }, delay: '2.0s' },
  { label: 'Message Queues',    style: { bottom: '10%', right: '1%' }, delay: '2.8s' },
];

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

      {/* Canvas particle network — smooth RAF animation, no SMIL */}
      <ParticleNetwork />

      {/* Violet orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[130px] pointer-events-none" />

      {/* Floating concept badges — CSS fade-in, no motion lib needed */}
      <style>{`
        @keyframes badgePulse {
          0%, 100% { opacity: 0.13; }
          50%       { opacity: 0.22; }
        }
      `}</style>
      {BADGES.map((b) => (
        <span
          key={b.label}
          className="absolute hidden lg:block text-[10px] font-mono text-white/70 border border-white/10 bg-white/[0.03] px-2 py-0.5 rounded-md pointer-events-none select-none"
          style={{
            ...b.style,
            animation: `badgePulse 4s ease-in-out ${b.delay} infinite`,
          }}
        >
          {b.label}
        </span>
      ))}

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
              {/* Outer soft glow — two layers for depth */}
              <div className="absolute -inset-8 rounded-full bg-violet-600/20 blur-[70px]" />
              <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-3xl scale-110" />
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
