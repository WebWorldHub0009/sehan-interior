// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Zaid Khan",
    title: "Founder, Classic Couture",
    text: "Sehan Interior exceeded all my expectations. Their attention to detail, passion for design, and dedication to timeless interiors set them apart.",
  },
  {
    name: "Meera Sharma",
    title: "CEO, Modern Vogue",
    text: "It’s rare to find a team that blends tradition and innovation so seamlessly. Every space designed by Sehan Interior reflects luxury and elegance.",
  },
  {
    name: "Rohan Verma",
    title: "Director, Heritage Styles",
    text: "Working with Sehan Interior has been a delight. Their expertise in creating refined spaces with elegance and precision is unmatched.",
  },
  {
    name: "Sana Iqbal",
    title: "Designer, Ethnic Trends",
    text: "Every project by Sehan Interior feels like a masterpiece. Their interiors reflect passion, precision, and timeless sophistication.",
  },
  {
    name: "Arjun Patel",
    title: "Stylist, The Modern Man",
    text: "From minimalism to grandeur, Sehan Interior always delivers excellence. Highly recommended for anyone seeking refined living spaces.",
  },
  {
    name: "Priya Sethi",
    title: "Interior Blogger",
    text: "Collaborating with Sehan Interior has been a dream. Their designs are timeless, and the craftsmanship is outstanding.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-10 font-body">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-cursive1 text-[#D4AF37] drop-shadow-sm">
          What Our Clients Say About{" "}
          <span className="font-cursive2 text-gray-200">Sehan Interior</span>
        </h2>
        <p className="italic text-gray-400 mt-3 text-sm md:text-lg max-w-xl mx-auto">
          “Where elegance meets purpose, and every detail tells a story.”
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="rounded-2xl p-8 h-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg 
              text-gray-300 transition-transform hover:scale-105 hover:bg-white/10"
            >
              <FaQuoteLeft className="text-3xl mb-4 text-[#D4AF37]" />
              <p className="mb-6 italic text-gray-300">"{item.text}"</p>
              <div>
                <p className="font-cursive2 text-lg text-[#D4AF37]">{item.name}</p>
                <p className="text-sm text-gray-400">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
