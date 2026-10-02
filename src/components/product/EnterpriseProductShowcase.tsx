'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Bell,
  Boxes,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Clock3,
  Factory,
  Landmark,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Package2,
  Search,
  ShoppingCart,
  UsersRound,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type Workspace = 'overview' | 'procurement' | 'inventory' | 'finance';

type WorkspaceConfig = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
};

const workspaceConfig: Record<Workspace, WorkspaceConfig> = {
  overview: {
    label: 'Overview',
    eyebrow: 'Executive operations',
    title: 'Business command center',
    description: 'One operational view across revenue, purchasing, stock, production and cash.',
  },
  procurement: {
    label: 'Procurement',
    eyebrow: 'Procure-to-pay',
    title: 'Purchasing control tower',
    description: 'Track supplier commitments, approvals, receipts and exceptions before they become delays.',
  },
  inventory: {
    label: 'Inventory',
    eyebrow: 'Warehouse operations',
    title: 'Inventory control',
    description: 'See stock health, reserved quantities, transfers and reorder risk across every location.',
  },
  finance: {
    label: 'Finance',
    eyebrow: 'Financial operations',
    title: 'Cash and working capital',
    description: 'Connect operational activity to receivables, payables and the general ledger.',
  },
};

const workspaceIcons: Record<Workspace, typeof LayoutDashboard> = {
  overview: LayoutDashboard,
  procurement: ShoppingCart,
  inventory: Boxes,
  finance: Landmark,
};

const kpisByWorkspace: Record<Workspace, Array<{ label: string; value: string; delta: string; positive?: boolean }>> = {
  overview: [
    { label: 'Net revenue', value: '$1.82M', delta: '+12.4%', positive: true },
    { label: 'Open purchase orders', value: '$284K', delta: '18 active' },
    { label: 'Inventory value', value: '$742K', delta: '96.8% healthy', positive: true },
    { label: 'Production attainment', value: '92%', delta: '+4.1%', positive: true },
  ],
  procurement: [
    { label: 'Open commitments', value: '$284K', delta: '18 POs' },
    { label: 'Pending approvals', value: '7', delta: '3 high value' },
    { label: 'On-time suppliers', value: '94.2%', delta: '+1.8%', positive: true },
    { label: 'Unmatched receipts', value: '4', delta: 'Needs review' },
  ],
  inventory: [
    { label: 'Inventory value', value: '$742K', delta: '3 warehouses' },
    { label: 'Low-stock items', value: '12', delta: '4 critical' },
    { label: 'Reserved stock', value: '$118K', delta: '42 orders' },
    { label: 'Count accuracy', value: '99.1%', delta: '+0.6%', positive: true },
  ],
  finance: [
    { label: 'Cash position', value: '$612K', delta: '+8.6%', positive: true },
    { label: 'Receivables', value: '$338K', delta: '14 overdue' },
    { label: 'Payables', value: '$271K', delta: '9 due this week' },
    { label: 'Gross margin', value: '31.8%', delta: '+2.3%', positive: true },
  ],
};

const exceptions = [
  {
    id: 'PO-4831',
    title: 'Purchase order approval',
    detail: 'Supplier: Metro Industrial • $48,600',
    status: 'Approval required',
    tone: 'warning',
  },
  {
    id: 'SKU-108',
    title: 'Bearing assembly below reorder point',
    detail: 'North Warehouse • 18 units available',
    status: 'Reorder',
    tone: 'danger',
  },
  {
    id: 'INV-8291',
    title: 'Customer invoice overdue',
    detail: 'Apex Engineering • $21,840 • 12 days',
    status: 'Follow up',
    tone: 'neutral',
  },
];

const recentActivity = [
  ['GRN-10291', 'Goods receipt posted', 'North Warehouse', '2m ago'],
  ['SO-8814', 'Sales order reserved', 'Central Operations', '8m ago'],
  ['JV-3098', 'Inventory valuation posted', 'Finance', '14m ago'],
];

