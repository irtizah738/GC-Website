import React from 'react';
import { cn } from '../../lib/utils';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'body' | 'small' | 'caption';
  className?: string;
  as?: 'p' | 'span' | 'div' | 'label' | 'li';
  htmlFor?: string;
}

export function Text({
  children,
  variant = 'body',
  className,
  as: Tag = 'p',
  ...props
}: TextProps) {
  const styles = {
    body: 'text-base text-zinc-400 leading-relaxed',
    small: 'text-sm text-zinc-500 leading-normal',
    caption: 'text-xs text-zinc-500 uppercase tracking-widest font-medium',
  };

  const Component = Tag as any;

  return (
    <Component className={cn(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
}
