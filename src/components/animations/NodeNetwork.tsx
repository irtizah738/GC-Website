import { motion, useReducedMotion } from 'motion/react';

interface Node {
  x: number;
  y: number;
  id: number;
}

export function NodeNetwork() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  const nodes: Node[] = Array.from({ length: 12 }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    id: i,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30 dark:opacity-20">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full blur-[1px]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {nodes.map((node, i) =>
        nodes.slice(i + 1, i + 3).map((target, j) => (
          <motion.div
            key={`${i}-${j}`}
            className="absolute bg-indigo-500/10 dark:bg-indigo-400/5"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${Math.hypot(target.x - node.x, target.y - node.y)}%`,
              height: '1px',
              transformOrigin: 'left center',
              transform: `rotate(${Math.atan2(target.y - node.y, target.x - node.x)}rad)`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))
      )}
    </div>
  );
}
