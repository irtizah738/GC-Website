import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, ShieldCheck, Zap, Stethoscope, Cloud, Activity, WifiOff } from 'lucide-react';
import Section from '../components/Section';
import { systems } from '../data/systems';
import { industries } from '../data/industries';
import { caseStudies } from '../data/case-studies';
import { principles } from '../data/principles';
import { AnimatedBackground } from '../components/animations/AnimatedBackground';
import { DataFlowLayer } from '../components/animations/DataFlowLayer';
import { NodeNetwork } from '../components/animations/NodeNetwork';
import { SectionReveal } from '../components/animations/SectionReveal';
import { InteractiveCard } from '../components/animations/InteractiveCard';
import { ERPAnimation, HMISAnimation, SaaSAnimation } from '../components/animations/SystemAnimations';

const iconMap: Record<string, any> = {
  Database,
  Stethoscope,
  Cloud,
  Cpu,
  Activity,
  Zap,
  ShieldCheck,
  Globe,
  WifiOff,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export default function Home() {
  return (
    <div className="pt-20 relative">
      <Helmet>
        <title>Gotham Coders | Mission-Critical Systems Engineering</title>
        <meta name="description" content="We build mission-critical software systems for complex industries. Specializing in ERP, HMIS, SaaS, and research-driven platforms." />
      </Helmet>

      {/* Hero Section */}
      <Section className="relative min-h-[90vh] flex items-center pt-0" animate={false}>
        <DataFlowLayer />
        <NodeNetwork />
        <div className="absolute inset-0 bg-grid-zinc bg-grid-fade opacity-50 -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <SectionReveal delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Systems Engineering Firm // v1.1.7
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
                We build <span className="text-zinc-400 italic font-light">mission-critical</span> systems.
              </h1>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
                Specializing in high-complexity domains: ERP, HMIS, SaaS, and 
                research-driven platforms. Built for resilience, scale, and data integrity.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  Discuss Your System
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/systems"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
                >
                  Systems We Build
                </Link>
              </div>
            </SectionReveal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block [perspective:1000px]"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-3xl -z-10" />
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border-b border-zinc-200 dark:border-zinc-700 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </div>
                <div className="mx-auto text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  system-architecture.yaml
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-zinc-500"
                ># Event-Driven Core</motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="text-blue-500">architecture</span>: <span className="text-green-600">distributed</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <span className="text-blue-500">persistence</span>: <span className="text-green-600">event-sourcing</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="text-blue-500">multi_tenancy</span>: <span className="text-green-600">schema-isolated</span>
                </motion.div>
                <br />
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-blue-500">domains</span>:
                </motion.div>
                <div className="pl-4">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>- <span className="text-yellow-600">Healthcare</span> (HMIS)</motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>- <span className="text-yellow-600">Finance</span> (ERP)</motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>- <span className="text-yellow-600">Research</span> (Data-Heavy)</motion.div>
                </div>
                <br />
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9 }}
                >
                  <span className="text-blue-500">constraints</span>:
                </motion.div>
                <div className="pl-4">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>- <span className="text-orange-500">offline_first: true</span></motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>- <span className="text-orange-500">audit_safe: true</span></motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>- <span className="text-orange-500">strict_validation: true</span></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Systems We Build Overview */}
      <Section variant="muted" className="relative">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4 mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-zinc-500">Systems We Build</motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Engineering for <span className="italic font-light">High-Complexity</span></motion.h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((system, idx) => {
            const Icon = iconMap[system.icon];
            return (
              <SectionReveal key={system.id} delay={idx * 0.1}>
                <InteractiveCard className="group relative h-full block p-8 overflow-hidden">
                  {system.id === 'erp' && <ERPAnimation />}
                  {system.id === 'hmis' && <HMISAnimation />}
                  {system.id === 'saas' && <SaaSAnimation />}
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon className="w-24 h-24 -mr-8 -mt-8 rotate-12" />
                  </div>
                  <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg relative z-10">
                    <Icon className="w-6 h-6 text-white dark:text-zinc-900" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-zinc-900 dark:text-white mb-3 tracking-tight relative z-10">{system.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 font-light relative z-10">
                    {system.description}
                  </p>
                  <Link 
                    to={`/systems#${system.id}`}
                    className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform relative z-10"
                  >
                    System Specs <ArrowRight className="w-3 h-3" />
                  </Link>
                </InteractiveCard>
              </SectionReveal>
            );
          })}
        </div>
      </Section>

      {/* Industries Served */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <SectionReveal direction="right" className="lg:col-span-1 space-y-6 lg:sticky lg:top-32">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Industries</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">Deep Domain Understanding</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              We understand the unique constraints and data complexities of high-stakes industries.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:underline"
            >
              All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {industries.map((industry, idx) => (
              <SectionReveal key={industry.id} delay={idx * 0.1} direction="up">
                <InteractiveCard className="p-8 space-y-4">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{industry.title}</h4>
                  <ul className="space-y-2">
                    {industry.challenges.slice(0, 2).map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                        <div className="w-1 h-1 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </InteractiveCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Product Demos Section */}
      <Section id="demos" variant="muted" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <SectionReveal className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-zinc-500">Live Proof of Capability</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Interactive <span className="italic font-light">Demos</span></h3>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SectionReveal delay={0.1}>
            <InteractiveCard className="group relative p-10 h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-zinc-900 dark:bg-zinc-100 rounded-xl flex items-center justify-center shadow-lg">
                  <Database className="w-7 h-7 text-white dark:text-zinc-900" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">GC-ERP // Manufacturing</span>
              </div>
              <h4 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-4">Manufacturing ERP</h4>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8 font-light leading-relaxed">
                Experience our event-driven inventory management system. Track stock movements, 
                allocate resources, and watch the real-time audit trail evolve.
              </p>
              <Link
                to="/demo/gc-erp"
                className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-sm hover:scale-[1.05] transition-transform"
              >
                Launch ERP Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </InteractiveCard>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <InteractiveCard className="group relative p-10 h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">G-HIMS // Healthcare</span>
              </div>
              <h4 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-4">Clinical Workflow</h4>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8 font-light leading-relaxed">
                Explore our healthcare information system. Manage patient encounters, 
                record diagnoses, and handle prescriptions with clinical integrity.
              </p>
              <Link
                to="/demo/g-hims"
                className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-sm hover:scale-[1.05] transition-transform"
              >
                Launch HIMS Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </InteractiveCard>
          </SectionReveal>
        </div>
      </Section>

      {/* Engineering Principles */}
      <Section variant="dark" className="relative">
        <div className="absolute inset-0 bg-grid-zinc opacity-5 -z-10" />
        <SectionReveal className="text-center space-y-4 mb-20">
          <h2 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-zinc-500">Engineering Approach</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight">Built for <span className="italic font-light text-zinc-400">Resilience</span></h3>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.slice(0, 3).map((principle, idx) => {
            const Icon = iconMap[principle.icon];
            return (
              <SectionReveal key={principle.id} delay={idx * 0.1}>
                <InteractiveCard className="p-10 bg-zinc-950 border border-zinc-800 rounded-xl space-y-8 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                    <Icon className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-display font-bold tracking-tight">{principle.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      {principle.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="h-px flex-1 bg-zinc-800" />
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">0{idx + 1}</span>
                  </div>
                </InteractiveCard>
              </SectionReveal>
            );
          })}
        </div>
        <SectionReveal delay={0.5} className="mt-12 text-center">
          <Link
            to="/approach"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
          >
            Our Full Engineering Approach <ArrowRight className="w-4 h-4" />
          </Link>
        </SectionReveal>
      </Section>

      {/* Featured Case Studies */}
      <Section className="relative">
        <div className="absolute inset-0 bg-grid-zinc opacity-5 -z-10" />
        <SectionReveal className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-zinc-500">Case Studies</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">Proven <span className="italic font-light">Systems</span></h3>
          </div>
          <Link
            to="/case-studies"
            className="text-zinc-900 dark:text-white font-bold flex items-center gap-2 group border-b-2 border-zinc-900 dark:border-white pb-1"
          >
            All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </SectionReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {caseStudies.slice(0, 2).map((study, idx) => (
            <SectionReveal key={study.id} delay={idx * 0.2}>
              <Link
                to={`/case-studies#${study.id}`}
                className="group block space-y-8"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-2xl">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">Impact Analysis</p>
                      <p className="text-sm font-medium text-zinc-900 dark:text-white line-clamp-1">{study.outcome}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">{study.client}</span>
                    <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">{study.industry}</span>
                  </div>
                  <h4 className="text-3xl font-display font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors tracking-tight">
                    {study.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2 text-base font-light leading-relaxed">
                    {study.problemContext}
                  </p>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <SectionReveal className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-display font-bold text-zinc-900 dark:text-white leading-[0.85] tracking-tighter">
            Ready to Build a <span className="text-zinc-400 italic font-light">Resilient</span> System?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss your system requirements and how our engineering team can help you scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-12 py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-xl hover:scale-[1.05] transition-transform flex items-center justify-center gap-3 shadow-2xl"
            >
              Discuss Your System
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </SectionReveal>
      </Section>
    </div>
  );
}
