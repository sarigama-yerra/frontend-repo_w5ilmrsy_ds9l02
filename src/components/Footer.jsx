import React from 'react'
import { Instagram, Youtube, ScreenShare, Camera } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-zinc-400 text-sm">© {new Date().getFullYear()} Temlyder — All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Instagram className="h-4 w-4 text-white" /></a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Youtube className="h-4 w-4 text-white" /></a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><ScreenShare className="h-4 w-4 text-white" /></a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Camera className="h-4 w-4 text-white" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
