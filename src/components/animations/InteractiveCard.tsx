import React from 'react';
import { motion } from 'motion/react';

export const InteractiveCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)',
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
      }}
      className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 backdrop-blur-sm p-6 smooth-transition hover:border-zinc-300 dark:hover:border-zinc-700 ${className}`}
    >
      {children}
    </motion.div>
  );
}
