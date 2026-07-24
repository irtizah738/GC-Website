import { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface Node {
  x: number;
  y: number;
  id: number;
}

export function NodeNetwork() {
  const reduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dimsRef = useRef({ w: typeof window !== 'undefined' ? window.innerWidth : 1200, h: typeof window !== 'undefined' ? window.innerHeight : 800 });
  const rafRef = useRef<number | null>(null);

  // Generate a stable list of nodes once
  const [nodes] = useState<Node[]>(() => 
    Array.from({ length: 12 }).map((_, i) => ({
      x: 10 + Math.random() * 80, // keep nodes slightly inside viewport boundaries
      y: 10 + Math.random() * 80,
      id: i,
    }))
  );

  useEffect(() => {
    if (reduceMotion) return;

    const updateDims = () => {
      dimsRef.current = { w: window.innerWidth, h: window.innerHeight };
    };
    updateDims();
    window.addEventListener('resize', updateDims, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) return;
      const clientX = e.clientX;
      const clientY = e.clientY;

      rafRef.current = requestAnimationFrame(() => {
        const w = dimsRef.current.w || 1;
        const h = dimsRef.current.h || 1;
        setMousePosition({
          x: (clientX / w) - 0.5,
          y: (clientY / h) - 0.5,
        });
        rafRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', updateDims);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div 
      className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30 dark:opacity-20"
      style={{
        transform: `translate3d(${mousePosition.x * -35}px, ${mousePosition.y * -35}px, 0)`,
        transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full blur-[1px]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {nodes.map((node, i) =>
        nodes.slice(i + 1, i + 3).map((target, j) => (
          <motion.div
            key={`${i}-${j}`}
            className="absolute bg-indigo-500/10 dark:bg-indigo-400/5"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${Math.hypot(target.x - node.x, target.y - node.y)}%`,
              height: '1px',
              transformOrigin: 'left center',
              transform: `rotate(${Math.atan2(target.y - node.y, target.x - node.x)}rad)`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))
      )}
    </div>
  );
}
