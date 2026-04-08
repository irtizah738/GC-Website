import React from 'react';
import { cn } from '../../lib/utils';

interface CodeProps {
  children: React.ReactNode;
  className?: string;
}

export function Code({ children, className }: CodeProps) {
  return (
    <code className={cn(
      "font-mono text-sm bg-zinc-100 dark:bg-white/5 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-300",
      className
    )}>
      {children}
    </code>
  );
}
