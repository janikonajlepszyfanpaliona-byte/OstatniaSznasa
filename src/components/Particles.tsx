'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function Particles() {
  // Generate deterministic particle data once to avoid hydration issues
  const particleData = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: (i * 3.33) % 100,
      top: ((i * 7) % 100),
      duration: 5 + ((i % 3) * 1.5),
      delay: ((i % 4) * 0.5),
    }));
  }, []);

  const orbData = useMemo(() => {
    return [0, 1, 2].map((i) => ({
      id: i,
      left: 20 + i * 30,
      top: 30 + i * 20,
      duration: 15 + i * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {particleData.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          initial={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0,
          }}
          animate={{
            top: [
              `${particle.top}%`,
              `${(particle.top - 20) % 100}%`,
            ],
            opacity: [0, 0.4, 0],
            left: `${(particle.left + 10) % 100}%`,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Light rays effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 25%, transparent 50%, rgba(255,255,255,0.03) 75%, transparent 100%)',
        backgroundSize: '200px 100%',
        animation: 'shimmer 3s ease-in-out infinite',
      }} />

      {/* Gradient orbs */}
      {orbData.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: `radial-gradient(circle, rgba(150,150,150,0.3), transparent)`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
          }}
          animate={{
            x: ['-50%', '50%', '-50%'],
            y: ['-50%', '50%', '-50%'],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
