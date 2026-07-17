'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BloodTestData, bloodTests } from '../data/bloodTests';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPageTemplate({ data }: { data: BloodTestData }) {
  
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
      .to('#h-ctas',  {opacity:1,y:0,duration:.75},'-=.5')
      .to('#h-faces', {opacity:1,y:0,duration:.6},'-=.55')
      .to('#h-right', {opacity:1,x:0,duration:.9},'-=.65');

    // Blobs
    document.querySelectorAll('.hero-img').forEach(b => {
      gsap.to(b,{scale:1.04,duration:10,repeat:-1,yoyo:true,ease:'sine.inOut'});
    });

    // ScrollTrigger helpers
    function sg(sel: string, vars: any, trig?: string) {
      gsap.to(sel, {
        scrollTrigger: { trigger: trig || sel, start: 'top 87%', once: true },
        ...vars,
        ease: 'power3.out'
      });
    }

    sg('#vd-info',{opacity:1,y:0,duration:.8});
    sg('#inc-hdr',{opacity:1,y:0,duration:.8});
    sg('.inc-big',{opacity:1,x:0,duration:.85});
    
    ScrollTrigger.create({
      trigger: '#inc-layout',
      start: 'top 87%',
      once: true,
      onEnter() {
        gsap.to('.inc-sm',{opacity:1,scale:1,duration:.6,stagger:.1,ease:'back.out(1.7)'})
      }
    });

    sg('#pl-left',{opacity:1,x:0,duration:.85});
    sg('#pl-card',{opacity:1,scale:1,duration:.8,delay:.18});
    sg('#faq-side',{opacity:1,x:0,duration:.85});
    sg('#faq-list',{opacity:1,y:0,duration:.8,delay:.1});
    
    document.querySelectorAll('#footer .g-up').forEach((el, i) => {
      gsap.to(el, { scrollTrigger: { trigger: el, start: 'top 92%', once: true }, opacity: 1, y: 0, duration: .7, delay: i * .1, ease: 'power3.out' });
    });

    // Button jiggle
    document.querySelectorAll('.btn-hero-main,.nav-book,.btn-book-price,.btn-faq-book').forEach(b => {
      b.addEventListener('mouseenter', () => gsap.fromTo(b, { rotate: -1.5 }, { rotate: 0, duration: .4, ease: 'elastic.out(1,.4)' }));
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

  const tfaq = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const q = el.querySelector('.faq-q');
    const a = el.querySelector('.faq-ans');
    if (!q || !a) return;

    const isExp = q.getAttribute('aria-expanded') === 'true';
    if (isExp) {
      q.setAttribute('aria-expanded', 'false');
      // @ts-ignore
      a.style.maxHeight = '0';
      // @ts-ignore
      a.style.opacity = '0';
    } else {
      q.setAttribute('aria-expanded', 'true');
      // @ts-ignore
      a.style.maxHeight = a.scrollHeight + 'px';
      // @ts-ignore
      a.style.opacity = '1';
    }
  };

  return (
    <>
      {/*  ══ NAV ═══════════════════════════════════════════════════  */}
<nav id="nav">
  <a href="https://svraesthetics.co.uk/" aria-label="SVR Aesthetics">
    <img src="/SVR-Aesthetics-logo.webp" alt="SVR Aesthetics" className="nav-logo" />
  </a>
  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
    <div className="nav-dropdown-wrap">
      <div className="nav-dropdown-trigger">
        All Tests <span style={{ fontSize: '0.7em', marginTop: '2px' }}>▼</span>
      </div>
      <div className="nav-dropdown-menu">
        {Object.values(bloodTests).map(t => (
          <a href={`/${t.id}`} key={t.id} className="nav-dropdown-item">{t.title}</a>
        ))}
      </div>
    </div>
    <a href="https://svraesthetics.co.uk/book-free-consultation/" className="nav-book" id="nav-cta">
      {data.buttonText || 'Book a Test'} &nbsp;→
    </a>
  </div>
</nav>

{/*  ══ HERO ══════════════════════════════════════════════════  */}
<section id="hero" role="banner">
  <div className="hero-img" aria-hidden="true"></div>
  <div className="hero-overlay" aria-hidden="true"></div>
  
  <div className="hero-content">
    <div className="hero-left">
      <div className="hero-pill-wrap g-fade" id="h-pill">
        <div className="hero-pill">
          <span className="dot" aria-hidden="true"></span>
          {data.pillText}
        </div>
      </div>
      <h1 className="hero-h1 g-up" id="h-h1">
        {data.heroHeadingLine1}<br/><em style={{ color: 'var(--coral)' }}>{data.heroHeadingHighlight}</em>{data.heroHeadingLine2}
      </h1>
      <p className="hero-p g-up" id="h-p">
        {data.heroDescription}
      </p>
      <div className="hero-ctas g-up" id="h-ctas" style={{ marginBottom: '26px', display: 'flex', gap: '16px' }}>
        <a href="https://svraesthetics.co.uk/book-free-consultation/" className="btn-hero-main">
          {data.buttonText || 'Book your test'} &nbsp;→
        </a>
        <a href="#info" className="btn-hero-ghost" style={{ padding: '14px 36px', borderRadius: '100px', fontWeight: '800', fontFamily: "'Nunito',sans-serif", textDecoration: 'none', color: 'white', border: '2px solid rgba(255,255,255,0.3)', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          See the Benefits
        </a>
      </div>
    </div>

    <div className="hero-right g-right" id="h-right" style={{ position: 'relative', minHeight: '450px' }}>
      
      {/*  Top left floating badge  */}
      <div className="stat-clay float-anim-2" style={{ padding: '16px 24px', borderRadius: '20px', position: 'absolute', top: '10%', left: '0%', zIndex: '2' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,153,154,0.2)', color: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,153,154,0.4)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <span style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>CQC Registered</span>
        </div>
      </div>

      {/*  Center floating badge  */}
      <div className="stat-clay float-anim-1" style={{ flexDirection: 'column', padding: '36px 48px', borderRadius: '24px', textAlign: 'center', position: 'absolute', top: '35%', right: '5%', zIndex: '3', boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 2px 2px 10px rgba(255,255,255,0.1)' }}>
        <h3 style={{ fontFamily: "\'Poppins\', sans-serif", fontSize: '1.8rem', color: '#fff', margin: '0 0 8px 0' }}>Gold Standard</h3>
        <p style={{ color: 'var(--coral)', fontWeight: '800', margin: '0', fontSize: '0.95rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Accurate Results</p>
      </div>

      {/*  Bottom left floating badge  */}
      <div className="stat-clay float-anim-3" style={{ padding: '16px 24px', borderRadius: '20px', position: 'absolute', bottom: '15%', left: '15%', zIndex: '4' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(131,0,233,0.3)', color: '#c49cf5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(131,0,233,0.5)' }}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <span style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>No GP Needed</span>
        </div>
      </div>

    </div>
  </div>
</section>

{/*  ══ INFO ═══════════════════════════════════════════════════  */}
<section id="info" style={{ background: "var(--white)", position: "relative", zIndex: 2, paddingTop: "60px" }}>
  <div className="wrap">
    
    {/*  Top Flex Container: Text + Image (Equal Height)  */}
    <div className="info-layout">
      
      {/*  Text Side  */}
      <div id="vd-info" className="info-text-col">
        <div>
          <span className="stag">Why it matters</span>
          <h2 className="stitle" style={{ textAlign: "left", marginBottom: "24px" }}>{data.aboutHeading}</h2>
          <p className="ssub desktop-text" style={{ margin: 0, textAlign: "left", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "100%", color: "rgba(9, 30, 56, 0.75)" }}>
            {data.aboutTextParagraphs.map((p, i) => (
              <span key={i}>
                {p}
                <br/><br/>
              </span>
            ))}
            <strong style={{ color: "var(--navy)", fontFamily: "\'Poppins\', sans-serif", fontWeight: 700 }}>Contact SVR Aesthetics in Milton Keynes for more info.</strong>
          </p>
          <p className="ssub mobile-text" style={{ margin: 0, textAlign: "left", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "100%", color: "rgba(9, 30, 56, 0.75)" }}>
            {data.aboutMobileText}
          </p>
          <div style={{ marginTop: "36px" }}>
            <a href="https://svraesthetics.co.uk/book-free-consultation/" className="btn-hero-main" style={{ boxShadow: "0 8px 25px rgba(131,0,233,0.3), inset 2px 2px 5px rgba(255,255,255,0.2)", width: "100%", textAlign: "center", justifyContent: "center", padding: "16px" }}>{data.buttonText || 'Book your test'} &nbsp;→</a>
          </div>
        </div>
      </div>

      {/*  Image Side: Stretches to match text height  */}
      <div className="info-img-col">
        <div className="clay info-img-wrap">
           <img src={`/${data.aboutImage}`} alt={data.title} style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
           <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg, rgba(131,0,233,0.1), transparent 60%)', pointerEvents: 'none' }}></div>
        </div>
      </div>
    </div>

    {/*  BENEFITS GRID: 4 Premium Clay Cards  */}
    <h3 className="stitle" style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '48px' }}>Benefits of Testing</h3>
    <div className="info-grid">
      
      {/*  Benefit 1  */}
      <div className="inc-sm">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(131,0,233,.15) 0%, rgba(131,0,233,.02) 100%)", color: "var(--purple)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(131,0,233,.2)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div className="inc-sm-title">Early Detection</div>
        <p className="inc-sm-body">Detect deficiency before it causes serious health issues.</p>
      </div>

      {/*  Benefit 2  */}
      <div className="inc-sm">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(255,153,154,.15) 0%, rgba(255,153,154,.02) 100%)", color: "var(--coral)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(255,153,154,.2)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div className="inc-sm-title">Targeted Care</div>
        <p className="inc-sm-body">Helps healthcare providers design much better, highly personalized treatment plans.</p>
      </div>

      {/*  Benefit 3  */}
      <div className="inc-sm">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(131,0,233,.15) 0%, rgba(131,0,233,.02) 100%)", color: "var(--purple)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(131,0,233,.2)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div className="inc-sm-title">Accurate Tracking</div>
        <p className="inc-sm-body">Accurately tracks your body levels to evaluate conditions that affect metabolism.</p>
      </div>

      {/*  Benefit 4  */}
      <div className="inc-sm">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(255,153,154,.15) 0%, rgba(255,153,154,.02) 100%)", color: "var(--coral)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(255,153,154,.2)" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        </div>
        <div className="inc-sm-title">Proactive Health</div>
        <p className="inc-sm-body">Encourages preventive care to proactively maintain your body and immunity.</p>
      </div>

    </div>
  </div>
</section>

{/*  ══ INCLUDED ════════════════════════════════════════════════  */}
<section id="included">
  <div className="wrap">
    <div className="g-up" id="inc-hdr" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 0" }}>
      <span className="stag">What&rsquo;s Included</span>
      <h2 className="stitle">Everything in one test - no GP needed</h2>
      <p className="ssub" style={{ margin: "0 auto" }}>A complete blood panel carried out by clinical professionals in our Milton Keynes clinic.</p>
    </div>

    <div className="inc-layout" id="inc-layout">
      {/*  Big feature card  */}
      <div className="inc-big g-left">
        <div>
          <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(255,153,154,.2) 0%, rgba(255,153,154,.05) 100%)", color: "var(--coral)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.3), 0 8px 16px rgba(0,0,0,.2)", border: "1px solid rgba(255,153,154,.3)" }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h3M19 12h3M12 2v3M12 19v3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 5.5l2 2"/><circle cx="12" cy="12" r="4"/></svg></div>
          <div className="inc-big-title">Clinical Measurement</div>
          <p className="inc-big-body">The gold-standard clinical marker that measures your overall status in a single, accurate blood test. This is the definitive number your clinician needs to assess deficiency, insufficiency, or toxicity risk.</p>
        </div>
        <div className="inc-big-tag">The key marker ✦</div>
      </div>

      <div className="inc-sm g-pop">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(255,153,154,.15) 0%, rgba(255,153,154,.02) 100%)", color: "var(--coral)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(255,153,154,.2)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/><circle cx="12" cy="14" r="2"/></svg></div>
        <div className="inc-sm-title">Simple blood draw</div>
        <p className="inc-sm-body">A quick venous sample taken by trained clinicians in a calm, clinical environment.</p>
      </div>
      <div className="inc-sm g-pop">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(131,0,233,.15) 0%, rgba(131,0,233,.02) 100%)", color: "var(--purple)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(131,0,233,.2)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 018 0"/><path d="M12 8v8"/></svg></div>
        <div className="inc-sm-title">Comprehensive Analysis</div>
        <p className="inc-sm-body">Assesses how well your body is managing its levels and musculoskeletal health.</p>
      </div>
      <div className="inc-sm g-pop">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(255,153,154,.15) 0%, rgba(255,153,154,.02) 100%)", color: "var(--coral)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(255,153,154,.2)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="12" r="3"/></svg></div>
        <div className="inc-sm-title">Health markers</div>
        <p className="inc-sm-body">Reveals whether a deficiency is compromising your resilience to illness and infection.</p>
      </div>
      <div className="inc-sm g-pop">
        <div style={{ width: "54px", height: "54px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(131,0,233,.15) 0%, rgba(131,0,233,.02) 100%)", color: "var(--purple)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", boxShadow: "inset 1px 1px 3px rgba(255,255,255,.2)", border: "1px solid rgba(131,0,233,.2)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/><circle cx="18" cy="18" r="3" fill="var(--coral)" stroke="none"/></svg></div>
        <div className="inc-sm-title">Written results &amp; guidance</div>
        <p className="inc-sm-body">A clear report with your levels, reference ranges, and personalised next-step recommendations.</p>
      </div>
    </div>
  </div>
</section>

{/*  ══ PRICING ════════════════════════════════════════════════  */}
<section id="pricing">
  <div className="wrap">
    <div className="pricing-layout">
      <div className="g-left" id="pl-left">
        <span className="stag">SIMPLE BOOKING</span>
        <h2 className="stitle">Book in Minutes.<br/>Results in Days.</h2>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy)", marginBottom: "20px" }}>What you get:</h3>
        <ul className="pricing-perks">
          <li><div className="perk-dot">✓</div>Total clinical measurement</li>
          <li><div className="perk-dot">✓</div>Balance assessment</li>
          <li><div className="perk-dot">✓</div>Immune health markers included</li>
          <li><div className="perk-dot">✓</div>Written results with personalised guidance</li>
          <li><div className="perk-dot">✓</div>No GP referral required</li>
          <li><div className="perk-dot">✓</div>Professional clinical environment</li>
        </ul>
        <p className="pricing-note">Please confirm current pricing when booking online or by calling the clinic.</p>
      </div>
      <div className="g-pop" id="pl-card">
        <div className="price-card-clay">
          <p className="price-eyebrow">{data.title} - Milton Keynes</p>
          <div className="price-num" style={{ fontSize: "2.8rem", letterSpacing: "-1px", padding: "20px 0", lineHeight: 1.1 }}>Get Your Price</div>
          <p className="price-sub">Single appointment · Results within 48–72 hours</p>
          <a href="https://svraesthetics.co.uk/book-free-consultation/" className="btn-book-price" id="price-cta">
            {data.buttonText || 'Book your test'} &nbsp;→
          </a>
          <p className="price-disclaimer">Pricing confirmed at your free consultation — no obligation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ══ FAQ ════════════════════════════════════════════════════  */}
