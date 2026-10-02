import type { ReactNode } from 'react';
import Link from '../components/AppLink';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  FileText,
  FlaskConical,
  GitBranch,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import Section from '../components/Section';
import {
  engineeringCaseStudies,
  engineeringNotes,
  researchPapers,
  technicalLibrary,
} from '../data/research-library';

const productIcon = {
  'G-HIMS': Stethoscope,
  'GC-ERP': Boxes,
} as const;

const researchIcon = [Microscope, FileText, BookOpen, FlaskConical];

function ResourceLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export default function CaseStudies() {
  return (
    <div className="pt-16">
      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
        <div className="max-w-5xl">
          <p className="text-sm font-semibold text-zinc-500">Research • Case Studies • Evidence</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            The research, architecture, and evidence behind the products.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            This is Gotham Coders&apos; working knowledge library: completed concept-validation research,
            technical white papers, product engineering case studies, qualification evidence, architecture
            documents, workflow studies, and engineering notes.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [researchPapers.length, 'Completed research papers', 'Clinical Intelligence, Revenue Integrity, and architecture'],
            [engineeringCaseStudies.length, 'Product case studies', 'G-HIMS and GC-ERP engineering studies'],
            [technicalLibrary.length, 'Technical evidence documents', 'Architecture, readiness, security, workflows, and tests'],
            [engineeringNotes.length, 'Engineering notes', 'Practical architecture and system-design writing'],
          ].map(([value, label, detail]) => (
            <div key={String(label)} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="font-mono text-3xl font-semibold tabular-nums tracking-tight text-white">{String(value)}</p>
              <p className="mt-3 text-sm font-semibold text-zinc-300">{String(label)}</p>
              <p className="mt-2 text-xs leading-5 text-zinc-500">{String(detail)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="research" className="border-b border-zinc-800 bg-black">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Completed research</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            Research before product claims.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            These papers were developed to test the core product theses against commercial evidence,
            peer-reviewed research, operating constraints, interoperability realities, and falsifiable pilot designs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {researchPapers.map((paper, index) => {
            const Icon = researchIcon[index] ?? BookOpen;
            return (
              <article
                key={paper.id}
                id={paper.id}
                className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-800 bg-zinc-950">
                    <Icon className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span>{paper.eyebrow}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400">Completed research</span>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-white">{paper.title}</h3>
                <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500">
                  <span>{paper.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{paper.status}</span>
                  <span aria-hidden="true">·</span>
                  <span>{paper.meta}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{paper.summary}</p>

                <div className="mt-5 space-y-2.5">
                  {paper.findings.map((finding) => (
                    <div key={finding} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                      <p className="text-sm leading-6 text-zinc-300">{finding}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 border-t border-zinc-800/80 pt-4 text-xs text-zinc-500">
                  {paper.tags.join(' · ')}
                </p>

                <div className="mt-auto pt-5">
                  <Link
                    to="/contact?interest=research"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
                  >
                    Discuss this research
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="case-studies" className="border-b border-zinc-800">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Product engineering case studies</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            How the architecture responds to real operational problems.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            These are Gotham Coders-owned engineering studies. They document the problem, architecture decision,
            and current evidence without presenting simulations or repository tests as customer deployments.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {engineeringCaseStudies.map((study, index) => {
            const Icon = productIcon[study.product];
            return (
              <article
                key={study.id}
                id={study.id}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/35"
              >
                <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="border-b border-zinc-800 p-6 md:p-8 lg:border-b-0 lg:border-r">
                    <div className="flex items-center justify-between gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-800 bg-zinc-950">
                        <Icon className="h-5 w-5 text-zinc-300" />
                      </div>
                      <span className="font-mono text-xs font-semibold tabular-nums text-zinc-500">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                    </div>
                    <p className="mt-6 text-xs font-semibold text-zinc-500">
                      {study.product} · {study.category}
                    </p>
                    <h3 className="mt-2.5 text-3xl font-semibold tracking-[-0.03em] text-white">{study.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{study.summary}</p>

                    <p className="mt-5 border-t border-zinc-800/80 pt-4 text-xs text-zinc-500">
                      {study.tags.join(' · ')}
                    </p>
                  </div>

                  <div className="grid gap-px bg-zinc-800 sm:grid-cols-3 sm:grid-rows-[1fr_auto]">
                    {[
                      ['Problem', study.problem],
                      ['Architecture decision', study.decision],
                      ['Current evidence', study.evidence],
                    ].map(([label, copy]) => (
                      <div key={label} className="bg-zinc-950 p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-600">{label}</p>
                        <p className="mt-3 text-sm leading-7 text-zinc-300">{copy}</p>
                      </div>
                    ))}

                    <div className="bg-zinc-950 px-6 py-4 sm:col-span-3">
                      <ResourceLink
                        href={study.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
                      >
                        {study.cta}
                        {study.href.startsWith('http') ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </ResourceLink>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="technical-library" className="border-b border-zinc-800 bg-zinc-900/25">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <FileCheck2 className="h-6 w-6 text-zinc-600" />
            <p className="mt-5 text-sm font-semibold text-zinc-500">Technical evidence library</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Architecture, qualification, security, workflows, and test evidence.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              These documents are linked directly to the source repositories so the public description can be checked
              against the engineering evidence.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {technicalLibrary.map((resource) => {
              const Icon = productIcon[resource.product];
              return (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-800 bg-zinc-900">
                      <Icon className="h-4 w-4 text-zinc-400" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-700 transition group-hover:text-zinc-400" />
                  </div>
                  <p className="mt-5 text-xs font-semibold text-zinc-500">
                    {resource.product} · {resource.type}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">{resource.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-6 text-zinc-400">{resource.summary}</p>
                  <p className="mt-4 border-t border-zinc-800/80 pt-3 text-xs text-zinc-500">
                    {resource.tags.join(' · ')}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="engineering-notes" className="border-b border-zinc-800">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-zinc-500">Engineering notes</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Shorter technical writing from the same engineering work.
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300">
            View all notes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {engineeringNotes.map((note) => (
            <Link
              key={note.href}
              to={note.href}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <GitBranch className="h-5 w-5 text-zinc-600" />
              <p className="mt-5 text-xs font-semibold text-zinc-500">{note.category}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{note.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{note.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-300">
                Read note
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <ShieldCheck className="mx-auto h-6 w-6 text-zinc-600" />
        <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Evidence is part of the product.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          We separate repository verification, simulation, integration readiness, external qualification, and live
          deployment evidence so the public story stays proportional to what has actually been proven.
        </p>
        <Link
          to="/contact?interest=research"
          className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Discuss the research
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
