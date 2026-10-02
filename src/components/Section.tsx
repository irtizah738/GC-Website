'use client';

import { ReactNode } from 'react';
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
}: SectionProps) {
  const variants = {
    default: 'bg-[#0a0e17]',
    muted: 'bg-[#0f1523]',
    dark: 'bg-[#0b101c] text-white',
  };

  return (
    <section
      id={id}
      className={cn('py-14 md:py-20', variants[variant], className)}
    >
      <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
