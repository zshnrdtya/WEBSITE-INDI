'use client';

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnershipLogos from "@/components/PartnershipLogos";
import AboutSection from "@/components/AboutSection";
import CoreMissionSection from "@/components/CoreMissionSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import OurExperiencesSection from "@/components/OurExperiencesSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative flex flex-col text-white font-rubik bg-[#041124]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-[100vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mentahan-logo/background.png"
          alt="Background Texture"
          className="w-full h-full object-cover object-center pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#041124]/30 mix-blend-multiply"></div>
      </div>

      <Navbar />
      <HeroSection />
      <PartnershipLogos />
      
      {/* Garis Line Pembatas */}
      <div className="w-full h-[2px] bg-black relative z-20"></div>
      
      <AboutSection />
      <CoreMissionSection />
      <HowWeHelpSection />
      <OurExperiencesSection />
    </div>
  );
}
