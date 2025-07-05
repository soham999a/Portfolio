'use client';

import { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ClientSuccess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const metrics = useMemo(() => [
    {
      icon: Users,
      number: 100,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Successful projects delivered across various industries',
    },
    {
      icon: Clock,
      number: 2,
      suffix: '+',
      label: 'Years Experience',
      description: 'Continuous learning and professional growth',
    },
    {
      icon: Award,
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Consistently exceeding client expectations',
    },
    {
      icon: TrendingUp,
      number: 85,
      suffix: '%',
      label: 'Repeat Clients',
      description: 'Long-term partnerships and ongoing collaborations',
    },
  ], []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'Soham delivered an exceptional website that not only looks stunning but also converts visitors into customers. His copywriting skills are top-notch!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'InnovateLab',
      content: 'Working with Soham was a game-changer for our startup. He understood our vision and created a platform that perfectly represents our brand.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'E-commerce Manager',
      company: 'RetailPro',
      content: 'The combination of technical expertise and persuasive copywriting is rare. Soham increased our conversion rate by 40% within the first month!',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Animate counters
    counterRefs.current.forEach((counter, index) => {
      if (counter) {
        const metric = metrics[index];
        gsap.fromTo(counter, 
          { textContent: 0 },
          {
            textContent: metric.number,
            duration: 2,
            ease: 'back.out(1.7)',
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // Animate testimonial cards
    const testimonialCards = gsap.utils.toArray('.testimonial-card');
    testimonialCards.forEach((card: unknown, index) => {
      const element = card as HTMLElement;
      gsap.fromTo(element,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.2,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [metrics]);

  return (
    <section ref={sectionRef} className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Building lasting relationships through exceptional work and consistent results
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 rounded-2xl mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <span 
                    ref={el => { counterRefs.current[index] = el; }}
                    className="counter"
                  >
                    0
                  </span>
                  <span className="text-blue-400">{metric.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-gray-500">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-slate-800 pt-4">
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join My Success Stories?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let&apos;s work together to create something amazing that drives real results for your business.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccess;
