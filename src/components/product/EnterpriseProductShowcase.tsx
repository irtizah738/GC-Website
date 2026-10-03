'use client';

import { useState, type ReactNode } from 'react';
import {
  Bell,
  Boxes,
  Briefcase,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Factory,
  Headphones,
  LayoutDashboard,
  Microscope,
  Search,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Terminal,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type View =
  | 'dashboard'
  | 'inventory'
  | 'qa'
  | 'warehouse'
  | 'production'
  | 'scm'
  | 'procurement'
  | 'sales'
  | 'forecast'
  | 'finance'
  | 'hr'
  | 'crm'
  | 'facilities'
  | 'helpdesk'
  | 'cockpit'
  | 'eventbus'
  | 'audit'
  | 'settings';

const primary = [
  { id: 'dashboard', label: 'Command Center', icon: LayoutDashboard },
  { id: 'inventory', label: 'Inventory & Stock', icon: Boxes },
  { id: 'qa', label: 'Batch & Lot QA', icon: Microscope, badge: '3' },
  { id: 'warehouse', label: 'Multi-Warehouse', icon: Warehouse },
  { id: 'production', label: 'Production & MES', icon: Factory, badge: 'PP' },
  { id: 'scm', label: 'Supply Chain (SCM)', icon: Truck, badge: 'Core' },
  { id: 'procurement', label: 'Procurement (PO)', icon: ShoppingCart, badge: '4' },
  { id: 'sales', label: 'Sales Orders (SO)', icon: Send, badge: '6' },
  { id: 'forecast', label: 'Demand Forecast', icon: TrendingUp, badge: 'AI' },
];

const enterprise = [
  { id: 'finance', label: 'Finance & Accounting', icon: CircleDollarSign },
  { id: 'hr', label: 'HR & Talent', icon: Users },
  { id: 'crm', label: 'Sales CRM & Deals', icon: Briefcase },
  { id: 'facilities', label: 'Facilities & Cleanrooms', icon: Wrench },
  { id: 'helpdesk', label: 'IT Helpdesk & SLA', icon: Headphones },
];

const governance = [
  { id: 'cockpit', label: 'GC Enterprise Cockpit', icon: Terminal },
  { id: 'eventbus', label: 'Global Event Bus', icon: Zap },
  { id: 'audit', label: 'Compliance Audit', icon: ShieldCheck },
  { id: 'settings', label: 'System Settings', icon: Settings },
];

const kpis = [
  ['Inventory Valuation', '$742,480', '+6.2%', Boxes, 'indigo'],
  ['Active Sales Orders', '42', '$186K open', Send, 'cyan'],
  ['Open Purchase Orders', '18', '$284K committed', ShoppingCart, 'amber'],
  ['QA Pass Rate', '96.4%', '3 quarantined', Microscope, 'emerald'],
];

const viewDetails: Record<View, { title: string; description: string; signals: string[] }> = {
  dashboard: {
    title: 'Executive Command Center',
    description: 'Real-time enterprise planning, supply-chain telemetry, approvals, and operational analytics.',
    signals: ['Inventory $742K', '42 open sales orders', '18 open purchase orders', 'QA pass rate 96.4%'],
  },
  inventory: {
    title: 'Inventory & Stock',
    description: 'SKU master, availability, batch control, warehouse balances, reorder, and valuation.',
    signals: ['1,248 active SKUs', '84,210 units on hand', '12 reorder alerts', '99.1% reconciled'],
  },
  qa: {
    title: 'Batch & Lot QA',
    description: 'Inspection, holds, genealogy, NCR, CAPA, and release decisions connected to receiving and production.',
    signals: ['3 quarantined lots', '96.4% pass rate', '2 NCRs open', 'Genealogy complete'],
  },
  warehouse: {
    title: 'Multi-Warehouse',
    description: 'Cross-site stock, bin-level availability, directed movement, reservations, counting, and fulfillment health.',
    signals: ['4 active warehouses', '98.8% pick accuracy', '6 transfers in flight', '0 blocked receipts'],
  },
  production: {
    title: 'Production & MES',
    description: 'Production orders, work centers, BOMs, routings, WIP, quality, and OEE.',
    signals: ['14 WIP orders', '87.6% OEE', '42m downtime', '1.8% scrap rate'],
  },
  scm: {
    title: 'Supply Chain & SCM',
    description: 'Demand, replenishment, supplier commitments, logistics, warehouse movement, and exception management in one operational view.',
    signals: ['7 supplier risks', '93% OTIF', '6 inbound loads', '4 expedite actions'],
  },
  procurement: {
    title: 'Procurement',
    description: 'Requisitions, sourcing, approvals, purchase orders, goods receipt, supplier controls, and procure-to-pay consequences.',
    signals: ['18 open POs', '$284K committed', '4 awaiting approval', '2 receipts due today'],
  },
  sales: {
    title: 'Sales Orders',
    description: 'Customer demand, quotations, orders, reservations, fulfillment, shipment, invoicing, and collection context.',
    signals: ['42 active orders', '$186K open', '6 awaiting fulfillment', '3 priority customers'],
  },
  forecast: {
    title: 'Demand Forecast',
    description: 'Planning signals combine sales history, open demand, seasonality, shortages, and production constraints.',
    signals: ['8-week horizon', '91% forecast fit', '5 shortage risks', '3 recommended buys'],
  },
  finance: {
    title: 'Finance & Accounting',
    description: 'General ledger, AP, AR, banking, assets, costing, close, and reconciliation.',
    signals: ['$612K cash', '$338K receivables', '$271K payables', 'Books balanced'],
  },
  hr: {
    title: 'HR & Talent',
    description: 'Organization, workforce lifecycle, attendance, leave, payroll, recruitment, performance, and compliance.',
    signals: ['428 active staff', '96% attendance', '12 leave requests', '7 open positions'],
  },
  crm: {
    title: 'Sales CRM & Deals',
    description: 'Accounts, opportunities, pipeline, quotations, activities, communications, and conversion tracking.',
    signals: ['$1.8M pipeline', '23 active deals', '7 quotes pending', '4 renewals due'],
  },
  facilities: {
    title: 'Facilities & Cleanrooms',
    description: 'Facility status, environmental controls, maintenance dependencies, room readiness, and regulated workspace evidence.',
    signals: ['18 zones healthy', '2 maintenance tasks', '0 cleanroom alarms', '99.6% uptime'],
  },
  helpdesk: {
    title: 'IT Helpdesk & SLA',
    description: 'Incidents, requests, ownership, service levels, escalation, and operational technology support context.',
    signals: ['11 open tickets', '92% SLA health', '2 escalations', '18m median response'],
  },
  cockpit: {
    title: 'GC Enterprise Cockpit',
    description: 'Cross-domain control surface for authority, workflows, exceptions, reconciliation, and operational command.',
    signals: ['12 domains online', '7 approvals pending', '0 integrity breaks', '3 executive exceptions'],
  },
  eventbus: {
    title: 'Global Event Bus',
    description: 'Domain events, delivery state, idempotency, outbox/inbox health, and cross-module consequences.',
    signals: ['99.98% delivered', '0 failed events', '42ms median latency', '6 consumers online'],
  },
  audit: {
    title: 'Compliance Audit',
    description: 'Immutable operational lineage showing actor, source transaction, authority, postings, movements, and evidence.',
    signals: ['100% actor trace', 'Ledger immutable', '0 orphan events', 'Evidence export ready'],
  },
  settings: {
    title: 'System Settings',
    description: 'Tenant configuration, company structure, warehouse policy, workflow rules, numbering, and governance defaults.',
    signals: ['4 legal entities', '6 warehouses', '12 workflows active', 'Policy set current'],
  },
};

export default function EnterpriseProductShowcase() {
  const [view, setView] = useState<View>('dashboard');
  const mobileNav = [...primary, ...enterprise, ...governance];
  const activeView = viewDetails[view];

  const switchView = (id: View) => setView(id);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#223049] bg-[#0a0e17] shadow-[0_30px_100px_-35px_rgba(0,0,0,0.65)]">
      <div className="flex h-12 items-center justify-between border-b border-[#1e293b] bg-[#0f1523] px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-indigo-600 text-[9px] font-black text-white">
            GC
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold text-white">GC-ERP</p>
            <p className="text-[8px] text-slate-500">
              {activeView.title}
            </p>
          </div>
          <div className="hidden h-5 w-px bg-[#223049] md:block" />
          <button
            type="button"
            onClick={() => switchView('dashboard')}
            className="hidden items-center gap-1.5 rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[9px] font-semibold text-slate-300 transition hover:bg-[#18223a] md:flex"
          >
            <Building2 className="h-3.5 w-3.5 text-indigo-400" />
            Gotham Manufacturing
            <ChevronDown className="h-3 w-3 text-slate-500" />
          </button>
          <button
            type="button"
            onClick={() => switchView('warehouse')}
            className="hidden items-center gap-1.5 rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[9px] font-semibold text-slate-400 transition hover:bg-[#18223a] lg:flex"
          >
            <Warehouse className="h-3.5 w-3.5" />
            All Warehouses
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-2 rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[9px] text-slate-500 xl:flex">
            <Search className="h-3.5 w-3.5" />
            Search products, POs, orders, T-Codes...
            <span className="rounded border border-[#2e4063] px-1 text-[8px] text-slate-400">⌘K</span>
          </div>
          <button
            type="button"
            onClick={() => switchView('cockpit')}
            className="hidden rounded-lg border border-[#223049] bg-[#131b2e] px-2.5 py-1.5 text-[9px] font-bold text-slate-300 transition hover:bg-[#18223a] md:flex md:items-center md:gap-1.5"
          >
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            / T-Code
          </button>
          <button
            type="button"
            aria-label="Open helpdesk"
            onClick={() => switchView('helpdesk')}
            className="rounded-lg p-2 text-slate-400 hover:bg-[#18223a]"
          >
            <Bell className="h-4 w-4" />
          </button>
          <div className="grid h-7 w-7 place-items-center rounded-full bg-indigo-600 text-[8px] font-black text-white">SA</div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto border-b border-[#1e293b] bg-[#0f1523] px-3 py-2 lg:hidden">
        {mobileNav.map(({ id, label, icon: Icon }) => (
          <button
            type="button"
            key={id}
            onClick={() => switchView(id as View)}
            aria-pressed={view === id}
            className={cn(
              'flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[8px] font-bold transition',
              view === id
                ? 'border-indigo-500 bg-indigo-600 text-white'
                : 'border-[#223049] bg-[#131b2e] text-slate-400 hover:bg-[#18223a] hover:text-white',
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[190px_1fr]">
        <aside className="hidden border-r border-[#1e293b] bg-[#0f1523] p-2.5 lg:block">
          <SidebarGroup title="Core Operations">
            {primary.map(({ id, label, icon: Icon, badge }) => (
              <button
                key={id}
                onClick={() => switchView(id as View)}
                className={cn(
                  'flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[9px] font-semibold transition',
                  view === id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-[#18223a] hover:text-white',
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="min-w-0 flex-1 truncate">{label}</span>
                {badge && (
                  <span className="rounded border border-[#2e4063] bg-[#18223a] px-1.5 py-0.5 text-[7px] font-black text-slate-300">
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </SidebarGroup>

          <SidebarGroup title="Enterprise">
            {enterprise.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => switchView(id as View)}
                className={cn(
                  'flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[9px] font-semibold transition',
                  view === id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-[#18223a] hover:text-white',
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </button>
            ))}
          </SidebarGroup>

          <SidebarGroup title="Governance">
            {governance.map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                key={id}
                onClick={() => switchView(id as View)}
                aria-pressed={view === id}
                className={cn(
                  'flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[9px] font-medium transition',
                  view === id ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-[#18223a] hover:text-white',
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="truncate">{label}</span>
              </button>
            ))}
          </SidebarGroup>
        </aside>

        <main className="min-w-0 bg-[#0a0e17] p-4 sm:p-5">
          <div className="border-b border-[#1e293b] pb-4">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">{activeView.title}</h3>
                <p className="mt-1 text-[9px] leading-4 text-slate-500">{activeView.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  ['Executive Overview', 'dashboard'],
                  ['Supply Chain & SCM', 'scm'],
                  ['Approvals (7)', 'procurement'],
                  ['Event Telemetry', 'eventbus'],
                ].map(([tab, target]) => (
                  <button
                    type="button"
                    key={tab}
                    onClick={() => switchView(target as View)}
                    className={cn(
                      'rounded-lg px-2.5 py-1.5 text-[8px] font-bold transition',
                      view === target ? 'bg-indigo-600 text-white' : 'bg-[#18223a] text-slate-400 hover:text-white',
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {view === 'dashboard' && <DashboardScene />}
          {view === 'inventory' && <InventoryScene />}
          {view === 'production' && <ProductionScene />}
          {view === 'finance' && <FinanceScene />}
          {!['dashboard', 'inventory', 'production', 'finance'].includes(view) && (
            <EnterpriseModuleScene view={view} />
          )}
        </main>
      </div>
    </div>
  );
}

function EnterpriseModuleScene({ view }: { view: View }) {
  const detail = viewDetails[view];

  return (
    <div className="mt-4 space-y-3">
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {detail.signals.map((signal, index) => (
          <div key={signal} className="rounded-xl border border-[#223049] bg-[#131b2e] p-3">
            <p className="text-[7px] font-black uppercase tracking-wide text-slate-600">Live signal {String(index + 1).padStart(2, '0')}</p>
            <p className="mt-3 text-[10px] font-black text-white">{signal}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.15fr_.85fr]">
        <section className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <p className="text-[10px] font-bold text-white">Authoritative workflow activity</p>
          <p className="text-[8px] text-slate-500">Synthetic interaction preview</p>
          <div className="mt-3 space-y-2">
            {[
              ['10:42', 'Command accepted by domain authority'],
              ['10:38', 'Operational projection refreshed'],
              ['10:31', 'Cross-domain consequence published'],
              ['10:24', 'Audit and reconciliation evidence appended'],
            ].map(([time, copy]) => (
              <div key={time} className="grid grid-cols-[42px_1fr] gap-3 rounded-lg border border-[#1e293b] bg-[#0b101c] px-3 py-2.5">
                <span className="font-mono text-[7px] font-bold text-slate-600">{time}</span>
                <span className="text-[8px] font-semibold text-slate-300">{copy}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4">
          <p className="text-[8px] font-black uppercase tracking-wide text-indigo-300">Interactive product preview</p>
          <p className="mt-2 text-[10px] font-black text-white">{detail.title}</p>
          <p className="mt-2 text-[8px] leading-4 text-slate-400">
            Use the sidebar, mobile module strip, or command tabs to move between enterprise domains and see the workspace respond immediately.
          </p>
        </section>
      </div>
    </div>
  );
}

function SidebarGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-4">
      <p className="mb-1.5 px-2.5 text-[7px] font-black uppercase tracking-[0.16em] text-slate-600">{title}</p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function DashboardScene() {
  return (
    <div className="mt-4 space-y-3">
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {kpis.map(([label, value, detail, Icon, tone]) => {
          const TypedIcon = Icon as typeof Boxes;
          return (
            <div key={String(label)} className="rounded-xl border border-[#223049] bg-[#131b2e] p-3">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold text-slate-500">{String(label)}</span>
                <div className={cn(
                  'grid h-7 w-7 place-items-center rounded-lg',
                  tone === 'indigo' && 'bg-indigo-500/10 text-indigo-400',
                  tone === 'cyan' && 'bg-cyan-500/10 text-cyan-400',
                  tone === 'amber' && 'bg-amber-500/10 text-amber-400',
                  tone === 'emerald' && 'bg-emerald-500/10 text-emerald-400',
                )}>
                  <TypedIcon className="h-3.5 w-3.5" />
                </div>
              </div>
              <p className="mt-4 text-lg font-black tracking-tight text-white">{String(value)}</p>
              <p className="mt-1 text-[8px] text-slate-500">{String(detail)}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-3 xl:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-white">Supply Chain Velocity</p>
              <p className="text-[8px] text-slate-500">Inbound vs outbound movement</p>
            </div>
            <span className="rounded-lg bg-[#18223a] px-2 py-1 text-[8px] font-bold text-slate-400">7d</span>
          </div>
          <div className="mt-5 flex h-24 items-end gap-2">
            {[42, 66, 51, 78, 63, 88, 74, 92, 69, 84, 77, 96].map((height, index) => (
              <div key={index} className="flex-1">
                <div className="rounded-t bg-indigo-500/80" style={{ height: `${height}px` }} />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[7px] font-semibold text-slate-600">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <p className="text-[10px] font-bold text-white">Pending Approvals</p>
          <p className="text-[8px] text-slate-500">Cross-module approval queue</p>
          <div className="mt-3 space-y-2">
            {[
              ['PO-4831', 'Purchase order', '$48,600', 'Procurement'],
              ['EXP-108', 'Expense voucher', '$2,840', 'Finance'],
              ['BATCH-77', 'QA release', 'Quarantine', 'Quality'],
            ].map(([id, title, value, area]) => (
              <div key={id} className="flex items-center justify-between gap-3 rounded-lg border border-[#1e293b] bg-[#0b101c] p-2.5">
                <div className="min-w-0">
                  <p className="text-[8px] font-bold text-slate-300">{id} • {title}</p>
                  <p className="text-[7px] text-slate-600">{area}</p>
                </div>
                <span className="text-[8px] font-bold text-amber-400">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-[#223049] overflow-hidden rounded-xl border border-[#223049] bg-[#0f1523]">
        {[
          ['Inventory', 'Healthy', '99.1% reconciled'],
          ['Event Bus', 'Online', '0 failed deliveries'],
          ['Offline Edge', 'Ready', '0 unresolved conflicts'],
        ].map(([label, status, detail]) => (
          <div key={label} className="p-3">
            <p className="text-[7px] font-black uppercase tracking-wide text-slate-600">{label}</p>
            <p className="mt-1 text-[9px] font-bold text-emerald-400">{status}</p>
            <p className="mt-1 text-[7px] text-slate-600">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InventoryScene() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {[
          ['Active SKUs', '1,248', '7 categories'],
          ['On Hand Units', '84,210', 'All warehouses'],
          ['Available', '76,402', 'After reservations'],
          ['Reorder Needed', '12', '4 critical'],
        ].map(([label, value, detail]) => (
          <div key={label} className="rounded-xl border border-[#223049] bg-[#131b2e] p-3">
            <p className="text-[8px] text-slate-500">{label}</p>
            <p className="mt-3 text-lg font-black text-white">{value}</p>
            <p className="mt-1 text-[7px] text-slate-600">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-[#223049] bg-[#131b2e]">
        <div className="flex items-center justify-between border-b border-[#223049] px-4 py-3">
          <div>
            <p className="text-[10px] font-bold text-white">Stock Master</p>
            <p className="text-[8px] text-slate-500">Stable SKU rows • batch / warehouse aware</p>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-lg border border-[#2e4063] bg-[#0b101c] px-2.5 py-1.5 text-[8px] text-slate-400">Category: All</span>
            <span className="rounded-lg bg-indigo-600 px-2.5 py-1.5 text-[8px] font-bold text-white">+ New SKU</span>
          </div>
        </div>
        <div className="grid grid-cols-[.9fr_1.6fr_.9fr_.7fr_.7fr_.8fr] border-b border-[#1e293b] bg-[#0b101c] px-4 py-2 text-[7px] font-black uppercase tracking-wide text-slate-600">
          <span>SKU</span><span>Product</span><span>Category</span><span>On Hand</span><span>Available</span><span>Health</span>
        </div>
        {[
          ['SUR-001', 'Surgical Scissor 6.5"', 'Finished Goods', '2,440', '2,110', 'Optimal'],
          ['RAW-217', 'AISI 420 Stainless Strip', 'Raw Materials', '8,200', '6,950', 'Optimal'],
          ['PKG-044', 'Sterile Blister Pack', 'Packaging', '620', '148', 'Low'],
          ['SPR-918', 'Grinding Wheel 100mm', 'Industrial Spares', '32', '18', 'Critical'],
        ].map(([sku, name, category, onHand, available, health]) => (
          <div key={sku} className="grid grid-cols-[.9fr_1.6fr_.9fr_.7fr_.7fr_.8fr] items-center border-b border-[#1e293b] px-4 py-2.5 text-[8px] last:border-b-0">
            <span className="font-mono font-bold text-indigo-300">{sku}</span>
            <span className="truncate font-semibold text-slate-300">{name}</span>
            <span className="truncate text-slate-500">{category}</span>
            <span className="text-slate-300">{onHand}</span>
            <span className="text-slate-300">{available}</span>
            <span className={health === 'Optimal' ? 'text-emerald-400' : health === 'Low' ? 'text-amber-400' : 'text-rose-400'}>{health}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductionScene() {
  return (
    <div className="mt-4 grid gap-3 xl:grid-cols-[1.1fr_.9fr]">
      <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-white">Production Lifecycle</p>
            <p className="text-[8px] text-slate-500">Orders • routing • WIP • quality • receipt</p>
          </div>
          <span className="rounded-lg bg-amber-500/10 px-2 py-1 text-[8px] font-bold text-amber-400">SURGICAL_EQUIPMENT</span>
        </div>
        <div className="mt-4 space-y-3">
          {[
            ['MO-7712', 'Mayo Scissors', 78, 'Grinding'],
            ['MO-7715', 'Kelly Forceps', 46, 'Heat Treatment'],
            ['MO-7719', 'Needle Holder', 92, 'Final QA'],
          ].map(([id, item, progress, stage]) => (
            <div key={String(id)} className="rounded-lg border border-[#1e293b] bg-[#0b101c] p-3">
              <div className="flex justify-between gap-3">
                <div>
                  <p className="text-[8px] font-mono font-bold text-indigo-300">{String(id)}</p>
                  <p className="mt-0.5 text-[9px] font-semibold text-slate-300">{String(item)}</p>
                </div>
                <span className="text-[8px] font-bold text-cyan-400">{String(stage)}</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#18223a]">
                <div className="h-full rounded-full bg-indigo-500" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-1 text-right text-[7px] text-slate-600">{String(progress)}%</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3">
        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <p className="text-[10px] font-bold text-white">Shop Floor KPIs</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              ['OEE', '87.6%'],
              ['WIP Orders', '14'],
              ['Downtime', '42m'],
              ['Scrap Rate', '1.8%'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-[#0b101c] p-2.5">
                <p className="text-[7px] text-slate-600">{label}</p>
                <p className="mt-1 text-sm font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-[#223049] bg-[#131b2e] p-4">
          <p className="text-[10px] font-bold text-white">Control Tower</p>
          <div className="mt-3 space-y-2">
            {[
              ['WC-GRIND-02', 'Grinding Cell 02', 'Running'],
              ['WC-HT-01', 'Heat Treatment Furnace', 'Running'],
              ['WC-POLISH-04', 'Polishing Cell 04', 'Maintenance'],
            ].map(([code, label, status]) => (
              <div key={code} className="flex items-center justify-between rounded-lg border border-[#1e293b] bg-[#0b101c] p-2.5">
                <div>
                  <p className="text-[8px] font-bold text-slate-300">{label}</p>
                  <p className="text-[7px] font-mono text-slate-600">{code}</p>
                </div>
                <span className={status === 'Running' ? 'text-[8px] font-bold text-emerald-400' : 'text-[8px] font-bold text-amber-400'}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanceScene() {
  return (
    <div className="mt-4 space-y-3">
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {[
          ['Cash Position', '$612K', 'Bank + cash'],
          ['Receivables', '$338K', '14 overdue'],
          ['Payables', '$271K', '9 due this week'],
          ['Gross Margin', '31.8%', '+2.3%'],
        ].map(([label, value, detail]) => (
          <div key={label} className="rounded-xl border border-[#223049] bg-[#131b2e] p-3">
            <p className="text-[8px] text-slate-500">{label}</p>
            <p className="mt-3 text-lg font-black text-white">{value}</p>
            <p className="mt-1 text-[7px] text-slate-600">{detail}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-[#223049] bg-[#131b2e]">
        <div className="flex items-center justify-between border-b border-[#223049] px-4 py-3">
          <div>
            <p className="text-[10px] font-bold text-white">General Ledger & Reconciliation</p>
            <p className="text-[8px] text-slate-500">Operational postings • immutable journal trail</p>
          </div>
          <span className="rounded-lg bg-emerald-500/10 px-2 py-1 text-[8px] font-bold text-emerald-400">Books balanced</span>
        </div>
        {[
          ['JV-3101', 'Inventory receipt accrual', '$48,600', 'Posted'],
          ['AR-8291', 'Customer invoice • Apex Engineering', '$21,840', 'Overdue'],
          ['AP-4402', 'Metro Industrial supplier invoice', '$48,600', 'Approved'],
          ['JV-3098', 'Inventory valuation adjustment', '$18,420', 'Posted'],
        ].map(([ref, memo, value, status]) => (
          <div key={ref} className="grid grid-cols-[.8fr_1.8fr_.8fr_.7fr] items-center border-b border-[#1e293b] px-4 py-2.5 text-[8px] last:border-b-0">
            <span className="font-mono font-bold text-indigo-300">{ref}</span>
            <span className="truncate text-slate-300">{memo}</span>
            <span className="font-semibold text-slate-300">{value}</span>
            <span className={status === 'Overdue' ? 'text-rose-400' : status === 'Approved' ? 'text-amber-400' : 'text-emerald-400'}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
