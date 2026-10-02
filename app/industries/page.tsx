import type { Metadata } from 'next';
import Industries from '@/src/pages/Industries';

export const metadata: Metadata = {
  title: 'Industries & Operational Environments',
  description: 'Enterprise systems for healthcare, manufacturing, multi-site organizations, and regulated operational environments.',
  alternates: { canonical: '/industries' },
};

export default function Page() {
  return <Industries />;
}
