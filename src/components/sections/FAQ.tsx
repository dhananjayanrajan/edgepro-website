import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const faqItems = [
  { q: 'Is this another signal indicator?', a: 'No. DART is a bias engine. It tells you which side of the market is in control so you can align your own strategy with dominant directional pressure.' },
  { q: 'Why invite-only?', a: 'To prevent oversaturation and maintain access quality. Every subscription is personally granted to your TradingView username. No resellers. No app stores.' },
  { q: 'Does it guarantee profits?', a: 'No indicator guarantees profits. DART provides directional clarity. Trading involves significant risk. Past performance does not guarantee future results.' },
  { q: 'What do I need?', a: 'A TradingView account (any plan), an EdgePro account, and an active DART subscription. Access is granted within 24 hours.' },
  { q: 'Do I need to configure anything?', a: 'No. Locked distribution. Add it to your chart and it works immediately. No parameters. No curve-fitting.' },
  { q: 'Refund policy?', a: '7-day refund window from purchase. Contact support within 7 days for a full refund. No questions asked.' },
  { q: 'What markets and timeframes?', a: 'All markets on TradingView: Forex, Crypto, Indices, Commodities, Stocks. All timeframes from 1-minute to monthly.' },
]

export default function FAQ() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="absolute inset-0 z-0 border-0 rounded-none bg-transparent" data-react-bits="Dither" />

      <Card className="relative z-10 container mx-auto px-6 border-0 bg-transparent max-w-4xl">
        <CardContent className="p-0 space-y-16">
          <Card className="bg-transparent border-0 text-center space-y-4">
            <CardContent className="p-0 text-7xl md:text-8xl font-black text-white leading-tight">
              Every question
            </CardContent>
            <CardContent className="p-0 text-7xl md:text-8xl font-black leading-tight">
              <Badge variant="outline" className="border-0 p-0 text-inherit bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                answered.
              </Badge>
            </CardContent>
          </Card>

          <Accordion className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} className="glass-card border-0 px-8 rounded-2xl">
                <AccordionTrigger className="text-white font-semibold text-lg py-6 hover:text-cyber-blue">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="bg-transparent border-0 flex items-center justify-center gap-6">
            <Button variant="link" className="text-cyber-blue text-base">Open Telegram →</Button>
            <Button variant="link" className="text-cyber-blue text-base">Email Support →</Button>
          </Card>
        </CardContent>
      </Card>
    </section>
  )
}
