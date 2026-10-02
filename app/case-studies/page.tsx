import type { Metadata } from 'next';
import CaseStudies from '@/src/pages/CaseStudies';

export const metadata: Metadata = {
  title: 'Product Engineering Studies',
  description: 'Transparent engineering studies covering ERP, healthcare, workflow, auditability, and enterprise product design.',
  alternates: { canonical: '/case-studies' },
};

export default function Page() {
  return <CaseStudies />;
}
