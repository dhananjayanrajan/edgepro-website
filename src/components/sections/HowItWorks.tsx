import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { UserPlus, CreditCard, AtSign, TrendingUp } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'
import SectionHeading from '@/components/shared/SectionHeading'

const steps = [
  { icon: UserPlus, time: '~1 MIN', title: 'Create Account', description: 'Sign up on EdgePro in 60 seconds.' },
  { icon: CreditCard, time: '~1 MIN', title: 'Choose a Plan', description: 'Starter, Pro, or Lifetime Founders.' },
  { icon: AtSign, time: '~1 MIN', title: 'Submit TV Username', description: 'Enter your TradingView username.' },
  { icon: TrendingUp, time: 'SAME DAY', title: 'Start Trading', description: 'Find DART in Invite-Only Scripts.' },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24">
      <Card className="container mx-auto px-6 bg-transparent border-0">
        <CardContent className="p-0 space-y-12">
          <ScrollReveal>
            <SectionHeading title="Getting Access" subtitle="Live on TradingView in under 10 minutes." />
          </ScrollReveal>
          <Card className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto bg-transparent border-0">
            {steps.map((step) => {
              const IconComponent = step.icon
              return (
                <ScrollReveal key={step.title}>
                  <Card className="glass-card border-0 text-center">
                    <CardContent className="p-6 space-y-4">
                      <Card className="w-16 h-16 rounded-full glass-card flex items-center justify-center mx-auto bg-transparent border-0">
                        <IconComponent className="w-7 h-7 text-cyber-blue" />
                      </Card>
                      <Badge variant="outline" className="border-cyber-blue text-cyber-blue">{step.time}</Badge>
                      <CardTitle className="font-semibold text-white">{step.title}</CardTitle>
                      <Card className="bg-transparent border-0">
                        <CardContent className="p-0 text-sm text-gray-400">{step.description}</CardContent>
                      </Card>
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
