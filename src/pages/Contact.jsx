// src/components/ContactSection.jsx
import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import bg from "../assets/images/about/cbg.avif";
import ContactHero from "../components/ContactHero";
import MapSection from "../components/MapSection";

const ContactSection = () => {
  return (
    <>
  <ContactHero/>
    <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#ebe8e5] text-[#1C1C1C] mt-1 font-body">
      
      {/* Left Panel: Info */}
      <div className="w-full lg:w-1/2 bg-[#faf7f7] px-8 py-16 shadow-2xl">
        <h2 className="text-4xl font-cursive1 font-bold mb-6 pb-3 inline-block border-b-4 border-[#D4AF37] text-[#D4AF37]">
          Let’s Connect
        </h2>
        <p className="text-lg text-[#5E5E5E] mb-10 font-body leading-relaxed">
          At{" "}
          <span className="font-cursive2 text-xl text-[#D4AF37]">
            Sehan Interior
          </span>
          , we craft elegant, functional, and timeless interiors that reflect your lifestyle and dreams.
        </p>

        <div className="space-y-6 text-sm sm:text-base">
          <div>
            <h4 className="font-semibold mb-1 text-[#D4AF37]">Contact Person</h4>
            <p className="font-body"> Iram Shamreen Malik</p>
            <p> +91 82996 52635</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1 text-[#D4AF37]">Emails</h4>
            <p>✉️ Info@sehaninteriors.in</p>
            <p>✉️ Sehaninteriors@gmail.com</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1 text-[#D4AF37]">Website</h4>
            <p className="flex items-center gap-2">
              <FaGlobe className="text-[#D4AF37]" /> www.sehaninteriors.in
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1 text-[#D4AF37]">Office Address</h4>
            <p className="leading-relaxed">
              Plot No. 344A, Ground Floor, Block A, PAC Road, <br />
              Nearby SN Mini Mart, Ram Puram Shyam Nagar, <br />
              Kanpur, Uttar Pradesh - 208015, India
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex space-x-5 text-2xl text-[#4B4B4B]">
          {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt].map((Icon, i) => (
            <Icon
              key={i}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Right Panel: Form */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="absolute inset-0 bg-black/80" />

        {/* Form */}
        <form
          action="https://formsubmit.co/Sehaninteriors@gmail.com"
          method="POST"
          className="relative z-10 w-full max-w-lg px-8 py-12"
        >
          <h3 className="text-2xl font-cursive2 font-bold text-[#D4AF37] mb-6 border-b-2 border-[#D4AF37] inline-block">
            Get in Touch
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D4AF37] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D4AF37] outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D4AF37] outline-none"
            />

            {/* Services Dropdown */}
            <select
              name="service"
              required
              className="bg-transparent border-b border-gray-400 text-white py-2 focus:border-[#D4AF37] outline-none"
            >
              <option value="" disabled selected className="text-gray-400">
                Select Service
              </option>
              <option value="Modular Kitchen" className="text-black">Modular Kitchen</option>
              <option value="Living Room Design" className="text-black">Living Room Design</option>
              <option value="Bedroom Design" className="text-black">Bedroom Design</option>
              <option value="Rooftop Corner Design" className="text-black">Rooftop Corner Design</option>
              <option value="Wall Molding Design" className="text-black">Wall Molding Design</option>
              <option value="Gypsum Board Design" className="text-black">Gypsum Board Design</option>
              <option value="PVC Panel Design" className="text-black">PVC Panel Design</option>
              <option value="Modern Carpentry" className="text-black">Modern Carpentry</option>
              <option value="False Ceiling Design" className="text-black">False Ceiling Design</option>
              <option value="Wardrobe Design" className="text-black">Wardrobe Design</option>
              <option value="Office Interior" className="text-black">Office Interior</option>
              <option value="Hotel & Restaurant Interiors" className="text-black">Hotel & Restaurant Interiors</option>
              <option value="Commercial Space Design" className="text-black">Commercial Space Design</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D4AF37] outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-3 font-cursive2 font-semibold rounded-full hover:bg-[#b8962f] transition duration-300 shadow-lg"
          >
            ✨ Send Message
          </button>

          {/* Formsubmit config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.sehaninteriors.in/" />
        </form>
      </div>
    </section>
    <MapSection/>
      </>
  );
};

export default ContactSection;
