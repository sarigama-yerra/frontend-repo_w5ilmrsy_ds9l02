import React from 'react'
import { motion } from 'framer-motion'

const badges = [
  'Filmmaker & Photographer',
  'Adobe Prerelease Program contributor',
  'Brand Ambassador for Musicbed',
  'Content Creator for PolarPro',
  'Specialist in generative-AI-assisted editing workflows',
  '2.1M+ Pexels views',
  'Certified in Adobe Content Creation',
  'Adobe Marketing AI',
  'Oracle Cloud GenAI',
  'Google Digital Marketing',
]

const About = () => {
  return (
    <section id="about" className="relative bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,120,120,0.12),transparent)]" />

      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">About</h2>
          <p className="mt-6 text-zinc-300 leading-relaxed">
            Abdalah Errjaibi, known as Temlyder, crafts cinematic visuals for brands and creators worldwide. Blending story and technology, he delivers commercial films, product spots, and striking photography that move audiences.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {badges.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                {b}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop"
              alt="Temlyder portrait placeholder"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
          </div>
          <div className="mt-4 text-center text-zinc-400 text-sm">Portrait placeholder — replace with your photo</div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
