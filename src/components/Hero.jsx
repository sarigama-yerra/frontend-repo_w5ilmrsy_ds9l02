import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* Spline 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-400 mb-4">Premium Portfolio</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
              Temlyder — Filmmaker & Photographer
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300">
              Crafting high-impact visuals for brands, creators, and global campaigns.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium tracking-wide hover:bg-zinc-200 transition-colors">
                View Portfolio
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium tracking-wide backdrop-blur hover:bg-white/10 transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
