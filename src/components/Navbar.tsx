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
              <span className="font-display font-bold text-base text-white block tracking-tight">World</span>
              <span className="text-[10px] text-primary/80 font-semibold tracking-[0.18em] uppercase">Passport</span>
            </div>
          </Link>

          {/* Center floating pill nav */}
          <nav className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
              scrolled
                ? 'bg-black/80 border-white/10 backdrop-blur-xl shadow-2xl'
                : 'bg-transparent border-transparent'
            }`}>
              {links.map((link) => (
                <Link key={link.href} href={link.href}
                  className="relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 text-white">
                  {pathname === link.href && (
                    <motion.div layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <Link href="/contact" className="text-sm font-medium text-white/40 hover:text-white transition-colors">
              Login
            </Link>
            <Link href="/contact" className="premium-btn !px-6 !py-2.5 !text-sm">
              Partner With Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-black/90 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 flex flex-col gap-2 shadow-2xl"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                  pathname === link.href ? 'text-[#0066FF] bg-[#0066FF]/10' : 'text-white/60 hover:text-white'
                }`}>{link.label}</Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-center py-3 text-white/60">
                Login
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="premium-btn w-full text-center py-3">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
