import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Layers, Zap, Brain, Cloud, Code, ChevronDown, ChevronUp, Shield, Activity, FileText, Mic, Server } from 'lucide-react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const projects = [
    {
      id: 1,
      title: 'EMNIST Character Recognition System',
      description: 'Production-grade EMNIST handwritten character recognition platform built around modular CNN ensembles and real-time inference services.',
      impact: '1000+ real-time predictions/minute',
      tech: ['Python 3.8+', 'PyTorch', 'FastAPI', 'Docker', 'CNN'],
      category: 'ML/AI',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-600',
      features: ['Factory-driven configuration switching', 'Real-time predictions with monitoring', 'Automated early stopping', 'Dockerized deployment with web UI'],
      link: 'https://github.com/nithin-pulla/emnist-recognition-system'
    },
    {
      id: 2,
      title: 'Object Detection Benchmarking & Analysis',
      description: 'Benchmarking suite contrasting SSD300, Faster R-CNN, and YOLOv5s on Pascal VOC 2012 with unified metrics, speed tests, and reporting assets.',
      impact: 'Unified metrics for 3 major architectures',
      tech: ['PyTorch', 'Pascal VOC', 'YOLOv5', 'Faster R-CNN', 'SSD300'],
      category: 'MLOps Research',
      icon: Activity,
      gradient: 'from-orange-500 to-red-600',
      features: ['Standardized evaluation pipelines', 'Kaggle-ready notebooks', 'Reproducible seed handling', 'Unified mAP/FPS metrics'],
      link: 'https://github.com/nithin-pulla/object-detection-benchmarking-and-analysis'
    },
    {
      id: 3,
      title: 'AI-Powered Pothole Detection',
      description: 'Real-time pothole detection system using YOLOv5 ResNet model for highway safety and driver alerts with 40% lower inference latency.',
      impact: '74.5% mAP with 40% lower latency',
      tech: ['YOLOv5', 'React', 'Django', 'Computer Vision'],
      category: 'Computer Vision',
      icon: Brain,
      gradient: 'from-violet-500 to-purple-600',
      features: ['15K+ annotated highway images', 'Real-time CV pipeline', '21% accuracy boost over baseline', 'Geo-tagged alert system'],
      link: '#'
    },
    {
      id: 4,
      title: 'Encrypted Federated Learning for Medical IoT',
      description: 'HIPAA-compliant federated learning system with homomorphic encryption for privacy-preserving medical data processing.',
      impact: 'Only 5% accuracy drop under encryption',
      tech: ['PyTorch', 'CKKS Encryption', 'CUDA', 'Federated Learning'],
      category: 'Privacy-Preserving ML',
      icon: Shield,
      gradient: 'from-emerald-500 to-teal-600',
      features: ['CKKS-encrypted PyTorch pipeline', 'Optimized vector ops', 'Mobile/AR deployment support', 'Privacy-preserving processing'],
      link: '#'
    },
    {
      id: 5,
      title: 'WellSync: Diabetes Risk Analysis',
      description: 'Big data-driven diabetes risk analysis with generative AI chatbot using PySpark Random Forest and LLM transformer architecture.',
      impact: '88.5% accuracy on BRFSS dataset',
      tech: ['PySpark', 'Random Forest', 'LLM', 'SageMaker'],
      category: 'Big Data Analytics',
      icon: Activity,
      gradient: 'from-rose-500 to-pink-600',
      features: ['Distributed Apache Spark cluster', 'Generative AI chatbot', 'SageMaker optimization', '25% inference cost reduction'],
      link: '#'
    },
    {
      id: 6,
      title: 'MyCritters Pet Services Platform',
      description: 'Comprehensive pet service platform with AI-powered features, scheduling systems, and responsive full-stack architecture.',
      impact: 'Full-stack platform with AI integration',
      tech: ['React', 'NextJS', 'TypeScript', 'GraphQL'],
      category: 'Full-Stack Development',
      icon: Layers,
      gradient: 'from-indigo-500 to-blue-600',
      features: ['Veterinarian scheduling', 'AI-powered recommendations', 'Responsive UI components', 'REST API integration'],
      link: '#'
    },
    {
      id: 7,
      title: 'Cloud VoIP Protocol Stack',
      description: 'Modular SIP/RTP VoIP stack optimization for secure, low-latency real-time communication with Kafka logging.',
      impact: 'Secure low-latency delivery',
      tech: ['C++', 'SIP/RTP', 'Kafka', 'Network Protocols'],
      category: 'Network Engineering',
      icon: Server,
      gradient: 'from-cyan-500 to-sky-600',
      features: ['Modular C++ stack', 'Secure TLS delivery', 'Jitter buffers & NAT traversal', 'Real-time diagnostics'],
      link: '#'
    },
    {
      id: 8,
      title: 'Instruction-Tuned Summarization',
      description: 'Fine-tuned BART model on BillSum using instruction supervision for production-grade text summarization.',
      impact: 'Production-grade summarization',
      tech: ['BART', 'LLaMA-2', 'PyTorch', 'Transformers'],
      category: 'NLP Research',
      icon: FileText,
      gradient: 'from-amber-500 to-yellow-600',
      features: ['Fine-tuned BART-base', 'Instruction supervision', 'QA workflows for LLaMA-2', 'Downstream evaluation'],
      link: '#'
    },
    {
      id: 9,
      title: 'Speaker Recognition System',
      description: 'Production-grade speaker identification stack pairing MFCC-based signal engineering with Gaussian Mixtures and SVM backends.',
      impact: '97.14% accuracy with GMM',
      tech: ['Python', 'PyTorch', 'Librosa', 'GMM', 'SVM'],
      category: 'Audio Intelligence',
      icon: Mic,
      gradient: 'from-fuchsia-500 to-purple-600',
      features: ['40-dimensional MFCC embeddings', 'Dual-model inference (GMM/SVM)', 'Unknown speaker gating', 'Secure deployment heuristics'],
      link: 'https://github.com/nithin-pulla/speaker-recognition-system'
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
                      <div className="flex gap-2">
                        {project.link && project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-slate-100 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            title="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700 flex items-center">
                          {project.category}
                        </span>
                      </div>
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