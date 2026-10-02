import { useMemo, useState } from 'react';
import {
  ArrowLeftRight,
  ArrowRight,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  ClipboardCheck,
  Factory,
  FileText,
  History,
  Landmark,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UsersRound,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { cn } from '../../lib/utils';

type Role = 'executive' | 'procurement' | 'warehouse' | 'finance';
type Module = 'dashboard' | 'procurement' | 'inventory' | 'manufacturing' | 'finance' | 'audit';

type DemoEvent = {
  id: string;
  type: string;
  title: string;
  detail: string;
  module: Module;
  time: string;
};

const roleLabels: Record<Role, string> = {
  executive: 'Executive',
  procurement: 'Procurement Manager',
  warehouse: 'Warehouse Lead',
  finance: 'Finance Manager',
};

const modules: Array<{ id: Module; label: string; icon: typeof Boxes }> = [
  { id: 'dashboard', label: 'Overview', icon: Boxes },
  { id: 'procurement', label: 'Procurement', icon: ShoppingCart },
  { id: 'inventory', label: 'Inventory', icon: PackageCheck },
  { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
  { id: 'finance', label: 'Finance', icon: Landmark },
  { id: 'audit', label: 'Audit', icon: ShieldCheck },
];

const seedEvents: DemoEvent[] = [
  {
    id: 'EVT-1006',
    type: 'journal.posted',
    title: 'Inventory valuation journal posted',
    detail: 'JV-3098 • $18,420',
    module: 'finance',
    time: '09:44',
  },
  {
    id: 'EVT-1005',
    type: 'inventory.received',
    title: 'Goods receipt completed',
    detail: 'GRN-10291 • North Warehouse',
    module: 'inventory',
    time: '09:39',
  },
  {
    id: 'EVT-1004',
    type: 'purchase.approved',
    title: 'Purchase order approved',
    detail: 'PO-4829 • $31,200',
    module: 'procurement',
    time: '09:37',
  },
  {
    id: 'EVT-1003',
    type: 'production.started',
    title: 'Work order released to floor',
    detail: 'WO-7712 • Pump assembly',
    module: 'manufacturing',
    time: '09:28',
  },
];

const initialInventory = [
  { sku: 'BEA-108', item: 'Bearing Assembly', onHand: 18, reserved: 10, reorder: 24, warehouse: 'North' },
  { sku: 'VAL-442', item: 'Hydraulic Valve', onHand: 124, reserved: 22, reorder: 40, warehouse: 'North' },
  { sku: 'CAS-210', item: 'Valve Casing', onHand: 88, reserved: 16, reorder: 35, warehouse: 'Central' },
  { sku: 'ROD-001', item: 'Industrial Steel Rod', onHand: 502, reserved: 74, reorder: 150, warehouse: 'Central' },
];

const purchaseOrders = [
  { id: 'PO-4831', supplier: 'Metro Industrial', value: '$48,600', status: 'Approval required', eta: 'Oct 6' },
  { id: 'PO-4829', supplier: 'NorthStar Metals', value: '$31,200', status: 'Approved', eta: 'Oct 4' },
  { id: 'PO-4826', supplier: 'Pak Precision', value: '$19,840', status: 'Partially received', eta: 'Oct 3' },
];

const workOrders = [
  { id: 'WO-7712', item: 'Pump assembly', progress: 71, due: 'Today' },
  { id: 'WO-7715', item: 'Valve casing', progress: 46, due: 'Tomorrow' },
  { id: 'WO-7719', item: 'Drive housing', progress: 88, due: 'Today' },
];

const financeRows = [
  { ref: 'INV-8291', party: 'Apex Engineering', kind: 'Receivable', value: '$21,840', status: '12 days overdue' },
  { ref: 'BILL-4402', party: 'Metro Industrial', kind: 'Payable', value: '$48,600', status: 'Due Oct 10' },
  { ref: 'JV-3098', party: 'Inventory valuation', kind: 'Journal', value: '$18,420', status: 'Posted' },
];

function Status({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'good' | 'warning' | 'danger' }) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-2 py-1 text-[10px] font-semibold',
        tone === 'good' && 'bg-emerald-500/10 text-emerald-400',
        tone === 'warning' && 'bg-amber-500/10 text-amber-300',
        tone === 'danger' && 'bg-red-500/10 text-red-300',
        tone === 'neutral' && 'bg-zinc-800 text-zinc-300',
      )}
    >
      {children}
    </span>
  );
}

