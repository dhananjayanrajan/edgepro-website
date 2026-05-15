import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, RefreshCw, Filter, Layers, Lock, Bell } from 'lucide-react'

const features = [
  { icon: Eye, title: 'See bias instantly', desc: 'Chart background reflects active bias state. Your eye reads direction before processing candles.' },
  { icon: RefreshCw, title: 'Catch every flip', desc: 'Flip labels appear directly on chart when DART detects a meaningful transition.' },
  { icon: Filter, title: 'Filter the noise', desc: 'Confidence layer distinguishes strong bias from uncertainty. Fewer poor entries.' },
  { icon: Layers, title: 'Multi-timeframe context', desc: 'Output reflects broader market structure. No single-candle myopia.' },
  { icon: Lock, title: 'Zero configuration', desc: 'Locked distribution. No parameters. No curve-fitting. Add it and it works.' },
  { icon: Bell, title: 'Trade without watching', desc: 'TradingView alerts fire on bias flips. Stay informed without screen time.' },
]

export default function Features() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="Aurora" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent">
        <CardContent className="p-0 max-w-6xl mx-auto space-y-16">
          <Card className="bg-transparent border-0 text-center space-y-4">
            <CardContent className="p-0 text-7xl md:text-8xl font-black text-white leading-tight">
              Six ways DART
            </CardContent>
            <CardContent className="p-0 text-7xl md:text-8xl font-black leading-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                changes everything.
              </Badge>
            </CardContent>
          </Card>

          <Card className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent border-0">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <Card key={feature.title} className="glass-card border-0 group hover:border-cyber-blue/20 transition-all duration-500 p-8 space-y-5">
                  <Card className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyber-blue/10 transition-all duration-500 border-0">
                    <IconComponent className="w-7 h-7 text-cyber-blue" />
                  </Card>
                  <CardContent className="p-0 text-xl font-bold text-white">{feature.title}</CardContent>
                  <CardContent className="p-0 text-gray-500 text-sm leading-relaxed">{feature.desc}</CardContent>
                </Card>
              )
            })}
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
