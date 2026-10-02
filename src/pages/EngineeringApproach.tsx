import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  GitBranch,
  Lock,
  RefreshCcw,
  ShieldCheck,
  Users,
  WifiOff,
  Zap,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import Section from '../components/Section';
import { principles } from '../data/principles';

const iconMap: Record<string, typeof Zap> = {
  Zap,
  WifiOff,
  ShieldCheck,
  Users,
  Lock,
};

const failureSequence = [
  ['01', 'Command arrives', 'Identity, tenant context, schema and idempotency are established.'],
  ['02', 'Authority is evaluated', 'Role, department, credential and domain rules decide whether the command may proceed.'],
  ['03', 'Invariant is checked', 'The server verifies the business state still permits the requested transition.'],
  ['04', 'Event is committed', 'The accepted fact is recorded with attribution and stable identifiers.'],
  ['05', 'Read models react', 'Operational views, integrations and downstream workflows derive from committed facts.'],
  ['06', 'Failure is recoverable', 'Retries, replay and reconciliation work from durable state rather than browser assumptions.'],
];

export default function EngineeringApproach() {
  return (
    <div className="pt-16">
      <SEO
        title="Engineering Approach | Gotham Coders"
        description="How Gotham Coders designs event-driven, offline-capable, multi-tenant, auditable enterprise systems."
        pathname="/approach"
      />

      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Engineering approach</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Design for the failure modes before the happy path becomes expensive.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Our architecture work centers on authority, data integrity, recoverability, offline behavior, and the operational consequences of partial failure.
          </p>
        </div>
      </Section>

      <Section className="border-b border-zinc-800 bg-black">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <GitBranch className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              A business command is a trust-boundary crossing.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The frontend can request a change. It should not decide that the change is valid, authorized, unique, or safe.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800">
            {failureSequence.map(([step, title, copy]) => (
              <div key={step} className="grid gap-3 bg-zinc-950 p-5 sm:grid-cols-[44px_160px_1fr] sm:items-start">
                <span className="text-xs font-semibold text-zinc-700">{step}</span>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm leading-6 text-zinc-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {principles.map((principle, index) => {
        const Icon = iconMap[principle.icon] ?? ShieldCheck;
        return (
          <Section
            key={principle.id}
            id={principle.id}
            className="border-b border-zinc-800"
            variant={index % 2 ? 'muted' : 'default'}
          >
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <Icon className="h-5 w-5 text-zinc-300" />
                </div>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">
                  Principle {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">{principle.title}</h2>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">How we apply it</p>
                  <p className="mt-4 text-base leading-7 text-zinc-300">{principle.description}</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Why it matters operationally</p>
                  <p className="mt-4 text-base leading-7 text-zinc-400">{principle.whyItMatters}</p>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <RefreshCcw className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Recovery paths are product features.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Retries, partial completion, duplicate submissions, offline queues, projection lag, integration outages, and reconciliation need explicit user and operator experiences.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              'Stable command IDs and idempotent processing',
              'Explicit pending, failed, and reconciled states',
              'Replay-safe projections and adapters',
              'Audit context for operators investigating anomalies',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm leading-6 text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Architecture is useful when it protects operations under pressure.
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Discuss your architecture
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
