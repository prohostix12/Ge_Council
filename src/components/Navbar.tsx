'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/skill', label: 'Skill' },
  { href: '/overseas', label: 'Overseas' },
  { href: '/recruitment', label: 'Recruitment' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <Logo size={40} animate />
            <div className="hidden sm:block leading-tight">
              <span className="font-display font-bold text-base text-white block tracking-tight">Global Education</span>
              <span className="text-[10px] text-primary/80 font-semibold tracking-[0.18em] uppercase">Council</span>
            </div>
          </Link>

          {/* Center floating pill nav */}
          <nav className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
              scrolled
                ? 'bg-[#112549]/90 border-primary/20 backdrop-blur-xl shadow-lg shadow-blue-950/60'
                : 'bg-[#112549]/40 border-white/10 backdrop-blur-md'
            }`}>
              {links.map((link) => (
                <Link key={link.href} href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    pathname === link.href ? 'text-white' : 'text-white/50 hover:text-white/90'
                  }`}>
                  {pathname === link.href && (
                    <motion.div layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
              Login
            </Link>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-5 py-2 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-primary/60 hover:bg-primary/20 backdrop-blur-sm transition-all">
                Partner With Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 z-40 backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex flex-col gap-1"
            style={{ background: 'rgba(17,37,73,0.97)', border: '1px solid rgba(59,130,246,0.28)' }}
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href ? 'text-primary bg-primary/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}>{link.label}</Link>
            ))}
            <div className="pt-3 mt-1 border-t border-white/8 flex gap-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex-1">
                <button className="w-full py-2.5 rounded-xl text-sm text-white/50 border border-white/10">Login</button>
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex-1">
                <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-primary/80 hover:bg-primary transition-colors">Partner With Us</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
