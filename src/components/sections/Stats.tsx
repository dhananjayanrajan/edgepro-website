import { Card, CardContent } from '@/components/ui/card'
import ScrollReveal from '@/animations/ScrollReveal'

const stats = [
  { value: '1247+', label: 'Active Traders' },
  { value: '94.2%', label: 'Directional Accuracy' },
  { value: '200+', label: 'Supported Markets' },
  { value: '<24h', label: 'Avg Access Time' },
]

export default function Stats() {
  return (
    <section className="relative py-16">
      <Card className="container mx-auto px-6 bg-transparent border-0">
        <CardContent className="p-0">
          <Card className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-transparent border-0">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <Card className="bg-transparent border-0 text-center">
                  <CardContent className="p-0 space-y-2">
                    <CardContent className="p-0 text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                      {stat.value}
                    </CardContent>
                    <CardContent className="p-0 text-gray-400 text-sm">{stat.label}</CardContent>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
