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
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Industries Served</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Deep Domain <span className="text-zinc-500 italic">Expertise</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">0{index + 1} / {industry.title}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">{industry.title}</h3>
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
                <div className="p-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded-3xl space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Data Complexity</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {industry.dataComplexity}
                    </p>
                  </div>
                  <div className="space-y-4 pt-6 border-t border-zinc-700">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">System Requirements</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {industry.systemRequirements.map((req) => (
                        <li key={req} className="flex items-center gap-3 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
                          <span className="text-xs font-medium">{req}</span>
                        </li>
                      ))}
                    </ul>
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
      <Section variant="dark" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Deep Domain Knowledge Matters</h2>
          <p className="text-xl text-zinc-400">
            Let's build a system that truly understands your industry.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-zinc-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform"
          >
            Start Your Industry Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
