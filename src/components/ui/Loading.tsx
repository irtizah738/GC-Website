import { motion } from 'motion/react';

export function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950">
      <div className="relative w-24 h-24">
        {/* Outer spinning ring */}
        <motion.div
          className="absolute inset-0 border-4 border-zinc-800 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner pulsing logo container */}
        <motion.div
          className="absolute inset-4 bg-white rounded-lg flex items-center justify-center overflow-hidden"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="https://res.cloudinary.com/dzeiyvngc/image/upload/v1775507565/WhatsApp_Image_2024-04-27_at_02.22.22_21816fa5_ch75oe.jpg" 
            alt="Loading..." 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">
          Initializing System
        </span>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-white rounded-full"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
