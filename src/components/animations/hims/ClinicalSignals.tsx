import { motion, useReducedMotion } from 'motion/react';

export function ClinicalSignals() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="relative w-full h-24 mt-4">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full"
          style={{
            left: `${i * 12.5}%`,
            top: '50%',
          }}
          animate={{
            y: [0, -15, 15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Wave line */}
      <motion.div
        className="absolute w-full h-[1px] bg-emerald-500/20 top-1/2"
        animate={{
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
