import type { Metadata } from 'next';
import CaseStudies from '@/src/views/CaseStudies';

export const metadata: Metadata = {
  title: 'Research, Case Studies & Evidence',
  description:
    'Explore Gotham Coders research papers, product engineering case studies, technical white papers, architecture documents, qualification evidence, and engineering notes for G-HIMS and GC-ERP.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Research, Case Studies & Evidence | Gotham Coders',
    description:
      'Research papers, product engineering studies, technical architecture, validation evidence, and engineering notes behind G-HIMS and GC-ERP.',
    url: '/case-studies',
  },
};

export default function Page() {
  return <CaseStudies />;
}
