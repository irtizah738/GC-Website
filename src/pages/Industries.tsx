import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Stethoscope, Activity, Trophy, Factory, Microscope } from 'lucide-react';
import Section from '../components/Section';
import { industries } from '../data/industries';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Stethoscope,
  Activity,
  Trophy,
  Factory,
  Microscope,
};

export default function Industries() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Industries | Gotham Coders</title>
        <meta name="description" content="We build mission-critical systems for healthcare, tertiary care, sports, manufacturing, and medical devices." />
      </Helmet>

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Domain Expertise // Verticals
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
            Deep Domain <span className="text-zinc-400 italic font-light">Expertise</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
            We understand the unique constraints and data complexities of high-stakes industries. 
            Our systems are built to handle the most demanding workflows.
          </p>
        </div>
      </Section>

      {/* Industries List */}
      {industries.map((industry, index) => {
        const Icon = iconMap[industry.icon];
        return (
          <Section
            key={industry.id}
            id={industry.id}
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
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">0{index + 1} // {industry.title}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">{industry.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Industry Challenges</h4>
                    <ul className="space-y-3">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <span className="text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Typical Workflows</h4>
                    <ul className="space-y-3">
                      {industry.workflows.map((workflow) => (
                        <li key={workflow} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                          <span className="text-sm">{workflow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:sticky lg:top-32">
                <div className="p-10 bg-zinc-950 border border-zinc-800 text-white rounded-xl space-y-8 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500">Data Complexity</h4>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      </div>
                    </div>
                    <p className="text-zinc-500 leading-relaxed text-sm font-light">
                      {industry.dataComplexity}
                    </p>
                  </div>
                  <div className="space-y-6 pt-8 border-t border-zinc-900">
                    <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500">System Requirements</h4>
                    <ul className="grid grid-cols-1 gap-4">
                      {industry.systemRequirements.map((req) => (
                        <li key={req} className="flex items-center gap-3 text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0" />
                          <span className="text-xs font-medium tracking-tight">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 text-right">
                    <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">IND_REF_{industry.id.toUpperCase()}</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="w-full py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl font-bold text-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  Discuss Your {industry.title} System
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
            Deep Domain <span className="text-zinc-400 italic font-light">Knowledge</span> Matters
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            Let's build a system that truly understands your industry.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-zinc-900 rounded-full font-bold text-xl hover:scale-[1.05] transition-transform shadow-2xl"
          >
            Start Your Industry Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
