// src/components/ServiceHero.jsx
import React from "react";
import { FaPaintRoller, FaCouch, FaDraftingCompass, FaGem } from "react-icons/fa";
import bgImage from "../assets/images/about/sbg.jpg"; // ✅ Replace with your bg

export default function ServiceHero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-end text-white font-body"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left Content */}
      <div className="relative z-10 p-10 md:p-16 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-cursive1 mb-4">
          Our Premium Services
        </h1>
        <p className="text-lg md:text-xl font-cursive2 text-gray-200 mb-6 leading-relaxed">
          Redefining luxury interiors with elegance, creativity, and precision.
        </p>
        {/* 🔥 Replaced button with premium tagline */}
        <p className="text-xl font-body text-[#D4AF37] tracking-wide italic">
          “Where elegance meets perfection.”
        </p>
      </div>

      {/* Right Vertical Content */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-10 z-10">
        {[
          { icon: <FaPaintRoller />, text: "Exclusive Wall Finishes" },
          { icon: <FaCouch />, text: "Luxury Furniture Design" },
          { icon: <FaDraftingCompass />, text: "Modern Architecture" },
          { icon: <FaGem />, text: "Premium Material Selection" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl hover:bg-white/20 transition"
          >
            <span className="text-2xl text-[#D4AF37]">{item.icon}</span>
            <span className="font-cursive2 text-lg">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
