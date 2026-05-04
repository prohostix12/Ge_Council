import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Universities from '@/components/Universities';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">

      {/* Fixed full-page background — navy base + world map on top */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {/* 1. Navy base colour */}
        <div className="absolute inset-0" style={{ background: '#071428' }} />
        {/* 2. World map image on top of the base */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          mixBlendMode: 'luminosity',
        }} />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Process />
      <Universities />
      <Testimonials />
      <Footer />
    </main>
  );
}
