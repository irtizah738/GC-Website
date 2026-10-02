'use client';

import { useState } from 'react';
import {
  Activity,
  BadgeCheck,
  BedDouble,
  BookOpen,
  Boxes,
  Calculator,
  CalendarClock,
  CheckCircle2,
  Clock,
  HeartPulse,
  Landmark,
  Package,
  Pill,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  ThermometerSnowflake,
  Truck,
  Users,
  WalletCards,
  Wifi,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type View = 'patient360' | 'finance' | 'hcm' | 'scm';

const tabs: Array<{ id: View; label: string; icon: typeof HeartPulse }> = [
  { id: 'patient360', label: 'Patient 360', icon: HeartPulse },
  { id: 'finance', label: 'Finance', icon: Landmark },
  { id: 'hcm', label: 'HCM', icon: Users },
  { id: 'scm', label: 'SCM', icon: Boxes },
];

export default function GHimsSystemsHighlight() {
  const [view, setView] = useState<View>('patient360');

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_28px_90px_-35px_rgba(15,23,42,0.45)]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-blue-600">G-HIMS OS</p>
          <p className="mt-0.5 text-xs font-black text-slate-900">Central Metro Hospital</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[8px] font-bold text-emerald-700">
          <Wifi className="h-3 w-3" />
          Live Hospital Cloud Synced
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-slate-200 bg-white p-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className={cn(
              'flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-[9px] font-black transition',
              view === id
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      <div className="min-h-[535px] bg-slate-50 p-4">
        {view === 'patient360' && <Patient360 />}
        {view === 'finance' && <Finance />}
        {view === 'hcm' && <Hcm />}
        {view === 'scm' && <Scm />}
      </div>
    </div>
  );
}

function Patient360() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.14em] text-blue-600">Patient 360</p>
            <h3 className="mt-1 text-lg font-black text-slate-950">Ayesha Malik</h3>
            <p className="mt-1 text-[8px] text-slate-500">MRN-10284 • OPD-24017 • 34Y • Female • Synthetic</p>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[7px] font-black text-emerald-800">SERVER</span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-[7px] font-black text-blue-800">Canonical Projection</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ['Current encounter', 'OPD-24017'],
          ['Clinical stage', 'Consultation'],
          ['Deterioration', 'Stable'],
          ['Discharge readiness', 'Requires review'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[7px] font-semibold text-slate-400">{label}</p>
            <p className="mt-2 text-[9px] font-black text-slate-700">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black text-slate-800">Longitudinal clinical timeline</p>
              <p className="text-[7px] text-slate-400">Source-linked encounter evidence</p>
            </div>
            <Activity className="h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-4 space-y-3">
            {[
              ['10:12', 'Consultation started', 'Dr. Sarah Jenkins'],
              ['10:06', 'Vitals recorded', 'BP 126/82 • HR 78 • SpO₂ 98%'],
              ['10:01', 'Allergy status reviewed', 'No known drug allergies'],
              ['09:58', 'Consultation payment settled', 'Receipt RCPT-8821'],
            ].map(([time, title, detail], index) => (
              <div key={time} className="grid grid-cols-[36px_8px_1fr] gap-2">
                <span className="text-[7px] font-mono font-bold text-slate-400">{time}</span>
                <span className={cn('mt-1.5 h-2 w-2 rounded-full', index === 0 ? 'bg-blue-600' : 'bg-slate-300')} />
                <div>
                  <p className="text-[8px] font-bold text-slate-700">{title}</p>
                  <p className="mt-0.5 text-[7px] text-slate-400">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-[8px] font-black uppercase tracking-wide text-emerald-800">Clinical knowledge status</p>
            <div className="mt-3 space-y-2">
              {[
                ['Allergies', 'Reviewed: none known'],
                ['Medications', '1 active'],
                ['Recent results', '2 available'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-2 rounded-lg bg-white/80 px-2.5 py-2">
                  <span className="text-[7px] text-emerald-700">{label}</span>
                  <span className="text-[7px] font-black text-emerald-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-[8px] font-black uppercase tracking-wide text-amber-800">Discharge readiness</p>
            <p className="mt-2 text-[10px] font-black text-amber-950">Requires review</p>
            <p className="mt-1 text-[7px] leading-4 text-amber-800">Pending diagnostic order remains visible to the clinician.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Finance() {
  return (
    <div className="space-y-3">
      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[8px] font-black uppercase tracking-wider text-blue-600">G-HIMS Finance</p>
            <h3 className="mt-1 text-lg font-black text-slate-950">Authoritative Finance Control Center</h3>
            <p className="mt-1 max-w-2xl text-[8px] leading-4 text-slate-500">
              Finance state is hydrated from governed read models. All mutations execute through versioned server commands.
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-2.5 py-1.5 text-[8px] font-bold text-slate-700">
            <RefreshCw className="h-3 w-3" />
            Refresh
          </button>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[8px] text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          Projection source: SERVER
        </div>
      </section>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ['Active accounts', '184'],
          ['Posted journals', '2,491'],
          ['Posted debits', '$8.42M'],
          ['Posted credits', '$8.42M'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[7px] font-semibold text-slate-500">{label}</p>
            <p className="mt-2 text-sm font-black text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {[
          [BookOpen, 'Chart of Accounts', 'Governed account administration and authoritative balances.'],
          [Calculator, 'Journal Entries', 'Versioned, balanced journal commands with posting-period controls.'],
          [Landmark, 'Fixed Assets', 'Capitalization, depreciation, transfer and disposal through governed commands.'],
        ].map(([Icon, title, copy]) => {
          const TypedIcon = Icon as typeof BookOpen;
          return (
            <div key={String(title)} className="rounded-2xl border border-slate-200 bg-white p-4">
              <TypedIcon className="h-5 w-5 text-blue-600" />
              <p className="mt-3 text-[9px] font-black text-slate-900">{String(title)}</p>
              <p className="mt-1 text-[7px] leading-4 text-slate-500">{String(copy)}</p>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-3">
          <p className="text-[9px] font-black text-slate-800">Recent authoritative journals</p>
        </div>
        {[
          ['JV-240981', 'Diagnostic revenue posting', '$3,840', 'POSTED'],
          ['JV-240980', 'Pharmacy inventory issue', '$1,260', 'POSTED'],
          ['JV-240979', 'Patient payment allocation', '$7,500', 'POSTED'],
        ].map(([ref, memo, value, status]) => (
          <div key={ref} className="grid grid-cols-[.8fr_1.5fr_.7fr_.6fr] border-b border-slate-100 px-4 py-2.5 text-[7px] last:border-b-0">
            <span className="font-mono font-bold text-blue-700">{ref}</span>
            <span className="truncate text-slate-600">{memo}</span>
            <span className="font-bold text-slate-700">{value}</span>
            <span className="font-black text-emerald-600">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hcm() {
  return (
    <div className="space-y-3">
      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[8px] font-black uppercase tracking-wider text-blue-600">G-HIMS HCM</p>
            <h3 className="mt-1 text-lg font-black text-slate-950">Authoritative Workforce Control Center</h3>
            <p className="mt-1 max-w-2xl text-[8px] leading-4 text-slate-500">
              Workforce state is loaded from governed projections across tenant-authoritative employee and assignment records.
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-2.5 py-1.5 text-[8px] font-bold text-slate-700">
            <RefreshCw className="h-3 w-3" />
            Refresh
          </button>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[8px] text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          Projection source: SERVER
        </div>
      </section>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ['Active employees', '612'],
          ['Onboarding', '18'],
          ['Facilities represented', '4'],
          ['Departments represented', '21'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[7px] font-semibold text-slate-500">{label}</p>
            <p className="mt-2 text-lg font-black text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {[
          [Users, 'Workforce Master', 'Create and manage tenant-authoritative employee records and assignments.'],
          [BadgeCheck, 'Credentials & Privileges', 'Verify credentials and govern clinical privilege state.'],
          [CalendarClock, 'Roster & Fatigue', 'Govern staffing assignments, rest constraints and coverage.'],
          [WalletCards, 'Payroll', 'Run governed payroll with attendance locks and Finance handoff.'],
        ].map(([Icon, title, copy]) => {
          const TypedIcon = Icon as typeof Users;
          return (
            <div key={String(title)} className="rounded-2xl border border-slate-200 bg-white p-4">
              <TypedIcon className="h-4 w-4 text-blue-600" />
              <p className="mt-2 text-[9px] font-black text-slate-900">{String(title)}</p>
              <p className="mt-1 text-[7px] leading-4 text-slate-500">{String(copy)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Scm() {
  return (
    <div className="space-y-3">
      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-slate-900">G-HIMS SCM</h3>
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[7px] font-black text-blue-700">Enterprise</span>
              </div>
              <p className="mt-0.5 text-[8px] text-slate-500">Hospital Supply Chain, Procurement & Inventory OS</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3 py-2 text-[8px] font-black text-white">
            <ShoppingCart className="h-3.5 w-3.5" />
            New Requisition
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          [Package, 'On Hand Units', '84,210', 'text-slate-900'],
          [Boxes, 'Available Units', '76,402', 'text-blue-700'],
          [ThermometerSnowflake, 'Cold Chain Alerts', '2', 'text-amber-600'],
          [Clock, 'Expiring ≤30d', '14', 'text-rose-600'],
        ].map(([Icon, label, value, tone]) => {
          const TypedIcon = Icon as typeof Package;
          return (
            <div key={String(label)} className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[7px] font-semibold text-slate-500">{String(label)}</p>
                <TypedIcon className="h-3.5 w-3.5 text-slate-400" />
              </div>
              <p className={cn('mt-2 text-sm font-black', String(tone))}>{String(value)}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-slate-200 pb-2">
        {['Dashboard', 'PAR Management', 'Expiry', 'Procurement', 'Inventory', 'Audit', 'Batches', 'Locations', 'GRN', 'Transfers', 'Traceability', 'Recalls', 'Suppliers'].map((label, index) => (
          <span key={label} className={cn(
            'whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[7px] font-black',
            index === 0 ? 'bg-blue-600 text-white' : 'bg-white text-slate-500'
          )}>
            {label}
          </span>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.15fr_.85fr]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <div>
              <p className="text-[9px] font-black text-slate-800">Inventory Balance</p>
              <p className="text-[7px] text-slate-400">FEFO-aware hospital stock projection</p>
            </div>
            <RefreshCw className="h-3.5 w-3.5 text-slate-400" />
          </div>
          {[
            ['IV-CANN-20', 'IV Cannula 20G', '12,480', '11,920', 'Optimal'],
            ['MED-CEF-1G', 'Ceftriaxone 1g', '3,120', '2,640', 'Optimal'],
            ['VAC-HEPB', 'Hepatitis B Vaccine', '284', '220', 'Cold Chain'],
            ['SUR-SUT-30', 'Vicryl 3-0 Suture', '96', '48', 'Low'],
          ].map(([code, item, onHand, available, health]) => (
            <div key={code} className="grid grid-cols-[.9fr_1.5fr_.7fr_.7fr_.7fr] border-b border-slate-100 px-4 py-2.5 text-[7px] last:border-b-0">
              <span className="font-mono font-black text-blue-700">{code}</span>
              <span className="truncate font-bold text-slate-700">{item}</span>
              <span className="text-slate-500">{onHand}</span>
              <span className="text-slate-500">{available}</span>
              <span className={health === 'Low' ? 'font-bold text-rose-600' : health === 'Cold Chain' ? 'font-bold text-amber-600' : 'font-bold text-emerald-600'}>{health}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-blue-600" />
            <p className="text-[9px] font-black text-slate-800">Open procurement</p>
          </div>
          <div className="mt-3 space-y-2">
            {[
              ['PR-24018', 'Pending approval', '$4,820'],
              ['PO-24044', 'Supplier confirmed', '$18,600'],
              ['GRN-24071', 'Inspection pending', '$7,240'],
            ].map(([ref, status, value]) => (
              <div key={ref} className="flex items-center justify-between rounded-lg bg-slate-50 p-2.5">
                <div>
                  <p className="text-[8px] font-black text-slate-700">{ref}</p>
                  <p className="text-[7px] text-slate-400">{status}</p>
                </div>
                <p className="text-[8px] font-black text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
