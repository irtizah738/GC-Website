import type { Metadata } from 'next';
import EngineeringApproach from '@/src/views/EngineeringApproach';

export const metadata: Metadata = {
  title: 'Engineering Approach',
  description: 'How Gotham Coders designs event-driven, offline-capable, multi-tenant, auditable enterprise systems.',
  alternates: { canonical: '/approach' },
};

export default function Page() {
  return <EngineeringApproach />;
}
