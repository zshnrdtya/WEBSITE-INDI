'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

const relatedProjects = [
  {
    image: "/talent-dev/Screenshot 2026-07-04 203730.png",
    title: "Digital Marketing",
    subtitle: "",
  },
  {
    image: "/talent-dev/gambar atas.png",
    title: "Talent Development",
    subtitle: "",
  },
  {
    image: "/our-portfolio/Screenshot 2026-07-04 203910.png",
    title: "Tostem Indonesia",
    subtitle: "App. System",
  },
];

export default function TalentDevelopmentPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen w-full flex flex-col font-rubik bg-[#f0f0f0]">

      {/* ===== HEADER SECTION ===== */}
      {/* Wrapper relatif — tingginya cukup untuk navbar + title + sebagian banner overlap */}
      <div className="relative w-full">

        {/* bg header.png di-crop supaya tidak terlalu tinggi */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/talent-dev/bg header.png"
          alt="Header Background"
          className="w-full block max-h-48 object-cover object-top"
        />

        {/* Navbar absolute di atas */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        {/* Title + Breadcrumb — di bawah navbar, di atas area lengkungan */}
        <div className="absolute bottom-0 left-0 w-full z-10 pb-6 flex flex-col items-center text-white text-center px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 drop-shadow-md">Talent Development</h1>
          <p className="text-sm text-white/80">
            <span
              className="cursor-pointer hover:text-white transition-colors"
              onClick={() => router.push('/')}
            >Home</span>
            <span className="mx-1">/</span>
            <span>Portfolio</span>
            <span className="mx-1">/</span>
            <span>Talent Development</span>
          </p>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      {/* -mt besar supaya banner card overlap ke atas menutupi bagian putih lengkungan */}
      <div className="w-full max-w-2xl mx-auto px-6 -mt-6 relative z-10">

        {/* Hero Banner Card */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/talent-dev/gambar atas.png"
            alt="Talent Development Banner"
            className="w-full object-cover"
          />
        </div>

        {/* Description + Sidebar */}
        <div className="flex flex-col md:flex-row gap-10 mb-8 bg-[#f0f0f0]">

          {/* Left — Deskripsi */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Descriptions</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Layanan Talent Development dari Indi Technology hadir sebagai inkubator bagi para profesional dan antusias teknologi yang ingin menguasai masa depan digital secara komprehensif. Kami menyadari bahwa kesenjangan talenta merupakan tantangan nyata di era transformasi ini, sehingga kami menyusun kurikulum yang tidak hanya teoritis, tetapi juga sangat aplikatif. Mulai dari fundamental hingga tingkat lanjut, pelatihan kami dirancang untuk mencetak praktisi handal yang siap bersaing di pasar kerja global yang kian kompetitif.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Fokus pelatihan kami mencakup spektrum teknologi yang luas dan modern, mulai dari kemahiran dalam Programming Web dan Mobile App Development untuk membangun infrastruktur digital yang solid, hingga penguasaan Digital Marketing dan Desain Grafis untuk memperkuat branding serta jangkauan pasar. Tidak berhenti di situ, Indi Technology juga membekali peserta dengan keahlian di bidang Artificial Intelligence (AI), memastikan setiap individu mampu memanfaatkan kecerdasan buatan untuk mengoptimalkan produktivitas dan inovasi di berbagai lini industri.
            </p>
          </div>

          {/* Right — Sidebar */}
          <div className="w-full md:w-44 flex-shrink-0">
            <div className="mb-4">
              <p className="text-sm font-bold text-gray-900 mb-1">Client</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Goverment, State-Own Enterprise, MSMEs, Multinational, Private Company
              </p>
            </div>
            <div className="mb-5">
              <p className="text-sm font-bold text-gray-900 mb-1">Category</p>
              <p className="text-sm text-gray-600 underline">Talent Deveopment</p>
            </div>
            <button className="w-full bg-black text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors">
              Download Portfolio
            </button>
          </div>
        </div>

        {/* Portfolio Grid Image */}
        <div className="mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/talent-dev/isi.png"
            alt="Training Portfolio"
            className="w-full rounded-xl"
          />
        </div>

        {/* Closing paragraph */}
        <p className="text-sm text-gray-700 leading-relaxed mb-16">
          Melalui pendekatan belajar berbasis proyek dan bimbingan langsung dari para ahli, kami memastikan setiap peserta mendapatkan pengalaman belajar yang imersif dan terukur. Kami percaya bahwa setiap orang memiliki potensi untuk menjadi pionir teknologi; oleh karena itu, program Talent Development ini dirancang untuk mengubah ambisi menjadi aksi. Bergabunglah bersama Indi Technology dan jadilah bagian dari ekosistem digital yang dinamis, kreatif, dan penuh dengan peluang tanpa batas.
        </p>
      </div>

      {/* ===== RELATED PROJECTS ===== */}
      <div className="w-full bg-[#e8e8e8] py-12 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-purple-400"></div>
            <h2 className="text-xl font-bold text-gray-900">Related Projects</h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {relatedProjects.map((project, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-800">{project.title}</p>
                {project.subtitle && (
                  <p className="text-xs text-gray-500">{project.subtitle}</p>
                )}
              </div>
            ))}
          </div>

          {/* Dot indicator */}
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === 0 ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
            <button
              onClick={() => setCurrentSlide(1)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === 1 ? 'bg-gray-800' : 'bg-gray-400'}`}
            />
          </div>

          {/* Prev / Menu / Next navigation */}
          <div className="flex items-center justify-between border-t border-gray-300 pt-6">
            <button
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => router.back()}
            >
              <span>←</span> Preview
            </button>
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
