import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-white"
            >
              NP<span className="text-violet-400">.</span>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-white/10'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/nithin-pulla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/30 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nithin-pulla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/30 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-full transition-colors"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/50 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/97 backdrop-blur-2xl pt-16"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 pb-16">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-medium text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex gap-5 mt-6">
                <a href="https://github.com/nithin-pulla" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="https://linkedin.com/in/nithin-pulla" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="mailto:nithinp.deploy@gmail.com" className="text-white/30 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); setMobileMenuOpen(false); }}
                className="mt-2 px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-full transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
