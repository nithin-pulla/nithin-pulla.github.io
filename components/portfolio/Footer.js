import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold text-white">
              NP<span className="text-violet-400">.</span>
            </a>
            <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-xs">
              Software Engineer building scalable systems and intelligent solutions.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://github.com/nithin-pulla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nithin-pulla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nithinp.deploy@gmail.com"
                className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="mailto:nithinp.deploy@gmail.com" className="hover:text-white/80 transition-colors">
                  nithinp.deploy@gmail.com
                </a>
              </li>
              <li>Fremont, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Nithin Pulla. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 border border-white/15 rounded-xl text-white/40 hover:text-white hover:border-white/30 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
