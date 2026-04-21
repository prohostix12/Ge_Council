'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', count: 15, img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=300&q=80&auto=format' },
  { name: 'Germany',        flag: '🇩🇪', count: 18, img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&q=80&auto=format' },
  { name: 'France',         flag: '🇫🇷', count: 12, img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&q=80&auto=format' },
  { name: 'Netherlands',    flag: '🇳🇱', count: 8,  img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=300&q=80&auto=format' },
  { name: 'Italy',          flag: '🇮🇹', count: 10, img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&q=80&auto=format' },
  { name: 'Spain',          flag: '🇪🇸', count: 9,  img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&q=80&auto=format' },
  { name: 'Switzerland',    flag: '🇨🇭', count: 6,  img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=300&q=80&auto=format' },
  { name: 'Sweden',         flag: '🇸🇪', count: 7,  img: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=300&q=80&auto=format' },
  { name: 'Austria',        flag: '🇦🇹', count: 5,  img: 'https://images.unsplash.com/photo-1516550135131-fe3dcbe0b36e?w=300&q=80&auto=format' },
  { name: 'Belgium',        flag: '🇧🇪', count: 6,  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80&auto=format' },
  { name: 'Ireland',        flag: '🇮🇪', count: 5,  img: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=300&q=80&auto=format' },
  { name: 'Portugal',       flag: '🇵🇹', count: 4,  img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=300&q=80&auto=format' },
];

const universities = [
  'University of Oxford','University of Cambridge','Sorbonne University','TU Munich',
  'University of Amsterdam','ETH Zurich','KU Leuven','University of Edinburgh',
  'Bocconi University','IE Business School','Leiden University','Uppsala University',
];

export default function Universities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(8,18,48,0.70) 0%, rgba(14,30,65,0.70) 50%, rgba(8,18,48,0.70) 100%)' }}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.10) 0%, transparent 70%)' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Decorative dot grids */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.9) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.9) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="badge badge-red mb-4">Our Network</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            100+ Partner <span className="text-gradient">Universities</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">Across 12 European countries — no gatekeeping, no hidden fees</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </motion.div>

        {/* Country grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-14">
          {countries.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, scale: 0.82, y: 24 }} animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden group cursor-default aspect-[3/4]"
              style={{ border: '1px solid rgba(59,130,246,0.18)' }}>

              {/* Background image */}
              <div className="absolute inset-0 transition-all duration-600 group-hover:scale-115 opacity-40 group-hover:opacity-65"
                style={{ backgroundImage: `url('${c.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1d44] via-[#0c1d44]/50 to-[#0c1d44]/10" />

              {/* Count badge top right */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold text-primary"
                style={{ background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.30)' }}>
                {c.count}
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-end p-3 text-center">
                <motion.div
                  className="text-3xl mb-1.5"
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >{c.flag}</motion.div>
                <div className="text-white/85 text-xs font-semibold leading-tight">{c.name}</div>
                <div className="text-primary/65 text-[10px] mt-0.5">{c.count} universities</div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/35 transition-all duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 0 transparent' }} />
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-3">
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #1A3060, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #1A3060, transparent)' }} />
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...universities, ...universities].map((uni, i) => (
              <div key={i}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-white/55 text-sm font-medium flex-shrink-0 hover:text-white/85 transition-all cursor-default"
                style={{ background: 'rgba(17,37,73,0.85)', border: '1px solid rgba(59,130,246,0.20)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                {uni}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
