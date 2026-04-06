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
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Case Studies</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Proven <span className="text-zinc-500 italic">Systems</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                <div className="flex items-center gap-3 text-zinc-500">
                  <span className="text-xs font-bold uppercase tracking-widest">{study.client}</span>
                  <div className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span className="text-xs font-bold uppercase tracking-widest">{study.industry}</span>
                </div>
                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">{study.title}</h3>
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

              <div className="p-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded-3xl space-y-4">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Outcome
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {study.outcome}
                </p>
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
      <Section variant="dark" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Your System Could Be Next</h2>
          <p className="text-xl text-zinc-400">
            Let's build a system that delivers real business outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-zinc-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform"
          >
            Start Your Case Study
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
