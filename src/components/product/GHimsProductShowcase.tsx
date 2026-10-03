'use client';

import { useState } from 'react';
import {
  Activity,
  ArrowLeft,
  BarChart3,
  BedDouble,
  Building2,
  ChevronDown,
  Cpu,
  Droplet,
  FlaskConical,
  HeartPulse,
  LayoutGrid,
  Pill,
  ReceiptText,
  Scissors,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Users,
  Wifi,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type View =
  | 'command'
  | 'directory'
  | 'analytics'
  | 'rbac'
  | 'patient360'
  | 'opd'
  | 'emergency'
  | 'surgery'
  | 'beds'
  | 'diagnostics'
  | 'bloodbank'
  | 'interop'
  | 'pharmacy'
  | 'billing'
  | 'audit';

const nav = [
  {
    title: 'Command & Overview',
    items: [
      ['command', 'Operations Command', TrendingUp],
      ['directory', 'All 52 Domains Directory', LayoutGrid],
      ['analytics', 'Advanced Reporting & Analytics', BarChart3],
      ['rbac', 'RBAC Security Matrix', Shield],
    ],
  },
  {
    title: 'Clinical & Patient Care',
    items: [
      ['patient360', 'Patient 360', HeartPulse],
      ['opd', 'OPD Consultations', Stethoscope],
      ['emergency', 'Emergency & Trauma', ShieldAlert],
      ['surgery', 'Operating Theaters', Scissors],
      ['beds', 'Inpatient Bed Census', BedDouble],
    ],
  },
  {
    title: 'Diagnostics & Interop',
    items: [
      ['diagnostics', 'LIS Lab & Radiology', FlaskConical],
      ['bloodbank', 'Blood Bank & Transfusion', Droplet],
      ['interop', 'HL7 & FHIR R4 Hub', Cpu],
    ],
  },
];

const utilityNav = [
  ['pharmacy', 'Pharmacy & Formulary', Pill],
  ['billing', 'Billing & Revenue', ReceiptText],
  ['audit', 'Audit Ledger', ShieldCheck],
] as const;

const viewDetails: Record<View, { title: string; eyebrow: string; description: string; signals: string[] }> = {
  command: {
    title: 'Hospital Operations Command',
    eyebrow: 'Command & Overview',
    description: 'Cross-domain operational awareness across census, queues, diagnostics, billing, staffing, and unresolved workflow exceptions.',
    signals: ['126 active encounters', '4 operational exceptions', '98.7% event delivery', '0 unresolved sync conflicts'],
  },
  directory: {
    title: '52-domain hospital directory',
    eyebrow: 'Command & Overview',
    description: 'A single launch surface for clinical, diagnostic, financial, workforce, supply-chain, facility, and governance domains.',
    signals: ['Clinical & Patient Care', 'Diagnostics & Interop', 'Finance & Revenue', 'SCM, HCM & Facilities'],
  },
  analytics: {
    title: 'Advanced Reporting & Analytics',
    eyebrow: 'Command & Overview',
    description: 'Operational projections combine governed events into service-line, revenue, capacity, and workflow performance views.',
    signals: ['OPD throughput +8.4%', 'Bed occupancy 68%', 'Revenue exceptions 7', 'Median queue 14m'],
  },
  rbac: {
    title: 'RBAC Security Matrix',
    eyebrow: 'Governance & Security',
    description: 'Role, tenant, credential, and clinical privilege boundaries determine which commands and projections each user can access.',
    signals: ['Tenant boundary enforced', 'Clinical privileges active', 'Sensitive writes governed', 'Audit trail enabled'],
  },
  patient360: {
    title: 'Patient 360',
    eyebrow: 'Clinical & Patient Care',
    description: 'Longitudinal patient context assembled from governed clinical and operational projections.',
    signals: ['Encounter active', 'Vitals current', 'Medication reviewed', 'Billing linked'],
  },
  opd: {
    title: 'OPD Consultations',
    eyebrow: 'Clinical & Patient Care',
    description: 'Billing-first outpatient flow with queue state, vitals, consultation, orders, and encounter handoff.',
    signals: ['4 patients in queue', 'Vitals step active', 'Doctor handoff live', 'Payment gate linked'],
  },
  emergency: {
    title: 'Emergency & Trauma',
    eyebrow: 'Clinical & Patient Care',
    description: 'Governed emergency stages expose triage state, escalation, orders, bed demand, and clinical handoffs without bypassing authority controls.',
    signals: ['2 triage arrivals', '1 urgent escalation', 'ED beds 7/10', 'STAT pathway armed'],
  },
  surgery: {
    title: 'Operating Theaters',
    eyebrow: 'Clinical & Patient Care',
    description: 'Perioperative coordination links theatre scheduling, surgical teams, supplies, anesthesia, PACU state, and financial consequences.',
    signals: ['3 cases scheduled', '1 room turnover', 'Implant reconciliation ready', 'PACU capacity 4/6'],
  },
  beds: {
    title: 'Inpatient Bed Census',
    eyebrow: 'Clinical & Patient Care',
    description: 'Governed bed-board state combines capacity, admission context, cleaning state, ward readiness, and discharge dependencies.',
    signals: ['68 occupied', '22 available', '6 cleaning', '4 blocked'],
  },
  diagnostics: {
    title: 'LIS Lab & Radiology',
    eyebrow: 'Diagnostics & Interop',
    description: 'Diagnostic orders move through payment, specimen/scan workflow, processing, results, and encounter return.',
    signals: ['Order accepted', 'Payment settled', 'Collection pending', 'Result routed to Patient 360'],
  },
  bloodbank: {
    title: 'Blood Bank & Transfusion',
    eyebrow: 'Diagnostics & Interop',
    description: 'Compatibility, inventory, reservation, issue, transfusion, and reaction evidence stay tied to patient and encounter context.',
    signals: ['O+ stock healthy', '2 units reserved', 'Crossmatch complete', 'Cold-chain monitored'],
  },
  interop: {
    title: 'HL7 & FHIR R4 Hub',
    eyebrow: 'Diagnostics & Interop',
    description: 'Integration boundaries receive, validate, acknowledge, and route external clinical messages without giving adapters direct domain authority.',
    signals: ['HL7 feed online', 'ACK latency 86ms', 'FHIR boundary ready', '0 rejected messages'],
  },
  pharmacy: {
    title: 'Pharmacy & Formulary',
    eyebrow: 'Medication Operations',
    description: 'Prescribing, formulary context, dispensing, stock consequence, and patient billing remain connected to the originating encounter.',
    signals: ['1 active prescription', 'Stock available', 'Dispense pending', 'Billing consequence linked'],
  },
  billing: {
    title: 'Billing & Revenue',
    eyebrow: 'Financial Operations',
    description: 'Clinical activity generates explicit charge and payment consequences instead of relying on retrospective reconciliation.',
    signals: ['Consultation settled', 'Diagnostic charge linked', 'Pharmacy charge pending', '0 unposted receipts'],
  },
  audit: {
    title: 'Audit Ledger',
    eyebrow: 'Governance & Evidence',
    description: 'Sensitive operational and clinical transitions retain actor, authority, timestamp, source event, and reconciliation evidence.',
    signals: ['Actor captured', 'Authority verified', 'Event immutable', 'Replay trace available'],
  },
};

export default function GHimsProductShowcase() {
  const [view, setView] = useState<View>('patient360');
  const mobileNav = [...nav.flatMap((section) => section.items), ...utilityNav];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/60 shadow-[0_30px_100px_-35px_rgba(15,23,42,0.35)]">
      <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-white/95 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setView('command')}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-[9px] font-bold text-slate-700 transition hover:bg-slate-200"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Command Hub</span>
          </button>
          <div className="hidden h-5 w-px bg-slate-200 sm:block" />
          <button
            type="button"
            onClick={() => setView('directory')}
            className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 transition hover:bg-slate-100"
          >
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-blue-600 text-white">
              <Building2 className="h-3.5 w-3.5" />
            </div>
            <div className="hidden text-left sm:block">
              <p className="max-w-[150px] truncate text-[9px] font-black text-slate-900">Central Metro Hospital</p>
              <p className="text-[7px] font-mono font-semibold text-slate-500">CMH • PK-CENTRAL</p>
            </div>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden text-right sm:block">
            <p className="text-[9px] font-bold text-slate-800">Dr. Sarah Jenkins, MD</p>
            <p className="text-[7px] text-slate-500">Lead Attending Cardiologist</p>
          </div>
          <div className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-[8px] font-black text-white">SJ</div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 bg-slate-900 px-3 py-1.5 text-[8px] font-semibold text-slate-200 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          <Wifi className="h-3 w-3 shrink-0 text-emerald-400" />
          <span className="truncate">Live Hospital Cloud Synced</span>
          <span className="hidden border-l border-white/20 pl-2 text-slate-400 md:inline">Latency: 42ms • 0 pending local writes</span>
        </div>
        <span className="hidden rounded bg-white/10 px-2 py-0.5 font-bold text-slate-200 sm:inline">Queue & Conflicts 0</span>
      </div>

      <div className="flex gap-2 overflow-x-auto border-b border-slate-200 bg-white px-3 py-2 lg:hidden">
        {mobileNav.map(([id, label, Icon]) => {
          const TypedIcon = Icon as typeof HeartPulse;
          const active = id === view;
          return (
            <button
              type="button"
              key={String(id)}
              onClick={() => setView(id as View)}
              aria-pressed={active}
              className={cn(
                'flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[8px] font-bold transition',
                active
                  ? 'border-blue-200 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800',
              )}
            >
              <TypedIcon className="h-3.5 w-3.5" />
              {String(label)}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[205px_1fr]">
        <aside className="hidden overflow-hidden border-r border-slate-200 bg-white p-2.5 lg:block">
          <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50 p-2.5">
            <p className="text-[8px] font-black text-slate-800">Clinical Workspace</p>
            <p className="mt-0.5 text-[7px] text-slate-500">Doctor • Cardiology & Intensive Care</p>
          </div>

          {nav.map((section) => (
            <div key={section.title} className="mb-3">
              <p className="mb-1 px-2 text-[7px] font-black uppercase tracking-[0.14em] text-slate-400">{section.title}</p>
              <div className="space-y-0.5">
                {section.items.map(([id, label, Icon]) => {
                  const TypedIcon = Icon as typeof HeartPulse;
                  const active = id === view;
                  return (
                    <button
                      key={String(id)}
                      onClick={() => setView(id as View)}
                      aria-pressed={active}
                      className={cn(
                        'flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[8px] font-semibold transition',
                        active ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800',
                      )}
                    >
                      <TypedIcon className="h-3.5 w-3.5 shrink-0" />
                      <span className="min-w-0 flex-1 truncate">{String(label)}</span>
                      {id === 'directory' && <span className="rounded bg-slate-100 px-1 text-[7px] font-black text-slate-500">52</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-3 border-t border-slate-200 pt-3">
            {utilityNav.map(([id, label, Icon]) => {
              const TypedIcon = Icon as typeof Pill;
              const active = id === view;
              return (
                <button
                  type="button"
                  key={id}
                  onClick={() => setView(id)}
                  aria-pressed={active}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[8px] font-semibold transition',
                    active ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800',
                  )}
                >
                  <TypedIcon className="h-3.5 w-3.5" />
                  {label}
                </button>
              );
            })}
          </div>
        </aside>

        <main className="min-w-0 bg-slate-100/60 p-3 sm:p-4">
          {view === 'patient360' && <Patient360Scene />}
          {view === 'opd' && <OpdScene />}
          {view === 'diagnostics' && <DiagnosticsScene />}
          {view === 'beds' && <BedScene />}
          {!['patient360', 'opd', 'diagnostics', 'beds'].includes(view) && <GHimsModuleScene view={view} />}
        </main>
      </div>
    </div>
  );
}

function GHimsModuleScene({ view }: { view: View }) {
  const detail = viewDetails[view];

  return (
    <div className="space-y-3">
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
        <p className="text-[8px] font-black uppercase tracking-[0.12em] text-blue-600">{detail.eyebrow}</p>
        <h3 className="mt-1 text-lg font-black tracking-tight text-slate-950">{detail.title}</h3>
        <p className="mt-2 max-w-3xl text-[9px] leading-4 text-slate-500">{detail.description}</p>
      </section>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {detail.signals.map((signal, index) => (
          <div key={signal} className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[7px] font-semibold uppercase tracking-wide text-slate-400">Live signal {String(index + 1).padStart(2, '0')}</p>
            <p className="mt-2 text-[9px] font-black text-slate-700">{signal}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-[9px] font-black text-slate-800">Governed workflow activity</p>
          <div className="mt-3 space-y-2">
            {[
              ['10:18', 'Projection refreshed from authoritative event'],
              ['10:14', 'User action validated against current authority'],
              ['10:09', 'Cross-domain consequence recorded'],
              ['10:04', 'Audit evidence appended'],
            ].map(([time, copy]) => (
              <div key={time} className="grid grid-cols-[42px_1fr] gap-3 rounded-lg bg-slate-50 px-3 py-2.5">
                <span className="font-mono text-[7px] font-bold text-slate-400">{time}</span>
                <span className="text-[8px] font-semibold text-slate-600">{copy}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-[8px] font-black uppercase tracking-wide text-blue-800">Interactive product preview</p>
          <p className="mt-2 text-[9px] font-black text-blue-950">Module context changed successfully</p>
          <p className="mt-2 text-[8px] leading-4 text-blue-800">
            Select another module from the sidebar or mobile module strip to explore a different governed G-HIMS surface.
          </p>
        </section>
      </div>
    </div>
  );
}

function Patient360Scene() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs sm:flex-row sm:items-start">
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.12em] text-blue-600">Patient 360 • canonical clinical projection</p>
          <h3 className="mt-1 text-base font-black tracking-tight text-slate-950">Jennifer Shaw</h3>
          <p className="mt-1 text-[8px] text-slate-500">MRN-10284 • OPD-24017 • 34Y • Female • Synthetic</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[7px] font-black text-emerald-800">STABLE</span>
          <span className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-[7px] font-black text-blue-800">LIVE CLOUD</span>
        </div>
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.15fr_.85fr]">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ['Encounter', 'OPD-24017'],
              ['Clinical Stage', 'Consultation'],
              ['Discharge', 'Not applicable'],
              ['Critical Results', '0 unacknowledged'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-[7px] font-semibold text-slate-400">{label}</p>
                <p className="mt-2 text-[9px] font-black text-slate-700">{value}</p>
              </div>
            ))}
          </div>

          <section className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black text-slate-800">Recent observations & clinical timeline</p>
                <p className="text-[7px] text-slate-400">Longitudinal evidence ordered by source event</p>
              </div>
              <Activity className="h-4 w-4 text-slate-400" />
            </div>
            <div className="mt-3 space-y-3">
              {[
                ['10:12', 'Consultation started', 'Dr. Sarah Jenkins • OPD'],
                ['10:06', 'Vitals recorded', 'BP 126/82 • HR 78 • SpO₂ 98%'],
                ['10:01', 'Allergy status reviewed', 'No known drug allergies'],
                ['09:58', 'Consultation payment settled', 'Receipt RCPT-8821'],
              ].map(([time, title, detail], index) => (
                <div key={time + title} className="grid grid-cols-[38px_10px_1fr] gap-2">
                  <span className="text-[7px] font-mono font-bold text-slate-400">{time}</span>
                  <div className="relative flex justify-center">
                    <span className={cn('mt-1.5 h-2 w-2 rounded-full', index === 0 ? 'bg-blue-600' : 'bg-slate-300')} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-slate-700">{title}</p>
                    <p className="mt-0.5 text-[7px] text-slate-400">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-3">
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-[8px] font-black uppercase tracking-wide text-emerald-800">Clinical knowledge status</p>
            <div className="mt-3 space-y-2">
              {[
                ['Allergies', 'Reviewed: none known'],
                ['Medication', '1 active prescription'],
                ['Deterioration', 'Stable'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-lg border border-emerald-100 bg-white/70 px-2.5 py-2">
                  <span className="text-[7px] font-semibold text-emerald-700">{label}</span>
                  <span className="text-[7px] font-black text-emerald-900">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-[8px] font-black uppercase tracking-wide text-amber-800">Discharge readiness</p>
            <p className="mt-2 text-[9px] font-black text-amber-950">Requires clinician review</p>
            <p className="mt-1 text-[7px] leading-4 text-amber-800">Diagnostic order remains pending. No automatic discharge decision is made.</p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[8px] font-black text-slate-700">Connected work</p>
            <div className="mt-2 space-y-2">
              {[
                ['CBC', 'Diagnostics', 'Awaiting payment'],
                ['Paracetamol 500 mg', 'Pharmacy', 'Prescribed'],
                ['Invoice OPD-24017', 'Billing', 'Settled'],
              ].map(([item, area, status]) => (
                <div key={item} className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 p-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-[8px] font-bold text-slate-700">{item}</p>
                    <p className="text-[7px] text-slate-400">{area}</p>
                  </div>
                  <span className="text-[7px] font-black text-slate-500">{status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-[7px] leading-4 text-blue-800">
        Synthetic marketing scene modeled directly on the current G-HIMS tenant shell, sync ribbon, 52-domain navigation, and Patient 360 clinical surface.
      </div>
    </div>
  );
}

function OpdScene() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-[8px] font-black uppercase tracking-wide text-blue-600">OPD Consultations</p>
        <h3 className="mt-1 text-base font-black text-slate-950">Live outpatient queue</h3>
        <p className="mt-1 text-[8px] text-slate-500">Billing-first consultation flow • vitals • encounter handoff</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {[
          ['A-17', 'Jennifer Shaw', 'MRN-10284', 'With doctor', '18m'],
          ['A-18', 'Hamza Ali', 'MRN-10921', 'Vitals pending', '11m'],
          ['A-19', 'Maryam Noor', 'MRN-10462', 'Waiting', '7m'],
          ['A-20', 'Usman Tariq', 'MRN-11208', 'Waiting', '3m'],
        ].map(([token, patient, mrn, status, wait]) => (
          <div key={token} className="grid grid-cols-[50px_1.4fr_.9fr_.6fr] items-center border-b border-slate-100 px-4 py-3 text-[8px] last:border-b-0">
            <span className="font-black text-blue-600">{token}</span>
            <div><p className="font-bold text-slate-700">{patient}</p><p className="text-[7px] text-slate-400">{mrn}</p></div>
            <span className={status === 'With doctor' ? 'font-bold text-blue-600' : status === 'Vitals pending' ? 'font-bold text-amber-600' : 'font-semibold text-slate-500'}>{status}</span>
            <span className="text-right font-mono text-slate-400">{wait}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagnosticsScene() {
  return (
    <div className="grid gap-3 xl:grid-cols-[1fr_.9fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-[8px] font-black uppercase tracking-wide text-blue-600">LIS Lab & Radiology</p>
        <h3 className="mt-1 text-base font-black text-slate-950">Diagnostic order LAB-4092</h3>
        <p className="mt-1 text-[8px] text-slate-500">CBC • Jennifer Shaw • OPD-24017</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            ['Ordered', 'Complete', 'emerald'],
            ['Payment gate', 'Settled', 'emerald'],
            ['Sample collection', 'Pending', 'amber'],
            ['Result status', 'Not available', 'slate'],
          ].map(([label, value, tone]) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-[7px] text-slate-400">{label}</p>
              <p className={cn('mt-2 text-[9px] font-black', tone === 'emerald' ? 'text-emerald-700' : tone === 'amber' ? 'text-amber-700' : 'text-slate-600')}>{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-[8px] font-black text-slate-700">Governed diagnostic workflow</p>
        <div className="mt-3 space-y-2">
          {[
            ['1', 'Doctor order accepted'],
            ['2', 'Billing requirement generated'],
            ['3', 'Collection unlocked after payment'],
            ['4', 'Result returns to encounter / Patient 360'],
          ].map(([step, copy]) => (
            <div key={step} className="flex gap-2 rounded-lg bg-slate-50 p-2.5">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-100 text-[7px] font-black text-blue-700">{step}</span>
              <span className="text-[8px] font-semibold text-slate-600">{copy}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BedScene() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-[8px] font-black uppercase tracking-wide text-blue-600">Inpatient Bed Census</p>
        <h3 className="mt-1 text-base font-black text-slate-950">Governed bed board</h3>
        <p className="mt-1 text-[8px] text-slate-500">Capacity, admission state, ward context, and bed readiness</p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ['Occupied', '68', 'blue'],
          ['Available', '22', 'emerald'],
          ['Cleaning', '6', 'amber'],
          ['Blocked', '4', 'rose'],
        ].map(([label, value, tone]) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[7px] text-slate-400">{label}</p>
            <p className={cn('mt-2 text-lg font-black', tone === 'blue' ? 'text-blue-700' : tone === 'emerald' ? 'text-emerald-700' : tone === 'amber' ? 'text-amber-700' : 'text-rose-700')}>{value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Ward A • Medicine', 'Ward B • Surgery', 'ICU • Critical Care'].map((ward, index) => (
          <div key={ward} className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[8px] font-black text-slate-700">{ward}</p>
            <div className="mt-3 grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i} className={cn('h-3 rounded-sm', (i + index) % 5 === 0 ? 'bg-emerald-200' : (i + index) % 7 === 0 ? 'bg-amber-200' : 'bg-blue-200')} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
