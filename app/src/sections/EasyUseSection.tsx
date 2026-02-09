import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EasyUseSectionProps {
  className?: string;
}

const EasyUseSection = ({ className = '' }: EasyUseSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const image = content.querySelector('.image-animate');
      const text = content.querySelector('.text-animate');
      const micro = content.querySelector('.micro-animate');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.5,
        }
      });

      scrollTl
        .fromTo(image,
          { x: '-100%', opacity: 0 },
          { x: '0%', opacity: 1, ease: 'none' },
          0
        )
        .fromTo(text,
          { x: '60%', opacity: 0 },
          { x: '0%', opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo(micro,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.15
        );

      scrollTl
        .to(image, { x: '-25%', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(text, { x: '25%', opacity: 0, ease: 'power2.in' }, 0.7)
        .to(micro, { y: 10, opacity: 0, ease: 'power2.in' }, 0.75);

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`section-pinned bg-dark ${className}`}
    >
      <div ref={contentRef} className="absolute inset-0">
        {/* Left Hero Image - safe margins */}
        <div 
          className="image-animate absolute left-[5vw] top-1/2 -translate-y-1/2 w-[42vw] md:w-[40vw] h-[60vh] md:h-[70vh]"
          style={{ opacity: 0 }}
        >
          <img 
            src="/images/easy_phone.jpg" 
            alt="Phone app interface"
            className="editorial-image w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Right Hairline Rule */}
        <div className="absolute left-[52vw] top-[15vh] h-[70vh] hairline origin-top hidden md:block" />

        {/* Right Text Block - safe positioning */}
        <div 
          className="text-animate absolute right-[5vw] md:left-[56vw] left-[5vw] top-[15vh] md:w-[38vw] max-w-[500px]"
          style={{ opacity: 0 }}
        >
          <p className="label-mono text-text-secondary mb-4">BRNNO NOW</p>
          
          <h2 className="headline-lg text-white mb-6 md:mb-8">
            EASY TO<br />USE
          </h2>
          
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            Book, reschedule, tip, and review—all in a few taps. No calls, no cash, no hassle.
          </p>
          
          <button className="btn-accent flex items-center gap-2">
            Get the app
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Bottom Micro UI - safe bottom margin */}
        <div 
          className="micro-animate absolute left-[5vw] md:left-[56vw] bottom-[5vh] flex items-center gap-3"
          style={{ opacity: 0 }}
        >
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow dot-pulse" />
            <span className="w-2 h-2 rounded-full bg-yellow dot-pulse" style={{ animationDelay: '0.3s' }} />
            <span className="w-2 h-2 rounded-full bg-yellow dot-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
          <span className="text-sm text-text-secondary flex items-center gap-2">
            <Smartphone size={14} className="text-yellow" />
            iOS + Android
          </span>
        </div>
      </div>
    </section>
  );
};

export default EasyUseSection;
