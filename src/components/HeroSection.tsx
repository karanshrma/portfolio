import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Scene3D from './Scene3D';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Split text animation for name
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char');
      tl.from(chars, {
        y: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.04,
        duration: 1.2,
      });
    }

    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.4');

    tl.from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.3');
  }, []);

  const nameChars = 'Karan Sharma'.split('').map((char, i) => (
    <span
      key={i}
      className="char inline-block"
      style={{ perspective: '500px' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />
      <div className="relative z-10 text-center section-padding">
        <p className="text-muted-foreground font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-6">
          Mobile & Web Developer
        </p>
        <h1
          ref={nameRef}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight glow-text mb-6"
          style={{ overflow: 'hidden' }}
        >
          {nameChars}
        </h1>
        <p
          ref={subtitleRef}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
        >
          Building seamless, efficient, and visually appealing mobile & web
          applications with a focus on user experience.
        </p>
        <div ref={ctaRef} className="mt-12">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider hover:gap-4 transition-all duration-300"
          >
            EXPLORE WORK
            <ArrowDown size={16} />
          </a>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
