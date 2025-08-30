import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from "./components/ScrollToTop"
import FloatingButtons from './components/FloatingButtons'
import Footer from "./components/Footer"
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar"

const App = () => {
  return (
 <BrowserRouter>
 <ScrollToTop/>
<Navbar/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>

 </Routes>
 <FloatingButtons/>
 <Footer/>
 </BrowserRouter>
  )
}

export default App