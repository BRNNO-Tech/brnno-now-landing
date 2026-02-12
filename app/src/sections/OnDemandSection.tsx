import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface OnDemandSectionProps {
  className?: string;
}

const OnDemandSection = ({ className = '' }: OnDemandSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const bg = content.querySelector('.bg-animate');
      const image = content.querySelector('.image-animate');
      const headline = content.querySelector('.headline-animate');
      const card = content.querySelector('.card-animate');
      const label = content.querySelector('.label-animate');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=80%',
          pin: true,
          scrub: 0.5,
        }
      });

      scrollTl
        .fromTo(bg,
          { opacity: 0 },
          { opacity: 1, ease: 'none' },
          0
        )
        .fromTo(image,
          { y: '60%', opacity: 0 },
          { y: '0%', opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo(headline,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, ease: 'none' },
          0.12
        )
        .fromTo(card,
          { x: '40%', opacity: 0 },
          { x: '0%', opacity: 1, ease: 'none' },
          0.18
        )
        .fromTo(label,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.1
        );

      scrollTl
        .to(bg, { opacity: 0, ease: 'power2.in' }, 0.7)
        .to(image, { y: '-30%', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(headline, { scale: 1.03, opacity: 0, ease: 'power2.in' }, 0.7)
        .to(card, { x: '15%', opacity: 0, ease: 'power2.in' }, 0.72)
        .to(label, { opacity: 0, ease: 'power2.in' }, 0.7);

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-pinned ${className}`}
      style={{ backgroundColor: '#0B0B0D' }}
    >
      <div ref={contentRef} className="absolute inset-0">
        {/* Lavender Background */}
        <div
          className="bg-animate absolute inset-0"
          style={{ backgroundColor: '#6B62B8', opacity: 0 }}
        />

        {/* Top-left Label */}
        <div className="label-animate absolute left-[5vw] top-[5vh]" style={{ opacity: 0 }}>
          <p className="label-mono text-white/70">BRNNO NOW</p>
        </div>

        {/* Center Hero Image - safe sizing */}
        <div
          className="image-animate absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[65vw] h-[50vh] md:h-[65vh]"
          style={{ opacity: 0 }}
        >
          <img
            src="/images/ondemand_wash.jpg"
            alt="Hands washing car"
            className="editorial-image w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B62B8]/50 via-transparent to-[#6B62B8]/30 rounded-[24px]" />
        </div>

        {/* Center Headline */}
        <h2
          className="headline-animate absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 headline-xl text-white text-center whitespace-nowrap z-10 px-4"
          style={{ opacity: 0 }}
        >
          ON DEMAND
        </h2>

        {/* Bottom-right UI Card - safe positioning */}
        <div
          className="card-animate absolute right-[5vw] bottom-[5vh] w-[90vw] max-w-[380px] glass-card p-5 md:p-6 z-10"
          style={{ opacity: 0, background: 'rgba(30, 30, 35, 0.9)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Clock size={18} className="text-yellow" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">Request today</h3>
          </div>
          <p className="text-text-secondary text-sm mb-4">
            Morning, afternoon, or evening—pick a time that works.
          </p>
          <a href="https://app.brnno.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-yellow text-sm font-medium hover:gap-3 transition-all">
            Book or Schedule
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OnDemandSection;
