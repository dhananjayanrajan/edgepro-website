import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ctaContent } from '@/data/cta'

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-40">
      <div ref={containerRef} className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div>
            {ctaContent.headline.map((line, i) => (
              <h2
                key={i}
                className={`text-[clamp(48px,8vw,130px)] font-bold tracking-[-0.04em] leading-[0.93] ${
                  i === 1 ? 'text-white/25' : 'text-white'
                }`}
              >
                {line}
              </h2>
            ))}
          </div>

          <p className="text-white/35 text-lg max-w-md leading-relaxed">
            {ctaContent.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link to="/#access">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 text-[11px] tracking-[0.22em] uppercase font-semibold px-10 h-12 rounded-none"
              >
                {ctaContent.cta.label}
              </Button>
            </Link>
            <span className="text-white/20 text-xs tracking-[0.15em] uppercase">
              {ctaContent.refund}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
