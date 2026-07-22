'use client';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bloodTests } from '../../data/bloodTests';
import ProductCard from '../../components/ProductCard';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Nav scroll
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hero entrance
    gsap.timeline({defaults:{ease:'power3.out'}})
      .to('#h-pill',  {opacity:1,duration:.6,delay:.2})
      .to('#h-h1',    {opacity:1,y:0,duration:.85},'-=.3')
      .to('#h-p',     {opacity:1,y:0,duration:.8},'-=.55')
      
    // ScrollTrigger helpers
    function sg(sel: string, vars: any, trig?: string) {
      gsap.to(sel, {
        scrollTrigger: { trigger: trig || sel, start: 'top 87%', once: true },
        ...vars,
        ease: 'power3.out'
      });
    }

    sg('.cat-title', {opacity:1,y:0,duration:.8});
    
    document.querySelectorAll('.product-card-wrap').forEach((el, i) => {
      gsap.to(el, { scrollTrigger: { trigger: el, start: 'top 92%', once: true }, opacity: 1, y: 0, duration: .7, delay: (i % 3) * .1, ease: 'power3.out' });
    });
    
    document.querySelectorAll('#footer .g-up').forEach((el, i) => {
      gsap.to(el, { scrollTrigger: { trigger: el, start: 'top 92%', once: true }, opacity: 1, y: 0, duration: .7, delay: i * .1, ease: 'power3.out' });
    });

    // Today's hours
    const d = new Date().getDay();
    const hm: Record<number, string> = { 0: 'hr-sun', 6: 'hr-sat' };
    const hid = hm[d] || (d >= 1 && d <= 5 ? 'hr-wkday' : null);
    if (hid) {
      const el = document.getElementById(hid);
      if (el) el.classList.add('hours-today');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');

  const testsList = Object.values(bloodTests);
  const filteredItems = activeCategory === 'All' 
    ? testsList 
    : testsList.filter(t => t.category === activeCategory);

  return (
    <>
      {/*  ══ NAV ═══════════════════════════════════════════════════  */}
      {/*  ══ NAV ═══════════════════════════════════════════════════  */}

      {/*  ══ HERO ══════════════════════════════════════════════════  */}
      <section id="hero" role="banner" style={{ minHeight: '60vh' }}>
        <div className="hero-img" aria-hidden="true" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}></div>
        <div className="hero-overlay" aria-hidden="true"></div>
        
        <div className="hero-content" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '80px', paddingBottom: '60px', paddingLeft: '24px', paddingRight: '24px' }}>
          <div className="hero-left" style={{ margin: '0 auto', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="hero-pill-wrap" id="h-pill" style={{ opacity: 0, margin: '0 auto 24px' }}>
              <div className="hero-pill">
                <span className="dot" aria-hidden="true"></span>
                Premium Clinical Services · Milton Keynes
              </div>
            </div>
            
            <h1 className="hero-h1" id="h-h1" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '3.5rem', color: 'var(--white)' }}>
              Explore Our <span className="txt-hi" style={{ color: 'var(--coral)' }}>Treatments</span> &amp; <span className="txt-hi" style={{ color: 'var(--coral)' }}>Tests.</span>
            </h1>
            
            <p className="hero-p" id="h-p" style={{ opacity: 0, transform: 'translateY(20px)', margin: '0 auto 30px', color: 'rgba(255,255,255,0.9)' }}>
              Choose from our wide range of professional blood tests and IV vitamin drips to optimize your health and vitality.
            </p>
          </div>
        </div>
      </section>

      {/*  ══ PRODUCT CATALOG ═══════════════════════════════════════  */}
      <section id="products" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          
          <div className="filter-toggle-wrap" style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
            <div className="filter-toggle" style={{ display: 'inline-flex', background: '#f8f9fa', borderRadius: '100px', padding: '6px', border: '1px solid #e9ecef' }}>
              {['All', 'Blood Tests', 'IV Vitamin Drips', 'Health Panels'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? 'var(--navy)' : 'transparent',
                    color: activeCategory === cat ? '#fff' : 'var(--navy)',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '100px',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeCategory === cat ? '0 4px 12px rgba(14,45,82,0.2)' : 'none'
                  }}
                >
                  {cat === 'All' ? 'All Treatments' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '40px', marginBottom: '80px' }}>
            {filteredItems.map((test, i) => (
              <div 
                key={`${test.id}-${activeCategory}`} 
                className="fade-in-up"
                style={{ animation: `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${i * 0.08}s` }}
              >
                <ProductCard test={test} />
              </div>
            ))}
          </div>

        </div>
      </section>

    </>
  );
}
