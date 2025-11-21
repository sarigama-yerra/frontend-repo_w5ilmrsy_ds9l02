import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  { key: 'commercial', title: 'Commercial Videos' },
  { key: 'product', title: 'Product Videos' },
  { key: 'travel', title: 'Travel Films' },
  { key: 'photo', title: 'Photography Collections' },
  { key: 'social', title: 'Social Media Ads' },
]

const projects = [
  {
    category: 'commercial',
    title: 'Urban Energy — Brand Anthem',
    client: 'TORRAS',
    description: 'High-tempo commercial spot with kinetic typography and macro product shots.',
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    category: 'product',
    title: 'Pro Lens — Launch Teaser',
    client: 'PolarPro',
    description: 'Hero product cinematography with dramatic lighting and motion control.',
    thumb: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    category: 'travel',
    title: 'Horizons — Short Travel Film',
    client: 'Self',
    description: 'Aerial sequences and golden hour landscapes across Southeast Asia.',
    thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    category: 'photo',
    title: 'Noir Portraits — Series I',
    client: 'Editorial',
    description: 'Studio portrait collection exploring shadow, texture, and mood.',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    category: 'social',
    title: 'Fast Cut — UGC Campaign',
    client: 'Musicbed',
    description: 'Snackable edits optimized for vertical formats and paid social.',
    thumb: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Portfolio</h2>
            <p className="mt-3 text-zinc-400">Curated work across film and photography. Replace with your links.</p>
          </div>
        </div>

        {categories.map((cat) => (
          <div key={cat.key} className="mt-10">
            <h3 className="text-xl text-zinc-300 mb-4">{cat.title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === cat.key).length === 0 && (
                <div className="col-span-full text-zinc-500 text-sm">Add projects for {cat.title}.</div>
              )}
              {projects.filter(p => p.category === cat.key).map((p, i) => (
                <motion.a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img src={p.thumb} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium">{p.title}</h4>
                      <span className="text-xs text-zinc-400">{p.client}</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{p.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
