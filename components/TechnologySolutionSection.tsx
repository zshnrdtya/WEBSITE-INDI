'use client';

export default function TechnologySolutionSection() {
  const solutions = [
    {
      src: "/technology-solution/image 20.png",
      alt: "Certification System",
      title: "Certification System"
    },
    {
      src: "/technology-solution/image 24.png",
      alt: "TOSTEM",
      title: "TOSTEM"
    },
    {
      src: "/technology-solution/image 27.png",
      alt: "Indonesia Forum",
      title: "Indonesia Forum"
    },
    {
      src: "/technology-solution/image 25.png",
      alt: "Amalia",
      title: "Amalia"
    },
    {
      src: "/technology-solution/image 26.png",
      alt: "Mobile Solution 1",
      title: "Mobile Solution"
    },
    {
      src: "/technology-solution/image 28.png",
      alt: "Mobile Solution 2",
      title: "Mobile Solution"
    },
  ];

  return (
    <section id="technology-solution" className="w-full relative py-16 overflow-hidden" style={{ backgroundColor: '#ffffffff' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title */}
        <h2 className="font-righteous text-[42px] text-center mb-4 text-black">
          TECHNOLOGY SOLUTION
        </h2>

        {/* Subtitle */}
        <p className="text-center text-white text-[16px] mb-12 max-w-4xl mx-auto">
          These solutions are provided to improve efficiency, productivity, and overall operational by leveraging various IT components.
        </p>

        {/* Grid Layout - 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => (
            <div 
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={solution.src}
                alt={solution.alt}
                className="w-full h-[280px] object-cover"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-righteous text-[20px]">
                    {solution.title}
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
