import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Film, Palette, Wand2, Edit3, LayoutDashboard } from 'lucide-react'

const services = [
  {
    title: 'Video Production',
    icon: Film,
    desc: 'End-to-end production from pre-production to delivery — commercials, brand anthems, product films.'
  },
  {
    title: 'Photography',
    icon: Camera,
    desc: 'Portraits, products, lifestyle and campaign imagery with a cinematic eye.'
  },
  {
    title: 'Editing & Post-Production',
    icon: Edit3,
    desc: 'Tight storytelling, sound design, motion graphics, and finishing for all platforms.'
  },
  {
    title: 'Color Grading',
    icon: Palette,
    desc: 'Mood-first grading pipelines in DaVinci Resolve and Premiere Pro.'
  },
  {
    title: 'AI-Enhanced Editing',
    icon: Wand2,
    desc: 'Generative tools and AI assistants to accelerate workflows without compromising quality.'
  },
  {
    title: 'Content Strategy',
    icon: LayoutDashboard,
    desc: 'Campaign planning, platform optimization, and deliverables mapping for maximum impact.'
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Services</h2>
        <p className="mt-3 text-zinc-400">Core offerings tailored for brands and creators</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-white/90" />
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
