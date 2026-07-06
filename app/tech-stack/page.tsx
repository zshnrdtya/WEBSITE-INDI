'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TechStackPage() {
  // Tech Stack Categories based on design
  const techCategories = {
    webEcommerce: {
      title: "Web & E-Commerce Development",
      logos: [
        { src: "/logo-techstack/wordpress.png", alt: "WordPress" },
        { src: "/logo-techstack/magento.png", alt: "Magento" }
      ]
    },
    mobileApp: {
      title: "Mobile Application Engineering",
      logos: [
        { src: "/logo-techstack/ios.png", alt: "iOS" },
        { src: "/logo-techstack/flutter.png", alt: "Flutter" },
        { src: "/logo-techstack/android.png", alt: "Android" }
      ]
    },
    frontEnd: {
      title: "Front-End & Interactive Web Systems",
      logos: [
        { src: "/logo-techstack/vue.png", alt: "Vue.js" },
        { src: "/logo-techstack/angular.png", alt: "Angular" },
        { src: "/logo-techstack/react.png", alt: "React" }
      ]
    },
    backEnd: {
      title: "Advanced Back-End & AI Integration",
      logos: [
        { src: "/logo-techstack/nodejs.png", alt: "Node.js" },
        { src: "/logo-techstack/ruby.png", alt: "Ruby on Rails" },
        { src: "/logo-techstack/c++.png", alt: "C++" },
        { src: "/logo-techstack/python.png", alt: "Python" },
        { src: "/logo-techstack/golang.png", alt: "Go" },
        { src: "/logo-techstack/laravel.png", alt: "Laravel" }
      ]
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Navbar with transparent background overlay on white */}
      <div className="relative bg-gradient-to-b from-[#041124]/5 to-transparent">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="font-righteous text-5xl md:text-6xl text-center mb-16" style={{ color: '#012267' }}>
            OUR TECH STACK
          </h1>

          {/* Top 3 Cards - Web, Mobile, Frontend */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Web & E-Commerce Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
              <h3 className="font-rubik text-sm text-center mb-8 text-[#6B9EDE] font-medium">
                {techCategories.webEcommerce.title}
              </h3>
              <div className="flex flex-col items-center gap-8 w-full">
                {techCategories.webEcommerce.logos.map((logo, idx) => (
                  <div key={idx} className="relative w-32 h-24 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={80}
                      className="object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Application Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
              <h3 className="font-rubik text-sm text-center mb-8 text-[#6B9EDE] font-medium">
                {techCategories.mobileApp.title}
              </h3>
              <div className="flex flex-col items-center gap-8 w-full">
                {techCategories.mobileApp.logos.map((logo, idx) => (
                  <div key={idx} className="relative w-32 h-20 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={70}
                      className="object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Front-End Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
              <h3 className="font-rubik text-sm text-center mb-8 text-[#6B9EDE] font-medium">
                {techCategories.frontEnd.title}
              </h3>
              <div className="flex flex-col items-center gap-8 w-full">
                {techCategories.frontEnd.logos.map((logo, idx) => (
                  <div key={idx} className="relative w-32 h-20 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={70}
                      className="object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Big Card - Backend & AI */}
          <div className="bg-white rounded-3xl shadow-lg p-12 flex flex-col items-center border border-gray-100">
            <h3 className="font-rubik text-base text-center mb-12 text-[#6B9EDE] font-medium">
              {techCategories.backEnd.title}
            </h3>
            
            {/* 2 Rows of logos - 3 per row */}
            <div className="w-full max-w-4xl">
              {/* First Row - Node, Rails, C++ */}
              <div className="grid grid-cols-3 gap-12 mb-12">
                {techCategories.backEnd.logos.slice(0, 3).map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <div className="relative w-40 h-28">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - Python, Go, Laravel */}
              <div className="grid grid-cols-3 gap-12">
                {techCategories.backEnd.logos.slice(3, 6).map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <div className="relative w-40 h-28">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
