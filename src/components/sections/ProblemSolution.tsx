import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XCircle, CheckCircle } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="GridScan" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent">
        <CardContent className="p-0 max-w-6xl mx-auto space-y-20">
          <Card className="bg-transparent border-0 text-center space-y-4">
            <CardContent className="p-0 text-6xl md:text-7xl font-black text-white leading-tight">
              Five indicators.
            </CardContent>
            <CardContent className="p-0 text-6xl md:text-7xl font-black leading-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                Zero clarity.
              </Badge>
            </CardContent>
          </Card>

          <Card className="grid md:grid-cols-2 gap-8 bg-transparent border-0">
            <Card className="glass-card border-red-500/10 p-10 space-y-6">
              <Card className="flex items-center gap-4 bg-transparent border-0">
                <XCircle className="w-8 h-8 text-red-500" />
                <Badge variant="outline" className="border-red-500/30 text-red-400 text-lg font-mono px-4 py-1">
                  ERROR STATE
                </Badge>
              </Card>
              <Card className="space-y-3 bg-transparent border-0">
                {['5 conflicting signals', 'No directional anchor', 'Bias flip missed', '20 min of hesitation', 'Emotional entry'].map((line) => (
                  <CardContent key={line} className="p-0 text-gray-400 text-lg font-mono">› {line}</CardContent>
                ))}
              </Card>
            </Card>

            <Card className="glass-card border-cyber-green/10 p-10 space-y-6">
              <Card className="flex items-center gap-4 bg-transparent border-0">
                <CheckCircle className="w-8 h-8 text-cyber-green" />
                <Badge variant="outline" className="border-cyber-green/30 text-cyber-green text-lg font-mono px-4 py-1">
                  SOLUTION STATE
                </Badge>
              </Card>
              <Card className="space-y-3 bg-transparent border-0">
                {['Bullish bias confirmed', 'Directional anchor locked', 'Flip label painted', 'Alert fired on change', 'All MTF aligned'].map((line) => (
                  <CardContent key={line} className="p-0 text-gray-300 text-lg font-mono">› {line}</CardContent>
                ))}
              </Card>
            </Card>
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
