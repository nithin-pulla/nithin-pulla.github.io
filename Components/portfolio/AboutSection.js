import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function AboutSection() {
  const education = [
    {
      school: 'University at Buffalo',
      degree: 'Master of Science in Computer Science',
      period: 'Aug 2024 - Dec 2025 (Expected)',
      gpa: '3.9/4.0',
      coursework: ['Operating Systems', 'Distributed Systems', 'Algorithms', 'Cloud Computing'],
      current: true,
      logo: '/images/ub.png',
    },
    {
      school: 'Amrita School of Engineering',
      degree: 'B.Tech in Electronics & Communications',
      period: 'Jul 2018 - May 2022',
      gpa: '3.7/4.0',
      coursework: [],
      current: false,
      logo: '/images/amrita.png',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Building the Future, One System at a Time
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm a <span className="text-slate-900 font-medium">Software Engineer</span> with a passion for building
                scalable, reliable systems that make a real difference. Currently pursuing my Master's at the
                University at Buffalo, I bring <span className="text-blue-600 font-medium">3+ years of industry experience</span> from
                GE Healthcare, where I worked on mission-critical healthcare infrastructure.
              </p>
              <p>
                My expertise spans <span className="text-slate-900 font-medium">full-stack development</span>,
                <span className="text-slate-900 font-medium"> cloud architecture</span>, and
                <span className="text-slate-900 font-medium"> machine learning systems</span>. I've achieved
                measurable impact—from boosting system uptime to 99.88% to reducing deployment times by 85%.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects,
                and finding creative solutions to complex engineering challenges.
              </p>
            </div>

            {/* Quick Info */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <span>Fremont, California, United States</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <span>3.9 GPA</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 ${edu.current
                    ? 'bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-lg shadow-blue-100'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                >
                  {edu.current && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
                      Current
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Logo Container */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-slate-200 shadow-sm overflow-hidden flex items-center justify-center">
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-slate-900">{edu.school}</h4>
                      <p className="text-blue-600 font-medium mt-1">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-500 ml-20">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 rounded-md font-medium text-slate-700">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {edu.coursework.length > 0 && (
                    <div className="mt-4 ml-20 flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
