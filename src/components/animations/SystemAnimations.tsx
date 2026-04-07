import { motion } from 'motion/react';

export function ERPAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-4">
        {[...Array(36)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-zinc-400 dark:bg-zinc-600 rounded-sm"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: (i % 6) * 0.2 + Math.floor(i / 6) * 0.2,
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export function HMISAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30 flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-indigo-500/50 rounded-full"
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{ 
            width: ['0%', '150%'],
            height: ['0%', '150%'],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: 'easeOut',
          }}
        />
      ))}
      <motion.div
        className="w-16 h-1 bg-indigo-500/50 rounded-full"
        animate={{ 
          scaleX: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

export function SaaSAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500/50 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{ 
            x: [0, (i - 3.5) * 40],
            y: [0, Math.sin(i) * 80],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-indigo-500/30 rounded-full animate-ping" />
      </div>
    </div>
  );
}
