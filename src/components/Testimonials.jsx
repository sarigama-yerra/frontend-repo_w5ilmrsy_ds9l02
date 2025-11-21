import React from 'react'
import { motion } from 'framer-motion'

const testimonials = Array.from({ length: 8 }).map((_, i) => ({
  name: `Client ${i + 1}`,
  type: ['Commercial', 'Product', 'Travel', 'Photography'][i % 4],
  text: 'Temlyder delivered beyond expectations — cinematic quality, strong storytelling, and seamless collaboration from concept to delivery.',
  photo: 'https://dummyimage.com/80x80/222/fff&text=+'
}))

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Reviews</h2>
        <p className="mt-3 text-zinc-400">What clients say about working together</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-4">
                <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.type}</div>
                </div>
              </div>
              <p className="mt-4 text-zinc-300 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
