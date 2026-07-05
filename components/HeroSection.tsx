'use client';

import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="w-full flex-shrink-0 flex items-start justify-between px-16 relative z-10 pt-12 md:pt-16 pb-16 min-h-[calc(100vh-100px)]">
      <div className="max-w-2xl flex flex-col items-start space-y-5 pl-4 mt-2">
        <div className="space-y-1">
          <h2 className="font-righteous text-3xl md:text-4xl text-white/80 tracking-wide">
            Welcome To
          </h2>
          <h1 className="font-righteous text-6xl md:text-[80px] font-normal text-white leading-[1.1] tracking-tight">
            INDI <br /> TECHNOLOGY
          </h1>
        </div>

        <h3 className="font-righteous text-lg md:text-xl text-white tracking-wide">
          Your best Digital Transformation Partner
        </h3>

        <p className="font-rubik text-sm md:text-base text-white/60 leading-relaxed max-w-lg font-light">
          Indi Technology will be delivered the best technology solutions that will help to achieve your Digital Transformation Goals.
        </p>

        <button className="font-righteous px-12 py-3.5 rounded-full text-base text-white bg-white/20 border border-white/10 backdrop-blur-sm shadow-md transition-all hover:bg-white/30 hover:scale-105 active:scale-95 cursor-pointer">
          Explore
        </button>
      </div>

      <div className="relative flex items-start justify-end pr-4 w-[35%]">
        <div className="animate-floating transform -translate-y-4">
          <Image
            src="/mentahan-logo/rocketindi.png"
            alt="INDI Rocket"
            width={258}
            height={518}
            className="object-contain select-none"
            priority
          />
        </div>
      </div>
    </main>
  );
}
