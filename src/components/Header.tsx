'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = `transition-all duration-500 font-semibold ${isVisible ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'}`;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-700 transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${isVisible ? 'bg-white/95 backdrop-blur-md border-b border-black/10' : 'bg-transparent'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className={`text-2xl font-black tracking-tighter transition-all duration-600 hover:opacity-80 cursor-pointer ${isVisible ? 'text-black' : 'text-white'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
          WIKAK
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#home" className={navLinkClasses} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
            🏠
          </Link>
          <Link href="#portfolio" className={navLinkClasses} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
            📊
          </Link>
          <Link href="#reviews" className={navLinkClasses} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
            ✨
          </Link>
          <Link href="#contact" className={navLinkClasses} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
            ✉️
          </Link>
        </div>
      </nav>
    </header>
  );
}
