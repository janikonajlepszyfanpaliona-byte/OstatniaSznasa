'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useOnScreen } from '@/components/useOnScreen';

const portfolioData = {
  videos: [
    { id: 11, title: '100 WIDZÓW vs 3 PRO BUDOWNICZYCH - Kto Wybuduje Lepsze KRÓLESTWO?', videoId: '-0EwuWwuxK8', creator: 'Napierak', creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_m6Azbdy1x7mjZsh5uQnrKHhF2fTabVe9GvKqIWkb47LNQ=s900-c-k-c0x00ffffff-no-rj', label: 'Montaż Filmu' },
    { id: 1, title: 'EarthSmp: Miecz Łowcy', videoId: 'ppezf46mLO0', creator: 'EkipaRapy', creatorAvatar: 'https://yt3.googleusercontent.com/Wt6C9J0YOaBHc4sp9WSyOo0PVPSM6d8QaiGXJsVIuzntg1dVxdi105lrRyrN7E8Z_KrRqfM7qg=s900-c-k-c0x00ffffff-no-rj', label: 'Montaż Filmu' },
    { id: 2, title: 'EarthSmp: PentaKill', videoId: 'undo7xjhy0g', creator: 'EkipaRapy', creatorAvatar: 'https://yt3.googleusercontent.com/Wt6C9J0YOaBHc4sp9WSyOo0PVPSM6d8QaiGXJsVIuzntg1dVxdi105lrRyrN7E8Z_KrRqfM7qg=s900-c-k-c0x00ffffff-no-rj', label: 'Montaż Filmu' },
    { id: 3, title: 'To są NAJLEPSZE Texture Packi na Lifesteal', videoId: '6jrj1nPN3cU', creator: 'Kabylek', creatorAvatar: 'https://yt3.ggpht.com/4LLzkuHeDHEI3YEvZKNHQ-dQ1bOG-xz3qRhxY9ifpXqzFk3D74I2A3LHXqMgjJKyVaXP6_1YRpD6xx4=s168-c-fcrop64=1,09310000f6ceffff-nd-v1', label: 'Montaż Filmu' },
    { id: 4, title: 'Minecraft, ale ,MUSISZ ZEBRAĆ 1.000.000 BLOKÓW...', videoId: 'g45GnYcsSMk', creator: 'Kubir', creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mv6CpkNEQTdHHApBEnvWIRhpDED7eHLznLbq29y1m7uAw=s88-c-k-c0x00ffffff-no-rj', label: 'Montaż Filmu' },
    { id: 5, title: 'UKRADŁEM Najlepszego Brainrota w STEAL A BRAINROT ROBLOX w Minecraft...  ...', videoId: 'VI70ICxQBSw', creator: 'Kubir', creatorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mv6CpkNEQTdHHApBEnvWIRhpDED7eHLznLbq29y1m7uAw=s88-c-k-c0x00ffffff-no-rj', label: 'Montaż Filmu' },
  ],
  shorts: [
    { id: 6, title: 'Short #1', videoId: 'uXlVQnsOzz8', creator: 'Meksiak', creatorAvatar: 'data:image/jpeg;base64,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', label: 'Montaż Filmu' },
    { id: 7, title: 'Short #2', videoId: 'QVMBBrX5QeY', creator: 'Macmarr', creatorAvatar: 'https://minecraftfaces.com/wp-content/bigfaces/big-steve-face.png', label: 'Montaż Filmu' },
    { id: 8, title: 'Short #3', videoId: 'KSFapL5U_o4', creator: 'Cpotworek', creatorAvatar: 'https://yt3.googleusercontent.com/QTcIJ56_CsX9lT46QoHyet2Of0q6ep96ai0XfIZEGc4FXpvoVT9LVZuvj225spS4TKVR6ageJ4I=s900-c-k-c0x00ffffff-no-rj', label: 'Montaż Filmu' },
  ],
  animations: [
    { id: 9, title: 'Animacja Prezentująca Strone Wikak.PL', videoId: 'gaLwC2PzabU', creator: '???', creatorAvatar: 'https://minecraftfaces.com/wp-content/bigfaces/big-steve-face.png', label: 'Montaż Filmu' },
    { id: 10, title: 'Animacja #2', videoId: 'dibl6Gr1OVY', creator: '???', creatorAvatar: 'https://minecraftfaces.com/wp-content/bigfaces/big-steve-face.png', label: 'Montaż Filmu' },
    { id: 11, title: 'Animacja #3', videoId: '-UXcCAt9QHI', creator: '???', creatorAvatar: 'https://minecraftfaces.com/wp-content/bigfaces/big-steve-face.png', label: 'Montaż Filmu' },
  ],
};

type CategoryFilter = 'Videos' | 'Shorts' | '2D Motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
    },
  },
};

