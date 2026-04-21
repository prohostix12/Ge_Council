'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Share2, ExternalLink, Link2 } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/skill', label: 'Skill Development' },
  { href: '/overseas', label: 'Overseas Education' },
  { href: '/recruitment', label: 'Recruitment' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];
const socials = [
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Share2, href: '#', label: 'Twitter' },
  { icon: ExternalLink, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 relative overflow-hidden" style={{ background: 'rgba(5,12,36,0.82)' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* CTA banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 text-center mb-16"
          style={{ background: 'rgba(10,22,52,0.92)', border: '1px solid rgba(59,130,246,0.22)', boxShadow: '0 0 60px rgba(59,130,246,0.12), inset 0 0 60px rgba(59,130,246,0.04)' }}>
          <div className="flex justify-center mb-6">
            <Logo size={64} animate />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to <span className="text-gradient">Take Aim</span> at Your Future?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
            Join 10,000+ students who trusted Global Education Council to guide them to world-class universities
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full font-semibold text-white bg-primary hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30">
                Talk to Us Today
              </motion.button>
            </Link>
            <Link href="/overseas">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full font-semibold text-white/70 border border-white/10 hover:border-primary/40 hover:text-white transition-all">
                Browse Programs
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo size={40} animate={false} />
              <div>
                <span className="font-display font-bold text-base text-white block">Global Education Council</span>
                <span className="text-xs text-primary/70 font-semibold tracking-widest uppercase">Est. 2015</span>
              </div>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-5">
              Bridging Indian students with world-class European universities. Transparent. Trusted. Genuine.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} whileHover={{ scale: 1.1 }} aria-label={label}
                  className="w-9 h-9 rounded-lg border border-primary/14 flex items-center justify-center text-white/35 hover:text-primary hover:border-primary/40 transition-all"
                  style={{ background: 'rgba(8,18,44,0.88)' }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/35 text-sm hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, text: 'info@gecouncil.com' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: MapPin, text: 'India & Europe offices' },
                { icon: Globe, text: 'gecouncil.com' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-white/35">
                  <Icon size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">&copy; {new Date().getFullYear()} Global Education Council. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <Link key={t} href="#" className="text-white/25 text-sm hover:text-primary transition-colors">{t}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
