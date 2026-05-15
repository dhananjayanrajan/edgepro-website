import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ScrollReveal from '@/animations/ScrollReveal'

const products = [
  {
    id: 'dart-bias-engine-v5',
    name: 'DART Bias Engine v5 [EdgePro]',
    featured: true,
    description: 'A premium market bias indicator that helps traders identify bullish and bearish conditions with clean visuals, directional alerts, and execution-support guidance.',
    tags: ['DART', 'EdgePro', 'Market Bias', 'Trend Analysis', 'Trading Signals', 'XAUUSD', 'Gold Trading'],
    plans: [
      { duration: '1 Mo', price: '$49' },
      { duration: '3 Mo', price: '$129' },
      { duration: '12 Mo', price: '$399' },
      { duration: 'Lifetime', price: '$799' },
    ],
  },
]

export default function Marketplace() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Marketplace</h1>
          <p className="text-gray-400 text-sm">Browse and purchase verified MT5 Expert Advisors and TradingView indicators.</p>
        </div>
      </ScrollReveal>

      <Tabs defaultValue="indicators" className="w-full">
        <TabsList className="glass-card border-0">
          <TabsTrigger value="indicators" className="text-cyber-blue">TradingView Indicators</TabsTrigger>
          <TabsTrigger value="bots" className="text-gray-500">MT5 Bots (Soon)</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex items-center gap-4">
        <Link to="/dashboard/subscriptions">
          <Button variant="link" className="text-gray-400">My Subscriptions (0)</Button>
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <Input placeholder="Search indicators..." className="pl-11 bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
      </div>

      <div className="space-y-6">
        {products.map((product) => (
          <ScrollReveal key={product.id}>
            <Card className="glass-card border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                      {product.featured && (
                        <Badge variant="outline" className="border-cyber-yellow text-cyber-yellow">Featured</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-cyber-dark text-gray-400">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{product.description}</p>
                <div className="flex items-center gap-6">
                  {product.plans.map((plan) => (
                    <div key={plan.duration} className="text-center">
                      <p className="text-xs text-gray-500">{plan.duration}</p>
                      <p className="text-lg font-bold text-white">{plan.price}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Link to={`/dashboard/marketplace/${product.id}`}>
                    <Button variant="outline" className="glass-card text-cyber-blue">Details</Button>
                  </Link>
                  <Link to={`/dashboard/marketplace/${product.id}`}>
                    <Button className="gradient-border bg-cyber-blue/20 text-white">Purchase</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
