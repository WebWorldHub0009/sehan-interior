// src/components/InteriorHero.jsx
import React, { useState } from "react";
import { ShieldCheck, ThumbsUp, Zap, HeartHandshake, X } from "lucide-react";
import profileImg from "../assets/images/home/kh6.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/images/home/l1.avif"; 
import img2 from "../assets/images/home/l4.avif";
import img3 from "../assets/images/home/l3.avif"; 

const InteriorHero = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
      title: "Reliable",
      desc: "We provide trustworthy and consistent interior solutions backed by years of expertise and a customer-first approach."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Affordable",
      desc: "Premium designs don’t always mean premium prices. Our solutions are tailored to fit within your budget while maintaining luxury."
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-blue-400" />,
      title: "Innovative",
      desc: "We bring fresh ideas, modern aesthetics, and cutting-edge design principles to every project we undertake."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-pink-400" />,
      title: "Customer First",
      desc: "Every design reflects your personality. We prioritize your lifestyle, comfort, and preferences above all else."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-[#0d0d0d] to-[#1a1a1a] min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-16 py-10 text-white relative overflow-hidden">
        <div className="max-w-7xl w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            {/* Left Side */}
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={profileImg}
                  alt="Sehan Interior Kanpur"
                  className="w-14 h-14 rounded-full object-cover shadow-lg border border-gray-600"
                  loading="lazy"
                />
                <p className="text-gray-300 text-base">
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

            {/* Right Side */}
            <div className="max-w-md space-y-8">
              <p className="text-gray-400 leading-relaxed">
                From cozy homes to luxurious residences, our work focuses on
                harmony, functionality, and beauty. Every space we design tells a
                story — your story.
              </p>
              <Link to="/contact">
                <button className="px-8 py-2 cursor-pointer bg-[#1c1c1c] text-gray-300 font-body rounded-xl shadow-md hover:bg-[#2a2a2a] transition text-lg">
                  BOOK A CONSULTATION
                </button>
              </Link>

              {/* ✅ Feature Cards */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                {features.map((feature, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFeature(feature)}
                    className="flex cursor-pointer items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shadow-sm hover:shadow-lg hover:scale-105 transition text-left"
                  >
                    {feature.icon}
                    <span className="text-sm font-medium">{feature.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-[85vh] w-full text-white font-sans relative overflow-hidden">
        {/* Left Panel */}
        <div className="bg-[#111] w-full lg:w-[30%] flex flex-col justify-between p-8 md:p-10 relative z-10">
          <div className="text-xl md:text-2xl font-bold tracking-tight mb-6 lg:mb-0">
            Sehan Interior
          </div>

          <div className="flex flex-col justify-center h-full relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cursive2 leading-tight mb-3 relative z-20">
              Modern <br /> Looking Design
            </h1>
            <p className="text-gray-400 max-w-xs mb-6 text-sm md:text-base">
              New home furniture collections and decoration accessories
            </p>
            <Link to={"/gallery"}>
              <button className="group inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-[#1c1c1c] rounded-md shadow hover:bg-[#2a2a2a] hover:shadow-lg hover:shadow-black/30 transition text-sm md:text-base">
                <span className="tracking-wide">See more</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Panels */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            { img: img1, title: "Aesthetic Wall Design", no: "01" },
            { img: img2, title: "Living Area", no: "02" },
            { img: img3, title: "Dining Area", no: "03" }
          ].map((item, i) => (
            <div key={i} className="relative group overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 sm:h-72 md:h-[400px] lg:h-full object-cover transform group-hover:scale-110 transition duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/30 transition"></div>
              <div className="absolute bottom-6 left-4 md:left-6">
                <div className="w-[1px] h-8 md:h-10 bg-white/60 mb-2"></div>
                <span className="text-xs md:text-sm text-gray-300">{item.no}</span>
                <h3 className="text-lg md:text-2xl font-body mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Modal */}
      {activeFeature && (
        <div className="fixed inset-0 cursor-pointer flex items-center justify-center z-50 px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 cursor-pointer backdrop-blur-sm"
            onClick={() => setActiveFeature(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-[#1a1a1a] text-white max-w-lg w-full rounded-2xl shadow-2xl p-8 z-10 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setActiveFeature(null)}
              className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-cursive1 mb-4">
              {activeFeature.title}
            </h2>
            <p className="text-gray-300 font-body leading-relaxed">
              {activeFeature.desc}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default InteriorHero;
