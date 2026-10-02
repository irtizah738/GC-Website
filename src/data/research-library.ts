export const researchPapers = [
  {
    id: 'clinical-intelligence-concept-validation',
    eyebrow: 'Clinical Intelligence',
    title: 'From Fragmented Records to Clinical Context',
    type: 'Concept-validation research paper',
    status: 'Completed • September 2026',
    meta: '19 pages • 32 references',
    summary:
      'Evidence review for Patient Context Intelligence: how longitudinal, source-linked clinical context can reduce record fragmentation and support better clinician review without turning AI into an autonomous clinical authority.',
    findings: [
      'Reviews commercial and implementation evidence across Elation, Banner, Qualified Health, Carta, Navina, Regard, Pieces, and related systems.',
      'Synthesizes evidence on missing information, context fragmentation, clinician cognitive burden, and source-linked summarization.',
      'Frames Clinical Intelligence as a separate product wedge from Revenue Integrity.',
    ],
    tags: ['Patient 360', 'Clinical Intelligence', 'Evidence synthesis', 'Healthcare'],
  },
  {
    id: 'clinical-intelligence-expanded-validation',
    eyebrow: 'Clinical Intelligence',
    title: 'Expanded Clinical Intelligence Concept Validation',
    type: 'Expanded research paper',
    status: 'Completed • September 2026',
    meta: 'Peer-reviewed evidence + Pakistan context',
    summary:
      'Expanded validation paper adding peer-reviewed evidence, Pakistan-specific operating constraints, implementation feasibility, interoperability considerations, cost structure, and a falsifiable pilot design.',
    findings: [
      'Adds academic and implementation evidence beyond commercial case studies.',
      'Tests feasibility under emerging-market hospital constraints rather than assuming ideal infrastructure.',
      'Defines a pilot design that can prove or disprove the core Patient Context Intelligence thesis.',
    ],
    tags: ['Research', 'Pakistan', 'Pilot design', 'Interoperability'],
  },
  {
    id: 'clinical-intelligence-technical-white-paper',
    eyebrow: 'Architecture',
    title: 'Clinical Intelligence Technical Architecture & Implementation White Paper',
    type: 'Technical white paper',
    status: 'Completed • Version 1.0',
    meta: '29 pages • prototype → Hospital-0 → production',
    summary:
      'End-to-end architecture for a portable longitudinal clinical-context platform, including data ingestion, provenance, missing-information detection, AI gateway controls, offline behavior, security, infrastructure, APIs, and staged delivery.',
    findings: [
      'Covers FHIR, SMART, CDS Hooks, HL7, DICOMweb, provenance, longitudinal state, and AI gateway boundaries.',
      'Separates deterministic clinical truth from probabilistic AI assistance.',
      'Maps prototype, Hospital-0, and production/full-product evolution with infrastructure and cost considerations.',
    ],
    tags: ['Architecture', 'FHIR', 'HL7', 'AI governance', 'Offline-first'],
  },
  {
    id: 'revenue-integrity-concept-validation',
    eyebrow: 'Revenue Integrity',
    title: 'From Patient Activity to Financial Truth',
    type: 'Concept-validation research paper',
    status: 'Completed • September 2026',
    meta: '16 pages • 25 references',
    summary:
      'Research into hospital revenue integrity failures that remain invisible even after billing software is installed: advances, unallocated payments, subledger/GL mismatch, cut-off, interface gaps, credits, staffing, and reconciliation.',
    findings: [
      'Treats payment, revenue, receivables, and general-ledger truth as distinct states that require deterministic reconciliation.',
      'Frames the product wedge as Continuous Patient Revenue Reconciliation rather than generic billing automation.',
      'Separates financial control logic from AI assistance and keeps reconciliation deterministic.',
    ],
    tags: ['Revenue Integrity', 'Reconciliation', 'Finance', 'Hospital operations'],
  },
] as const;