export default function GCErpDemo() {
  const [role, setRole] = useState<Role>('executive');
  const [module, setModule] = useState<Module>('dashboard');
  const [events, setEvents] = useState<DemoEvent[]>(seedEvents);
  const [poApproved, setPoApproved] = useState(false);
  const [stockReceived, setStockReceived] = useState(false);
  const [journalPosted, setJournalPosted] = useState(false);

  const roleSubtitle = useMemo(() => {
    if (role === 'executive') return 'Cross-functional performance, risk and working capital';
    if (role === 'procurement') return 'Suppliers, approvals, commitments and receipts';
    if (role === 'warehouse') return 'Stock, reservations, transfers and receiving';
    return 'Receivables, payables, journals and operational posting';
  }, [role]);

  const pushEvent = (event: Omit<DemoEvent, 'id' | 'time'>) => {
    const now = new Date();
    setEvents((current) => [
      {
        ...event,
        id: `EVT-${1010 + current.length}`,
        time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      ...current,
    ]);
  };

  const approvePO = () => {
    if (poApproved) return;
    setPoApproved(true);
    pushEvent({
      type: 'purchase.approved',
      title: 'Purchase order approved',
      detail: 'PO-4831 • Metro Industrial • $48,600',
      module: 'procurement',
    });
  };

  const receiveStock = () => {
    if (stockReceived) return;
    setStockReceived(true);
    pushEvent({
      type: 'inventory.received',
      title: 'Goods receipt posted',
      detail: 'GRN-10294 • Bearing Assembly • +40 units',
      module: 'inventory',
    });
  };

  const postJournal = () => {
    if (journalPosted) return;
    setJournalPosted(true);
    pushEvent({
      type: 'journal.posted',
      title: 'Operational journal posted',
      detail: 'JV-3101 • Inventory receipt accrual',
      module: 'finance',
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-16 text-zinc-100">
      <SEO
        title="GC-ERP Interactive Demo | Gotham Coders"
        description="Explore a browser-based GC-ERP simulation across procurement, inventory, manufacturing, finance and audit."
        pathname="/demo/gc-erp"
      />

      <div className="border-b border-zinc-800 bg-black/40">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-white text-[10px] font-bold text-zinc-950">GC</div>
              GC-ERP Interactive Sandbox
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              Browser-only simulation with sample operational data. State resets when the page reloads.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300">
              Atlas Manufacturing
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="relative">
              <select
                value={role}
                onChange={(event) => setRole(event.target.value as Role)}
                className="appearance-none rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-3 pr-8 text-xs font-medium text-zinc-200 outline-none"
                aria-label="Switch role"
              >
                {Object.entries(roleLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[200px_1fr_330px]">
        <aside className="hidden min-h-[calc(100vh-129px)] border-r border-zinc-800 bg-zinc-950 p-4 lg:block">
          <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">Workspace</p>
          <div className="space-y-1">
            {modules.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setModule(id)}
                className={cn(
                  'flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition',
                  module === id
                    ? 'bg-white text-zinc-950'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white',
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <p className="text-xs font-semibold text-white">{roleLabels[role]}</p>
            <p className="mt-2 text-xs leading-5 text-zinc-500">{roleSubtitle}</p>
          </div>
        </aside>

        <main className="min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">GC-ERP / {module}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                {module === 'dashboard' ? 'Operations command center' : modules.find((item) => item.id === module)?.label}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{roleSubtitle}</p>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-2 text-xs font-medium text-zinc-300">
                <Search className="h-3.5 w-3.5" />
                Search records
              </button>
              <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950">Create report</button>
            </div>
          </div>

          {module === 'dashboard' && (
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ['Net revenue', '$1.82M', '+12.4%'],
                  ['Open purchase orders', '$284K', '18 active'],
                  ['Inventory value', '$742K', '96.8% healthy'],
                  ['Production attainment', '92%', '+4.1%'],
                ].map(([label, value, meta]) => (
                  <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-4">
                    <p className="text-xs text-zinc-500">{label}</p>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <p className="text-2xl font-semibold text-white">{value}</p>
                      <span className="text-xs text-zinc-500">{meta}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
                <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-sm font-semibold text-white">Cross-functional exceptions</h2>
                      <p className="mt-1 text-xs text-zinc-500">Issues that need a decision before they become reconciliation work.</p>
                    </div>
                    <Status tone="warning">3 open</Status>
                  </div>

                  <div className="mt-5 divide-y divide-zinc-800">
                    {[
                      ['PO-4831', 'Purchase order requires approval', '$48,600 supplier commitment', 'warning'],
                      ['BEA-108', 'Bearing Assembly below reorder point', '18 units available / 24 reorder', 'danger'],
                      ['INV-8291', 'Customer invoice overdue', '$21,840 / 12 days', 'neutral'],
                    ].map(([ref, title, detail, tone]) => (
                      <div key={ref} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-zinc-800 text-zinc-400">
                          <CircleAlert className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-zinc-300">{ref}</p>
                          <p className="truncate text-sm text-white">{title}</p>
                          <p className="text-xs text-zinc-500">{detail}</p>
                        </div>
                        <Status tone={tone as 'neutral' | 'warning' | 'danger'}>{tone === 'warning' ? 'Review' : tone === 'danger' ? 'Reorder' : 'Follow up'}</Status>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
                  <h2 className="text-sm font-semibold text-white">Production status</h2>
                  <p className="mt-1 text-xs text-zinc-500">Active work orders</p>
                  <div className="mt-5 space-y-5">
                    {workOrders.map((row) => (
                      <div key={row.id}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold text-zinc-300">{row.id}</p>
                            <p className="text-sm text-white">{row.item}</p>
                          </div>
                          <span className="text-xs text-zinc-500">{row.progress}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                          <div className="h-full rounded-full bg-white" style={{ width: `${row.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}

          {module === 'procurement' && (
            <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/45">
              <div className="flex flex-col gap-3 border-b border-zinc-800 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">Purchase orders</h2>
                  <p className="mt-1 text-xs text-zinc-500">Approvals, commitments and receipts</p>
                </div>
                <button
                  onClick={approvePO}
                  disabled={poApproved}
                  className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {poApproved ? 'PO-4831 approved' : 'Approve PO-4831'}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead className="bg-zinc-950/60 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                    <tr>
                      <th className="px-5 py-3">PO</th>
                      <th className="px-5 py-3">Supplier</th>
                      <th className="px-5 py-3">Value</th>
                      <th className="px-5 py-3">ETA</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-sm">
                    {purchaseOrders.map((row) => (
                      <tr key={row.id}>
                        <td className="px-5 py-4 font-semibold text-white">{row.id}</td>
                        <td className="px-5 py-4 text-zinc-300">{row.supplier}</td>
                        <td className="px-5 py-4 text-zinc-300">{row.value}</td>
                        <td className="px-5 py-4 text-zinc-500">{row.eta}</td>
                        <td className="px-5 py-4">
                          <Status tone={(row.id === 'PO-4831' && !poApproved) ? 'warning' : row.status === 'Approved' || poApproved ? 'good' : 'neutral'}>
                            {row.id === 'PO-4831' && poApproved ? 'Approved' : row.status}
                          </Status>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {module === 'inventory' && (
            <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/45">
              <div className="flex flex-col gap-3 border-b border-zinc-800 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">Inventory control</h2>
                  <p className="mt-1 text-xs text-zinc-500">On-hand, reserved and reorder signals</p>
                </div>
                <button
                  onClick={receiveStock}
                  disabled={stockReceived}
                  className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {stockReceived ? 'Receipt posted' : 'Receive BEA-108 +40'}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-zinc-950/60 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                    <tr>
                      <th className="px-5 py-3">SKU</th>
                      <th className="px-5 py-3">Item</th>
                      <th className="px-5 py-3">Warehouse</th>
                      <th className="px-5 py-3">On hand</th>
                      <th className="px-5 py-3">Reserved</th>
                      <th className="px-5 py-3">Reorder point</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-sm">
                    {initialInventory.map((row) => {
                      const onHand = row.sku === 'BEA-108' && stockReceived ? row.onHand + 40 : row.onHand;
                      return (
                        <tr key={row.sku}>
                          <td className="px-5 py-4 font-semibold text-white">{row.sku}</td>
                          <td className="px-5 py-4 text-zinc-300">{row.item}</td>
                          <td className="px-5 py-4 text-zinc-500">{row.warehouse}</td>
                          <td className="px-5 py-4">
                            <span className={cn('font-semibold', onHand < row.reorder ? 'text-red-300' : 'text-zinc-200')}>{onHand}</span>
                          </td>
                          <td className="px-5 py-4 text-zinc-400">{row.reserved}</td>
                          <td className="px-5 py-4 text-zinc-500">{row.reorder}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {module === 'manufacturing' && (
            <div className="grid gap-4 xl:grid-cols-3">
              {workOrders.map((row) => (
                <div key={row.id} className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
                  <div className="flex items-center justify-between">
                    <Status>{row.id}</Status>
                    <span className="text-xs text-zinc-500">{row.due}</span>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-white">{row.item}</h2>
                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div className="h-full bg-white" style={{ width: `${row.progress}%` }} />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                    <span>Completion</span>
                    <span>{row.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {module === 'finance' && (
            <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/45">
              <div className="flex flex-col gap-3 border-b border-zinc-800 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">Financial operations</h2>
                  <p className="mt-1 text-xs text-zinc-500">Receivables, payables and operational journals</p>
                </div>
                <button
                  onClick={postJournal}
                  disabled={journalPosted}
                  className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {journalPosted ? 'Journal posted' : 'Post receipt accrual'}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead className="bg-zinc-950/60 text-[10px] uppercase tracking-[0.12em] text-zinc-600">
                    <tr>
                      <th className="px-5 py-3">Reference</th>
                      <th className="px-5 py-3">Party / description</th>
                      <th className="px-5 py-3">Type</th>
                      <th className="px-5 py-3">Value</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-sm">
                    {financeRows.map((row) => (
                      <tr key={row.ref}>
                        <td className="px-5 py-4 font-semibold text-white">{row.ref}</td>
                        <td className="px-5 py-4 text-zinc-300">{row.party}</td>
                        <td className="px-5 py-4 text-zinc-500">{row.kind}</td>
                        <td className="px-5 py-4 text-zinc-300">{row.value}</td>
                        <td className="px-5 py-4"><Status tone={row.status === 'Posted' ? 'good' : row.status.includes('overdue') ? 'danger' : 'neutral'}>{row.status}</Status></td>
                      </tr>
                    ))}
                    {journalPosted && (
                      <tr>
                        <td className="px-5 py-4 font-semibold text-white">JV-3101</td>
                        <td className="px-5 py-4 text-zinc-300">Inventory receipt accrual</td>
                        <td className="px-5 py-4 text-zinc-500">Journal</td>
                        <td className="px-5 py-4 text-zinc-300">$48,600</td>
                        <td className="px-5 py-4"><Status tone="good">Posted</Status></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {module === 'audit' && (
            <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
              <div className="flex items-center gap-3">
                <History className="h-5 w-5 text-zinc-500" />
                <div>
                  <h2 className="text-sm font-semibold text-white">Immutable event timeline</h2>
                  <p className="mt-1 text-xs text-zinc-500">Every simulated command adds an attributable business event.</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="grid gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 sm:grid-cols-[110px_1fr_auto] sm:items-center">
                    <div>
                      <p className="text-[10px] font-semibold text-zinc-600">{event.id}</p>
                      <p className="mt-1 text-xs text-zinc-500">{event.time}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{event.title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{event.detail}</p>
                    </div>
                    <Status>{event.type}</Status>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {modules.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setModule(id)}
                className={cn(
                  'shrink-0 rounded-lg px-3 py-2 text-xs font-medium',
                  module === id ? 'bg-white text-zinc-950' : 'border border-zinc-800 text-zinc-400',
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </main>

        <aside className="hidden min-h-[calc(100vh-129px)] border-l border-zinc-800 bg-black/30 p-5 xl:block">
          <div className="flex items-center gap-2">
            <History className="h-4 w-4 text-zinc-500" />
            <h2 className="text-sm font-semibold text-white">Live event stream</h2>
          </div>
          <p className="mt-1 text-xs leading-5 text-zinc-600">Business actions in the sandbox appear here immediately.</p>

          <div className="mt-5 space-y-3">
            {events.slice(0, 7).map((event) => (
              <div key={event.id} className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-zinc-600">{event.module}</span>
                  <span className="text-[9px] text-zinc-600">{event.time}</span>
                </div>
                <p className="mt-2 text-xs font-medium text-zinc-200">{event.title}</p>
                <p className="mt-1 text-[10px] leading-4 text-zinc-500">{event.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-900/45 p-4">
            <p className="text-xs font-semibold text-white">Try this sequence</p>
            <div className="mt-3 space-y-3 text-xs text-zinc-500">
              {[
                ['1', 'Approve PO-4831 in Procurement'],
                ['2', 'Receive BEA-108 stock in Inventory'],
                ['3', 'Post the receipt accrual in Finance'],
                ['4', 'Open Audit to review the chain'],
              ].map(([step, copy]) => (
                <div key={step} className="flex gap-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-zinc-800 text-[9px] font-semibold text-zinc-300">{step}</span>
                  <span className="leading-5">{copy}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
