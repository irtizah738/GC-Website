import { motion, useReducedMotion } from 'motion/react';

const stages = [
  'Raw Material',
  'Processing',
  'Assembly',
  'Quality Check',
  'Finished Goods',
];

export function ProductionPipeline() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="flex items-center gap-4 w-full overflow-x-auto no-scrollbar py-4">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center shrink-0">
          <div className="relative flex flex-col items-center">
            <motion.div
              className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-white shadow-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
            <div className="text-[9px] mt-3 font-mono uppercase tracking-tighter text-zinc-500 whitespace-nowrap">
              {stage}
            </div>
          </div>

          {i < stages.length - 1 && (
            <div className="w-8 md:w-12 h-[1px] bg-zinc-200 dark:bg-zinc-800 mx-2 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-emerald-500"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'linear',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
