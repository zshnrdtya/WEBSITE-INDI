'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HowWeHelpSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
  }, []);

  const cards = [
    {
      icon: "/how-we/laptop.png",
      title: "Tech Solution",
      description: "With our capabilities of technology, we are able to assist our partners to achieve their digital transformation goals with the righteous technology solution their need.",
      animation: "left"
    },
    {
      icon: "/how-we/laptop.png",
      title: "Innovation Development",
      description: "We have a great desire to produce innovative technology that will able to improve society and encourage our partners with emerging technology and proper toward their goals.",
      animation: "bottom"
    },
    {
      icon: "/how-we/laptop.png",
      title: "Talent Development",
      description: "As we believe peoples are the most essential part to produce appropriate technology for a brighter future, we are enthusiastic to encourage them to improve their skills in technology.",
      animation: "right"
    }
  ];

  const getAnimationStyle = (animation: string) => {
    if (!isVisible) {
      switch (animation) {
        case "left":
          return { opacity: 0, transform: "translateX(-100px)" };
        case "right":
          return { opacity: 0, transform: "translateX(100px)" };
        case "bottom":
          return { opacity: 0, transform: "translateY(100px)" };
        default:
          return { opacity: 0 };
      }
    }
    return { opacity: 1, transform: "translate(0, 0)" };
  };

  return (
    <section ref={sectionRef} className="w-full h-screen max-h-screen relative overflow-hidden flex flex-col" style={{ backgroundColor: '#BECFFF' }}>
      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 opacity-70 pointer-events-none z-0">
        <Image 
          src="/how-we/meteor.png"
          alt="Meteor decoration"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-8 py-8 flex-1 flex flex-col items-center relative z-10">
        {/* Title */}
        <h2 className="font-righteous text-[42px] mb-8 text-center" style={{ color: '#043192' }}>
          How we help You?
        </h2>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-105"
              style={getAnimationStyle(card.animation)}
            >
              {/* Icon */}
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <Image 
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-righteous text-lg mb-3" style={{ color: '#043192' }}>
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-righteous text-xs leading-relaxed" style={{ color: '#043192' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Character Image with 50% opacity and animation */}
        <div 
          className="relative z-20 -mb-24 opacity-50 transition-all duration-700 ease-out"
          style={isVisible ? { opacity: 0.5, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(100px)" }}
        >
          <Image 
            src="/how-we/digitaro.png"
            alt="Digitaro Character"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Gradient Waves */}
      <div className="w-full h-24 relative mt-auto shrink-0">
        <div className="absolute inset-x-0 bottom-0 h-full" style={{ backgroundColor: '#8BAAFF' }}></div>
        <div className="absolute inset-x-0 bottom-0 h-2/3" style={{ backgroundColor: '#6885C3' }}></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ backgroundColor: '#6885C3' }}></div>
      </div>
    </section>
  );
}
