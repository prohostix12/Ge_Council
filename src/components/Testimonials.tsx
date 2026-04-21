'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Priya Sharma',    from: 'Delhi → Amsterdam',     university: 'University of Amsterdam', program: 'MSc Data Science',            quote: "GE Council made the impossible feel possible. From finding the right program to my visa approval — they were with me every step. Now I'm living my dream in Amsterdam!", rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', bg: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&q=80' },
  { name: 'Rahul Mehta',     from: 'Mumbai → Munich',       university: 'TU Munich',               program: 'MS Mechanical Engineering',   quote: "No hidden fees, transparent guidance, genuine care. They helped me secure admission to one of Germany's best engineering schools.", rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', bg: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80' },
  { name: 'Ananya Krishnan', from: 'Bangalore → Edinburgh',  university: 'University of Edinburgh', program: 'MBA International Business',  quote: "I was skeptical at first, but GE Council's counsellors truly understand the European university system. My family was worried, but now they're proud!", rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', bg: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80' },
  { name: 'Vikram Patel',    from: 'Ahmedabad → Milan',     university: 'Bocconi University',      program: 'BSc Economics & Management',  quote: 'Getting into Bocconi seemed like a dream. GE Council guided me through every requirement and my application stood out. Forever grateful!', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', bg: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const t = testimonials[current];

  return (
    <section ref={ref} className="py-28 relative overflow-hidden" style={{ background: 'rgba(10,22,55,0.70)' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,59,59,0.06) 0%, transparent 70%)' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Large decorative quote marks in bg */}
      <div className="absolute top-16 left-8 text-[180px] leading-none font-serif text-primary/5 pointer-events-none select-none">&ldquo;</div>
      <div className="absolute bottom-16 right-8 text-[180px] leading-none font-serif text-primary/5 pointer-events-none select-none">&rdquo;</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="badge badge-red mb-4">Student Stories</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Real Stories, <span className="text-gradient-red">Real Impact</span>
          </h2>
          <p className="text-white/45 text-lg">95% of our students achieve their educational goals</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 items-stretch">
          {/* Main testimonial card */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={current}
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden h-full min-h-[380px]"
                style={{ background: 'rgba(10,22,54,0.95)', border: '1px solid rgba(59,130,246,0.22)' }}>

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                  style={{ background: 'linear-gradient(90deg, transparent, #FF3B3B 30%, #3B82F6 70%, transparent)' }} />

                {/* Background image */}
                <div className="absolute inset-0 opacity-25"
                  style={{ backgroundImage: `url('${t.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(7,18,50,0.90) 0%, rgba(7,18,50,0.65) 50%, rgba(7,18,50,0.92) 100%)' }} />

                {/* Quote icon */}
                <div className="absolute top-7 right-7 opacity-30">
                  <Quote size={48} className="text-primary" />
                </div>

                <div className="relative p-8 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-white/85 text-lg md:text-xl leading-relaxed italic mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div>
                    <div className="h-px bg-white/8 mb-6" />
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border-2 border-primary/50 flex-shrink-0 overflow-hidden">
                          <div className="w-full h-full"
                            style={{ backgroundImage: `url('${t.avatar}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        </div>
                        <div>
                          <div className="font-display font-bold text-white">{t.name}</div>
                          <div className="text-primary/80 text-sm">{t.from}</div>
                        </div>
                      </div>
                      <div className="text-right px-4 py-2 rounded-xl" style={{ background: 'rgba(59,130,246,0.10)' }}>
                        <div className="text-white/75 text-sm font-semibold">{t.university}</div>
                        <div className="text-white/40 text-xs">{t.program}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side panel */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <motion.button key={item.name} onClick={() => setCurrent(i)}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className={`text-left rounded-2xl p-4 border transition-all duration-250 ${
                  i === current ? 'border-primary/45' : 'border-primary/12 hover:border-primary/28'
                }`}
                style={{ background: i === current ? 'rgba(59,130,246,0.14)' : 'rgba(10,20,50,0.85)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex-shrink-0 border-2 overflow-hidden"
                    style={{ borderColor: i === current ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.10)' }}>
                    <div className="w-full h-full"
                      style={{ backgroundImage: `url('${item.avatar}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm truncate ${i === current ? 'text-white' : 'text-white/60'}`}>{item.name}</div>
                    <div className="text-white/30 text-xs truncate">{item.from}</div>
                    {/* Stars */}
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: item.rating }).map((_, j) => (
                        <Star key={j} size={9} className={i === current ? 'fill-yellow-400 text-yellow-400' : 'fill-white/20 text-white/20'} />
                      ))}
                    </div>
                  </div>
                  {i === current && (
                    <motion.div layoutId="t-dot" className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                      style={{ boxShadow: '0 0 8px rgba(59,130,246,0.8)' }} />
                  )}
                </div>
              </motion.button>
            ))}

            {/* Navigation */}
            <div className="flex gap-2 mt-auto pt-3">
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))}
                className="w-11 h-11 rounded-full border border-white/12 flex items-center justify-center text-white/50 hover:text-white hover:border-primary/45 transition-all"
                style={{ background: 'rgba(17,37,73,0.6)' }}>
                <ChevronLeft size={16} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))}
                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-blue-500 transition-all"
                style={{ boxShadow: '0 4px 16px rgba(59,130,246,0.4)' }}>
                <ChevronRight size={16} />
              </motion.button>
              <div className="flex items-center gap-1.5 ml-2">
                {testimonials.map((_, i) => (
                  <motion.button key={i} onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-300"
                    style={{ width: i === current ? 20 : 6, height: 6,
                      background: i === current ? '#3B82F6' : 'rgba(255,255,255,0.2)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
