// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaImage,
  FaCouch,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import footerBg from "../assets/images/home/ft4.jpg"; // make sure you have a footer background image

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Interior services (without images)
const services = [
  { title: "Modular Kitchen", slug: "modular-kitchen" },
  { title: "Living Room Design", slug: "living-room" },
  { title: "Bedroom Design", slug: "bedroom-design" },
  { title: "Rooftop Corner Design", slug: "rooftop-design" },
  { title: "Wall Molding Design", slug: "wall-molding" },
  { title: "Gypsum Board Design", slug: "gypsum-board" },
  { title: "PVC Panel Design", slug: "pvc-panel" },
  { title: "Modern Carpentry", slug: "modern-carpentry" },
  { title: "False Ceiling Design", slug: "false-ceiling" },
  { title: "Wardrobe Design", slug: "wardrobe-design" },
  { title: "Office Interior", slug: "office-interior" },
  { title: "Hotel & Restaurant Interiors", slug: "hospitality-interior" },
  { title: "Commercial Space Design", slug: "commercial-interior" },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-20 pb-10 px-6 md:px-16 overflow-hidden font-body bg-black text-gray-300 bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About Section */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-cursive1 text-5xl text-[#D4AF37] mb-2">
            Sehan Interiors
          </h4>
          <p className="leading-relaxed font-body">
            Sehan Interiors transforms your spaces with elegance, functionality,
            and timeless designs — creating homes and workplaces you’ll love.
          </p>

          <div className="mt-6 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              ["https://www.youtube.com", FaYoutube],
              ["https://www.twitter.com", FaTwitter],
              ["https://www.linkedin.com", FaLinkedinIn],
              ["https://www.pinterest.com", FaPinterestP],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-gray-400 transition"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Webmail Button */}
          <div className="mt-6">
            <a
              href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#b8922e] transition"
            >
              <FaEnvelope /> Webmail
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-cursive2 text-4xl mb-4 text-[#D4AF37]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Gallery", "/gallery", <FaImage />],
              ["Contact", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-cursive2 text-4xl text-[#D4AF37]">
            Emails
          </h4>
          <ul className="mt-2 space-y-2">
            {["Info@sehaninteriors.in", "Sehaninteriors@gmail.com"].map(
              (email, i) => (
                <li key={i}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center space-x-2 hover:text-[#D4AF37] transition"
                  >
                    <FaEnvelope className="text-[#D4AF37]" />
                    <span>{email}</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-cursive2 text-4xl mb-4 text-[#D4AF37]">
            Our Services
          </h4>
          <ul className="space-y-2">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center">
                <FaCouch className="text-[#D4AF37] mr-2" />
                <Link
                  to={`/services/${slug}`}
                  className="hover:text-[#D4AF37] transition"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
       {/* Contact Info */}
<div>
  <h4 className="font-cursive2 text-4xl mb-4 text-[#D4AF37]">
    Contact Info
  </h4>
  <address className="not-italic leading-relaxed mb-4 font-body">
    Plot No. 344A, Ground Floor, Block A  
    PAC Road, Near Sn Mini Mart,  
    Ram Puram, Shyam Nagar,  
    Kanpur, Uttar Pradesh - 208015, India
  </address>

  {/* Phone */}
  <p className="text-sm mb-2 flex items-center gap-2">
    <FaPhoneAlt className="text-[#D4AF37]" />
    <a href="tel:+918299652635">+91 82996 52635</a>
  </p>

  {/* ✅ NCS IDs */}
  <p className="text-sm mb-2 flex items-center gap-2">
    <FaInfoCircle className="text-[#D4AF37]" />
    NCS ID: <span className="ml-1">E20H84-1952329189216</span>
  </p>
  <p className="text-sm mb-4 flex items-center gap-2">
    <FaInfoCircle className="text-[#D4AF37]" />
   UDYAM-UP-43-0156845
  </p>

  <div className="mb-4 flex justify-center items-center relative right-6">
    <div>

    <Translator />
    </div>
  </div>
</div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Sehan Interiors. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#D4AF37] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
