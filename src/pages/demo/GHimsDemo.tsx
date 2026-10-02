import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Banknote,
  Bed,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  CreditCard,
  FileText,
  FlaskConical,
  HeartPulse,
  History,
  Pill,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { cn } from '../../lib/utils';

type Role = 'doctor' | 'nurse' | 'diagnostics' | 'pharmacy' | 'billing';
type Module = 'overview' | 'queue' | 'encounter' | 'diagnostics' | 'pharmacy' | 'billing' | 'audit';

type ClinicalEvent = {
  id: string;
  module: Module;
  type: string;
  title: string;
  detail: string;
  time: string;
};

const roleLabels: Record<Role, string> = {
  doctor: 'Doctor',
  nurse: 'Nurse / Triage',
  diagnostics: 'Diagnostics',
  pharmacy: 'Pharmacy',
  billing: 'Billing',
};

const modules: Array<{ id: Module; label: string; icon: typeof Activity }> = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'queue', label: 'OPD Queue', icon: UsersRound },
  { id: 'encounter', label: 'Encounter', icon: Stethoscope },
  { id: 'diagnostics', label: 'Diagnostics', icon: FlaskConical },
  { id: 'pharmacy', label: 'Pharmacy', icon: Pill },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'audit', label: 'Audit', icon: ShieldCheck },
];

const initialEvents: ClinicalEvent[] = [
  {
    id: 'EVT-2207',
    module: 'encounter',
    type: 'encounter.started',
    title: 'Consultation started',
    detail: 'OPD-24017 • Dr. Sana Rahman',
    time: '10:12',
  },
  {
    id: 'EVT-2206',
    module: 'queue',
    type: 'patient.checked_in',
    title: 'Patient checked into OPD queue',
    detail: 'MRN-10284 • Ayesha Malik',
    time: '10:05',
  },
  {
    id: 'EVT-2205',
    module: 'billing',
    type: 'consultation.paid',
    title: 'Consultation payment received',
    detail: 'RCPT-8821 • PKR 2,500',
    time: '09:58',
  },
  {
    id: 'EVT-2204',
    module: 'overview',
    type: 'patient.registered',
    title: 'Patient identity registered',
    detail: 'MRN-10284 • Ayesha Malik',
    time: '09:53',
  },
];

const queueRows = [
  { token: 'A-17', patient: 'Ayesha Malik', mrn: 'MRN-10284', stage: 'With doctor', wait: '18m' },
  { token: 'A-18', patient: 'Hamza Ali', mrn: 'MRN-10921', stage: 'Vitals pending', wait: '11m' },
  { token: 'A-19', patient: 'Maryam Noor', mrn: 'MRN-10462', stage: 'Waiting', wait: '7m' },
  { token: 'A-20', patient: 'Usman Tariq', mrn: 'MRN-11208', stage: 'Waiting', wait: '3m' },
];

function Badge({
  children,
  tone = 'neutral',
}: {
  children: string;
  tone?: 'neutral' | 'good' | 'warning' | 'danger' | 'info';
}) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-2 py-1 text-[10px] font-semibold',
        tone === 'good' && 'bg-emerald-500/10 text-emerald-400',
        tone === 'warning' && 'bg-amber-500/10 text-amber-300',
        tone === 'danger' && 'bg-red-500/10 text-red-300',
        tone === 'info' && 'bg-blue-500/10 text-blue-300',
        tone === 'neutral' && 'bg-zinc-800 text-zinc-300',
      )}
    >
      {children}
    </span>
  );
}

