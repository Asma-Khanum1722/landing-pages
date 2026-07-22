import { Metadata } from 'next';
import Link from 'next/link';
import { bloodTests } from '@/data/bloodTests';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Blog & Educational Articles | SVR Aesthetics',
  description: 'Learn more about IV therapies, wellness panels, and health optimization at SVR Aesthetics.',
};

export default function BlogIndexPage() {
  // Filter for items that are meant for the blog
  const blogPosts = Object.values(bloodTests).filter(test => test.linkPrefix === '/blog');

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* NAV */}
      {/* NAV */}

      {/* HEADER */}
      <section style={{ padding: '80px 24px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--navy)', fontFamily: "'Poppins', sans-serif", fontWeight: 800, marginBottom: '16px' }}>
          Articles & Insights
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Deepen your understanding of our advanced wellness therapies, from IV drips to comprehensive health panels.
        </p>
      </section>

      {/* BLOG GRID */}
      <section style={{ padding: '40px 24px 100px', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {blogPosts.map(post => (
            <ProductCard key={post.id} test={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
