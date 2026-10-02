import { Link } from 'react-router-dom';
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
import { SEO } from '../components/SEO';
import Section from '../components/Section';
import EnterpriseProductShowcase from '../components/product/EnterpriseProductShowcase';

const capabilities = [
  {
    icon: Boxes,
    title: 'GC-ERP',
    description: 'Connected finance, procurement, inventory and manufacturing workflows built around the way your business actually operates.',
    href: '/systems#erp-systems',
    cta: 'Explore ERP',
  },
  {
    icon: Stethoscope,
    title: 'G-HIMS',
    description: 'Clinical, financial and operational hospital workflows with offline resilience, traceability and role-aware controls.',
    href: '/systems#hmis-healthcare',
    cta: 'Explore HIMS',
  },
  {
    icon: CloudCog,
    title: 'Enterprise Platforms',
    description: 'Multi-tenant SaaS and domain-specific systems for organizations whose workflows do not fit generic software.',
    href: '/systems#saas-platforms',
    cta: 'Explore platforms',
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
      <SEO
        title="Gotham Coders | Enterprise Systems for Complex Operations"
        description="Gotham Coders builds ERP, healthcare and enterprise platforms for complex operational environments."
        pathname="/"
      />

      <Section className="relative border-b border-zinc-800/80 pb-16 pt-20 md:pb-24 md:pt-28" animate={false}>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Enterprise systems engineering
          </div>

          <h1 className="text-balance text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Enterprise systems built around how your business actually operates.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-400 md:text-xl">
            ERP, healthcare and custom operational platforms engineered for complex workflows, critical data and environments where reliability matters.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/demo/gc-erp"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 sm:w-auto"
            >
              Explore GC-ERP
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-600 hover:bg-zinc-800 sm:w-auto"
            >
              Discuss your system
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl lg:mt-16">
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600">{label}</p>
              <p className="mt-1 text-sm font-medium text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b border-zinc-800/80">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-zinc-500">What we build</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Software for organizations with real operational complexity.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-400 lg:justify-self-end">
            We focus on systems where departments, money, inventory, people and critical records must stay synchronized without sacrificing traceability or control.
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
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              The interface is only the visible layer.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">
              The harder work is protecting authority boundaries, keeping data consistent, recovering from failure and making system behavior explainable.
            </p>
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

      <Section className="pb-28 pt-24 text-center md:pb-36 md:pt-32">
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
