import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Camera, Phone, Mail, MapPin, ScreenShare } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,120,120,0.12),transparent)]" />

      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s collaborate</h2>
          <p className="mt-4 text-zinc-300 max-w-prose">For bookings, brand collaborations, or speaking — reach out via form or email. Include timelines, deliverables, and budget if available.</p>

          <div className="mt-8 space-y-3 text-zinc-300">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-white/90" /><a href="mailto:temlyder@gmail.com" className="hover:underline">temlyder@gmail.com</a></div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-white/90" />Location: xxxxxxxxx</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-white/90" /><a href="tel:+66961822121" className="hover:underline">+66 96 182 2121</a></div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"><Instagram className="h-4 w-4" /> Instagram</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"><Youtube className="h-4 w-4" /> YouTube</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"><ScreenShare className="h-4 w-4" /> TikTok</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"><Camera className="h-4 w-4" /> Portfolio</a>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Name</label>
              <input className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email</label>
              <input type="email" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-zinc-400 mb-2">Project Type</label>
            <select className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20">
              <option>Commercial Video</option>
              <option>Product Video</option>
              <option>Travel Film</option>
              <option>Photography</option>
              <option>Editing & Post</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-zinc-400 mb-2">Message</label>
            <textarea rows="5" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell me about your project…" />
          </div>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium tracking-wide hover:bg-zinc-200 transition-colors">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
