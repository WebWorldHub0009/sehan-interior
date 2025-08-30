import React from "react";
import leftImg from "../assets/images/home/about.jpg";  
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="md:w-1/2 relative">
        <img
          src={leftImg}
          alt="Sehan Interior Projects"
          className="w-full h-[800px] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
          <p className="uppercase text-xs sm:text-sm tracking-widest font-body">
            Designing elegant and timeless interiors across India
          </p>
          <Link to={"/about"}>
            <button className="mt-5 font-body hover:text-gray-300 cursor-pointer transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 bg-[#FDFBF7] flex flex-col px-8 py-6">
        {/* Heading */}
        <div className="flex items-start justify-between">
          <div className="w-full">
            <h2 className="text-8xl sm:text-9xl font-cursive2 text-[#1B2A41]">
              About Us
            </h2>
            <div className="w-full h-[1px] bg-black mb-5"></div>
          </div>
        </div>

        {/* Tagline */}
        <h3 className="uppercase text-xs tracking-widest text-[#1B2A41] mt-6 font-body">
          Luxury • Simplicity • Comfort
        </h3>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A41] leading-snug mt-4 font-body">
          Spaces that inspire, crafted with{" "}
          <span className="text-[#D4AF37] italic font-cursive1">
            passion and precision
          </span>
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 text-lg leading-relaxed mt-6 font-body">
          At <span className="font-semibold">Sehan Interior</span>, we believe 
          every space tells a story. Our mission is to transform homes and 
          workplaces into timeless experiences — blending modern aesthetics 
          with comfort, elegance, and functionality.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4 font-body">
          With a team of passionate designers and craftsmen, we specialize in 
          creating interiors that reflect your personality and lifestyle. 
          Whether it’s a luxury residence, a stylish office, or a cozy living 
          space, every detail is carefully curated with sophistication.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4 font-body">
          Our philosophy is simple: interiors should be more than just design — 
          they should be experiences that inspire and endure. At Sehan Interior, 
          we bring creativity, trust, and timeless beauty to every project we 
          craft.
        </p>
      </div>
    </section>
  );
}
