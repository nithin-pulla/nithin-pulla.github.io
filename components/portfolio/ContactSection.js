import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Download, CheckCircle, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:nithinp.deploy@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'nithinp.deploy@gmail.com', href: 'mailto:nithinp.deploy@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 716-510-9152', href: 'tel:+17165109152' },
    { icon: MapPin, label: 'Location', value: 'Fremont, California, United States', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/nithin-pulla' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/nithin-pulla' },
    { icon: ExternalLink, label: 'Portfolio', href: 'https://nithin-pulla.github.io' },
  ];

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">Let's Connect</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="text-slate-900">Ready to Build </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Something Great?
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking <span className="font-semibold text-slate-900">full-time opportunities</span> and exciting collaborations.
            Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl shadow-2xl shadow-blue-500/30 overflow-hidden text-base">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-white/20 rounded-full"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Coffee Chat? ☕
              </h3>
              <p className="text-lg text-white/90 mb-2 max-w-lg mx-auto leading-relaxed">
                I believe the best connections happen over good conversations. Let's grab a virtual coffee and discuss how we can create something amazing together!
              </p>
              <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Based in Fremont, California, United States</span>
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <motion.a
                  href="mailto:nithinp.deploy@gmail.com?subject=Let's Connect!"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Email Me
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/nithin-pulla"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </motion.a>
              </div>

              {/* Fun stats with Resume */}
              <div className="pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">24h</div>
                    <div className="text-sm text-white/80">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-sm text-white/80">Collaborative</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">∞</div>
                    <div className="text-sm text-white/80">Ideas to Share</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                </div>

                {/* Resume Download */}
                <motion.a
                  href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6930b31dbf73a51dabf60314/099d8b286_NITHIN_PULLA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center justify-center gap-3 w-full p-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl text-white font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Download className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Download My Resume</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}