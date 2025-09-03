import React from "react";
import { Link } from "react-router-dom";

export default function SehanBadge() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] py-6 px-6 md:px-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#111111]/80 border border-[#D4AF37]/40 shadow-lg rounded-2xl px-6 md:px-10 py-6 backdrop-blur-md">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-cursive2 font-bold text-[#D4AF37] tracking-wide">
            Luxury Within Your Budget
          </h3>
          <p className="mt-2 text-gray-300 text-sm md:text-base font-body leading-relaxed">
            At <span className=" font-cursive1 text-[#D4AF37]">Sehan Interior</span>, 
            we redefine elegance by making premium designs accessible to everyone.  
            Whether you are from the middle class or the high class, we bring 
            <span className="text-[#D4AF37] font-cursive1"> budget-friendly luxury </span> 
            that transforms your home into a masterpiece without stretching your wallet.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="mt-4 md:mt-0">
          <Link
            to='/contact'
            className="px-8 py-2 text-lg  font-body rounded-full bg-[#D4AF37] text-black hover:bg-[#c09a2e] transition-all shadow-md hover:shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
