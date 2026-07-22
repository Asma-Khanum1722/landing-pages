import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { bloodTests } from '@/data/bloodTests';
import BlogPageTemplate from '@/components/BlogPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = bloodTests[slug];
  
  if (!data) return {};

  return {
    title: `${data.title} | SVR Aesthetics Blog`,
    description: data.heroDescription,
  };
}

export function generateStaticParams() {
  return Object.keys(bloodTests)
    .filter((test) => bloodTests[test].linkPrefix === '/blog')
    .map((test) => ({
      slug: test,
    }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = bloodTests[slug];

  // Only allow items that are specifically flagged for the blog
  if (!data || data.linkPrefix !== '/blog') {
    notFound();
  }

  return <BlogPageTemplate data={data} />;
}
