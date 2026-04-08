import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Database, Stethoscope, Cloud, Cpu } from 'lucide-react';
import Section from '../components/Section';
import { systems } from '../data/systems';
import { Link } from 'react-router-dom';
import { InventoryFlow } from '../components/animations/erp/InventoryFlow';
import { ProductionPipeline } from '../components/animations/erp/ProductionPipeline';
import { PatientLifecycle } from '../components/animations/hims/PatientLifecycle';
import { ClinicalSignals } from '../components/animations/hims/ClinicalSignals';

const iconMap: Record<string, any> = {
  Database,
  Stethoscope,
  Cloud,
  Cpu,
};

export default function SystemsWeBuild() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Systems We Build | Gotham Coders</title>
        <meta name="description" content="We build mission-critical ERP, HMIS, SaaS, and research-driven software systems for complex industries." />
      </Helmet>

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            System Architecture // Capabilities
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
            Engineering for <span className="text-zinc-400 italic font-light">Complexity</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
            We don't build basic websites. We architect mission-critical systems that 
            power hospitals, factories, and global SaaS platforms.
          </p>
        </div>
      </Section>

      {/* Systems List */}
      {systems.map((system, index) => {
        const Icon = iconMap[system.icon];
        return (
          <Section
            key={system.id}
            id={system.id}
            variant={index % 2 === 0 ? 'default' : 'muted'}
            className="border-b border-zinc-100 dark:border-zinc-900 last:border-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white dark:text-zinc-900" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">0{index + 1} // {system.title}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">{system.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {system.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                    <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Why This is Hard
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {system.whyItsHard}
                    </p>
                  </div>
                  <div className="space-y-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                    <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      How We Solve It
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {system.howWeSolveIt}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Key System Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {system.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8 lg:sticky lg:top-32">
                <div className="p-10 bg-zinc-950 border border-zinc-800 text-white rounded-xl space-y-8 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-display font-bold tracking-tight">Architecture Thinking</h4>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    </div>
                  </div>
                  <p className="text-zinc-500 leading-relaxed text-sm font-light">
                    {system.architectureThinking}
                  </p>
                  <div className="pt-8 border-t border-zinc-900 flex items-center justify-between">
                    <Link
                      to="/approach"
                      className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      Engineering Approach <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">SYS_REF_{system.id.toUpperCase()}</span>
                  </div>
                </div>

                {/* Domain Specific Animations */}
                {system.id === 'erp-systems' && (
                  <div className="p-8 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 rounded-xl space-y-8">
                    <div className="space-y-2">
                      <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Inventory Flow Simulation</h5>
                      <InventoryFlow />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Production Pipeline</h5>
                      <ProductionPipeline />
                    </div>
                  </div>
                )}

                {system.id === 'hmis-healthcare' && (
                  <div className="p-8 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 rounded-xl space-y-8">
                    <div className="space-y-2">
                      <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Patient Lifecycle Progression</h5>
                      <PatientLifecycle />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Clinical Workflow Signals</h5>
                      <ClinicalSignals />
                    </div>
                  </div>
                )}
                
                <Link
                  to="/contact"
                  className="w-full py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl font-bold text-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  Discuss Your {system.title}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Section>
        );
      })}

      {/* Final CTA */}
      <Section variant="dark" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85]">
            Need a <span className="text-zinc-400 italic font-light">Mission-Critical</span> System?
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            Our engineering team is ready to architect your next high-complexity platform.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-zinc-900 rounded-full font-bold text-xl hover:scale-[1.05] transition-transform shadow-2xl"
          >
            Discuss Your System
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
