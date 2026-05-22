import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Systems We Build', path: '/systems' },
  { name: 'Industries', path: '/industries' },
  { name: 'Engineering Approach', path: '/approach' },
  { name: 'AI Lab', path: '/ai-lab' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Premium scroll progress tracking with spring physics
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-md py-3 border-zinc-800'
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden shrink-0 shadow-sm">
              <img 
                src="https://res.cloudinary.com/dzeiyvngc/image/upload/v1775507565/WhatsApp_Image_2024-04-27_at_02.22.22_21816fa5_ch75oe.jpg" 
                alt="Gotham Coders Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                decoding="async"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white leading-none">
              Gotham<span className="text-zinc-500 font-mono font-normal uppercase text-sm ml-1 tracking-tighter">Coders</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors hover:text-zinc-900 dark:hover:text-white py-2 group/link',
                    location.pathname === link.path
                      ? 'text-zinc-900 dark:text-white'
                      : 'text-zinc-500 dark:text-zinc-400'
                  )}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900 dark:bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <Link
                  to="/contact"
                  className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-2.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest hover:shadow-lg dark:hover:shadow-white/10 transition-all flex items-center justify-center"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="p-2 text-zinc-600 dark:text-zinc-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block px-3 py-4 text-base font-medium rounded-md',
                    location.pathname === link.path
                      ? 'bg-zinc-900 text-white'
                      : 'text-zinc-400 hover:bg-zinc-900'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 rounded-xl text-base font-semibold"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Dynamic Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 dark:bg-indigo-400 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />
    </nav>
  );
}
