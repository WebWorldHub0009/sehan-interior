// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCouch,
  FaPaintBrush,
  FaHandsHelping,
  FaPhoneAlt,
} from "react-icons/fa";
import bgImage from "../assets/images/home/fbg.jpg"; 

const faqCategories = {
  "Design Philosophy": {
    icon: <FaPaintBrush className="text-gray-300 text-xl" />,
    faqs: [
      {
        question: "What is Sehan Interior’s design style?",
        answer:
          "We specialize in modern minimalism blended with timeless elegance, ensuring each space reflects sophistication and functionality.",
      },
      {
        question: "Do you customize interiors for different budgets?",
        answer:
          "Yes, our designs are highly flexible. We create premium yet practical solutions based on your lifestyle and budget.",
      },
      {
        question: "Do you only work on residential projects?",
        answer:
          "No, we design both residential and commercial interiors including homes, offices, and luxury retail spaces.",
      },
    ],
  },
  "Services": {
    icon: <FaCouch className="text-gray-300 text-xl" />,
    faqs: [
      {
        question: "What services do you provide?",
        answer:
          "We provide end-to-end interior design services including space planning, furniture selection, lighting, and decor.",
      },
      {
        question: "Do you handle turnkey projects?",
        answer:
          "Yes, we take complete responsibility — from concept to execution — so you don’t have to worry about anything.",
      },
      {
        question: "Do you collaborate with architects?",
        answer:
          "Absolutely. We often partner with architects and builders to bring holistic designs to life.",
      },
    ],
  },
  "Process & Pricing": {
    icon: <FaHandsHelping className="text-gray-300 text-xl" />,
    faqs: [
      {
        question: "How does your design process work?",
        answer:
          "We start with a consultation, then develop mood boards, 3D renders, and finally execute with precision and quality.",
      },
      {
        question: "Do you charge for consultation?",
        answer:
          "The first consultation is complimentary. Detailed project planning and design comes with a professional fee.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Payments are structured in milestones aligned with project progress, ensuring clarity and trust.",
      },
    ],
  },
  "Support": {
    icon: <FaPhoneAlt className="text-gray-300  text-xl" />,
    faqs: [
      {
        question: "How can I contact Sehan Interior?",
        answer:
          "You can call us directly or connect via WhatsApp/Instagram for quick responses.",
      },
      {
        question: "Do you provide post-project support?",
        answer:
          "Yes, we assist with maintenance guidance, decor updates, and long-term design improvements.",
      },
      {
        question: "Where is your studio located?",
        answer:
          "We are based in Kanpur, serving clients locally and across India.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Design Philosophy");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-5 px-4 md:px-10 bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000000b0] z-0" />

      {/* FAQ Container */}
      <div className="relative max-w-7xl mx-auto rounded-3xl  z-10">
        <div className="text-center py-14 px-6 border-b border-gray-800">
          <h2 className="text-4xl font-bold font-cursive1 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto text-sm sm:text-base">
            Learn more about <span className="text-[#D4AF37]">Sehan Interior</span> and how we bring timeless elegance to your spaces.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Tabs with Icons */}
          <div className="md:w-1/3 bg-[#00000075] p-6 border-r border-gray-800 flex flex-col gap-4">
            {Object.entries(faqCategories).map(([category, data], idx) => (
              <motion.button
                key={idx}
                onClick={() => handleTabChange(category)}
                whileTap={{ scale: 0.98 }}
                className={`text-left w-full font-body px-5 py-4 rounded-lg flex items-center gap-3 font-medium text-sm md:text-base transition-all duration-200 ${
                  activeTab === category
                    ? "bg-[#1f1f1f] text-white shadow"
                    : "bg-transparent text-gray-400 hover:text-white cursor-pointer"
                }`}
              >
                {data.icon}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Questions */}
          <div className="md:w-2/3 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {faqCategories[activeTab].faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-800 py-4">
                    <button
                      className="w-full flex font-body cursor-pointer justify-between items-center text-left font-medium text-base sm:text-lg"
                      onClick={() =>
                        setOpenIndex(index === openIndex ? null : index)
                      }
                    >
                      {faq.question}
                      <span className="text-gray-300 text-2xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-300 mt-3 text-sm leading-relaxed overflow-hidden"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
