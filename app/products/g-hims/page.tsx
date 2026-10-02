import type { Metadata } from 'next';
import GHimsProduct from '@/src/views/GHimsProduct';

export const metadata: Metadata = {
  title: 'G-HIMS Hospital Operating System',
  description: 'Explore G-HIMS, the Gotham Coders hospital operating system spanning clinical, financial, supply-chain, workforce, and offline operational workflows.',
  alternates: { canonical: '/products/g-hims' },
};

export default function Page() {
  return <GHimsProduct />;
}
