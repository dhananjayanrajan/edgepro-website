import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tags = [
  'BIAS ENGINE', 'FLIP DETECTION', 'MTF CLARITY', 'TRADINGVIEW NATIVE',
  'INVITE-ONLY', 'REAL-TIME ALERTS', 'XAUUSD', 'BTCUSD', 'NAS100',
  'EURUSD', 'GBPJPY', 'US500', 'ETHUSD', 'USOIL'
]

export default function ScrollingMarquee() {
  return (
    <Card className="overflow-hidden py-4 border-y border-cyber-blue/10 bg-cyber-dark/50 rounded-none">
      <CardContent className="p-0 flex gap-8 animate-marquee whitespace-nowrap">
        {[...tags, ...tags, ...tags].map((tag, i) => (
          <Badge key={i} variant="outline" className="border-0 text-sm text-gray-500 tracking-wider rounded-none px-0">
            {i % 3 === 0 ? '✦' : i % 3 === 1 ? '·' : '◈'} {tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}
