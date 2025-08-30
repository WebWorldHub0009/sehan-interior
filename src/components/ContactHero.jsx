// src/components/ContactHero.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import bg from "../assets/images/about/cbg.avif";

const ContactHero = () => {
  return (
    <section
      className="relative h-[90vh] w-full bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Bottom Left */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start px-6 md:px-16 pb-10 text-left">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-cursive2 text-white drop-shadow-lg leading-tight">
          Get in Touch
        </h1>

        {/* Paragraph */}
        <p className="mt-6 max-w-xl font-body text-lg md:text-xl text-gray-300 leading-relaxed">
          Let’s create your dream interior together. Our experts at{" "}
          <span className="font-cursive2 font-bold text-1xl text-[#D4AF37]">
            Sehan Interior
          </span>{" "}
          are just a message away.
        </p>

        {/* Call Now Button */}
        <a
          href="tel:+918299652635"
          className="mt-4 inline-block px-8 py-2 rounded-xl border border-white text-gray-400 font-body text-md transition-all"
        >
          Call Now
        </a>
      </div>

      {/* Social Media Icons - Right Vertical */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-5 z-10">
        {[
          { icon: <FaFacebookF />, link: "https://facebook.com" },
          { icon: <FaInstagram />, link: "https://instagram.com" },
          { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
          { icon: <FaTwitter />, link: "https://twitter.com" },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-white hover:bg-ggray-600 hover:text-black transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactHero;
