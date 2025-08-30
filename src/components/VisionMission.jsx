// src/components/VisionMission.jsx
import React from "react";
import missionImg from "../assets/images/about/vm4.avif"; 
import visionImg from "../assets/images/about/vm2.jpg"; 

export default function VisionMission() {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Mission Side */}
        <div
          className="relative h-[500px] lg:h-[650px] bg-center bg-cover"
          style={{ backgroundImage: `url(${missionImg})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Mission Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-cursive1 text-[#D4AF37] mb-8 drop-shadow-lg">
                Our <span className="font-cursive2 text-white">Mission</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-body">
                At{" "}
                <span className="text-[#D4AF37] font-cursive2">
                  Sehan Interior
                </span>
                , our mission is to create interiors that inspire, uplift, and
                endure. We are dedicated to transforming ideas into elegant and
                functional spaces that balance artistry with precision. Every
                project reflects our commitment to timeless beauty, modern
                comfort, and trusted craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Side */}
        <div
          className="relative h-[500px] lg:h-[650px] bg-center bg-cover"
          style={{ backgroundImage: `url(${visionImg})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Vision Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-cursive1 text-[#D4AF37] mb-8 drop-shadow-lg">
                Our <span className="font-cursive2 text-white">Vision</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 font-body">
                At{" "}
                <span className="text-[#D4AF37] font-cursive2">
                  Sehan Interior
                </span>
                , our vision is to be a global name in interior design —
                redefining contemporary living with designs that embody elegance,
                minimalism, and sustainability. We aspire to create
                environments that enrich lifestyles, elevate everyday moments,
                and set new standards in timeless interior excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
