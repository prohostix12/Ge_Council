'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, CheckCircle2, Compass } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100 contrast-[1.05] brightness-[1.05]"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Minimal Gradient Overlays for maximum video clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-20 pt-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start pb-4">
          
          {/* Left Content - Moved further down */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 lg:mb-0 lg:mt-[172px]"
          >
            {/* Small Description with Icon (like inspiration image) */}
            <div className="flex items-center gap-4 mb-6 max-w-sm">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                <Compass size={20} className="text-white/60" />
              </div>
              <p className="text-white/50 text-[11px] leading-relaxed font-medium">
                World Passport is a premier platform that transforms your international career aspirations into reality through world-class education.
              </p>
            </div>

            <h1 className="hero-headline text-white mb-10">
              Transforming <br />
              <span className="text-[#0066FF]">Global Careers</span> <br />
              Through Education
            </h1>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="premium-btn !px-7 !py-3 text-[13px] flex items-center gap-2 group">
                Start Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-pill bg-white/5 border border-white/10 text-white hover:bg-white/10 !px-5 !py-2.5 text-[13px]">
                <Play size={16} className="fill-white" /> Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Floating Card - Top aligned with left description */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 0.85, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block origin-right-top lg:mt-[172px]"
          >
            <div className="premium-glass p-6 md:p-8 shadow-2xl relative overflow-hidden group max-w-[360px] ml-auto">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066FF]/20 flex items-center justify-center text-[#0066FF]">
                    <Globe size={16} />
                  </div>
                  <div>
                    <span className="font-display font-bold text-base text-white block">World Passport</span>
                    <div className="text-white/40 text-[9px] tracking-tight uppercase font-bold">Live Admissions 2024</div>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[8px] font-bold uppercase tracking-wider animate-pulse">
                  Admissions Open
                </div>
              </div>

              {/* Form Content */}
              <div className="space-y-4">
                <div>
                  <label className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1.5 block">Choose Destination</label>
                  <div className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[11px] flex justify-between items-center cursor-pointer hover:bg-white/10 transition-all">
                    Germany, France, Netherlands
                    <ArrowRight size={14} className="rotate-90 text-[#0066FF]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1.5 block">Program Level</label>
                    <div className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[11px] cursor-pointer hover:bg-white/10 transition-all">
                      Masters
                    </div>
                  </div>
                  <div>
                    <label className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1.5 block">Intake</label>
                    <div className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[11px] cursor-pointer hover:bg-white/10 transition-all">
                      Fall 2024
                    </div>
                  </div>
                </div>

                <button className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-[0.98]">
                  Find My University
                </button>

                <div className="flex items-center justify-center gap-5 pt-5 border-t border-white/5">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">100+</div>
                    <div className="text-white/30 text-[8px] uppercase font-bold">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">95%</div>
                    <div className="text-white/30 text-[8px] uppercase font-bold">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">24/7</div>
                    <div className="text-white/30 text-[8px] uppercase font-bold">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0066FF]/5 to-transparent pointer-events-none" />
    </section>
  );
}
