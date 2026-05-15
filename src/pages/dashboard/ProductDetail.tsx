import { useState } from 'react'
import { Check, ExternalLink, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ScrollReveal from '@/animations/ScrollReveal'

const plans = [
  { duration: '1 Month', price: '$49.00' },
  { duration: '3 Months', price: '$129.00' },
  { duration: '12 Months', price: '$399.00' },
  { duration: 'Lifetime', price: '$799.00' },
]

export default function ProductDetail() {
  const [selectedPlan, setSelectedPlan] = useState('1 Month')
  const selectedPrice = plans.find(p => p.duration === selectedPlan)?.price || '$49.00'

  return (
    <nav className="space-y-8">
      <ScrollReveal>
        <nav className="space-y-2">
          <Badge variant="outline" className="border-0 text-sm text-gray-500 p-0">TradingView Indicators / DART Bias Engine</Badge>
          <nav className="flex items-center gap-3">
            <Badge variant="outline" className="border-0 text-3xl font-bold text-white p-0">DART Bias Engine v5 [EdgePro]</Badge>
            <Badge variant="outline" className="border-cyber-yellow text-cyber-yellow">Featured</Badge>
          </nav>
        </nav>
      </ScrollReveal>

      <nav className="grid lg:grid-cols-3 gap-8">
        <nav className="lg:col-span-2 space-y-8">
          <ScrollReveal>
            <Card className="glass-card border-0">
              <CardContent className="p-8 space-y-6">
                <Badge variant="outline" className="border-0 text-xl font-bold text-white p-0">About This Indicator</Badge>
                <Card className="bg-transparent border-0">
                  <CardContent className="p-0 text-gray-400 text-sm leading-relaxed">
                    DART Bias Engine v5 is a professional market bias indicator designed to help traders identify bullish and bearish market conditions with clean visual guidance. It is built for traders who want a simple, execution-friendly way to stay aligned with the stronger side of the market without relying on cluttered charts or confusing signals.
                  </CardContent>
                </Card>

                <Card className="bg-transparent border-0 space-y-3">
                  <Badge variant="outline" className="border-0 font-semibold text-white p-0">What It Helps You Do</Badge>
                  <Card className="space-y-2 bg-transparent border-0">
                    {['Identify bullish and bearish market bias', 'Spot important directional shifts', 'Use clean visuals for trade confirmation', 'Improve execution discipline', 'Receive alerts for key market bias changes'].map((item) => (
                      <Card key={item} className="flex items-start gap-2 bg-transparent border-0">
                        <Check className="w-4 h-4 text-cyber-green mt-0.5 shrink-0" />
                        <CardContent className="p-0 text-sm text-gray-400">{item}</CardContent>
                      </Card>
                    ))}
                  </Card>
                </Card>

                <Card className="bg-transparent border-0 space-y-3">
                  <Badge variant="outline" className="border-0 font-semibold text-white p-0">Best For</Badge>
                  <Card className="flex flex-wrap gap-2 bg-transparent border-0">
                    {['Forex trading', 'Gold / XAUUSD trading', 'Crypto trading', 'Indices trading', 'Scalping and intraday setups', 'Swing trading confirmation'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-cyber-dark text-gray-400">{tag}</Badge>
                    ))}
                  </Card>
                </Card>

                <Card className="bg-transparent border-0 space-y-3">
                  <Badge variant="outline" className="border-0 font-semibold text-white p-0">Key Features</Badge>
                  <Card className="space-y-2 bg-transparent border-0">
                    {['Clean bullish and bearish chart visuals', 'Simple market bias confirmation', 'Directional flip alerts', 'Minimal interface with no confusing settings', 'Built for fast execution support'].map((item) => (
                      <Card key={item} className="flex items-start gap-2 bg-transparent border-0">
                        <Check className="w-4 h-4 text-cyber-green mt-0.5 shrink-0" />
                        <CardContent className="p-0 text-sm text-gray-400">{item}</CardContent>
                      </Card>
                    ))}
                  </Card>
                </Card>

                <Card className="bg-transparent border-0 space-y-3">
                  <Badge variant="outline" className="border-0 font-semibold text-white p-0">How To Use</Badge>
                  <CardContent className="p-0 text-gray-400 text-sm leading-relaxed">
                    Use DART Bias Engine v5 as a confirmation tool before taking trades. When the market bias is bullish, traders can focus on buy-side opportunities. When the market bias is bearish, traders can focus on sell-side opportunities. For best results, combine it with your own entry method, support and resistance, liquidity zones, price action, and proper risk management.
                  </CardContent>
                </Card>

                <Card className="bg-cyber-yellow/5 border-cyber-yellow/20">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Shield className="w-4 h-4 text-cyber-yellow mt-0.5 shrink-0" />
                    <CardContent className="p-0 text-xs text-gray-500">
                      Trading involves risk. This indicator does not guarantee profits and should not be considered financial advice. Always use proper risk management, position sizing, and independent judgment before entering any trade.
                    </CardContent>
                  </CardContent>
                </Card>

                <Button variant="link" className="text-cyber-blue gap-2 p-0">
                  View on TradingView
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </nav>

        <nav>
          <ScrollReveal>
            <Card className="glass-card border-0 sticky top-24">
              <CardContent className="p-6 space-y-6">
                <Badge variant="outline" className="border-0 text-lg font-bold text-white p-0">Purchase DART Bias Engine v5 [EdgePro]</Badge>

                <Card className="space-y-2 bg-transparent border-0">
                  <Label className="text-gray-400">Select Plan</Label>
                  <Select value={selectedPlan} onValueChange={(value) => setSelectedPlan(value ?? '1 Month')}>
                    <SelectTrigger className="bg-cyber-dark border-cyber-blue/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map((plan) => (
                        <SelectItem key={plan.duration} value={plan.duration}>
                          {plan.duration} - {plan.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Card>

                <Card className="space-y-2 bg-transparent border-0">
                  <Label className="text-gray-400">Payment Method</Label>
                  <Card className="flex gap-2 bg-transparent border-0">
                    <Button variant="outline" size="sm" className="glass-card text-white border-cyber-blue">Card (Stripe)</Button>
                    <Button variant="outline" size="sm" className="glass-card text-gray-500">Wallet Balance (0.00 USDT)</Button>
                  </Card>
                </Card>

                <Card className="space-y-4 bg-transparent border-0">
                  <Card className="space-y-2 bg-transparent border-0">
                    <Label className="text-gray-400">TradingView Username *</Label>
                    <Input placeholder="your_tv_username" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                  </Card>
                  <Card className="space-y-2 bg-transparent border-0">
                    <Label className="text-gray-400">Email *</Label>
                    <Input type="email" placeholder="your@email.com" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                  </Card>
                  <Card className="space-y-2 bg-transparent border-0">
                    <Label className="text-gray-400">Coupon Code</Label>
                    <Card className="flex gap-2 bg-transparent border-0">
                      <Input placeholder="DISCOUNT20" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600 flex-1" />
                      <Button variant="outline" className="glass-card text-cyber-blue">Check</Button>
                    </Card>
                  </Card>
                </Card>

                <Separator className="bg-cyber-blue/10" />

                <Card className="flex items-center justify-between bg-transparent border-0">
                  <CardContent className="p-0 text-gray-400 text-sm">Total</CardContent>
                  <CardContent className="p-0 text-xl font-bold text-white">{selectedPrice} USD</CardContent>
                </Card>

                <Button className="w-full gradient-border bg-cyber-blue/20 text-white">Pay with Card</Button>

                <CardContent className="p-0 text-xs text-gray-600 text-center">Secured by Stripe</CardContent>
              </CardContent>
            </Card>
          </ScrollReveal>
        </nav>
      </nav>
    </nav>
  )
}
