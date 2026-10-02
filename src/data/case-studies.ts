import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'gc-erp-product-study',
    title: 'Designing a Connected ERP Workflow Across Operations and Finance',
    client: 'Gotham Coders Product R&D',
    industry: 'Manufacturing & Enterprise Operations',
    problemContext: 'ERP credibility depends on more than isolated dashboards. A single business transaction needs to remain understandable as it crosses procurement, inventory, production, finance, and audit.',
    systemComplexity: 'The product study models role-aware workspaces, operational exceptions, inventory state, purchasing approvals, financial consequences, and an event history without presenting a browser simulation as a production deployment.',
    architectureDecisions: 'The public sandbox uses explicit business actions and a shared event timeline to demonstrate how domain state can remain connected. The marketing UI is intentionally separated from claims about production infrastructure.',
    tradeoffs: 'The demo favors clarity and traceability over breadth. It does not attempt to reproduce every ERP module or persist demo state beyond the browser session.',
    outcome: 'A working interactive GC-ERP sandbox now demonstrates a connected approval → receipt → financial posting → audit sequence and role-specific operational views.',
    techStack: ['React', 'TypeScript', 'Event-driven modeling', 'Role-aware UI', 'Audit timeline'],
    imageUrl: ''
  },
  {
    id: 'g-hims-product-study',
    title: 'Modeling a Traceable Hospital Workflow from Registration to Billing',
    client: 'Gotham Coders Product R&D',
    industry: 'Healthcare & Hospital Operations',
    problemContext: 'Hospital workflows cross clinical, diagnostic, pharmacy, billing, and operational boundaries. A useful system must preserve patient context while keeping actions attributable and role-aware.',
    systemComplexity: 'The public product study must communicate clinical workflow relationships without pretending a marketing sandbox is a validated clinical deployment or replacing production safety controls.',
    architectureDecisions: 'The demonstration is structured around an encounter timeline and explicit operational stages so patient identity, clinical actions, orders, fulfillment, billing, and audit events remain connected.',
    tradeoffs: 'The public demo intentionally uses synthetic sample data and simplified clinical actions. It demonstrates interaction and system structure, not clinical decision support or production readiness.',
    outcome: 'A transparent browser-based G-HIMS experience demonstrates how patient workflow events can be organized into a longitudinal, auditable operational view.',
    techStack: ['React', 'TypeScript', 'Clinical workflow modeling', 'Event history', 'Role-aware UI'],
    imageUrl: ''
  }
];
