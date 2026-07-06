'use client';

export default function OurThoughtLeadershipSection() {
  const leadershipImages = [
    { src: "/our-thought-leadership/image 51.png", alt: "Leadership Event 1" },
    { src: "/our-thought-leadership/image 52.png", alt: "Leadership Event 2" },
    { src: "/our-thought-leadership/image 53.png", alt: "Leadership Event 3" },
    { src: "/our-thought-leadership/image 54.png", alt: "Leadership Event 4" },
    { src: "/our-thought-leadership/image 55.png", alt: "Leadership Event 5" },
    { src: "/our-thought-leadership/image 56.png", alt: "Leadership Event 6" },
    { src: "/our-thought-leadership/image 57.png", alt: "Leadership Event 7" },
  ];

  const partnerLogos = [
    { src: "/our-thought-leadership/OJK_Logo 1.png", alt: "OJK" },
    { src: "/our-thought-leadership/client-1 1.png", alt: "Client" },
    { src: "/our-thought-leadership/bsn-logo 1.png", alt: "BSN" },
    { src: "/our-thought-leadership/Bank_Mandiri_logo.svg 1.png", alt: "Bank Mandiri" },
    { src: "/our-thought-leadership/images-removebg-preview (3) 1.png", alt: "Partner" },
    { src: "/our-thought-leadership/Grab_Logo.svg 1.png", alt: "Grab" },
    { src: "/our-thought-leadership/images-removebg-preview (4) 1.png", alt: "J&T" },
  ];

  const universityLogos = [
    { src: "/our-thought-leadership/Logo_Kampus_Merdeka_Kemendikbud 1.png", alt: "Kampus Merdeka" },
    { src: "/our-thought-leadership/Makara_of_Universitas_Indonesia.svg 1.png", alt: "Universitas Indonesia" },
    { src: "/our-thought-leadership/Logo_Institut_Teknologi_Bandung 1.png", alt: "ITB" },
    { src: "/our-thought-leadership/Gunadarma_Logo 1.png", alt: "Gunadarma" },
    { src: "/our-thought-leadership/logo_bsi_hijauy 1.png", alt: "BSI" },
    { src: "/our-thought-leadership/Logo_IPB 1.png", alt: "IPB" },
    { src: "/our-thought-leadership/logotbvector-copy 1.png", alt: "Telkom" },
    { src: "/our-thought-leadership/Logo_BPPT 1.png", alt: "BPPT" },
    { src: "/our-thought-leadership/UBI 1.png", alt: "UBI" },
    { src: "/our-thought-leadership/logo-kemendikbud-psrhl01ij60vday7mbsvwfwh0zht1v5kexgi23tlkg 1.png", alt: "Kemdikbud" },
    { src: "/our-thought-leadership/Logo_Labschool 1.png", alt: "Labschool" },
    { src: "/our-thought-leadership/Logo_SMK_Negeri_1_Kota_Bekasi 1.png", alt: "SMKN 1 Bekasi" },
    { src: "/our-thought-leadership/cropped-logo-smkn-58-removebg-preview 1.png", alt: "SMKN 58" },
    { src: "/our-thought-leadership/smkn-46-jakarta-removebg-preview 1.png", alt: "SMKN 46 Jakarta" },
    { src: "/our-thought-leadership/1542786212275-removebg-preview 1.png", alt: "University" },
    { src: "/our-thought-leadership/1633682852100-removebg-preview 1.png", alt: "University" },
    { src: "/our-thought-leadership/cd52a62af6cfcefb2b7fc69157700212-removebg-preview 1.png", alt: "University" },
  ];

  return (
    <section id="thought-leadership" className="w-full bg-white relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title */}
        <h2 className="font-righteous text-[42px] text-center mb-4" style={{ color: '#012267' }}>
          OUR THOUGHT LEADERSHIP
        </h2>

        {/* Subtitle */}
        <p className="text-center text-[16px] mb-12" style={{ color: '#012267' }}>
          Innovate sharing knowledge, insight, and perspective about Digital Transformation,
          <br />
          impactful to more than <span className="font-bold">10.000</span> participant
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {leadershipImages.map((image, idx) => (
            <div 
              key={idx}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                idx === 0 ? 'md:col-span-1' : 
                idx === 1 ? 'md:col-span-2' : 
                idx === 2 ? 'md:col-span-2' :
                idx === 3 ? 'md:col-span-1' :
                'md:col-span-1'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Partner Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {partnerLogos.map((logo, idx) => (
            <div 
              key={idx}
              className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* University Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {universityLogos.map((logo, idx) => (
            <div 
              key={idx}
              className="w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-12 flex justify-center">
          <div className="px-8 py-3 rounded-full" style={{ backgroundColor: '#012267' }}>
            <p className="text-white font-righteous text-[14px]">
              indi-kuli.tech | 2020-1960 Technology.all right reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
