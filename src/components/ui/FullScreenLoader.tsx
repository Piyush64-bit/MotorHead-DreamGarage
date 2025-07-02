import React from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

interface FullScreenLoaderProps {
  text?: string;
  subtitle?: string;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ 
  text = 'Loading...',
  subtitle = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-carbon-dark overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-green/5"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(0,255,255,0.05) 0%, transparent 50%, rgba(57,255,20,0.05) 100%)',
              'linear-gradient(135deg, rgba(57,255,20,0.05) 0%, transparent 50%, rgba(123,104,238,0.05) 100%)',
              'linear-gradient(225deg, rgba(123,104,238,0.05) 0%, transparent 50%, rgba(0,255,255,0.05) 100%)',
              'linear-gradient(315deg, rgba(0,255,255,0.05) 0%, transparent 50%, rgba(57,255,20,0.05) 100%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Main loader */}
        <Loader size="lg" variant="pulse" />
        
        {/* Text content */}
        <div className="space-y-4">
          <motion.h3
            className="text-white text-2xl font-orbitron font-bold tracking-wider"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-purple bg-clip-text text-transparent">
              {text}
            </span>
          </motion.h3>
          
          {subtitle && (
            <motion.p
              className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Progress indicator */}
        <motion.div
          className="w-64 h-1 bg-carbon-light rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-green rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FullScreenLoader;