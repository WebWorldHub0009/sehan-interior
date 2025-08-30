import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import img1 from "../assets/images/home/h3.jpg";

const slides = [
  {
    title: "SEHAN INTERIOR",
    subtitle: "Elegant Living, Timeless Design",
    tagline: "Crafting modern, minimal & luxurious interiors",
  },
  {
    title: "Space That Inspires",
    subtitle: "Interior Design | Architecture | Decor",
    tagline: "Turning every space into an experience",
  },
  {
    title: "Luxury & Comfort",
    subtitle: "Designed for Modern Lifestyles",
    tagline: "Simplicity meets sophistication",
  },
];

export default function AboutHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Static Background */}
      <img
        src={img1}
        alt="Sehan Interior"
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Bottom Left Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-start text-gray-300 px-6 md:px-12 pb-10 max-w-2xl transition-all duration-700 ease-in-out">
        <h1 className="font-cursive2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-gray-300 drop-shadow-lg">
          {slides[current].title}
        </h1>

        <h2 className="font-body mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-200">
          {slides[current].subtitle}
        </h2>

        <div className="mt-5 bg-black/40 px-6 py-3 rounded-xl backdrop-blur-md shadow-lg transition-opacity duration-700 ease-in-out">
          <p className="font-cursive2 text-lg sm:text-xl md:text-2xl text-gray-100 italic tracking-wide">
            {slides[current].tagline}
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute right-3 sm:right-5 md:right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 text-white">
        <div className="font-cursive1 rotate-90 tracking-widest text-sm sm:text-base mb-8">
          SI
        </div>
        <div className="w-px h-20 bg-white/40 mb-4"></div>
        <div className="flex flex-col gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={18} className="hover:text-gray-300 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={18} className="hover:text-gray-300 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={18} className="hover:text-gray-300 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
