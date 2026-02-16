'use client';

import { motion } from 'framer-motion';
import { useOnScreen } from './useOnScreen';
import { useState, useRef } from 'react';

const creators = [
  {
    id: 1,
    name: 'kubir',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mv6CpkNEQTdHHApBEnvWIRhpDED7eHLznLbq29y1m7uAw=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@Kubirek',
  },
  {
    id: 2,
    name: 'tobiasz',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsh4Aa3CTGDGhtOMVLgK4aHF4Glz82ArKOA&s',
    url: 'https://www.youtube.com/@TobiaszGaming',
  },
  {
    id: 3,
    name: 'cpotworek',
    avatar: 'https://yt3.googleusercontent.com/QTcIJ56_CsX9lT46QoHyet2Of0q6ep96ai0XfIZEGc4FXpvoVT9LVZuvj225spS4TKVR6ageJ4I=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@cpotworek',
  },
  {
    id: 4,
    name: 'zenciak',
    avatar: 'https://yt3.googleusercontent.com/X1ofEazlVw-rkBo9oq6FcWCkWyNdNOxes1500cxtAO_s-eeRD-bRS3MWFY2Plll_9iTHCgw8=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@ZenciaK',
  },
  {
    id: 5,
    name: 'krzysimir',
    avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mSfUbXl3yYSnFhJxWvS7lim5dBilK8OrbEz4Qx5Kd4sSw=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@krzysimir92',
  },
  {
    id: 6,
    name: 'kabylekl',
    avatar: 'https://yt3.ggpht.com/4LLzkuHeDHEI3YEvZKNHQ-dQ1bOG-xz3qRhxY9ifpXqzFk3D74I2A3LHXqMgjJKyVaXP6_1YRpD6xx4=s168-c-fcrop64=1,09310000f6ceffff-nd-v1',
    url: 'https://www.youtube.com/@A5B1SS',
  },
  {
    id: 7,
    name: 'wytoh',
    avatar: 'https://yt3.googleusercontent.com/C25it1uQvot_VTYJuKWPd7uK5d-FlVs2pampQz3I-fHXAuIlxBR1N_cbZ_ntjAghgY87Kg9REQ=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@wytoh1',
  },
  {
    id: 8,
    name: 'froxy',
    avatar: 'https://yt3.googleusercontent.com/_967C0R1kfdSKvGnlvoslKDGtdQ2gHZicr7XbEvb4GY5ZGhEwk4nS0zd_Y83GzMhq64clN0Gfw=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@FroxyPL',
  },
  {
    id: 9,
    name: 'e__s',
    avatar: 'https://yt3.googleusercontent.com/N0NFM8LCmHccsvk5D5NCv5viS3mvcNuJ0o9bqSeJ5jtZ8pFCVUnH32Dxrg7l79Z69t5N5ezvNHw=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@e__s0',
  },
  {
    id: 10,
    name: 'raxenik',
    avatar: 'https://yt3.googleusercontent.com/QONFseLeWs9YCMl6fAm90dIRytKJYHFK_zMjI8wpWE3RU9iNNYPxsM4bipp1DVxsvqXR9tdkUJ8=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@xRaxenikk',
  },
  {
    id: 11,
    name: 'trombapowietrzna',
    avatar: 'https://yt3.googleusercontent.com/dDrE3oaIv5n351MOhypLD1CUK1uaDc7NHnDgMSZYxmxF0TuRE2Ybeye9IfGZZN1HTxJB37sWhw=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@TrombaPowietrzna',
  },
  {
    id: 12,
    name: 'meksiak',
    avatar: 'https://yt3.googleusercontent.com/YsYhbpJ8j-NLcsl_siLCXHY4fTs86CgCwPF6DTj9RyuHxxMtAEArA_y_gJkc57ILrGhVvOLmGQ=s176-c-k-c0x00ffffff-no-rj-mo',
    url: 'https://www.youtube.com/@Meksiak_',
  },
  {
    id: 13,
    name: 'RapyGG',
    avatar: 'https://yt3.googleusercontent.com/Wt6C9J0YOaBHc4sp9WSyOo0PVPSM6d8QaiGXJsVIuzntg1dVxdi105lrRyrN7E8Z_KrRqfM7qg=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@RAPY_PL',
  },
];

const duplicatedCreators = [...creators, ...creators, ...creators, ...creators];

export default function CreatorsCarousel() {
  const [ref, isVisible] = useOnScreen(0.15);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="creators-carousel"
      className="relative py-20 px-4 bg-black border-t border-white/5 overflow-hidden"
      ref={ref}
    >


      {/* Animated background accents - Behind video */}
      <motion.div
        className="absolute top-1/3 -left-32 w-64 h-64 bg-cyan-500 rounded-full blur-3xl -z-10 pointer-events-none"
        animate={{ opacity: [0.01, 0.03, 0.01], x: [-50, 50, -50] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500 rounded-full blur-3xl -z-10 pointer-events-none"
        animate={{ opacity: [0.01, 0.02, 0.01], x: [50, -50, 50] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content Layer - Relative to ensure it stays on top */}
      <div className="max-w-full px-8 md:px-16 relative z-10">
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(16px)' }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : { opacity: 0, y: 50, scale: 0.9, filter: 'blur(16px)' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white drop-shadow-lg">
            Zaufane Współprace
          </h2>
          <p className="text-gray-300 text-base md:text-lg drop-shadow-md">
            Partnerstwo z twórcami, których wspieramy
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(12px)' }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          <div
            className="overflow-hidden py-8"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              className="flex gap-8 md:gap-10 will-change-transform pl-4 md:pl-8"
              animate={{
                x: [-creators.length * 180 - creators.length * 40, 0],
              }}
              transition={{
                x: {
                  duration: isHovering ? 60 : 45,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                },
              }}
            >
              {duplicatedCreators.map((creator, index) => (
                <motion.a
                  key={`${creator.id}-${index}`}
                  href={creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center flex-shrink-0 group cursor-pointer transition-all duration-300"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 overflow-hidden shadow-lg shadow-black/40 group-hover:border-white/50 group-hover:shadow-xl group-hover:shadow-white/10 transition-all duration-500 backdrop-blur-sm bg-black"
                    >
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        draggable={false}
                      />

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <svg
                          className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-lg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.p
                    className="mt-6 text-center font-semibold text-white text-sm md:text-base tracking-tight max-w-[120px] md:max-w-[160px] truncate group-hover:text-gray-300 transition-colors duration-500 drop-shadow-md"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{
                      delay: 0.3 + (index % creators.length) * 0.04,
                      duration: 0.7,
                      ease: 'easeOut',
                    }}
                  >
                    {creator.name}
                  </motion.p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
