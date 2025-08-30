// src/components/OurStory.jsx
import React from "react";
import imgLeft from "../assets/images/about/o2.avif";   
import imgRight from "../assets/images/about/o3.avif"; 

const OurStory = () => {
  return (
    <section className="bg-black text-gray-300 px-6 md:px-12 lg:px-20 py-14 font-body">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Content */}
        <div className="flex flex-col justify-start">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-light leading-snug font-cursive2">
            Vision in Purpose and <br />
            Beauty of {" "} 
             <span className="font-body  text-[#D4AF37]">
               Sehan Interior
            </span>
          </h2>

          {/* Content */}
          <p className="mt-6 max-w-lg">
            Founded in the 2000s, Sehan Interior was born from a fascination
            with material purity and a relentless curiosity for innovation.
          </p>
          <p className="mt-4 max-w-lg">
            We transform spaces into timeless experiences — blending light,
            form, and functionality with elegance.
          </p>

          {/* Small Image */}
          <div className="mt-8 w-[250px]">
            <img
              src={imgLeft}
              alt="Our Story Left Small"
              className="w-[50] object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Right Large Image with Caption Below */}
        <div className="flex flex-col">
          <img
            src={imgRight}
            alt="Our Story Right"
            className="w-full h-auto object-cover rounded-md"
          />
          <p className="mt-4 text-sm italic text-gray-400 max-w-md">
            What began as a study in design has grown into a leading voice in
            contemporary interiors — where form, light, and function intersect.
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700 text-center mt-10">
        <div className="py-6 px-6">
          <h3 className="text-3xl font-bold text-gray-300">10+</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            Years of Innovation <br />
            Timeless ideas shaped from refined materials, crafted expertise.
          </p>
        </div>
        <div className="py-6 px-6">
          <h3 className="text-3xl font-bold text-gray-300">200+</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            Nation Collaborations <br />
            Trusted by architects & designers nationwide, united by vision.
          </p>
        </div>
        <div className="py-6 px-6">
          <h3 className="text-3xl font-bold text-gray-300">100+</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            Projects Realized <br />
            Each project tailored to space, scale & lasting purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
