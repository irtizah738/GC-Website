import Link from '../components/AppLink';
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import Section from '../components/Section';

const products = [
  {
    icon: Stethoscope,
    name: 'G-HIMS',
    category: 'Hospital Operating System',
    status: 'Pilot qualification program',
    description:
      'A hospital operating system connecting clinical, financial, workforce, supply-chain, and operational workflows around one governed event backbone.',
    href: '/products/g-hims',
    demo: '/demo/g-hims',
    contactHref: '/contact?interest=g-hims',
    evidenceHref: '/case-studies#g-hims-patient-360',
    capabilities: [
      'Patient 360 longitudinal clinical projections',
      'OPD, inpatient, diagnostics, and pharmacy workflows',
      'Revenue integrity, double-entry billing, and SCM',
      'Encrypted offline-first edge with causal conflict review',
    ],
  },
  {
    icon: Boxes,
    name: 'GC-ERP',
    category: 'Enterprise Operations Platform',
    status: 'Working engineering build',
    description:
      'A manufacturing-first enterprise operations platform connecting sales, procurement, inventory, production, quality, logistics, finance, workforce, and audit.',
    href: '/products/gc-erp',
    demo: '/demo/gc-erp',
    contactHref: '/contact?interest=gc-erp',
    evidenceHref: '/case-studies#gc-erp-cross-domain',
    capabilities: [
      'Manufacturing execution (MES), BOMs, and quality (QMS)',
      'Multi-warehouse inventory (WMS) and procure-to-pay',
      'Append-only inventory movements and financial ledgers',
      'Multi-tenant PostgreSQL RLS and outbox event reliability',
    ],
  },
];

const comparisonRows = [
  ['Target operating environment', 'Hospitals, multi-specialty clinics, and surgical centers', 'Discrete & process manufacturers, distributors, and industrial operators'],
  ['Core operational chain', 'Registration → Triage → Encounter → Diagnostics / Pharmacy → Billing → GL', 'Demand / CRM → MRP & Reserve → Procure / Produce → WMS & QA → Finance → Audit'],
  ['Authority & trust model', 'Role, department, clinical credential, and server-side command validation', 'Multi-tenant RLS, site boundaries, approval matrices, and domain-owned state'],
  ['Ledger & state discipline', 'Canonical clinical events + separated clinical and accounting truth', 'Append-only inventory movements + immutable posted financial journals'],
  ['Offline & edge resilience', 'Encrypted IndexedDB projections, durable outbox, and device qualification runbook', 'Offline queue harness, conflict resolution, and industrial edge gateway services'],
  ['Current verification stage', 'Repository verified + staging & Hospital-0 TRL-6 qualification program', 'Repository verified across 12-category functional, security, and concurrency matrix'],
];

const evaluationSteps = [
  {
    step: '01',
    title: 'Workflow & failure-mode mapping',
    copy: 'We map your real department handoffs, approval authorities, connectivity constraints, and where current software forces manual reconciliation.',
  },
  {
    step: '02',
    title: 'Staging & boundary configuration',
    copy: 'We configure tenant structure, roles, chart of accounts or clinical tariffs, and integration adapters in an isolated staging environment.',
  },
  {
    step: '03',
    title: 'Controlled operational rehearsal',
    copy: 'Your operators run realistic day-in-the-life transactions—including exceptions, reversals, and offline recovery—against explicit qualification gates.',
  },
  {
    step: '04',
    title: 'Phased pilot & production rollout',
    copy: 'Deployment proceeds with measurable rollback criteria, audit traceability, and optional custom module extensions where your operation is unique.',
  },
];

export default function Products() {
  return (
    <div className="pt-16">
      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Products by Gotham Coders</p>
          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Operating systems for complex organizations.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Our flagship products turn difficult cross-department workflows into governed, traceable operational systems—backed by open architectural evidence and interactive sandboxes.
          </p>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.name} className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/40 p-7 md:p-9">
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-zinc-800 bg-zinc-950">
                    <Icon className="h-6 w-6 text-zinc-300" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span>{product.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400">{product.status}</span>
                  </div>
                </div>

                <h2 className="mt-7 text-4xl font-semibold tracking-[-0.035em] text-white">{product.name}</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">{product.description}</p>

                <div className="mt-7 space-y-2.5 border-t border-zinc-800/80 pt-6">
                  {product.capabilities.map((capability) => (
                    <div key={capability} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-sm leading-6 text-zinc-300">{capability}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to={product.href}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
                  >
                    Explore {product.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to={product.demo}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
                  >
                    Interactive sandbox
                  </Link>
                  <Link
                    to={product.evidenceHref}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-2 text-xs font-semibold text-zinc-400 hover:text-white"
                  >
                    Engineering evidence
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex gap-3 rounded-2xl border border-zinc-800 bg-black p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
          <p className="text-sm leading-6 text-zinc-400">
            Product maturity and deployment claims are published conservatively. Public demos use synthetic data and are not represented as live customer deployments.
          </p>
        </div>
      </Section>

      <Section className="border-b border-zinc-800 bg-black">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Side-by-side architecture matrix</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            Two distinct operating environments, one engineering discipline.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            Compare how G-HIMS and GC-ERP structure operational truth, authority boundaries, offline resilience, and verification evidence.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="border-b border-zinc-800 bg-zinc-900/60 text-xs font-semibold text-zinc-400">
                <tr>
                  <th className="w-1/4 px-6 py-4">Dimension</th>
                  <th className="w-[37.5%] px-6 py-4 text-white">G-HIMS (Healthcare Operating System)</th>
                  <th className="w-[37.5%] px-6 py-4 text-white">GC-ERP (Manufacturing & Enterprise ERP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-sm">
                {comparisonRows.map(([dimension, ghims, gcerp]) => (
                  <tr key={dimension} className=" align-top">
                    <td className="px-6 py-4 font-semibold text-zinc-300">{dimension}</td>
                    <td className="px-6 py-4 leading-6 text-zinc-400">{ghims}</td>
                    <td className="px-6 py-4 leading-6 text-zinc-400">{gcerp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-zinc-500">Evaluation & deployment path</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              How organizations evaluate, qualify, and deploy our products.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Enterprise operations software should never be adopted blind. We structure every product evaluation around operational fit, staging rehearsal, and controlled pilot gates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact?interest=gc-erp"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Request product evaluation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
              >
                Browse evidence library
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {evaluationSteps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <span className="font-mono text-xs font-semibold tabular-nums text-indigo-400">{item.step}.</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-zinc-400">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
