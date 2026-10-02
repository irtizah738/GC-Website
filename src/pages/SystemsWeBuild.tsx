import Link from '../components/AppLink';
import {
  ArrowRight,
  Boxes,
  Check,
  CloudCog,
  Database,
  Factory,
  GitBranch,
  Globe2,
  Landmark,
  Network,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  UsersRound,
} from 'lucide-react';
import Section from '../components/Section';
import EnterpriseProductShowcase from '../components/product/EnterpriseProductShowcase';

const erpModules = [
  { icon: Landmark, title: 'Finance', copy: 'General ledger, receivables, payables, cash visibility and operational posting.' },
  { icon: ShoppingCart, title: 'Procurement', copy: 'Requisitions, approvals, purchase orders, receipts and supplier control.' },
  { icon: PackageCheck, title: 'Inventory', copy: 'Stock, locations, reservations, transfers, reorder signals and valuation.' },
  { icon: Factory, title: 'Manufacturing', copy: 'Work orders, material requirements, production progress and operational costing.' },
  { icon: UsersRound, title: 'People & access', copy: 'Role-aware workspaces, authority boundaries and accountable actions.' },
  { icon: Database, title: 'Reporting & audit', copy: 'Operational read models, reconciliations and traceable event history.' },
];

const himsModules = [
  'Patient registration and longitudinal records',
  'OPD and inpatient clinical workflows',
  'Diagnostics, pharmacy and inventory',
  'Billing and revenue integrity',
  'Offline-capable operational workflows',
  'Role, credential and tenant boundaries',
];

const platformCapabilities = [
  'Multi-tenant SaaS foundations',
  'Workflow and approval engines',
  'Event-driven integration layers',
  'Offline-first field applications',
  'Operational analytics and reporting',
  'Domain-specific command surfaces',
];

const architecture = [
  {
    icon: GitBranch,
    title: 'Events preserve the business story',
    copy: 'Critical changes are modeled so systems can explain how operational state reached its current form.',
  },
  {
    icon: ShieldCheck,
    title: 'Authority is enforced beyond the UI',
    copy: 'Identity, tenant context, roles and command validation belong at trusted boundaries, not only in buttons and menus.',
  },
  {
    icon: Network,
    title: 'Domains stay connected without becoming tangled',
    copy: 'Operational modules exchange durable business facts rather than depending on fragile screen-to-screen coupling.',
  },
  {
    icon: Globe2,
    title: 'Deployment follows operational reality',
    copy: 'We account for intermittent networks, shared devices, integrations and gradual rollouts rather than assuming ideal infrastructure.',
  },
];

export default function SystemsWeBuild() {
  return (
    <div className="pt-16">

      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Products & systems</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Operational software should reflect the business, not force the business into the software.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            We build ERP, healthcare and custom enterprise platforms where workflows cross departments and the cost of missing context is high.
          </p>
        </div>
      </Section>

      <Section id="erp-systems" className="border-b border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
              <Boxes className="h-5 w-5 text-zinc-300" />
            </div>
            <p className="mt-7 text-sm font-semibold text-zinc-500">GC-ERP</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              One operating system for the movement of money, material and work.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              GC-ERP is designed around connected transactions: demand drives inventory decisions, shortages drive supply, receipts change stock, and operational consequences flow into finance and audit.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/demo/gc-erp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Explore interactive demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
              >
                Discuss ERP
              </Link>
            </div>
          </div>

          <div>
            <EnterpriseProductShowcase />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {erpModules.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <Icon className="h-4 w-4 text-zinc-500" />
                  <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="hmis-healthcare" className="border-b border-zinc-800 bg-black">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
              <Stethoscope className="h-5 w-5 text-zinc-300" />
            </div>
            <p className="mt-7 text-sm font-semibold text-zinc-500">G-HIMS</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Hospital operations where clinical, financial and operational events remain connected.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              G-HIMS is built for environments where partial workflows, weak connectivity, shared devices and strict accountability are part of everyday hospital operations.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {himsModules.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm leading-6 text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/demo/g-hims"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Explore HIMS demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://g-hims-gateway.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
              >
                Visit G-HIMS
                <Globe2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Clinical operations</p>
                <p className="mt-2 text-xl font-semibold text-white">Patient journey</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">Connected</span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ['01', 'Registration', 'Identity and encounter context established'],
                ['02', 'Consultation', 'Clinical documentation and orders recorded'],
                ['03', 'Diagnostics / Pharmacy', 'Orders move into fulfillment workflows'],
                ['04', 'Billing', 'Financial consequences remain tied to care activity'],
                ['05', 'Patient 360', 'Derived view reflects the longitudinal event history'],
              ].map(([step, title, copy]) => (
                <div key={step} className="grid grid-cols-[34px_1fr] gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-800 text-[10px] font-semibold text-zinc-400">{step}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="saas-platforms" className="border-b border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
              <CloudCog className="h-5 w-5 text-zinc-300" />
            </div>
            <p className="mt-7 text-sm font-semibold text-zinc-500">Custom enterprise platforms</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              When generic software cannot model your operating rules.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              We build domain-specific systems for organizations with unusual approval paths, authority models, offline requirements, integrations or data workflows.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
            {platformCapabilities.map((item, index) => (
              <div key={item} className="bg-zinc-950 p-6">
                <span className="text-[10px] font-semibold text-zinc-700">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-8 text-base font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="research-domain-specific" className="border-b border-zinc-800 bg-zinc-900/35">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Engineering beneath the product</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            Architecture decisions should survive the demo.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            Enterprise credibility is not just visual. The system must preserve authority, history, consistency and recoverability after real users, integrations and failures are introduced.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {architecture.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <Icon className="h-5 w-5 text-zinc-500" />
              <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{copy}</p>
            </div>
          ))}
        </div>

        <Link to="/approach" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300">
          Read the engineering approach
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section className="text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Your workflow is the starting point.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          Show us where information, approvals, money or inventory break down today. We will start from the operational reality rather than forcing a predetermined module map.
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
