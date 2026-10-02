import Link from '../components/AppLink';
import {
  ArrowRight,
  Boxes,
  Building2,
  Check,
  CloudCog,
  Database,
  GitBranch,
  Layers3,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import Section from '../components/Section';
import EnterpriseProductShowcase from '../components/product/EnterpriseProductShowcase';

const capabilities = [
  {
    icon: Boxes,
    title: 'GC-ERP',
    description: 'Connected finance, procurement, inventory and manufacturing workflows built around the way your business actually operates.',
    href: '/products/gc-erp',
    cta: 'Explore ERP',
  },
  {
    icon: Stethoscope,
    title: 'G-HIMS',
    description: 'Clinical, financial and operational hospital workflows with offline resilience, traceability and role-aware controls.',
    href: '/products/g-hims',
    cta: 'Explore HIMS',
  },
  {
    icon: CloudCog,
    title: 'Custom Enterprise Systems',
    description: 'Custom enterprise platforms for organizations whose workflows, authority models, or operating constraints do not fit generic software.',
    href: '/systems',
    cta: 'Explore solutions',
  },
];

const workflow = [
  { step: '01', title: 'Order', detail: 'Demand enters the system' },
  { step: '02', title: 'Reserve', detail: 'Availability is checked' },
  { step: '03', title: 'Supply', detail: 'Buy or produce shortages' },
  { step: '04', title: 'Fulfil', detail: 'Inventory and delivery update' },
  { step: '05', title: 'Post', detail: 'Finance receives the event' },
  { step: '06', title: 'Audit', detail: 'Every change remains traceable' },
];

const principles = [
  {
    icon: GitBranch,
    title: 'Event-driven',
    copy: 'Business events connect operational domains without hiding the history of how state changed.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit-first',
    copy: 'Permissions, approvals and material state changes are designed to remain attributable and explainable.',
  },
  {
    icon: Layers3,
    title: 'Multi-tenant',
    copy: 'Tenant boundaries and role-aware access are treated as architecture, not as a UI convention.',
  },
  {
    icon: Database,
    title: 'Data integrity',
    copy: 'Critical records are validated server-side and designed around durable, recoverable workflows.',
  },
];

export default function Home() {
  return (
    <div className="pt-16">

      <Section className="relative overflow-hidden border-b border-zinc-800/80 py-12 md:py-16" animate={false}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px gc-accent-line opacity-90" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-18rem] h-[34rem] w-[50rem] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-indigo-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Enterprise systems engineering</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">GC-ERP &amp; G-HIMS</span>
          </div>

          <h1 className="text-balance text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Enterprise systems built around how your business actually operates.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-400 md:text-xl">
            ERP, healthcare and custom operational platforms engineered for complex workflows, critical data and environments where reliability matters.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 sm:w-auto"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/demo/gc-erp"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-600 hover:bg-zinc-800 sm:w-auto"
            >
              Launch interactive sandbox
            </Link>
          </div>
        </div>

        <div className="gc-panel mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl p-2 lg:mt-16">
          <div className="mb-2 flex items-center justify-between rounded-2xl border border-[#1e293b] bg-[#0f1523] px-4 py-3">
            <div>
              <p className="text-xs font-semibold text-indigo-300">GC Enterprise UI · Interactive preview</p>
              <p className="mt-0.5 text-xs text-zinc-400">Switch modules and inspect how operational and financial state stay connected.</p>
            </div>
            <div className="hidden items-center gap-2 text-xs text-emerald-300 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Operational</span>
            </div>
          </div>
          <EnterpriseProductShowcase />
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 border-t border-zinc-800/80 pt-6 md:grid-cols-4">
          {[
            ['Operations', 'Connected workflows'],
            ['Architecture', 'Event-driven core'],
            ['Security', 'Role-aware boundaries'],
            ['Reliability', 'Built for critical data'],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs font-semibold text-zinc-500">{label}</p>
              <p className="mt-1 text-sm font-medium text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b border-zinc-800/80">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-zinc-500">Flagship products</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Products that prove how we think about complex operations.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-400 lg:justify-self-end">
            G-HIMS and GC-ERP are Gotham Coders products. Custom enterprise systems are the solutions layer built from the same architecture-first engineering discipline.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description, href, cta }) => (
            <Link
              key={title}
              to={href}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/45 p-7 transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950">
                <Icon className="h-5 w-5 text-zinc-300" />
              </div>
              <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-zinc-400">{description}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200">
                {cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-b border-zinc-800/80 bg-black">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-zinc-500">Connected operations</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            One business transaction should not become six disconnected workflows.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            A modern ERP should preserve the operational chain from demand to fulfilment to finance while making exceptions visible before they become reconciliation work.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-3 xl:grid-cols-6">
          {workflow.map((item, index) => (
            <div key={item.step} className="relative bg-zinc-950 p-5">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-zinc-600">{item.step}</p>
              <p className="mt-8 text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">{item.detail}</p>
              {index < workflow.length - 1 && (
                <ArrowRight className="absolute right-3 top-5 hidden h-3.5 w-3.5 text-zinc-700 xl:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/demo/gc-erp" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300">
            Open the interactive ERP sandbox
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section className="border-b border-zinc-800/80">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-zinc-500">Enterprise engineering</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              The interface is only the visible layer.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">
              The harder work is protecting authority boundaries, keeping data consistent, recovering from failure and making system behavior explainable.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-xs font-semibold text-indigo-300">Command-to-Ledger Trust Pipeline</p>
              <div className="mt-4 space-y-2.5 text-xs">
                {[
                  ['01. Client Surface', 'Submits intent with idempotency key; never mutates state directly'],
                  ['02. Trust Boundary', 'Server validates identity, tenant RLS, role, and approval authority'],
                  ['03. Invariant Gate', 'Domain service verifies stock, clinical, or accounting rules'],
                  ['04. Durable Commit', 'Append-only ledger entry + transactional outbox event recorded'],
                ].map(([stage, desc]) => (
                  <div key={stage} className="grid gap-2 rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-3.5 py-2.5 sm:grid-cols-[145px_1fr]">
                    <span className="font-mono font-semibold text-white">{stage}</span>
                    <span className="text-zinc-400">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/approach"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
            >
              See our engineering approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <Icon className="h-5 w-5 text-zinc-400" />
                <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800/80 bg-black">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-zinc-500">Research &amp; engineering evidence</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Claims backed by published research papers and repository evidence.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-white hover:text-zinc-300"
          >
            Explore full evidence library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              meta: 'G-HIMS · Clinical Intelligence Research',
              title: 'From Fragmented Records to Clinical Context',
              copy: '19-page concept-validation paper and 29-page technical architecture white paper on longitudinal Patient 360 projections and provenance.',
              href: '/case-studies#clinical-intelligence-concept-validation',
              cta: 'Read clinical research',
            },
            {
              meta: 'G-HIMS · Revenue Integrity Research',
              title: 'From Patient Activity to Financial Truth',
              copy: 'Deterministic reconciliation across patient orders, fulfillment, billing, advances, subledgers, and general-ledger postings.',
              href: '/case-studies#revenue-integrity-concept-validation',
              cta: 'Read revenue study',
            },
            {
              meta: 'GC-ERP · Systems & Security Study',
              title: 'Multi-Tenant ERP with Immutable Ledgers',
              copy: 'PostgreSQL row-level security, append-only inventory movements, immutable financial journals, and transactional outbox reliability.',
              href: '/case-studies#gc-erp-ledgers-security',
              cta: 'Read ERP architecture study',
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <p className="text-xs font-semibold text-zinc-500">{item.meta}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{item.copy}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 group-hover:text-white">
                {item.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-b border-zinc-800/80 bg-zinc-900/40">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-zinc-500">Product experience</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
                See the workflow, not just the pitch.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                Our public demos are intentionally transparent simulations. They show how we structure operational state, commands and audit history without pretending a marketing sandbox is a production deployment.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/demo/gc-erp" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200">
                  Launch GC-ERP demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/demo/g-hims" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900">
                  Launch G-HIMS demo
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ['Role-aware views', 'Different teams need different operational surfaces.'],
                ['Traceable state changes', 'Actions should remain attributable after the dashboard changes.'],
                ['Cross-domain workflows', 'Operational and financial consequences should stay connected.'],
              ].map(([title, copy]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-500">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 text-center md:py-24">
        <Building2 className="mx-auto h-6 w-6 text-zinc-600" />
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Need software that matches the reality of your operation?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          Tell us what your teams are coordinating today, where data breaks down and what your current software cannot model.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Discuss your system
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
