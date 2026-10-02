import type { Metadata } from 'next';
import About from '@/src/pages/About';

export const metadata: Metadata = {
  title: 'About Gotham Coders',
  description: 'Gotham Coders builds ERP, healthcare, and domain-specific enterprise systems around operational reality and resilient architecture.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <About />;
}
