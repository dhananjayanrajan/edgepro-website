import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { value: '1,247', label: 'Active Traders' },
  { value: '94.2%', label: 'Directional Accuracy' },
  { value: '200+', label: 'Supported Markets' },
  { value: '<24h', label: 'Avg Access Time' },
]

export default function Stats() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="DotField" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent">
        <CardContent className="p-0">
          <Card className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-4xl mx-auto bg-transparent border-0">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-transparent border-0 text-center space-y-3">
                <CardContent className="p-0 text-6xl md:text-7xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </CardContent>
                <CardContent className="p-0 text-sm text-gray-500 tracking-widest uppercase">{stat.label}</CardContent>
              </Card>
            ))}
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
