import { motion } from 'framer-motion'
import { problemSolutionContent } from '@/data/problemSolution'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ProblemSolution() {
  return (
    <section id="features" className="py-32 border-b border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5 block">
            The Problem
          </span>
          <h2 className="text-[clamp(40px,6vw,88px)] font-bold tracking-[-0.04em] text-white leading-[0.95]">
            Five indicators.
            <br />
            <span className="text-white/25">Zero clarity.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={cardVariants}
            className="bg-[#080808] p-10 space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
                {problemSolutionContent.before.state}
              </span>
            </div>
            <ul className="space-y-4">
              {problemSolutionContent.before.items.map((item) => (
                <li key={item} className="text-white/30 text-sm leading-relaxed pl-4 border-l border-white/[0.08]">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={cardVariants}
            className="bg-[#080808] p-10 space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                {problemSolutionContent.after.state}
              </span>
            </div>
            <ul className="space-y-4">
              {problemSolutionContent.after.items.map((item) => (
                <li key={item} className="text-white/70 text-sm leading-relaxed pl-4 border-l border-white/20">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
