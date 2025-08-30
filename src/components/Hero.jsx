// src/components/HeroSection.jsx
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import baseImage from "../assets/images/home/bh5.jpg";
import Navbar from "../components/Navbar"

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

const AUTO_SPEED_MS = 4000;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔹 Preload next image
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].img;
  }, [activeIndex]);

  // 🔹 Auto-play with pause on hover
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_SPEED_MS);
    return () => clearInterval(t);
  }, [paused]);

  const activeSlide = slides[activeIndex];
  const bgKey = useMemo(() => `bg-${activeIndex}`, [activeIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
    

      {/* Background crossfade + zoom */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgKey}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeSlide.img || baseImage})`,
              backgroundAttachment: "fixed",
            }}
          >
            <img
              src={activeSlide.img}
              alt={activeSlide.title}
              loading="lazy"
              className="hidden"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Left Overlay (Slide List) */}
      <div
        className="absolute top-0 left-0 h-full w-full md:w-1/3 bg-black/60"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="h-full w-full flex items-center pl-6 md:pl-16 pr-6 py-8">
          <div className="relative w-full max-w-sm">
            <ul className="space-y-6">
              {slides.map((slide, i) => {
                const isActive = i === activeIndex;
                return (
                  <li
                    key={slide.id}
                    className="relative cursor-pointer"
                    onClick={() => setActiveIndex(i)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-bar"
                        className="absolute -left-6 top-0 bottom-0 w-1 rounded bg-gradient-to-b from-gray-200 to-gray-500"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}

                    <motion.p
                      className={`text-sm mb-1 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                      animate={{ opacity: isActive ? 1 : 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {slide.id.toString().padStart(2, "0")} .
                    </motion.p>

                    <div className="overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isActive ? `active-${i}` : `idle-${i}`}
                          initial={{ y: isActive ? 16 : 0, opacity: isActive ? 0 : 1 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            x: isActive ? 32 : 0,
                            scale: isActive ? 1.06 : 1,
                          }}
                          exit={{ y: isActive ? -12 : 0, opacity: isActive ? 0 : 1 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className={`will-change-transform ${
                            isActive ? "text-white" : "text-gray-300"
                          }`}
                        >
                          <h3
                            className={`leading-tight ${
                              isActive
                                ? "text-2xl md:text-[28px] font-semibold"
                                : "text-lg opacity-80"
                            }`}
                          >
                            {slide.title}
                          </h3>
                          <p
                            className={`mt-0.5 ${
                              isActive ? "opacity-90" : "opacity-70"
                            } text-sm`}
                          >
                            {slide.subtitle}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="absolute inset-x-0 top-20 md:bottom-auto md:top-1/2 md:right-24 md:inset-x-auto md:-translate-y-1/2 text-white px-6 text-center md:text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={`right-${activeSlide.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-base md:text-xl font-light mb-1 md:mb-2 text-gray-300">
              {activeSlide.rightSubtitle}
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-normal lg:text-7xl text-gray-200 font-cursive2 font-bold leading-[1.05] tracking-wide">
              {activeSlide.rightTitle}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Search box */}
        <div className="mt-6 md:mt-8 flex items-center border-b border-white/90 pb-2 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:ml-auto">
          <FiSearch className="text-white text-xl mr-3" />
          <input
            type="text"
            placeholder="Search design ideas..."
            className="bg-transparent w-full focus:outline-none placeholder-white/80 text-base md:text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
