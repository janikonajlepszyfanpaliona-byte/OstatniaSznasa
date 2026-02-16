'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Particles from './Particles';
import { useLoading } from '@/context/LoadingContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.85, filter: 'blur(16px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.4,
    },
  },
};

export default function Hero() {
  const { isLoading } = useLoading();
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (isLoading) return null;

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-black overflow-hidden relative"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: 'brightness(0.5) blur(2px)',
          WebkitFilter: 'brightness(0.5) blur(2px)',
        }}
      >
        <source src="/videos/background-featured.mp4" type="video/mp4" />
        <source src="/videos/background-featured.webm" type="video/webm" />
      </video>

      {/* Video Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-0" />

      <Particles />

      <motion.div
        className="space-y-12 max-w-6xl relative z-20 flex flex-col items-center justify-center flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={titleVariants}>
          <motion.h1
            className="text-8xl md:text-10xl font-black tracking-tighter leading-tight text-white"
            style={{
              textShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 40px rgba(150,150,150,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              letterSpacing: '0.02em',
              fontWeight: 900,
              fontFamily: 'system-ui, -apple-system'
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02 }}
          >
            WIKAK
          </motion.h1>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.p
            className="text-gray-200 text-sm md:text-base font-light tracking-widest hover:text-white transition-colors drop-shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
          >
            TWOJA WIZJA • MOJA PRODUKCJA
          </motion.p>
          <motion.p
            className="text-gray-300 text-xs tracking-widest hover:text-gray-100 transition-colors drop-shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            RYTM • PŁYNNOŚĆ • HISTORIA
          </motion.p>
        </motion.div>

        <motion.a
          href="https://discord.gg/VJ3362f5"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="mt-12 px-8 py-3 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-500 group relative overflow-hidden rounded-full inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="relative z-10"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Rozpocznij Projekt
          </motion.span>
        </motion.a>

        {/* Statistics Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-3 gap-8 max-w-2xl w-full px-4"
        >
          <div className="text-center">
            <motion.div
              className="text-3xl md:text-4xl font-black text-white mb-2"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              49+
            </motion.div>
            <p className="text-gray-400 text-xs md:text-sm">Wystawionych opinii</p>
          </div>
          <div className="text-center border-l border-r border-white/20">
            <motion.div
              className="text-3xl md:text-4xl font-black text-white mb-2"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            >
              67+
            </motion.div>
            <p className="text-gray-400 text-xs md:text-sm">Zadowolonych twórców</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl md:text-4xl font-black text-white mb-2"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              218+
            </motion.div>
            <p className="text-gray-400 text-xs md:text-sm">Zmontowanych filmów</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.svg
          className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-slate-900 to-transparent rounded-full blur-3xl opacity-10"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-slate-900 to-transparent rounded-full blur-3xl opacity-10"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.section>
  );
}
