// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiImage, FiInfo, FiGrid, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome className="inline mr-2 text-[#D4AF37]" /> },
    { name: "About Us", path: "/about", icon: <FiInfo className="inline mr-2 text-[#D4AF37]" /> },
    { name: "Gallery", path: "/gallery", icon: <FiImage className="inline mr-2 text-[#D4AF37]" /> },
    { name: "Services", path: "/services", icon: <FiGrid className="inline mr-2 text-[#D4AF37]" /> },
    { name: "Contact", path: "/contact", icon: <FiPhone className="inline mr-2 text-[#D4AF37]" /> },
  ];

  return (
    <>
      {/* 🔹 Premium Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-black/60 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-cursive2 text-[#D4AF37] tracking-wide"
          >
            Sehan Interiors
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-white font-body text-md">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="relative group cursor-pointer transition"
              >
                <Link
                  to={item.path}
                  className="flex items-center hover:text-[#D4AF37] transition"
                >
                  {item.icon} {item.name}
                </Link>
                {/* underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black/95 shadow-2xl transform transition-transform duration-500 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <h1 className="text-xl font-cursive2 text-[#D4AF37]">
            Sehan Interiors
          </h1>
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col space-y-6 mt-8 px-6 text-white font-body text-lg">
          {navLinks.map((item) => (
            <li key={item.name} className="group">
              <Link
                to={item.path}
                className="flex items-center hover:text-[#D4AF37] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} {item.name}
              </Link>
              <span className="block w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
