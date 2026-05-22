import React, { useState } from 'react';
import { motion } from 'motion/react';

export const InteractiveCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = '',
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
      }}
      className={`relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 backdrop-blur-sm p-6 smooth-transition hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-xl hover:shadow-zinc-500/5 dark:hover:shadow-indigo-500/5 ${className}`}
    >
      {/* Spotlight radial gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out z-0 opacity-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
        }}
      />
      
      {/* Sub grid/dots visual accent under mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out z-0 opacity-0"
        style={{
          opacity: isHovered ? 0.35 : 0,
          maskImage: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, black, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, black, transparent 80%)`,
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Render children above spotlight background */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
