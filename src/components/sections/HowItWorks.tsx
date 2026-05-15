import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { UserPlus, CreditCard, AtSign, TrendingUp } from 'lucide-react'

const steps = [
  { icon: UserPlus, step: '01', title: 'Create Account', desc: 'Sign up in 60 seconds.' },
  { icon: CreditCard, step: '02', title: 'Choose Plan', desc: 'Starter, Pro, or Lifetime.' },
  { icon: AtSign, step: '03', title: 'Submit Username', desc: 'Your TradingView handle.' },
  { icon: TrendingUp, step: '04', title: 'Start Trading', desc: 'Access granted same day.' },
]

export default function HowItWorks() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="Waves" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent">
        <CardContent className="p-0 max-w-5xl mx-auto space-y-16">
          <Card className="bg-transparent border-0 text-center space-y-4">
            <CardContent className="p-0 text-7xl md:text-8xl font-black text-white leading-tight">
              Live in under
            </CardContent>
            <CardContent className="p-0 text-7xl md:text-8xl font-black leading-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                10 minutes.
              </Badge>
            </CardContent>
          </Card>

          <Card className="grid md:grid-cols-4 gap-4 bg-transparent border-0">
            {steps.map((step) => {
              const IconComponent = step.icon
              return (
                <Card key={step.step} className="glass-card border-0 text-center p-8 space-y-5">
                  <Badge variant="outline" className="border-cyber-blue/30 text-cyber-blue text-3xl font-black font-mono px-4 py-1">
                    {step.step}
                  </Badge>
                  <Card className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto border-0">
                    <IconComponent className="w-8 h-8 text-cyber-blue" />
                  </Card>
                  <CardContent className="p-0 text-lg font-bold text-white">{step.title}</CardContent>
                  <CardContent className="p-0 text-sm text-gray-500">{step.desc}</CardContent>
                </Card>
              )
            })}
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
