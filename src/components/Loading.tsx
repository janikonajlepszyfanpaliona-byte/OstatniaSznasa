'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

export default function Loading() {
  const { setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // Generate particle positions once to avoid hydration mismatch
  const particles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: (i * 6.67) % 100, // Deterministic positioning
      top: ((i * 13.33) % 100),
      duration: 2.5 + (i % 5) * 0.15,
    }));
  }, []);

  useEffect(() => {
    // Target 2 seconds total: 1.5s load + 1s fade
    const fadeStartTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => {
          if (prev >= 90) {
            return 100;
          }
          const increment = Math.random() * 40 + 20;
          return Math.min(prev + increment, 99);
        });
      }, 50);
      return () => {
        clearTimeout(timer);
        clearTimeout(fadeStartTimer);
      };
    } else {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        setIsLoading(false);
      }, 1000);
      return () => {
        clearTimeout(fadeStartTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress, setIsLoading]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{ pointerEvents: isFading ? 'none' : 'auto' }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            initial={{ 
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: 0
            }}
            animate={{ 
              top: ['-10%', '-110%'],
              opacity: [0, 0.4, 0],
              left: `${particle.left}%`
            }}
            transition={{ 
              duration: particle.duration, 
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-8 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="text-4xl font-black text-white tracking-tighter" style={{
            textShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(150,150,150,0.2)',
          }}>
            WIKAK
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-80 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent border-b border-gray-700 rounded-full overflow-hidden relative"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>

        {/* Percentage */}
        <motion.div 
          className="text-4xl font-black text-white tracking-tighter"
          style={{
            textShadow: '0 10px 30px rgba(0,0,0,0.9)',
          }}
          key={progress}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          {Math.floor(progress)}%
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}
