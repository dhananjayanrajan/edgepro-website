import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ScrollReveal from '@/animations/ScrollReveal'
import SectionHeading from '@/components/shared/SectionHeading'

const faqItems = [
  { question: 'Is this just another buy/sell signal indicator?', answer: 'No. DART is a market bias engine. It does not tell you when to buy or sell. It tells you which side of the market is in control so you can align your own strategy with the dominant directional pressure.' },
  { question: 'Why is it invite-only? Is that a red flag?', answer: 'DART is invite-only to prevent oversaturation and maintain quality of access. Every subscription is personally granted to your TradingView username. No resellers. No app stores. This keeps distribution controlled and support focused.' },
  { question: 'Does it guarantee profits?', answer: 'No indicator guarantees profits. DART is an analytical tool that provides directional clarity. Trading involves significant risk. Past performance does not guarantee future results. Always use proper risk management.' },
  { question: 'What do I need to get started?', answer: 'You need a TradingView account (any plan works), an EdgePro account, and an active DART subscription. Once purchased, we grant access to your TradingView username within 24 hours.' },
  { question: 'Do I need to configure many settings?', answer: 'No. DART is a locked distribution with no parameters to optimise. Add it to your chart and it works immediately. No curve-fitting. No configuration required.' },
  { question: "What's the refund policy?", answer: 'We offer a 7-day refund window from purchase. If DART does not meet your expectations, contact support within 7 days for a full refund. No questions asked.' },
  { question: 'What markets and timeframes does it work on?', answer: 'DART works on all markets available on TradingView including Forex, Crypto, Indices, Commodities, and Stocks. It functions on all timeframes from 1-minute to monthly charts.' },
]

export default function FAQ() {
  return (
    <section className="relative py-24">
      <Card className="container mx-auto px-6 max-w-3xl bg-transparent border-0">
        <CardContent className="p-0 space-y-8">
          <ScrollReveal>
            <SectionHeading title="Frequently Asked" subtitle="Every question you're about to ask — answered." />
          </ScrollReveal>
          <Accordion className="space-y-4">
            {faqItems.map((item, i) => (
              <ScrollReveal key={i}>
                <AccordionItem className="glass-card border-0 px-6 rounded-lg">
                  <AccordionTrigger className="text-white font-semibold hover:text-cyber-blue">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
          <ScrollReveal>
            <Card className="bg-transparent border-0 text-center space-y-4">
              <CardContent className="p-0">
                <Button variant="link" className="text-gray-400 text-sm" disabled>Still unsure? Reach out directly.</Button>
              </CardContent>
              <CardContent className="p-0 flex items-center justify-center gap-4">
                <Button variant="link" className="text-cyber-blue">Open Telegram →</Button>
                <Button variant="link" className="text-cyber-blue">Email Support →</Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </CardContent>
      </Card>
    </section>
  )
}
