import Link from '../components/AppLink';
import {
  Activity,
  ArrowRight,
  Bed,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleAlert,
  ClipboardList,
  CloudOff,
  FlaskConical,
  HeartPulse,
  Landmark,
  Pill,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from 'lucide-react';
import Section from '../components/Section';

const modules = [
  { icon: HeartPulse, title: 'Patient 360', copy: 'Longitudinal patient view built on governed clinical projections.' },
  { icon: Stethoscope, title: 'Clinical workflows', copy: 'Encounter creation, stage transitions, notes, orders, diagnostics, and clinical timeline.' },
  { icon: Bed, title: 'Inpatient & capacity', copy: 'Governed bed-board and inpatient resource/capacity surfaces.' },
  { icon: Activity, title: 'Surgical operations', copy: 'Operating-room case and schedule surfaces for perioperative workflows.' },
  { icon: FlaskConical, title: 'Diagnostics', copy: 'Diagnostic orders and result surfaces connected to the clinical workflow.' },
  { icon: Pill, title: 'Pharmacy', copy: 'Formulary and medication workflow surfaces with governed server boundaries.' },
  { icon: Landmark, title: 'Finance & billing', copy: 'Invoices, claims, tariffs, chart of accounts, journals, and fixed assets.' },
  { icon: Boxes, title: 'Supply chain', copy: 'Procurement, inventory, receiving, replenishment, cold-chain, recall, and high-value controls.' },
  { icon: UsersRound, title: 'HCM', copy: 'Workforce, credentialing, privileges, rosters, attendance, leave, payroll, and resource capacity.' },
];

const architecture = [
  ['Offline-first edge', 'Encrypted local projections, durable outbox, replay, canonical ID remapping, and explicit conflict review.'],
  ['Governed commands', 'Sensitive state changes pass through server-side authority, schema, credential, and invariant checks.'],
  ['Event & projection model', 'Clinical and operational events feed read models such as Patient 360 rather than relying on direct client mutation.'],
  ['Multi-tenant trust boundaries', 'Tenant membership and role context are explicitly enforced instead of inferred from the visible screen.'],
  ['Interoperability', 'Repository routes and adapters include HL7 ingestion and integration-oriented boundaries.'],
  ['Operational recovery', 'Backup, restore, rollback, staging readiness, and recovery evidence are part of the qualification program.'],
];

export default function GHimsProduct() {
  return (
    <div className="pt-16">
      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/60 bg-emerald-950/20 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Controlled-pilot qualification
            </div>
            <p className="mt-7 text-sm font-semibold text-zinc-500">G-HIMS • Hospital Operating System</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
              One operating backbone across clinical, financial, and hospital operations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              G-HIMS is designed for hospitals where patient care, diagnostics, pharmacy, billing, workforce, inventory, and operational capacity cannot afford to live in disconnected systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/demo/g-hims"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Explore interactive demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://g-hims-gateway.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
              >
                Open G-HIMS
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Repository-backed capability map</p>
                <p className="mt-2 text-xl font-semibold text-white">Hospital operating domains</p>
              </div>
              <Building2 className="h-5 w-5 text-zinc-500" />
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {['Patient 360', 'Clinical', 'Inpatient', 'Operating Room', 'Diagnostics', 'Pharmacy', 'Billing', 'Finance', 'SCM', 'HCM', 'Admin', 'Audit'].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-medium text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Product surface</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            A hospital system that extends beyond the EHR.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            The current repository contains dedicated operational surfaces across the patient journey and the hospital functions supporting it.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {modules.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <Icon className="h-5 w-5 text-zinc-500" />
              <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b border-zinc-800 bg-black">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <CloudOff className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Built around hospital failure modes, not ideal infrastructure.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              G-HIMS treats connectivity loss, retries, shared workstations, authority boundaries, and recovery as part of the product architecture.
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
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <ShieldCheck className="h-6 w-6 text-zinc-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Qualification status is published with a hard boundary.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The repository defines a staged controlled-pilot and TRL-6 qualification program. Code and CI are not represented as proof of a completed live hospital pilot.
            </p>
          </div>

          <div className="space-y-3">
            {[
              ['Implemented in code', 'Clinical, operational, finance, SCM, HCM, offline, security, and recovery capabilities have repository implementations and validation programs.', true],
              ['STAGING qualification', 'Dedicated staging, synthetic hospital-day rehearsal, recovery drills, and device qualification are explicit gates.', true],
              ['Hospital-0 controlled pilot', 'Requires written site consent, approved users, training, daily operational evidence, and stop/rollback criteria.', false],
              ['TRL-6 evidence package', 'Requires live relevant-environment evidence, independent security assessment, quantitative results, and site sign-off.', false],
            ].map(([title, copy, implemented]) => (
              <div key={String(title)} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                <div className={implemented ? 'mt-0.5 text-emerald-400' : 'mt-0.5 text-amber-300'}>
                  {implemented ? <Check className="h-4 w-4" /> : <CircleAlert className="h-4 w-4" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{String(title)}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">{String(copy)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <BriefcaseBusiness className="mx-auto h-6 w-6 text-zinc-600" />
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Evaluating a controlled hospital deployment?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          We can discuss workflow scope, qualification gates, infrastructure requirements, and the evidence needed before a live pilot.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Discuss G-HIMS
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
