import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Stethoscope, Activity, Trophy, Factory, Microscope } from 'lucide-react';
import Section from '../components/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
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
          <Text variant="caption">Domain Expertise // Verticals</Text>
          <Heading level={1}>
            Deep Domain <span className="text-zinc-400 italic font-light">Expertise</span>
          </Heading>
          <Text className="text-xl">
            We understand the unique constraints and data complexities of high-stakes industries. 
            Our systems are built to handle the most demanding workflows.
          </Text>
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
                    <Text variant="caption">0{index + 1} // {industry.title}</Text>
                  </div>
                  <Heading level={2}>{industry.title}</Heading>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Text variant="caption">Industry Challenges</Text>
                    <ul className="space-y-3">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                          <Text variant="small">{challenge}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <Text variant="caption">Typical Workflows</Text>
                    <ul className="space-y-3">
                      {industry.workflows.map((workflow) => (
                        <li key={workflow} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                          <Text variant="small">{workflow}</Text>
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
                      <Text variant="caption">Data Complexity</Text>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      </div>
                    </div>
                    <Text variant="small">
                      {industry.dataComplexity}
                    </Text>
                  </div>
                  <div className="space-y-6 pt-8 border-t border-zinc-900">
                    <Text variant="caption">System Requirements</Text>
                    <ul className="grid grid-cols-1 gap-4">
                      {industry.systemRequirements.map((req) => (
                        <li key={req} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-zinc-600 shrink-0" />
                          <Text variant="small" className="font-medium tracking-tight">{req}</Text>
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
          <Heading level={1}>
            Deep Domain <span className="text-zinc-400 italic font-light">Knowledge</span> Matters
          </Heading>
          <Text className="text-xl max-w-2xl mx-auto">
            Let's build a system that truly understands your industry.
          </Text>
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
