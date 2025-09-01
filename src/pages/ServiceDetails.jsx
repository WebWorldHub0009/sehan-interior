// src/pages/ServiceDetail.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import servicesData from "../pages/service";
import HowItWorks from "../components/HowItWork";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-cursive2 text-gray-700">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end justify-start bg-black/50">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-8 md:p-20 max-w-3xl">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-cursive1 text-white drop-shadow-xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-2xl font-cursive2 text-gray-100 italic leading-relaxed"
          >
            {service.quote}
          </motion.p>
        </div>
      </section>

   {/* Heading + Description */}
<section className="py-16 bg-black w-full">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-4xl md:text-5xl font-cursive2 text-[#D4AF37] mb-6"
    >
      {service.title}
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Image */}
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        src={service.image}
        alt={service.title}
        className="rounded-3xl shadow-2xl"
      />

      {/* Right Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg md:text-xl text-gray-300 font-body leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </div>
  </div>
</section>

      <HowItWorks />
      {/* Extra Sections */}
     {service.extraSections && (
 <section className="relative py-12 w-full bg-black">
  {/* Background overlay agar future me chahiye to use */}
  <div className="absolute inset-0"></div>

  <div className="container mx-auto px-6 relative">
    <div className="grid md:grid-cols-2 gap-20">
      {service.extraSections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className=""
        >
          {/* Heading with underline effect */}
          <h3 className="relative text-3xl md:text-4xl font-cursive1 text-[#D4AF37] mb-6">
            {section.heading}
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"></span>
          </h3>

          {/* Content */}
          <p className="relative text-lg font-body font-cursive2 text-gray-300 leading-relaxed z-10">
            {section.content}
          </p>
        </motion.div>
      ))}
    </div>

    {/* CTA Below */}
    <div className="mt-20 text-center px-6 max-w-3xl mx-auto">
      <p className="text-lg md:text-xl font-body text-gray-300 mb-6">
        At <span className="text-[#D4AF37] font-cursive1">Sehan Interio</span>, 
        we craft not just interiors, but lifestyles—where elegance meets comfort.
      </p>
      <Link to={"/contact"}>
        <button className="bg-gradient-to-r cursor-pointer from-[#D4AF37] to-yellow-600 text-white px-10 py-4 rounded-full text-base font-cursive2 hover:scale-105 hover:shadow-lg transition">
          Begin Your Design Journey
        </button>
      </Link>
    </div>
  </div>
</section>

  
)}

    </div>
    
  );
};

export default ServiceDetail;
