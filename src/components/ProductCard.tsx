import Link from 'next/link';
import Image from 'next/image';
import { BloodTestData } from '../data/bloodTests';

export default function ProductCard({ test }: { test: BloodTestData }) {
  // Use the test's aboutImage or fallback to a default image
  const imageUrl = test.aboutImage ? `/${test.aboutImage}` : '/hero-bg.jpg';

  return (
    <div className="editorial-card">
      <Link href={`${test.linkPrefix || ''}/${test.id}`} className="ed-image-link">
        <Image src={imageUrl} alt={test.title} fill className="ed-image" style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="ed-category-badge">{test.category}</div>
      </Link>
      
      <div className="ed-content">
        <Link href={`${test.linkPrefix || ''}/${test.id}`} className="ed-title-link">
          <h3 className="ed-title">{test.title}</h3>
        </Link>
        <p className="ed-desc">
          {test.heroDescription}
        </p>
        
        <div className="ed-footer">
          <div className="ed-price-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {test.price.toLowerCase().includes('starting from') ? (
              <>
                <span style={{ fontSize: '0.75rem', color: '#8892a0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px', lineHeight: 1 }}>Starting from</span>
                <span className="ed-price" style={{ lineHeight: 1, marginTop: '2px' }}>{test.price.replace(/starting from/i, '').trim()}</span>
              </>
            ) : (
              <span className="ed-price">{test.price}</span>
            )}
          </div>
          <Link href={`${test.linkPrefix || ''}/${test.id}`} className="ed-btn">
            View Details 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
