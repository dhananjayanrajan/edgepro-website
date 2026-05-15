import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, ArrowRight } from 'lucide-react'
import MatrixRain from '@/animations/MatrixRain'
import TickerTape from '@/animations/TickerTape'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <MatrixRain />
      <Card className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 via-transparent to-cyber-dark border-0 rounded-none" />
      <Card className="relative z-10 flex-1 flex items-center bg-transparent border-0">
        <CardContent className="container mx-auto px-6 pt-32 pb-20 p-0">
          <Card className="text-center max-w-5xl mx-auto bg-transparent border-0 space-y-8">
            <Badge variant="outline" className="border-cyber-green text-cyber-green px-4 py-2 text-sm gap-2">
              <Card className="w-2 h-2 rounded-full bg-cyber-green animate-pulse border-0" />
              LIVE ACCESS OPEN
            </Badge>
            <Badge variant="outline" className="border-0 text-cyber-blue text-sm tracking-widest">
              DART BIAS ENGINE · INVITE-ONLY
            </Badge>
            <CardContent className="p-0 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <Badge variant="outline" className="border-0 p-0 text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
                Know the Active Market Bias Before You Trade.
              </Badge>
            </CardContent>
            <CardContent className="p-0 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A private TradingView indicator that converts complex multi-timeframe market pressure into one clean output: bullish, bearish, or about to flip.
            </CardContent>
            <CardContent className="p-0 text-cyber-green text-sm">1,254 traders analysing the bias right now</CardContent>
            <Card className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-transparent border-0">
              <Button size="lg" className="gradient-border bg-cyber-blue/20 backdrop-blur-sm text-white font-bold text-lg gap-2">
                <Play className="w-5 h-5" />
                Watch It Work
              </Button>
              <Button variant="outline" size="lg" className="glass-card text-cyber-blue font-bold text-lg gap-2">
                Get Access
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Card>
            <Card className="flex items-center justify-center gap-6 bg-transparent border-0">
              <Badge variant="outline" className="border-0 text-sm text-gray-500">$49 Starting plan</Badge>
              <Card className="w-1 h-1 rounded-full bg-gray-600 border-0" />
              <Badge variant="outline" className="border-0 text-sm text-gray-500">7 Days Refund window</Badge>
              <Card className="w-1 h-1 rounded-full bg-gray-600 border-0" />
              <Badge variant="outline" className="border-0 text-sm text-gray-500">&lt;24h Access granted</Badge>
            </Card>
          </Card>
        </CardContent>
      </Card>
      <Card className="relative z-10 bg-transparent border-0">
        <TickerTape />
      </Card>
    </section>
  )
}
