'use client';
import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Code, BarChart, Microscope, Cpu, Palette, TrendingUp,
  CheckCircle, ArrowRight, Zap, Globe, Star, Clock,
  Briefcase, Users, Award, ChevronRight, BookOpen,
} from 'lucide-react';

/* ── Data ── */
const domains = [
  {
    id: 'cs', icon: Code, color: '#3B82F6', tag: 'Highest Demand',
    title: 'Computer Science & IT',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    desc: 'Shape the digital future with cutting-edge tech skills valued across every industry.',
    programs: [
      { name: 'Software Engineering',    duration: '2 yrs', level: 'MSc', demand: 96 },
      { name: 'Cybersecurity',           duration: '1.5 yrs', level: 'MSc', demand: 91 },
      { name: 'AI & Machine Learning',   duration: '2 yrs', level: 'MSc', demand: 98 },
      { name: 'Data Science',            duration: '2 yrs', level: 'MSc', demand: 95 },
    ],
    careers: ['Software Engineer', 'Data Scientist', 'AI Engineer', 'Cloud Architect'],
    salary: '€55,000+',
    unis: 28,
  },
  {
    id: 'biz', icon: BarChart, color: '#FF3B3B', tag: 'Global Opportunities',
    title: 'Business & Management',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    desc: 'Lead global organisations with world-class management and strategy skills.',
    programs: [
      { name: 'MBA',              duration: '1–2 yrs', level: 'MBA',  demand: 88 },
      { name: 'Finance',          duration: '1 yr',    level: 'MSc',  demand: 85 },
      { name: 'Marketing',        duration: '1 yr',    level: 'MSc',  demand: 80 },
      { name: 'Supply Chain',     duration: '1.5 yrs', level: 'MSc',  demand: 82 },
    ],
    careers: ['Business Analyst', 'Product Manager', 'Strategy Consultant', 'CFO'],
    salary: '€50,000+',
    unis: 22,
  },
  {
    id: 'life', icon: Microscope, color: '#3B82F6', tag: 'Research-Driven',
    title: 'Life Sciences',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    desc: 'Advance human health and biological understanding at top research universities.',
    programs: [
      { name: 'Biotechnology',    duration: '2 yrs', level: 'MSc', demand: 87 },
      { name: 'Pharmacy',         duration: '2 yrs', level: 'MSc', demand: 84 },
      { name: 'Public Health',    duration: '1 yr',  level: 'MPH', demand: 80 },
      { name: 'Biomedical Eng.',  duration: '2 yrs', level: 'MSc', demand: 88 },
    ],
    careers: ['Research Scientist', 'Clinical Manager', 'Biotech Analyst', 'Pharmacist'],
    salary: '€48,000+',
    unis: 18,
  },
  {
    id: 'eng', icon: Cpu, color: '#FF3B3B', tag: 'Industry-Ready',
    title: 'Engineering',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    desc: 'Build tomorrow\'s infrastructure with rigorous, hands-on European engineering degrees.',
    programs: [
      { name: 'Mechanical Eng.',  duration: '2 yrs', level: 'MSc', demand: 85 },
      { name: 'Electrical Eng.',  duration: '2 yrs', level: 'MSc', demand: 88 },
      { name: 'Civil Eng.',       duration: '2 yrs', level: 'MSc', demand: 82 },
      { name: 'Chemical Eng.',    duration: '2 yrs', level: 'MSc', demand: 84 },
    ],
    careers: ['Design Engineer', 'Project Manager', 'R&D Engineer', 'Consultant'],
    salary: '€52,000+',
    unis: 24,
  },
  {
    id: 'art', icon: Palette, color: '#3B82F6', tag: 'Creative Future',
    title: 'Arts & Design',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    desc: 'Turn creative vision into a career at Europe\'s most prestigious design schools.',
    programs: [
      { name: 'Architecture',     duration: '2 yrs', level: 'MArch', demand: 78 },
      { name: 'Graphic Design',   duration: '1 yr',  level: 'MA',    demand: 75 },
      { name: 'UX Design',        duration: '1 yr',  level: 'MA',    demand: 88 },
      { name: 'Fine Arts',        duration: '2 yrs', level: 'MFA',   demand: 70 },
    ],
    careers: ['UX Designer', 'Architect', 'Creative Director', 'Brand Strategist'],
    salary: '€42,000+',
    unis: 14,
  },
  {
    id: 'eco', icon: TrendingUp, color: '#FF3B3B', tag: 'Finance Sector',
    title: 'Economics & Finance',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    desc: 'Master global markets, economic policy, and financial strategy at elite institutions.',
    programs: [
      { name: 'Economics',           duration: '2 yrs', level: 'MSc', demand: 86 },
      { name: 'Actuarial Science',   duration: '1.5 yrs', level: 'MSc', demand: 90 },
      { name: 'Investment Banking',  duration: '1 yr',  level: 'MSc', demand: 88 },
      { name: 'FinTech',             duration: '1 yr',  level: 'MSc', demand: 93 },
    ],
    careers: ['Financial Analyst', 'Actuary', 'Investment Banker', 'FinTech Lead'],
    salary: '€58,000+',
    unis: 20,
  },
];

