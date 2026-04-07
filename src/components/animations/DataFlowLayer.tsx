import { motion, useReducedMotion } from 'motion/react';

export function DataFlowLayer() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] w-32 bg-gradient-to-r from-transparent via-indigo-500/30 dark:via-indigo-400/20 to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: `-10%`,
          }}
          animate={{
            x: ['0%', '120vw'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}
