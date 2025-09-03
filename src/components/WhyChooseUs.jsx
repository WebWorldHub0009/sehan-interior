import React from "react";
import why1 from "../assets/images/home/h2.jpg";
import why2 from "../assets/images/home/h3.jpg";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-8 px-6 md:px-16 font-[Poppins]">
      {/* Title */}
      <h2 className="text-center text-4xl md:text-7xl lg:text-7xl text-gray-300 font-cursive2 font-bold tracking-widest mb-10">
        WHY <span className="inline-block text-[#D4AF37]">SEHAN</span>
      </h2>

      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-8 items-center border-t border-b border-gray-700 py-10">
        {/* Image Left */}
        <div className="order-1 md:order-1">
          <img
            src={why1}
            alt="Luxury Interiors"
            className="w-full h-[250px] object-cover grayscale rounded-md shadow-lg"
          />
        </div>

        {/* Text Right */}
        <div className="order-2 md:order-2 text-gray-300 leading-relaxed">
          <p className="font-body">
            At <span className="text-[#D4AF37] font-cursive1">Sehan Interior</span>, we
            transform ideas into timeless interiors. Our expertise blends
            elegance, minimalism, and comfort to create spaces that are as
            functional as they are beautiful. Every project is handled with a
            personalized approach, ensuring each detail aligns with your vision.  
            We specialize in premium finishes and bespoke solutions tailored to modern living.  
            From concept to execution, we ensure harmony between aesthetics and functionality.  
            Every project stands as a statement of luxury, crafted with passion and precision.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-8 items-center border-b border-gray-700 py-10 mt-10">
        {/* Text Left (on desktop), Top (on mobile) */}
        <div className="order-2 md:order-1 text-gray-300 leading-relaxed">
          <p className="font-body">
            With decades of combined experience, our team ensures precision and
            artistry in every detail. We believe interiors should go beyond
            design — they should inspire, uplift, and endure. Choosing us means
            choosing a legacy of quality, trust, and sophistication.  
            Our designs embrace both timeless tradition and modern innovation, creating interiors that age gracefully.  
            We partner with clients at every step, ensuring their individuality reflects in every space.  
            The result is not just an interior, but a meaningful lifestyle upgrade.
          </p>
        </div>

        {/* Image Right */}
        <div className="order-1 md:order-2">
          <img
            src={why2}
            alt="Premium Design"
            className="w-full h-[250px] object-cover grayscale rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
