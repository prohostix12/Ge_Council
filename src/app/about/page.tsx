'use client';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Heart, Shield, Globe, Users, Award, Clock, CheckCircle,
  ArrowRight, Star, MapPin, TrendingUp, Zap, BookOpen,
  Building2, BadgeCheck, Lightbulb, Target,
} from 'lucide-react';

const pillars = [
  { icon: Heart, title: 'Listen First', color: '#FF3B3B', desc: 'Every student\'s story is unique. We listen carefully before we advise — no cookie-cutter solutions.' },
  { icon: Globe, title: 'Global Network', color: '#3B82F6', desc: '100+ partner universities across 12 European countries give you unmatched program options.' },
  { icon: Shield, title: 'Zero Hidden Fees', color: '#00C9B0', desc: 'Complete transparency. What we quote is exactly what you pay — no surprises, ever.' },
  { icon: Clock, title: 'Lifetime Support', color: '#FFB800', desc: 'From first inquiry to graduation and beyond — our counsellors remain your trusted guides.' },
];

const team = [
  {
    name: 'Dr. Amit Kumar', role: 'Founder & CEO', years: '20+ years in education',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    color: '#3B82F6', bio: 'Former Oxford visiting scholar who turned his passion for education into a movement.',
  },
  {
    name: 'Priya Nair', role: 'Head of Overseas', years: '15+ years counselling',
    img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&q=80',
    color: '#FF3B3B', bio: 'Guided 3,000+ students through European admissions with a near-perfect visa record.',
  },
  {
    name: 'Rohit Sharma', role: 'University Relations', years: 'Ex-Oxford alumni',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    color: '#00C9B0', bio: 'Built our European university network from 10 to 100+ institutions in four years.',
  },
  {
    name: 'Deepa Menon', role: 'Student Success', years: 'Supported 5,000+ students',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    color: '#FFB800', bio: 'Leads our post-admission support team ensuring every student thrives abroad.',
  },
];

const milestones = [
  { year: '2015', title: 'Founded in Mumbai', desc: 'Dr. Amit Kumar started GEC with 3 counsellors and 10 university partners.', color: '#3B82F6' },
  { year: '2017', title: '1,000 Students Placed', desc: 'Crossed our first major milestone with students in 8 European countries.', color: '#FF3B3B' },
  { year: '2019', title: 'Expanded to 5 Cities', desc: 'Opened offices in Delhi, Bangalore, Chennai, and Hyderabad.', color: '#00C9B0' },
  { year: '2021', title: 'ISO Certification', desc: 'Awarded ISO 9001:2015 — India\'s Most Trusted Education Agency.', color: '#FFB800' },
  { year: '2023', title: '10,000+ Placements', desc: '100+ university partners, €2M+ in scholarships secured for our students.', color: '#A855F7' },
  { year: '2024', title: 'Recruitment Division', desc: 'Launched career placement services connecting graduates with top EU employers.', color: '#FF6B00' },
];

const offices = [
  { city: 'Mumbai', country: 'India', flag: '🇮🇳', type: 'Headquarters' },
  { city: 'Delhi', country: 'India', flag: '🇮🇳', type: 'Regional Office' },
  { city: 'Bangalore', country: 'India', flag: '🇮🇳', type: 'Regional Office' },
  { city: 'Frankfurt', country: 'Germany', flag: '🇩🇪', type: 'Europe Office' },
];

const awards = [
  { title: 'Most Trusted Education Agency', year: '2023', body: 'Education Today Awards' },
  { title: 'Best Overseas Counselling Service', year: '2022', body: 'Times Education' },
  { title: 'ISO 9001:2015 Certified', year: '2021', body: 'International Standards' },
  { title: 'Top 10 Education Consultants', year: '2020', body: 'India Education Summit' },
];