export const engineeringCaseStudies = [
  {
    id: 'g-hims-patient-360',
    product: 'G-HIMS',
    category: 'Clinical Intelligence',
    title: 'Building Patient 360 from canonical clinical events',
    summary:
      'A longitudinal patient surface built as a governed projection rather than a manually assembled dashboard. The architecture connects encounter stages, diagnostics, medication, knowledge status, and evidence history without letting the read model become the source of truth.',
    problem:
      'Clinical information is distributed across encounters, departments, orders, results, medications, and operational systems. A useful patient view must consolidate context without destroying provenance.',
    decision:
      'Use server-owned clinical events and canonical projections to build Patient 360, then layer knowledge-status and discharge-readiness intelligence above the governed record.',
    evidence:
      'Repository contains CI1–CI8 workflows and tests covering canonical clinical model, terminology, diagnostics pipeline, Patient 360 projection/read surface, knowledge status, discharge readiness, and deterioration escalation.',
    href: '/products/g-hims',
    cta: 'Explore G-HIMS',
    tags: ['Patient 360', 'Clinical Intelligence', 'CQRS', 'Provenance'],
  },
  {
    id: 'g-hims-offline-first',
    product: 'G-HIMS',
    category: 'Resilience',
    title: 'Qualifying offline-first hospital workflows',
    summary:
      'An offline architecture that treats disconnection, replay, identity remapping, shared workstations, conflict handling, and encrypted local clinical data as first-class operational behavior.',
    problem:
      'Hospitals cannot assume uninterrupted connectivity, yet duplicate writes, stale identity, or unsafe replay can be worse than downtime.',
    decision:
      'Use encrypted local projections, a durable transactional outbox, stable command identity, replay-safe server commands, causal conflict handling, and explicit physical-device qualification.',
    evidence:
      'The repository includes offline sync engine, vector clocks, local secure storage, reconciliation services, P6 completion tests, and a real-device qualification runbook.',
    href: 'https://github.com/irtizah738/G-HIMS-AI/blob/main/docs/operations/OFFLINE_FIRST_QUALIFICATION.md',
    cta: 'Read qualification plan',
    tags: ['Offline-first', 'Outbox', 'Conflict handling', 'Recovery'],
  },
  {
    id: 'g-hims-clinical-financial',
    product: 'G-HIMS',
    category: 'Clinical + Financial',
    title: 'Connecting care activity to revenue integrity without merging authority domains',
    summary:
      'A hospital workflow model where clinical actions create attributable operational and financial consequences while clinical truth and accounting truth remain separately governed.',
    problem:
      'Billing mismatches appear when services, fulfillment, charges, invoices, payments, and ledger postings are disconnected from the clinical events that caused them.',
    decision:
      'Model patient, encounter, order, fulfillment, charge, invoice, payment allocation, adjustment, settlement, subledger, and GL as connected but independently controlled event states.',
    evidence:
      'G-HIMS includes clinical-financial interoperability tests, double-entry financial services, billing/invoice surfaces, diagnostic revenue controls, and reconciliation-oriented architecture.',
    href: '/products/g-hims',
    cta: 'Explore product architecture',
    tags: ['Revenue integrity', 'Billing', 'Double-entry', 'Reconciliation'],
  },
  {
    id: 'gc-erp-cross-domain',
    product: 'GC-ERP',
    category: 'Enterprise Operations',
    title: 'Designing an ERP around the transaction chain',
    summary:
      'A manufacturing-first ERP architecture where customer demand, procurement, inventory, production, quality, logistics, finance, and audit remain connected through domain events instead of cross-module direct mutation.',
    problem:
      'Traditional ERP implementations can become collections of screens where operational consequences are reconciled after the fact.',
    decision:
      'Give each domain ownership of its business rules, connect consequences through events/workflows, and preserve immutable inventory and financial ledgers.',
    evidence:
      'Repository contains Sales/CRM, Procurement, WMS, MES, QMS, EAM, Finance, HR, Logistics, traceability, cross-module workflows, and broad automated test suites.',
    href: '/products/gc-erp',
    cta: 'Explore GC-ERP',
    tags: ['ERP', 'Manufacturing', 'Event-driven', 'Domain ownership'],
  },
  {
    id: 'gc-erp-ledgers-security',
    product: 'GC-ERP',
    category: 'Security & Integrity',
    title: 'Multi-tenant ERP with immutable ledgers and reliable domain events',
    summary:
      'A control architecture combining tenant-scoped database policy, append-only inventory movements, immutable posted journals, reversal-based correction, event envelopes, and transactional outbox/inbox reliability.',
    problem:
      'Enterprise systems need to explain who changed critical state, why it changed, and how the correction propagated—without allowing silent history rewrites.',
    decision:
      'Enforce tenant context at the database/service boundary, keep financially significant records append-only, and use correlation/causation IDs with reliable event delivery.',
    evidence:
      'GC-ERP documents PostgreSQL RLS, site restrictions, immutable inventory/financial ledgers, event envelopes, secret sanitization, and outbox/inbox reliability patterns.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/docs/architecture/GC_ERP_SECURITY_RLS_LEDGERS.md',
    cta: 'Read architecture paper',
    tags: ['RLS', 'Immutable ledgers', 'Outbox', 'Audit'],
  },
] as const;

