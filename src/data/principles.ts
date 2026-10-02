import { EngineeringPrinciple } from '../types';

export const principles: EngineeringPrinciple[] = [
  {
    id: 'event-driven-architecture',
    title: 'Event-Driven Where History Matters',
    description: 'We use business events to preserve meaningful state transitions and decouple downstream consequences from the command that caused them.',
    whyItMatters: 'ERP and healthcare workflows often need to explain not only the current state, but how the system arrived there. Events provide a durable boundary for projections, integrations, replay, and audit.',
    icon: 'Zap'
  },
  {
    id: 'offline-first-design',
    title: 'Offline-First Where Downtime Is Normal',
    description: 'Workflows that must continue without reliable connectivity are designed around local durability, explicit synchronization, retries, and reconciliation.',
    whyItMatters: 'Offline support is not a service worker checkbox. It changes command identity, conflict handling, device trust, retry semantics, and the user experience around pending work.',
    icon: 'WifiOff'
  },
  {
    id: 'data-integrity-auditability',
    title: 'Data Integrity Before Convenience',
    description: 'Critical changes are validated, attributable, and designed so historical evidence is not silently overwritten.',
    whyItMatters: 'Operational systems become dangerous when a convenient update destroys provenance. Auditability improves recovery, reconciliation, accountability, and the ability to explain system behavior.',
    icon: 'ShieldCheck'
  },
  {
    id: 'multi-tenant-system-design',
    title: 'Tenant Isolation Is a Trust Boundary',
    description: 'Tenant, site, department, and role context are enforced as part of authorization and data access rather than inferred from the visible screen.',
    whyItMatters: 'A multi-tenant system must assume a hostile or misconfigured client. The backend must independently prove which organization and authority context applies to each sensitive command.',
    icon: 'Users'
  },
  {
    id: 'security-first-backend-validation',
    title: 'Commands Fail Closed at Trusted Boundaries',
    description: 'Schemas, permissions, credentials, invariants, and idempotency are enforced before business state changes.',
    whyItMatters: 'Frontend validation improves usability but cannot establish authority. Server-side command handling is where security, integrity, duplicate prevention, and domain invariants must converge.',
    icon: 'Lock'
  }
];
