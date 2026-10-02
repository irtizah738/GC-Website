import type { Metadata } from 'next';
import SystemsWeBuild from '@/src/views/SystemsWeBuild';

export const metadata: Metadata = {
  title: 'Enterprise Products & Systems',
  description: 'Explore GC-ERP, G-HIMS and custom enterprise platforms built for complex operational workflows.',
  alternates: { canonical: '/systems' },
};

export default function Page() {
  return <SystemsWeBuild />;
}
