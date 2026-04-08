import React from 'react';
import { cn } from '../../lib/utils';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level = 1,
  children,
  className,
}: HeadingProps) {
  const styles = {
    1: 'text-6xl md:text-7xl font-bold font-heading tracking-tighter',
    2: 'text-4xl md:text-5xl font-semibold font-heading tracking-tight',
    3: 'text-2xl md:text-3xl font-semibold tracking-tight',
    4: 'text-xl font-medium tracking-tight',
  };

  const Tag = `h${level}` as any;

  return (
    <Tag className={cn(styles[level], className)}>
      {children}
    </Tag>
  );
}
