import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Layers, Zap, Brain, Cloud, Code, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const projects = [
    {
      id: 1,
      title: 'MyCritters Pet Services Platform',
      description: 'Comprehensive web application streamlining pet service workflows for veterinarians, groomers, and trainers with AI-powered recommendations.',
      impact: 'Full product lifecycle with role-based access control',
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'Apache'],
      category: 'Full-Stack',
      icon: Layers,
      gradient: 'from-violet-500 to-purple-600',
      features: ['Role-based authentication', 'AI recommendations', 'Responsive UI', 'Agile workflows'],
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Reliability Toolkit',
      description: 'Terraform modules automating AWS ECS, Kubernetes, and Aurora PostgreSQL provisioning with Kafka-based distributed telemetry.',
      impact: '50% reduction in recovery time',
      tech: ['Terraform', 'AWS ECS', 'Kubernetes', 'Kafka', 'PostgreSQL'],
      category: 'DevOps',
      icon: Cloud,
      gradient: 'from-green-500 to-emerald-600',
      features: ['Infrastructure as Code', 'Fault detection', 'Queue monitoring', 'Standardized deployment'],
    },
    {
      id: 3,
      title: 'AI-Powered Pothole Detection System',
      description: 'End-to-end intelligent road monitoring platform using YOLOv5 computer vision with automated geotagged alerts.',
      impact: '74.5% mAP @ 15 FPS on 10k images',
      tech: ['YOLOv5', 'React', 'Django', 'Python', 'REST APIs'],
      category: 'ML/AI',
      icon: Brain,
      gradient: 'from-orange-500 to-red-600',
      features: ['Real-time detection', 'Geotagged alerts', 'Full-stack architecture', '10k image dataset'],
    },
    {
      id: 4,
      title: 'EMNIST Character Recognition System',
      description: 'Production-ready ML pipeline with PyTorch CNNs achieving 94.2% accuracy across 36 handwritten character classes.',
      impact: '1000+ real-time predictions/minute',
      tech: ['PyTorch', 'Flask', 'Docker', 'CNN', 'NLP'],
      category: 'ML/AI',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-600',
      features: ['94.2% accuracy', 'REST API serving', 'Containerized microservices', 'Ensemble methods'],
    },
    {
      id: 5,
      title: 'Intelligent Cloud Log Analysis Platform',
      description: 'Cloud-native system for AWS CloudTrail with GraphQL, SageMaker, and NLP-based querying capabilities.',
      impact: '40% reduction in troubleshooting time',
      tech: ['AWS', 'GraphQL', 'SageMaker', 'React', 'Amazon Comprehend'],
      category: 'Cloud',
      icon: Code,
      gradient: 'from-pink-500 to-rose-600',
      features: ['NLP-based querying', 'Analytics dashboard', 'CloudTrail integration', 'Real-time insights'],
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-slate-900">Featured </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            cloud infrastructure, and machine learning systems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className={`text-slate-600 text-sm ${!expandedDescriptions[project.id] ? 'line-clamp-2' : ''}`}>
                        {project.description}
                      </p>
                      {project.description.length > 100 && (
                        <button
                          onClick={() => setExpandedDescriptions(prev => ({ ...prev, [project.id]: !prev[project.id] }))}
                          className="text-blue-600 text-xs font-medium mt-1 flex items-center gap-1 hover:underline"
                        >
                          {expandedDescriptions[project.id] ? (
                            <>Show less <ChevronUp className="w-3 h-3" /></>
                          ) : (
                            <>Read more <ChevronDown className="w-3 h-3" /></>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Impact Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600">{project.impact}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-md text-xs text-slate-700 font-medium hover:border-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/nithin-pulla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl shadow-blue-500/20"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}