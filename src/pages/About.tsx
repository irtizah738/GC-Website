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
  { name: 'Irtiza Haider', role: 'Founder & CEO', image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1749992405/IMG-20230106-WA0013_lixkqr.jpg' },
  { name: 'Areeba Batool', role: 'Head of Engineering', image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1775505240/areeba_lkhbqh.png' },
  { name: 'Ufaq Waqas', role: 'MBBS, Pharm D', image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1750199539/download_lckqja.png' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Our Story // Mission
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.9] tracking-tighter">
            Built by <span className="text-zinc-400 italic font-light">Engineers</span> for Modern Enterprises
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-light">
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
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">Our Mission</h3>
              <p className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white leading-tight tracking-tight">
                To empower organizations through resilient, scalable, and secure software architecture.
              </p>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              We believe that the best software is built on a foundation of clear architecture, 
              robust security, and a deep understanding of the business problem. Our team 
              consists of senior engineers and architects who have built systems for 
              global financial institutions, healthcare providers, and high-growth startups.
            </p>
            <div className="space-y-6">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">Our Philosophy</h3>
              <ul className="space-y-4">
                {[
                  'No technical debt by design',
                  'Security as a first-class citizen',
                  'Scalability is not an afterthought',
                  'Clear, maintainable, and documented code'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-900 dark:text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-white dark:text-zinc-900" />
                    </div>
                    <span className="text-sm tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=1500"
              alt="Gotham Coders Office"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zinc-900/10" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">Our Values</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-white tracking-tighter">What Drives Us</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-white dark:bg-zinc-950 p-10 rounded-xl border border-zinc-200 dark:border-zinc-900 space-y-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-white dark:text-zinc-900" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">{value.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">Leadership</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-white tracking-tighter">Expert Engineering Team</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member) => (
            <div key={member.name} className="space-y-6 group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-sm text-center">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">{member.name}</h4>
                <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.2em]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="dark" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85]">
            Ready to <span className="text-zinc-400 italic font-light">Partner</span> with Us?
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
            Let's build the future of your organization together.
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
