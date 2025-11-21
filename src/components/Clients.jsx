import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'TORRAS', src: 'https://dummyimage.com/300x120/111111/ffffff&text=TORRAS' },
  { name: 'Musicbed', src: 'https://dummyimage.com/300x120/111111/ffffff&text=Musicbed' },
  { name: 'PolarPro', src: 'https://dummyimage.com/300x120/111111/ffffff&text=PolarPro' },
  { name: 'Filmora', src: 'https://dummyimage.com/300x120/111111/ffffff&text=Filmora' },
  { name: 'Adobe', src: 'https://dummyimage.com/300x120/111111/ffffff&text=Adobe' },
  { name: 'xxxxxxxxx', src: 'https://dummyimage.com/300x120/111111/ffffff&text=xxxxxxxxx' },
]

const Clients = () => {
  return (
    <section id="clients" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Clients</h2>
          <p className="text-zinc-400 text-sm">Trusted by brands and creators</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <img src={logo.src} alt={logo.name} className="max-h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-zinc-500 text-sm">Add more logos as needed.</div>
      </div>
    </section>
  )
}

export default Clients