<section id="faq">
  <div className="wrap">
    <div className="faq-layout">
      <div className="faq-sticky g-left" id="faq-side">
        <span className="stag">FAQs</span>
        <h2 className="stitle">Got questions?</h2>
        <p>Everything you need to know about the {data.title} at our Milton Keynes clinic - before you book.</p>
        <a href="https://svraesthetics.co.uk/book-free-consultation/" className="btn-faq-book" id="faq-cta">{data.buttonText || 'Book your test'}</a>
      </div>

      <div className="faq-items g-up" id="faq-list">
        
        {/* Dynamic Specific FAQs */}
        {data.faqs && data.faqs.map((faq, i) => (
          <div className="faq-c" id={`faq-dyn-${i}`} key={i}>
            <div className="faq-q" role="button" tabIndex={0} aria-expanded="false" onClick={() => { tfaq(`faq-dyn-${i}`) }}>
              <span>{faq.question}</span><div className="faq-ico">+</div>
            </div>
            <div className="faq-ans"><div className="faq-ans-i">{faq.answer}</div></div>
          </div>
        ))}

        {/* General Clinic FAQs */}
        <div className="faq-c" id="faq-1">
          <div className="faq-q" role="button" tabIndex={0} aria-expanded="false" onClick={() => { tfaq('faq-1') }}>
            <span>Do I need a GP referral?</span><div className="faq-ico">+</div>
          </div>
          <div className="faq-ans"><div className="faq-ans-i">No - you can book directly with SVR Aesthetics without a referral. Our clinicians carry out the blood draw and send your sample to an accredited laboratory. Results are returned to you directly, usually within 48–72 hours.</div></div>
        </div>

        <div className="faq-c" id="faq-2">
          <div className="faq-q" role="button" tabIndex={0} aria-expanded="false" onClick={() => { tfaq('faq-2') }}>
            <span>How is the test done?</span><div className="faq-ico">+</div>
          </div>
          <div className="faq-ans"><div className="faq-ans-i">A small venous blood sample is taken from your arm by our trained clinicians. The process takes just a few minutes and is minimally discomforting. The sample is then sent to a certified lab for analysis.</div></div>
        </div>

        <div className="faq-c" id="faq-3">
          <div className="faq-q" role="button" tabIndex={0} aria-expanded="false" onClick={() => { tfaq('faq-3') }}>
            <span>What happens if my results are out of range?</span><div className="faq-ico">+</div>
          </div>
          <div className="faq-ans"><div className="faq-ans-i">If your results are outside the optimal range, your written report will clearly indicate this. We recommend sharing these results with your GP or a medical specialist to discuss treatment options.</div></div>
        </div>

        <div className="faq-c" id="faq-5">
          <div className="faq-q" role="button" tabIndex={0} aria-expanded="false" onClick={() => { tfaq('faq-5') }}>
            <span>Do I need to fast before the test?</span><div className="faq-ico">+</div>
          </div>
          <div className="faq-ans"><div className="faq-ans-i">Fasting requirements depend on the specific test. We will confirm any specific preparation instructions at the time of booking if needed.</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ══ FOOTER ══════════════════════════════════════════════════  */}
