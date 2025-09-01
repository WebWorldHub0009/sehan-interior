import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"
import FloatingButtons from './components/FloatingButtons'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ServiceDetail from './pages/ServiceDetails'

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Services = lazy(() => import('./pages/Services'))

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <Suspense fallback={<div className="flex items-center justify-center h-screen text-xl font-body font-bold"></div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/services' element={<Services />} />
           <Route path='/services/:slug' element={<ServiceDetail />} />

        </Routes>
      </Suspense>

      <FloatingButtons />
      <Footer />
    </BrowserRouter>
  )
}

export default App
