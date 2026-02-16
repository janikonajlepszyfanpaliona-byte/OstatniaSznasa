'use client';

import { motion } from 'framer-motion';
import { useOnScreen } from './useOnScreen';

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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 1,
      delay: i * 0.1,
    },
  }),
};

export default function Creators() {
  const [ref, isVisible] = useOnScreen(0.15);

  return (
    <section
      id="creators"
      className="py-20 px-4 bg-black border-t border-b border-white/5"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            Creators I Work With
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Collaborating with talented creators to bring visions to life
          </p>
        </motion.div>

        {/* Creators Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              className="flex flex-col items-center group"
              variants={itemVariants}
            >
              {/* Avatar Container */}
              <motion.div
                className="relative mb-4 w-full aspect-square"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 bg-black rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Avatar Image */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm bg-black group-hover:border-white/30 transition-all duration-500">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>

                {/* Soft shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-black/50 pointer-events-none" />
              </motion.div>

              {/* Name */}
              <motion.p
                className="text-center font-semibold text-white text-sm md:text-base tracking-wide group-hover:text-gray-300 transition-colors duration-300"
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.6 }}
              >
                {creator.name}
              </motion.p>

              {/* Decorative dot below name */}
              <motion.div
                className="mt-2 w-1 h-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={isVisible ? { scaleX: [0, 1, 0] } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Background accents */}
        <motion.div
          className="absolute top-1/2 left-0 w-72 h-72 bg-black rounded-full blur-3xl opacity-5 -z-10"
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-72 h-72 bg-black rounded-full blur-3xl opacity-5 -z-10"
          animate={{ x: [100, -100, 100] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
