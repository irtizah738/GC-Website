'use client';

import { useState } from 'react';
import {
  Activity,
  Boxes,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Database,
  DollarSign,
  FileCheck2,
  FileSpreadsheet,
  GitMerge,
  Globe,
  Layers,
  Microscope,
  PackageCheck,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
  Zap,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type View = 'dashboard' | 'scm' | 'inventory' | 'finance' | 'crm' | 'procurement' | 'cockpit';

const views: Array<{ id: View; label: string; icon: typeof Boxes }> = [
  { id: 'dashboard', label: 'Dashboard', icon: Activity },
  { id: 'scm', label: 'SCM', icon: Truck },
  { id: 'inventory', label: 'Inventory', icon: Boxes },
  { id: 'finance', label: 'Finance', icon: DollarSign },
  { id: 'crm', label: 'CRM', icon: TrendingUp },
  { id: 'procurement', label: 'Procurement', icon: ShoppingCart },
  { id: 'cockpit', label: 'GC Enterprise Cockpit & Core', icon: Layers },
];

export default function GCErpSystemsHighlight() {
  const [view, setView] = useState<View>('dashboard');

  return (
    <div className="overflow-hidden rounded-2xl border border-[#223049] bg-[#0a0e17] shadow-[0_30px_100px_-35px_rgba(0,0,0,0.7)]">
      <div className="flex h-12 items-center justify-between border-b border-[#1e293b] bg-[#0f1523] px-4">
        <div className="flex items-center gap-3">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-indigo-600 text-[9px] font-black text-white">GC</div>
          <div>
            <p className="text-[10px] font-black text-white">GC-ERP</p>
            <p className="text-[7px] text-slate-500">Enterprise Operations Platform</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[8px] text-slate-500 sm:flex">
          <Search className="h-3 w-3" />
          Search products, POs, orders, T-Codes...
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-[#1e293b] bg-[#0f1523] p-2">
        {views.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className={cn(
              'flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-[8px] font-black transition',
              view === id
                ? 'bg-indigo-600 text-white'
                : 'bg-[#131b2e] text-slate-400 hover:text-white'
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      <div className="min-h-[565px] bg-[#0a0e17] p-4 text-slate-200">
        {view === 'dashboard' && <Dashboard />}
        {view === 'scm' && <Scm />}
        {view === 'inventory' && <Inventory />}
        {view === 'finance' && <Finance />}
        {view === 'crm' && <Crm />}
        {view === 'procurement' && <Procurement />}
        {view === 'cockpit' && <Cockpit />}
      </div>
    </div>
  );
}

function DarkCard({ label, value, detail, icon: Icon, tone = 'indigo' }: { label: string; value: string; detail: string; icon: typeof Boxes; tone?: string }) {
  return (
    <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-3">
      <div className="flex items-center justify-between">
        <span className="text-[7px] font-semibold text-slate-500">{label}</span>
        <Icon className={cn(
          'h-3.5 w-3.5',
          tone === 'emerald' ? 'text-emerald-400' : tone === 'amber' ? 'text-amber-400' : tone === 'cyan' ? 'text-cyan-400' : 'text-indigo-400'
        )} />
      </div>
      <p className="mt-3 text-base font-black text-white">{value}</p>
      <p className="mt-1 text-[7px] text-slate-600">{detail}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col justify-between gap-3 border-b border-[#1e293b] pb-4 sm:flex-row sm:items-end">
        <div>
          <h3 className="text-lg font-bold text-white">Executive Command Center</h3>
          <p className="mt-1 text-[8px] text-slate-500">Real-time enterprise resource planning, supply chain telemetry, and operational analytics</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['Executive Overview', 'Supply Chain & SCM', 'Approvals (7)', 'AI Demand Forecast', 'Event Telemetry', 'App Directory'].map((tab, i) => (
            <span key={tab} className={cn('rounded-lg px-2 py-1 text-[7px] font-black', i === 0 ? 'bg-indigo-600 text-white' : 'bg-[#18223a] text-slate-400')}>{tab}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        <DarkCard label="Inventory Valuation" value="$742,480" detail="84,210 total units • 93% in stock" icon={Boxes} />
        <DarkCard label="Active Sales Orders" value="42" detail="$186K open order value" icon={PackageCheck} tone="emerald" />
        <DarkCard label="Open Purchase Orders" value="18" detail="$284K committed" icon={ShoppingCart} tone="amber" />
        <DarkCard label="QA Pass Rate" value="96.4%" detail="3 quarantined batches" icon={Microscope} tone="cyan" />
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <p className="text-[9px] font-black text-white">Supply Chain Velocity</p>
          <p className="text-[7px] text-slate-500">Inbound vs outbound movement</p>
          <div className="mt-5 flex h-24 items-end gap-2">
            {[46, 70, 54, 83, 62, 90, 74, 95, 68, 88].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-indigo-500/80" style={{ height: h }} />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <p className="text-[9px] font-black text-white">Pending Approvals</p>
          <div className="mt-3 space-y-2">
            {[
              ['PO-4831', 'Purchase order', '$48,600'],
              ['EXP-108', 'Expense voucher', '$2,840'],
              ['BATCH-77', 'QA release', 'Quarantine'],
            ].map(([id, title, value]) => (
              <div key={id} className="flex justify-between rounded-lg border border-[#1e293b] bg-[#0b101c] p-2.5">
                <div><p className="text-[8px] font-black text-slate-300">{id}</p><p className="text-[7px] text-slate-600">{title}</p></div>
                <span className="text-[8px] font-black text-amber-400">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Scm() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Supply Chain Management (SCM)</h3>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[7px] font-black text-emerald-300">Multi-Echelon SCM Core</span>
              </div>
              <p className="mt-1 text-[8px] text-slate-500">End-to-end demand planning, MRP gross-to-net engine, strategic sourcing, WMS execution, and landed cost analytics.</p>
            </div>
          </div>
          <button className="rounded-lg bg-emerald-600 px-3 py-2 text-[8px] font-black text-white">Run MRP Engine</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8">
        {[
          ['Total Demands', '84'], ['Critical Demand', '6'], ['Supplier OTIF', '98.4%'], ['YTD SCM Spend', '$4.82M'],
          ['Pending PRs', '12'], ['Putaways Due', '7'], ['Pick Waves', '18'], ['Active Alerts', '3'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-[#223049] bg-[#131b2e] p-2.5">
            <p className="text-[6px] font-semibold text-slate-500">{label}</p>
            <p className="mt-1.5 text-[11px] font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-[#1e293b] pb-2">
        {['Control Tower', 'Demand Planning', 'MRP Studio', 'Sourcing & RFQs', 'Requisitions & BPAs', 'Inbound & 3-Way Match', 'WMS Putaway & Pick', 'Outbound & POD', 'Reverse Logistics (RMA)', 'Landed Cost', 'Supplier 360'].map((tab, i) => (
          <span key={tab} className={cn('whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[7px] font-black', i === 0 ? 'bg-emerald-600 text-white' : 'bg-[#131b2e] text-slate-500')}>{tab}</span>
        ))}
      </div>

      <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2"><Activity className="h-4 w-4 text-amber-400" /><p className="text-[9px] font-black text-white">SCM Operational Risk Triggers & Alerts</p></div>
          <span className="text-[7px] text-slate-600">Auto-detected by SCM Engine</span>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {[
            ['CRITICAL • STOCKOUT', 'AISI 420 stainless strip projected below safety stock in 2.4 days.', 'rose'],
            ['WARNING • SUPPLIER', 'Supplier OTIF slipped below contracted 95% threshold.', 'amber'],
            ['INFO • INBOUND', 'Inbound receipt INB-2026-204 awaiting 3-way match.', 'blue'],
          ].map(([label, copy, tone]) => (
            <div key={label} className={cn(
              'rounded-xl border p-3',
              tone === 'rose' ? 'border-rose-900/50 bg-rose-950/20' : tone === 'amber' ? 'border-amber-900/50 bg-amber-950/20' : 'border-blue-900/50 bg-blue-950/20'
            )}>
              <p className="text-[7px] font-black text-slate-300">{label}</p>
              <p className="mt-2 text-[7px] leading-4 text-slate-500">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Inventory() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col justify-between gap-3 border-b border-[#1e293b] pb-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white">Inventory & Stock</h3>
            <span className="rounded-md border border-indigo-800 bg-indigo-950/60 px-2 py-0.5 text-[7px] font-black text-indigo-300">1,248 SKUs Active</span>
          </div>
          <p className="mt-1 text-[8px] text-slate-500">Real-time physical stock reconciliation, bin allocations, and verified ledger adjustments.</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-lg bg-[#18223a] px-2 py-1.5 text-[7px] font-black text-slate-400">All Facilities</span>
          <span className="rounded-lg bg-indigo-600 px-2 py-1.5 text-[7px] font-black text-white">New SKU</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        <DarkCard label="Total Physical Units" value="84,210" detail="All facilities" icon={Boxes} />
        <DarkCard label="Available Units" value="76,402" detail="After reservations" icon={CheckCircle2} tone="emerald" />
        <DarkCard label="Inventory Valuation" value="$742,480" detail="Standard cost basis" icon={DollarSign} tone="cyan" />
        <DarkCard label="Reorder Needed" value="12" detail="4 critical" icon={RefreshCw} tone="amber" />
      </div>

      <div className="overflow-hidden rounded-xl border border-[#223049] bg-[#131b2e]">
        <div className="grid grid-cols-[.8fr_1.5fr_.9fr_.7fr_.7fr_.7fr] border-b border-[#223049] bg-[#0b101c] px-4 py-2 text-[6px] font-black uppercase tracking-wide text-slate-600">
          <span>SKU</span><span>Product</span><span>Category</span><span>On Hand</span><span>Available</span><span>Health</span>
        </div>
        {[
          ['SUR-001', 'Surgical Scissor 6.5"', 'Finished Goods', '2,440', '2,110', 'Optimal'],
          ['RAW-217', 'AISI 420 Stainless Strip', 'Raw Materials', '8,200', '6,950', 'Optimal'],
          ['PKG-044', 'Sterile Blister Pack', 'Packaging', '620', '148', 'Low'],
          ['SPR-918', 'Grinding Wheel 100mm', 'Industrial Spares', '32', '18', 'Critical'],
        ].map(([sku, product, cat, onHand, available, health]) => (
          <div key={sku} className="grid grid-cols-[.8fr_1.5fr_.9fr_.7fr_.7fr_.7fr] items-center border-b border-[#1e293b] px-4 py-2.5 text-[7px] last:border-b-0">
            <span className="font-mono font-black text-indigo-300">{sku}</span>
            <span className="truncate font-semibold text-slate-300">{product}</span>
            <span className="truncate text-slate-500">{cat}</span>
            <span>{onHand}</span><span>{available}</span>
            <span className={health === 'Optimal' ? 'font-black text-emerald-400' : health === 'Low' ? 'font-black text-amber-400' : 'font-black text-rose-400'}>{health}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Finance() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col justify-between gap-3 border-b border-[#1e293b] pb-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white"><DollarSign className="h-5 w-5" /></div>
          <div>
            <h3 className="text-lg font-bold text-white">Corporate Financial Management</h3>
            <p className="mt-1 text-[8px] text-slate-500">Server-Authoritative General Ledger, Double-Entry Engine, 3-Way AP/AR Matching & Treasury Operations</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#223049] bg-[#131b2e] p-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[7px] font-black text-slate-300">Entity: Consolidated (All Entities)</span>
          <span className="rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[7px] font-black text-slate-300">Branch: All Operating Branches</span>
          <span className="rounded-lg border border-emerald-900 bg-emerald-950/30 px-2.5 py-1.5 text-[7px] font-mono font-black text-emerald-400">FY-2026 / 2026-08 (OPEN)</span>
        </div>
        <span className="rounded-lg bg-[#18223a] px-2.5 py-1.5 text-[7px] font-black text-slate-400">Ledger Controls & Policy</span>
      </div>

      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        <DarkCard label="Cash Position" value="$612K" detail="Bank + cash" icon={CircleDollarSign} tone="emerald" />
        <DarkCard label="Accounts Receivable" value="$338K" detail="14 overdue" icon={FileCheck2} tone="cyan" />
        <DarkCard label="Accounts Payable" value="$271K" detail="9 due this week" icon={ShoppingCart} tone="amber" />
        <DarkCard label="Gross Margin" value="31.8%" detail="+2.3% vs prior" icon={TrendingUp} />
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-[#1e293b] pb-2">
        {['Core Accounting', 'Payables & Receivables', 'Treasury & Assets', 'AI & Governance'].map((tab, i) => (
          <span key={tab} className={cn('whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[7px] font-black', i === 0 ? 'bg-emerald-600 text-white' : 'bg-[#131b2e] text-slate-500')}>{tab}</span>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-[#223049] bg-[#131b2e]">
        {[
          ['JV-3101', 'Inventory receipt accrual', '$48,600', 'Posted'],
          ['AR-8291', 'Customer invoice • Apex Engineering', '$21,840', 'Overdue'],
          ['AP-4402', 'Metro Industrial supplier invoice', '$48,600', 'Approved'],
        ].map(([ref, memo, value, status]) => (
          <div key={ref} className="grid grid-cols-[.8fr_1.6fr_.8fr_.7fr] border-b border-[#1e293b] px-4 py-2.5 text-[7px] last:border-b-0">
            <span className="font-mono font-black text-indigo-300">{ref}</span>
            <span className="truncate text-slate-300">{memo}</span>
            <span>{value}</span>
            <span className={status === 'Overdue' ? 'font-black text-rose-400' : status === 'Approved' ? 'font-black text-amber-400' : 'font-black text-emerald-400'}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Crm() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 border-b border-[#1e293b] pb-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white"><TrendingUp className="h-5 w-5" /></div>
        <div>
          <h3 className="text-lg font-bold text-white">Sales CRM & Customer Pipeline</h3>
          <p className="mt-1 text-[8px] text-slate-500">Lead Pipeline, Deal Stages, Instant Quotes, Invoicing, and Customer Success</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-3">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-cyan-400" />
          <div>
            <p className="text-[8px] font-black text-white">Cross-Border Export CRM & Trade Pipeline Connected</p>
            <p className="text-[7px] text-slate-500">International leads, versioned export quotations, and consular documentation synchronized with Export Management.</p>
          </div>
        </div>
        <span className="rounded-lg bg-cyan-600 px-2 py-1.5 text-[7px] font-black text-white">Open Export Hub</span>
      </div>

      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        <DarkCard label="Active Pipeline Value" value="$1.86M" detail="24 Active Deals" icon={DollarSign} tone="emerald" />
        <DarkCard label="Closed Won Revenue" value="$742K" detail="9 Successful conversions" icon={CheckCircle2} tone="cyan" />
        <DarkCard label="Collected Receivables" value="$612K" detail="of $688K invoiced" icon={FileCheck2} />
        <DarkCard label="Open Support Tickets" value="7" detail="Active customer inquiries" icon={Users} tone="amber" />
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-[#1e293b] pb-2">
        {['Lead Funnel', 'Opportunities & Deals', 'Instant Quotes', 'Invoices & Billing', 'Client Communications', 'Customer Support'].map((tab, i) => (
          <span key={tab} className={cn('whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[7px] font-black', i === 0 ? 'bg-indigo-600 text-white' : 'bg-[#131b2e] text-slate-500')}>{tab}</span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          ['Qualified', '8', '$420K'],
          ['Proposal', '6', '$690K'],
          ['Negotiation', '4', '$750K'],
        ].map(([stage, count, value]) => (
          <div key={stage} className="rounded-xl border border-[#223049] bg-[#131b2e] p-3">
            <p className="text-[7px] font-black uppercase tracking-wide text-slate-500">{stage}</p>
            <p className="mt-2 text-lg font-black text-white">{count}</p>
            <p className="text-[7px] font-bold text-emerald-400">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Procurement() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col justify-between gap-3 border-b border-[#1e293b] pb-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-white">Procurement</h3>
          <p className="mt-1 text-[8px] text-slate-500">Automated reorder triggers, purchase order workflows, supplier agreements, and inward QA receiving.</p>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-lg bg-[#18223a] px-2.5 py-1.5 text-[7px] font-black text-slate-400">Scan Invoice (Gemini AI)</span>
          <span className="rounded-lg bg-indigo-600 px-2.5 py-1.5 text-[7px] font-black text-white">Create PO</span>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto">
        {['Purchase Orders (18)', 'Smart Reorder (12)', 'Suppliers (36)', 'Market Radar (Google Grounded)'].map((tab, i) => (
          <span key={tab} className={cn('whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[7px] font-black', i === 0 ? 'bg-indigo-600 text-white' : 'bg-[#131b2e] text-slate-500')}>{tab}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        <DarkCard label="Open Purchase Orders" value="18" detail="$284K committed" icon={ShoppingCart} tone="amber" />
        <DarkCard label="Pending Approval" value="6" detail="Manager authorization" icon={ShieldCheck} />
        <DarkCard label="Receipts Due" value="9" detail="Inbound this week" icon={PackageCheck} tone="cyan" />
        <DarkCard label="Suppliers" value="36" detail="31 active" icon={Building2} tone="emerald" />
      </div>

      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
        <div className="flex items-center gap-2 text-[8px] font-black text-amber-300"><Sparkles className="h-3.5 w-3.5" />Automated Reorder Intelligence Engine</div>
        <p className="mt-1 text-[7px] leading-4 text-slate-400">Continuously evaluates consumption run rates, minimum stock safety thresholds, and supplier lead times to suggest optimal batch purchase orders before stockout events occur.</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {[
          ['SUR-001 • Surgical Scissor 6.5"', 'Current: 148 / 200 Min', 'Recommended Order: 400 PCS', '$11,600'],
          ['RAW-217 • AISI 420 Stainless Strip', 'Current: 320 / 500 Min', 'Recommended Order: 1,200 KG', '$18,240'],
        ].map(([item, stock, order, value]) => (
          <div key={item} className="rounded-xl border border-[#223049] bg-[#131b2e] p-3">
            <p className="text-[8px] font-black text-white">{item}</p>
            <p className="mt-2 text-[7px] font-bold text-rose-400">{stock}</p>
            <div className="mt-2 flex justify-between text-[7px] text-slate-500"><span>{order}</span><span className="font-black text-cyan-400">{value}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cockpit() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-[#223049] bg-[#131b2e] p-4">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
          <div>
            <div className="flex flex-wrap gap-1.5">
              <span className="flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-2 py-1 text-[7px] font-black text-cyan-300"><Server className="h-3 w-3" />GC Enterprise Core (2026 Release)</span>
              <span className="flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/20 px-2 py-1 text-[7px] font-black text-emerald-300"><ShieldCheck className="h-3 w-3" />System: PRD | Client: 100</span>
              <span className="rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-2 py-1 text-[7px] font-black text-indigo-300">High-Performance Core DB</span>
            </div>
            <h3 className="mt-3 text-lg font-extrabold text-white">GC Enterprise Cockpit & Core</h3>
            <p className="mt-1 max-w-3xl text-[8px] leading-4 text-slate-400">Unified enterprise execution layer: Material Master (MM), Sales & Distribution (SD), Quality (QM), Financials (FI/CO), and Plant Maintenance (PM) with direct T-Code processing.</p>
          </div>
          <div className="flex gap-1.5 rounded-xl border border-white/10 bg-black/30 p-2">
            {['BUKRS 1000', 'WERKS 1000', 'LGORT FIN1'].map(label => <span key={label} className="rounded-lg bg-slate-800 px-2 py-1 text-[7px] font-black text-slate-300">{label}</span>)}
          </div>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-[#1e293b] pb-2">
        {[
          ['Server Engine & SCADA IoT', Zap],
          ['T-Code Dictionary', Database],
          ['Enterprise Launchpad (T-Codes)', Sparkles],
          ['T-Code Backend Executor', Terminal],
          ['Process Automation Builder', GitMerge],
          ['MIGO Goods Movement', Boxes],
          ['MB51 Material Doc Ledger', FileSpreadsheet],
        ].map(([label, Icon], i) => {
          const TypedIcon = Icon as typeof Terminal;
          return (
            <span key={String(label)} className={cn('flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[7px] font-black', i === 3 ? 'bg-cyan-600 text-white' : 'bg-[#131b2e] text-slate-500')}>
              <TypedIcon className="h-3 w-3" />
              {String(label)}
            </span>
          );
        })}
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <div className="flex items-center justify-between"><div><p className="text-[9px] font-black text-white">T-Code Backend Executor</p><p className="text-[7px] text-slate-500">Direct transaction execution against GC Enterprise Core</p></div><Terminal className="h-4 w-4 text-cyan-400" /></div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              ['MIGO', 'Post Goods Movement', 'MM'],
              ['MB51', 'Material Document List', 'MM'],
              ['QA32', 'Inspection Worklist', 'QM'],
              ['FB01', 'Post Financial Document', 'FI'],
              ['VA01', 'Create Sales Order', 'SD'],
              ['SM37', 'Background Jobs', 'BASIS'],
            ].map(([code, title, module]) => (
              <div key={code} className="flex items-center justify-between rounded-lg border border-[#1e293b] bg-[#0b101c] p-2.5">
                <div><p className="text-[8px] font-mono font-black text-cyan-300">{code}</p><p className="text-[7px] text-slate-500">{title}</p></div>
                <span className="rounded bg-[#18223a] px-1.5 py-0.5 text-[6px] font-black text-slate-400">{module}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <div className="flex items-center gap-2"><Database className="h-4 w-4 text-indigo-400" /><p className="text-[9px] font-black text-white">Core System Status</p></div>
          <div className="mt-3 space-y-2">
            {[
              ['Enterprise Core DB', 'Healthy', '<12 ms'],
              ['Global Event Bus', 'Healthy', '0 failed'],
              ['Background Jobs', 'Running', '14 active'],
              ['Transaction Locks', 'Healthy', '0 blocked'],
            ].map(([label, status, detail]) => (
              <div key={label} className="flex justify-between rounded-lg bg-[#0b101c] p-2.5">
                <div><p className="text-[7px] font-bold text-slate-300">{label}</p><p className="text-[6px] text-slate-600">{detail}</p></div>
                <span className="text-[7px] font-black text-emerald-400">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
