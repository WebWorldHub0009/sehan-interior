import React from "react";
import {
  FaPalette,
  FaDraftingCompass,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Consultation & Concept",
    description:
      "We start by understanding your lifestyle, preferences, and vision for the space. Every detail begins with you.",
    icon: <FaPalette className="text-5xl text-[#D4AF37]" />,
    extra:
      "Your ideas become the foundation of a luxury interior tailored to your taste.",
  },
  {
    id: 2,
    title: "3D Visualization & Design",
    description:
      "Our designers craft immersive 3D models, bringing your dream space to life before execution.",
    icon: <FaDraftingCompass className="text-5xl text-[#D4AF37]" />,
    extra:
      "This ensures clarity, precision, and your approval before we proceed.",
  },
  {
    id: 3,
    title: "Initial Advance & Planning",
    description:
      "We take a partial advance to initiate the project, ensuring materials, resources, and schedules are secured.",
    icon: <FaMoneyBillWave className="text-5xl text-[#D4AF37]" />,
    extra:
      "The balance is settled after the project is successfully completed to your satisfaction.",
  },
  {
    id: 4,
    title: "Execution & Final Touch",
    description:
      "Our experts bring the design to life with flawless execution and a luxury finish.",
    icon: <FaCheckCircle className="text-5xl text-[#D4AF37]" />,
    extra:
      "We ensure your interiors are not just stunning but timeless.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-8 ">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm font-cursive1 text-[#D4AF37] tracking-widest uppercase">
          A Journey To Elegance
        </p>
        <h2 className="text-4xl md:text-5xl font-cursive2 text-gray-900">
          How It Works
        </h2>
      </div>

      {/* Mobile Slider / Desktop Grid */}
      <div className="w-full mx-auto">
        {/* Mobile: slider */}
        <div className="flex md:hidden overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory px-4">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="snap-center flex-shrink-0 w-[80%] bg-white border border-gray-200 rounded-3xl p-8 shadow-md 
                         hover:shadow-xl transition-all duration-500 relative"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-[#D4AF37] 
                                text-[#D4AF37] font-semibold">
                  {idx + 1}
                </div>
              </div>
              {/* Icon */}
              <div className="flex justify-center mb-6 mt-6">{step.icon}</div>
              {/* Title */}
              <h3 className="text-center font-cursive1 text-xl mb-3 text-gray-900">
                {step.title}
              </h3>
              {/* Desc */}
              <p className="text-center text-gray-700 text-sm mb-3 leading-relaxed font-body">
                {step.description}
              </p>
              {/* Extra */}
              <p className="text-center text-gray-500 text-xs italic font-cursive2">
                {step.extra}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="relative group border border-gray-200 rounded-3xl p-8 bg-white shadow-lg 
                         hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Number Badge */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-[#D4AF37] 
                                text-[#D4AF37] font-bold text-lg group-hover:bg-[#D4AF37] group-hover:text-white transition">
                  {idx + 1}
                </div>
              </div>
              {/* Icon */}
              <div className="flex justify-center mb-6 mt-6 group-hover:scale-110 transition">
                {step.icon}
              </div>
              {/* Title */}
              <h3 className="text-center font-cursive1 text-2xl mb-4 text-gray-900">
                {step.title}
              </h3>
              {/* Desc */}
              <p className="text-center font-body text-gray-700 text-sm mb-4 leading-relaxed">
                {step.description}
              </p>
              {/* Extra */}
              <p className="text-center text-gray-500 text-sm italic font-body">
                {step.extra}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
     
    </section>
  );
};

export default HowItWorks;
