// src/components/InteriorHero.jsx
import React from "react";
import { Award, Users, Star } from "lucide-react";
import profileImg from "../assets/images/home/kh6.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/images/home/l1.avif"; 
import img2 from "../assets/images/home/l4.avif";
import img3 from "../assets/images/home/l3.avif"; 

const InteriorHero = () => {
  return (
    <>
    
    <section className="bg-gradient-to-b from-black via-[#0d0d0d] to-[#1a1a1a] min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-16 py-10 text-white relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Side (Intro + Headline) */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={profileImg}
                alt="Sehan Interior Kanpur"
                className="w-16 h-16 rounded-full object-cover shadow-xl border-2 border-gray-700"
              />
              <p className="text-gray-300 text-lg">
                Welcome to{" "}
                <span className="font-semibold text-[#D4AF37]">
                  Sehan Interior Kanpur
                </span>
                , <br /> where design meets elegance.
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-cursive2 font-bold leading-tight text-white mb-6 font-serif">
              Designing Spaces, <br /> Defining Style.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Sehan Interior Kanpur, we specialize in blending modern luxury
              with timeless elegance, crafting interiors that feel both
              sophisticated and deeply personal.
            </p>
          </div>

          {/* Right Side (Description + Button + Stats) */}
          <div className="max-w-md space-y-8">
            <p className="text-gray-400 leading-relaxed">
              From cozy homes to luxurious residences, our work focuses on
              harmony, functionality, and beauty. Every space we design tells a
              story — your story.
            </p>
            <Link to="/contact">
            <button className="px-8 py-2 cursor-pointer bg-[#1c1c1c]  text-gray-300 font-body  rounded-xl shadow-md  transition text-lg">
              BOOK A CONSULTATION
            </button>
            </Link>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                <Award className="w-10 h-10 text-yellow-400 mb-3" />
                <h3 className="text-2xl md:text-3xl font-bold">10+</h3>
                <p className="text-sm md:text-base text-gray-400 mt-1">
                  Awards
                </p>
              </div>
              <div className="flex flex-col items-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                <Users className="w-10 h-10 text-blue-400 mb-3" />
                <h3 className="text-2xl md:text-3xl font-bold">200+</h3>
                <p className="text-sm md:text-base text-gray-400 mt-1">
                  Clients
                </p>
              </div>
              <div className="flex flex-col items-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                <Star className="w-10 h-10 text-pink-400 mb-3" />
                <h3 className="text-2xl md:text-3xl font-bold">5★</h3>
                <p className="text-sm md:text-base text-gray-400 mt-1">
                  Ratings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     <section className="flex h-[85vh] w-full text-white font-sans relative overflow-hidden">
      {/* Left Panel */}
      <div className="bg-[#111] w-[30%] flex flex-col justify-between p-10 relative z-10">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">Sneha Interior</div>

        {/* Centered Content */}
        <div className="flex flex-col justify-center h-full relative">
          <h1 className="text-6xl md:text-7xl font-cursive2 leading-tight mb-3 relative z-20 -mr-16">
            Modern <br />Looking Design
          </h1>
          <p className="text-gray-400 max-w-xs mb-8">
            New home furniture collections and decoration accessories
          </p>
          <Link to={'/gallery'}>
`
          <button className="group inline-flex items-center cursor-pointer gap-3 px-4 py-3 bg-[#1c1c1c] `rounded-md shadow hover:bg-[#2a2a2a] hover:shadow-lg hover:shadow-black/30 transition">
            <span className="tracking-wide">See more</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          </Link>
        </div>
      </div>

      {/* Right Panels */}
      <div className="flex flex-1">
        {/* Panel 1 */}
        <div className="relative w-1/3 group overflow-hidden">
          <img
            src={img1}
            alt="Bacchus kitchen"
            className="w-full h-[600px] object-cover transform group-hover:scale-110 transition duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/30 group-hover:via-black/10 group-hover:to-transparent transition"></div>
          
          {/* Text Overlay */}
          <div className="absolute bottom-10 left-6 transition-all duration-500 group-hover:translate-y-[-4px]">
            <div className="w-[1px] h-10 bg-white/60 mb-3"></div>
            <span className="text-sm text-gray-300">01</span>
            <h3 className="text-2xl font-body font-serif mt-1">
              Asthetic Wall <br /> Design
            </h3>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="relative w-1/3 group overflow-hidden">
          <img
            src={img2}
            alt="Tellus doors"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/30 group-hover:via-black/10 group-hover:to-transparent transition"></div>
          
          {/* Text Overlay */}
          <div className="absolute bottom-10 left-6 transition-all duration-500 group-hover:translate-y-[-4px]">
            <div className="w-[1px] h-10 bg-white/60 mb-3"></div>
            <span className="text-sm text-gray-300">02</span>
            <h3 className="text-2xl font-body font-serif mt-1">
              Living <br /> Area
            </h3>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="relative w-1/3 group overflow-hidden">
          <img
            src={img3}
            alt="Helios windows"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/30 group-hover:via-black/10 group-hover:to-transparent transition"></div>
          
          {/* Text Overlay */}
          <div className="absolute bottom-10 left-6 transition-all duration-500 group-hover:translate-y-[-4px]">
            <div className="w-[1px] h-10 bg-white/60 mb-3"></div>
            <span className="text-sm text-gray-300">03</span>
            <h3 className="text-2xl font-body font-serif mt-1">
              Dining <br />Area
            </h3>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default InteriorHero;