const whyItems = [
  { icon: Globe,     title: 'European Recognition',  desc: 'Degrees recognised globally, giving you an edge in international job markets.' },
  { icon: Zap,       title: 'Industry-Linked Curriculum', desc: 'Programs co-designed with industry leaders — graduate job-ready, not just qualified.' },
  { icon: Users,     title: 'Expert Counselling',    desc: 'Our counsellors match you to the right program based on your profile and goals.' },
  { icon: Award,     title: 'Scholarship Support',   desc: 'We identify scholarships and funding options to reduce your financial burden.' },
];

function DemandBar({ value, color }: { value: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <motion.div className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
      <span className="text-white/50 text-[10px] w-7 text-right">{value}%</span>
    </div>
  );
}

export default function SkillPage() {
  const [active, setActive] = useState('cs');
  const [hovered, setHovered] = useState<string | null>(null);
  const domain = domains.find(d => d.id === active)!;
  const heroRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' });

  return (
    <main className="relative min-h-screen">

      {/* Page-level background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute inset-0" style={{ background: '#071428' }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.18, mixBlendMode: 'luminosity',
        }} />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.22) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.10) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.30)' }}>
              <BookOpen size={13} className="text-primary" />
              <span className="text-primary text-sm font-semibold">Skill Development Programs</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.06] text-white mb-5">
              Build <span className="text-gradient">Future-Ready</span><br />Skills in Europe
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto mb-10">
              Discover world-class programs from 100+ European universities — designed to make you
              unstoppable in the global job market.
            </p>

            {/* Hero stats */}
            <div className="flex flex-wrap items-center justify-center gap-x-0 rounded-2xl px-6 py-4 w-fit mx-auto"
              style={{ background: 'rgba(17,37,73,0.55)', border: '1px solid rgba(59,130,246,0.20)', backdropFilter: 'blur(12px)' }}>
              {[
                { val: '6', label: 'Skill Domains' },
                { val: '100+', label: 'Programs' },
                { val: '€55K+', label: 'Avg. Salary' },
                { val: '95%', label: 'Placement' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-7 mx-5 bg-white/12" />}
                  <div className="text-center">
                    <div className="font-display font-bold text-white text-xl">{s.val}</div>
                    <div className="text-white/35 text-[10px] tracking-wide">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DOMAIN EXPLORER (tabs + detail) ── */}
      <section className="py-16" style={{ background: 'rgba(7,16,44,0.68)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-12">
            <span className="badge badge-blue mb-3">Explore Domains</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Choose Your <span className="text-gradient">Skill Domain</span>
            </h2>
          </motion.div>

          {/* Tab row */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {domains.map((d) => {
              const Icon = d.icon;
              return (
                <motion.button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-250"
                  style={active === d.id ? {
                    background: d.color,
                    color: '#fff',
                    boxShadow: `0 4px 20px ${d.color}55`,
                  } : {
                    background: 'rgba(17,37,73,0.55)',
                    color: 'rgba(255,255,255,0.55)',
                    border: '1px solid rgba(59,130,246,0.18)',
                  }}
                >
                  <Icon size={15} />
                  {d.title.split(' ')[0]}
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-5 gap-6"
            >
              {/* Left: image + overview */}
              <div className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[380px]"
                style={{ border: '1px solid rgba(59,130,246,0.22)' }}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: `url('${domain.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.55 }} />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(7,18,50,0.98) 0%, rgba(7,18,50,0.60) 55%, rgba(7,18,50,0.20) 100%)' }} />

                {/* Tag badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: `${domain.color}22`, color: domain.color, border: `1px solid ${domain.color}40` }}>
                    {domain.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${domain.color}22`, border: `1px solid ${domain.color}40` }}>
                      <domain.icon size={22} style={{ color: domain.color }} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">{domain.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{domain.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: BookOpen, label: `${domain.unis} Universities` },
                      { icon: Briefcase, label: `Avg ${domain.salary}` },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-xl"
                        style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.18)' }}>
                        <Icon size={13} className="text-primary flex-shrink-0" />
                        <span className="text-white/70 text-xs font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: programs + careers */}
              <div className="lg:col-span-3 flex flex-col gap-4">

                {/* Programs list */}
                <div className="rounded-3xl p-6"
                  style={{ background: 'rgba(10,22,54,0.80)', border: '1px solid rgba(59,130,246,0.18)' }}>
                  <h4 className="font-display font-semibold text-white mb-5 flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" /> Programs Offered
                  </h4>
                  <div className="space-y-4">
                    {domain.programs.map((prog, i) => (
                      <motion.div key={prog.name}
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <CheckCircle size={14} style={{ color: domain.color }} />
                            <span className="text-white/85 text-sm font-medium">{prog.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                              style={{ background: `${domain.color}18`, color: domain.color }}>
                              {prog.level}
                            </span>
                            <span className="flex items-center gap-1 text-white/35 text-[10px]">
                              <Clock size={10} />{prog.duration}
                            </span>
                          </div>
                        </div>
                        <DemandBar value={prog.demand} color={domain.color} />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: domain.color }} />
                    <span className="text-white/35 text-xs">Bar shows market demand index</span>
                  </div>
                </div>

                {/* Career outcomes */}
                <div className="rounded-3xl p-6"
                  style={{ background: 'rgba(10,22,54,0.80)', border: '1px solid rgba(59,130,246,0.18)' }}>
                  <h4 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" /> Career Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {domain.careers.map((c) => (
                      <span key={c}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold text-white/75"
                        style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.22)' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: `0 8px 32px ${domain.color}55` }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 rounded-2xl font-semibold text-white text-sm flex items-center justify-center gap-2 transition-all"
                      style={{ background: domain.color, boxShadow: `0 4px 20px ${domain.color}40` }}
                    >
                      Get Counselling for {domain.title.split(' ')[0]} <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── ALL DOMAINS GRID ── */}
      <section className="py-20" style={{ background: 'rgba(10,22,55,0.70)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-12">
            <span className="badge badge-red mb-3">All Programs</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Every Domain, <span className="text-gradient-red">One Platform</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((skill, i) => {
              const Icon = skill.icon;
              const isHovered = hovered === skill.id;
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  onHoverStart={() => setHovered(skill.id)}
                  onHoverEnd={() => setHovered(null)}
                  onClick={() => { setActive(skill.id); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  whileHover={{ y: -8 }}
                  className="relative rounded-3xl overflow-hidden cursor-pointer group"
                  style={{ border: `1px solid ${isHovered ? skill.color + '50' : 'rgba(59,130,246,0.18)'}`,
                    background: 'rgba(10,22,54,0.88)',
                    transition: 'border-color 0.3s',
                    boxShadow: isHovered ? `0 16px 48px ${skill.color}20` : 'none',
                  }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }} />

                  {/* Bg image */}
                  <div className="absolute inset-0 transition-all duration-700 opacity-[0.12] group-hover:opacity-[0.22]"
                    style={{ backgroundImage: `url('${skill.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(7,18,50,0.85) 0%, rgba(7,18,50,0.65) 100%)' }} />

                  <div className="relative p-7">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}35`,
                          boxShadow: `0 0 20px ${skill.color}22` }}>
                        <Icon size={22} style={{ color: skill.color }} />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold"
                        style={{ background: `${skill.color}15`, color: skill.color, border: `1px solid ${skill.color}30` }}>
                        {skill.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-2">{skill.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed mb-5">{skill.desc}</p>

                    <div className="space-y-2 mb-5">
                      {skill.programs.slice(0, 3).map((prog) => (
                        <div key={prog.name} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: skill.color }} />
                          <span className="text-white/60 text-xs">{prog.name}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-40" style={{ background: skill.color }} />
                        <span className="text-white/30 text-xs">+{skill.programs.length - 3} more</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div>
                        <div className="text-white/35 text-[10px]">Avg Salary</div>
                        <div className="text-white font-bold text-sm">{skill.salary}</div>
                      </div>
                      <motion.div
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ background: `${skill.color}18`, color: skill.color }}
                        animate={{ x: isHovered ? 4 : 0 }}
                      >
                        Explore <ChevronRight size={13} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY SKILL DEVELOPMENT ── */}
      <section ref={whyRef} className="py-20" style={{ background: 'rgba(7,16,44,0.68)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }} className="text-center mb-12">
            <span className="badge badge-blue mb-3">Why Choose Us</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Skills That <span className="text-gradient">Open Doors</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title}
                  initial={{ opacity: 0, y: 30 }} animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl p-6 group"
                  style={{ background: 'rgba(10,22,54,0.85)', border: '1px solid rgba(59,130,246,0.18)' }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.30)' }}>
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: 'rgba(10,22,55,0.70)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 md:p-14"
            style={{ background: 'rgba(10,22,54,0.90)', border: '1px solid rgba(59,130,246,0.25)',
              boxShadow: '0 0 80px rgba(59,130,246,0.12)' }}>
            <div className="flex justify-center mb-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
              Ready to Skill Up in <span className="text-gradient">Europe?</span>
            </h2>
            <p className="text-white/55 text-lg mb-8 max-w-xl mx-auto">
              Get a free 1-on-1 counselling session and find the perfect program for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 48px rgba(59,130,246,0.65)' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-9 py-3.5 rounded-full font-semibold text-white bg-primary hover:bg-blue-500 transition-all flex items-center gap-2"
                  style={{ boxShadow: '0 4px 24px rgba(59,130,246,0.45)' }}>
                  Book Free Counselling <ArrowRight size={17} />
                </motion.button>
              </Link>
              <Link href="/overseas">
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  className="px-9 py-3.5 rounded-full font-semibold text-white/70 border border-white/15 hover:border-primary/40 transition-all flex items-center gap-2">
                  <Globe size={17} className="text-primary" /> Browse Universities
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
