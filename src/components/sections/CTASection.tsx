import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'

export default function CTASection() {
  return (
    <section className="relative py-24">
      <Card className="absolute inset-0 bg-gradient-to-t from-cyber-blue/10 via-transparent to-transparent border-0 rounded-none" />
      <Card className="container mx-auto px-6 max-w-3xl text-center relative z-10 bg-transparent border-0">
        <CardContent className="p-0 space-y-8">
          <ScrollReveal>
            <Card className="bg-transparent border-0 space-y-6">
              <CardContent className="p-0">
                <Badge variant="outline" className="border-0 p-0 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                  Get Started
                </Badge>
              </CardContent>
              <CardContent className="p-0 text-xl text-gray-400 leading-relaxed">
                Every day without directional clarity is a risk you don't need to take. DART access is invite-only and personally granted to your TradingView account.
              </CardContent>
            </Card>
            <Button size="lg" className="gradient-border bg-cyber-blue/20 backdrop-blur-sm text-white font-bold text-lg gap-2">
              Get Invite-Only Access Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Card className="flex items-center justify-center gap-2 mt-6 bg-transparent border-0">
              <Shield className="w-4 h-4 text-cyber-green" />
              <Badge variant="outline" className="border-cyber-green text-cyber-green">7-DAY REFUND WINDOW</Badge>
            </Card>
          </ScrollReveal>
        </CardContent>
      </Card>
    </section>
  )
}
