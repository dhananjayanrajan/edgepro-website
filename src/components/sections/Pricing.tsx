import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'
import SectionHeading from '@/components/shared/SectionHeading'

const plans = [
  {
    name: 'STARTER', price: '$49', period: '/month', description: 'Individual TradingView access to DART.',
    features: ['TradingView invite-only access', 'Bull/Bear bias visuals', 'Flip markers & alerts', 'Setup guide', 'Email support'],
    highlighted: false, cta: 'Start Monthly →', footer: '7-day refund · Cancel anytime',
  },
  {
    name: 'PRO', price: '$99', period: '/month', description: 'DART access plus live onboarding.',
    features: ['Everything in Starter', 'Live walkthrough session', 'Execution checklist', 'Private support channel', 'Early access to tools'],
    highlighted: true, cta: 'Get Pro Access →', footer: '7-day refund · Cancel anytime',
  },
  {
    name: 'LIFETIME FOUNDERS', price: '$499', period: 'one-time', description: 'Permanent access. No recurring charges.',
    features: ['Lifetime DART access', 'All future updates', 'Founder recognition', 'MT5 bot priority', 'VIP support'],
    highlighted: false, cta: 'Claim Lifetime Access →', footer: 'One payment, lifetime access',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <Card className="container mx-auto px-6 bg-transparent border-0">
        <CardContent className="p-0 space-y-12">
          <ScrollReveal>
            <SectionHeading title="Pricing" subtitle="Transparent. No surprises. All plans include the full DART experience — no locked features." />
          </ScrollReveal>
          <Card className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto bg-transparent border-0">
            {plans.map((plan) => (
              <ScrollReveal key={plan.name}>
                <Card className={`glass-card border-0 relative h-full flex flex-col ${plan.highlighted ? 'ring-2 ring-cyber-blue shadow-xl shadow-cyber-blue/10' : ''}`}>
                  {plan.highlighted && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white">
                      ★ MOST POPULAR
                    </Badge>
                  )}
                  <CardContent className="p-8 flex flex-col h-full space-y-6">
                    <Card className="bg-transparent border-0 space-y-2">
                      <CardContent className="p-0 text-lg font-bold text-white">{plan.name}</CardContent>
                      <Card className="flex items-baseline gap-1 bg-transparent border-0">
                        <CardContent className="p-0 text-4xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">{plan.price}</CardContent>
                        <CardContent className="p-0 text-gray-500 text-sm">{plan.period}</CardContent>
                      </Card>
                      <CardContent className="p-0 text-sm text-gray-400">{plan.description}</CardContent>
                    </Card>
                    <Card className="space-y-3 flex-1 bg-transparent border-0">
                      {plan.features.map((f) => (
                        <Card key={f} className="flex items-start gap-3 bg-transparent border-0">
                          <Check className="w-4 h-4 text-cyber-green mt-0.5 shrink-0" />
                          <CardContent className="p-0 text-sm text-gray-300">{f}</CardContent>
                        </Card>
                      ))}
                    </Card>
                    <Button className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white' : 'glass-card text-cyber-blue hover:bg-cyber-blue/10'}`}>
                      {plan.cta}
                    </Button>
                    <CardContent className="p-0 text-xs text-gray-600 text-center">{plan.footer}</CardContent>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </Card>
          <ScrollReveal>
            <CardContent className="p-0 text-center text-xs text-gray-600 max-w-2xl mx-auto">
              Risk Disclaimer: DART Bias Engine is an analytical tool, not financial advice. Trading involves significant risk. Past performance does not guarantee future results.
            </CardContent>
          </ScrollReveal>
        </CardContent>
      </Card>
    </section>
  )
}
