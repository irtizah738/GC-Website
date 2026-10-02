import NextLink from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
  children: ReactNode;
};

export default function AppLink({ to, children, ...props }: AppLinkProps) {
  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  );
}
