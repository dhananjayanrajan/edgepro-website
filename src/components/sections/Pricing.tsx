import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'STARTER', price: '49', period: '/mo',
    features: ['TradingView access', 'Bull/Bear visuals', 'Flip markers & alerts', 'Setup guide', 'Email support'],
    highlighted: false, cta: 'Start Monthly',
  },
  {
    name: 'PRO', price: '99', period: '/mo',
    features: ['Everything in Starter', 'Live walkthrough', 'Execution checklist', 'Private support', 'Early tool access'],
    highlighted: true, cta: 'Get Pro Access',
  },
  {
    name: 'LIFETIME', price: '499', period: 'one-time',
    features: ['Lifetime DART access', 'All future updates', 'Founder recognition', 'MT5 bot priority', 'VIP support'],
    highlighted: false, cta: 'Claim Lifetime',
  },
]

export default function Pricing() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="Prism" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent">
        <CardContent className="p-0 max-w-5xl mx-auto space-y-16">
          <Card className="bg-transparent border-0 text-center space-y-4">
            <CardContent className="p-0 text-7xl md:text-8xl font-black text-white leading-tight">
              Transparent.
            </CardContent>
            <CardContent className="p-0 text-7xl md:text-8xl font-black leading-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                No surprises.
              </Badge>
            </CardContent>
          </Card>

          <Card className="grid md:grid-cols-3 gap-4 bg-transparent border-0">
            {plans.map((plan) => (
              <Card key={plan.name} className={`glass-card border-0 relative p-8 space-y-7 ${plan.highlighted ? 'ring-1 ring-cyber-blue/30' : ''}`}>
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white px-5 py-1 text-xs font-bold tracking-wider rounded-full">
                    MOST POPULAR
                  </Badge>
                )}
                <Card className="bg-transparent border-0 space-y-3">
                  <CardContent className="p-0 text-sm font-bold text-gray-400 tracking-widest">{plan.name}</CardContent>
                  <Card className="flex items-baseline gap-1 bg-transparent border-0">
                    <CardContent className="p-0 text-6xl font-black text-white">${plan.price}</CardContent>
                    <CardContent className="p-0 text-gray-500 text-lg">{plan.period}</CardContent>
                  </Card>
                </Card>
                <Card className="space-y-3 bg-transparent border-0">
                  {plan.features.map((f) => (
                    <Card key={f} className="flex items-start gap-3 bg-transparent border-0">
                      <Check className="w-4 h-4 text-cyber-green mt-1 shrink-0" />
                      <CardContent className="p-0 text-sm text-gray-400">{f}</CardContent>
                    </Card>
                  ))}
                </Card>
                <Button className={`w-full rounded-full font-semibold ${plan.highlighted ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white' : 'glass-card text-white hover:bg-white/10'}`}>
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
