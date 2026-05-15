import { motion } from 'framer-motion'
import { Eye, RefreshCw, Filter, Layers, Lock, Bell, type LucideIcon } from 'lucide-react'
import { features } from '@/data/features'

const iconMap: Record<string, LucideIcon> = { Eye, RefreshCw, Filter, Layers, Lock, Bell }

export default function Features() {
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
            What You Get
          </span>
          <h2 className="text-[clamp(40px,6vw,88px)] font-bold tracking-[-0.04em] text-white leading-[0.95]">
            Six edges.
            <br />
            <span className="text-white/25">One engine.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                className="bg-[#080808] p-10 space-y-5 transition-colors duration-300"
              >
                {Icon && <Icon className="w-5 h-5 text-white/40" />}
                <h3 className="text-white font-semibold text-base leading-snug">
                  {feature.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
