import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';
import Section from '../components/Section';

export const posts = [
  {
    title: 'Event-Driven Architecture: A Practical Guide',
    excerpt: 'Commands, events, idempotency, projections, and the authority boundaries that keep event-driven systems understandable.',
    date: 'Engineering Notes',
    readTime: '2 min read',
    category: 'Architecture',
    slug: 'event-driven-architecture-guide',
  },
  {
    title: 'Healthcare Systems: Security by Design',
    excerpt: 'Data boundaries, least privilege, auditability, shared-device behavior, and why technical controls alone do not establish compliance.',
    date: 'Engineering Notes',
    readTime: '2 min read',
    category: 'Healthcare',
    slug: 'hipaa-compliant-systems',
  },
  {
    title: 'ERP System Design: Lessons from the Trenches',
    excerpt: 'Inventory state, reversals, reconciliation, and why an apparently successful screen update may still represent incomplete business work.',
    date: 'Engineering Notes',
    readTime: '2 min read',
    category: 'Enterprise',
    slug: 'erp-system-design-lessons',
  },
];

export default function Blog() {
  return (
    <div className="pt-16">
      <SEO
        title="Engineering Notes | Gotham Coders"
        description="Architecture, enterprise systems, healthcare, and operational software notes from Gotham Coders."
        pathname="/blog"
      />

      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Engineering notes</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Short notes on systems that have to survive real operations.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Practical thinking about authority, data integrity, workflow, recovery, ERP, healthcare, and the trade-offs behind enterprise software.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex min-h-80 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[10px] font-semibold text-zinc-500">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-600">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <FileText className="mt-10 h-5 w-5 text-zinc-600" />
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-500">{post.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-300">
                Read note
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
