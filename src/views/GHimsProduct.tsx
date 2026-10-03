import Link from '../components/AppLink';
import {
  Activity,
  ArrowRight,
  Bed,
  Boxes,
  BriefcaseBusiness,
  Check,
  CircleAlert,
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
import GHimsProductShowcase from '../components/product/GHimsProductShowcase';

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

const pilotModels = [
  {
    step: '01',
    title: 'OPD-to-Billing & Revenue Integrity wedge',
    copy: 'Start with patient registration, OPD queue, consultation, diagnostic/pharmacy orders, and deterministic payment reconciliation without disrupting inpatient wards on day one.',
  },
  {
    step: '02',
    title: 'Patient 360 & Clinical Context layer',
    copy: 'Deploy longitudinal clinical projections, encounter timelines, and missing-information detection on top of governed hospital events.',
  },
  {
    step: '03',
    title: 'Offline-resilient hospital edge',
    copy: 'Qualify shared-workstation and intermittent-connectivity wards using encrypted local projections, durable outboxes, and physical-device rehearsal.',
  },
];

export default function GHimsProduct() {
  return (
    <div className="pt-16">
      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-300">Pilot qualification program</span>
            <span aria-hidden="true">·</span>
            <span>G-HIMS · Hospital Operating System</span>
          </div>
          <h1 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            One operating backbone across clinical, financial, and hospital operations.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            G-HIMS is designed for hospitals where patient care, diagnostics, pharmacy, billing, workforce, inventory, and operational capacity cannot afford to live in disconnected systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/demo/g-hims"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              Explore interactive demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact?interest=g-hims"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
            >
              Discuss G-HIMS
            </Link>
            <Link
              to="/case-studies#g-hims-patient-360"
              className="inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-3 text-sm font-semibold text-zinc-400 hover:text-white"
            >
              Read clinical research
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-b border-zinc-800">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Product experience</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            Clinical context before module hopping.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            The workspace below is synthetic, but it mirrors the governed patient, encounter, diagnostics, billing, capacity, and operational surfaces represented in G-HIMS.
          </p>
        </div>
        <GHimsProductShowcase />
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

      <Section className="border-b border-zinc-800 bg-black">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-zinc-500">Controlled pilot wedges &amp; research evidence</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
            Start with a bounded hospital workflow and falsifiable pilot metrics.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            Rather than forcing a risky hospital-wide cutover, G-HIMS is structured so hospitals can qualify one high-friction operational wedge at a time—backed by our completed Clinical Intelligence and Revenue Integrity research papers.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pilotModels.map((item) => (
            <div key={item.step} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <span className="font-mono text-xs font-semibold tabular-nums text-indigo-400">{item.step}.</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-zinc-400">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            to="/case-studies#clinical-intelligence-concept-validation"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            <div>
              <p className="text-xs font-semibold text-zinc-500">Research Paper · 19 pages · 32 references</p>
              <p className="mt-1.5 text-base font-semibold text-white">From Fragmented Records to Clinical Context (Patient 360)</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>
          <Link
            to="/case-studies#revenue-integrity-concept-validation"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            <div>
              <p className="text-xs font-semibold text-zinc-500">Research Paper · 16 pages · 25 references</p>
              <p className="mt-1.5 text-base font-semibold text-white">From Patient Activity to Financial Truth (Revenue Integrity)</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>
        </div>
      </Section>

      <Section className="text-center">
        <BriefcaseBusiness className="mx-auto h-6 w-6 text-zinc-600" />
        <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Evaluating a controlled hospital deployment?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          We can discuss workflow scope, qualification gates, infrastructure requirements, and the evidence needed before a live pilot.
        </p>
        <Link
          to="/contact?interest=g-hims"
          className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Discuss G-HIMS
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