function StatCard({ val, label, color }: { val: string; label: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
      whileHover={{ y: -6 }}
      className="rounded-2xl p-6 text-center cursor-default"
      style={{ background: 'rgba(10,22,54,0.85)', border: `1px solid ${color}25` }}>
      <div className="font-display font-bold text-3xl mb-1" style={{ color }}>{val}</div>
      <div className="text-white/45 text-sm">{label}</div>
    </motion.div>
  );
}

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' });

  return (
    <main className="relative pt-[60px]">
      {/* Fixed background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute inset-0" style={{ background: '#071428' }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.18, mixBlendMode: 'luminosity',
        }} />
      </div>

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden" style={{ background: 'rgba(7,16,40,0.60)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.30)', color: '#3B82F6' }}>
              <BookOpen size={14} /> Our Story
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-5 leading-tight">
              A Decade of<br />
              <span className="text-gradient">Changing Lives</span>
            </h1>
            <p className="text-white/55 text-lg mb-8 leading-relaxed max-w-lg">
              Founded in 2015 with one belief: no student should have to choose between their dreams and their family. Today, 10,000+ lives later, that belief drives everything we do.
            </p>
            <div className="flex gap-3">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full font-semibold text-white flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 0 30px rgba(59,130,246,0.35)' }}>
                  Work With Us <ArrowRight size={16} />
                </motion.button>
              </Link>
              <Link href="/overseas">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full font-semibold text-white/65 border border-white/12 hover:border-primary/40 hover:text-white transition-all">
                  Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right — image collage */}
          <div className="hidden lg:grid grid-cols-2 gap-4 h-[420px]">
            {[
              { img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80', span: 'row-span-2' },
              { img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&q=80', span: '' },
              { img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=500&q=80', span: '' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className={`rounded-2xl overflow-hidden ${item.span}`}
                style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
                <div className="w-full h-full"
                  style={{ backgroundImage: `url('${item.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.75) saturate(0.85)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 relative" style={{ background: 'rgba(10,18,50,0.68)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard val="2015" label="Year Founded" color="#3B82F6" />
            <StatCard val="10,000+" label="Students Served" color="#FF3B3B" />
            <StatCard val="100+" label="Partner Universities" color="#00C9B0" />
            <StatCard val="12" label="European Countries" color="#FFB800" />
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 relative" style={{ background: 'rgba(7,16,44,0.72)' }}>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="badge badge-blue mb-4">Our Mission</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
                Why We <span className="text-gradient">Exist</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-5">
                When we started in 2015, thousands of brilliant Indian students were giving up on international education — not because they weren't qualified, but because the process felt too opaque, too expensive, and too risky.
              </p>
              <p className="text-white/55 text-lg leading-relaxed mb-6">
                We built GEC to change that. By partnering directly with 100+ European universities, we removed the middlemen, eliminated hidden fees, and created a transparent pathway that any Indian family can trust.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Direct university partnerships — no agency markups',
                  'Transparent fee structure from day one',
                  'Counsellors who have studied abroad themselves',
                  'Dedicated support from inquiry to graduation',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-2.5 text-white/60 text-sm">
                    <CheckCircle size={15} className="text-primary mt-0.5 flex-shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 rounded-2xl p-4"
                style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.20)' }}>
                <Award size={28} className="text-primary flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  Recognised as <strong className="text-white">India's Most Trusted Education Counselling Agency</strong>, 2023
                </p>
              </div>
            </motion.div>

            {/* Awards */}
            <div className="space-y-4">
              {awards.map((a, i) => (
                <motion.div key={a.title}
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{ background: 'rgba(10,22,54,0.85)', border: '1px solid rgba(59,130,246,0.15)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                    <Award size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{a.title}</div>
                    <div className="text-white/40 text-xs mt-0.5">{a.body}</div>
                  </div>
                  <span className="text-primary text-sm font-bold">{a.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="py-24 relative" style={{ background: 'rgba(10,18,50,0.70)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <span className="badge badge-blue mb-4">Our Values</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
              The Four <span className="text-gradient">Pillars</span> of Our Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="relative rounded-3xl p-7 cursor-default group"
                  style={{ background: 'rgba(10,22,54,0.88)', border: `1px solid ${p.color}20` }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}30`, boxShadow: `0 0 20px ${p.color}10` }}>
                    <Icon size={24} style={{ color: p.color }} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `inset 0 0 0 1px ${p.color}35` }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 relative" style={{ background: 'rgba(7,16,44,0.70)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <span className="badge badge-blue mb-4">Journey</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
              Our <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.05) 100%)' }} />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className={`relative flex md:justify-${i % 2 === 0 ? 'start' : 'end'} justify-start`}>

                  {/* Center dot */}
                  <motion.div
                    initial={{ scale: 0 }} animate={timelineInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.12 + 0.15, type: 'spring', bounce: 0.4 }}
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full hidden md:block"
                    style={{ background: m.color, boxShadow: `0 0 12px ${m.color}60`, top: '50%', transform: 'translate(-50%, -50%)' }} />

                  <div className={`w-full md:w-[45%] rounded-2xl p-5 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                    style={{ background: 'rgba(10,22,54,0.88)', border: `1px solid ${m.color}25` }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-black text-2xl" style={{ color: m.color }}>{m.year}</span>
                      <div className="h-px flex-1" style={{ background: `${m.color}30` }} />
                    </div>
                    <h3 className="font-display font-bold text-white mb-1">{m.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 relative" style={{ background: 'rgba(10,18,50,0.72)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <span className="badge badge-blue mb-4">Leadership</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-white/40 max-w-md mx-auto">Experienced counsellors who&apos;ve lived the international education journey</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl overflow-hidden cursor-default group"
                style={{ background: 'rgba(10,22,54,0.88)', border: `1px solid ${member.color}20` }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />

                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${member.img}')`, backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'brightness(0.70) saturate(0.80)' }} />
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 40%, rgba(10,22,54,0.95) 100%)` }} />
                </div>

                <div className="p-6 -mt-6 relative">
                  <h3 className="font-display font-bold text-white mb-0.5">{member.name}</h3>
                  <div className="text-sm font-semibold mb-2" style={{ color: member.color }}>{member.role}</div>
                  <div className="text-white/35 text-xs mb-3">{member.years}</div>
                  <p className="text-white/45 text-xs leading-relaxed">{member.bio}</p>
                </div>

                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: `inset 0 0 0 1px ${member.color}35` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offices ── */}
      <section className="py-24 relative" style={{ background: 'rgba(7,16,44,0.68)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <span className="badge badge-blue mb-4">Presence</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
              Where We <span className="text-gradient">Operate</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {offices.map((o, i) => (
              <motion.div key={o.city}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl p-6 text-center cursor-default"
                style={{ background: 'rgba(10,22,54,0.85)', border: '1px solid rgba(59,130,246,0.18)' }}>
                <div className="text-4xl mb-3">{o.flag}</div>
                <div className="font-display font-bold text-white mb-1">{o.city}</div>
                <div className="text-white/40 text-xs mb-2">{o.country}</div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: 'rgba(59,130,246,0.12)', color: '#3B82F6', border: '1px solid rgba(59,130,246,0.25)' }}>
                  {o.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative" style={{ background: 'rgba(5,12,36,0.75)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{ background: 'rgba(10,22,52,0.92)', border: '1px solid rgba(59,130,246,0.22)', boxShadow: '0 0 80px rgba(59,130,246,0.10), inset 0 0 60px rgba(59,130,246,0.04)' }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.30)' }}>
              <Target size={30} style={{ color: '#3B82F6' }} />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
              Ready to Begin Your <span className="text-gradient">Journey?</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Join 10,000+ students who trusted GEC to guide them to world-class universities. Your story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-9 py-4 rounded-full font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 0 30px rgba(59,130,246,0.35)' }}>
                  Book Free Consultation
                </motion.button>
              </Link>
              <Link href="/overseas">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-9 py-4 rounded-full font-semibold text-white/70 border border-white/10 hover:border-primary/40 hover:text-white transition-all">
                  Explore Programs
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
