import type { Metadata } from 'next';
import GCErpDemo from '@/src/views/demo/GCErpDemo';

export const metadata: Metadata = {
  title: 'GC-ERP Interactive Demo',
  description: 'Explore a browser-based GC-ERP simulation across procurement, inventory, manufacturing, finance, and audit.',
  alternates: { canonical: '/demo/gc-erp' },
};

export default function Page() {
  return <GCErpDemo />;
}
