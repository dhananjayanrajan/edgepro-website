import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Eye, RefreshCw, Filter, Layers, Lock, Bell } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'
import SectionHeading from '@/components/shared/SectionHeading'

const featureList = [
  { icon: Eye, title: "See whether you're with or against the market", description: 'DART paints the chart background to reflect the active bias state — your eye reads direction before processing individual candles.' },
  { icon: RefreshCw, title: 'Know the moment a major bias shift happens', description: 'Flip labels appear directly on the chart when DART detects a meaningful transition — not noise, only confirmed material shifts.' },
  { icon: Filter, title: 'Filter high-conviction bias from weak noise', description: "DART's confidence layer helps you distinguish strong bias states from uncertain ones — reducing poor entries." },
  { icon: Layers, title: 'Get context beyond the current candle', description: 'Multi-timeframe awareness avoids single-candle myopia. Output reflects broader market context.' },
  { icon: Lock, title: 'Use it without configuring anything', description: 'Clean, locked distribution. No parameter optimisation. No curve-fitting. Add it and it works.' },
  { icon: Bell, title: 'Get notified on flips without watching screens', description: 'Set TradingView alerts to fire on bias flips or high-confidence states. Trade without constant monitoring.' },
]

export default function Features() {
  return (
    <section className="relative py-24">
      <Card className="absolute inset-0 bg-gradient-to-t from-cyber-blue/5 via-transparent to-cyber-purple/5 border-0 rounded-none" />
      <Card className="container mx-auto px-6 relative z-10 bg-transparent border-0">
        <CardContent className="p-0 space-y-12">
          <ScrollReveal>
            <SectionHeading title="What It Does" subtitle="Six ways DART changes how you read the market." />
          </ScrollReveal>
          <Card className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto bg-transparent border-0">
            {featureList.map((feature) => {
              const IconComponent = feature.icon
              return (
                <ScrollReveal key={feature.title}>
                  <Card className="glass-card border-0 h-full group hover:border-cyber-blue/40 transition-all">
                    <CardContent className="p-8 space-y-4">
                      <Card className="w-12 h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center group-hover:bg-cyber-blue/20 transition-all border-0">
                        <IconComponent className="w-6 h-6 text-cyber-blue" />
                      </Card>
                      <CardTitle className="text-lg font-semibold text-white">{feature.title}</CardTitle>
                      <CardContent className="p-0 text-gray-400 text-sm leading-relaxed">{feature.description}</CardContent>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
