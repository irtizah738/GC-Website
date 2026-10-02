import type { Metadata } from 'next';
import Contact from '@/src/pages/Contact';

export const metadata: Metadata = {
  title: 'Talk to Gotham Coders',
  description: 'Discuss an ERP, healthcare, or custom enterprise system with Gotham Coders.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <Contact />;
}
