'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const router = useRouter();

  const navigateToCompany = () => {
    router.push('/#about-indi');
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is INDI Technology?",
      answer: "INDI Technology (PT Indi Teknokrasi Int) is a digital transformation partner and IT solutions provider. We craft useful digital products and platforms designed to help your business grow and achieve its digital transformation goals."
    },
    {
      question: "What services does INDI Technology offer?",
      answer: "We provide seven core services: Mobile/App Development, Web Development, Digital Marketing, System Development, Internet of Things (IoT) research, Cyber Security, and End-to-End IT Service Provision (including software licenses, hardware, and infrastructure)."
    },
    {
      question: "Where is your company located?",
      answer: "Our office is located at Graha INDI, Jl. Pabliowan Revolusi No. 1, Jakarta, Indonesia."
    },
    {
      question: "How can I contact INDI Technology?",
      answer: "You can easily reach us by phone at +62 21 2208 6938, via email at info@indi.tech, or by leaving a message directly through the contact form on our website."
    },
    {
      question: "What is your work process for developing a new project?",
      answer: "Our workflow is divided into three main stages:\n1. Brainstorming: Generating ideas to solve design problems in a free-thinking environment.\n2. Design & Development: Our skilled software engineers work in cross-functional teams to create human-centered tech products.\n3. Project Delivery: We deploy the project and ensure it is supported properly."
    },
    {
      question: "Do you provide maintenance after a project is finished?",
      answer: "Yes. We do not just create and deliver your project; we also assist you with maintenance to ensure that your product remains 100% ready to go."
    },
    {
      question: "What are the core missions (Tri Mission) of INDI Technology?",
      answer: "Our Tri Mission consists of:\n1. Tech Solution: Assisting partners with the right technology for their goals.\n2. Innovation Development: Producing emerging and innovative technology to improve society.\n3. Talent Development: Encouraging people to improve their technological skills."
    },
    {
      question: "Do you build custom or tailor-made applications?",
      answer: "Yes, under our System Development and App Development services, we provide tailor-made integrated systems and applications as solutions for problems in various sectors."
    },
    {
      question: "Can INDI Technology help with marketing my business online?",
      answer: "Absolutely. We have a dedicated Digital Marketing service that provides marketing solutions using digital platforms, including social media management."
    },
    {
      question: "What are some examples of your past works and portfolio?",
      answer: "We have successfully delivered various digital projects, including the Tastem Indonesia Website, Indonesia Forum Website, Debat Pilpres 2019 Information System, and the Amalia Cosmetics E-commerce platform."
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-rubik">

      {/* Hero Header Section — navbar + banner jadi satu blok dengan background image */}
      <div className="relative w-full overflow-hidden">
        {/* Background image asset faq.png mengisi full area navbar + banner */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/faq/asset faq.png"
          alt="FAQ Banner Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay tipis supaya teks terbaca */}
        <div className="absolute inset-0 bg-[#4040A0]/30"></div>

        {/* Navbar di atas background */}
        <div className="relative">
          <Navbar />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 py-20 px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-wide drop-shadow-md">
            FREQUENTLY ASKED QUESTION
          </h1>
          <p className="text-sm md:text-base text-white/80 mb-10 tracking-wide">
            Didn&apos;t spot your answer here? Send us a message and we&apos;ll gladly help you out!
          </p>
          <div className="flex gap-4 justify-center items-center">
            {/* Our Company — outline putih */}
            <button
              onClick={navigateToCompany}
              className="px-10 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-[#5B67CA] transition-all duration-200 font-[family-name:var(--font-alata)]">
              Our Company
            </button>
            {/* Contact Us — solid biru dengan icon dari folder faq */}
            <button className="px-10 py-3 bg-[#4D5CE5] text-white font-semibold rounded-full flex items-center gap-3 hover:bg-[#3B4AD0] transition-all duration-200 shadow-lg font-[family-name:var(--font-alata)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/faq/image.png"
                alt="Contact Icon"
                className="w-6 h-6 object-contain"
              />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Items Section */}
      <section className="relative z-10 w-full py-16 px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-8 py-6 flex items-start justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                        expandedIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-700 leading-tight">
                      {item.question}
                    </h3>
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
