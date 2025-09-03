// src/components/HeroSection.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import baseImage from "../assets/images/home/bh5.jpg";

// Interior-related images
import livingRoom from "../assets/images/home/h3.jpg";
import modernKitchen from "../assets/images/home/kh6.jpg";
import luxuryBedroom from "../assets/images/home/bh4.jpg";
import officeSpace from "../assets/images/home/oh7.jpg";

const slides = [
  {
    id: 1,
    title: "Elegant Living, Timeless Design",
    subtitle: "Crafting spaces that reflect your lifestyle",
    rightTitle: "Living Room",
    rightSubtitle: "Modern Minimalism",
    img: livingRoom || baseImage,
  },
  {
    id: 2,
    title: "Where Function Meets Style",
    subtitle: "Bespoke interiors designed with precision",
    rightTitle: "Modular Kitchen",
    rightSubtitle: "Luxury Finish",
    img: modernKitchen || baseImage,
  },
  {
    id: 3,
    title: "Redefining Comfort",
    subtitle: "Bedrooms that balance elegance & serenity",
    rightTitle: "Luxury Bedroom",
    rightSubtitle: "Luxury & Comfort",
    img: luxuryBedroom || baseImage,
  },
  {
    id: 4,
    title: "Workspaces with Character",
    subtitle: "Designs that inspire productivity",
    rightTitle: "Premium Office",
    rightSubtitle: "Modern Aesthetic",
    img: officeSpace || baseImage,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // 🔍 Search states
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const activeSlide = slides[activeIndex];
  const bgKey = useMemo(() => `bg-${activeIndex}`, [activeIndex]);

  // Manual slide change
  const handleSlideClick = (i) => {
    setActiveIndex(i);
    setLoaded(false);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = slides.filter(
      (s) =>
        s.title.toLowerCase().includes(value) ||
        s.subtitle.toLowerCase().includes(value) ||
        s.rightTitle.toLowerCase().includes(value) ||
        s.rightSubtitle.toLowerCase().includes(value)
    );

    setSuggestions(filtered);
  };

  // Enter key → jump to first suggestion
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      const firstMatchIndex = slides.findIndex(
        (s) => s.id === suggestions[0].id
      );
      if (firstMatchIndex >= 0) {
        setActiveIndex(firstMatchIndex);
        setSuggestions([]);
        setQuery("");
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background with Blur Loader */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgKey}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeSlide.img || baseImage})`,
              backgroundAttachment: "fixed",
            }}
          >
            {!loaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}
            <img
              src={activeSlide.img}
              srcSet={`
                ${activeSlide.img} 600w,
                ${activeSlide.img} 1200w
              `}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={activeSlide.title}
              loading="eager" // ✅ instantly load hero image
              onLoad={() => setLoaded(true)}
              className="hidden"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 font-cursive1 bg-gradient-to-tr from-black/40 via-black/20 to-black/60" />
      </div>

      {/* LEFT SLIDE LIST (desktop only) */}
      <div className="absolute top-0 left-0 h-full text-gray-400 w-1/3 bg-black/60 hidden lg:block">
        <div className="h-full w-full flex items-center pl-6 md:pl-16 pr-6 py-8">
          <div className="relative w-full max-w-sm">
            <ul className="space-y-6">
              {slides.map((slide, i) => {
                const isActive = i === activeIndex;
                return (
                  <li
                    key={slide.id}
                    className="relative cursor-pointer"
                    onClick={() => handleSlideClick(i)}
                  >
                    {isActive && (
                      <span className="absolute -left-6 top-0  bottom-0 w-1 rounded bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]" />
                    )}
                    <p
                      className={`text-sm mb-1 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {slide.id.toString().padStart(2, "0")} .
                    </p>
                    <div>
                      <h3
                        className={`leading-tight ${
                          isActive
                            ? "text-2xl md:text-[28px] font-semibold text-white"
                            : "text-lg text-gray-300 font-cursive1"
                        }`}
                      >
                        {slide.title}
                      </h3>
                      <p
                        className={`mt-0.5 font-body ${
                          isActive ? "opacity-90" : "opacity-70"
                        } text-sm`}
                      >
                        {slide.subtitle}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="absolute inset-x-0 top-24 md:top-1/2 md:right-24 md:inset-x-auto md:-translate-y-1/2 text-white px-6 text-center lg:text-right">
        <h2 className="text-sm md:text-xl font-light mb-2 text-gray-300">
          {activeSlide.rightSubtitle}
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-cursive2 font-bold text-gray-200">
          {activeSlide.rightTitle}
        </h1>

        {/* 🔍 Search box */}
        <div className="relative mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:ml-auto">
          <div className="flex items-center border-b border-white/90 pb-2">
            <FiSearch className="text-white text-xl mr-3" />
            <input
              type="text"
              placeholder="Search design ideas..."
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent w-full focus:outline-none placeholder-white/80 text-base md:text-lg"
            />
          </div>

          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-2 left-0 w-full bg-black/80 backdrop-blur-md rounded-lg shadow-lg border border-white/20 z-50 max-h-40 overflow-y-auto">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-4 py-2 text-sm text-white hover:bg-white/20 cursor-pointer"
                  onClick={() => {
                    setActiveIndex(slides.findIndex((sl) => sl.id === s.id));
                    setSuggestions([]);
                    setQuery("");
                  }}
                >
                  {s.rightTitle} —{" "}
                  <span className="opacity-70">{s.subtitle}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* MOBILE SLIDE LIST (bottom) */}
      <div className="absolute bottom-4 left-0 w-full px-4 block lg:hidden">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => handleSlideClick(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm transition ${
                i === activeIndex
                  ? "bg-yellow-400 text-black font-semibold shadow-lg"
                  : "bg-white/20 text-white/80 hover:bg-white/30"
              }`}
            >
              {slide.rightTitle}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
