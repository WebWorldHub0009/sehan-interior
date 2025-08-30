import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryHero from "../components/GalleryHero";

// ✅ Interior product images
import img1 from "../assets/images/gallery/k.jpg";
import img2 from "../assets/images/gallery/k2.jpg";
import img3 from "../assets/images/gallery/k3.jpg";
import img4 from "../assets/images/gallery/led.jpg";
import img5 from "../assets/images/gallery/led2.jpg";
import img6 from "../assets/images/gallery/led3.jpg";
import img7 from "../assets/images/gallery/ward.jpg";
import img8 from "../assets/images/gallery/ward2.jpg";
import img9 from "../assets/images/gallery/ward3.jpg";
import img10 from "../assets/images/gallery/bed.jpg";
import img11 from "../assets/images/gallery/ban.jpg";
import img12 from "../assets/images/gallery/ban2.jpg";

const Gallery = () => {
  const images = [
    { src: img1, title: " Modular Kitchen" },
    { src: img2, title: "Kitchen With Dining Area" },
    { src: img3, title: "Modular Kitchen" },
    { src: img4, title: "Led Setup Design" },
    { src: img5, title: "Led Setup Design" },
    { src: img6, title: "Led Setup Design" },
    { src: img7, title:"Wardrobe" },
    { src: img8, title: "Wardrobe" },
    { src: img9, title: "Wardrobe" },
    { src: img10, title: "BedRoom" },
    { src: img11, title: "Living Grill Design" },
    { src: img12, title: "Living Grill Design" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <>
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Section */}
      <section className="w-full py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-cursive1 font-bold text-gray-900 mb-2 leading-snug">
            “Crafting Premium Interiors That Define Your Lifestyle”
          </h2>

          <p className="text-gray-600  mx-auto mb-10 font-body">
            At <span className="font-cursive2 text-3xl text-[#D4AF37] ">Sehan Interiors</span>, 
            we design spaces that blend elegance, comfort, and timeless luxury. 
            Explore our portfolio of kitchens, wardrobes, living spaces, and 
            bespoke furniture — where every detail is made to perfection.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer ${
                  index % 6 === 0 || index % 6 === 1 ? "lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-black font-bold text-2xl font-cursive1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal with Slider */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
            >
              <X size={28} />
            </button>

            <div className="relative max-w-4xl w-full">
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-center text-white mt-4 text-lg font-cursive2">
                {images[selectedIndex].title}
              </p>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-10 transform -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
