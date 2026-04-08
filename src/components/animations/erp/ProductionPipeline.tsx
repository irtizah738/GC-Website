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
    <div className="flex items-center gap-4 w-full overflow-x-auto no-scrollbar py-8">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center shrink-0">
          <div className="relative">
            <motion.div
              className="w-3 h-3 rounded-full bg-zinc-900 dark:bg-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
            <div className="text-[10px] mt-3 font-mono uppercase tracking-tighter text-zinc-500 whitespace-nowrap">{stage}</div>
          </div>

          {i < stages.length - 1 && (
            <motion.div
              className="w-8 md:w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800 mx-2"
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
