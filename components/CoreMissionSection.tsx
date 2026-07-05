'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CoreMissionSection() {
  const [animationState, setAnimationState] = useState<'idle' | 'spreading' | 'rotating'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animationState === 'idle') {
          // Start spreading animation
          setAnimationState('spreading');
          
          // After 1.5 seconds, start rotating
          setTimeout(() => {
            setAnimationState('rotating');
          }, 1500);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [animationState]);
  const innovationItems = [
    { src: "/ourcore-mission/image 10.png", title: "Emerging\nTechnology" },
    { src: "/ourcore-mission/image 11.png", title: "Research &\nIntelligence Lab" },
    { src: "/ourcore-mission/image 12.png", title: "Digital Product\nTransformation" }
  ];

  const talentItems = [
    { src: "/ourcore-mission/image 13.png", title: "Training &\nSeminar" },
    { src: "/ourcore-mission/image 14.png", title: "Talent Incubation\nProgram" },
    { src: "/ourcore-mission/image 15.png", title: "High-Tech\nWorkforce" }
  ];

  const technologyNodes = [
    { angle: 270, src: "/ourcore-mission/image 17.png", alt: "Tech 1" },
    { angle: 321.4, src: "/ourcore-mission/image 17.png", alt: "Tech 2" },
    { angle: 12.8, src: "/ourcore-mission/image 17.png", alt: "Tech 3" },
    { angle: 64.3, src: "/ourcore-mission/image 17.png", alt: "Tech 4" },
    { angle: 115.7, src: "/ourcore-mission/image 17.png", alt: "Tech 5" },
    { angle: 167.1, src: "/ourcore-mission/image 17.png", alt: "Tech 6" },
    { angle: 218.6, src: "/ourcore-mission/image 17.png", alt: "Tech 7" },
  ];

  return (
    <section ref={sectionRef} className="w-full h-screen max-h-screen bg-white relative overflow-hidden flex flex-col justify-between py-6 select-none">
      {/* Background Layer */}
      <div className="absolute left-0 top-[45%] -translate-y-1/2 z-0 pointer-events-none">
        <Image 
          src="/ourcore-mission/ChatGPT_Image_3_Jul_2026__21.26.41-removebg-preview 1.png"
          alt="INDI Character Left"
          width={260}
          height={260}
          className="object-contain opacity-90"
          priority
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <Image 
          src="/ourcore-mission/ChatGPT_Image_3_Jul_2026__15.38.45-removebg-preview 1.png"
          alt="Rocket Center"
          width={320}
          height={320}
          className="object-contain opacity-90"
          priority
        />
      </div>

      <div className="absolute top-0 right-0 z-0 pointer-events-none">
        <Image 
          src="/ourcore-mission/lunieth_Shop___Redbubble-removebg-preview 2 (2).png" 
          alt="Icon Right Top"
          width={320}
          height={320}
          className="object-contain opacity-90"
        />
      </div>

      {/* Section Title */}
      <div className="w-full text-center mt-2 z-20 shrink-0">
        <h2 className="font-righteous text-[42px] tracking-wide" style={{ color: '#0261A4' }}>
          OUR CORE MISSION
        </h2>
      </div>

      {/* Main Grid */}
      <div className="w-full max-w-[85rem] mx-auto px-8 flex-1 grid grid-cols-2 items-center relative z-20 h-full">
        
        {/* Left Side: Innovation & Talent Development */}
        <div className="flex flex-col justify-center space-y-10 pl-8 justify-self-start">
          
          {/* Innovation Development */}
          <div className="space-y-4">
            <h3 className="font-righteous text-xl tracking-wide pl-2" style={{ color: '#0261A4' }}>
              Innovation Development
            </h3>
            
            <div className="flex items-center">
              {innovationItems.map((item, idx, arr) => (
                <div key={idx} className="flex items-center">
                  <div 
                    className={`flex flex-col items-center gap-2.5 w-28 transition-all duration-1000`}
                    style={{
                      opacity: animationState === 'idle' ? 0 : 1,
                      transform: animationState === 'idle' ? 'scale(0.3)' : 'scale(1)',
                      transitionDelay: `${idx * 150}ms`
                    }}
                  >
                    <div 
                      className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md" 
                      style={{ backgroundColor: '#0261A4' }}
                    >
                      <Image src={item.src} alt={item.title} width={36} height={36} className="object-contain" />
                    </div>
                    <p className="font-righteous text-[11px] text-center leading-tight whitespace-pre-line" style={{ color: '#0261A4' }}>
                      {item.title}
                    </p>
                  </div>
                  {idx < arr.length - 1 && (
                    <div 
                      className="w-14 h-[2px] -translate-y-[22px] transition-all duration-1000" 
                      style={{ 
                        backgroundColor: '#0261A4',
                        opacity: animationState === 'idle' ? 0 : 1,
                        transform: animationState === 'idle' ? 'scaleX(0)' : 'scaleX(1)',
                        transitionDelay: `${(idx + 0.5) * 150}ms`
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Talent Development */}
          <div className="space-y-4">
            <h3 className="font-righteous text-xl tracking-wide pl-2" style={{ color: '#0261A4' }}>
              Talent Development
            </h3>
            
            <div className="flex items-center">
              {talentItems.map((item, idx, arr) => (
                <div key={idx} className="flex items-center">
                  <div 
                    className={`flex flex-col items-center gap-2.5 w-28 transition-all duration-1000`}
                    style={{
                      opacity: animationState === 'idle' ? 0 : 1,
                      transform: animationState === 'idle' ? 'scale(0.3)' : 'scale(1)',
                      transitionDelay: `${(idx + 3) * 150}ms`
                    }}
                  >
                    <div 
                      className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md" 
                      style={{ backgroundColor: '#0261A4' }}
                    >
                      <Image src={item.src} alt={item.title} width={36} height={36} className="object-contain" />
                    </div>
                    <p className="font-righteous text-[11px] text-center leading-tight whitespace-pre-line" style={{ color: '#0261A4' }}>
                      {item.title}
                    </p>
                  </div>
                  {idx < arr.length - 1 && (
                    <div 
                      className="w-14 h-[2px] -translate-y-[22px] transition-all duration-1000" 
                      style={{ 
                        backgroundColor: '#0261A4',
                        opacity: animationState === 'idle' ? 0 : 1,
                        transform: animationState === 'idle' ? 'scaleX(0)' : 'scaleX(1)',
                        transitionDelay: `${(idx + 3.5) * 150}ms`
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Technology Solutions */}
        <div className="flex flex-col items-center justify-center justify-self-end pr-10">
          <h3 className="font-righteous text-xl tracking-wide mb-14" style={{ color: '#0261A4' }}>
            Technology Solutions
          </h3>

          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Rotating Circle Border */}
            <div 
              className="absolute inset-0 rounded-full border-2 transition-all duration-1000" 
              style={{ 
                borderColor: '#0261A4',
                opacity: animationState === 'idle' ? 0 : 1,
                transform: animationState === 'idle' ? 'scale(0.3)' : 'scale(1)',
                borderStyle: 'dashed',
                animation: animationState === 'rotating' ? 'rotate-around 20s linear infinite' : 'none'
              }}
            ></div>

            {/* Static Container for Nodes and Labels */}
            <div className="absolute inset-0">
              {technologyNodes.map((node, index) => {
                const r = 144; // radius in pixels
                const x = r * Math.cos((node.angle * Math.PI) / 180);
                const y = r * Math.sin((node.angle * Math.PI) / 180);
                const delay = index * 100;
                
                return (
                  <div 
                    key={index} 
                    className="absolute top-1/2 left-1/2 z-20 flex flex-col items-center group transition-all duration-1000"
                    style={{
                      transform: animationState === 'idle'
                        ? 'translate(-50%, -50%)'
                        : `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      opacity: animationState === 'idle' ? 0 : 1,
                      transitionDelay: `${delay}ms`
                    }}
                  >
                    <div 
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-sky-100 shadow-sm transition-all duration-300 group-hover:scale-115 group-hover:bg-sky-50" 
                      style={{ backgroundColor: '#0261A4' }}
                    >
                      <Image src={node.src} alt={node.alt} width={22} height={22} className="object-contain" />
                    </div>
                    <p className="font-righteous text-[8px] text-center tracking-tight mt-0.5 bg-white/95 px-1 rounded shadow-2xs pointer-events-none opacity-90 whitespace-nowrap" style={{ color: '#0261A4' }}>
                      Emerging Tech
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="h-2 shrink-0"></div>
    </section>
  );
}
