import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap, Activity, Brain, Shield, Layers, Server, FileText, Mic } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'EMNIST Character Recognition',
    description: 'Production-grade handwritten character recognition with modular CNN ensembles and real-time inference services.',
    impact: '1000+ real-time predictions/min',
    tech: ['Python 3.8+', 'PyTorch', 'FastAPI', 'Docker', 'CNN'],
    category: 'ML / AI',
    icon: Zap,
    link: 'https://github.com/nithin-pulla/emnist-recognition-system',
  },
  {
    id: 2,
    title: 'Object Detection Benchmarking',
    description: 'Benchmarking suite contrasting SSD300, Faster R-CNN, and YOLOv5s on Pascal VOC 2012 with unified metrics.',
    impact: 'Unified metrics for 3 architectures',
    tech: ['PyTorch', 'Pascal VOC', 'YOLOv5', 'Faster R-CNN', 'SSD300'],
    category: 'MLOps Research',
    icon: Activity,
    link: 'https://github.com/nithin-pulla/object-detection-benchmarking-and-analysis',
  },
  {
    id: 3,
    title: 'AI-Powered Pothole Detection',
    description: 'Real-time pothole detection using YOLOv5 ResNet for highway safety with geo-tagged driver alerts.',
    impact: '74.5% mAP · 40% lower latency',
    tech: ['YOLOv5', 'React', 'Django', 'Computer Vision'],
    category: 'Computer Vision',
    icon: Brain,
    link: null,
  },
  {
    id: 4,
    title: 'Encrypted Federated Learning',
    description: 'HIPAA-compliant federated learning with CKKS homomorphic encryption for privacy-preserving medical data.',
    impact: 'Only 5% accuracy drop',
    tech: ['PyTorch', 'CKKS Encryption', 'CUDA', 'Federated Learning'],
    category: 'Privacy ML',
    icon: Shield,
    link: null,
  },
  {
    id: 5,
    title: 'WellSync: Diabetes Risk Analysis',
    description: 'Big data diabetes risk analysis with a generative AI chatbot using PySpark Random Forest on BRFSS.',
    impact: '88.5% accuracy',
    tech: ['PySpark', 'Random Forest', 'LLM', 'SageMaker'],
    category: 'Big Data Analytics',
    icon: Activity,
    link: null,
  },
  {
    id: 6,
    title: 'MyCritters Pet Services',
    description: 'Full-stack pet service platform with AI-powered recommendations, vet scheduling, and GraphQL API.',
    impact: 'Full-stack platform with AI',
    tech: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
    category: 'Full-Stack',
    icon: Layers,
    link: null,
  },
  {
    id: 7,
    title: 'Cloud VoIP Protocol Stack',
    description: 'Modular SIP/RTP VoIP stack with Kafka logging for secure low-latency real-time voice communication.',
    impact: 'Secure low-latency delivery',
    tech: ['C++', 'SIP/RTP', 'Kafka', 'TLS'],
    category: 'Networking',
    icon: Server,
    link: null,
  },
  {
    id: 8,
    title: 'Instruction-Tuned Summarization',
    description: 'Fine-tuned BART on BillSum with instruction supervision for production-grade legal text summarization.',
    impact: 'Production-grade NLP',
    tech: ['BART', 'LLaMA-2', 'PyTorch', 'Transformers'],
    category: 'NLP Research',
    icon: FileText,
    link: null,
  },
  {
    id: 9,
    title: 'Speaker Recognition System',
    description: 'MFCC-based speaker identification pairing Gaussian Mixture and SVM backends for high-accuracy voice ID.',
    impact: '97.14% accuracy with GMM',
    tech: ['Python', 'PyTorch', 'Librosa', 'GMM', 'SVM'],
    category: 'Audio AI',
    icon: Mic,
    link: 'https://github.com/nithin-pulla/speaker-recognition-system',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/70 mb-6">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/55 text-sm max-w-md mx-auto">
            Full-stack systems, cloud infrastructure, and ML research spanning production and academia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative flex flex-col p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-violet-500/5 hover:border-violet-500/25 transition-all duration-300"
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-white/25 hover:text-white hover:bg-white/10 transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full border border-white/15 bg-white/5 text-white/60">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/65 text-xs leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="flex items-center gap-1.5 mb-4">
                  <Zap className="w-3 h-3 text-violet-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-violet-400">{project.impact}</span>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] text-white/55 bg-white/[0.04] border border-white/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/nithin-pulla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-sm font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            View More on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
