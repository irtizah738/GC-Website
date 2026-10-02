'use client';

import { useState } from 'react';
import {
  Activity,
  Bed,
  Bell,
  ClipboardList,
  FlaskConical,
  HeartPulse,
  Pill,
  Receipt,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type View = 'patient360' | 'clinical' | 'diagnostics' | 'inpatient' | 'billing';

const views: Array<{ id: View; label: string; icon: typeof HeartPulse }> = [
  { id: 'patient360', label: 'Patient 360', icon: HeartPulse },
  { id: 'clinical', label: 'Clinical', icon: Stethoscope },
  { id: 'diagnostics', label: 'Diagnostics', icon: FlaskConical },
  { id: 'inpatient', label: 'Inpatient', icon: Bed },
  { id: 'billing', label: 'Billing', icon: Receipt },
];

const viewCopy: Record<View, { eyebrow: string; title: string; description: string }> = {
  patient360: {
    eyebrow: 'Longitudinal patient context',
    title: 'Patient 360',
    description: 'Clinical, diagnostic, medication, and encounter context projected into one governed patient surface.',
  },
  clinical: {
    eyebrow: 'Encounter workflow',
    title: 'Clinical workspace',
    description: 'Notes, orders, stage transitions, and timeline events remain connected to the active encounter.',
  },
  diagnostics: {
    eyebrow: 'Diagnostics workflow',
    title: 'Orders & results',
    description: 'Diagnostic work is linked to the originating encounter and patient context.',
  },
  inpatient: {
    eyebrow: 'Capacity & care setting',
    title: 'Inpatient operations',
    description: 'Bed state, ward context, and operational capacity are managed through governed workflows.',
  },
  billing: {
    eyebrow: 'Revenue operations',
    title: 'Encounter billing',
    description: 'Charges, invoices, payer state, and financial consequences stay connected to care activity.',
  },
};

export default function GHimsProductShowcase() {
  const [view, setView] = useState<View>('patient360');
  const copy = viewCopy[view];

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_30px_100px_-35px_rgba(0,0,0,0.35)]">
      <div className="flex h-12 items-center justify-between border-b border-zinc-200 px-4">
        <div className="flex items-center gap-3">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-slate-950 text-[9px] font-bold text-white">GH</div>
          <div>
            <p className="text-xs font-semibold text-slate-900">G-HIMS</p>
            <p className="text-[8px] text-slate-400">Synthetic hospital workspace</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="hidden items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] text-slate-500 sm:flex">
            <Search className="h-3.5 w-3.5" />
            Search patient
          </button>
          <button className="rounded-md p-2 text-slate-400" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </button>
          <div className="grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-[9px] font-bold text-white">SR</div>
        </div>
      </div>

      <div className="grid min-h-[540px] lg:grid-cols-[170px_1fr]">
        <aside className="hidden border-r border-slate-200 bg-slate-50 p-3 lg:block">
          <p className="px-2 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">Clinical workspace</p>
          <div className="space-y-1">
            {views.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setView(id)}
                className={cn(
                  'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[10px] font-semibold transition',
                  view === id
                    ? 'bg-white text-slate-950 shadow-sm ring-1 ring-slate-200'
                    : 'text-slate-500 hover:bg-white hover:text-slate-900',
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-5 border-t border-slate-200 pt-4">
            <p className="px-2 text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">Operations</p>
            {[
              [Pill, 'Pharmacy'],
              [ClipboardList, 'SCM'],
              [ShieldCheck, 'Audit'],
            ].map(([Icon, label]) => {
              const TypedIcon = Icon as typeof Pill;
              return (
                <div key={String(label)} className="mt-1 flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[10px] font-medium text-slate-500">
                  <TypedIcon className="h-3.5 w-3.5" />
                  {String(label)}
                </div>
              );
            })}
          </div>
        </aside>

        <main className="min-w-0 bg-white p-4 sm:p-5">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-blue-600">{copy.eyebrow}</p>
              <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-950">{copy.title}</h3>
              <p className="mt-1 max-w-xl text-[10px] leading-4 text-slate-500">{copy.description}</p>
            </div>
            <span className="self-start rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-700">
              Governed projection
            </span>
          </div>

          <div className="mt-4 grid gap-3 xl:grid-cols-[1.05fr_.95fr]">
            <section className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500">
                  <UserRound className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900">Ayesha Malik</p>
                  <p className="text-[9px] text-slate-400">MRN-10284 • 34Y • Female • Synthetic</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ['Encounter', 'OPD-24017'],
                  ['Stage', 'Consultation'],
                  ['Allergies', 'NKDA'],
                  ['Risk', 'Stable'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-slate-50 p-2.5">
                    <p className="text-[8px] text-slate-400">{label}</p>
                    <p className="mt-1 truncate text-[9px] font-bold text-slate-700">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-[9px] font-bold text-slate-700">Recent clinical timeline</p>
                <div className="mt-3 space-y-3">
                  {[
                    ['10:12', 'Consultation started', 'Dr. Sana Rahman'],
                    ['10:06', 'Vitals recorded', 'BP 126/82 • HR 78'],
                    ['09:58', 'Consultation payment settled', 'Receipt RCPT-8821'],
                  ].map(([time, title, detail]) => (
                    <div key={time + title} className="grid grid-cols-[38px_8px_1fr] gap-2">
                      <span className="text-[8px] font-semibold text-slate-400">{time}</span>
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <div>
                        <p className="text-[9px] font-semibold text-slate-700">{title}</p>
                        <p className="text-[8px] text-slate-400">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="grid gap-3">
              <section className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold text-slate-800">Active work</p>
                    <p className="text-[8px] text-slate-400">Across connected departments</p>
                  </div>
                  <Activity className="h-4 w-4 text-slate-400" />
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    ['CBC', 'Diagnostics', 'Awaiting payment', 'amber'],
                    ['Paracetamol 500 mg', 'Pharmacy', 'Prescribed', 'blue'],
                    ['OPD encounter', 'Clinical', 'In progress', 'green'],
                  ].map(([item, area, status, tone]) => (
                    <div key={item} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-2.5">
                      <div className="min-w-0">
                        <p className="truncate text-[9px] font-semibold text-slate-700">{item}</p>
                        <p className="text-[8px] text-slate-400">{area}</p>
                      </div>
                      <span
                        className={cn(
                          'rounded-full px-2 py-1 text-[7px] font-bold',
                          tone === 'amber' && 'bg-amber-100 text-amber-700',
                          tone === 'blue' && 'bg-blue-100 text-blue-700',
                          tone === 'green' && 'bg-emerald-100 text-emerald-700',
                        )}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-slate-200 p-4">
                <p className="text-[9px] font-bold text-slate-800">Operational context</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    ['Bed state', 'Not admitted'],
                    ['Diagnostics', '1 pending'],
                    ['Medication', '1 active'],
                    ['Balance', 'PKR 0'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-slate-100 p-2.5">
                      <p className="text-[8px] text-slate-400">{label}</p>
                      <p className="mt-1 text-[9px] font-bold text-slate-700">{value}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/60 p-3">
            <ShieldCheck className="h-4 w-4 shrink-0 text-blue-600" />
            <p className="text-[8px] leading-4 text-blue-800">
              Marketing product scene using synthetic data. It represents repository-backed G-HIMS domains, not a production patient record.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
