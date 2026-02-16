'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const opacity = Math.min(scrolled / 300, 1);
      setBgOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const ease = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress;
        
        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <nav 
      className="fixed w-full top-0 z-50 transition-all duration-700 ease-in-out"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity * 0.7})`,
        backdropFilter: bgOpacity > 0.1 ? 'blur(10px)' : 'none',
        borderBottom: bgOpacity > 0.1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between md:justify-center items-center gap-8">
        {/* Home Button */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="transition-all duration-500 p-2 rounded-lg text-gray-400 hover:text-white"
          title="Strona Główna"
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <div className="w-6 h-6 transition-all duration-500 hover:scale-110">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
        </button>

        {/* Portfolio Button */}
        <button 
          onClick={() => scrollToSection('portfolio')} 
          className="transition-all duration-500 p-2 rounded-lg text-gray-400 hover:text-white"
          title="Portfolio - Wybrane Prace"
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <div className="w-6 h-6 transition-all duration-500 hover:scale-110">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM4 9a1 1 0 100 2h8a1 1 0 100-2H4z" />
            </svg>
          </div>
        </button>

        {/* FAQ Button */}
        <button 
          onClick={() => scrollToSection('qa')} 
          className="transition-all duration-500 p-2 rounded-lg text-gray-400 hover:text-white"
          title="FAQ - Pytania i Odpowiedzi"
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <div className="w-6 h-6 transition-all duration-500 hover:scale-110">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-7-4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
          </div>
        </button>

        {/* Contact Button */}
        <button 
          onClick={() => scrollToSection('contact')} 
          className="transition-all duration-500 p-2 rounded-lg text-gray-400 hover:text-white"
          title="Kontakt"
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <div className="w-6 h-6 transition-all duration-500 hover:scale-110">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
}
