import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'meditech-hmis',
    title: 'Modernizing a Legacy HMIS for a Multi-Clinic Network',
    client: 'MediTech Solutions',
    industry: 'Healthcare & Hospitals',
    problemContext: 'A 15-year-old Electronic Health Record system was causing frequent downtime, slow performance, and clinical errors due to its monolithic, on-premise architecture.',
    systemComplexity: 'The system needed to synchronize patient records across 20+ clinics with intermittent connectivity, while maintaining strict HIPAA compliance and sub-second latency for clinical documentation.',
    architectureDecisions: 'We moved to a microservices architecture with a React-based frontend and a Node.js/PostgreSQL backend. We implemented an event-driven synchronization layer using Kafka to handle clinic-to-cloud data propagation.',
    tradeoffs: 'We chose eventual consistency for non-critical patient data to ensure high availability, while using distributed locking for critical clinical orders to prevent data corruption.',
    outcome: 'Reduced patient check-in times by 40% and eliminated system downtime during peak clinical hours. The system now handles 50k+ patient records with 99.99% uptime.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Kafka', 'Docker', 'Terraform'],
    imageUrl: 'https://picsum.photos/seed/meditech/1200/800'
  },
  {
    id: 'finflow-erp',
    title: 'Building an Audit-Safe ERP for Financial Automation',
    client: 'FinFlow Inc.',
    industry: 'Manufacturing & Supply Chain',
    problemContext: 'FinFlow needed a platform that could handle complex financial workflows, integrate with multiple ERPs, and scale to thousands of tenants while being fully audit-safe.',
    systemComplexity: 'The system required multi-tenant data isolation, real-time inventory synchronization across global warehouses, and an immutable audit log for every financial transaction.',
    architectureDecisions: 'We implemented a multi-tenant database strategy with row-level security and a central event bus for reliable message processing. Every state change is recorded in a ledger-style audit log.',
    tradeoffs: 'We prioritized data integrity over write performance for financial transactions, using synchronous database writes with strict validation at the API layer.',
    outcome: 'Successfully launched and scaled to 500+ corporate clients within the first year, processing over $1B in transactions with zero data integrity issues.',
    techStack: ['Next.js', 'Go', 'Kafka', 'MongoDB', 'Redis', 'Kubernetes'],
    imageUrl: 'https://picsum.photos/seed/finflow/1200/800'
  },
  {
    id: 'logistix-supply-chain',
    title: 'Custom Supply Chain System for Global Logistics',
    client: 'LogistiX Global',
    industry: 'Manufacturing & Supply Chain',
    problemContext: 'Manual tracking and fragmented data across different regions led to significant shipment delays and inventory inaccuracies in a global supply chain.',
    systemComplexity: 'The system needed to track shipments in real-time across multiple time zones, optimize warehouse inventory, and provide offline-capable tools for warehouse staff.',
    architectureDecisions: 'We built a modular monolith with a real-time event bus for global data synchronization and an offline-first mobile app for warehouse staff using CRDTs for conflict resolution.',
    tradeoffs: 'We used a hybrid cloud/edge architecture to ensure that warehouse operations could continue even during internet outages, with data syncing back to the cloud when connectivity was restored.',
    outcome: 'Improved inventory accuracy to 99.8% and reduced average shipment delays by 25% through real-time route optimization and automated tracking.',
    techStack: ['React', 'Python', 'PostgreSQL', 'Redis', 'WebSockets', 'React Native'],
    imageUrl: 'https://picsum.photos/seed/logistix/1200/800'
  }
];
