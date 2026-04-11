import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Database, Stethoscope, Cloud, Cpu } from 'lucide-react';
import Section from '../components/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
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
      <SEO 
        title="Systems We Build | Gotham Coders"
        description="Custom ERP systems, HMIS healthcare platforms, SaaS applications, and research systems. Built with event-driven architecture for scale and resilience."
        pathname="/systems"
      />

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <Text variant="caption">System Architecture // Capabilities</Text>
          <Heading level={1}>
            Engineering for <span className="text-zinc-400 italic font-light">Complexity</span>
          </Heading>
          <Text className="text-xl">
            We don't build basic websites. We architect mission-critical systems that 
            power hospitals, factories, and global SaaS platforms.
          </Text>
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
                    <Text variant="caption">0{index + 1} // {system.title}</Text>
                  </div>
                  <Heading level={2}>{system.title}</Heading>
                  <Text className="text-lg">
                    {system.description}
                  </Text>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl group/card hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-5 group-hover/card:opacity-10 transition-opacity">
                      <Icon className="w-12 h-12" />
                    </div>
                    <Heading level={4} className="flex items-center gap-2 font-mono font-bold uppercase tracking-widest text-[10px] text-zinc-500 dark:text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                      Why This is Hard
                    </Heading>
                    <Text variant="small" className="leading-relaxed">
                      {system.whyItsHard}
                    </Text>
                  </div>
                  <div className="space-y-4 p-6 bg-zinc-900 text-white border border-zinc-800 rounded-2xl group/card hover:border-zinc-700 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-zinc opacity-5 group-hover/card:opacity-10 transition-opacity" />
                    <Heading level={4} className="flex items-center gap-2 font-mono font-bold uppercase tracking-widest text-[10px] text-emerald-500 relative z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                      How We Solve It
                    </Heading>
                    <Text variant="small" className="leading-relaxed text-zinc-300 relative z-10">
                      {system.howWeSolveIt}
                    </Text>
                  </div>
                </div>

                <div className="space-y-4">
                  <Text variant="caption">Key System Features</Text>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {system.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                        <Text variant="small">{feature}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8 lg:sticky lg:top-32">
                <div className="p-10 bg-zinc-950 border border-zinc-800 text-white rounded-xl space-y-8 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between">
                    <Heading level={3}>Architecture Thinking</Heading>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    </div>
                  </div>
                  <Text variant="small">
                    {system.architectureThinking}
                  </Text>
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
                      <Text variant="caption" className="text-zinc-400">Inventory Flow Simulation</Text>
                      <InventoryFlow />
                    </div>
                    <div className="space-y-2">
                      <Text variant="caption" className="text-zinc-400">Production Pipeline</Text>
                      <ProductionPipeline />
                    </div>
                  </div>
                )}

                {system.id === 'hmis-healthcare' && (
                  <div className="p-8 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 rounded-xl space-y-8">
                    <div className="space-y-2">
                      <Text variant="caption" className="text-zinc-400">Patient Lifecycle Progression</Text>
                      <PatientLifecycle />
                    </div>
                    <div className="space-y-2">
                      <Text variant="caption" className="text-zinc-400">Clinical Workflow Signals</Text>
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
          <Heading level={1}>
            Need a <span className="text-zinc-400 italic font-light">Mission-Critical</span> System?
          </Heading>
          <Text className="text-xl max-w-2xl mx-auto">
            Our engineering team is ready to architect your next high-complexity platform.
          </Text>
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
