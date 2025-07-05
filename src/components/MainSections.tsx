'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Rocket, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MainSections = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = gsap.utils.toArray('.main-section-card');
    
    sections.forEach((section: any, index) => {
      gsap.fromTo(section, 
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const sections = [
    {
      number: '01',
      icon: Code,
      title: 'Frontend Engineering',
      subtitle: 'Building Experiences That Feel Magical',
      description: 'Crafting responsive, performant web applications with React, TypeScript, and modern frameworks. From concept to deployment, I create interfaces that users love.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'blue',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Conversion Copywriting',
      subtitle: 'Words That Turn Browsers Into Buyers',
      description: 'Writing persuasive copy that connects with your audience and drives action. From landing pages to email sequences, I craft messages that convert.',
      technologies: ['Sales Pages', 'Email Sequences', 'VSLs', 'Ad Copy', 'Content Strategy'],
      color: 'purple',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Freelance Success',
      subtitle: '100+ Happy Clients, Countless Success Stories',
      description: 'Delivering exceptional results for clients across industries. From startups to established businesses, I help bring digital visions to life.',
      technologies: ['Project Management', 'Client Relations', 'Quality Assurance', 'Timely Delivery'],
      color: 'green',
    },
    {
      number: '04',
      icon: Zap,
      title: 'Full-Stack Solutions',
      subtitle: 'Where Code Meets Copy, Magic Happens',
      description: 'Combining technical expertise with persuasive writing to create complete digital experiences that not only look great but also drive business results.',
      technologies: ['End-to-End Development', 'Performance Optimization', 'SEO', 'Analytics'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: 'text-blue-400',
        border: 'border-blue-400/20 hover:border-blue-400/40',
        bg: 'bg-blue-400/5 hover:bg-blue-400/10',
        number: 'text-blue-400',
      },
      purple: {
        icon: 'text-purple-400',
        border: 'border-purple-400/20 hover:border-purple-400/40',
        bg: 'bg-purple-400/5 hover:bg-purple-400/10',
        number: 'text-purple-400',
      },
      green: {
        icon: 'text-green-400',
        border: 'border-green-400/20 hover:border-green-400/40',
        bg: 'bg-green-400/5 hover:bg-green-400/10',
        number: 'text-green-400',
      },
      orange: {
        icon: 'text-orange-400',
        border: 'border-orange-400/20 hover:border-orange-400/40',
        bg: 'bg-orange-400/5 hover:bg-orange-400/10',
        number: 'text-orange-400',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            What I Bring to the Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            I provide digital solutions with integrity and efficiency through my different expertise areas.
          </motion.p>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const colorClasses = getColorClasses(section.color);
            const Icon = section.icon;

            return (
              <motion.div
                key={section.number}
                className={`main-section-card group p-8 rounded-2xl border ${colorClasses.border} ${colorClasses.bg} transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`text-6xl font-bold ${colorClasses.number} opacity-20 group-hover:opacity-40 transition-opacity`}>
                      {section.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">
                      {section.subtitle}
                    </h4>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {section.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-slate-800 text-gray-300 rounded-full border border-slate-700"
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
      </div>
    </section>
  );
};

export default MainSections;
