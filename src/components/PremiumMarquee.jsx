// src/components/ServicesMarquee.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaDraftingCompass,
  FaCouch,
  FaBuilding,
  FaPaintRoller,
  FaProjectDiagram,
  FaHandshake,
  FaHome,
  FaLeaf,
} from "react-icons/fa";

const services = [
  { name: "Interior Design", icon: <FaHardHat /> },
  { name: "Modular Kitchen", icon: <FaBuilding /> },
  { name: "Luxury Bedroom design", icon: <FaDraftingCompass /> },
  { name: "Premium Living Area Design", icon: <FaProjectDiagram /> },
  { name: "Classy Roof-Top Corners Design", icon: <FaHome /> },
  { name: "Gypsum Board Design ", icon: <FaCouch /> },
  { name: "Pvc Panel Design", icon: <FaPaintRoller /> },
  { name: "3d WallPaper Design", icon: <FaHandshake /> },
  { name: "Classy Wall Molding Design", icon: <FaHome /> },

];

const ServicesMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] py-2">
      {/* Overlay Gradient Edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />

      {/* Marquee Container */}
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white text-lg md:text-xl font-body tracking-wide 
                       hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[#D4AF37] text-sm">{service.icon}</span>
            <span className="font-cursive1 text-sm">{service.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesMarquee;
