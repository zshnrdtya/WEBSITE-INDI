'use client';

import Image from "next/image";

export default function OurExperiencesSection() {
  return (
    <section className="w-full h-screen max-h-screen relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#041E5C' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/our-experience/background.png"
          alt="Space Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Digitaro Character - Larger and positioned at bottom left */}
      <div className="absolute left-0 bottom-0 z-10">
        <Image 
          src="/our-experience/digitaro.png"
          alt="Digitaro Character"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center max-w-5xl mx-auto px-8">
        {/* Title */}
        <h2 className="font-righteous text-5xl mb-12 text-white text-center tracking-wide">
          OUR EXPERIENCES
        </h2>

        {/* Glass Card */}
        <div className="relative w-full max-w-4xl">
          {/* Liquid Glass Effect Background */}
          <div 
            className="absolute inset-0 rounded-[40px] backdrop-blur-xl border border-white/20"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          ></div>

          {/* Card Content */}
          <div className="relative p-12 text-center space-y-4">
            <p className="text-white text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-reem-kufi-fun)' }}>
              We are ready to support you achieve your Digital Transformation Goals.
            </p>
            <p className="text-white text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-reem-kufi-fun)' }}>
              We Achieve the 4.9 <span className="text-yellow-400 text-3xl">⭐</span> from 400+ Reviews on Google Business Profile
            </p>
          </div>
        </div>

        {/* See Reviews Link */}
        <a 
          href="#reviews" 
          className="mt-8 text-white text-xl underline hover:text-blue-300 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-reem-kufi-fun)' }}
        >
          See rivews
        </a>
      </div>
    </section>
  );
}
