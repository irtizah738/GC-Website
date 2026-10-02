import Link from '../components/AppLink';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { posts } from './Blog';

const notes: Record<string, Array<{ title: string; text: string }>> = {
  'event-driven-architecture-guide': [
    { title: 'Define the authority boundary', text: 'Accept commands through a trusted service. Validate identity, permissions, and domain invariants before recording a business event. An event records an accepted fact; a command expresses an intention that can still be rejected.' },
    { title: 'Design for retries', text: 'Give each command a stable identifier and persist its accepted result. Consumers must handle duplicate delivery without repeating business effects. Store changes and an outbox entry together, then deliver asynchronously.' },
    { title: 'Make projections recoverable', text: 'Track which events each projection has processed. Rebuild read models from retained events and compare results before switching readers. Monitor queue age and failed deliveries so delayed processing stays visible.' },
  ],
  'hipaa-compliant-systems': [
    { title: 'Begin with data boundaries', text: 'Map where sensitive information enters, travels, and is stored. Separate facility data, enforce least privilege on the server, and keep credentials out of browser bundles. Technical controls alone do not establish regulatory compliance.' },
    { title: 'Make access explainable', text: 'Record who accessed or changed information, the action, and its context. Protect audit records from ordinary application writes. Review access policies and shared-device behavior with the organization operating the system.' },
    { title: 'Prove recovery', text: 'Test backup restoration, session revocation, and interrupted workflows. Define ownership for incident response and data retention. Obtain appropriate legal, security, and operational review before making compliance claims.' },
  ],
  'erp-system-design-lessons': [
    { title: 'Separate availability from reservation', text: 'Inventory on hand, available inventory, and reserved inventory represent different facts. Model receiving, reservation, release, and dispatch explicitly. Reject a reservation when available quantity is insufficient.' },
    { title: 'Preserve corrections', text: 'Represent reversals and adjustments as traceable transactions. Do not silently replace historical financial or stock records. Use stable references to connect orders, goods movements, and invoices.' },
    { title: 'Reconcile the full workflow', text: 'A successful screen update is not proof of a completed operation. Reconcile commands, recorded events, and read models. Surface incomplete deliveries and failures so staff can resolve them without creating duplicate transactions.' },
  ],
};

export default function BlogArticle({ slug }: { slug: string }) {
  const post = posts.find((item) => item.slug === slug)!;

  return (
    <article className="pt-16">

      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Engineering notes
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">{post.excerpt}</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {notes[slug].map((note, index) => (
            <section key={note.title} className="grid gap-5 sm:grid-cols-[48px_1fr]">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-xs font-semibold text-zinc-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">{note.title}</h2>
                <p className="mt-4 text-base leading-8 text-zinc-400">{note.text}</p>
              </div>
            </section>
          ))}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-400">
              These notes describe engineering patterns, not guarantees that a particular architecture or control is sufficient for every deployment.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
          >
            Discuss your architecture
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </article>
  );
}
