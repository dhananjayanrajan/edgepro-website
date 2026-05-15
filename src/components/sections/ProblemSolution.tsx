import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XCircle, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'
import SectionHeading from '@/components/shared/SectionHeading'

const errors = [
  { label: 'ERR', text: '5 conflicting signals — no clear direction', variant: 'destructive' as const },
  { label: 'ERR', text: 'No directional anchor before entry', variant: 'destructive' as const },
  { label: 'ERR', text: 'Bias flip missed — 3 candles late', variant: 'destructive' as const },
  { label: 'WRN', text: '20 min of chart watching without decision', variant: 'secondary' as const },
  { label: 'WRN', text: 'Emotional entry detected — counter-trend', variant: 'secondary' as const },
]

const solutions = [
  { label: 'OK', text: 'Bullish bias confirmed — all MTF aligned' },
  { label: 'OK', text: 'Directional anchor: BULL since 09:14 UTC' },
  { label: 'OK', text: 'Flip label painted — transition confirmed' },
  { label: 'OK', text: 'Alert fired on bias state change' },
]

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative py-24">
      <Card className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-purple/5 to-transparent border-0 rounded-none" />
      <Card className="container mx-auto px-6 relative z-10 bg-transparent border-0">
        <CardContent className="p-0 space-y-12">
          <ScrollReveal>
            <SectionHeading title="The Real Problem" subtitle="You already have enough indicators. They're all telling you different things." />
          </ScrollReveal>
          <Card className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-transparent border-0">
            <ScrollReveal>
              <Card className="glass-card border-red-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <XCircle className="w-6 h-6 text-red-500" />
                    <Badge variant="destructive" className="text-red-400 bg-transparent">EXECUTION_LOG — ERROR STATE</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {errors.map((line, i) => (
                    <Card key={i} className="flex items-start gap-3 bg-transparent border-0">
                      <Badge variant={line.variant} className={line.label === 'ERR' ? 'border-red-500 text-red-400' : 'border-cyber-yellow text-cyber-yellow'}>
                        {line.label}
                      </Badge>
                      <CardContent className="p-0 text-sm text-gray-400">{line.text}</CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal>
              <Card className="glass-card border-cyber-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <CheckCircle className="w-6 h-6 text-cyber-green" />
                    <Badge variant="outline" className="border-cyber-green text-cyber-green">DART ACTIVE — SOLUTION STATE</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {solutions.map((line, i) => (
                    <Card key={i} className="flex items-start gap-3 bg-transparent border-0">
                      <Badge variant="outline" className="border-cyber-green text-cyber-green">{line.label}</Badge>
                      <CardContent className="p-0 text-sm text-gray-300">{line.text}</CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
