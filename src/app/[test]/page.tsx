import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { bloodTests } from '@/data/bloodTests';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ test: string }> }): Promise<Metadata> {
  const { test } = await params;
  const data = bloodTests[test];
  
  if (!data) return {};

  return {
    title: data.title,
    description: data.heroDescription,
  };
}

export function generateStaticParams() {
  return Object.keys(bloodTests)
    .filter((test) => bloodTests[test].linkPrefix !== '/blog')
    .map((test) => ({
      test: test,
    }));
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ test: string }>;
}) {
  const { test } = await params;
  const data = bloodTests[test];

  if (!data || data.linkPrefix === '/blog') {
    notFound();
  }

  return <LandingPageTemplate data={data} />;
}
