import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, ShieldCheck, Zap } from 'lucide-react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Engineering First',
    description: 'We prioritize technical excellence and long-term scalability over short-term shortcuts.',
    icon: Cpu
  },
  {
    title: 'Outcome-Driven',
    description: 'Our success is measured by the real-world impact and ROI we deliver for our clients.',
    icon: Zap
  },
  {
    title: 'Security-Centric',
    description: 'We build security into every layer of the architecture, from data storage to user access.',
    icon: ShieldCheck
  },
  {
    title: 'Transparent Collaboration',
    description: 'We work as an extension of your team, providing full visibility into our process and progress.',
    icon: Globe
  }
];

const team = [
  { name: 'Alex Rivers', role: 'Founder & CEO', image: 'https://picsum.photos/seed/alex/400/400' },
  { name: 'Sarah Chen', role: 'CTO', image: 'https://picsum.photos/seed/sarah/400/400' },
  { name: 'Marcus Thorne', role: 'Head of Engineering', image: 'https://picsum.photos/seed/marcus/400/400' },
  { name: 'Elena Vance', role: 'Principal Architect', image: 'https://picsum.photos/seed/elena/400/400' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">About Us</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Built by <span className="text-zinc-500 italic">Engineers</span> for Modern Enterprises
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Gotham Coders was founded with a single mission: to provide the highest level 
            of technical expertise for companies building mission-critical systems.
          </p>
        </div>
      </Section>

      {/* Mission & Philosophy */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Our Mission</h3>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                To empower organizations through resilient, scalable, and secure software architecture.
              </p>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We believe that the best software is built on a foundation of clear architecture, 
              robust security, and a deep understanding of the business problem. Our team 
              consists of senior engineers and architects who have built systems for 
              global financial institutions, healthcare providers, and high-growth startups.
            </p>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Our Philosophy</h3>
              <ul className="space-y-4">
                {[
                  'No technical debt by design',
                  'Security as a first-class citizen',
                  'Scalability is not an afterthought',
                  'Clear, maintainable, and documented code'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-900 dark:text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-zinc-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <img
              src="https://picsum.photos/seed/office/1200/1500"
              alt="Gotham Coders Office"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zinc-900/10" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Our Values</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">What Drives Us</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-900 space-y-6"
            >
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center">
                <value.icon className="w-6 h-6 text-zinc-900 dark:text-white" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{value.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Leadership</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">Expert Engineering Team</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="space-y-4 group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{member.name}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="dark" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Partner with Us?</h2>
          <p className="text-xl text-zinc-400">
            Let's build the future of your organization together.
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
