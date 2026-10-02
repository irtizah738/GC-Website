import type { Metadata } from 'next';
import Products from '@/src/views/Products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore G-HIMS and GC-ERP, flagship operational software products engineered by Gotham Coders.',
  alternates: { canonical: '/products' },
};

export default function Page() {
  return <Products />;
}
