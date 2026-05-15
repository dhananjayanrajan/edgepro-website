import { useState } from 'react'
import { Check, ExternalLink, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ScrollReveal from '@/animations/ScrollReveal'
import { marketplaceProducts } from '@/data/marketplace'

const product = marketplaceProducts[0]

const whatItDoes = [
  'Identify bullish and bearish market bias at a glance',
  'Spot directional shifts before they become obvious',
  'Use clean chart visuals for trade confirmation',
  'Improve execution discipline and reduce noise',
  'Receive real-time alerts on key bias changes',
]

const keyFeatures = [
  'Clean directional background overlay',
  'Flip markers on confirmed structure changes',
  'Multi-timeframe bias alignment',
  'Zero configuration — plug in and it works',
  'TradingView alert integration',
]

const bestFor = [
  'Forex', 'Gold / XAUUSD', 'Crypto', 'Indices', 'Scalping', 'Swing trading',
]

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#111] border border-white/[0.07] ${className}`}>{children}</div>
)

export default function ProductDetail() {
  const [selectedPlan, setSelectedPlan] = useState(product.plans[0].duration)
  const selectedPrice = product.plans.find((p) => p.duration === selectedPlan)?.price ?? product.plans[0].price

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="space-y-1">
          <p className="text-white/25 text-xs tracking-wide">TradingView Indicators / DART Bias Engine</p>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {product.name} {product.version}
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <ScrollReveal>
            <Card className="p-8 space-y-8">
              <div className="space-y-3">
                <h3 className="text-white/50 text-xs tracking-[0.2em] uppercase">About</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {product.description} Built for traders who want a simple, execution-friendly way to stay aligned with the dominant side of the market — without cluttered charts or conflicting signals.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white/50 text-xs tracking-[0.2em] uppercase">What It Does</h3>
                <ul className="space-y-2.5">
                  {whatItDoes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" />
                      <span className="text-white/40 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-white/50 text-xs tracking-[0.2em] uppercase">Key Features</h3>
                <ul className="space-y-2.5">
                  {keyFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" />
                      <span className="text-white/40 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-white/50 text-xs tracking-[0.2em] uppercase">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  {bestFor.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-wide text-white/30 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] p-4 flex items-start gap-3">
                <Shield className="w-3.5 h-3.5 text-white/25 mt-0.5 shrink-0" />
                <p className="text-white/25 text-xs leading-relaxed">
                  Trading involves risk. This indicator does not guarantee profits and is not financial advice. Always apply proper risk management and independent judgment before any trade.
                </p>
              </div>

              <button className="flex items-center gap-2 text-white/30 hover:text-white/50 transition-colors text-xs tracking-wide">
                View on TradingView
                <ExternalLink className="w-3 h-3" />
              </button>
            </Card>
          </ScrollReveal>
        </div>

        <div>
          <ScrollReveal delay={0.1}>
            <Card className="p-6 space-y-6 sticky top-6">
              <h3 className="text-white font-semibold text-sm">Purchase Access</h3>

              <div className="space-y-2">
                <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">Plan</Label>
                <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger className="bg-white/[0.03] border-white/[0.07] text-white rounded-none h-10 focus:ring-0 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111] border-white/[0.07] rounded-none">
                    {product.plans.map((plan) => (
                      <SelectItem key={plan.duration} value={plan.duration} className="text-white/60 focus:text-white focus:bg-white/[0.06]">
                        {plan.duration} — ${plan.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">Payment Method</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-white/20 bg-transparent text-white text-xs rounded-none flex-1">
                    Card (Stripe)
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/[0.07] bg-transparent text-white/30 text-xs rounded-none flex-1">
                    Wallet ($0.00)
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">TradingView Username</Label>
                  <Input
                    placeholder="your_tv_username"
                    className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 rounded-none h-10 focus-visible:ring-0 focus-visible:border-white/15 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">Email</Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 rounded-none h-10 focus-visible:ring-0 focus-visible:border-white/15 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">Coupon (optional)</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="DISCOUNT20"
                      className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 rounded-none h-10 focus-visible:ring-0 focus-visible:border-white/15 text-sm flex-1"
                    />
                    <Button variant="outline" className="border-white/[0.07] bg-transparent text-white/40 hover:text-white rounded-none h-10 text-xs px-4">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.07] pt-4 flex items-center justify-between">
                <span className="text-white/35 text-xs tracking-wide">Total</span>
                <span className="text-white font-bold text-lg">${selectedPrice} USD</span>
              </div>

              <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-11 text-[11px] tracking-[0.2em] uppercase font-semibold">
                Pay with Card
              </Button>

              <p className="text-center text-white/20 text-[10px] tracking-wide">Secured by Stripe</p>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
