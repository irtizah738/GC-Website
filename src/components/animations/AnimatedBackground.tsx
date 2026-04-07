import { motion, useReducedMotion } from 'motion/react';

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 dark:opacity-20"
          style={{
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(99,102,241,0.4), transparent)' 
              : 'radial-gradient(circle, rgba(161,161,170,0.3), transparent)',
            left: `${i * 15}%`,
            top: `${(i % 3) * 30}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
