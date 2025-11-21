import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
