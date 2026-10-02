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

type View = 'dashboard' | 'inventory' | 'production' | 'finance';

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
  { label: 'GC Enterprise Cockpit', icon: Terminal },
  { label: 'Global Event Bus', icon: Zap },
  { label: 'Compliance Audit', icon: ShieldCheck },
  { label: 'System Settings', icon: Settings },
];

const kpis = [
  ['Inventory Valuation', '$742,480', '+6.2%', Boxes, 'indigo'],
  ['Active Sales Orders', '42', '$186K open', Send, 'cyan'],
  ['Open Purchase Orders', '18', '$284K committed', ShoppingCart, 'amber'],
  ['QA Pass Rate', '96.4%', '3 quarantined', Microscope, 'emerald'],
];

export default function EnterpriseProductShowcase() {
  const [view, setView] = useState<View>('dashboard');

  const switchView = (id: string) => {
    if (id === 'dashboard' || id === 'inventory' || id === 'production' || id === 'finance') {
      setView(id);
    }
  };

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
              {view === 'dashboard' ? 'Command Center' : view === 'inventory' ? 'Inventory & Stock' : view === 'production' ? 'Production & MES' : 'Finance & Accounting'}
            </p>
          </div>
          <div className="hidden h-5 w-px bg-[#223049] md:block" />
          <button className="hidden items-center gap-1.5 rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[9px] font-semibold text-slate-300 md:flex">
            <Building2 className="h-3.5 w-3.5 text-indigo-400" />
            Gotham Manufacturing
            <ChevronDown className="h-3 w-3 text-slate-500" />
          </button>
          <button className="hidden items-center gap-1.5 rounded-lg border border-[#223049] bg-[#0b101c] px-2.5 py-1.5 text-[9px] font-semibold text-slate-400 lg:flex">
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
          <button className="hidden rounded-lg border border-[#223049] bg-[#131b2e] px-2.5 py-1.5 text-[9px] font-bold text-slate-300 md:flex md:items-center md:gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            / T-Code
          </button>
          <button aria-label="Notifications" className="rounded-lg p-2 text-slate-400 hover:bg-[#18223a]">
            <Bell className="h-4 w-4" />
          </button>
          <div className="grid h-7 w-7 place-items-center rounded-full bg-indigo-600 text-[8px] font-black text-white">SA</div>
        </div>
      </div>

      <div className="grid min-h-[560px] lg:grid-cols-[190px_1fr]">
        <aside className="hidden border-r border-[#1e293b] bg-[#0f1523] p-2.5 lg:block">
          <SidebarGroup title="Core Operations">
            {primary.map(({ id, label, icon: Icon, badge }) => (
              <button
                key={id}
                onClick={() => switchView(id)}
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
                onClick={() => switchView(id)}
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
            {governance.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[9px] font-medium text-slate-500">
                <Icon className="h-3.5 w-3.5" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </SidebarGroup>
        </aside>

        <main className="min-w-0 bg-[#0a0e17] p-4 sm:p-5">
          <div className="border-b border-[#1e293b] pb-4">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {view === 'dashboard' && 'Executive Command Center'}
                  {view === 'inventory' && 'Inventory & Stock'}
                  {view === 'production' && 'Production & MES'}
                  {view === 'finance' && 'Finance & Accounting'}
                </h3>
                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  {view === 'dashboard' && 'Real-time enterprise planning, supply-chain telemetry, approvals, and operational analytics'}
                  {view === 'inventory' && 'SKU master, availability, batch control, warehouse balances, reorder, and valuation'}
                  {view === 'production' && 'Production orders, work centers, BOMs, routings, WIP, quality, and OEE'}
                  {view === 'finance' && 'General ledger, AP, AR, banking, assets, costing, close, and reconciliation'}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Executive Overview', 'Supply Chain & SCM', 'Approvals (7)', 'Event Telemetry'].map((tab, index) => (
                  <span
                    key={tab}
                    className={cn(
                      'rounded-lg px-2.5 py-1.5 text-[8px] font-bold',
                      index === 0 ? 'bg-indigo-600 text-white' : 'bg-[#18223a] text-slate-400',
                    )}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {view === 'dashboard' && <DashboardScene />}
          {view === 'inventory' && <InventoryScene />}
          {view === 'production' && <ProductionScene />}
          {view === 'finance' && <FinanceScene />}
        </main>
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
