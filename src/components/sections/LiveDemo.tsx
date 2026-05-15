import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { liveDemoContent } from '@/data/liveDemo'

export default function LiveDemo() {
  return (
    <section className="py-32 border-b border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5 block">
            Live Charts
          </span>
          <h2 className="text-[clamp(40px,6vw,88px)] font-bold tracking-[-0.04em] text-white leading-[0.95]">
            {liveDemoContent.tagline.split('. ').map((part, i) => (
              <span key={i} className={i === 1 ? 'text-white/25' : ''}>
                {part}{i === 0 ? '.' : ''}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
          {liveDemoContent.demos.map((demo, i) => (
            <motion.div
              key={demo.pair}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#080808] group cursor-pointer"
            >
              <div className="aspect-video bg-white/[0.02] flex items-center justify-center relative border-b border-white/[0.06]">
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/25">REC</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 border border-white/15 rounded-full flex items-center justify-center"
                >
                  <Play className="w-5 h-5 text-white/50 fill-white/50" />
                </motion.div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">
                    {demo.pair} · {demo.timeframe}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/35 text-sm leading-relaxed">{demo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
