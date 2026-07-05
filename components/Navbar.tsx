'use client';

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-indi');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = {
    knowledgeSharing: {
      label: "Knowledge Sharing",
      items: [
        "INSIGHTS",
        "TECH STACK",
        "ACHIEVEMENT & CERTIFICATION"
      ]
    },
    informasi: {
      label: "Informasi",
      items: [
        "FAQ",
        "INDUSTRI & PARTNERS",
        "OUR EXPERIENCES",
        "THOUGHT LEADERSHIP",
        "Talent Incubation & Client Onboarding"
      ]
    },
    services: {
      label: "Services",
      items: [
        "TECHNOLOGY SOLUTIONS",
        "INNOVATION DEVELOPMENT",
        "TALENT DEVELOPMENT"
      ]
    }
  };

  return (
    <header className="w-full px-12 py-6 z-50 flex-shrink-0 relative">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Image
            src="/mentahan-logo/logoindi.png"
            alt="INDI Technology Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 max-w-[850px] h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/5 flex items-center justify-center px-8 shadow-inner">
          <ul className="flex items-center justify-around w-full font-rubik text-white/90 text-[15px] tracking-wide gap-6">
            
            {/* Company - Click to scroll to About */}
            <li 
              className="cursor-pointer text-white/90 hover:text-white transition-colors font-medium"
              onClick={scrollToAbout}
            >
              Company
            </li>

            {/* Knowledge Sharing Dropdown - seperti design */}
            <li 
              className="relative cursor-pointer text-white/90 hover:text-white transition-colors"
              onMouseEnter={() => setActiveDropdown('knowledgeSharing')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {menuItems.knowledgeSharing.label}
              {activeDropdown === 'knowledgeSharing' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                  onMouseEnter={() => setActiveDropdown('knowledgeSharing')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-[#6B9EDE]/95 backdrop-blur-md rounded-2xl py-4 px-6 shadow-xl w-max">
                    {menuItems.knowledgeSharing.items.map((item, idx) => (
                      <div key={idx} className="px-3 py-2.5 hover:bg-[#012267] transition-colors rounded-lg text-white text-sm font-rubik cursor-pointer whitespace-nowrap">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Informasi Dropdown - hover biru tua */}
            <li 
              className="relative cursor-pointer text-white/90 hover:text-white transition-colors"
              onMouseEnter={() => setActiveDropdown('informasi')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {menuItems.informasi.label}
              {activeDropdown === 'informasi' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                  onMouseEnter={() => setActiveDropdown('informasi')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-[#6B9EDE]/95 backdrop-blur-md rounded-2xl py-4 px-6 shadow-xl w-max">
                    {menuItems.informasi.items.map((item, idx) => (
                      <div key={idx} className="px-3 py-2.5 hover:bg-[#012267] transition-colors rounded-lg text-white text-sm font-rubik cursor-pointer whitespace-nowrap">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Services Dropdown - hover biru tua */}
            <li 
              className="relative cursor-pointer text-white/90 hover:text-white transition-colors"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {menuItems.services.label}
              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-[#6B9EDE]/95 backdrop-blur-md rounded-2xl py-4 px-6 shadow-xl w-max">
                    {menuItems.services.items.map((item, idx) => (
                      <div key={idx} className="px-3 py-2.5 hover:bg-[#012267] transition-colors rounded-lg text-white text-sm font-rubik cursor-pointer whitespace-nowrap">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Right Side Menu */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/5 rounded-full px-5 py-2 h-14">
          <button className="flex flex-col gap-1.5 justify-center items-center w-6 cursor-pointer group">
            <span className="block w-6 h-0.5 bg-white group-hover:bg-cyan-300 transition-colors"></span>
            <span className="block w-6 h-0.5 bg-white group-hover:bg-cyan-300 transition-colors"></span>
            <span className="block w-6 h-0.5 bg-white group-hover:bg-cyan-300 transition-colors"></span>
          </button>
          <div className="w-px h-6 bg-white/20"></div>
          <Image
            src="/mentahan-logo/rocketindinav.png"
            alt="Rocket Icon"
            width={32}
            height={32}
            className="object-contain cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </header>
  );
}
