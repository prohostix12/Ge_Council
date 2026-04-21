'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { label: 'Partner Universities', value: 100,   suffix: '+', icon: '🎓', accent: '#3B82F6',
    img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=80&auto=format',
    desc: 'Across 12 European nations' },
  { label: 'Students Enrolled',    value: 10000, suffix: '+', icon: '👩‍🎓', accent: '#FF3B3B',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80&auto=format',
    desc: 'Dreams fulfilled since 2015' },
  { label: 'European Countries',   value: 12,    suffix: '',  icon: '🌍', accent: '#3B82F6',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80&auto=format',
    desc: 'From UK to Switzerland' },
  { label: 'Goal Achievement Rate', value: 95,   suffix: '%', icon: '🎯', accent: '#FF3B3B',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80&auto=format',
    desc: 'Unmatched success record' },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: 'rgba(10,22,55,0.70)' }}>
      {/* Decorative top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />

      {/* Decorative corner dots */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
      <div className="absolute bottom-8 right-8 w-24 h-24 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="badge badge-blue mb-4">Our Impact</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Numbers That <span className="text-gradient">Tell Our Story</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="relative rounded-2xl overflow-hidden group cursor-default"
              style={{ background: 'rgba(12,26,60,0.92)', border: '1px solid rgba(59,130,246,0.18)' }}>

              {/* Colored top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)` }} />

              {/* Background image */}
              <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 opacity-[0.18] group-hover:opacity-30"
                style={{ backgroundImage: `url('${stat.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(to top, rgba(8,20,50,0.95) 30%, rgba(8,20,50,0.6) 70%, rgba(8,20,50,0.3) 100%)` }} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${stat.accent}18 0%, transparent 70%)` }} />

              <div className="relative p-6 md:p-8 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="font-display font-bold text-4xl md:text-5xl text-gradient mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-white/35 text-xs">{stat.desc}</div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `inset 0 0 0 1px ${stat.accent}45` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
