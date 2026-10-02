import Link from '../components/AppLink';
import {
  ArrowRight,
  Boxes,
  Factory,
  GitBranch,
  Landmark,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Workflow,
} from 'lucide-react';
import Section from '../components/Section';
import EnterpriseProductShowcase from '../components/product/EnterpriseProductShowcase';

const domains = [
  { icon: ShoppingCart, title: 'Procurement', copy: 'Supplier commitments, approvals, purchase orders, and receiving workflows.' },
  { icon: PackageCheck, title: 'Inventory', copy: 'On-hand, reserved, transfer, reorder, and warehouse operational state.' },
  { icon: Factory, title: 'Manufacturing', copy: 'Work orders, production progress, materials, and operational execution.' },
  { icon: Landmark, title: 'Finance', copy: 'Operational consequences connected to receivables, payables, journals, and reporting.' },
];

const flow = [
  ['01', 'Demand', 'A customer or operating requirement creates work.'],
  ['02', 'Availability', 'Inventory and committed supply are checked.'],
  ['03', 'Supply', 'Shortages drive procurement or production.'],
  ['04', 'Fulfilment', 'Material movement and delivery update operational state.'],
  ['05', 'Finance', 'The business event produces its financial consequence.'],
  ['06', 'Audit', 'The full transaction chain remains explainable.'],
];

export default function GCErpProduct() {
  return (
    <div className="pt-16">
      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-400">
            Product development
          </div>
          <p className="mt-7 text-sm font-semibold text-zinc-500">GC-ERP • Enterprise Operations Platform</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            ERP designed around the transaction chain, not a collection of disconnected modules.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            GC-ERP is being developed as a connected operations platform for procurement, inventory, manufacturing, finance, and audit-heavy business workflows.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/demo/gc-erp"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              Explore interactive sandbox
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
            >
              Discuss ERP requirements
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <EnterpriseProductShowcase />
      </Section>

      <Section className="border-b border-zinc-800 bg-black">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Workflow className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              One business event should carry its consequences across the system.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The public product experience focuses on the operational chain rather than treating every department as an isolated CRUD application.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800">
            {flow.map(([step, title, copy]) => (
              <div key={step} className="grid gap-3 bg-zinc-950 p-5 sm:grid-cols-[44px_130px_1fr]">
                <span className="text-xs font-semibold text-zinc-700">{step}</span>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm leading-6 text-zinc-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {domains.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <Icon className="h-5 w-5 text-zinc-500" />
              <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <GitBranch className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Product claims will graduate with evidence.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              GC-ERP is currently showcased through its product model and interactive sandbox. Production deployment, customer outcome, and scale claims will be added only when independently supportable.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-400" />
              <div>
                <p className="text-sm font-semibold text-white">Current public evidence</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  The website demonstrates a connected procurement → inventory → manufacturing → finance → audit sandbox with role-oriented operational surfaces. It is labeled as a browser simulation, not a live customer deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <Boxes className="mx-auto h-6 w-6 text-zinc-600" />
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Need an ERP shaped around your operating model?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          We can map the transaction chain, authority boundaries, inventory model, and financial consequences before deciding what should be standardized or custom.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Discuss GC-ERP
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
