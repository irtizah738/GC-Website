import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Check,
  Factory,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import Section from '../components/Section';
import { industries } from '../data/industries';

const iconMap: Record<string, typeof Stethoscope> = {
  Stethoscope,
  Factory,
  Building2,
  ShieldCheck,
};

export default function Industries() {
  return (
    <div className="pt-16">
      <SEO
        title="Industries & Operational Environments | Gotham Coders"
        description="Gotham Coders designs enterprise systems for healthcare, manufacturing, multi-site organizations, and regulated operational environments."
        pathname="/industries"
      />

      <Section className="border-b border-zinc-800 pb-20 pt-20 md:pt-28" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Operational environments</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Different industries fail in different ways. The architecture should know the difference.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            We focus on environments where workflows cross teams, authority matters, connectivity cannot be assumed, and critical records need a defensible history.
          </p>
        </div>
      </Section>

      {industries.map((industry, index) => {
        const Icon = iconMap[industry.icon] ?? ShieldCheck;
        return (
          <Section
            key={industry.id}
            id={industry.id}
            className="border-b border-zinc-800"
            variant={index % 2 ? 'muted' : 'default'}
          >
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                  <Icon className="h-5 w-5 text-zinc-300" />
                </div>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">
                  Environment {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
                  {industry.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-400">{industry.dataComplexity}</p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
                >
                  Discuss this environment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Operational pressure</p>
                    <div className="mt-5 space-y-4">
                      {industry.challenges.map((challenge) => (
                        <div key={challenge} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                          <p className="text-sm leading-6 text-zinc-300">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Connected workflows</p>
                    <div className="mt-5 space-y-4">
                      {industry.workflows.map((workflow) => (
                        <div key={workflow} className="flex gap-3">
                          <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-zinc-600" />
                          <p className="text-sm leading-6 text-zinc-300">{workflow}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Architecture implications</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {industry.systemRequirements.map((requirement) => (
                      <div key={requirement} className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                        <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
                          <Check className="h-3 w-3" />
                        </div>
                        <p className="text-sm leading-6 text-zinc-300">{requirement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
          Start with the operational constraints, then choose the architecture.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          We would rather understand where your workflows break, who has authority, and what must survive failure than begin with a predetermined stack.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Map your workflow with us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </div>
  );
}
