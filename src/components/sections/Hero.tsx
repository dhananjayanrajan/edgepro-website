import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="Hyperspeed" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent">
        <CardContent className="p-0 max-w-5xl mx-auto text-center space-y-10">
          <Badge variant="outline" className="border-cyber-blue/30 text-cyber-blue px-6 py-3 text-sm tracking-[0.3em] rounded-full">
            INVITE-ONLY ACCESS
          </Badge>

          <Card className="bg-transparent border-0 space-y-6">
            <CardContent className="p-0 text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
                Market Bias
              </Badge>
            </CardContent>
            <CardContent className="p-0 text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                Before You Trade
              </Badge>
            </CardContent>
          </Card>

          <CardContent className="p-0 text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
            One clean output. Bullish. Bearish. Or about to flip.
          </CardContent>

          <Button size="lg" className="gradient-border bg-white/5 backdrop-blur-xl text-white font-semibold text-lg px-10 py-8 rounded-full gap-3 hover:bg-white/10 transition-all duration-500">
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
