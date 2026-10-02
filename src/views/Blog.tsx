import Link from '../components/AppLink';
import { ArrowRight, Clock, FileText } from 'lucide-react';
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

      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
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
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="font-semibold text-zinc-400">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <FileText className="mt-6 h-5 w-5 text-zinc-500" />
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
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
