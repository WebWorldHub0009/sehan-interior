// src/components/ServicesSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";


// Example service images (replace with real images)
import building from "../assets/images/home/h3.jpg";

const services = [
  { title: "Modular Kitchen", slug: "modular-kitchen",image:building },
  { title: "Living Room Design", slug: "living-room",image:building  },
  { title: "Bedroom Design", slug: "bedroom-design" ,image:building },
  { title: "Rooftop Corner Design", slug: "rooftop-design" ,image:building },
  { title: "Wall Molding Design", slug: "wall-molding",image:building  },
  { title: "Gypsum Board Design", slug: "gypsum-board",image:building  },
  { title: "PVC Panel Design", slug: "pvc-panel" ,image:building },
  { title: "Modern Carpentry", slug: "modern-carpentry",image:building  },
  { title: "False Ceiling Design", slug: "false-ceiling",image:building  },
  { title: "Wardrobe Design", slug: "wardrobe-design",image:building  },
  { title: "Office Interior", slug: "office-interior",image:building  },
  { title: "Hotel & Restaurant Interiors", slug: "hotel-restaurant-interiors",image:building  },
  { title: "Commercial Space Design", slug: "commercial-space-design",image:building  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#faf5ec] py-10 overflow-hidden">
      {/* Scattered Hollow Golden Bubbles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 md:w-8 md:h-8 border-2 border-[#f3d985] rounded-full opacity-80 animate-bubbleGlow`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: "0 0 12px 2px rgba(212, 175, 55, 0.8), inset 0 0 8px rgba(212,175,55,0.5)",
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + i % 5}s`,
          }}
        ></div>
      ))}

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="font-cursive1 text-5xl md:text-6xl text-black tracking-wide">
            Our Premium <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="mt-6 font-body text-gray-800 leading-relaxed text-base md:text-lg">
            At <span className="text-[#D4AF37]">Sehan Interior</span>, we craft
            bespoke solutions that merge functionality with refined aesthetics.
            From modern kitchens to timeless living spaces, each service is a
            reflection of precision, artistry, and trust.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-xl bg-black/20">
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

                  {/* Big Number */}
                  <div className="absolute top-8 left-8 font-cursive2 text-white text-7xl opacity-20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-cursive2 text-2xl md:text-3xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gray-300 mt-2 opacity-90">
                      Elegant, functional & tailor-made to suit your lifestyle.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes bubbleFloat {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 0.7; }
          }
          .animate-bubbleGlow {
            animation: bubbleFloat infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
