import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30 py-2 pl-4 pr-2">
          <a href="#home" className="text-white font-medium tracking-wide">Temlyder</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#clients" className="hover:text-white">Clients</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium tracking-wide hover:bg-zinc-200 transition-colors">Hire Me</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
