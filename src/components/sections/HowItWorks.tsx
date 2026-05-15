import { motion } from 'framer-motion'
import { steps } from '@/data/howItWorks'

export default function HowItWorks() {
  return (
    <section id="access" className="py-32 border-b border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5 block">
            Getting Started
          </span>
          <h2 className="text-[clamp(40px,6vw,88px)] font-bold tracking-[-0.04em] text-white leading-[0.95]">
            Live in under
            <br />
            <span className="text-white/25">10 minutes.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#080808] p-10 space-y-6"
            >
              <span className="text-[clamp(48px,5vw,72px)] font-bold tracking-[-0.04em] text-white/[0.06] leading-none block">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-base">{step.title}</h3>
              <p className="text-white/35 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
