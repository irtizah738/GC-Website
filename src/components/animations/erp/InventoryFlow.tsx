import { motion, useReducedMotion } from 'motion/react';

interface Node {
  id: string;
  x: number;
  label: string;
}

const nodes: Node[] = [
  { id: 'supplier', x: 0, label: 'Supplier' },
  { id: 'warehouse', x: 30, label: 'Warehouse' },
  { id: 'production', x: 60, label: 'Production' },
  { id: 'dispatch', x: 90, label: 'Dispatch' },
];

export function InventoryFlow() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="relative w-full h-24">
      {/* Flow Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2" />

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute flex flex-col items-center -translate-x-1/2"
          style={{ left: `${node.x}%`, top: '50%' }}
        >
          <div className="w-2.5 h-2.5 bg-zinc-900 dark:bg-white rounded-full mb-2 border-4 border-zinc-50 dark:border-zinc-950 shadow-sm relative z-20" />
          <span className="text-[9px] font-mono uppercase tracking-tighter text-zinc-500 whitespace-nowrap">
            {node.label}
          </span>
        </div>
      ))}

      {/* Flow Units */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-emerald-500 rounded-full z-10"
          initial={{ x: '0%', opacity: 0 }}
          animate={{ 
            x: '90%',
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'linear',
          }}
          style={{ top: 'calc(50% - 3px)' }}
        />
      ))}
    </div>
  );
}
