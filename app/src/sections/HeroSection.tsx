import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const elements = content.querySelectorAll('.hero-element');

      gsap.set(elements, { opacity: 1, y: 0 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=80%',
          pin: true,
          scrub: 0.5,
          onLeaveBack: () => {
            gsap.set(elements, { opacity: 1, y: 0, clearProps: 'transform' });
          }
        }
      });

      scrollTl.fromTo(elements,
        { y: 0, opacity: 1 },
        { y: -60, opacity: 0, stagger: 0.03, ease: 'power2.in' },
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-pinned bg-dark ${className}`}
    >
      <div ref={contentRef} className="absolute inset-0 flex items-center justify-center">
        {/* Hero Image - centered with safe margins */}
        <div className="hero-element absolute w-[80vw] md:w-[65vw] lg:w-[58vw] max-h-[65vh] aspect-[16/10]" style={{ top: '10%' }}>
          <img
            src="/images/hero_detailing.jpg"
            alt="Professional car detailing"
            className="w-full h-full object-cover rounded-[24px]"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30 rounded-[24px]" />
        </div>

        {/* Headline */}
        <h1 className="hero-element absolute top-[38%] left-1/2 -translate-x-1/2 text-center text-4xl md:text-5xl lg:text-6xl font-semibold text-white z-10 whitespace-nowrap px-4 leading-tight">
          Drive Something You're Proud Of.
        </h1>

        {/* Subheadline */}
        <p className="hero-element absolute top-[48%] left-1/2 -translate-x-1/2 text-center text-text-secondary text-base md:text-lg max-w-md z-10 px-4">
          On-demand mobile detailing, delivered to your door. Book in minutes.
        </p>

        {/* Bottom-left UI Card - with safe margins */}
        <div className="hero-element absolute left-[5vw] bottom-[5vh] w-[90vw] max-w-[380px] glass-card p-5 md:p-6 z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin size={16} className="text-yellow" />
            </div>
            <span className="text-sm text-text-secondary">Current location</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs text-text-primary flex items-center gap-1.5">
              <Sparkles size={12} className="text-yellow" />
              Exterior Wash
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-text-secondary">
              Full Detail
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-text-secondary">
              Interior Clean
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://app.brnno.com" target="_blank" rel="noopener noreferrer" className="btn-accent text-sm flex-1 inline-flex items-center justify-center">
              Book Now
            </a>
            <a href="https://app.brnno.com/detailer-signup" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1">
              Apply Now
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom-right Caption */}
        <div className="hero-element absolute right-[5vw] bottom-[5vh] text-right z-10 hidden md:block">
          <p className="label-mono text-text-secondary mb-1">BRNNO NOW</p>
          <p className="text-sm text-text-primary">Available in 120+ cities</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
