'use client';

import { useEffect, useState } from 'react';
import { LoadingProvider, useLoading } from '@/context/LoadingContext';
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Loading from "@/components/Loading";
import CreatorsCarousel from "@/components/CreatorsCarousel";
import Portfolio from "@/components/Portfolio";
import QA from "@/components/QA";
import Contact from "@/components/Contact";

function PageContent() {
  const { isLoading } = useLoading();
  const [pageLoaded, setPageLoaded] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Ensure scroll stays at top during loader
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setPageLoaded(true);
      // Scroll to top when loader finishes
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [isLoading]);

  // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <>
      {!pageLoaded && <Loading />}
      <div className="bg-black text-white">
        <Navigation />
        <Hero />
        <CreatorsCarousel />
        <Portfolio />
        <QA />
        <Contact />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <LoadingProvider>
      <PageContent />
    </LoadingProvider>
  );
}