<footer id="footer" role="contentinfo">
  <div className="footer-inner">

    <div className="ft-reviews-strip g-up">
      <h4 className="ft-reviews-label">What our clients say <span style={{ color: 'rgba(255,255,255,.35)', fontWeight: '500', fontSize: '.85em' }}>&nbsp;· Google Reviews</span></h4>
      <div className="ft-reviews-row">
        <div className="ft-review-card">
          <div className="ft-stars">★★★★★</div>
          <p className="ft-review-text">"I fully recommend SVR aesthetics! I was listened to, given good advice and the result of my procedure was even better than I could have hoped for. Fantastic service, amazing result."</p>
          <span className="ft-review-by">Rachel Robinson</span>
        </div>
        <div className="ft-review-card">
          <div className="ft-stars">★★★★★</div>
          <p className="ft-review-text">"First time visit and very good experience, felt very comfortable and would definitely recommend to friends and family! Very clean clinic and gives really good skin advice."</p>
          <span className="ft-review-by">Riya Patel</span>
        </div>
        <div className="ft-review-card">
          <div className="ft-stars">★★★★★</div>
          <p className="ft-review-text">"Great friendly service! Great product used for lip fillers. Thanks! Holly R."</p>
          <span className="ft-review-by">Ryan Hill</span>
        </div>
        <div className="ft-review-card">
          <div className="ft-stars">★★★★★</div>
          <p className="ft-review-text">"Lovely experience and knowledgeable."</p>
          <span className="ft-review-by">Anne-Marie Mosley</span>
        </div>
      </div>
    </div>

    <div className="footer-top">

      <div className="ft-brand g-up">
        <a href="https://svraesthetics.co.uk/" aria-label="SVR Aesthetics">
          <img src="/SVR-Aesthetics-logo.webp" alt="SVR Aesthetics" />
        </a>
        <p>Professional Cosmetic Care To Help You Look And Feel As Good As You Can.</p>
        <div className="ft-social">
          <a href="https://www.facebook.com/svraesthetics" className="social-pill" aria-label="Facebook" target="_blank" rel="noopener">f</a>
          <a href="https://www.instagram.com/svraesthetics" className="social-pill" aria-label="Instagram" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
        <div className="cqc-badge">
          <div style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,.15)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.65rem', fontWeight: '800', color: 'rgba(255,255,255,.7)', letterSpacing: '-.5px' }}>CQC</div>
          <div className="cqc-txt">Care Quality<br/>Commission</div>
        </div>
      </div>

      <div className="ft-col g-up">
        <h4>Quick Links</h4>
        <ul className="ft-links">
          <li><a href="https://svraesthetics.co.uk/about-us/">About Us</a></li>
          <li><a href="https://svraesthetics.co.uk/treatments/">Treatments</a></li>
          <li><a href="https://svraesthetics.co.uk/pricing/">Pricing</a></li>
          <li><a href="https://svraesthetics.co.uk/faq/">FAQ</a></li>
          <li><a href="https://svraesthetics.co.uk/reviews/">Reviews</a></li>
          <li><a href="https://svraesthetics.co.uk/contact/">Get In Touch</a></li>
        </ul>
      </div>

      <div className="ft-col g-up">
        <h4>Policies</h4>
        <ul className="ft-links">
          <li><a href="https://svraesthetics.co.uk/privacy-policy/">Privacy Policy</a></li>
          <li><a href="https://svraesthetics.co.uk/terms-conditions/">Terms &amp; Conditions</a></li>
          <li><a href="https://svraesthetics.co.uk/complaints-policy/">Complaints Policy</a></li>
        </ul>
      </div>

      <div className="ft-col g-up">
        <h4>Working Hours</h4>
        <div className="hours-grid">
          <div className="hr-row" id="hr-wkday">
            <span className="hr-day">Monday – Friday</span>
            <span className="hr-time">10:00 am – 7:00 pm</span>
          </div>
          <div className="hr-row" id="hr-sat">
            <span className="hr-day">Saturday</span>
            <span className="hr-time">10:00 am – 8:30 pm</span>
          </div>
          <div className="hr-row" id="hr-sun">
            <span className="hr-day">Sunday</span>
            <span className="hr-time">Closed</span>
          </div>
          <p className="hr-note">Opening times (Appointment only):<br/>Mon–Thur: 10:00 PM – 04:00 PM<br/>Friday – Sat: 10:00 PM – 04:00</p>
        </div>
        <br/>
        <h4>Location</h4>
        <address style={{ fontSize: '.86rem', color: 'rgba(255,255,255,.65)', fontStyle: 'normal', lineHeight: '1.75', fontWeight: '500' }}>
          SVR Aesthetics<br/>Milton Keynes, Buckinghamshire<br/>
          <a href="https://svraesthetics.co.uk/" style={{ color: 'var(--coral)', textDecoration: 'none', fontSize: '.82rem' }}>svraesthetics.co.uk</a>
        </address>
      </div>

    </div>

    <div className="footer-bottom">
      <p>COPYRIGHT &copy; 2026 SVR AESTHETICS | ALL RIGHTS RESERVED. &nbsp;&middot;&nbsp; <a href="https://svraesthetics.co.uk/privacy-policy/">Privacy Policy</a> &nbsp;&middot;&nbsp; <a href="https://svraesthetics.co.uk/book-free-consultation/">Book Online</a></p>
    </div>
  </div>
</footer>

    </>
  );
}
