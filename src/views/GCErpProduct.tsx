import Link from '../components/AppLink';
import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  Factory,
  GitBranch,
  Globe2,
  Landmark,
  Network,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  UserRoundCog,
  Workflow,
  Wrench,
} from 'lucide-react';
import Section from '../components/Section';
import EnterpriseProductShowcase from '../components/product/EnterpriseProductShowcase';

const domains = [
  { icon: BriefcaseBusiness, title: 'Sales & CRM', copy: 'Leads, opportunities, quotations, orders, invoices, communications, and customer support workflows.' },
  { icon: ShoppingCart, title: 'Procurement', copy: 'Requisitions, purchase orders, approvals, goods receipt, supplier controls, and procure-to-pay workflows.' },
  { icon: PackageCheck, title: 'Inventory & WMS', copy: 'Stock, reservations, batches, warehouses, bins, directed picking, cycle counting, and goods movement controls.' },
  { icon: Factory, title: 'Manufacturing & MES', copy: 'BOMs, routings, production orders, operations, material issue, WIP, scrap, downtime, and finished-goods receipt.' },
  { icon: ShieldCheck, title: 'Quality & compliance', copy: 'Incoming, in-process, final, and outgoing inspection workflows with holds, NCR, CAPA, and genealogy.' },
  { icon: Wrench, title: 'EAM & maintenance', copy: 'Asset hierarchies, preventive maintenance, corrective work orders, spares consumption, MTBF, MTTR, and availability.' },
  { icon: Landmark, title: 'Finance', copy: 'General ledger, AP, AR, banking, fixed assets, tax, budgeting, costing, close, and immutable financial audit views.' },
  { icon: UserRoundCog, title: 'HR & workforce', copy: 'Organization, employee lifecycle, attendance, leave, payroll, recruitment, documents, performance, and compliance.' },
  { icon: Globe2, title: 'Export & logistics', copy: 'Export CRM, customs, documents, quotations, shipments, packing, carrier tracking, and proof of delivery.' },
  { icon: GitBranch, title: 'Traceability & audit', copy: 'Cross-domain lineage, chronological event trails, impact analysis, audit evidence, and integrity inspection.' },
];

const flow = [
  ['01', 'Customer demand', 'CRM, quote, sales order, or forecast establishes demand.'],
  ['02', 'Plan & reserve', 'Availability, ATP, MRP, and reservations determine what can be fulfilled.'],
  ['03', 'Buy or produce', 'Procurement and manufacturing respond to shortages and planned work.'],
  ['04', 'Execute & inspect', 'Warehouse, MES, QMS, EAM, and logistics govern physical execution.'],
  ['05', 'Post financially', 'Operational facts produce receivable, payable, inventory, costing, and ledger consequences.'],
  ['06', 'Trace & reconcile', 'Events, ledgers, lineage, and audit evidence preserve how the transaction evolved.'],
];

const architecture = [
  ['Multi-tenant authority', 'Tenant isolation, RBAC, ABAC, policy checks, and server-side authorization are represented as trust boundaries rather than UI-only permissions.'],
  ['Event-driven domain model', 'Domain events and cross-module workflow services connect business consequences without allowing one module to silently mutate another domain.'],
  ['Immutable ledgers', 'Inventory and finance are modeled around append-only movements and postings rather than overwriting historically significant state.'],
  ['Reliable delivery', 'Outbox/inbox reliability, idempotency, conflict handling, and domain invariants are implemented as first-class infrastructure concerns.'],
  ['Offline & edge', 'IndexedDB queues, offline conflict harnesses, and industrial edge gateway services support constrained or intermittently connected operations.'],
  ['Integration-oriented', 'The repository includes APIs, event-mesh concepts, transaction mappings, workspace integrations, export/logistics interfaces, and industrial gateway boundaries.'],
];

export default function GCErpProduct() {
  return (
    <div className="pt-16">
      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/60 bg-emerald-950/20 px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Working engineering build
          </div>
          <p className="mt-7 text-sm font-semibold text-zinc-500">GC-ERP • Manufacturing & Enterprise Operations Platform</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Manufacturing-first ERP built around the full transaction chain.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            GC-ERP connects customer demand, procurement, inventory, manufacturing, quality, maintenance, logistics, finance, workforce, and audit into one operating model instead of treating them as independent applications.
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
              Discuss GC-ERP
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Product experience</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            Operational context before module hopping.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            The marketing workspace below is synthetic, but the product domains it represents are backed by implementations in the GC-ERP repository.
          </p>
        </div>
        <EnterpriseProductShowcase />
      </Section>

      <Section className="border-b border-zinc-800 bg-black">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Workflow className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              One transaction can cross nearly every operating domain.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              GC-ERP’s architecture follows the movement of demand, material, production state, quality decisions, shipments, money, and evidence through the business.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800">
            {flow.map(([step, title, copy]) => (
              <div key={step} className="grid gap-3 bg-zinc-950 p-5 sm:grid-cols-[44px_150px_1fr]">
                <span className="text-xs font-semibold text-zinc-700">{step}</span>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm leading-6 text-zinc-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Repository-backed product surface</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            More than procurement, inventory, and finance.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            The current repository contains dedicated interfaces and service layers across the major operating domains below.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
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
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Network className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Enterprise architecture beneath the visible modules.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The repository documents and implements the control mechanisms that make cross-domain ERP behavior defensible under concurrency, retries, tenant boundaries, and partial failure.
            </p>
          </div>

          <div className="grid gap-3">
            {architecture.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <GitBranch className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Engineering evidence is substantial; production certification is a separate claim.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The repository includes automated coverage spanning functional behavior, security, tenant isolation, transactions, idempotency, offline sync, conflict handling, integrations, recovery, performance, and regression scenarios.
            </p>
          </div>

          <div className="space-y-3">
            {[
              ['Implemented product domains', 'Sales/CRM, procurement, inventory/WMS, manufacturing/MES, quality, EAM, finance, HR, export/logistics, traceability, workflow, and integration surfaces are present in the repository.'],
              ['Architecture controls', 'Tenant boundaries, RBAC/ABAC, immutable ledgers, eventing, outbox/inbox reliability, database constraints, and offline conflict handling are represented in code and tests.'],
              ['Automated verification', 'The repository contains unit, integration, security, tenant-isolation, offline, performance, and end-to-end test suites plus a 12-category test matrix.'],
              ['Evidence boundary', 'The public site does not call GC-ERP production-certified or customer-proven. Deployment reliability and customer outcome claims require separate live evidence.'],
            ].map(([title, copy]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <Boxes className="mx-auto h-6 w-6 text-zinc-600" />
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Need an ERP shaped around your manufacturing and operating model?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          We can map demand, materials, production, quality, logistics, finance, workforce, and authority boundaries before deciding what should be standardized or custom.
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
