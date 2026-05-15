import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play } from 'lucide-react'

export default function LiveDemo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="Beams" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent">
        <CardContent className="p-0 max-w-6xl mx-auto space-y-16">
          <Card className="bg-transparent border-0 text-center space-y-4">
            <CardContent className="p-0 text-7xl md:text-8xl font-black text-white leading-tight">
              Real footage.
            </CardContent>
            <CardContent className="p-0 text-7xl md:text-8xl font-black leading-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                No simulations.
              </Badge>
            </CardContent>
          </Card>

          <Card className="grid md:grid-cols-2 gap-8 bg-transparent border-0">
            {[
              { pair: 'BTCUSDT', tf: '1-Hour', desc: 'Bias zones and flip markers on Bitcoin as the market shifts character.' },
              { pair: 'XAUUSD', tf: '15-Min', desc: 'Clean directional background shifting as Gold moves between bias environments.' },
            ].map((demo) => (
              <Card key={demo.pair} className="glass-card border-0 overflow-hidden group cursor-pointer">
                <Card className="aspect-video bg-black/40 flex items-center justify-center relative border-0 rounded-none">
                  <Badge variant="outline" className="absolute top-4 left-4 border-red-500/50 text-red-400 gap-2 font-mono text-xs">
                    <Card className="w-2 h-2 rounded-full bg-red-500 animate-pulse border-0" />
                    REC
                  </Badge>
                  <Card className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500 border-0">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </Card>
                  <Card className="absolute bottom-4 left-4 bg-transparent border-0">
                    <CardContent className="p-0 text-sm text-gray-500 font-mono">
                      {demo.pair} · {demo.tf}
                    </CardContent>
                  </Card>
                </Card>
                <CardContent className="p-6">
                  <CardContent className="p-0 text-gray-400 text-sm leading-relaxed">{demo.desc}</CardContent>
                </CardContent>
              </Card>
            ))}
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
