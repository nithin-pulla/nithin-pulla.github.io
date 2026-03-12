import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download, Linkedin } from 'lucide-react';

const stats = [
  { value: '24h', label: 'Response Time' },
  { value: '100%', label: 'Collaborative' },
  { value: '3+', label: 'Years Exp.' },
  { value: '∞', label: 'Ideas to Share' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-6">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to Build<br />Something Great?
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            I'm actively seeking <span className="text-white/70">full-time opportunities</span> and exciting
            collaborations. Whether you have a project in mind or just want to chat about tech, I'd love
            to hear from you.
          </p>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden p-8 sm:p-12"
        >
          {/* Violet glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] rounded-full bg-violet-700/15 blur-[90px]" />
          </div>

          <div className="relative z-10 text-center">
            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-white/25 text-sm mb-8">
              <MapPin className="w-3.5 h-3.5 text-violet-400" />
              Fremont, California, United States
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:nithinp.deploy@gmail.com?subject=Let's Connect!"
                className="flex items-center gap-2 px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-violet-900/40 w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/nithin-pulla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pt-8 border-t border-white/5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-white/25">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Resume download */}
            <a
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930b31dbf73a51dabf60314/099d8b286_NITHIN_PULLA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/5 text-white/40 hover:text-white/80 text-sm font-medium rounded-full transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
