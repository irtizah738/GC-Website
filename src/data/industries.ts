import { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'healthcare-hospitals',
    title: 'Healthcare & Hospitals',
    challenges: [
      'Fragmented patient data across clinics',
      'High administrative burden on clinicians',
      'Strict HIPAA/GDPR data security requirements',
      'Interoperability with legacy medical devices'
    ],
    workflows: [
      'Patient registration and triage',
      'Clinical documentation and EHR',
      'Pharmacy and lab order management',
      'Medical billing and claims processing'
    ],
    dataComplexity: 'High. Involves sensitive PII, medical images (DICOM), and real-time telemetry from medical devices.',
    systemRequirements: [
      '99.99% high availability',
      'HIPAA-compliant data encryption',
      'HL7/FHIR interoperability',
      'Sub-second latency for clinical tools'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'tertiary-care',
    title: 'Tertiary Care',
    challenges: [
      'Highly specialized clinical workflows',
      'Need for real-time surgical data integration',
      'Complex patient monitoring requirements',
      'Coordination across multi-disciplinary teams'
    ],
    workflows: [
      'Pre-operative and post-operative care',
      'Intensive care unit (ICU) monitoring',
      'Specialized surgical planning',
      'Long-term chronic care management'
    ],
    dataComplexity: 'Extreme. High-frequency sensor data, high-resolution imaging, and multi-modal patient records.',
    systemRequirements: [
      'Real-time data processing',
      'Integration with surgical equipment',
      'Offline-first mobile clinical tools',
      'Advanced data visualization'
    ],
    icon: 'Activity'
  },
  {
    id: 'sports-performance',
    title: 'Sports & Performance Systems',
    challenges: [
      'Processing massive amounts of athlete sensor data',
      'Real-time performance analytics during events',
      'Managing athlete health and injury records',
      'Scalability for high-concurrency fan engagement'
    ],
    workflows: [
      'Athlete performance tracking',
      'Injury prevention and rehab monitoring',
      'Real-time game analytics',
      'Scouting and talent management'
    ],
    dataComplexity: 'High. Time-series data from wearables, video analytics, and biometric records.',
    systemRequirements: [
      'Low-latency data ingestion',
      'Real-time analytics engine',
      'Mobile-first athlete interfaces',
      'Secure data sharing with teams'
    ],
    icon: 'Trophy'
  },
  {
    id: 'manufacturing-supply-chain',
    title: 'Manufacturing & Supply Chain',
    challenges: [
      'Inventory inaccuracies across multiple warehouses',
      'Inefficient procurement and supplier management',
      'Lack of real-time visibility into production lines',
      'Complex logistics and route optimization'
    ],
    workflows: [
      'Inventory and warehouse management',
      'Production planning and scheduling',
      'Supplier relationship management',
      'Logistics and shipment tracking'
    ],
    dataComplexity: 'Moderate to High. Large volumes of transactional data, IoT sensor data from production lines.',
    systemRequirements: [
      'Real-time inventory synchronization',
      'Audit-safe financial transactions',
      'Integration with ERP and CRM systems',
      'Offline-capable warehouse tools'
    ],
    icon: 'Factory'
  },
  {
    id: 'surgical-equipment-medical-devices',
    title: 'Surgical Equipment & Medical Devices',
    challenges: [
      'Ensuring software reliability for life-critical devices',
      'Managing device firmware updates securely',
      'Collecting and analyzing device telemetry data',
      'Regulatory compliance for medical software (IEC 62304)'
    ],
    workflows: [
      'Device telemetry and monitoring',
      'Remote diagnostics and maintenance',
      'Firmware over-the-air (FOTA) updates',
      'Integration with hospital HMIS'
    ],
    dataComplexity: 'High. Binary telemetry data, error logs, and high-frequency sensor readings.',
    systemRequirements: [
      'Deterministic software behavior',
      'Secure device-to-cloud communication',
      'Regulatory-compliant audit trails',
      'High-reliability data storage'
    ],
    icon: 'Microscope'
  }
];
