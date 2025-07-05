'use client';

import { useEffect } from 'react';
// Removed unused imports
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import ClientSuccess from '@/components/ClientSuccess';
import AboutSkills from '@/components/AboutSkills';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const initSmoothScrolling = async () => {
      const Lenis = (await import('lenis')).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initSmoothScrolling();
  }, []);

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MainSections />
      <ProjectsShowcase />
      <ClientSuccess />
      <AboutSkills />
      <ContactSection />
    </div>
  );
}
