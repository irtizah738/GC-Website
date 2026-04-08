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
    <div className="relative w-full h-32 mt-8">
      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute text-[10px] font-mono uppercase tracking-widest text-zinc-500"
          style={{ left: `${node.x}%`, top: '50%' }}
        >
          <div className="w-2 h-2 bg-zinc-900 dark:bg-white rounded-full mb-2" />
          {node.label}
        </div>
      ))}

      {/* Flow Units */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full"
          initial={{ x: '0%' }}
          animate={{ x: '90%' }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'linear',
          }}
          style={{ top: `${45 + (i % 2) * 5}%` }}
        />
      ))}
    </div>
  );
}
