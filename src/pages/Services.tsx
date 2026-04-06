import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Services | Gotham Coders</title>
        <meta name="description" content="Custom software development, healthcare systems, SaaS platforms, and system architecture consulting." />
      </Helmet>
      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Services</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Engineering <span className="text-zinc-500">Solutions</span> for Modern Problems
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We specialize in building mission-critical software for healthcare, 
            logistics, and global SaaS platforms. Our approach is engineering-first, 
            focusing on scalability, security, and performance.
          </p>
        </div>
      </Section>

      {/* Services List */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          variant={index % 2 === 0 ? 'default' : 'muted'}
          className="border-b border-zinc-100 dark:border-zinc-900 last:border-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">0{index + 1} / {service.title}</div>
                <h3 className="text-4xl font-bold text-zinc-900 dark:text-white">{service.title}</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    The Problem
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {service.problem}
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    The Solution
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {service.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Capabilities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0" />
                      <span className="text-sm">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="p-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded-3xl space-y-6">
                <h4 className="text-xl font-bold">Outcome</h4>
                <p className="text-zinc-400 leading-relaxed">
                  {service.outcome}
                </p>
                <div className="pt-6 border-t border-zinc-700 space-y-4">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Real-World Use Cases</h5>
                  <ul className="space-y-3">
                    {service.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="w-full py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl font-bold text-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                Start a {service.title} Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Section>
      ))}

      {/* Final CTA */}
      <Section variant="dark" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Need a Custom Solution?</h2>
          <p className="text-xl text-zinc-400">
            Our engineering team is ready to tackle your most complex challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-zinc-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform"
          >
            Schedule a Technical Consultation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
