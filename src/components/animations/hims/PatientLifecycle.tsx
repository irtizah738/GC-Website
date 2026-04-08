import { motion, useReducedMotion } from 'motion/react';

const steps = [
  'Registration',
  'Triage',
  'Consultation',
  'Treatment',
  'Billing',
];

export function PatientLifecycle() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="flex items-center justify-between w-full py-8 overflow-x-auto no-scrollbar gap-4">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center shrink-0">
          <motion.div
            className="w-3 h-3 rounded-full bg-emerald-500"
            animate={{
              scale: [1, 1.4, 1],
              boxShadow: [
                '0 0 0 0px rgba(16, 185, 129, 0)',
                '0 0 0 8px rgba(16, 185, 129, 0.2)',
                '0 0 0 0px rgba(16, 185, 129, 0)'
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
          <span className="text-[10px] mt-4 font-mono uppercase tracking-widest text-zinc-500">{step}</span>
        </div>
      ))}
    </div>
  );
}
