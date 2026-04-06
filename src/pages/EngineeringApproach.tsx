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
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Engineering Approach</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Built for <span className="text-zinc-500 italic">Resilience</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">0{index + 1} / {principle.title}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">{principle.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>

              <div className="space-y-8 lg:sticky lg:top-32">
                <div className="p-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded-3xl space-y-6">
                  <h4 className="text-xl font-bold">Why It Matters</h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {principle.whyItMatters}
                  </p>
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
      <Section variant="dark" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Architecture is Not an Afterthought</h2>
          <p className="text-xl text-zinc-400">
            Let's build a system that is resilient, scalable, and built to last.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-zinc-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform"
          >
            Start a Technical Discussion
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