export default function GHimsDemo() {
  const [role, setRole] = useState<Role>('doctor');
  const [module, setModule] = useState<Module>('overview');
  const [events, setEvents] = useState<ClinicalEvent[]>(initialEvents);
  const [vitalsRecorded, setVitalsRecorded] = useState(false);
  const [labOrdered, setLabOrdered] = useState(false);
  const [labPaid, setLabPaid] = useState(false);
  const [sampleCollected, setSampleCollected] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [medPrescribed, setMedPrescribed] = useState(false);
  const [medDispensed, setMedDispensed] = useState(false);
  const [pharmacyPaid, setPharmacyPaid] = useState(false);

  const roleContext = useMemo(() => {
    if (role === 'doctor') return 'Clinical documentation, orders, medication, and encounter context';
    if (role === 'nurse') return 'Queue progression, vitals, triage, and handoff readiness';
    if (role === 'diagnostics') return 'Paid orders, sample state, processing, and result readiness';
    if (role === 'pharmacy') return 'Medication fulfillment, stock-facing actions, and dispense state';
    return 'Consultation, diagnostics, pharmacy charges, receipts, and outstanding balances';
  }, [role]);

  const pushEvent = (event: Omit<ClinicalEvent, 'id' | 'time'>) => {
    const now = new Date();
    setEvents((current) => [
      {
        ...event,
        id: `EVT-${2210 + current.length}`,
        time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      ...current,
    ]);
  };

  const recordVitals = () => {
    if (vitalsRecorded) return;
    setVitalsRecorded(true);
    pushEvent({
      module: 'queue',
      type: 'vitals.recorded',
      title: 'Pre-consultation vitals recorded',
      detail: 'BP 126/82 • HR 78 • Temp 36.8°C',
    });
  };

  const orderLab = () => {
    if (labOrdered) return;
    setLabOrdered(true);
    pushEvent({
      module: 'encounter',
      type: 'diagnostic.ordered',
      title: 'CBC ordered',
      detail: 'Order LAB-4092 • Payment required before collection',
    });
  };

  const payLab = () => {
    if (!labOrdered || labPaid) return;
    setLabPaid(true);
    pushEvent({
      module: 'billing',
      type: 'diagnostic.paid',
      title: 'Diagnostic payment received',
      detail: 'LAB-4092 released to diagnostics • PKR 1,800',
    });
  };

  const collectSample = () => {
    if (!labPaid || sampleCollected) return;
    setSampleCollected(true);
    pushEvent({
      module: 'diagnostics',
      type: 'sample.collected',
      title: 'CBC sample collected',
      detail: 'LAB-4092 • Barcode specimen linked to encounter',
    });
  };

  const markResult = () => {
    if (!sampleCollected || resultReady) return;
    setResultReady(true);
    pushEvent({
      module: 'diagnostics',
      type: 'result.ready',
      title: 'CBC result marked ready',
      detail: 'LAB-4092 • Result available to encounter',
    });
  };

  const prescribeMedication = () => {
    if (medPrescribed) return;
    setMedPrescribed(true);
    pushEvent({
      module: 'encounter',
      type: 'medication.prescribed',
      title: 'Medication prescribed',
      detail: 'Paracetamol 500 mg • PRN • 10 tablets',
    });
  };

  const dispenseMedication = () => {
    if (!medPrescribed || medDispensed) return;
    setMedDispensed(true);
    pushEvent({
      module: 'pharmacy',
      type: 'medication.dispensed',
      title: 'Medication dispensed',
      detail: 'Paracetamol 500 mg • 10 tablets • Billing due generated',
    });
  };

  const payPharmacy = () => {
    if (!medDispensed || pharmacyPaid) return;
    setPharmacyPaid(true);
    pushEvent({
      module: 'billing',
      type: 'pharmacy.paid',
      title: 'Pharmacy payment received',
      detail: 'RX-5812 • PKR 420 • Balance settled',
    });
  };

  const diagnosticStage = !labOrdered
    ? 'Not ordered'
    : !labPaid
      ? 'Payment required'
      : !sampleCollected
        ? 'Ready for collection'
        : !resultReady
          ? 'Processing'
          : 'Result ready';

  const pharmacyStage = !medPrescribed
    ? 'No prescription'
    : !medDispensed
      ? 'Ready to dispense'
      : !pharmacyPaid
        ? 'Billing due'
        : 'Completed';

  return (
    <div className="min-h-screen bg-zinc-950 pt-16 text-zinc-100">
      <SEO
        title="G-HIMS Interactive Demo | Gotham Coders"
        description="Explore a synthetic browser-based G-HIMS workflow across OPD, diagnostics, pharmacy, billing, and audit."
        pathname="/demo/g-hims"
      />

      <div className="border-b border-zinc-800 bg-black/40">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-white text-[10px] font-bold text-zinc-950">GC</div>
              G-HIMS Clinical Operations Sandbox
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              Synthetic patient data. Browser-only workflow simulation. Not clinical decision support or a production deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300">
              Gotham General Hospital
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="relative">
              <select
                value={role}
                onChange={(event) => setRole(event.target.value as Role)}
                className="appearance-none rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-3 pr-8 text-xs font-medium text-zinc-200 outline-none"
                aria-label="Switch hospital role"
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
          <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">Clinical workspace</p>
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
            <p className="mt-2 text-xs leading-5 text-zinc-500">{roleContext}</p>
          </div>
        </aside>

        <main className="min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">G-HIMS / {module}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                {module === 'overview' ? 'OPD operations overview' : modules.find((item) => item.id === module)?.label}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{roleContext}</p>
            </div>

            <button className="inline-flex items-center gap-2 self-start rounded-lg border border-zinc-800 px-3 py-2 text-xs font-medium text-zinc-300">
              <Search className="h-3.5 w-3.5" />
              Search patient
            </button>
          </div>

          {module === 'overview' && (
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ['OPD queue', '12', '4 waiting'],
                  ['Consultations', '28', 'today'],
                  ['Diagnostics pending', labOrdered && !resultReady ? '1' : '0', diagnosticStage],
                  ['Billing due', medDispensed && !pharmacyPaid ? '1' : '0', medDispensed ? pharmacyStage : 'No pharmacy due'],
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
                      <h2 className="text-sm font-semibold text-white">Active patient journey</h2>
                      <p className="mt-1 text-xs text-zinc-500">Ayesha Malik • MRN-10284 • OPD-24017</p>
                    </div>
                    <Badge tone="info">In consultation</Badge>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      ['Registration', 'Completed', 'good'],
                      ['Consultation payment', 'Completed', 'good'],
                      ['Vitals', vitalsRecorded ? 'Recorded' : 'Pending', vitalsRecorded ? 'good' : 'warning'],
                      ['Consultation', 'In progress', 'info'],
                      ['Diagnostics', diagnosticStage, resultReady ? 'good' : labOrdered ? 'warning' : 'neutral'],
                      ['Pharmacy', pharmacyStage, pharmacyPaid ? 'good' : medPrescribed ? 'warning' : 'neutral'],
                    ].map(([label, status, tone]) => (
                      <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                        <p className="text-xs text-zinc-500">{label}</p>
                        <div className="mt-3"><Badge tone={tone as 'neutral' | 'good' | 'warning' | 'info'}>{status}</Badge></div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
                  <p className="text-sm font-semibold text-white">Patient snapshot</p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-zinc-800 text-zinc-400">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Ayesha Malik</p>
                      <p className="text-xs text-zinc-500">34Y • Female • MRN-10284</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-zinc-950 p-3">
                      <p className="text-[10px] text-zinc-600">Allergies</p>
                      <p className="mt-1 text-xs font-medium text-zinc-300">NKDA</p>
                    </div>
                    <div className="rounded-lg bg-zinc-950 p-3">
                      <p className="text-[10px] text-zinc-600">Encounter</p>
                      <p className="mt-1 text-xs font-medium text-zinc-300">OPD-24017</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {module === 'queue' && (
            <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/45">
              <div className="flex flex-col gap-3 border-b border-zinc-800 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">Live OPD queue</h2>
                  <p className="mt-1 text-xs text-zinc-500">Check-in, vitals readiness, consultation handoff</p>
                </div>
                <button
                  onClick={recordVitals}
                  disabled={vitalsRecorded}
                  className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {vitalsRecorded ? 'Vitals recorded' : 'Record vitals for A-17'}
                </button>
              </div>
              <div className="divide-y divide-zinc-800">
                {queueRows.map((row) => (
                  <div key={row.token} className="grid gap-3 px-5 py-4 sm:grid-cols-[70px_1fr_140px_80px] sm:items-center">
                    <span className="text-sm font-semibold text-white">{row.token}</span>
                    <div>
                      <p className="text-sm text-zinc-200">{row.patient}</p>
                      <p className="text-xs text-zinc-600">{row.mrn}</p>
                    </div>
                    <Badge tone={row.stage === 'With doctor' ? 'info' : row.stage === 'Vitals pending' ? 'warning' : 'neutral'}>{row.stage}</Badge>
                    <span className="text-xs text-zinc-500">{row.wait}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {module === 'encounter' && (
            <div className="grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
              <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-white">OPD encounter</h2>
                    <p className="mt-1 text-xs text-zinc-500">OPD-24017 • Dr. Sana Rahman</p>
                  </div>
                  <Badge tone="info">Open</Badge>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600">Chief complaint</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">Fever, body aches, and fatigue for two days.</p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600">Vitals</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      {vitalsRecorded ? 'BP 126/82 • HR 78 • Temp 36.8°C • SpO₂ 98%' : 'Pre-consultation vitals have not been recorded in this simulation.'}
                    </p>
                  </div>
                  {resultReady && (
                    <div className="rounded-xl border border-emerald-900/50 bg-emerald-950/15 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400">Diagnostic result available</p>
                      <p className="mt-2 text-sm text-zinc-300">CBC result is ready for review. Synthetic demo values omitted.</p>
                    </div>
                  )}
                </div>
              </section>

              <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
                <h2 className="text-sm font-semibold text-white">Encounter actions</h2>
                <p className="mt-1 text-xs text-zinc-500">Actions create connected operational events.</p>
                <div className="mt-5 space-y-3">
                  <button
                    onClick={orderLab}
                    disabled={labOrdered}
                    className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left disabled:opacity-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">Order CBC</p>
                      <p className="mt-1 text-xs text-zinc-500">Creates billing requirement before collection</p>
                    </div>
                    <FlaskConical className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    onClick={prescribeMedication}
                    disabled={medPrescribed}
                    className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left disabled:opacity-50"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">Prescribe medication</p>
                      <p className="mt-1 text-xs text-zinc-500">Creates pharmacy fulfillment work</p>
                    </div>
                    <Pill className="h-4 w-4 text-zinc-500" />
                  </button>
                </div>
              </section>
            </div>
          )}

          {module === 'diagnostics' && (
            <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">Diagnostic order LAB-4092</h2>
                  <p className="mt-1 text-xs text-zinc-500">CBC • OPD-24017 • Ayesha Malik</p>
                </div>
                <Badge tone={resultReady ? 'good' : labPaid ? 'info' : labOrdered ? 'warning' : 'neutral'}>{diagnosticStage}</Badge>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-4">
                {[
                  ['Ordered', labOrdered, 'Doctor'],
                  ['Paid', labPaid, 'Billing'],
                  ['Sample collected', sampleCollected, 'Diagnostics'],
                  ['Result ready', resultReady, 'Diagnostics'],
                ].map(([label, done, owner]) => (
                  <div key={label as string} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <div className={cn('grid h-7 w-7 place-items-center rounded-full', done ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-900 text-zinc-700')}>
                      {done ? <CheckCircle2 className="h-4 w-4" /> : <Clock3 className="h-4 w-4" />}
                    </div>
                    <p className="mt-4 text-sm font-medium text-white">{label as string}</p>
                    <p className="mt-1 text-xs text-zinc-600">{owner as string}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  onClick={collectSample}
                  disabled={!labPaid || sampleCollected}
                  className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Collect sample
                </button>
                <button
                  onClick={markResult}
                  disabled={!sampleCollected || resultReady}
                  className="rounded-lg border border-zinc-700 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Mark result ready
                </button>
                {!labPaid && labOrdered && (
                  <span className="self-center text-xs text-amber-300">Billing must settle the diagnostic charge first.</span>
                )}
              </div>
            </section>
          )}

          {module === 'pharmacy' && (
            <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">Medication fulfillment</h2>
                  <p className="mt-1 text-xs text-zinc-500">RX-5812 • Paracetamol 500 mg • 10 tablets</p>
                </div>
                <Badge tone={pharmacyPaid ? 'good' : medDispensed ? 'warning' : medPrescribed ? 'info' : 'neutral'}>{pharmacyStage}</Badge>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ['Prescription', medPrescribed ? 'Received' : 'Not prescribed', Stethoscope],
                  ['Dispense', medDispensed ? 'Completed' : medPrescribed ? 'Pending' : 'Blocked', Pill],
                  ['Payment', pharmacyPaid ? 'Settled' : medDispensed ? 'Due' : 'Not generated', Banknote],
                ].map(([label, status, Icon]) => {
                  const TypedIcon = Icon as typeof Pill;
                  return (
                    <div key={label as string} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                      <TypedIcon className="h-4 w-4 text-zinc-500" />
                      <p className="mt-4 text-xs text-zinc-600">{label as string}</p>
                      <p className="mt-1 text-sm font-medium text-white">{status as string}</p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={dispenseMedication}
                disabled={!medPrescribed || medDispensed}
                className="mt-5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Dispense medication
              </button>
            </section>
          )}

          {module === 'billing' && (
            <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/45">
              <div className="border-b border-zinc-800 p-5">
                <h2 className="text-sm font-semibold text-white">Encounter billing</h2>
                <p className="mt-1 text-xs text-zinc-500">OPD-24017 • Cash workflow simulation</p>
              </div>

              <div className="divide-y divide-zinc-800">
                <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_130px_140px] sm:items-center">
                  <div>
                    <p className="text-sm font-medium text-white">OPD consultation</p>
                    <p className="text-xs text-zinc-600">Paid before entering OPD queue</p>
                  </div>
                  <span className="text-sm text-zinc-300">PKR 2,500</span>
                  <Badge tone="good">Paid</Badge>
                </div>

                {labOrdered && (
                  <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_130px_140px] sm:items-center">
                    <div>
                      <p className="text-sm font-medium text-white">CBC</p>
                      <p className="text-xs text-zinc-600">Required before diagnostics collection</p>
                    </div>
                    <span className="text-sm text-zinc-300">PKR 1,800</span>
                    <div>
                      {labPaid ? (
                        <Badge tone="good">Paid</Badge>
                      ) : (
                        <button onClick={payLab} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950">
                          Collect payment
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {medDispensed && (
                  <div className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_130px_140px] sm:items-center">
                    <div>
                      <p className="text-sm font-medium text-white">Pharmacy dispense RX-5812</p>
                      <p className="text-xs text-zinc-600">Charge generated after pharmacy fulfillment</p>
                    </div>
                    <span className="text-sm text-zinc-300">PKR 420</span>
                    <div>
                      {pharmacyPaid ? (
                        <Badge tone="good">Paid</Badge>
                      ) : (
                        <button onClick={payPharmacy} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-zinc-950">
                          Collect payment
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {module === 'audit' && (
            <section className="rounded-xl border border-zinc-800 bg-zinc-900/45 p-5">
              <div className="flex items-center gap-3">
                <History className="h-5 w-5 text-zinc-500" />
                <div>
                  <h2 className="text-sm font-semibold text-white">Encounter event history</h2>
                  <p className="mt-1 text-xs text-zinc-500">Synthetic events generated by the actions in this browser session.</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="grid gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 sm:grid-cols-[110px_1fr_auto] sm:items-center">
                    <div>
                      <p className="text-[10px] font-semibold text-zinc-600">{event.id}</p>
                      <p className="mt-1 text-xs text-zinc-500">{event.time}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{event.title}</p>
                      <p className="mt-1 text-xs text-zinc-500">{event.detail}</p>
                    </div>
                    <Badge>{event.type}</Badge>
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
            <h2 className="text-sm font-semibold text-white">Live clinical events</h2>
          </div>
          <p className="mt-1 text-xs leading-5 text-zinc-600">
            Actions in the sandbox update this synthetic event stream immediately.
          </p>

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
            <p className="text-xs font-semibold text-white">Try the connected flow</p>
            <div className="mt-3 space-y-3 text-xs text-zinc-500">
              {[
                ['1', 'Record vitals from OPD Queue'],
                ['2', 'Order CBC from Encounter'],
                ['3', 'Pay CBC in Billing'],
                ['4', 'Collect sample and release result'],
                ['5', 'Prescribe and dispense medication'],
                ['6', 'Settle pharmacy payment and inspect Audit'],
              ].map(([step, copy]) => (
                <div key={step} className="flex gap-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-zinc-800 text-[9px] font-semibold text-zinc-300">{step}</span>
                  <span className="leading-5">{copy}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-amber-900/40 bg-amber-950/10 p-4">
            <p className="text-xs font-semibold text-amber-300">Simulation boundary</p>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              This page demonstrates workflow relationships only. It does not validate clinical safety, prescribing rules, billing policy, or production integrations.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
