'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-dark-300 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all text-sm';

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

      <section className="relative pt-20 pb-16" style={{ background: 'rgba(7,16,40,0.55)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Let&apos;s Talk About Your <span className="text-gradient">Future</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Book a free counselling session with our education experts. No commitment, no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 pb-24" style={{ background: 'rgba(7,16,44,0.60)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-2">Contact Information</h2>
                <p className="text-white/50 text-sm">Our counsellors are available Mon–Sat, 9am–7pm IST</p>
              </div>

              {[
                { icon: Mail, label: 'Email', value: 'info@gecouncil.com' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                { icon: MapPin, label: 'Office', value: 'Mumbai, Delhi, Bangalore & Europe' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">{label}</div>
                    <div className="text-white/80 text-sm">{value}</div>
                  </div>
                </div>
              ))}

              <div className="mt-8 p-5 glass rounded-2xl border border-primary/20">
                <div className="text-white/80 font-medium mb-2">Free Counselling Session</div>
                <p className="text-white/50 text-sm">
                  Fill out the form for a complimentary 45-minute session with one of our senior counsellors.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-3xl p-10 border border-primary/30 text-center"
                >
                  <CheckCircle size={56} className="text-primary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">Our team will reach out within 24 hours. We&apos;re excited to help you!</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 bg-primary rounded-xl text-sm font-semibold text-white hover:bg-primary-light transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass rounded-3xl p-8 border border-white/5 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Priya Sharma" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="priya@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block">Interest</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                        <option value="">Select...</option>
                        <option>Overseas Education</option>
                        <option>Skill Development</option>
                        <option>Recruitment</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your goals..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-accent text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary rounded-xl font-semibold text-white glow-blue hover:bg-primary-light disabled:opacity-60 transition-all"
                  >
                    {status === 'loading' ? <><Loader size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Send Message</>}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
