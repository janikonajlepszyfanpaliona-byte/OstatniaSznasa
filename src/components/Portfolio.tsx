'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useOnScreen } from './useOnScreen';

const portfolioItems = [
  {
    id: 1,
    title: '100 Widzów vs 3 Pro Budowniczych - Kto Wybuduje Lepsze Królestwo?',
    category: 'Videos',
    videoId: '-0EwuWwuxK8', 
    creator: 'Napierak',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_m6Azbdy1x7mjZsh5uQnrKHhF2fTabVe9GvKqIWkb47LNQ=s900-c-k-c0x00ffffff-no-rj',
    label: 'Montaż Filmu',
  },
  {
    id: 2,
    title: 'W pośrednim filmie na kanale Kubir',
    category: 'Videos',
    videoId: 'VI70ICxQBSw',
    creator: 'Kubir',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mv6CpkNEQTdHHApBEnvWIRhpDED7eHLznLbq29y1m7uAw=s88-c-k-c0x00ffffff-no-rj',
    label: 'Montaż Filmu',
  },
  {
    id: 3,
    title: 'Został UPOKORZONY na oczach całego ŚWIATA!',
    category: 'Videos',
    videoId: 'g45GnYcsSMk',
    creator: 'Kubir',
    creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mv6CpkNEQTdHHApBEnvWIRhpDED7eHLznLbq29y1m7uAw=s88-c-k-c0x00ffffff-no-rj',
    label: 'Montaż Filmu',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.85, filter: 'blur(16px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      delay: i * 0.08,
    },
  }),
};

export default function Portfolio() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [ref, isVisible] = useOnScreen(0.1);

  return (
    <section
      id="portfolio"
      className="py-24 px-4 bg-black border-t border-white/10 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} custom={0}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight text-white leading-tight">
              Wybrane<br />Prace
            </h2>
            <motion.p 
              className="text-gray-400 text-base md:text-lg max-w-md"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Najlepsze projekty z mojego portfolio - odkryj kreatywne rozwiązania dla twórców
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} custom={1}>
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-500 group relative overflow-hidden block whitespace-nowrap"
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  group-hover={{ x: 4 }}
                >
                  Pełne Portfolio
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Channel-based Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {portfolioItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedVideoId(item.videoId)}
              className="group relative overflow-hidden rounded-2xl bg-black border border-white/20 p-0 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black transition-all"
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                y: -12, 
                borderColor: 'rgba(255,255,255,0.6)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: 'transform, box-shadow, border-color' }}
            >
              {/* Thumbnail Container */}
              <motion.div
                className="relative w-full bg-black flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: '16 / 9' }}
              >
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                  animate={{ 
                    opacity: [0, 0, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.img
                  src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />

                {/* Play Button Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-500"
                  initial={{ backdropFilter: 'blur(0px)' }}
                  whileHover={{ backdropFilter: 'blur(4px)' }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <svg
                      className="w-20 h-20 text-white drop-shadow-lg relative z-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: -10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {item.category}
                </motion.div>
              </motion.div>

              {/* Info Section with Creator */}
              <motion.div 
                className="p-6 flex items-center justify-between"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <motion.p 
                    className="text-gray-500 text-sm"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Kliknij, aby obejrzeć →
                  </motion.p>
                </div>
              </motion.div>

              {/* Creator Info Section */}
              <motion.div 
                className="px-6 pb-6 flex items-center justify-between border-t border-white/10 pt-4"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex items-center gap-3 flex-1">
                  <motion.img
                    src={item.creatorAvatar}
                    alt={item.creator}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{item.creator}</p>
                  </div>
                </div>
                <motion.span
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full border border-purple-500/30 whitespace-nowrap ml-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.span>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>

        {/* Accent Elements */}
        <motion.div
          className="absolute top-1/2 -right-40 w-80 h-80 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Video Modal */}
      {selectedVideoId && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-[9998] flex items-center justify-center p-4 overflow-auto backdrop-blur-sm"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={() => setSelectedVideoId(null)}
        >
          <motion.div
            className="relative w-full max-w-5xl my-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={() => setSelectedVideoId(null)}
              className="absolute -top-14 right-0 text-white z-[9999] transition-colors duration-300 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 rounded p-2"
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              className="relative w-full bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/50"
              style={{ paddingBottom: '56.25%' }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.4)' }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0&modestbranding=1&controls=1&fs=1&iv_load_policy=3`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: 'none',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
