import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bot, Shield, Cpu, Download, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ScrollReveal from '@/animations/ScrollReveal'
import { mt5BotsContent } from '@/data/mt5bots'

const iconMap: Record<string, LucideIcon> = { Bot, Shield, Cpu, Download }

export default function MT5Bots() {
  return (
    <div className="pt-36 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="inline-block text-[10px] tracking-[0.35em] uppercase text-white/30 border border-white/[0.08] px-5 py-2 mb-10">
            {mt5BotsContent.badge}
          </span>
          <div>
            {mt5BotsContent.headline.map((line, i) => (
              <h1
                key={i}
                className={`text-[clamp(48px,7vw,110px)] font-bold tracking-[-0.04em] leading-[0.93] ${
                  i === 1 ? 'text-white/25' : 'text-white'
                }`}
              >
                {line}
              </h1>
            ))}
          </div>
          <p className="text-white/35 text-lg max-w-md leading-relaxed mt-8">
            {mt5BotsContent.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] mb-32">
          {mt5BotsContent.features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div className="bg-[#080808] p-8 space-y-5 h-full">
                  {Icon && <Icon className="w-5 h-5 text-white/30" />}
                  <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal className="mb-24">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-6 block">
            How It Works
          </span>
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
            {mt5BotsContent.steps.map((step, i) => (
              <div key={step.number} className="bg-[#080808] p-10 space-y-5">
                <span className="text-[clamp(40px,4vw,60px)] font-bold tracking-tight text-white/[0.06] leading-none block">
                  {step.number}
                </span>
                <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-sm space-y-6">
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg">{mt5BotsContent.waitlist.headline}</h3>
              <p className="text-white/30 text-sm">{mt5BotsContent.waitlist.description}</p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-none h-11 focus-visible:ring-0 focus-visible:border-white/20"
              />
              <Button className="bg-white text-black hover:bg-white/90 text-[10px] tracking-[0.2em] uppercase font-semibold px-6 h-11 rounded-none shrink-0">
                {mt5BotsContent.waitlist.cta}
              </Button>
            </div>
            <p className="text-white/20 text-xs">{mt5BotsContent.waitlist.note}</p>
            <Link to="/" className="text-white/30 hover:text-white text-xs tracking-wide transition-colors block">
              ← Back to DART Bias Engine
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
