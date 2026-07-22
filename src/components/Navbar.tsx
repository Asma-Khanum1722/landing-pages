'use client';
import Link from 'next/link';
import Image from 'next/image';
import { bloodTests } from '@/data/bloodTests';

export default function Navbar() {
  const testsArray = Object.values(bloodTests);
  const bloodTestItems = testsArray.filter(t => t.category === 'Blood Tests');
  const ivItems = testsArray.filter(t => t.category === 'IV Vitamin Drips');
  const panelItems = testsArray.filter(t => t.category === 'Health Panels');

  return (
    <nav id="nav">
      <Link href="/" aria-label="SVR Aesthetics">
        <Image src="/SVR-Aesthetics-logo.webp" alt="SVR Aesthetics" width={140} height={50} className="nav-logo" style={{ objectFit: 'contain' }} priority />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        
        {/* Nested Dropdown */}
        <div className="nav-dropdown-wrap">
          <div className="nav-dropdown-trigger" style={{ cursor: 'pointer' }}>
            All Services <span style={{ fontSize: '0.7em', marginTop: '2px', marginLeft: '4px' }}>▼</span>
          </div>
          
          <div className="nav-dropdown-menu">
            {/* Category: Blood Tests */}
            <div className="nested-dropdown-wrap">
              <div className="nav-dropdown-item nested-trigger" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Blood Tests
                <span style={{ fontSize: '0.7em' }}>▶</span>
              </div>
              <div className="nested-dropdown-menu">
                {bloodTestItems.map(t => (
                  <Link href={`${t.linkPrefix || ''}/${t.id}`} key={t.id} className="nav-dropdown-item">
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Category: IV Drips */}
            <div className="nested-dropdown-wrap">
              <div className="nav-dropdown-item nested-trigger" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                IV Vitamin Drips
                <span style={{ fontSize: '0.7em' }}>▶</span>
              </div>
              <div className="nested-dropdown-menu">
                {ivItems.map(t => (
                  <Link href={`${t.linkPrefix || ''}/${t.id}`} key={t.id} className="nav-dropdown-item">
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Category: Health Panels */}
            <div className="nested-dropdown-wrap">
              <div className="nav-dropdown-item nested-trigger" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Health Panels
                <span style={{ fontSize: '0.7em' }}>▶</span>
              </div>
              <div className="nested-dropdown-menu">
                {panelItems.map(t => (
                  <Link href={`${t.linkPrefix || ''}/${t.id}`} key={t.id} className="nav-dropdown-item">
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a href="https://svraesthetics.co.uk/book-free-consultation/" className="nav-book" id="nav-cta" style={{ cursor: 'pointer' }}>
          Book a Test &nbsp;→
        </a>
      </div>
    </nav>
  );
}
