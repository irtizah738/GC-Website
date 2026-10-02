import { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'healthcare-hospitals',
    title: 'Healthcare & Hospitals',
    challenges: [
      'Clinical, operational, and financial workflows cross many departments',
      'Patient safety depends on reliable identity, orders, and status transitions',
      'Shared devices and intermittent connectivity complicate daily operations',
      'Sensitive data requires strong tenant, role, and credential boundaries'
    ],
    workflows: [
      'Registration, triage, consultation, and longitudinal records',
      'Diagnostics, pharmacy, inventory, and fulfillment',
      'Admissions, transfers, discharge, and inpatient coordination',
      'Billing, revenue integrity, reconciliation, and audit'
    ],
    dataComplexity: 'Very high. Patient identity, clinical records, orders, results, medication, operational events, and financial consequences must remain attributable and connected.',
    systemRequirements: [
      'High availability and recoverable workflows',
      'Strict authorization and auditability',
      'Interoperability-ready data boundaries',
      'Offline-capable operational surfaces where needed'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'manufacturing-supply-chain',
    title: 'Manufacturing & Supply Chain',
    challenges: [
      'Inventory state changes across warehouses, purchasing, and production',
      'Approval delays create material and cash-flow consequences',
      'Operational exceptions are often discovered too late',
      'Finance must reconcile activity created outside the finance team'
    ],
    workflows: [
      'Procurement, supplier approvals, and goods receipt',
      'Inventory, reservations, transfers, and reorder control',
      'Production planning, work orders, and material consumption',
      'Costing, payables, receivables, and operational posting'
    ],
    dataComplexity: 'High. Material, commitments, production state, vendor activity, and financial postings need a shared operational history without collapsing every domain into one screen.',
    systemRequirements: [
      'Traceable business transactions',
      'Role-aware approvals and exception handling',
      'Reliable cross-domain state propagation',
      'Warehouse and field resilience where connectivity is limited'
    ],
    icon: 'Factory'
  },
  {
    id: 'multi-site-operations',
    title: 'Multi-Site Operations',
    challenges: [
      'Different locations operate under the same organization with local constraints',
      'Central teams need visibility without bypassing local authority',
      'Connectivity and device quality vary by site',
      'Duplicate records and delayed synchronization create reconciliation work'
    ],
    workflows: [
      'Tenant, branch, facility, and department context',
      'Local operations with central reporting',
      'Shared master data with controlled local variation',
      'Offline capture, retry, reconciliation, and exception review'
    ],
    dataComplexity: 'High. Shared organizational data must coexist with location-specific state, permissions, device behavior, and synchronization history.',
    systemRequirements: [
      'Strong tenant and site isolation',
      'Idempotent commands and replay-safe processing',
      'Deterministic conflict and retry behavior',
      'Central visibility without centralizing every action'
    ],
    icon: 'Building2'
  },
  {
    id: 'regulated-domain-systems',
    title: 'Regulated & Domain-Specific Systems',
    challenges: [
      'Generic software cannot represent specialized authority or evidence rules',
      'Operational decisions may require full historical traceability',
      'Integrations introduce external failure and data-quality boundaries',
      'The cost of silent data corruption is higher than the cost of slower writes'
    ],
    workflows: [
      'Domain-specific commands and approval gates',
      'Evidence capture and immutable activity history',
      'Specialized integrations and adapter boundaries',
      'Operational reporting, exception review, and reconciliation'
    ],
    dataComplexity: 'Varies by domain, but usually includes specialized records, external integrations, strict provenance, and business rules that cannot safely live only in frontend forms.',
    systemRequirements: [
      'Explicit trusted authority boundaries',
      'Schema validation and fail-closed commands',
      'Evidence-preserving audit trails',
      'Integration isolation and recoverable processing'
    ],
    icon: 'ShieldCheck'
  }
];
