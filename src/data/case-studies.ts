import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'meditech-ehr',
    title: 'Modernizing a Legacy EHR for a Multi-Clinic Network',
    client: 'MediTech Solutions',
    description: 'A complete overhaul of a 15-year-old Electronic Health Record system, moving to a cloud-native, HIPAA-compliant architecture.',
    problem: 'The client faced frequent downtime, slow performance, and a UI that clinicians found difficult to use, leading to errors and burnout.',
    architecture: 'Microservices architecture with a React-based frontend and a Node.js/PostgreSQL backend, hosted on AWS with strict VPC isolation.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Terraform'],
    outcome: 'The new system reduced patient check-in times by 40% and eliminated system downtime during peak clinical hours.',
    metrics: [
      { label: 'Check-in Time Reduction', value: '40%' },
      { label: 'Uptime Improvement', value: '99.99%' },
      { label: 'Clinician Satisfaction', value: '+65%' }
    ],
    imageUrl: 'https://picsum.photos/seed/meditech/1200/800'
  },
  {
    id: 'finflow-saas',
    title: 'Building a Scalable B2B SaaS for Financial Automation',
    client: 'FinFlow Inc.',
    description: 'Developed a multi-tenant platform for automated accounts payable and receivable processing for mid-market companies.',
    problem: 'FinFlow needed a platform that could handle complex financial workflows, integrate with multiple ERPs, and scale to thousands of tenants.',
    architecture: 'Event-driven architecture using Kafka for reliable message processing and a multi-tenant database strategy for data isolation.',
    techStack: ['Next.js', 'Go', 'Kafka', 'MongoDB', 'Redis', 'Kubernetes'],
    outcome: 'Successfully launched and scaled to 500+ corporate clients within the first year, processing over $1B in transactions.',
    metrics: [
      { label: 'Transactions Processed', value: '$1B+' },
      { label: 'Active Tenants', value: '500+' },
      { label: 'Onboarding Time', value: '-75%' }
    ],
    imageUrl: 'https://picsum.photos/seed/finflow/1200/800'
  },
  {
    id: 'logistix-erp',
    title: 'Custom ERP for Global Logistics and Supply Chain',
    client: 'LogistiX Global',
    description: 'A real-time ERP system for tracking shipments, managing warehouse inventory, and optimizing route planning.',
    problem: 'Manual tracking and fragmented data across different regions led to significant shipment delays and inventory inaccuracies.',
    architecture: 'Modular monolith with a real-time event bus for global data synchronization and an offline-first mobile app for warehouse staff.',
    techStack: ['React', 'Python', 'PostgreSQL', 'Redis', 'WebSockets', 'React Native'],
    outcome: 'Improved inventory accuracy to 99.8% and reduced average shipment delays by 25% through real-time route optimization.',
    metrics: [
      { label: 'Inventory Accuracy', value: '99.8%' },
      { label: 'Delay Reduction', value: '25%' },
      { label: 'Operational Savings', value: '$2M/yr' }
    ],
    imageUrl: 'https://picsum.photos/seed/logistix/1200/800'
  }
];
