'use client';

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-indi" className="w-full bg-white relative pt-16 pb-0 overflow-hidden flex flex-col">
      {/* World Map Background Overlay */}
      <div className="absolute inset-0 -top-12 opacity-100 pointer-events-none z-0 flex items-center justify-center">
        <Image 
          src="/mentahan-logo/worldmap 1.png"
          alt="World Map Background"
          fill
          className="object-contain scale-105 opacity-65 select-none"
        />
      </div>

      {/* ABOUT & logoindi.png */}
      <div className="relative z-10 w-full px-6 md:px-8 max-w-7xl flex flex-col align-left">
        <div className="mb-6 flex items-center gap-2">
          <h2 className="font-righteous text-[46px] tracking-wide leading-none flex items-center">
            <span style={{ color: '#808080' }}>ABO</span>
            <span style={{ color: '#012267' }}>UT</span>
          </h2>
          <div className="relative w-28 h-12 mt-1">
            <Image
              src="/mentahan-logo/logoindi.png"
              alt="Indi Logo Title"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>
      </div>

      {/* Vision Area Container */}
      <div className="relative z-10 w-full px-16 max-w-7xl mx-auto flex flex-col items-center mt-2">
        <div className="w-full relative flex items-center justify-center min-h-[160px] mt-10 md:mt-14 mb-10">
          {/* Teks Visi Tengah */}
          <div className="flex flex-col items-center text-center space-y-4 max-w-2xl z-20 mx-auto">
            <h3 className="font-righteous text-2xl md:text-[26px] tracking-wider" style={{ color: '#0261A4' }}>
              OUR VISION
            </h3>
            <p className="font-righteous text-2xl md:text-[32px] leading-[1.3] tracking-wide">
              <span style={{ color: '#000000' }}>&ldquo;</span>
              <span style={{ color: '#6885C3' }}>Shaping</span>{' '}
              <span style={{ color: '#043192' }}>the future</span>{' '}
              <span style={{ color: '#6885C3' }}>and</span>{' '}
              <span style={{ color: '#043192' }}>humanity</span>{' '}
              <span style={{ color: '#000000' }}>through technology&rdquo;</span>
            </p>
          </div>
        </div>
      </div>

      {/* Digitaro Rocket 2 */}
      <div className="absolute right-0 top-[15%] z-30 pointer-events-none hidden lg:block">
        <Image
          src="/mentahan-logo/digitaro rocket 2.png"
          alt="INDI Digitaro Rocket 2"
          width={320} 
          height={500}
          className="object-contain drop-shadow-[0_20px_40px_rgba(4,49,146,0.15)] translate-x-2"
        />
      </div>

      {/* AREA FOTO BERSAMA & OVERLAY AWAN DESKRIPSI */}
      <div className="w-full relative z-10 mt-auto flex flex-col justify-end">
        
        {/* Foto Bersama */}
        <div className="w-full overflow-hidden relative">
          <Image 
            src="/mentahan-logo/fotobersama.png" 
            alt="INDI Technology Team" 
            width={1920}
            height={700}
            className="w-full h-auto object-cover block"
            priority
          />

          {/* FINAL REVISI: Dinaikkan ke translate-y-[55%] dan pb-20 biar kabut awan bener-bener turun di bawah dagu/leher tim */}
          <div className="absolute bottom-0 inset-x-0 min-h-[160px] flex items-center justify-center z-20 transform translate-y-[55%]">
            {/* Background Awan Full Lebar */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/mentahan-logo/awan.png"
                alt="Cloud Overlay Background"
                fill
                className="object-cover object-bottom opacity-100"
              />
            </div>
            
            {/* Teks Deskripsi */}
            <div className="w-full max-w-5xl text-center px-8 pt-2 pb-20 relative z-10">
              <p className="font-rubik text-[17px] md:text-[19px] leading-relaxed tracking-normal">
                <span style={{ color: '#043192' }} className="font-bold">INDI Technology</span>{' '}
                <span style={{ color: '#6885C3' }} className="font-normal">
                  provides agile, end-to-end digital solutions, from strategic consulting to full-scale implementation, built around what modern businesses need.
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
