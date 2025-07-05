'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, BookOpen, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSkills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('technical');

  const tabs = [
    { id: 'technical', label: 'Technical Skills', icon: Code },
    { id: 'copywriting', label: 'Copywriting', icon: Target },
    { id: 'tools', label: 'Tools & Platforms', icon: Zap },
  ];

  const skillsData = {
    technical: [
      { name: 'JavaScript/TypeScript', level: 95, category: 'Languages' },
      { name: 'React.js', level: 90, category: 'Frontend' },
      { name: 'Next.js', level: 85, category: 'Frontend' },
      { name: 'Node.js', level: 80, category: 'Backend' },
      { name: 'Tailwind CSS', level: 90, category: 'Styling' },
      { name: 'Firebase', level: 85, category: 'Backend' },
      { name: 'MongoDB', level: 75, category: 'Database' },
      { name: 'Three.js', level: 70, category: 'Graphics' },
    ],
    copywriting: [
      { name: 'Sales Pages', level: 90, category: 'Conversion' },
      { name: 'Email Sequences', level: 85, category: 'Email Marketing' },
      { name: 'Ad Copy', level: 80, category: 'Advertising' },
      { name: 'Content Strategy', level: 85, category: 'Strategy' },
      { name: 'VSL Scripts', level: 75, category: 'Video' },
      { name: 'Landing Pages', level: 90, category: 'Web Copy' },
      { name: 'Social Media', level: 80, category: 'Social' },
      { name: 'Brand Voice', level: 85, category: 'Branding' },
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, category: 'Version Control' },
      { name: 'Figma', level: 80, category: 'Design' },
      { name: 'Vercel/Netlify', level: 85, category: 'Deployment' },
      { name: 'Firebase Console', level: 85, category: 'Backend' },
      { name: 'VS Code', level: 95, category: 'Development' },
      { name: 'Postman', level: 75, category: 'API Testing' },
      { name: 'Chrome DevTools', level: 85, category: 'Debugging' },
      { name: 'Notion', level: 80, category: 'Productivity' },
    ],
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Animate skill bars
    const skillBars = gsap.utils.toArray('.skill-bar');
    skillBars.forEach((bar: unknown) => {
      const element = bar as HTMLElement;
      const level = element.dataset.level;
      gsap.fromTo(element,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeTab]);

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical abilities and creative expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Me */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  I&apos;m a 4th year B.Tech ECE student who discovered my passion for creating digital experiences.
                  What started as curiosity about web development has evolved into expertise across multiple domains.
                </p>
                
                <p>
                  My unique combination of technical skills and copywriting expertise allows me to build products 
                  that not only function flawlessly but also communicate effectively with users.
                </p>
                
                <p>
                  With over 100 satisfied clients and 2+ years of hands-on experience, I&apos;ve learned that the best
                  solutions come from understanding both the technical requirements and the human psychology behind them.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">B.Tech ECE (4th Year)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">2+ Years Coding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">1+ Year Copywriting</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-4 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-400/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="mb-2">
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="skill-bar bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
                    
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {skill.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I&apos;m constantly learning new frameworks,
              exploring emerging technologies, and refining my craft to deliver cutting-edge solutions 
              that meet tomorrow&apos;s challenges today.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;
