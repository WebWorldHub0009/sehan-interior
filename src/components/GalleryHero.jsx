import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/images/about/sehan.jpg"; 

const GalleryHero = () => {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute bottom-12 left-12 text-white max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-cursive1 drop-shadow-lg"
        >
          Our Exclusive Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-xl font-body tracking-wide text-gray-200"
        >
          Where premium interiors meet timeless elegance ✨
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="block mt-6 text-xl font-cursive2 text-amber-400"
        >
          Designed by Sehan Interior
        </motion.span>
      </div>
    </section>
  );
};

export default GalleryHero;
