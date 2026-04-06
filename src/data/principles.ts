import { EngineeringPrinciple } from '../types';

export const principles: EngineeringPrinciple[] = [
  {
    id: 'event-driven-architecture',
    title: 'Event-Driven Architecture',
    description: 'We build systems where components communicate via asynchronous events rather than synchronous requests.',
    whyItMatters: 'This decouples business domains, allowing them to scale independently and ensures that state changes are recorded and propagated reliably, even during partial system failures.',
    icon: 'Zap'
  },
  {
    id: 'offline-first-design',
    title: 'Offline-First Design',
    description: 'Our systems are designed to work seamlessly without an internet connection, synchronizing data when connectivity is restored.',
    whyItMatters: 'In healthcare and industrial environments, connectivity is often intermittent. Offline-first ensures that mission-critical workflows are never interrupted by network issues.',
    icon: 'WifiOff'
  },
  {
    id: 'data-integrity-auditability',
    title: 'Data Integrity & Auditability',
    description: 'Every transaction and state change is recorded in an immutable audit log.',
    whyItMatters: 'For ERP and HMIS systems, data integrity is paramount. Auditability ensures regulatory compliance and provides a clear history of every action taken within the system.',
    icon: 'ShieldCheck'
  },
  {
    id: 'multi-tenant-system-design',
    title: 'Multi-Tenant System Design',
    description: 'We design architectures that securely isolate data and resources for multiple organizations on a shared infrastructure.',
    whyItMatters: 'Multi-tenancy allows for efficient resource utilization and easier maintenance while ensuring that each tenant\'s data remains private and secure.',
    icon: 'Users'
  },
  {
    id: 'security-first-backend-validation',
    title: 'Security-First Backend Validation',
    description: 'We implement strict schema validation and role-based access control at the API layer.',
    whyItMatters: 'By validating every request before it reaches the core business logic, we prevent a wide range of security vulnerabilities and ensure that only authorized users can perform sensitive actions.',
    icon: 'Lock'
  }
];
