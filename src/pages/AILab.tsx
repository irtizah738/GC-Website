import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  Check,
  FileSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import Section from '../components/Section';

const capabilities = [
  {
    icon: FileSearch,
    title: 'Summarize bounded context',
    copy: 'Use model output to compress records or workflow history that the system has already authorized the user to access.',
  },
  {
    icon: Workflow,
    title: 'Assist a governed workflow',
    copy: 'AI should propose, classify, or surface exceptions inside an existing process rather than bypassing business authority.',
  },
  {
    icon: Sparkles,
    title: 'Reduce repetitive interpretation',
    copy: 'Good candidates are tasks where humans repeatedly transform the same structured context into a draft, explanation, or review queue.',
  },
  {
    icon: ShieldCheck,
    title: 'Preserve human and system accountability',
    copy: 'Model suggestions should remain distinguishable from accepted business facts, approvals, clinical actions, and financial postings.',
  },
];

const boundaries = [
  'The model never establishes user authority or tenant access.',
  'AI output is not written as a critical fact without an explicit acceptance path.',
  'Prompts receive only the minimum context required for the task.',
  'High-impact suggestions remain attributable, reviewable, and reversible.',
  'Fallback workflows still function when the AI provider is unavailable.',
];

export default function AILab() {
  return (
    <div className="pt-16">
      <SEO
        title="AI Lab | Gotham Coders"
        description="How Gotham Coders approaches AI inside governed ERP, healthcare, and enterprise workflows."
        pathname="/ai-lab"
      />

      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">AI Lab</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            AI should make a governed system more useful—not become a second authority system.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            We treat AI as a bounded capability inside enterprise workflows. Identity, authorization, audit, and critical state transitions remain deterministic system responsibilities.
          </p>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <BrainCircuit className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Useful AI starts with a well-defined workflow boundary.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Before adding a model, we define what context it may see, what output it may produce, who reviews that output, and which system action—if any—can follow.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <Icon className="h-5 w-5 text-zinc-500" />
                <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800 bg-black">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold text-zinc-500">Guardrails</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Keep probabilistic output away from deterministic authority.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              A model can help interpret context. It should not silently decide who may access data, whether a financial transaction is valid, or whether a clinical action actually occurred.
            </p>
          </div>

          <div className="space-y-3">
            {boundaries.map((item, index) => (
              <div key={item} className="grid gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:grid-cols-[32px_1fr]">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-zinc-900 text-[9px] font-semibold text-zinc-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-6 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Product direction</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            The strongest AI features compound on first-party operational context.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            ERP and hospital systems already contain orders, transactions, events, workflow state, permissions, and audit history. AI becomes more useful when it operates on that governed context instead of asking users to manually reconstruct it in a separate chat.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            ['Revenue & reconciliation', 'Surface mismatches, missing context, and records that need human review.'],
            ['Clinical workflow support', 'Draft summaries or prepare review context without turning model output into accepted clinical facts.'],
            ['Operational intelligence', 'Explain exceptions and aggregate system history into role-appropriate operational context.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-base font-semibold text-white">{title}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
          <Check className="h-4 w-4" />
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Add intelligence after the workflow is trustworthy.
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Discuss an AI-enabled workflow
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
