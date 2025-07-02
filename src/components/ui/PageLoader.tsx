import React from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

interface PageLoaderProps {
  text?: string;
  className?: string;
  variant?: 'spin' | 'pulse' | 'dots' | 'bars';
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  text = 'Loading...',
  className = '',
  variant = 'dots'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-center justify-center min-h-[400px] relative ${className}`}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Main content */}
      <div className="relative z-10 glass-card p-8 rounded-xl border border-neon-blue/20">
        <Loader text={text} variant={variant} size="md" />
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-neon-green rounded-tl-lg" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-neon-blue rounded-tr-lg" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-neon-purple rounded-bl-lg" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-neon-green rounded-br-lg" />
      </div>
    </motion.div>
  );
};

export default PageLoader;