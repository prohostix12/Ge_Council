'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Search, BookOpen, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Share Your Goals',   desc: 'Tell us your educational aspirations, budget, and preferences. Our counsellors listen carefully to every detail.', color: '#3B82F6', img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=80&auto=format', tag: 'Step 1' },
  { icon: Search,        title: 'Discover Programs',  desc: 'We match you with the best-fit programs from 100+ partner universities across Europe.', color: '#FF3B3B', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&auto=format', tag: 'Step 2' },
  { icon: BookOpen,      title: 'Begin Your Studies', desc: 'Complete paperwork, visas, and enrollment with full support from our dedicated expert team.', color: '#3B82F6', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&auto=format', tag: 'Step 3' },
  { icon: Trophy,        title: 'Achieve Success',    desc: 'Graduate with global credentials. We support you every step — from inquiry to graduation.', color: '#FF3B3B', img: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80&auto=format', tag: 'Step 4' },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden" style={{ background: 'rgba(7,16,44,0.68)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="badge badge-blue mb-4">Your Journey</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            4 Steps to Your <span className="text-gradient">Global Future</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto mb-10">
            We&apos;ve guided 10,000+ students through every phase of international education
          </p>

          {/* Step progress indicator */}
          <div className="flex items-center justify-center gap-0 max-w-xs mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', bounce: 0.4 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 relative"
                  style={{ background: i % 2 === 0 ? '#3B82F6' : '#FF3B3B', boxShadow: `0 0 16px ${i % 2 === 0 ? 'rgba(59,130,246,0.5)' : 'rgba(255,59,59,0.5)'}` }}
                >
                  {i + 1}
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.45 + i * 0.15, duration: 0.4 }}
                    style={{ transformOrigin: 'left', width: 48, height: 2,
                      background: 'linear-gradient(90deg, rgba(59,130,246,0.6), rgba(59,130,246,0.2))' }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title}
                initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="relative rounded-3xl overflow-hidden group min-h-[300px] cursor-default"
                style={{ background: 'rgba(10,22,54,0.93)', border: '1px solid rgba(59,130,246,0.18)' }}>

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${step.color} 50%, transparent 100%)` }} />

                {/* Background image */}
                <div className="absolute inset-0 transition-all duration-700 group-hover:scale-105 opacity-[0.55] group-hover:opacity-[0.70]"
                  style={{ backgroundImage: `url('${step.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, rgba(7,18,46,0.60) 0%, rgba(7,18,46,0.35) 50%, rgba(7,18,46,0.65) 100%)` }} />

                {/* Step number watermark */}
                <div className="absolute top-4 right-5 font-display font-black text-8xl leading-none select-none pointer-events-none"
                  style={{ color: step.color, opacity: 0.12 }}>
                  {i + 1}
                </div>

                {/* Tag badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                    style={{ background: `${step.color}20`, color: step.color, border: `1px solid ${step.color}35` }}>
                    {step.tag}
                  </span>
                </div>

                <div className="relative p-7 md:p-9 flex flex-col h-full justify-end">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mt-auto"
                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}35`,
                      boxShadow: `0 0 20px ${step.color}20` }}>
                    <Icon size={24} style={{ color: step.color }} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{step.desc}</p>

                  <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: step.color }}>
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ boxShadow: `inset 0 0 0 1px ${step.color}40, 0 0 40px ${step.color}15` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
