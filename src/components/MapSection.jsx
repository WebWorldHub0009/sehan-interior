// src/components/MapSection.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#F7F5F2] flex flex-col lg:flex-row items-stretch font-body">
      {/* Left: Map */}
     

      {/* Right: Info */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black/90 text-white p-10 md:p-14  relative overflow-hidden">
        {/* Decorative background accent */}
       

        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-cursive1 text-[#D4AF37] mb-4">
            Visit Our Studio
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed font-body">
            At <span className="font-cursive2 text-[#D4AF37]">Sehan Interior</span>, 
            every space is designed with a perfect blend of creativity and elegance. 
            Step into our studio to experience timeless interiors.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
              <span>
                Plot No. 344A, Ground Floor Block A PAC Road <br />
                Near Sn Mini Mart, Ram Puram, Shyam Nagar <br />
                Kanpur, Uttar Pradesh - 208015, India
              </span>
            </div>
          
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#D4AF37]" />
              <a
                href="mailto:info@sehaninteriors.in"
                className="hover:text-[#D4AF37] transition"
              >
                info@sehaninteriors.in
              </a>
            </div>
          
          </div>

          {/* Call Now Button */}
          
        </div>
      </div>
       <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114345.6663696178!2d80.28038670997944!3d26.41372679262178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x399c47146f51aa9b%3A0x2e226fb6d07c414b!2sGround%20Floor%2C%20Block%20A%2C%20Plot%20No.344A%2C%20PAC%20Rd%2C%20nearby%20Sn%20Mini%20Mart%2C%20Ram%20Puram%2C%20Shyam%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh%20208015!3m2!1d26.413750399999998!2d80.3627882!5e0!3m2!1sen!2sin!4v1756538502583!5m2!1sen!2sin"
          className="w-full h-full "
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
