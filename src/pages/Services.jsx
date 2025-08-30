import React from 'react'
import ServiceHero from '../components/ServiceHero'
import ServicesSection from '../components/ServiceSection'
import { FaCheckCircle, FaGem, FaCouch } from "react-icons/fa";
import { GiCompass, GiPaintRoller } from "react-icons/gi";
import ServicesMarquee from '../components/PremiumMarquee';

const Services = () => {
  return (
    <>
      <ServiceHero />
      <ServicesSection />

      {/* Premium Long Content Section */}
      <section className="relative bg-gradient-to-br bg-black px-6 md:px-16 py-10">
        <div className="max-w-6xl mx-auto text-left space-y-8">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-cursive2 text-gray-300 leading-tight">
            Crafting Timeless Interiors with <br /> <span className="text-[#D4AF37]">Passion & Precision</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 font-body max-w-4xl leading-relaxed">
            At <span className="font-cursive text-[#D4AF37]">Sehan Interior</span>, we believe that your space should be more 
            than just walls and furniture—it should be a reflection of your personality, lifestyle, 
            and aspirations. With years of expertise in luxury design, we bring a rare combination of 
            creativity, innovation, and craftsmanship that transforms ordinary spaces into extraordinary 
            experiences.
          </p>

          {/* Styled Divider */}
          <div className="w-32 h-1 bg-[#D4AF37] rounded-full"></div>

          {/* Main Long Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-cursive2 text-[#D4AF37]">Why Choose Sehan Interior?</h3>
              <p className="text-gray-300 font-body text-lg leading-relaxed">
                From contemporary minimalism to timeless classics, our services cover a wide spectrum of 
                design needs. We blend textures, materials, and colors to create interiors that are not 
                only visually striking but also deeply functional. Our process is tailored for every 
                client, ensuring your space tells a story that is uniquely yours.
              </p>
              <p className="text-gray-300 font-body text-lg leading-relaxed">
                Every detail matters—from the first sketch to the final finish, we ensure flawless 
                execution. Our commitment lies in delivering interiors that resonate with elegance, 
                exclusivity, and comfort.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-cursive2 text-[#D4AF37]">Our Promise</h3>
              <p className="text-gray-300 font-body text-lg leading-relaxed">
                We don’t just design; we create experiences. Sehan Interior is more than a design firm—
                it’s a journey toward redefining the way you live, work, and feel in your environment. 
                Every project is a partnership, built on trust, innovation, and an uncompromising pursuit 
                of perfection.
              </p>
              <p className="text-gray-300 font-body text-lg leading-relaxed">
                Step into the world of <span className="font-cursive text-[#D4AF37]"> luxury interiors </span> 
                where imagination meets execution, and let us craft spaces that inspire and endure for 
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServicesMarquee/>
    </>
  )
}

export default Services
