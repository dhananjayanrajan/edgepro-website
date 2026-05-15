import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="Lightning" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent max-w-4xl text-center">
        <CardContent className="p-0 space-y-12">
          <Card className="bg-transparent border-0 space-y-6">
            <CardContent className="p-0 text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight text-white">
              Every day without
            </CardContent>
            <CardContent className="p-0 text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                clarity is a risk.
              </Badge>
            </CardContent>
          </Card>

          <CardContent className="p-0 text-xl text-gray-400 font-light tracking-wide max-w-xl mx-auto">
            DART access is invite-only and personally granted to your TradingView account.
          </CardContent>

          <Button size="lg" className="gradient-border bg-white/5 backdrop-blur-xl text-white font-semibold text-lg px-12 py-8 rounded-full gap-3 hover:bg-white/10 transition-all duration-500">
            Get Invite-Only Access Today
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Card className="flex items-center justify-center gap-3 bg-transparent border-0">
            <Shield className="w-4 h-4 text-cyber-green" />
            <CardContent className="p-0 text-sm text-gray-500">7-DAY REFUND WINDOW</CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
