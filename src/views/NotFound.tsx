import Link from '../components/AppLink';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] pt-40" animate={false}>
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-zinc-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Page not found.</h1>
        <p className="mt-5 text-base leading-7 text-zinc-400">
          The page may have moved or the address may be incorrect.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Return home
        </Link>
      </div>
    </Section>
  );
}
