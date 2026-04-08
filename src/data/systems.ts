import { System } from '../types';

export const systems: System[] = [
  {
    id: 'erp-systems',
    title: 'ERP Systems',
    description: 'Custom-built Enterprise Resource Planning systems designed for complex manufacturing and supply chain workflows.',
    whyItsHard: 'ERP systems are notoriously difficult because they must synchronize thousands of moving parts—inventory, supply chain, procurement, and production—in real-time while maintaining strict audit trails and data integrity across multi-tenant environments.',
    howWeSolveIt: 'We use event-driven architectures to ensure that every state change is recorded and propagated reliably. Our systems are built with "audit-safe" as a first-class citizen, ensuring that every transaction is traceable and immutable.',
    keyFeatures: [
      'Real-time inventory synchronization',
      'Automated procurement workflows',
      'Multi-tenant data isolation',
      'Immutable audit logging',
      'Complex operational reporting engines'
    ],
    architectureThinking: 'We favor a modular monolith or microservices approach depending on the scale, but always with a central event bus (like Kafka or RabbitMQ) to decouple business domains and ensure eventual consistency where needed.',
    icon: 'Database'
  },
  {
    id: 'hmis-healthcare',
    title: 'HMIS (Healthcare Systems)',
    description: 'Mission-critical Hospital Management & Information Systems for tertiary care and clinical environments.',
    whyItsHard: 'Healthcare systems must balance extreme data sensitivity (HIPAA/GDPR) with the need for high availability in life-critical situations. They often require offline-first capabilities for remote clinics and complex clinical workflows that cannot afford latency or data loss.',
    howWeSolveIt: 'We implement offline-first synchronization using CRDTs (Conflict-free Replicated Data Types) to handle intermittent connectivity. Security is handled via strict backend validation and end-to-end encryption for sensitive patient data.',
    keyFeatures: [
      'EHR/EMR with clinical decision support',
      'Pharmacy and Lab integration',
      'Offline-first mobile clinical tools',
      'HL7/FHIR interoperability',
      'Automated medical billing'
    ],
    architectureThinking: 'Our HMIS architecture prioritizes data integrity and regulatory compliance. We use a "security-first" approach where every API request is validated against a strict schema and user role before any processing occurs.',
    icon: 'Stethoscope'
  },
  {
    id: 'saas-platforms',
    title: 'SaaS Platforms',
    description: 'Scalable, multi-tenant B2B SaaS platforms designed for high-throughput and global availability.',
    whyItsHard: 'Building a SaaS platform that can scale from 10 to 10,000 tenants requires deep thinking about resource isolation, subscription management, and database performance. The complexity lies in managing shared infrastructure while providing a "private" experience for each tenant.',
    howWeSolveIt: 'We build multi-tenant architectures with row-level security or separate schemas depending on the security requirements. Our billing systems are integrated deeply into the core architecture to handle complex subscription models and usage-based pricing.',
    keyFeatures: [
      'Multi-tenant resource isolation',
      'Usage-based billing engines',
      'Advanced RBAC and user management',
      'Elastic cloud infrastructure',
      'White-labeling capabilities'
    ],
    architectureThinking: 'We focus on "elasticity"—the ability for the system to grow and shrink based on demand. This involves using serverless functions for bursty workloads and persistent clusters for core business logic.',
    icon: 'Cloud'
  },
  {
    id: 'research-domain-specific',
    title: 'Research & Domain-Specific Systems',
    description: 'Data-heavy systems for research, simulation, and specialized industrial analytics.',
    whyItsHard: 'Domain-specific systems often involve processing massive amounts of unstructured data or running complex simulations that require high computational power. The challenge is in translating deep domain knowledge into efficient, user-friendly software.',
    howWeSolveIt: 'We work closely with domain experts to understand the underlying mathematics and workflows. We then build custom data processing pipelines and visualization engines that make complex data actionable.',
    keyFeatures: [
      'High-throughput data pipelines',
      'Custom simulation engines',
      'Advanced data visualization',
      'Research workflow automation',
      'Integration with specialized hardware'
    ],
    architectureThinking: 'These systems often require a "polyglot" approach—using the best tool for the job (e.g., Python for data science, Go for high-performance backends, and React for complex dashboards).',
    icon: 'Cpu'
  }
];
