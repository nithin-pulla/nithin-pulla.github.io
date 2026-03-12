import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Cloud, Database, Settings } from 'lucide-react';

const skillLogos = {
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C/C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Bash/Shell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'YOLOv5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Pandas/NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Django/Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
  'Ansible': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
};

const categories = [
  { id: 'all', label: 'All', icon: Settings },
  { id: 'languages', label: 'Languages', icon: Code },
  { id: 'ml', label: 'ML / AI', icon: Brain },
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'devops', label: 'DevOps', icon: Cloud },
  { id: 'data', label: 'Data & Cloud', icon: Database },
];

const skills = [
  { name: 'JavaScript', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'C/C++', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'Bash/Shell', category: 'languages' },
  { name: 'TensorFlow', category: 'ml' },
  { name: 'PyTorch', category: 'ml' },
  { name: 'Keras', category: 'ml' },
  { name: 'OpenCV', category: 'ml' },
  { name: 'YOLOv5', category: 'ml' },
  { name: 'Pandas/NumPy', category: 'ml' },
  { name: 'React', category: 'web' },
  { name: 'Node.js', category: 'web' },
  { name: 'Next.js', category: 'web' },
  { name: 'Spring Boot', category: 'web' },
  { name: 'Django/Flask', category: 'web' },
  { name: 'GraphQL', category: 'web' },
  { name: 'REST APIs', category: 'web' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Jenkins', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'Ansible', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'AWS', category: 'data' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'SQL', category: 'data' },
  { name: 'Kafka', category: 'data' },
  { name: 'Linux', category: 'data' },
  { name: 'Grafana', category: 'data' },
];

const expertiseCards = [
  {
    title: 'Full-Stack Development',
    desc: 'Robust end-to-end applications with modern frameworks and scalable architectures.',
    icon: '⚡',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Resilient cloud infrastructure with automated CI/CD pipelines and orchestration.',
    icon: '☁️',
  },
  {
    title: 'Machine Learning',
    desc: 'Intelligent systems with deep learning, computer vision, and NLP technologies.',
    icon: '🧠',
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/50 mb-6">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/40'
                    : 'border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 gap-3"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2, delay: i * 0.02 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="aspect-square flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-200 cursor-default"
            >
              <img
                src={skillLogos[skill.name]}
                alt={skill.name}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-[9px] sm:text-[10px] text-white/35 font-medium text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise highlights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {expertiseCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-violet-500/5 hover:border-violet-500/20 transition-all duration-200"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
