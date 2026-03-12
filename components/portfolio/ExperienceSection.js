import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Clock, CheckCircle, Shield, Network, Layers, Server } from 'lucide-react';

const experiences = [
  {
    company: 'GE Healthcare',
    role: 'Software Engineering Specialist',
    period: 'Aug 2022 – Aug 2024',
    type: 'Full-time',
    logo: '/images/ge.jpeg',
    achievements: [
      {
        text: 'Owned Java/Spring Boot Audit Trail Repository (ATR) for HIPAA compliance — sole developer on 2M+ audit events/day ingestion pipeline on the world\'s #1 ranked VNA',
        impact: '2M+ events/day · zero data loss',
        icon: Server,
      },
      {
        text: 'Diagnosed & resolved SQL Server CPU crisis via varchar/nvarchar schema migration using DMV query profiling and SSMS execution plans',
        impact: 'CPU 100% → 20% restored',
        icon: Zap,
      },
      {
        text: 'Patched Log4Shell (CVE-2021-44228) CVSS 10.0 zero-day as designated product security rep — production deployed within 1 week of public disclosure',
        impact: '100% uptime · zero exploitation',
        icon: Shield,
      },
      {
        text: 'Architected RabbitMQ message broker for distributed event ingestion, decoupling clinical systems from the audit persistence layer',
        impact: 'Zero event loss in production',
        icon: Network,
      },
      {
        text: 'Built Robot Framework end-to-end test automation suite covering 300+ test cases with full CI/CD integration',
        impact: '1 month → 1 week validation',
        icon: CheckCircle,
      },
      {
        text: 'Automated CCG HA/DR standby provisioning via Ansible playbooks eliminating all manual failover intervention',
        impact: '2 hrs → 30 min DR recovery · 99.88% uptime',
        icon: TrendingUp,
      },
    ],
  },
  {
    company: 'GE Healthcare',
    role: 'DevOps Engineer',
    period: 'Aug 2021 – Jul 2022',
    type: 'Full-time',
    logo: '/images/ge.jpeg',
    achievements: [
      {
        text: 'Designed centralized CI/CD pipeline migrating 15+ applications from Perforce to GitLab with Docker/Kubernetes containerization',
        impact: '95% build latency reduction',
        icon: TrendingUp,
      },
      {
        text: 'Built reusable Python multiprocessing framework for ML evaluation and data ingestion pipelines — adopted by 15 cross-functional teams enterprise-wide',
        impact: '15 teams · 70% ML overhead reduction',
        icon: Layers,
      },
      {
        text: 'Containerized Python ML pipelines on AWS Lambda & Docker with automated Ansible provisioning',
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
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/70 mb-6">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-white/55 text-sm">
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
                <div className="w-12 h-12 rounded-xl bg-white border border-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center p-1.5">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-violet-400 font-medium text-sm mt-0.5">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-white/55">
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
                        <p className="text-white/65 text-xs leading-relaxed mb-2">{ach.text}</p>
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
