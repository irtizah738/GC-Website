import type { Metadata } from 'next';
import AILab from '@/src/pages/AILab';

export const metadata: Metadata = {
  title: 'AI Lab',
  description: 'How Gotham Coders approaches AI inside governed ERP, healthcare, and enterprise workflows.',
  alternates: { canonical: '/ai-lab' },
};

export default function Page() {
  return <AILab />;
}
