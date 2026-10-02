import Image from 'next/image';
import Link from '../components/AppLink';
import {
  ArrowRight,
  Check,
  GitBranch,
  ShieldCheck,
  Stethoscope,
  Workflow,
} from 'lucide-react';
import Section from '../components/Section';

const team = [
  {
    name: 'Irtiza Haider',
    role: 'Founder & CEO',
    focus: 'Product strategy, enterprise architecture, ERP/HMIS systems, and go-to-market.',
    image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1749992405/IMG-20230106-WA0013_lixkqr.jpg',
  },
  {
    name: 'Areeba Batool',
    role: 'Head of Engineering',
    focus: 'Data engineering, backend systems, automated pipelines, and AI/ML data workflows.',
    image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1775505240/areeba_lkhbqh.png',
  },
  {
    name: 'Ufaq Waqas',
    role: 'Chief Medical Officer',
    focus: 'Clinical workflow design, hospital operations, and healthcare product validation.',
    image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1750199539/download_lckqja.png',
  },
];

const operatingPrinciples = [
  'Start with workflow, authority, and failure modes before selecting implementation patterns.',
  'Treat critical data as evidence: attributable, recoverable, and hard to silently overwrite.',
  'Keep product claims proportional to deployment and validation evidence.',
  'Prefer systems that operators can understand during exceptions, not only on the happy path.',
];

export default function About() {
  return (
    <div className="pt-16">

      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Company</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            We build operational systems for environments where software cannot be casual.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Gotham Coders focuses on enterprise software that coordinates people, money, inventory, clinical activity, approvals, and critical records across real operational constraints.
          </p>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-zinc-500">Why we exist</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              The difficult part of enterprise software is not drawing the screen.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The difficult part is deciding what happens when two departments disagree, a device goes offline, a user retries the same command, an integration fails halfway through, or an auditor asks why a critical record changed.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Workflow,
                title: 'Operational modeling',
                copy: 'We map the real workflow, including exceptions, partial completion, authority boundaries, and recovery paths.',
              },
              {
                icon: GitBranch,
                title: 'Event-driven thinking',
                copy: 'Important business facts can drive downstream read models and integrations without losing the history of change.',
              },
              {
                icon: ShieldCheck,
                title: 'Trusted boundaries',
                copy: 'Sensitive commands are validated where authority can actually be enforced—not only in the browser.',
              },
              {
                icon: Stethoscope,
                title: 'Domain collaboration',
                copy: 'Healthcare and other high-stakes domains require engineering decisions to be tested against operational expertise.',
              },
            ].map(({ icon: Icon, title, copy }) => (
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
            <p className="text-sm font-semibold text-zinc-500">How we work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Architecture is a sequence of explicit trade-offs.
            </h2>
          </div>

          <div className="space-y-3">
            {operatingPrinciples.map((item, index) => (
              <div key={item} className="grid gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:grid-cols-[36px_1fr]">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-900 text-[10px] font-semibold text-zinc-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-7 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Leadership</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            Product, engineering, and domain expertise in the same room.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            Our leadership structure reflects the systems we build: product decisions, technical architecture, and domain reality need to challenge one another early.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-zinc-500">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{member.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
          <Check className="h-4 w-4" />
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Bring us the workflow that your current software cannot model safely.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          We can start from the operational problem, map the authority and data boundaries, and determine whether a custom system is justified.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Start the discussion
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
