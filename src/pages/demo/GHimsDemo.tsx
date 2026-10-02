import React, { useState, useEffect } from 'react';
import { SEO } from '../../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Stethoscope, 
  ClipboardList, 
  Pill, 
  FileText, 
  CreditCard, 
  History, 
  CheckCircle2,
  Activity,
  Heart,
  Plus,
  ArrowRight
} from 'lucide-react';
import Section from '../../components/Section';
import { cn } from '../../lib/utils';
import { createEvent, PatientSummary, BaseEvent } from '../../lib/demoTypes';

export default function GHimsDemo() {
  const [tenantId, setTenantId] = useState<string | null>(null);
  const [patients, setPatients] = useState<PatientSummary[]>([]);
  const [events, setEvents] = useState<BaseEvent[]>([]);
  const [isSeeding, setIsSeeding] = useState(false);
  const [activePatientId, setActivePatientId] = useState<string | null>(null);

  // Initialize Demo
  const startDemo = () => {
    setIsSeeding(true);
    const newTenantId = `demo-hims-${Math.random().toString(36).substring(7)}`;
    
    // Seed initial data
    const p1Id = 'pat-1';
    
    const initialPatients: PatientSummary[] = [
      {
        patientId: p1Id,
        name: 'Ali Khan',
        age: 45,
        gender: 'Male',
        lastVisit: Date.now() - 86400000 * 2,
        activeMedications: ['Lisinopril 10mg'],
        outstandingBalance: 150.00
      }
    ];

    const initialEvents = [
      createEvent(newTenantId, p1Id, 'patient', 'patient_registered', { name: 'Ali Khan', age: 45, gender: 'Male' }),
      createEvent(newTenantId, p1Id, 'encounter', 'encounter_started', { encounterId: 'enc-1' }),
      createEvent(newTenantId, p1Id, 'diagnosis', 'diagnosis_recorded', { diagnosis: 'Hypertension' }),
    ];

    {
      setPatients(initialPatients);
      setEvents(initialEvents);
      setTenantId(newTenantId);
      setIsSeeding(false);
    }
  };

  const handleAddDiagnosis = (patientId: string) => {
    const diagnosis = 'Type 2 Diabetes';
    const event = createEvent(tenantId!, patientId, 'diagnosis', 'diagnosis_recorded', { diagnosis });
    
    setEvents(previous => [event, ...previous]);
    // In real app, read model would update via Cloud Function
  };

  const handlePrescribe = (patientId: string) => {
    const med = 'Metformin 500mg';
    if (patients.some(patient => patient.patientId === patientId && patient.activeMedications.includes(med))) return;
    const event = createEvent(tenantId!, patientId, 'medication', 'medication_prescribed', { medication: med });
    
    setEvents(previous => [event, ...previous]);
    setPatients(prev => prev.map(p => 
      p.patientId === patientId 
        ? { ...p, activeMedications: [...p.activeMedications, med] }
        : p
    ));
  };

  if (!tenantId) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <SEO 
          title="G-HIMS Demo | Gotham Coders"
          description="Interactive demo of our clinical workflow engine. Explore sample patient workflows in a browser-only simulation. Data resets when you leave."
          pathname="/demo/g-hims"
        />
        <div className="max-w-md w-full p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl text-center space-y-8">
          <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10 text-red-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-display font-bold text-zinc-900 dark:text-white">G-HIMS Demo</h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              Explore our clinical workflow engine. 
              Explore sample patient workflows in a browser-only simulation. Data resets when you leave.
            </p>
          </div>
          <button
            onClick={startDemo}
            disabled={isSeeding}
            className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSeeding ? 'Provisioning Clinical Sandbox...' : 'Start Clinical Demo'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Clinical Workspace */}
          <div className="flex-1 min-w-0 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold text-zinc-900 dark:text-white">Patient Management</h2>
                <p className="text-sm text-zinc-500 font-mono">CLINIC_ID: {tenantId}</p>
              </div>
              <button 
                onClick={() => setTenantId(null)}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                Reset Session
              </button>
            </div>

            {/* Patient Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {patients.map((patient) => (
                <div 
                  key={patient.patientId}
                  className={cn(
                    "p-6 bg-white dark:bg-zinc-900 border rounded-2xl shadow-sm transition-all cursor-pointer",
                    activePatientId === patient.patientId ? "border-zinc-900 dark:border-white ring-1 ring-zinc-900 dark:ring-white" : "border-zinc-200 dark:border-zinc-800"
                  )}
                  onClick={() => setActivePatientId(patient.patientId)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-zinc-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-white">{patient.name}</h3>
                        <p className="text-xs text-zinc-500">{patient.age}Y / {patient.gender}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono text-zinc-400">BALANCE</span>
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">${patient.outstandingBalance.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-500 uppercase tracking-widest">Active Meds</span>
                      <span className="font-bold text-zinc-900 dark:text-white">{patient.activeMedications.length}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {patient.activeMedications.map(med => (
                        <span key={med} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] rounded-md text-zinc-600 dark:text-zinc-400">
                          {med}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex gap-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handlePrescribe(patient.patientId); }}
                      className="flex-1 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <Pill className="w-3 h-3" /> Prescribe
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleAddDiagnosis(patient.patientId); }}
                      className="flex-1 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-bold text-zinc-600 dark:text-zinc-400 flex items-center justify-center gap-2"
                    >
                      <ClipboardList className="w-3 h-3" /> Note
                    </button>
                  </div>
                </div>
              ))}
              
              <button className="p-6 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-white transition-all group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Register Patient</span>
              </button>
            </div>

            {/* Encounter Timeline */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Activity className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white">Clinical Timeline</h3>
              </div>
              
              <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-zinc-100 dark:before:bg-zinc-800">
                {[
                  { time: '10:30 AM', title: 'Consultation Started', desc: 'Patient presenting with mild chest pain.', icon: Stethoscope },
                  { time: '10:45 AM', title: 'Vitals Recorded', desc: 'BP: 140/90, Pulse: 82, Temp: 37.2C', icon: Activity },
                  { time: '11:00 AM', title: 'Diagnosis Recorded', desc: 'Hypertension Stage 1', icon: ClipboardList },
                  { time: '11:15 AM', title: 'Medication Prescribed', desc: 'Lisinopril 10mg PO Daily', icon: Pill },
                ].map((item, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full flex items-center justify-center z-10">
                      <item.icon className="w-4 h-4 text-zinc-500" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-zinc-400">{item.time}</span>
                        <h4 className="font-bold text-zinc-900 dark:text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clinical Event Stream */}
          <div className="w-full lg:w-96 space-y-6">
            <div className="p-6 bg-zinc-950 text-white rounded-2xl shadow-xl border border-zinc-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-zinc-400" />
                  <h3 className="font-bold tracking-tight">Clinical Audit</h3>
                </div>
                <div className="px-2 py-0.5 rounded bg-zinc-800 text-[8px] font-mono text-zinc-500">DEMO</div>
              </div>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {events.map((event) => (
                    <motion.div
                      key={event.eventId}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1 relative overflow-hidden group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">{event.eventType}</span>
                        <span className="text-[8px] font-mono text-zinc-600">{new Date(event.metadata.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <p className="text-xs font-medium text-zinc-300">
                        {event.eventType === 'patient_registered' ? `Registered: ${event.payload.name}` : 
                         event.eventType === 'diagnosis_recorded' ? `Diagnosis: ${event.payload.diagnosis}` :
                         `Prescribed: ${event.payload.medication}`}
                      </p>
                      <div className="text-[8px] font-mono text-zinc-700 truncate">ID: {event.eventId}</div>
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 group-hover:bg-white transition-colors" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-4">G-HIMS Features</h4>
              <div className="space-y-4">
                {[
                  { title: 'Clinical Integrity', desc: 'Immutable audit trails for every patient action.' },
                  { title: 'Event Sourcing', desc: 'Replay history to see clinical evolution.' },
                  { title: 'Multi-Tenant', desc: 'Complete data isolation for healthcare facilities.' }
                ].map((feature, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {feature.title}
                    </p>
                    <p className="text-[10px] text-zinc-500 leading-relaxed pl-5">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
