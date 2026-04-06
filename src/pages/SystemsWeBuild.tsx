import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Database, Stethoscope, Cloud, Cpu } from 'lucide-react';
import Section from '../components/Section';
import { systems } from '../data/systems';
import { Link } from 'react-router-dom';

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
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Systems We Build</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Engineering for <span className="text-zinc-500 italic">Complexity</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">0{index + 1} / {system.title}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">{system.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                <div className="p-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded-3xl space-y-6">
                  <h4 className="text-xl font-bold">Architecture Thinking</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {system.architectureThinking}
                  </p>
                  <div className="pt-6 border-t border-zinc-700">
                    <Link
                      to="/approach"
                      className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                      View Our Engineering Approach <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
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
      <Section variant="dark" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Need a Mission-Critical System?</h2>
          <p className="text-xl text-zinc-400">
            Our engineering team is ready to architect your next high-complexity platform.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-zinc-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform"
          >
            Discuss Your System
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
