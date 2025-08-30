import React from 'react'
import HeroSection from '../components/Hero'
import AboutSection from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import ServicesMarquee from '../components/PremiumMarquee'
import ServicesSection from '../components/ServiceSection'
import InteriorHero from '../components/InteriorHero'
import FAQ from '../components/Faq'


const Home = () => {
  return (
    <>
   <HeroSection/>
   <AboutSection/>
   <ServicesMarquee/>
   <WhyChooseUs/>
   <ServicesSection/>
   <InteriorHero/>
   <FAQ/>
   <ServicesMarquee/>
    </>
  )
}

export default Home