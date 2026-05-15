import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'
import SectionHeading from '@/components/shared/SectionHeading'

const demos = [
  { pair: 'BTCUSDT', tf: '1-Hour', desc: 'Bias zones and flip markers on Bitcoin as the market shifts character.' },
  { pair: 'XAUUSD', tf: '15-Min', desc: 'Clean directional background shifting as Gold moves between bias environments.' },
]

export default function LiveDemo() {
  return (
    <section className="relative py-24">
      <Card className="container mx-auto px-6 bg-transparent border-0">
        <CardContent className="p-0 space-y-12">
          <ScrollReveal>
            <SectionHeading title="Real Footage — No Simulations" subtitle="Watch DART live on Bitcoin and Gold. Unedited screen recordings. No narration. Just the indicator on live instruments." />
          </ScrollReveal>
          <Card className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-transparent border-0">
            {demos.map((demo) => (
              <ScrollReveal key={demo.pair}>
                <Card className="glass-card border-0 overflow-hidden cursor-pointer group">
                  <Card className="aspect-video bg-cyber-dark flex items-center justify-center relative border-0 rounded-none">
                    <Badge variant="outline" className="absolute top-3 left-3 border-red-500 text-red-500 gap-2">
                      <Card className="w-2 h-2 rounded-full bg-red-500 animate-pulse border-0" />
                      REC
                    </Badge>
                    <Card className="w-16 h-16 rounded-full bg-cyber-blue/20 flex items-center justify-center group-hover:bg-cyber-blue/40 transition-all border-0">
                      <Play className="w-8 h-8 text-cyber-blue fill-cyber-blue" />
                    </Card>
                    <Card className="absolute bottom-3 left-3 bg-transparent border-0">
                      <CardContent className="p-0 text-xs text-gray-500">{demo.pair} · {demo.tf} · DART v3</CardContent>
                    </Card>
                  </Card>
                  <CardContent className="p-4">
                    <CardContent className="p-0 text-sm text-gray-400">{demo.desc}</CardContent>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </Card>
          <ScrollReveal>
            <Card className="glass-card border-0 max-w-5xl mx-auto">
              <CardContent className="p-6 space-y-4">
                <Card className="flex items-center gap-4 bg-transparent border-0">
                  <CardContent className="p-0 text-xs text-gray-500">COMPARISON_VIEW.exe</CardContent>
                  <Card className="flex-1 h-px bg-cyber-blue/20 border-0" />
                  <CardContent className="p-0 text-xs text-cyber-blue">DRAG TO COMPARE</CardContent>
                </Card>
                <Card className="aspect-video bg-cyber-dark rounded flex items-center justify-center border-0">
                  <CardContent className="p-0 text-gray-600">Before / After comparison slider</CardContent>
                </Card>
              </CardContent>
            </Card>
          </ScrollReveal>
        </CardContent>
      </Card>
    </section>
  )
}
