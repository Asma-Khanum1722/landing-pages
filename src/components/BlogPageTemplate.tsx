'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BloodTestData } from '../data/bloodTests';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPageTemplate({ data }: { data: BloodTestData }) {
  
  useEffect(() => {
    // Nav scroll
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hero entrance
    gsap.timeline({defaults:{ease:'power3.out'}})
      .to('.blog-hero-content', {opacity:1,y:0,duration:1,delay:0.2});

    // Paragraph stagger
    gsap.fromTo('.blog-paragraph', 
      {opacity:0, y:30}, 
      {opacity:1, y:0, duration:0.8, stagger:0.1, scrollTrigger: {trigger: '.blog-article-body', start: 'top 85%'}}
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', color: '#091e38' }}>
      {/* NAV */}
      {/*  ══ NAV ═══════════════════════════════════════════════════  */}

      {/* HERO */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Image src={`/${data.aboutImage || 'hero-bg.jpg'}`} alt={data.title} fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(9,30,56,0.6), rgba(9,30,56,0.8))' }}></div>
        <div className="blog-hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 24px', marginTop: '60px', opacity: 0, transform: 'translateY(30px)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {data.category}
            </div>
            <div style={{ padding: '8px 16px', background: 'var(--coral)', color: 'white', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {data.price}
            </div>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', fontFamily: "'Poppins', sans-serif" }}>
            {data.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ padding: '80px 24px' }}>
        <div className="blog-article-body" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '32px', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
            {data.aboutHeading}
          </h2>
          
          {data.aboutTextParagraphs.map((p, i) => (
            <p key={i} className="blog-paragraph" style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#4a5568', marginBottom: '24px' }}>
              {p}
            </p>
          ))}
          
          {/* CTA BOX */}
          <div className="blog-paragraph" style={{ marginTop: '64px', padding: '48px', background: 'white', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '16px', fontWeight: 700 }}>Ready to experience {data.title}?</h3>
            <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '1.1rem' }}>Available at our Milton Keynes clinic for {data.price}.</p>
            <a href="https://svraesthetics.co.uk/book-free-consultation/" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 40px', background: 'var(--purple)', color: 'white', textDecoration: 'none', borderRadius: '100px', fontWeight: 700, fontSize: '1.1rem', transition: 'all 0.3s' }}>
              {data.buttonText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
