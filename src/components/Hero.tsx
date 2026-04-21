'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, Star, ChevronDown, TrendingUp, Award, Zap } from 'lucide-react';

const WORDS = ['Dream Bigger.', 'Go Global.', 'Aim Higher.', 'Break Barriers.'];

function TypewriterHeadline() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % WORDS.length);
    }
  }, [displayed, deleting, wordIdx]);

  return (
    <span className="text-gradient">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  x: Math.random() * 50, // keep particles on left half
  y: Math.random() * 100,
  delay: Math.random() * 6,
  size: Math.random() * 2.5 + 1,
  red: i % 8 === 0,
}));

const PARTNER_UNIS = ['Oxford', 'Cambridge', 'TU Munich', 'ETH Zurich', 'Sorbonne', 'Amsterdam', 'Edinburgh', 'Bocconi'];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.65], [1, 0.97]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-0"
      style={{ background: 'rgba(7,16,40,0.60)' }}>

      {/* Aurora glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] -translate-x-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 65%)', filter: 'blur(80px)' }} />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] translate-x-1/4 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(7,20,43,0.95), transparent)' }} />

      {/* Particles — left side only */}
      {PARTICLES.map((p, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
            background: p.red ? 'rgba(255,59,59,0.7)' : 'rgba(59,130,246,0.7)' }}
          animate={{ y: [0, -28, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: 4 + Math.random() * 4, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Two-column layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 w-full items-center py-28">

          {/* ──── LEFT: Content ──── */}
          <motion.div style={{ opacity, scale }} className="relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
              style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.32)', backdropFilter: 'blur(12px)' }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-white/80 text-sm font-medium">Trusted by 10,000+ Students</span>
              <span className="w-px h-3.5 bg-white/20" />
              <span className="text-primary text-xs font-bold">Est. 2015</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl leading-[1.06] tracking-tight text-white mb-3"
            >
              Every Student<br />Deserves to
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl leading-[1.06] tracking-tight mb-6 min-h-[1.15em]"
            >
              <TypewriterHeadline />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg"
            >
              100+ European universities at your doorstep. No hidden fees.
              Genuine guidance from inquiry to graduation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.06, boxShadow: '0 10px 48px rgba(59,130,246,0.65)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-base bg-primary hover:bg-blue-500 transition-all"
                  style={{ boxShadow: '0 4px 24px rgba(59,130,246,0.45)' }}
                >
                  Start Your Journey <ArrowRight size={17} />
                </motion.button>
              </Link>
              <Link href="/overseas">
                <motion.button
                  whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white/75 text-base border border-white/18 hover:border-primary/45 hover:bg-white/5 transition-all"
                  style={{ backdropFilter: 'blur(12px)' }}
                >
                  <Globe size={17} className="text-primary" /> Explore Programs
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats pill */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center rounded-2xl px-5 py-3.5"
              style={{ background: 'rgba(17,37,73,0.55)', border: '1px solid rgba(59,130,246,0.22)', backdropFilter: 'blur(12px)' }}
            >
              {[
                { val: '100+', label: 'Universities' },
                { val: '12',   label: 'Countries' },
                { val: '95%',  label: 'Success Rate' },
                { val: '10K+', label: 'Students' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-7 mx-4 bg-white/12" />}
                  <div>
                    <div className="font-display font-bold text-white text-xl leading-none">{s.val}</div>
                    <div className="text-white/35 text-[10px] mt-0.5 tracking-wide">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ──── RIGHT: Concentric Rings Animation ──── */}
          <div className="relative hidden lg:flex items-center justify-center h-[580px]">

            {/* Concentric rings — centered */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {[500, 400, 295, 210, 138].map((size, i) => (
                <motion.div key={size} className="absolute rounded-full border"
                  style={{ width: size, height: size, borderColor: i % 2 === 0 ? 'rgba(59,130,246,0.38)' : 'rgba(255,255,255,0.10)' }}
                  animate={{ scale: [1, 1.03, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4 + i * 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                />
              ))}
              {/* Outer rotating band */}
              <motion.div className="absolute rounded-full"
                style={{ width: 460, height: 460,
                  background: 'radial-gradient(circle, transparent 38%, rgba(59,130,246,0.22) 39%, rgba(59,130,246,0.22) 47%, transparent 48%)' }}
                animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner rotating band */}
              <motion.div className="absolute rounded-full"
                style={{ width: 290, height: 290,
                  background: 'radial-gradient(circle, transparent 38%, rgba(59,130,246,0.28) 39%, rgba(59,130,246,0.28) 50%, transparent 51%)' }}
                animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
              />
              {/* Center red dot */}
              <motion.div className="absolute rounded-full"
                style={{ width: 20, height: 20, background: '#FF3B3B', boxShadow: '0 0 36px 14px rgba(255,59,59,0.55)' }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Blue beam from top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
              <motion.div initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                style={{ transformOrigin: 'top center', width: '2px', height: '52%',
                  background: 'linear-gradient(to bottom, rgba(59,130,246,1), rgba(59,130,246,0.4) 60%, transparent)',
                  boxShadow: '0 0 28px 10px rgba(59,130,246,0.48)' }}
              />
            </div>

            {/* Top radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center top, rgba(59,130,246,0.38) 0%, transparent 70%)' }} />

            {/* Floating card — Success Rate top-left */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -15 }} animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute top-10 left-0 z-20"
            >
              <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="rounded-2xl p-4 w-48"
                  style={{ background: 'rgba(10,24,60,0.90)', border: '1px solid rgba(59,130,246,0.35)',
                    backdropFilter: 'blur(20px)', boxShadow: '0 14px 44px rgba(0,0,0,0.55)' }}>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(59,130,246,0.20)', border: '1px solid rgba(59,130,246,0.35)' }}>
                      <TrendingUp size={13} className="text-primary" />
                    </div>
                    <span className="text-white/55 text-xs font-medium">Success Rate</span>
                  </div>
                  <div className="font-display font-bold text-3xl text-white mb-0.5">95%</div>
                  <div className="text-white/35 text-[10px] mb-2.5">Students reach their goal</div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <motion.div className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }} animate={{ width: '95%' }}
                      transition={{ duration: 1.5, delay: 1.9, ease: 'easeOut' }} />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card — Latest Admission bottom-right */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="absolute bottom-10 right-0 z-20"
            >
              <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="rounded-2xl p-4 w-52"
                  style={{ background: 'rgba(10,24,60,0.90)', border: '1px solid rgba(59,130,246,0.35)',
                    backdropFilter: 'blur(20px)', boxShadow: '0 14px 44px rgba(0,0,0,0.55)' }}>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(255,59,59,0.18)', border: '1px solid rgba(255,59,59,0.28)' }}>
                      <Award size={13} className="text-accent" />
                    </div>
                    <span className="text-white/55 text-xs font-medium">Latest Admission</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2.5 p-2 rounded-xl" style={{ background: 'rgba(59,130,246,0.10)' }}>
                    <span className="text-base">🇩🇪</span>
                    <div>
                      <div className="text-white text-xs font-semibold">TU Munich</div>
                      <div className="text-white/40 text-[10px]">MSc Computer Science</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                    <span className="text-green-400 text-[10px] font-semibold">Admitted just now</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card — Universities top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="absolute top-8 right-2 z-20"
            >
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="rounded-xl px-4 py-3 flex items-center gap-2.5"
                  style={{ background: 'rgba(10,24,60,0.90)', border: '1px solid rgba(59,130,246,0.30)',
                    backdropFilter: 'blur(16px)', boxShadow: '0 8px 28px rgba(0,0,0,0.45)' }}>
                  <Zap size={13} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="text-white text-xs font-bold">100+ Universities</div>
                    <div className="text-white/35 text-[10px]">Across 12 countries</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={22} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
