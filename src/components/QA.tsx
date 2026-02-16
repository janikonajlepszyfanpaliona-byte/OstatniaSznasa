'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useOnScreen } from './useOnScreen';

const faqItems = [
  {
    question: 'Jaki jest typowy czas realizacji?',
    answer:
      'Standardowy czas realizacji to 3-5 dni roboczych. Ekspresowa realizacja dostępna na żądanie.',
  },
  {
    question: 'Jakiego oprogramowania używasz?',
    answer:
      'Adobe Premiere Pro, After Effects i DaVinci Resolve do korekcji kolorów.',
  },
  {
    question: 'Jak przebiega proces współpracy?',
    answer:
      'Zaczynamy od rozmowy konsultacyjnej, potem przesyłasz materiał. Regularne aktualizacje i rundy poprawek w pakiecie.',
  },
  {
    question: 'Czy zapewniacie udźwiękowienie i muzykę?',
    answer:
      'Tak, muzyka bez tantiem i udźwiękowienie są zawarte w każdym pakiecie.',
  },
  {
    question: 'Jak działają poprawki?',
    answer: 'Nieograniczone poprawki aż będziesz w 100% zadowolony z wyniku.',
  },
];

export default function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isVisible] = useOnScreen(0.1);

  return (
    <section id="qa" className="py-20 px-4 bg-black border-t border-white/10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tight text-white">Pytania i Odpowiedzi</h2>
          <p className="text-gray-400 text-lg">
            Popularne pytania dotyczące mojego procesu pracy, narzędzi i czasu realizacji.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(12px)' }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : { opacity: 0, y: 30, scale: 0.9, filter: 'blur(12px)' }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full group"
              >
                <div className="bg-black border border-white/20 group-hover:border-white/50 rounded-lg p-6 transition-all duration-500 text-left cursor-pointer">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                      {item.question}
                    </span>
                    <motion.svg
                      className="w-5 h-5 text-white flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </motion.svg>
                  </div>
                </div>
              </button>

              {/* Answer - smooth slide and fade */}
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <motion.div
                  className="bg-black border border-white/10 border-t-0 rounded-b-lg p-6 text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {item.answer}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
