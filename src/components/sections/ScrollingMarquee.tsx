import { motion } from 'framer-motion'
import { marqueeTags } from '@/data/marquee'

const doubled = [...marqueeTags, ...marqueeTags]

export default function ScrollingMarquee() {
  return (
    <div className="border-y border-white/[0.06] py-4 overflow-hidden">
      <motion.div
        className="flex gap-14 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="text-[10px] tracking-[0.3em] uppercase text-white/25 shrink-0 flex items-center gap-3"
          >
            <span className="text-white/15">✦</span>
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
