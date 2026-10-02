import type { Metadata } from 'next';
import Blog from '@/src/pages/Blog';

export const metadata: Metadata = {
  title: 'Engineering Notes',
  description: 'Architecture, enterprise systems, healthcare, and operational software notes from Gotham Coders.',
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return <Blog />;
}
