import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, WifiOff, ShieldCheck, Users, Lock } from 'lucide-react';
import Section from '../components/Section';
import { principles } from '../data/principles';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Zap,
  WifiOff,
  ShieldCheck,
  Users,
  Lock,
};

export default function EngineeringApproach() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Engineering Approach | Gotham Coders</title>
        <meta name="description" content="Our engineering approach focuses on event-driven architecture, offline-first design, data integrity, and security-first validation." />
      </Helmet>

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Engineering Philosophy // Resilience
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
            Built for <span className="text-zinc-400 italic font-light">Resilience</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
            We don't just write code. We architect systems that are built to survive 
            the complexities of the real world.
          </p>
        </div>
      </Section>

      {/* Principles List */}
      {principles.map((principle, index) => {
        const Icon = iconMap[principle.icon];
        return (
          <Section
            key={principle.id}
            id={principle.id}
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
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">0{index + 1} // {principle.title}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">{principle.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              </div>

              <div className="space-y-8 lg:sticky lg:top-32">
                <div className="p-10 bg-zinc-950 border border-zinc-800 text-white rounded-xl space-y-8 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-display font-bold tracking-tight">Why It Matters</h4>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    </div>
                  </div>
                  <p className="text-zinc-500 leading-relaxed text-sm font-light">
                    {principle.whyItMatters}
                  </p>
                  <div className="pt-8 border-t border-zinc-900 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Critical Requirement</span>
                    <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">PRIN_REF_{principle.id.toUpperCase()}</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="w-full py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl font-bold text-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  Discuss Your System Architecture
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
            Architecture is Not an <span className="text-zinc-400 italic font-light">Afterthought</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            Let's build a system that is resilient, scalable, and built to last.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-zinc-900 rounded-full font-bold text-xl hover:scale-[1.05] transition-transform shadow-2xl"
          >
            Start a Technical Discussion
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
