// src/components/ServiceHero.jsx
import React from "react";
import {
  FaPaintRoller,
  FaCouch,
  FaDraftingCompass,
  FaGem,
} from "react-icons/fa";
import bgImage from "../assets/images/about/sbg.jpg";

export default function ServiceHero() {
  const services = [
    { icon: <FaPaintRoller />, text: "Exclusive Wall Finishes" },
    { icon: <FaCouch />, text: "Luxury Furniture Design" },
    { icon: <FaDraftingCompass />, text: "Modern Architecture" },
    { icon: <FaGem />, text: "Premium Material Selection" },
  ];

  return (
    <section
      className="relative w-full h-[90vh] text-white font-body flex"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-end w-full h-full p-6 sm:p-10 md:p-16">
        {/* Left Content */}
        <div className="max-w-2xl text-left mb-10 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-cursive1 mb-4">
            Our Premium Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-cursive2 text-gray-200 mb-6 leading-relaxed">
            Redefining luxury interiors with elegance, creativity, and precision.
          </p>
          <p className="text-lg sm:text-xl font-body text-[#D4AF37] tracking-wide italic">
            “Where elegance meets perfection.”
          </p>
        </div>

        {/* Services Section */}
        {/* ✅ Mobile: stays below left content | Desktop: fixed vertical right */}
        <div className="w-full mt-6 lg:mt-0 lg:w-auto lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-1 lg:gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:bg-white/20 transition"
              >
                <span className="text-xl sm:text-2xl text-[#D4AF37]">
                  {item.icon}
                </span>
                <span className="font-cursive2 text-sm sm:text-base md:text-lg">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
