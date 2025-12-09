import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Cloud, Database, Settings } from 'lucide-react';

// Official technology logo URLs from CDN
const skillLogos = {
  // Languages
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C/C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Bash/Shell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  // ML/AI
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'YOLOv5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Pandas/NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  // Web
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Django/Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  // DevOps
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
  'Ansible': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  // Data & Cloud
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Settings },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'ml', label: 'ML/AI', icon: Brain },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'devops', label: 'DevOps', icon: Cloud },
    { id: 'data', label: 'Data & Cloud', icon: Database },
  ];

  const skills = [
    // Languages
    { name: 'JavaScript', category: 'languages', level: 95 },
    { name: 'Python', category: 'languages', level: 95 },
    { name: 'Java', category: 'languages', level: 90 },
    { name: 'C/C++', category: 'languages', level: 85 },
    { name: 'TypeScript', category: 'languages', level: 88 },
    { name: 'Bash/Shell', category: 'languages', level: 85 },
    
    // ML/AI
    { name: 'TensorFlow', category: 'ml', level: 88 },
    { name: 'PyTorch', category: 'ml', level: 90 },
    { name: 'Keras', category: 'ml', level: 85 },
    { name: 'OpenCV', category: 'ml', level: 85 },
    { name: 'YOLOv5', category: 'ml', level: 80 },
    { name: 'Pandas/NumPy', category: 'ml', level: 92 },
    
    // Web
    { name: 'React', category: 'web', level: 95 },
    { name: 'Node.js', category: 'web', level: 90 },
    { name: 'Next.js', category: 'web', level: 88 },
    { name: 'Spring Boot', category: 'web', level: 88 },
    { name: 'Django/Flask', category: 'web', level: 85 },
    { name: 'GraphQL', category: 'web', level: 85 },
    { name: 'REST APIs', category: 'web', level: 95 },
    
    // DevOps
    { name: 'Docker', category: 'devops', level: 95 },
    { name: 'Kubernetes', category: 'devops', level: 90 },
    { name: 'Jenkins', category: 'devops', level: 92 },
    { name: 'Terraform', category: 'devops', level: 85 },
    { name: 'Ansible', category: 'devops', level: 80 },
    { name: 'CI/CD', category: 'devops', level: 95 },
    
    // Data & Cloud
    { name: 'AWS', category: 'data', level: 92 },
    { name: 'PostgreSQL', category: 'data', level: 90 },
    { name: 'SQL', category: 'data', level: 95 },
    { name: 'Kafka', category: 'data', level: 82 },
    { name: 'Linux', category: 'data', level: 90 },
    { name: 'Grafana', category: 'data', level: 85 },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      languages: 'from-violet-500 to-purple-500',
      ml: 'from-orange-500 to-red-500',
      web: 'from-blue-500 to-cyan-500',
      devops: 'from-green-500 to-emerald-500',
      data: 'from-pink-500 to-rose-500',
    };
    return colors[category] || 'from-blue-500 to-cyan-500';
  };

  return (
    <section id="skills" className="relative py-32 bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 text-sm font-medium uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative aspect-square flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg cursor-pointer"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex flex-col items-center gap-2">
                <img 
                  src={skillLogos[skill.name]} 
                  alt={skill.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <span className="text-[10px] sm:text-xs text-slate-500 group-hover:text-slate-700 font-medium text-center leading-tight transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { 
              title: 'Full-Stack Development', 
              desc: 'Building robust end-to-end applications with modern frameworks and scalable architectures',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              gradient: 'from-blue-500 to-cyan-500'
            },
            { 
              title: 'Cloud & DevOps', 
              desc: 'Designing resilient cloud infrastructure with automated CI/CD pipelines and orchestration',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
              gradient: 'from-green-500 to-emerald-500'
            },
            { 
              title: 'Machine Learning', 
              desc: 'Developing intelligent systems with deep learning and computer vision technologies',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
              gradient: 'from-orange-500 to-red-500'
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-3.5 shadow-lg shadow-blue-500/20 group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300`}>
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}