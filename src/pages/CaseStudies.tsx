import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Section from '../components/Section';
import { caseStudies } from '../data/case-studies';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Case Studies | Gotham Coders</title>
        <meta name="description" content="Explore our portfolio of mission-critical systems, including ERP, HMIS, and custom enterprise platforms." />
      </Helmet>

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Portfolio // Case Studies
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
            Proven <span className="text-zinc-400 italic font-light">Systems</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
            Detailed breakdowns of how we architected and delivered mission-critical 
            platforms for our clients.
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
                <div className="flex items-center gap-4 text-zinc-500">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">{study.client}</span>
                  <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">{study.industry}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">{study.title}</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Problem Context</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {study.problemContext}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">System Complexity</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {study.systemComplexity}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Architecture Decisions
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {study.architectureDecisions}
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    Trade-offs
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {study.tradeoffs}
                  </p>
                </div>
              </div>

              <div className="p-10 bg-zinc-950 border border-zinc-800 text-white rounded-xl space-y-8 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-display font-bold tracking-tight flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    System Outcome
                  </h4>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  </div>
                </div>
                <p className="text-zinc-500 leading-relaxed text-sm font-light">
                  {study.outcome}
                </p>
                <div className="pt-8 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">Project Validated</span>
                  <span className="text-[10px] font-mono text-zinc-800 uppercase tracking-widest">CASE_REF_{study.id.toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-center hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                Discuss a Similar Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Section>
      ))}

      {/* Final CTA */}
      <Section variant="dark" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85]">
            Your System Could <span className="text-zinc-400 italic font-light">Be Next</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            Let's build a system that delivers real business outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-zinc-900 rounded-full font-bold text-xl hover:scale-[1.05] transition-transform shadow-2xl"
          >
            Start Your Case Study
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
