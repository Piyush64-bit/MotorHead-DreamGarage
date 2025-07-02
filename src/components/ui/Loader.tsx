import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  variant?: 'spin' | 'pulse' | 'dots' | 'bars';
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'md', 
  text = '', 
  className = '',
  variant = 'spin'
}) => {
  const sizeClasses = {
    sm: { container: 'w-6 h-6', dot: 'w-1.5 h-1.5', bar: 'w-1 h-4' },
    md: { container: 'w-10 h-10', dot: 'w-2 h-2', bar: 'w-1.5 h-6' },
    lg: { container: 'w-16 h-16', dot: 'w-3 h-3', bar: 'w-2 h-8' }
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const renderLoader = () => {
    switch (variant) {
      case 'spin':
        return (
          <motion.div
            className={`${sizeClasses[size].container} border-3 border-neon-blue/30 border-t-neon-blue rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );

      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size].container} bg-gradient-to-r from-neon-blue to-neon-green rounded-full`}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`${sizeClasses[size].dot} bg-neon-blue rounded-full`}
                animate={{
                  y: [0, -8, 0],
                  backgroundColor: ['#00FFFF', '#39FF14', '#7B68EE', '#00FFFF']
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1 items-end">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`${sizeClasses[size].bar} bg-gradient-to-t from-neon-blue to-neon-green rounded-sm`}
                animate={{
                  scaleY: [0.3, 1, 0.3],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        {renderLoader()}
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 10px rgba(0, 255, 255, 0.3)',
              '0 0 20px rgba(57, 255, 20, 0.4)',
              '0 0 15px rgba(123, 104, 238, 0.3)',
              '0 0 10px rgba(0, 255, 255, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {text && (
        <motion.p
          className={`text-gray-300 font-orbitron font-medium ${textSizes[size]} tracking-wider`}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Loader;