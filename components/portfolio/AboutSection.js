import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function AboutSection() {
  const education = [
    {
      school: 'University at Buffalo',
      degree: 'Master of Science in Computer Science',
      period: 'Aug 2024 – Dec 2025',
      gpa: '3.9 / 4.0',
      courses: ['Operating Systems', 'Distributed Systems', 'Algorithms', 'Cloud Computing'],
      current: true,
      logo: '/images/ub.png',
    },
    {
      school: 'Amrita School of Engineering',
      degree: 'B.Tech in Electronics & Communications',
      period: 'Jul 2018 – May 2022',
      gpa: '3.7 / 4.0',
      courses: [],
      current: false,
      logo: '/images/amrita.png',
    },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '99.88%', label: 'Uptime Achieved' },
    { value: '85%', label: 'Faster Deployments' },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-6">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Building the future,<br />one system at a time.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 text-white/50 text-base leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Software Engineer</span> with a passion for
                building scalable, reliable systems that make a real difference. Currently pursuing my
                Master's at the University at Buffalo, I bring{' '}
                <span className="text-violet-400 font-semibold">3+ years of industry experience</span>{' '}
                from GE Healthcare, where I worked on mission-critical healthcare infrastructure.
              </p>
              <p>
                My expertise spans <span className="text-white/80">full-stack development</span>,{' '}
                <span className="text-white/80">cloud architecture</span>, and{' '}
                <span className="text-white/80">machine learning systems</span>. I've achieved measurable
                impact — from boosting system uptime to 99.88% to reducing deployment times by 85%.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects,
                and finding creative solutions to complex engineering challenges.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-2 text-white/30 text-sm">
              <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
              Fremont, California, United States
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] text-center"
                >
                  <div className="text-lg font-bold text-violet-400 mb-1">{s.value}</div>
                  <div className="text-[11px] text-white/30 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="flex items-center gap-2 text-base font-semibold text-white/70 mb-6">
              <GraduationCap className="w-4 h-4 text-violet-400" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-5 rounded-2xl border transition-colors ${
                    edu.current
                      ? 'border-violet-500/30 bg-violet-500/5'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                >
                  {edu.current && (
                    <span className="absolute -top-2.5 left-4 px-2.5 py-0.5 bg-violet-600 rounded-full text-[10px] font-medium text-white">
                      Current
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm">{edu.school}</h4>
                      <p className="text-white/40 text-xs mt-0.5 leading-snug">{edu.degree}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-[11px] text-white/30">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="px-2 py-0.5 bg-white/5 rounded-md">GPA: {edu.gpa}</span>
                      </div>
                      {edu.courses.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.courses.map((c) => (
                            <span
                              key={c}
                              className="px-2.5 py-0.5 text-[10px] bg-white/5 border border-white/10 rounded-full text-white/30"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
