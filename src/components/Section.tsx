'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionProps {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  variant?: 'default' | 'muted' | 'dark';
  animate?: boolean;
}

export default function Section({
  children,
  className,
  containerClassName,
  id,
  variant = 'default',
  animate = true,
}: SectionProps) {
  const variants = {
    default: 'bg-zinc-950',
    muted: 'bg-zinc-900/50',
    dark: 'bg-black text-white',
  };

  const content = (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className={cn('py-24 md:py-32 overflow-hidden', variants[variant], className)}
    >
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ 
            duration: 0.8, 
            ease: [0.23, 1, 0.32, 1],
            delay: 0.1 
          }}
        >
          {content}
        </motion.div>
      ) : (
        content
      )}
    </section>
  );
}
