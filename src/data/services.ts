import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'High-performance, scalable software solutions tailored to your unique business requirements.',
    problem: 'Off-the-shelf software often fails to address specific operational bottlenecks, leading to inefficiencies and technical debt.',
    solution: 'We build bespoke software from the ground up, using modern architectures that scale with your business.',
    outcome: 'Streamlined operations, reduced manual overhead, and a competitive advantage through proprietary technology.',
    capabilities: [
      'Full-stack web and mobile applications',
      'Cloud-native development',
      'API design and integration',
      'Legacy system modernization',
      'Performance optimization'
    ],
    useCases: [
      'ERP systems for manufacturing',
      'Custom CRM for specialized sales workflows',
      'Internal automation tools'
    ],
    icon: 'Code2'
  },
  {
    id: 'healthcare-systems',
    title: 'Healthcare Systems',
    description: 'HIPAA-compliant, mission-critical healthcare applications for modern medical organizations.',
    problem: 'Healthcare providers struggle with fragmented data, insecure systems, and poor user experiences for clinical staff.',
    solution: 'We develop secure, interoperable EHR/EMR systems, billing platforms, and clinical workflow tools.',
    outcome: 'Improved patient outcomes, enhanced data security, and reduced administrative burden for clinicians.',
    capabilities: [
      'HIPAA & GDPR compliance',
      'HL7/FHIR interoperability',
      'Medical billing and claims processing',
      'Patient portals and telemedicine',
      'Clinical decision support systems'
    ],
    useCases: [
      'Multi-clinic EMR integration',
      'Real-time patient monitoring dashboards',
      'Automated medical coding systems'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'saas-platforms',
    title: 'SaaS Platforms',
    description: 'Multi-tenant, scalable SaaS architectures designed for growth and reliability.',
    problem: 'Scaling a SaaS product requires more than just features; it needs a robust multi-tenant architecture and efficient resource management.',
    solution: 'We build SaaS platforms with multi-tenancy, subscription management, and elastic scaling at their core.',
    outcome: 'A market-ready platform capable of handling thousands of tenants with minimal operational overhead.',
    capabilities: [
      'Multi-tenant database architectures',
      'Subscription and billing integration (Stripe/Chargebee)',
      'User management and RBAC',
      'Elastic cloud infrastructure',
      'Analytics and reporting engines'
    ],
    useCases: [
      'B2B project management tools',
      'Specialized e-commerce platforms',
      'Data analytics as a service'
    ],
    icon: 'Cloud'
  },
  {
    id: 'system-architecture',
    title: 'System Architecture Consulting',
    description: 'Expert guidance on building resilient, event-driven, and scalable backend systems.',
    problem: 'Poor architectural choices early on can lead to "big ball of mud" systems that are impossible to maintain or scale.',
    solution: 'Our senior architects design event-driven, microservices-based, or modular monolith systems that are built to last.',
    outcome: 'A clear technical roadmap, reduced technical debt, and a system that can handle extreme loads.',
    capabilities: [
      'Event-driven architecture design',
      'Microservices vs. Monolith strategy',
      'Database schema optimization',
      'Infrastructure as Code (IaC)',
      'Security and scalability audits'
    ],
    useCases: [
      'High-throughput financial transaction systems',
      'Real-time data processing pipelines',
      'Global-scale content delivery architectures'
    ],
    icon: 'Layout'
  }
];
