import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Cpu, Database, Globe, ShieldCheck, Zap } from 'lucide-react';
import Section from '../components/Section';
import { SectionReveal } from '../components/animations/SectionReveal';
import { InteractiveCard } from '../components/animations/InteractiveCard';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
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
  { 
    name: 'Irtiza Haider', 
    role: 'Founder & CEO', 
    image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1749992405/IMG-20230106-WA0013_lixkqr.jpg',
    bio: 'Digital Research and Strategy Expert, ERP designer & developer. Inventor of G-HIMS and G-ERP. Background: Nuxt/Node.js/AI Expert'
  },
  { 
    name: 'Areeba Batool', 
    role: 'Head Of Engineering', 
    image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1775505240/areeba_lkhbqh.png',
    bio: 'Data Engineering — ETL, automated pipelines, AI/ML, data processing. Background: LLM dataset processing. Data Engineer in scraping, backend, and dataset automation.'
  },
  { 
    name: 'Ufaq Waqas', 
    role: 'Chief Medical Officer', 
    image: 'https://res.cloudinary.com/dzeiyvngc/image/upload/v1750199539/download_lckqja.png',
    bio: 'Director, Govt. Gynae Hospital. Operational lead for G-HIMS pilot deployment and clinical workflow design. Background: MBBS — University of Health Sciences. Pharm D — University of Lahore.'
  },
];

export default function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="About Us | Gotham Coders"
        description="Learn about Gotham Coders' mission to build resilient, scalable, and secure software architecture for modern enterprises."
        pathname="/about"
      />

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <Text variant="caption">Our Story // Mission</Text>
          <Heading level={1}>
            Built by <span className="text-zinc-400 italic font-light">Engineers</span> for Modern Enterprises
          </Heading>
          <Text className="text-xl">
            Gotham Coders was founded with a single mission: to provide the highest level 
            of technical expertise for companies building mission-critical systems.
          </Text>
        </div>
      </Section>

      {/* Mission & Philosophy */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Text variant="caption">Our Mission</Text>
              <Heading level={2}>
                To empower organizations through resilient, scalable, and secure software architecture.
              </Heading>
            </div>
            <Text className="text-lg">
              We believe that the best software is built on a foundation of clear architecture, 
              robust security, and a deep understanding of the business problem. Our team 
              consists of senior engineers and architects who have built systems for 
              global enterprises, healthcare providers, and high-growth startups.
            </Text>
            <div className="space-y-6">
              <Text variant="caption">Our Philosophy</Text>
              <ul className="space-y-4">
                {[
                  'No technical debt by design',
                  'Security as a first-class citizen',
                  'Scalability is not an afterthought',
                  'Clear, maintainable, and documented code'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-white dark:text-zinc-900" />
                    </div>
                    <Text variant="small" className="text-zinc-900 dark:text-white font-medium">{item}</Text>
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
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-zinc-900/10" />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section variant="muted" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <div className="text-center space-y-4 mb-20">
          <Text variant="caption">Our Values</Text>
          <Heading level={2}>What Drives Us</Heading>
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
                <Heading level={3}>{value.title}</Heading>
                <Text variant="small">
                  {value.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="border-b border-zinc-100 dark:border-zinc-900">
        <SectionReveal className="space-y-16">
          <div className="text-center space-y-4">
            <Text variant="caption">Our Leadership</Text>
            <Heading level={2}>The Engineering Mindset</Heading>
            <Text className="text-lg max-w-2xl mx-auto">
              Our team is composed of systems architects and engineers who thrive on complexity.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <InteractiveCard key={member.name} className="p-8 space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-xl">
                  <img 
                    src={member.image} 
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-2">
                  <Heading level={4}>{member.name}</Heading>
                  <Text variant="caption" className="text-emerald-500">{member.role}</Text>
                </div>
                <Text variant="small">{member.bio}</Text>
              </InteractiveCard>
            ))}
          </div>
        </SectionReveal>
      </Section>

      {/* Final CTA */}
      <Section variant="dark" className="text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-10 -z-10" />
        <div className="max-w-4xl mx-auto space-y-12">
          <Heading level={1}>
            Ready to <span className="text-zinc-400 italic font-light">Partner</span> with Us?
          </Heading>
          <Text className="text-xl max-w-2xl mx-auto">
            Let's build the future of your organization together.
          </Text>
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