export default function PortfolioPage() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Videos');
  const [ref, isVisible] = useOnScreen(0.1);

  const getCategoryItems = () => {
    switch (activeCategory) {
      case 'Videos':
        return portfolioData.videos;
      case 'Shorts':
        return portfolioData.shorts;
      case '2D Motion':
        return portfolioData.animations;
      default:
        return portfolioData.videos;
    }
  };

  const categories: CategoryFilter[] = ['Videos', 'Shorts', '2D Motion'];

  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-4" ref={ref}>
        {/* Back Button */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/70 text-white font-semibold hover:border-white hover:bg-white/10 transition-all duration-500 group"
          >
            <motion.span
              animate={{ x: [-4, 0, -4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ←
            </motion.span>
            Wróć do głównej
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-white leading-tight drop-shadow-lg">
            Pełne Portfolio
          </h1>
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Odkryj wszystkie moje projekty wideo, animacje i kreatywne rozwiązania dla twórców treści
          </motion.p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          className="flex justify-center gap-3 md:gap-4 mb-20 flex-wrap"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 border-2 relative overflow-hidden group ${
                activeCategory === category
                  ? 'border-white bg-white text-black shadow-lg shadow-white/30'
                  : 'border-white/40 text-white hover:border-white/80 bg-transparent hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: activeCategory === category 
                  ? ['0 0 20px rgba(255,255,255,0.3)', '0 0 30px rgba(255,255,255,0.5)', '0 0 20px rgba(255,255,255,0.3)']
                  : 'none'
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Channel-Based Layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          key={activeCategory}
        >
          {getCategoryItems().map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedVideoId(item.videoId)}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-black border border-white/20 p-0 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black transition-all"
              whileHover={{ 
                y: -10, 
                borderColor: 'rgba(255,255,255,0.6)'
              }}
              whileTap={{ scale: 0.97 }}
              style={{ willChange: 'transform, box-shadow, border-color' }}
            >
              {/* Thumbnail Container */}
              <motion.div
                className="relative w-full bg-black flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: '16 / 9' }}
              >
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.15, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                <motion.img
                  src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />

                {/* Play Button Overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/45 transition-all duration-500"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <svg
                      className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg relative z-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 text-white text-xs font-bold rounded-lg uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"
                  initial={{ y: -10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {activeCategory}
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

        {/* Empty State Message */}
        {getCategoryItems().length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-lg">Brak projektów w tej kategorii</p>
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          className="fixed top-1/2 -right-64 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          animate={{ y: [0, 60, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="fixed -bottom-32 -left-64 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          animate={{ y: [0, -60, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      {/* Video Modal */}
      {selectedVideoId && (
        <motion.div
          className="fixed inset-0 bg-black/97 z-[9998] flex items-center justify-center p-4 md:p-6 overflow-auto backdrop-blur-sm"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={() => setSelectedVideoId(null)}
        >
          <motion.div
            className="relative w-full max-w-6xl my-auto"
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedVideoId(null)}
              className="absolute -top-16 md:-top-12 right-0 text-white z-[9999] transition-colors duration-300 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-full p-3 hover:bg-white/10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.85 }}
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Video Container */}
            <motion.div
              className="relative w-full bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/70"
              style={{ paddingBottom: '56.25%' }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.5)' }}
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
    </main>
  );
}
