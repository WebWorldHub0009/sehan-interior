import React from "react";
import why1 from "../assets/images/home/h2.jpg";
import why2 from "../assets/images/home/h3.jpg";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-8 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-center text-6xl text-gray-300 font-cursive2 md:text-8xl font-serif tracking-widest mb-8">
        WHY <span className="inline-block ">SEHAN</span>
      </h2>

      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-8 items-center border-t border-b border-gray-700 py-10">
        {/* Image Left */}
        <div>
          <img
            src={why1}
            alt="Luxury Interiors"
            className="w-full h-[250px] object-cover grayscale rounded-md"
          />
        </div>

        {/* Text Right */}
        <div className="text-gray-300 leading-relaxed">
         <p className="font-body">
  At <span className="text-[#D4AF37]">Sehan Interior</span>, we
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
      <div className="grid md:grid-cols-2 gap-8 items-center border-b border-gray-700 py-5 mt-5">
        {/* Text Left */}
        <div className="text-gray-300 leading-relaxed">
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
        <div>
          <img
            src={why2}
            alt="Premium Design"
            className="w-full h-[250px] object-cover grayscale rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
