'use client';

import { useState, useEffect, useMemo } from 'react';

export default function PartnershipLogos() {
  const [loadedLogos, setLoadedLogos] = useState<Set<string>>(new Set());
  const [failedLogos, setFailedLogos] = useState<string[]>([]);

  // All 54 logos from the logo-kerjasama folder - memoized to prevent re-creation
  const logos = useMemo(() => [
    { src: "/logo-kerjasama/agnp.svg", alt: "AGNP", height: "h-9" },
    { src: "/logo-kerjasama/Baznas.png.svg", alt: "Baznas", height: "h-9" },
    { src: "/logo-kerjasama/bekraf.svg", alt: "Bekraf", height: "h-8" },
    { src: "/logo-kerjasama/bigid.svg", alt: "BigID", height: "h-8" },
    { src: "/logo-kerjasama/bkn.svg", alt: "BKN", height: "h-9" },
    { src: "/logo-kerjasama/bpsb.svg", alt: "BPSB", height: "h-9" },
    { src: "/logo-kerjasama/bsn-logo.png", alt: "BSN", height: "h-9" },
    { src: "/logo-kerjasama/citrahome.svg", alt: "Citra Home", height: "h-8" },
    { src: "/logo-kerjasama/Copy of telkomsel.svg", alt: "Telkomsel Copy", height: "h-9" },
    { src: "/logo-kerjasama/dompet-duafa.svg", alt: "Dompet Dhuafa", height: "h-9" },
    { src: "/logo-kerjasama/download.jpg", alt: "Partner", height: "h-9" },
    { src: "/logo-kerjasama/dpr-ri.svg", alt: "DPR RI", height: "h-12" },
    { src: "/logo-kerjasama/esteh.svg", alt: "Es Teh Indonesia", height: "h-8" },
    { src: "/logo-kerjasama/gdgindonesia.svg", alt: "GDG Indonesia", height: "h-8" },
    { src: "/logo-kerjasama/gravityfield.svg", alt: "Gravity Field", height: "h-8" },
    { src: "/logo-kerjasama/hass.svg", alt: "HASS", height: "h-9" },
    { src: "/logo-kerjasama/ifg.svg", alt: "IFG", height: "h-8" },
    { src: "/logo-kerjasama/images.jpg", alt: "Partner", height: "h-9" },
    { src: "/logo-kerjasama/indonesiaforum.svg", alt: "Indonesia Forum", height: "h-8" },
    { src: "/logo-kerjasama/isenmulang.svg", alt: "Isen Mulang", height: "h-8" },
    { src: "/logo-kerjasama/itsec.svg", alt: "ITSec", height: "h-8" },
    { src: "/logo-kerjasama/jakpro.svg", alt: "Jakpro", height: "h-9" },
    { src: "/logo-kerjasama/Jalin_2023.svg.webp", alt: "Jalin", height: "h-8" },
    { src: "/logo-kerjasama/kementerian-pekerjaan-umum-(pu)-logo.png", alt: "Kementerian PU", height: "h-10" },
    { src: "/logo-kerjasama/kotapatriot.svg", alt: "Kota Patriot", height: "h-9" },
    { src: "/logo-kerjasama/KPU_Logo.svg.webp", alt: "KPU", height: "h-10" },
    { src: "/logo-kerjasama/Logo_Bappenas_Indonesia_(National_Development_Planning_Agency).png", alt: "Bappenas", height: "h-10" },
    { src: "/logo-kerjasama/logo_client_pina-1.png", alt: "PINA", height: "h-9" },
    { src: "/logo-kerjasama/Logo_KAN.png", alt: "KAN", height: "h-9" },
    { src: "/logo-kerjasama/LOGO_KEMENPAREKRAF_(BAPAREKRAF).png", alt: "Kemenparekraf", height: "h-9" },
    { src: "/logo-kerjasama/Logo_Kementerian_Ketenagakerjaan_(2016).png", alt: "Kemenaker", height: "h-10" },
    { src: "/logo-kerjasama/Logo_Kementerian_Komunikasi_dan_Digital_Republik_Indonesia_(2024).svg.webp", alt: "KOMDIGI", height: "h-10" },
    { src: "/logo-kerjasama/Logo_Mahkamah_Agung_RI.png", alt: "MA RI", height: "h-10" },
    { src: "/logo-kerjasama/Logo-Jasa-Raharja.png", alt: "Jasa Raharja", height: "h-9" },
    { src: "/logo-kerjasama/mappable.svg", alt: "Mappable", height: "h-8" },
    { src: "/logo-kerjasama/motorola-solutions-vertical-logo.png", alt: "Motorola Solutions", height: "h-10" },
    { src: "/logo-kerjasama/nebius.svg", alt: "Nebius", height: "h-8" },
    { src: "/logo-kerjasama/NEC_logo.svg.webp", alt: "NEC", height: "h-8" },
    { src: "/logo-kerjasama/octomobile.svg", alt: "Octomobile", height: "h-8" },
    { src: "/logo-kerjasama/pertamina.svg", alt: "Pertamina", height: "h-8" },
    { src: "/logo-kerjasama/phinisi.svg", alt: "Phinisi", height: "h-8" },
    { src: "/logo-kerjasama/pinakabaladikautama.svg", alt: "Pinaka Baladi Kautama", height: "h-8" },
    { src: "/logo-kerjasama/rbs.svg", alt: "RBS", height: "h-8" },
    { src: "/logo-kerjasama/routeq.svg", alt: "RouteQ", height: "h-8" },
    { src: "/logo-kerjasama/sngi.svg", alt: "SNGI", height: "h-8" },
    { src: "/logo-kerjasama/Suzuki_logo_2025.svg.webp", alt: "Suzuki", height: "h-7" },
    { src: "/logo-kerjasama/synergy.svg", alt: "Synergy", height: "h-8" },
    { src: "/logo-kerjasama/tamanriapersada.svg", alt: "Taman Ria Persada", height: "h-8" },
    { src: "/logo-kerjasama/telkomsel.svg", alt: "Telkomsel", height: "h-9" },
    { src: "/logo-kerjasama/themoscow.svg", alt: "The Moscow", height: "h-8" },
    { src: "/logo-kerjasama/tirta.svg", alt: "Tirta", height: "h-8" },
    { src: "/logo-kerjasama/trident.svg", alt: "Trident", height: "h-8" },
    { src: "/logo-kerjasama/yandex.svg", alt: "Yandex", height: "h-8" },
    { src: "/logo-kerjasama/yango.svg", alt: "Yango", height: "h-8" },
  ], []);

  useEffect(() => {
    // Preload and validate all images
    const failed: string[] = [];
    let loadedCount = 0;

    logos.forEach((logo) => {
      const img = new Image();
      img.onload = () => {
        setLoadedLogos((prev) => new Set(prev).add(logo.src));
        loadedCount++;
        if (loadedCount + failed.length === logos.length) {
          console.log(`✅ Loaded ${loadedCount}/${logos.length} logos successfully`);
        }
      };
      img.onerror = () => {
        failed.push(logo.src);
        // Silently skip failed logos without logging errors to console
        if (loadedCount + failed.length === logos.length) {
          setFailedLogos(failed);
          console.log(`✅ Loaded ${loadedCount}/${logos.length} logos successfully`);
        }
      };
      img.src = logo.src;
    });
  }, [logos]);

  // Only show logos that successfully loaded
  const validLogos = logos.filter(logo => loadedLogos.has(logo.src));

  return (
    <section className="w-full bg-white py-6 relative z-10 overflow-hidden flex items-center">
      <div className="w-full relative overflow-hidden">
        {validLogos.length === 0 ? (
          <div className="flex justify-center items-center py-4">
            <p className="text-gray-400">Loading logos...</p>
          </div>
        ) : (
          <div className="flex animate-marquee whitespace-nowrap items-center w-max">
            <div className="flex items-center gap-16 px-8">
              {validLogos.map((logo, idx) => (
                <div key={`logo-1-${idx}`} className="flex items-center justify-center" style={{ minWidth: '100px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`${logo.height} max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-110`}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-16 px-8">
              {validLogos.map((logo, idx) => (
                <div key={`logo-2-${idx}`} className="flex items-center justify-center" style={{ minWidth: '100px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`${logo.height} max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-110`}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Debug info - remove in production */}
      {failedLogos.length > 0 && (
        <div className="hidden">
          Failed logos: {failedLogos.join(', ')}
        </div>
      )}
    </section>
  );
}
