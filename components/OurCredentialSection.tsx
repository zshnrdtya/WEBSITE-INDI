'use client';

import { useState, useEffect, useMemo } from 'react';

export default function OurCredentialSection() {
  const [showInternational, setShowInternational] = useState(false);
  const [loadedNationalLogos, setLoadedNationalLogos] = useState<Set<string>>(new Set());
  const [loadedInternationalLogos, setLoadedInternationalLogos] = useState<Set<string>>(new Set());

  // Logo Nasional (44 items dari folder logo-nasional)
  const nationalLogos = useMemo(() => [
    { src: "/our-credintial/logo-nasional/agnp.jpg", alt: "AGNP" },
    { src: "/our-credintial/logo-nasional/Baznas.png.svg", alt: "Baznas" },
    { src: "/our-credintial/logo-nasional/bekraf.png", alt: "Bekraf" },
    { src: "/our-credintial/logo-nasional/bigid.jpg", alt: "BigID" },
    { src: "/our-credintial/logo-nasional/bkn.png", alt: "BKN" },
    { src: "/our-credintial/logo-nasional/bpsb.jpg", alt: "BPSB" },
    { src: "/our-credintial/logo-nasional/bsn-logo.png", alt: "BSN" },
    { src: "/our-credintial/logo-nasional/citrahome.jpg", alt: "Citra Home" },
    { src: "/our-credintial/logo-nasional/Copy of telkomsel.webp", alt: "Telkomsel" },
    { src: "/our-credintial/logo-nasional/dompet-duafa.jpg", alt: "Dompet Dhuafa" },
    { src: "/our-credintial/logo-nasional/download.jpg", alt: "Partner" },
    { src: "/our-credintial/logo-nasional/dpr ri.png", alt: "DPR RI" },
    { src: "/our-credintial/logo-nasional/esteh.png", alt: "Es Teh Indonesia" },
    { src: "/our-credintial/logo-nasional/gdgindonesia.jpg", alt: "GDG Indonesia" },
    { src: "/our-credintial/logo-nasional/hass.png", alt: "HASS" },
    { src: "/our-credintial/logo-nasional/ifg.svg", alt: "IFG" },
    { src: "/our-credintial/logo-nasional/images.jpg", alt: "Partner" },
    { src: "/our-credintial/logo-nasional/indonesiaforum.webp", alt: "Indonesia Forum" },
    { src: "/our-credintial/logo-nasional/isenmulang.png", alt: "Isen Mulang" },
    { src: "/our-credintial/logo-nasional/itsec.png", alt: "ITSec" },
    { src: "/our-credintial/logo-nasional/jakpro.png", alt: "Jakpro" },
    { src: "/our-credintial/logo-nasional/Jalin_2023.svg.webp", alt: "Jalin" },
    { src: "/our-credintial/logo-nasional/kementerian-pekerjaan-umum-(pu)-logo.png", alt: "Kementerian PU" },
    { src: "/our-credintial/logo-nasional/kotapatriot.jpg", alt: "Kota Patriot" },
    { src: "/our-credintial/logo-nasional/KPU_Logo.svg.webp", alt: "KPU" },
    { src: "/our-credintial/logo-nasional/Logo_Bappenas_Indonesia_(National_Development_Planning_Agency).png", alt: "Bappenas" },
    { src: "/our-credintial/logo-nasional/logo_client_pina-1.png", alt: "PINA" },
    { src: "/our-credintial/logo-nasional/Logo_KAN.png", alt: "KAN" },
    { src: "/our-credintial/logo-nasional/LOGO_KEMENPAREKRAF_(BAPAREKRAF).png", alt: "Kemenparekraf" },
    { src: "/our-credintial/logo-nasional/Logo_Kementerian_Ketenagakerjaan_(2016).png", alt: "Kemenaker" },
    { src: "/our-credintial/logo-nasional/Logo_Kementerian_Komunikasi_dan_Digital_Republik_Indonesia_(2024).svg.webp", alt: "KOMDIGI" },
    { src: "/our-credintial/logo-nasional/Logo_Mahkamah_Agung_RI.png", alt: "MA RI" },
    { src: "/our-credintial/logo-nasional/Logo-Jasa-Raharja.png", alt: "Jasa Raharja" },
    { src: "/our-credintial/logo-nasional/motorola-solutions-vertical-logo.png", alt: "Motorola Solutions" },
    { src: "/our-credintial/logo-nasional/NEC_logo.svg.webp", alt: "NEC" },
    { src: "/our-credintial/logo-nasional/octomobile.png", alt: "Octomobile" },
    { src: "/our-credintial/logo-nasional/pertamina.svg", alt: "Pertamina" },
    { src: "/our-credintial/logo-nasional/phinisi.png", alt: "Phinisi" },
    { src: "/our-credintial/logo-nasional/pinakabaladikautama.jpg", alt: "Pinaka Baladi Kautama" },
    { src: "/our-credintial/logo-nasional/sngi.png", alt: "SNGI" },
    { src: "/our-credintial/logo-nasional/Suzuki_logo_2025.svg.webp", alt: "Suzuki" },
    { src: "/our-credintial/logo-nasional/taman pesada.png", alt: "Taman Pesada" },
    { src: "/our-credintial/logo-nasional/telkomsel.webp", alt: "Telkomsel" },
    { src: "/our-credintial/logo-nasional/tirta.jpg", alt: "Tirta" },
  ], []);

  // Logo Internasional (10 items dari folder logo-internasional)
  const internationalLogos = useMemo(() => [
    { src: "/our-credintial/logo-internasional/gravityfield.png", alt: "Gravity Field" },
    { src: "/our-credintial/logo-internasional/mappable.webp", alt: "Mappable" },
    { src: "/our-credintial/logo-internasional/nebius.jpg", alt: "Nebius" },
    { src: "/our-credintial/logo-internasional/rbs.jpg", alt: "RBS" },
    { src: "/our-credintial/logo-internasional/routeq.jpg", alt: "RouteQ" },
    { src: "/our-credintial/logo-internasional/synergy.jpg", alt: "Synergy" },
    { src: "/our-credintial/logo-internasional/themoscow.png", alt: "The Moscow" },
    { src: "/our-credintial/logo-internasional/trident.jpg", alt: "Trident" },
    { src: "/our-credintial/logo-internasional/yandex.png", alt: "Yandex" },
    { src: "/our-credintial/logo-internasional/yango.png", alt: "Yango" },
  ], []);

  // Preload national logos
  useEffect(() => {
    const failedNational: string[] = [];
    let loadedCount = 0;

    nationalLogos.forEach((logo) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; // Allow loading images
      img.onload = () => {
        setLoadedNationalLogos((prev) => new Set(prev).add(logo.src));
        loadedCount++;
        if (loadedCount + failedNational.length === nationalLogos.length) {
          console.log(`✅ National: Loaded ${loadedCount}/${nationalLogos.length} logos`);
        }
      };
      img.onerror = () => {
        failedNational.push(logo.src);
        console.warn(`Failed to load: ${logo.src}`);
        if (loadedCount + failedNational.length === nationalLogos.length) {
          console.log(`✅ National: Loaded ${loadedCount}/${nationalLogos.length} logos`);
          if (failedNational.length > 0) {
            console.log(`❌ Failed logos (${failedNational.length}):`, failedNational);
          }
        }
      };
      img.src = logo.src;
    });
  }, [nationalLogos]);

  // Preload international logos
  useEffect(() => {
    const failedInternational: string[] = [];
    let loadedCount = 0;

    internationalLogos.forEach((logo) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; // Allow loading images
      img.onload = () => {
        setLoadedInternationalLogos((prev) => new Set(prev).add(logo.src));
        loadedCount++;
        if (loadedCount + failedInternational.length === internationalLogos.length) {
          console.log(`✅ International: Loaded ${loadedCount}/${internationalLogos.length} logos`);
        }
      };
      img.onerror = () => {
        failedInternational.push(logo.src);
        console.warn(`Failed to load: ${logo.src}`);
        if (loadedCount + failedInternational.length === internationalLogos.length) {
          console.log(`✅ International: Loaded ${loadedCount}/${internationalLogos.length} logos`);
          if (failedInternational.length > 0) {
            console.log(`❌ Failed logos (${failedInternational.length}):`, failedInternational);
          }
        }
      };
      img.src = logo.src;
    });
  }, [internationalLogos]);

  // Filter only successfully loaded logos
  const validNationalLogos = nationalLogos.filter(logo => loadedNationalLogos.has(logo.src));
  const validInternationalLogos = internationalLogos.filter(logo => loadedInternationalLogos.has(logo.src));

  return (
    <section id="our-credential" className="w-full bg-white relative py-16 overflow-hidden">
      {/* Background Image sebagai dekorasi */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/our-credintial/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title */}
        <h2 className="font-righteous text-[42px] text-center mb-4" style={{ color: '#012267' }}>
          Our Credential
        </h2>

        {/* Subtitle - NASIONAL */}
        <h3 className="font-righteous text-[36px] text-center mb-12" style={{ color: '#012267' }}>
          NASIONAL
        </h3>

        {/* Logo Scattered Layout Nasional */}
        <div className="relative min-h-[600px] mb-12">
          {validNationalLogos.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Loading logos...</p>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-6">
              {validNationalLogos.map((logo, idx) => {
                // Random sizes for organic look
                const sizes = ['w-20 h-16', 'w-24 h-20', 'w-28 h-20', 'w-32 h-24', 'w-20 h-20'];
                const size = sizes[idx % sizes.length];
                
                return (
                  <div 
                    key={idx} 
                    className={`${size} relative flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                      loading="eager"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowInternational(!showInternational)}
            className="px-8 py-3 rounded-full font-righteous text-[18px] transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: '#BECFFF',
              color: '#012267'
            }}
          >
            {showInternational ? `Show Less...` : `Load more...`}
          </button>
        </div>

        {/* International Section - Muncul setelah Load More */}
        {showInternational && (
          <div className="mt-16">
            {/* Subtitle - INTERNATIONAL */}
            <h3 className="font-righteous text-[36px] text-center mb-12" style={{ color: '#012267' }}>
              INTERNATIONAL
            </h3>

            {/* Logo Scattered Layout International - NO DUPLICATES */}
            <div className="space-y-8">
              <div className="flex flex-wrap items-center justify-center gap-8">
                {validInternationalLogos.map((logo, idx) => {
                  const sizes = ['w-24 h-20', 'w-28 h-24', 'w-32 h-28', 'w-36 h-32'];
                  const size = sizes[idx % sizes.length];
                  
                  return (
                    <div 
                      key={idx} 
                      className={`${size} relative flex items-center justify-center p-3 hover:scale-110 transition-all duration-300`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="object-contain max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                        loading="eager"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
