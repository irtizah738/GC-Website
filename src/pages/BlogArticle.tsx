import { Link, useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import Section from '../components/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { posts } from './Blog';
import NotFound from './NotFound';

const notes: Record<string, Array<{ title: string; text: string }>> = {
  'event-driven-architecture-guide': [
    { title: 'Define the authority boundary', text: 'Accept commands through a trusted service. Validate identity, permissions and domain invariants before recording a business event. An event records an accepted fact; a command expresses an intention that can be rejected.' },
    { title: 'Design for retries', text: 'Give each command a stable identifier and persist its accepted result. Consumers must handle duplicate delivery without repeating business effects. Store changes and an outbox entry in one transaction, then deliver asynchronously.' },
    { title: 'Make projections recoverable', text: 'Track which events each projection has processed. Rebuild read models from retained events and compare results before switching readers. Monitor queue age and failed deliveries so delayed processing is visible.' },
  ],
  'hipaa-compliant-systems': [
    { title: 'Begin with data boundaries', text: 'Map where sensitive information enters, travels and is stored. Separate facility data, enforce least privilege on the server, and keep credentials out of browser bundles. Technical controls alone do not establish regulatory compliance.' },
    { title: 'Make access explainable', text: 'Record who accessed or changed information, the action, and its context. Protect audit records from ordinary application writes. Review access policies and shared-device behavior with the organization operating the system.' },
    { title: 'Prove recovery', text: 'Test backup restoration, session revocation and interrupted workflows. Define ownership for incident response and data retention. Obtain appropriate legal, security and operational review before making compliance claims.' },
  ],
  'erp-system-design-lessons': [
    { title: 'Separate availability from reservation', text: 'Inventory on hand, available inventory and reserved inventory represent different facts. Model receiving, reservation, release and dispatch explicitly. Reject a reservation when available quantity is insufficient.' },
    { title: 'Preserve corrections', text: 'Represent reversals and adjustments as traceable transactions. Do not silently replace historical financial or stock records. Use stable references to connect orders, goods movements and invoices.' },
    { title: 'Reconcile the full workflow', text: 'A successful screen update is not proof of a completed operation. Reconcile commands, recorded events and read models. Surface incomplete deliveries and failures so staff can resolve them without creating duplicate transactions.' },
  ],
};

export default function BlogArticle() {
  const { slug } = useParams();
  const post = posts.find(item => item.slug === slug);
  if (!post || !slug || !notes[slug]) return <NotFound />;
  return <article className="pt-20">
    <SEO title={`${post.title} | Gotham Coders`} description={post.excerpt} pathname={`/blog/${slug}`} type="article" />
    <Section><div className="max-w-3xl mx-auto space-y-8">
      <Link to="/blog" className="text-zinc-400 underline">Back to Engineering Journal</Link>
      <Text variant="caption">{post.category} · Engineering Notes</Text>
      <Heading level={1}>{post.title}</Heading>
      <Text className="text-xl">{post.excerpt}</Text>
      {notes[slug].map(note => <section key={note.title} className="space-y-4">
        <Heading level={2}>{note.title}</Heading><Text>{note.text}</Text>
      </section>)}
      <Link to="/contact" className="inline-flex px-6 py-3 bg-white text-zinc-950 rounded-xl font-bold">Discuss Your Architecture</Link>
    </div></Section>
  </article>;
}
