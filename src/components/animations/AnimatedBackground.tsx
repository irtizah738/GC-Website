import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse positions (-0.5 to 0.5)
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            transform: `translate3d(${mousePosition.x * (60 + i * 20)}px, ${mousePosition.y * (60 + i * 20)}px, 0)`,
            transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(99,102,241,0.45), transparent)' 
              : 'radial-gradient(circle, rgba(161,161,170,0.35), transparent)',
            left: `${i * 15}%`,
            top: `${(i % 3) * 30}%`,
            width: '450px',
            height: '450px',
          }}
          animate={{
            translate: [
              '0px, 0px',
              '40px, -30px',
              '-20px, 20px',
              '0px, 0px'
            ],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full blur-[140px] opacity-20 dark:opacity-15"
        />
      ))}
    </div>
  );
}
