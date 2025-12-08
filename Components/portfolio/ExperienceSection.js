import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Clock, Zap, CheckCircle, Building2 } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'GE Healthcare',
      role: 'Software Engineering Specialist',
      period: 'Aug 2022 - Aug 2024',
      type: 'Full-time',
      location: 'Bangalore, India',
      logo: '/images/ge.jpeg',
      achievements: [
        {
          text: 'Engineered scalable Java-based Audit Trail Repository using Spring with clean architecture',
          impact: '40% faster search efficiency',
          icon: Zap,
        },
        {
          text: 'Optimized AWS log search and Master Patient Index through SQL tuning & containerization',
          impact: '96 hours saved annually, 35% latency reduction',
          icon: TrendingUp,
        },
        {
          text: 'Built reusable test automation framework with CI/CD integration',
          impact: 'Validation cycles: 30 days → 5 days',
          icon: Clock,
        },
        {
          text: 'Automated disaster recovery workflows and failover mechanisms',
          impact: 'System uptime: 98.8% → 99.88%',
          icon: CheckCircle,
        },
        {
          text: 'Diagnosed production performance bottleneck via schema & SQL optimization',
          impact: 'CPU utilization: 100% → 20%',
          icon: Zap,
        },
      ],
    },
    {
      company: 'GE Healthcare',
      role: 'DevOps Engineer Intern',
      period: 'Aug 2021 - Jul 2022',
      type: 'Internship',
      location: 'Bangalore, India',
      logo: '/images/ge.jpeg',
      achievements: [
        {
          text: 'Designed centralized CI/CD pipeline for 15+ applications (Perforce to GitLab migration)',
          impact: '85% decrease in deployment times',
          icon: TrendingUp,
        },
        {
          text: 'Optimized Python ML pipelines via containerization on AWS Lambda & Docker',
          impact: 'Runtime: 2 hours → 48 minutes (60% faster)',
          icon: Clock,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-32 bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">Career</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Work Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            3+ years of building scalable, production-ready systems at GE Healthcare
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 bg-gradient-to-br from-purple-100/60 via-purple-50/40 to-white rounded-2xl border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/40 to-transparent rounded-full blur-3xl -z-0" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl -z-0" />
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 w-28 h-28 rounded-full bg-white border-2 border-purple-200 shadow-lg shadow-purple-100/50 overflow-hidden flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover p-3"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <p className="text-purple-600 font-semibold text-lg mb-3">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, achIndex) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * achIndex }}
                        className="flex gap-3 p-4 bg-gradient-to-br from-purple-50/80 to-white rounded-xl hover:from-purple-100/60 hover:to-purple-50/50 transition-all duration-300 border border-purple-100"
                      >
                        <div className="shrink-0 mt-0.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-slate-700" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-700 text-sm mb-2 leading-relaxed">{achievement.text}</p>
                          <span className="inline-block px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-700">
                            {achievement.impact}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}