export const technicalLibrary = [
  {
    product: 'G-HIMS',
    type: 'Evidence matrix',
    title: 'G-HIMS Final Evidence Matrix',
    summary: 'Capability-by-capability status taxonomy separating automated verification, integration readiness, external blockers, simulation-only work, and unimplemented controls.',
    href: 'https://github.com/irtizah738/G-HIMS-AI/blob/main/G-HIMS_FINAL_EVIDENCE_MATRIX.md',
    tags: ['Evidence', 'Readiness', 'Verification'],
  },
  {
    product: 'G-HIMS',
    type: 'Compliance readiness',
    title: 'Compliance Readiness — Evidence Boundary',
    summary: 'Defines which technical controls are repository-supported and which claims still require legal, institutional, deployment-specific, or independent evidence.',
    href: 'https://github.com/irtizah738/G-HIMS-AI/blob/main/G-HIMS_COMPLIANCE_READINESS.md',
    tags: ['Compliance', 'Security', 'Evidence boundary'],
  },
  {
    product: 'G-HIMS',
    type: 'Qualification plan',
    title: 'Controlled Live Pilot & TRL-6 Qualification',
    summary: 'Operational qualification program covering staging deployment, real-device offline testing, synthetic hospital-day rehearsal, recovery, Hospital-0 consent, and evidence requirements.',
    href: 'https://github.com/irtizah738/G-HIMS-AI/blob/main/docs/operations/P7_CONTROLLED_LIVE_PILOT_TRL6.md',
    tags: ['TRL-6', 'Pilot', 'Hospital-0'],
  },
  {
    product: 'G-HIMS',
    type: 'Resilience',
    title: 'Offline-First Qualification',
    summary: 'Physical-device test plan for hydration, disconnect, offline work, browser restart, replay, canonical ID remapping, duplicate prevention, conflicts, actor switching, and encrypted PHI inspection.',
    href: 'https://github.com/irtizah738/G-HIMS-AI/blob/main/docs/operations/OFFLINE_FIRST_QUALIFICATION.md',
    tags: ['Offline-first', 'Device testing', 'Sync'],
  },
  {
    product: 'G-HIMS',
    type: 'Operations',
    title: 'Disaster Recovery Runbook',
    summary: 'Operational recovery procedures and evidence requirements for backup, restore, runtime targeting, and recovery drills.',
    href: 'https://github.com/irtizah738/G-HIMS-AI/blob/main/docs/operations/DISASTER_RECOVERY.md',
    tags: ['DR', 'Recovery', 'Operations'],
  },
  {
    product: 'GC-ERP',
    type: 'Architecture',
    title: 'GC-ERP Architecture',
    summary: 'Manufacturing-first architecture defining domain ownership, enterprise modules, operational truth, finance boundaries, and cross-domain interaction principles.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/docs/architecture/GC-ERP-architecture.md',
    tags: ['Architecture', 'Manufacturing', 'Domain ownership'],
  },
  {
    product: 'GC-ERP',
    type: 'Security architecture',
    title: 'Security, RLS, Immutable Ledgers & Event Reliability',
    summary: 'PostgreSQL row-level security, tenant context, append-only inventory, immutable journals, event envelopes, and transactional outbox/inbox reliability.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/docs/architecture/GC_ERP_SECURITY_RLS_LEDGERS.md',
    tags: ['RLS', 'Ledgers', 'Security', 'Events'],
  },
  {
    product: 'GC-ERP',
    type: 'Operations architecture',
    title: 'MES, QMS, EAM, WMS & Logistics Suite',
    summary: 'Technical design for manufacturing execution, quality, maintenance, warehouse topology/picking, logistics, traceability, and financial settlement.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/docs/architecture/GC_ERP_MES_QMS_EAM_WMS_LOGISTICS.md',
    tags: ['MES', 'QMS', 'EAM', 'WMS'],
  },
  {
    product: 'GC-ERP',
    type: 'Deployment strategy',
    title: 'Multi-Region & Global Deployment Strategy',
    summary: 'Evolution from single-region foundation to a multi-region mesh with tenant home regions, data-residency guardrails, consistency boundaries, and disaster-recovery design.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/docs/architecture/GC_ERP_MULTI_REGION_GLOBAL_DEPLOYMENT.md',
    tags: ['Multi-region', 'Residency', 'DR'],
  },
  {
    product: 'GC-ERP',
    type: 'Architecture decision record',
    title: 'ADR-001 — Event-Driven Architecture',
    summary: 'Decision record for asynchronous event-mesh architecture, fault isolation, auditability, and eventual-consistency trade-offs.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/docs/decisions/ADR-001-event-driven-architecture.md',
    tags: ['ADR', 'Events', 'Architecture'],
  },
  {
    product: 'GC-ERP',
    type: 'Workflow study',
    title: 'Procure-to-Pay Workflow',
    summary: 'Requisition → PO → approval → goods receipt → QA → three-way invoice match → payment execution.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/docs/workflows/procure_to_pay.md',
    tags: ['P2P', 'Procurement', 'Finance'],
  },
  {
    product: 'GC-ERP',
    type: 'Test evidence',
    title: 'Master Production Test Matrix',
    summary: 'Formal matrix covering functional, security, tenant-isolation, authorization, transaction, concurrency, offline, integration, performance, recovery, and regression test categories.',
    href: 'https://github.com/irtizah738/GC-ERP-OS/blob/main/tests/matrix/testMatrix.test.ts',
    tags: ['Testing', 'Security', 'Performance'],
  },
] as const;

export const engineeringNotes = [
  {
    title: 'Event-Driven Architecture: A Practical Guide',
    summary: 'Commands, events, idempotency, projections, and trusted authority boundaries.',
    href: '/blog/event-driven-architecture-guide',
    category: 'Architecture',
  },
  {
    title: 'Healthcare Systems: Security by Design',
    summary: 'Data boundaries, least privilege, auditability, shared-device behavior, and evidence limits.',
    href: '/blog/hipaa-compliant-systems',
    category: 'Healthcare',
  },
  {
    title: 'ERP System Design: Lessons from the Trenches',
    summary: 'Inventory state, reversals, reconciliation, and why successful UI state does not prove completed business work.',
    href: '/blog/erp-system-design-lessons',
    category: 'Enterprise',
  },
] as const;
