import { v4 as uuidv4 } from 'uuid';

export interface BaseEvent {
  eventId: string;
  tenantId: string;
  aggregateId: string;
  aggregateType: string;
  eventType: string;
  payload: Record<string, any>;
  metadata: {
    userId: string;
    source: 'demo' | 'system';
    timestamp: number;
    idempotencyKey: string;
  };
}

export type ERPEventType =
  | 'product_created'
  | 'inventory_received'
  | 'inventory_allocated'
  | 'inventory_consumed'
  | 'inventory_adjusted';

export type HIMSEventType =
  | 'patient_registered'
  | 'encounter_started'
  | 'diagnosis_recorded'
  | 'medication_prescribed'
  | 'lab_ordered'
  | 'invoice_generated';

export function createEvent(
  tenantId: string,
  aggregateId: string,
  aggregateType: string,
  eventType: string,
  payload: Record<string, any>
): BaseEvent {
  return {
    eventId: uuidv4(),
    tenantId,
    aggregateId,
    aggregateType,
    eventType,
    payload,
    metadata: {
      userId: 'demo-user',
      source: 'demo',
      timestamp: Date.now(),
      idempotencyKey: uuidv4(),
    },
  };
}

// For now, we'll use local state to simulate the "Read Models" 
// until Firebase is fully provisioned and we have Cloud Functions.
// In a real system, these would be updated by a background process.

export interface InventoryView {
  productId: string;
  name: string;
  sku: string;
  availableQty: number;
  reservedQty: number;
  lastUpdated: number;
}

export interface PatientSummary {
  patientId: string;
  name: string;
  age: number;
  gender: string;
  lastVisit: number;
  activeMedications: string[];
  outstandingBalance: number;
}
