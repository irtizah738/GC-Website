import type { Metadata } from 'next';
import GHimsDemo from '@/src/pages/demo/GHimsDemo';

export const metadata: Metadata = {
  title: 'G-HIMS Interactive Demo',
  description: 'Explore a synthetic browser-based G-HIMS workflow across OPD, diagnostics, pharmacy, billing, and audit.',
  alternates: { canonical: '/demo/g-hims' },
};

export default function Page() {
  return <GHimsDemo />;
}
