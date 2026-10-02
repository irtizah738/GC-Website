import type { Metadata } from 'next';
import GCErpProduct from '@/src/views/GCErpProduct';

export const metadata: Metadata = {
  title: 'GC-ERP Enterprise Operations Platform',
  description: 'Explore GC-ERP, Gotham Coders’ connected enterprise operations platform for procurement, inventory, manufacturing, finance, and audit.',
  alternates: { canonical: '/products/gc-erp' },
};

export default function Page() {
  return <GCErpProduct />;
}
