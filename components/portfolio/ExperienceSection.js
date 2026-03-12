import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const experiences = [
  {
    company: 'GE Healthcare',
    role: 'Software Engineering Specialist',
    period: 'Aug 2022 – Aug 2024',
    type: 'Full-time',
    logo: '/images/ge.jpeg',
    achievements: [
      {
        text: 'Engineered Java-based Audit Trail Repository using Spring with clean architecture',
        impact: '40% faster search',
        icon: Zap,
      },
      {
        text: 'Optimized AWS log search & Master Patient Index via SQL tuning & containerization',
        impact: '96 hrs/year saved · 35% latency ↓',
        icon: TrendingUp,
      },
      {
        text: 'Built reusable test automation framework with full CI/CD integration',
        impact: '30 days → 5 days validation',
        icon: Clock,
      },
      {
        text: 'Automated disaster recovery workflows and failover mechanisms',
        impact: 'Uptime 98.8% → 99.88%',
        icon: CheckCircle,
      },
      {
        text: 'Resolved production performance bottleneck via schema & SQL optimization',
        impact: 'CPU utilization 100% → 20%',
        icon: Zap,
      },
    ],
  },
  {
    company: 'GE Healthcare',
    role: 'DevOps Engineer Intern',
    period: 'Aug 2021 – Jul 2022',
    type: 'Internship',
    logo: '/images/ge.jpeg',
    achievements: [
      {
        text: 'Designed centralized CI/CD pipeline for 15+ applications (Perforce → GitLab)',
        impact: '85% faster deployments',
        icon: TrendingUp,
      },
      {
        text: 'Containerized Python ML pipelines on AWS Lambda & Docker',
        impact: '2 hours → 48 minutes (60% faster)',
        icon: Clock,
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-6">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-white/30 text-sm">
            3+ years building production-grade systems at GE Healthcare
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.03] transition-colors"
            >
              {/* Card header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover p-2" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-violet-400 font-medium text-sm mt-0.5">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-white/30">
                    <span>{exp.period}</span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid sm:grid-cols-2 gap-3">
                {exp.achievements.map((ach, j) => {
                  const Icon = ach.icon;
                  return (
                    <div
                      key={j}
                      className="flex gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 hover:bg-violet-500/5 transition-all duration-200"
                    >
                      <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs leading-relaxed mb-2">{ach.text}</p>
                        <span className="inline-block px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded text-[10px] font-medium text-violet-400">
                          {ach.impact}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
