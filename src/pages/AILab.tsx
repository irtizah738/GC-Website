import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BrainCircuit, 
  Workflow, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Database, 
  Stethoscope, 
  Activity,
  Settings,
  BarChart3,
  Search,
  CheckCircle2
} from 'lucide-react';
import Section from '../components/Section';
import { SectionReveal } from '../components/animations/SectionReveal';
import { InteractiveCard } from '../components/animations/InteractiveCard';

export default function AILab() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-zinc-950">
      <Helmet>
        <title>AI Lab | Gotham Coders</title>
        <meta name="description" content="AI as a system-level capability that enhances workflows, reduces errors, and automates decision-making in complex domains." />
      </Helmet>

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Research & Development // System Intelligence
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
            AI That Works <span className="text-zinc-400 italic font-light">Inside</span> Your Systems — Not Outside Them
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
            From ERP to HMIS, we integrate intelligence directly into workflows, 
            reducing manual effort, errors, and decision latency.
          </p>
        </div>
      </Section>

      {/* What AI Actually Does */}
      <Section className="border-b border-zinc-100 dark:border-zinc-900">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Core Philosophy</h2>
              <h3 className="text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">What AI Actually Does</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                We use AI where it matters. It is not used to replace humans blindly. 
                It is used to <span className="text-zinc-900 dark:text-white font-medium">augment decisions and enforce system consistency</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Decision Support', desc: 'Assist users with context-aware recommendations.', icon: BrainCircuit },
                { title: 'Anomaly Detection', desc: 'Identify risks before they escalate.', icon: Search },
                { title: 'Process Automation', desc: 'Eliminate repetitive manual tasks.', icon: Workflow },
                { title: 'Workflow Optimization', desc: 'Improve system efficiency over time.', icon: Zap },
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <item.icon className="w-5 h-5 text-zinc-400" />
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-grid-zinc opacity-10" />
            <div className="relative w-full aspect-square border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center">
              <motion.div 
                className="w-3/4 aspect-square border border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-900 dark:bg-white rounded-full" />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="w-16 h-16 text-zinc-900 dark:text-white" />
              </div>
            </div>
          </div>
        </SectionReveal>
      </Section>

      {/* AI in ERP */}
      <Section variant="muted" className="border-b border-zinc-100 dark:border-zinc-900">
        <SectionReveal className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3 text-zinc-500">
              <Database className="w-5 h-5" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Domain // ERP Systems</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Intelligence in the Supply Chain</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Demand Forecasting',
                input: 'Historical sales, seasonality, trends',
                output: 'Predicted demand',
                action: 'Optimize procurement and production'
              },
              {
                title: 'Inventory Optimization',
                input: 'Stock levels, lead times, consumption',
                output: 'Reorder points',
                action: 'Reduce stockouts and overstocking'
              },
              {
                title: 'Production Intelligence',
                input: 'Machine data, labor, schedules',
                output: 'Bottleneck detection',
                action: 'Recommend scheduling improvements'
              }
            ].map((item) => (
              <InteractiveCard key={item.title} className="p-8 space-y-6">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{item.title}</h4>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-zinc-400">Input</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.input}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-zinc-400">Output</span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.output}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold">Action</span>
                    <p className="text-sm text-zinc-900 dark:text-white font-medium mt-1">{item.action}</p>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </SectionReveal>
      </Section>

      {/* AI in HMIS */}
      <Section className="border-b border-zinc-100 dark:border-zinc-900">
        <SectionReveal className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3 text-zinc-500">
              <Stethoscope className="w-5 h-5" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Domain // Healthcare (G-HIMS)</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Clinical Decision Support</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light">
              All healthcare AI systems are built with <span className="text-zinc-900 dark:text-white font-medium">auditability, explainability, and safety</span> as core requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Clinical Decision Support', desc: 'Assist doctors with diagnosis suggestions and highlight missing data.', icon: Activity },
              { title: 'Risk Detection', desc: 'Detect abnormal vitals and trigger alerts for critical conditions.', icon: ShieldCheck },
              { title: 'Prescription Assistance', desc: 'Flag potential drug interactions and suggest dosage ranges.', icon: Settings },
              { title: 'Patient Flow Optimization', desc: 'Reduce waiting times and improve scheduling efficiency.', icon: BarChart3 },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 space-y-4">
                <item.icon className="w-6 h-6 text-zinc-900 dark:text-white" />
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-widest leading-tight">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Section>

      {/* Automation Layer */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <SectionReveal className="space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">The Power of Integration</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Automation Layer</h3>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              AI becomes powerful when combined with automation. We build automation 
              on top of <span className="text-white font-medium">event-driven systems</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500">ERP Example</span>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs font-mono text-emerald-400">inventory_low</div>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                  <span className="text-sm text-zinc-300">Automation Triggered</span>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Generate purchase order',
                  'Notify procurement team',
                  'Update inventory projections'
                ].map((step) => (
                  <li key={step} className="flex items-center gap-3 text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500">Healthcare Example</span>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs font-mono text-red-400">critical_vitals_detected</div>
                  <ArrowRight className="w-4 h-4 text-zinc-600" />
                  <span className="text-sm text-zinc-300">Automation Triggered</span>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Alert doctor immediately',
                  'Flag patient in system',
                  'Escalate priority'
                ].map((step) => (
                  <li key={step} className="flex items-center gap-3 text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>
      </Section>

      {/* Efficiency Gains */}
      <Section className="border-b border-zinc-100 dark:border-zinc-900">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Efficiency Gains</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              AI + automation leads to measurable improvements in system throughput and operational accuracy.
            </p>
            <div className="space-y-4">
              {[
                '30–50% reduction in manual tasks',
                'Faster decision cycles',
                'Reduced operational errors',
                'Improved system throughput'
              ].map((gain) => (
                <div key={gain} className="flex items-center gap-3 text-zinc-900 dark:text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  {gain}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center space-y-2">
              <span className="text-4xl font-display font-bold text-zinc-900 dark:text-white">30%</span>
              <p className="text-[10px] font-mono uppercase text-zinc-500">Reduction in Stockouts</p>
            </div>
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center space-y-2">
              <span className="text-4xl font-display font-bold text-zinc-900 dark:text-white">20%</span>
              <p className="text-[10px] font-mono uppercase text-zinc-500">Cut in Wait Times</p>
            </div>
            <div className="col-span-2 p-8 bg-zinc-900 dark:bg-white rounded-2xl text-center space-y-2">
              <span className="text-4xl font-display font-bold text-white dark:text-zinc-900">50%</span>
              <p className="text-[10px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Manual Task Automation</p>
            </div>
          </div>
        </SectionReveal>
      </Section>

      {/* Architecture */}
      <Section variant="muted" className="text-center">
        <SectionReveal className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">The System View</h2>
            <h3 className="text-4xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">How It Works</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
            {[
              { label: 'Events', icon: Zap },
              { label: 'Data', icon: Database },
              { label: 'AI Models', icon: BrainCircuit },
              { label: 'Decisions', icon: Settings },
              { label: 'Actions', icon: Workflow },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-100 dark:border-zinc-800">
                    <step.icon className="w-6 h-6 text-zinc-900 dark:text-white" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-zinc-300 rotate-90 md:rotate-0" />
                )}
              </div>
            ))}
          </div>

          <p className="text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto">
            AI is not separate — it is embedded inside the system workflow. 
            Systems generate events, AI processes context, decisions are generated, 
            and actions are executed automatically.
          </p>
        </SectionReveal>
      </Section>

      {/* Final Insight */}
      <Section className="border-b border-zinc-100 dark:border-zinc-900">
        <SectionReveal className="max-w-4xl mx-auto">
          <div className="p-12 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] text-center space-y-6">
            <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Final Insight</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-zinc-400">Most Companies</span>
                <p className="text-lg text-zinc-500 font-light italic">Bolt AI on top</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold">Gotham Coders</span>
                <p className="text-lg text-zinc-900 dark:text-white font-medium">Embed AI into system architecture</p>
              </div>
            </div>
            <p className="text-zinc-500 font-light max-w-xl mx-auto pt-4">
              That’s a completely different level of capability. We don't just add features; we architect intelligence.
            </p>
          </div>
        </SectionReveal>
      </Section>

      {/* Final CTA */}
      <Section variant="dark" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85]">
            Build systems that <span className="text-zinc-400 italic font-light">think, adapt,</span> and improve.
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-zinc-900 rounded-full font-bold text-xl shadow-2xl"
            >
              Discuss Your System
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
