import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Car, Sofa, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ClosingSectionProps {
  className?: string;
}

const ClosingSection = ({ className = '' }: ClosingSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const marketsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Flowing section animations - simplified
      const blocks = [servicesRef.current, stepsRef.current, marketsRef.current];

      blocks.forEach((block) => {
        if (!block) return;
        gsap.fromTo(block,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: 'Exterior Wash',
      description: 'Quick clean, sparkling finish. Perfect for regular maintenance.',
      price: 'From $35'
    },
    {
      icon: Car,
      title: 'Full Detail',
      description: 'Inside and out, like new. Our most comprehensive service.',
      price: 'From $149'
    },
    {
      icon: Sofa,
      title: 'Interior Clean',
      description: 'Seats, mats, vents, and dash. Deep clean for your cabin.',
      price: 'From $89'
    }
  ];

  const steps = [
    { number: '01', title: 'Pick a service', description: 'Choose from our range of detailing packages.' },
    { number: '02', title: 'Set your location', description: 'We come to your driveway, office, or garage.' },
    { number: '03', title: 'Enjoy the results', description: 'Relax while we make your car look brand new.' }
  ];

  const cities = ['Atlanta', 'Austin', 'Chicago', 'Dallas', 'Houston', 'Los Angeles', 'Miami', 'New York', 'Phoenix', 'San Francisco', 'Seattle', '+100 more'];

  return (
    <section 
      ref={sectionRef} 
      id="support"
      className={`relative bg-dark min-h-screen ${className}`}
    >
      {/* Closing Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero_detailing.jpg" 
            alt="Detailing background"
            className="w-full h-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h2 className="headline-lg text-white mb-6">
            Ready when you are.
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-md mx-auto">
            Join thousands of car owners who trust Brnno for their detailing needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-accent text-base px-8 py-4">
              Book Now
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors">
              View pricing
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div 
        ref={servicesRef}
        className="py-24 px-6 lg:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <p className="label-mono text-text-secondary mb-4 text-center">OUR SERVICES</p>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-16">
            Choose your package
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="glass-card p-8 hover:bg-white/[0.08] transition-colors cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow/10 flex items-center justify-center mb-6 group-hover:bg-yellow/20 transition-colors">
                  <service.icon size={28} className="text-yellow" />
                </div>
                <h4 className="font-display font-semibold text-xl text-white mb-2">{service.title}</h4>
                <p className="text-text-secondary text-sm mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow font-medium">{service.price}</span>
                  <ArrowRight size={18} className="text-text-secondary group-hover:text-yellow group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div 
        ref={stepsRef}
        className="py-24 px-6 lg:px-10 bg-white/[0.02]"
      >
        <div className="max-w-6xl mx-auto">
          <p className="label-mono text-text-secondary mb-4 text-center">HOW IT WORKS</p>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-16">
            Simple as 1-2-3
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <span className="font-mono text-5xl md:text-6xl font-bold text-yellow/20 mb-4 block">
                  {step.number}
                </span>
                <h4 className="font-display font-semibold text-xl text-white mb-3">{step.title}</h4>
                <p className="text-text-secondary text-sm max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Markets */}
      <div 
        ref={marketsRef}
        className="py-24 px-6 lg:px-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={16} className="text-yellow" />
            <p className="label-mono text-text-secondary">AVAILABLE IN</p>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-12">
            120+ cities and counting
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {cities.map((city) => (
              <span 
                key={city}
                className="px-4 py-2 rounded-full bg-white/5 text-text-secondary text-sm hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <a href="#" className="font-display font-bold text-2xl text-white tracking-tight mb-4 block">
                BRNNO
              </a>
              <p className="text-text-secondary text-sm">
                Detailing, delivered. Professional car care at your doorstep.
              </p>
            </div>

            {/* Links */}
            <div>
              <h5 className="font-medium text-white mb-4">Services</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Exterior Wash</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Full Detail</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Interior Clean</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Fleet Services</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-4">Company</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white mb-4">Support</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
            <p className="text-text-secondary text-sm mb-4 md:mb-0">
              © 2026 BRNNO Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram size={18} className="text-text-secondary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter size={18} className="text-text-secondary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook size={18} className="text-text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ClosingSection;
