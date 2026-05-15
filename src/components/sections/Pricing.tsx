import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pricingPlans } from '@/data/pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 border-b border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5 block">
            Pricing
          </span>
          <h2 className="text-[clamp(40px,6vw,88px)] font-bold tracking-[-0.04em] text-white leading-[0.95]">
            Transparent.
            <br />
            <span className="text-white/25">No surprises.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-[#080808] p-10 space-y-8 relative flex flex-col ${
                plan.highlighted ? 'ring-1 ring-inset ring-white/15' : ''
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 left-10 -translate-y-1/2 text-[9px] tracking-[0.3em] uppercase text-white/40 bg-[#080808] px-3 py-1 border border-white/15">
                  Most Popular
                </span>
              )}

              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-[clamp(40px,4vw,60px)] font-bold tracking-[-0.03em] text-white leading-none">
                    {plan.price}
                  </span>
                  <span className="text-white/25 text-sm">{plan.period}</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed pt-1">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-3.5 h-3.5 text-white/40 mt-0.5 shrink-0" />
                    <span className="text-white/50 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-none h-11 text-[11px] tracking-[0.2em] uppercase font-semibold ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'bg-transparent border border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-white/20 text-xs tracking-wide mt-10"
        >
          7-day full refund. No questions asked.
        </motion.p>
      </div>
    </section>
  )
}
