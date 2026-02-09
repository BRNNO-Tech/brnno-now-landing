import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import sections
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import BookJobSection from './sections/BookJobSection';
import ProSection from './sections/ProSection';
import OnDemandSection from './sections/OnDemandSection';
import FastSection from './sections/FastSection';
import TrustSection from './sections/TrustSection';
import ComeToYouSection from './sections/ComeToYouSection';
import EasyUseSection from './sections/EasyUseSection';
import ClosingSection from './sections/ClosingSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Wait for all sections to mount and create their ScrollTriggers
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap - optimized
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.03 && value <= r.end + 0.03);
            if (!inPinned) return value;
            
            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.12, max: 0.28 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-dark">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections with z-index stacking */}
      <main className="relative">
        <HeroSection className="z-10" />
        <BookJobSection className="z-20" />
        <ProSection className="z-30" />
        <OnDemandSection className="z-40" />
        <FastSection className="z-50" />
        <TrustSection className="z-[60]" />
        <ComeToYouSection className="z-[70]" />
        <EasyUseSection className="z-[80]" />
        <ClosingSection className="z-[90]" />
      </main>
    </div>
  );
}

export default App;
