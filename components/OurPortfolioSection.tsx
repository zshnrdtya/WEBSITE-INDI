'use client';

export default function OurPortfolioSection() {
  const portfolioItems = [
    { src: "/our-portfolio/Screenshot 2026-07-04 203730.png", alt: "Our Digital Solutions" },
    { src: "/our-portfolio/Screenshot 2026-07-04 203910.png", alt: "Talent Development" },
    { src: "/our-portfolio/image 24.png", alt: "TOSTEM" },
    { src: "/our-portfolio/image 27.png", alt: "Indonesia Forum" },
    { src: "/our-portfolio/image 20.png", alt: "KPU Solution" },
    { src: "/our-portfolio/image 25.png", alt: "Amalia" },
    { src: "/our-portfolio/Screenshot 2026-07-04 204501.png", alt: "Digital Product" },
    { src: "/our-portfolio/image 26.png", alt: "Web Platform" },
    { src: "/our-portfolio/Screenshot 2026-07-04 204758.png", alt: "Mobile App" },
    { src: "/our-portfolio/Screenshot 2026-07-04 204713.png", alt: "E-Learning Platform" },
    { src: "/our-portfolio/Screenshot 2026-07-04 204538.png", alt: "Web Application" },
    { src: "/our-portfolio/Screenshot 2026-07-04 204648.png", alt: "Mobile Application" },
  ];

  return (
    <section id="our-portfolio" className="w-full bg-white relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-righteous text-[42px] mb-2" style={{ color: '#012267' }}>
            Our Portfolio
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-24 bg-[#012267]"></div>
            <p className="font-rubik text-[16px] uppercase tracking-wider" style={{ color: '#012267' }}>
              OUR WORKS
            </p>
            <div className="h-[2px] w-24 bg-[#012267]"></div>
          </div>
        </div>

        {/* Portfolio Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <div 
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[240px] object-cover"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012267]/90 via-[#012267]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-righteous text-[18px]">
                    {item.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
