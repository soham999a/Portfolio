'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Devine Studio - Digital Agency',
      category: 'frontend',
      featured: true,
      image: '/Agency.png',
      description: 'Premium digital agency website with stunning gradient backgrounds, smooth animations, and modern UI. Built for creating digital experiences that inspire and innovate.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Modern UI'],
      liveUrl: 'https://getdivine.vercel.app/',
      githubUrl: '', // Personal agency - no GitHub link
    },
    {
      id: 2,
      title: 'Startup Accelerator Platform',
      category: 'fullstack',
      featured: true,
      image: '/startup acelerator.png',
      description: 'Complete ecosystem for founders, mentors, and investors to connect, pitch, and grow together with real-time messaging and WebSocket-powered live updates.',
      technologies: ['React 18', 'TypeScript', 'Node.js', 'MongoDB', 'WebSockets', 'Prisma'],
      liveUrl: 'https://startup-accelator-k9swoo186-dassoham345-gmailcoms-projects.vercel.app/dashboard',
      githubUrl: 'https://github.com/soham999a/startup-accelator.git',
    },
    {
      id: 3,
      title: 'Interview Hub with AI',
      category: 'ai',
      featured: true,
      image: '/Interview hub.png',
      description: 'AI-powered interview preparation platform with voice integration, real-time feedback, and 3D interactive UI for immersive practice sessions.',
      technologies: ['Next.js', 'Google Gemini AI', 'Vapi', 'Three.js', 'Firebase', 'TypeScript'],
      liveUrl: 'https://llama3-with-interview-agent.vercel.app/',
      githubUrl: 'https://github.com/soham999a/llama3-with-interview-agent.git',
    },
    {
      id: 4,
      title: 'JUGAADU - Local Services',
      category: 'fullstack',
      featured: true,
      image: '/Jugaadu.png',
      description: 'Local services platform built for Bharat, connecting skilled workers with customers through intuitive booking, chat, and rating systems.',
      technologies: ['React', 'Node.js', 'Firebase', 'PWA', 'TailwindCSS'],
      liveUrl: 'https://local-4d650.web.app/',
      githubUrl: 'https://github.com/soham999a/service-marketplace.git',
    },
    {
      id: 5,
      title: 'Solo Leveling Gamified Productivity',
      category: 'frontend',
      featured: true,
      image: '/Solo leveling project .png',
      description: 'Gamified productivity platform inspired by Solo Leveling with 3D avatars, XP system, and AI-powered personalized insights.',
      technologies: ['React Three Fiber', 'Google Gemini AI', 'Firebase', 'Zustand', 'TailwindCSS'],
      liveUrl: 'https://solo-leveling-r71j-az75egvzu-dassoham345-gmailcoms-projects.vercel.app/dashboard',
      githubUrl: 'https://github.com/soham999a/solo-leveling-.git',
    },
    {
      id: 6,
      title: 'Farm Simulator 2D/3D',
      category: 'game',
      featured: false,
      image: '/Farm simulator.png',
      description: 'Interactive farming simulator with realistic crop growth, weather systems, and seamless 2D/3D mode switching using Three.js.',
      technologies: ['React', 'Three.js', 'WebGL', 'Firebase', 'Physics Simulation'],
      liveUrl: 'https://farming-simulator-one.vercel.app/',
      githubUrl: 'https://github.com/soham999a/Farming-simulator.git',
    },
    {
      id: 7,
      title: 'Cloud Storage Vault',
      category: 'fullstack',
      featured: false,
      image: '/Cloud Secure vault .png',
      description: 'Secure cloud storage solution with 3D vault interface, file encryption, and expiring share links for enhanced security.',
      technologies: ['React', 'Three.js', 'Firebase', 'TailwindCSS', 'File Encryption'],
      liveUrl: 'https://cloud-storage-vault-cjboe6ndp-dassoham345-gmailcoms-projects.vercel.app/3d-vault.html',
      githubUrl: 'https://github.com/soham999a/cloud-storage-vault.git',
    },
    {
      id: 8,
      title: 'Member Management System',
      category: 'frontend',
      featured: false,
      image: '/Member website.png',
      description: 'Modern member tracking web application with dark mode, analytics dashboard, and comprehensive CRUD functionality.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Bootstrap', 'Framer Motion'],
      liveUrl: 'https://cool-7955f.web.app/',
      githubUrl: 'https://github.com/soham999a/cool.git',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'game', label: 'Games' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // const featuredProjects = projects.filter(project => project.featured);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const projectCards = gsap.utils.toArray('.project-card');
    
    projectCards.forEach((card: unknown, index) => {
      const element = card as HTMLElement;
      gsap.fromTo(element,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredProjects]);

  return (
    <section id="projects" ref={sectionRef} className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced Mobile */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my technical expertise and creative problem-solving across various domains
          </motion.p>
        </div>

        {/* Filter Buttons - Enhanced Mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                filter === filterItem.key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white hover:scale-105'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - TRULY Mobile Friendly */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`project-card group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-2xl ${
                project.featured ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Star size={14} />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  priority={project.featured}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-base md:text-lg mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm bg-slate-700 text-blue-300 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 text-sm bg-slate-700 text-blue-300 rounded-full font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-base font-medium">Live Demo</span>
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-base font-medium">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
