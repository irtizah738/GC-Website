import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Boxes,
  Check,
  GitBranch,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import Section from '../components/Section';
import { caseStudies } from '../data/case-studies';

const studyIcons = [Boxes, Stethoscope];

export default function CaseStudies() {
  return (
    <div className="pt-16">
      <SEO
        title="Product Engineering Studies | Gotham Coders"
        description="Transparent engineering studies showing how Gotham Coders approaches ERP, healthcare, workflow, auditability, and enterprise product design."
        pathname="/case-studies"
      />

      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Evidence & product studies</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Show the work. Label the evidence correctly.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            These are product engineering studies built from Gotham Coders-owned systems and public simulations. We distinguish demos, R&D, and production evidence instead of turning prototypes into customer claims.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            ['Product study', 'Architecture and workflow decisions are documented.'],
            ['Public simulation', 'Interactive demos use synthetic sample data.'],
            ['Verified claim only', 'Customer or performance claims require evidence before publication.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-2 text-xs leading-5 text-zinc-500">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {caseStudies.map((study, index) => {
        const Icon = studyIcons[index] ?? GitBranch;
        return (
          <Section
            key={study.id}
            id={study.id}
            className="border-b border-zinc-800"
            variant={index % 2 ? 'muted' : 'default'}
          >
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <Icon className="h-5 w-5 text-zinc-300" />
                </div>
                <p className="mt-7 text-sm font-semibold text-zinc-500">{study.client}</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
                  {study.title}
                </h2>
                <p className="mt-4 text-sm font-medium text-zinc-500">{study.industry}</p>
              </div>

              <div className="space-y-4">
                {[
                  ['Problem context', study.problemContext],
                  ['System complexity', study.systemComplexity],
                  ['Architecture decisions', study.architectureDecisions],
                  ['Trade-offs', study.tradeoffs],
                ].map(([label, copy]) => (
                  <div key={label} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">{label}</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{copy}</p>
                  </div>
                ))}

                <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/15 p-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-400">Current evidence</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{study.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <Link
                    to={study.id.startsWith('gc-erp') ? '/demo/gc-erp' : '/demo/g-hims'}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
                  >
                    Open product demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
                  >
                    Discuss a similar system
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="text-center">
        <ShieldCheck className="mx-auto h-6 w-6 text-zinc-600" />
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Customer proof should become stronger as evidence becomes stronger.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          As deployments produce permissioned references, measured outcomes, and implementation evidence, this section can graduate from product studies to verified customer stories.
        </p>
      </Section>
    </div>
  );
}
