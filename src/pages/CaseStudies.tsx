import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, ShieldCheck, Zap } from 'lucide-react';
import Section from '../components/Section';
import { caseStudies } from '../data/case-studies';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Case Studies</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Proven <span className="text-zinc-500 italic">Impact</span> Across Industries
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            From healthcare to logistics, we've built systems that scale and 
            deliver measurable results for our clients.
          </p>
        </div>
      </Section>

      {/* Case Studies List */}
      {caseStudies.map((study, index) => (
        <Section
          key={study.id}
          id={study.id}
          variant={index % 2 === 0 ? 'default' : 'muted'}
          className="border-b border-zinc-100 dark:border-zinc-900 last:border-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">{study.client}</div>
                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">{study.title}</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">The Challenge</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {study.problem}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">The Architecture</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {study.architecture}
                </p>
                <div className="flex flex-wrap gap-3">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-bold text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded-3xl space-y-8">
                <h4 className="text-xl font-bold">The Outcome</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {study.outcome}
                </p>
                
                {study.metrics && (
                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-700">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="space-y-1">
                        <p className="text-3xl font-bold text-white tracking-tight">{metric.value}</p>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Final CTA */}
      <Section variant="dark" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Have a Similar Challenge?</h2>
          <p className="text-xl text-zinc-400">
            Let's discuss how we can apply our expertise to your unique project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-zinc-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform"
          >
            Start Your Success Story
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
