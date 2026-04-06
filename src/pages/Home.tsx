import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, ShieldCheck, Zap } from 'lucide-react';
import Section from '../components/Section';
import { services } from '../data/services';
import { caseStudies } from '../data/case-studies';
import { cn } from '../lib/utils';

const techStack = [
  { name: 'React / Next.js', icon: Globe },
  { name: 'Node.js / Go / Python', icon: Cpu },
  { name: 'PostgreSQL / MongoDB', icon: Database },
  { name: 'AWS / Azure / GCP', icon: Zap },
  { name: 'Docker / Kubernetes', icon: ShieldCheck },
];

export default function Home() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Gotham Coders | Premium Software Engineering Firm</title>
        <meta name="description" content="Gotham Coders specializes in custom enterprise software, healthcare systems, and scalable backend architectures. Engineering excellence for modern organizations." />
        <meta property="og:title" content="Gotham Coders | Premium Software Engineering Firm" />
        <meta property="og:description" content="High-performance, scalable software solutions for healthcare, logistics, and global SaaS platforms." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <Section className="relative min-h-[85vh] flex items-center" animate={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Engineering Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Architecting the <span className="text-zinc-500">Future</span> of Enterprise Systems
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              We build high-performance, mission-critical software for healthcare, 
              logistics, and global SaaS platforms. No fluff, just pure engineering.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
              >
                View Case Studies
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">100+</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500">Projects Delivered</p>
              </div>
              <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800" />
              <div className="space-y-1">
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">15+</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800" />
              <div className="space-y-1">
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">99.9%</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500">System Uptime</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-3xl -z-10" />
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 border-b border-zinc-200 dark:border-zinc-700 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  gotham-coders-architecture.ts
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-blue-500">import</div> <span className="text-zinc-600 dark:text-zinc-400">{"{ Scalability, Security }"}</span> <div className="text-blue-500 inline">from</div> <span className="text-green-600">"@gotham/core"</span>;
                <br /><br />
                <div className="text-purple-500">interface</div> <span className="text-yellow-600">EnterpriseSystem</span> {"{"}
                <div className="pl-4">
                  uptime: <span className="text-orange-500">99.99</span>;
                  <br />
                  latency: <span className="text-orange-500">"&lt; 50ms"</span>;
                  <br />
                  security: <span className="text-yellow-600">HIPAA_Compliant</span>;
                </div>
                {"}"}
                <br /><br />
                <div className="text-purple-500">class</div> <span className="text-yellow-600">GothamEngine</span> <div className="text-blue-500 inline">implements</div> <span className="text-yellow-600">Scalability</span> {"{"}
                <div className="pl-4">
                  <div className="text-blue-500">async</div> <span className="text-blue-400">deploy</span>() {"{"}
                  <div className="pl-4">
                    <span className="text-zinc-500">// Optimized for high-throughput</span>
                    <br />
                    <div className="text-blue-500 inline">await</div> <span className="text-blue-400">this</span>.provisionInfrastructure();
                    <br />
                    <div className="text-blue-500 inline">return</div> <span className="text-blue-400">this</span>.launch();
                  </div>
                  {"}"}
                </div>
                {"}"}
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest">Security Audit</p>
                  <p className="text-[10px] text-zinc-500">Passed 100%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">Engineering Solutions for Scale</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-900 hover:border-zinc-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-zinc-900 dark:text-white" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Case Studies */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">Proven Performance</h3>
          </div>
          <Link
            to="/case-studies"
            className="text-zinc-900 dark:text-white font-bold flex items-center gap-2 group"
          >
            All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.slice(0, 2).map((study) => (
            <Link
              key={study.id}
              to={`/case-studies#${study.id}`}
              className="group block space-y-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{study.client}</span>
                  <div className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{study.techStack[0]}</span>
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {study.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {study.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Tech Stack Highlights */}
      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400">Our Stack</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Built with Modern, Reliable Technology</h3>
            <p className="text-zinc-400 leading-relaxed">
              We leverage the best-in-class tools to ensure your system is fast, 
              secure, and ready for the future.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-6 bg-zinc-800/50 border border-zinc-700 rounded-2xl space-y-4 hover:bg-zinc-800 transition-colors"
              >
                <tech.icon className="w-8 h-8 text-zinc-300" />
                <p className="font-bold text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
            Ready to Build Something <span className="text-zinc-500 italic">Exceptional?</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Let's discuss your project and how our engineering team can help you scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-2xl font-bold text-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
