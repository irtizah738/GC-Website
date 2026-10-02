'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from './AppLink';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/systems' },
  { name: 'Industries', path: '/industries' },
  { name: 'Engineering', path: '/approach' },
  { name: 'Company', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled
          ? 'border-zinc-800 bg-zinc-950/92 backdrop-blur-xl'
          : 'border-transparent bg-zinc-950/70 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Gotham Coders home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-[10px] font-bold tracking-tight text-zinc-950">
            GC
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            Gotham Coders
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={isActive(link.path) ? 'page' : undefined}
              className={cn(
                'text-sm font-medium transition-colors',
                isActive(link.path) ? 'text-white' : 'text-zinc-400 hover:text-white',
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/products"
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
          >
            View demo
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Talk to us
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-lg p-2 text-zinc-300 transition hover:bg-zinc-900 hover:text-white lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden border-t border-zinc-800 bg-zinc-950 lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block rounded-lg px-3 py-3 text-base font-medium',
                    isActive(link.path)
                      ? 'bg-zinc-900 text-white'
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-white',
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid gap-2 border-t border-zinc-800 pt-4 sm:grid-cols-2">
                <Link
                  to="/products"
                  className="rounded-lg border border-zinc-800 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  View ERP demo
                </Link>
                <Link
                  to="/contact"
                  className="rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-950"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