function MiniBars({ values }: { values: number[] }) {
  return (
    <div className="flex h-20 items-end gap-1.5" aria-label="Operational trend">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex-1 rounded-t-sm bg-zinc-900 dark:bg-white"
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
}

export default function EnterpriseProductShowcase() {
  const [workspace, setWorkspace] = useState<Workspace>('overview');
  const activeConfig = workspaceConfig[workspace];
  const kpis = kpisByWorkspace[workspace];

  const trend = useMemo(() => {
    if (workspace === 'finance') return [38, 54, 47, 62, 58, 72, 69, 84, 78, 92, 88, 96];
    if (workspace === 'inventory') return [74, 78, 65, 82, 76, 88, 84, 91, 80, 93, 89, 96];
    if (workspace === 'procurement') return [52, 66, 59, 74, 70, 81, 76, 86, 82, 90, 85, 94];
    return [45, 58, 54, 68, 63, 76, 72, 84, 79, 90, 86, 98];
  }, [workspace]);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_30px_100px_-35px_rgba(0,0,0,0.35)] dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex h-12 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <button className="rounded-md p-1.5 text-zinc-500 lg:hidden" aria-label="Open product navigation">
            <Menu className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-zinc-950 text-[10px] font-bold text-white dark:bg-white dark:text-zinc-950">
              GC
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">ERP</span>
          </div>
          <div className="hidden h-5 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
          <button className="hidden items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 sm:flex">
            Atlas Manufacturing
            <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button className="hidden rounded-md border border-zinc-200 px-2.5 py-1.5 text-[11px] font-medium text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 md:flex md:items-center md:gap-1.5">
            <Search className="h-3.5 w-3.5" />
            Search
            <span className="ml-2 rounded border border-zinc-200 px-1 text-[9px] dark:border-zinc-700">⌘K</span>
          </button>
          <button className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </button>
          <button className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
            AH
          </button>
        </div>
      </div>

      <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[164px_1fr]">
        <aside className="hidden border-r border-zinc-200 bg-zinc-50/70 p-3 dark:border-zinc-800 dark:bg-zinc-900/30 lg:block">
          <div className="space-y-1">
            {(Object.keys(workspaceConfig) as Workspace[]).map((key) => {
              const Icon = workspaceIcons[key];
              const isActive = workspace === key;
              return (
                <button
                  key={key}
                  onClick={() => setWorkspace(key)}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs font-medium transition-colors',
                    isActive
                      ? 'bg-white text-zinc-950 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-white dark:ring-zinc-800'
                      : 'text-zinc-500 hover:bg-white/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white',
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {workspaceConfig[key].label}
                </button>
              );
            })}
          </div>

          <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
            <p className="px-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Operations</p>
            {[
              [Package2, 'Sales'],
              [Factory, 'Manufacturing'],
              [UsersRound, 'People'],
            ].map(([Icon, label]) => {
              const TypedIcon = Icon as typeof Package2;
              return (
                <div key={label as string} className="mt-1 flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <TypedIcon className="h-3.5 w-3.5" />
                  {label as string}
                </div>
              );
            })}
          </div>
        </aside>

        <main className="min-w-0 p-4 sm:p-5">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{activeConfig.eyebrow}</p>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">{activeConfig.title}</h3>
              <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">{activeConfig.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-[10px] font-semibold text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                This month
              </button>
              <button className="rounded-lg bg-zinc-950 px-3 py-2 text-[10px] font-semibold text-white dark:bg-white dark:text-zinc-950">
                Create report
              </button>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900/70">
                <p className="truncate text-[9px] font-medium text-zinc-400">{kpi.label}</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">{kpi.value}</p>
                  <span className={cn('text-[9px] font-medium', kpi.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400')}>
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 xl:grid-cols-[1.25fr_.75fr]">
            <section className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/70">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">Operational performance</p>
                  <p className="mt-0.5 text-[9px] text-zinc-400">Rolling 12-period trend</p>
                </div>
                <button className="rounded-md p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="More options">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <MiniBars values={trend} />
              <div className="mt-3 flex justify-between text-[8px] font-medium uppercase tracking-wider text-zinc-400">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
              </div>
            </section>

            <section className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/70">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">Production status</p>
                  <p className="mt-0.5 text-[9px] text-zinc-400">Today</p>
                </div>
                <Factory className="h-4 w-4 text-zinc-400" />
              </div>
              <div className="space-y-3">
                {[
                  ['WO-7712', 'Pump assembly', 71],
                  ['WO-7715', 'Valve casing', 46],
                  ['WO-7719', 'Drive housing', 88],
                ].map(([id, label, progress]) => (
                  <div key={id as string}>
                    <div className="mb-1 flex justify-between gap-3 text-[9px]">
                      <span className="font-medium text-zinc-600 dark:text-zinc-300">{label as string}</span>
                      <span className="text-zinc-400">{progress as number}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                      <div className="h-full rounded-full bg-zinc-900 dark:bg-white" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-3 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <div>
                <p className="text-xs font-semibold text-zinc-900 dark:text-white">Attention required</p>
                <p className="mt-0.5 text-[9px] text-zinc-400">Cross-functional exceptions</p>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                3 items
              </span>
            </div>

            <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {exceptions.map((item) => (
                <div key={item.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-2.5">
                  <div
                    className={cn(
                      'grid h-7 w-7 place-items-center rounded-lg',
                      item.tone === 'warning' && 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300',
                      item.tone === 'danger' && 'bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300',
                      item.tone === 'neutral' && 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300',
                    )}
                  >
                    {item.tone === 'danger' ? <CircleAlert className="h-3.5 w-3.5" /> : item.tone === 'warning' ? <Clock3 className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-semibold text-zinc-400">{item.id}</span>
                      <span className="truncate text-[10px] font-medium text-zinc-800 dark:text-zinc-200">{item.title}</span>
                    </div>
                    <p className="truncate text-[9px] text-zinc-400">{item.detail}</p>
                  </div>
                  <button className="hidden items-center gap-1 text-[9px] font-semibold text-zinc-500 hover:text-zinc-950 dark:hover:text-white sm:flex">
                    {item.status}
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-3 hidden grid-cols-3 divide-x divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/70 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/30 md:grid">
            {recentActivity.map(([id, action, area, time]) => (
              <div key={id} className="px-3 py-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[8px] font-semibold text-zinc-400">{id}</span>
                  <span className="text-[8px] text-zinc-400">{time}</span>
                </div>
                <p className="mt-1 truncate text-[9px] font-medium text-zinc-700 dark:text-zinc-300">{action}</p>
                <p className="truncate text-[8px] text-zinc-400">{area}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
