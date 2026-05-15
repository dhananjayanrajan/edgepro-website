import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/data/stats'

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section ref={ref} className="border-b border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 py-16"
            >
              <div className="text-[clamp(40px,5vw,72px)] font-bold tracking-[-0.03em] text-white leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
