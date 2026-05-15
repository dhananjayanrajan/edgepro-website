import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ScrollReveal from '@/animations/ScrollReveal'
import { marketplaceProducts } from '@/data/marketplace'

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#111] border border-white/[0.07] ${className}`}>{children}</div>
)

export default function Marketplace() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Marketplace</h2>
          <p className="text-white/30 text-sm">Browse and purchase verified indicators and bots.</p>
        </div>
      </ScrollReveal>

      <Tabs defaultValue="indicators" className="w-full">
        <TabsList className="bg-white/[0.04] border border-white/[0.07] rounded-none h-10">
          <TabsTrigger value="indicators" className="rounded-none text-xs tracking-wide data-[state=active]:bg-white/[0.08] data-[state=active]:text-white text-white/40">
            TradingView Indicators
          </TabsTrigger>
          <TabsTrigger value="bots" className="rounded-none text-xs tracking-wide data-[state=active]:bg-white/[0.08] data-[state=active]:text-white text-white/25" disabled>
            MT5 Bots (Soon)
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
        <Input
          placeholder="Search indicators..."
          className="pl-10 bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 rounded-none h-10 focus-visible:ring-0 focus-visible:border-white/15"
        />
      </div>

      <div className="space-y-3">
        {marketplaceProducts.map((product) => (
          <ScrollReveal key={product.id}>
            <Card className="p-6 space-y-5 hover:border-white/15 transition-colors duration-300">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-semibold text-base">
                    {product.name} {product.version}
                  </h3>
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/30 border border-white/[0.08] px-2 py-0.5">
                    Featured
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.tags.slice(0, 6).map((tag) => (
                    <span key={tag} className="text-[10px] tracking-wide text-white/25 bg-white/[0.04] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-white/35 text-sm leading-relaxed">{product.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  {product.plans.map((plan) => (
                    <div key={plan.duration}>
                      <p className="text-[10px] tracking-wide text-white/25 mb-1">{plan.duration}</p>
                      <p className="text-white font-semibold text-sm">${plan.price}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Link to={`/dashboard/marketplace/${product.id}`}>
                    <Button variant="outline" className="border-white/[0.08] bg-transparent text-white/50 hover:text-white hover:border-white/20 rounded-none h-9 text-xs px-5">
                      Details
                    </Button>
                  </Link>
                  <Link to={`/dashboard/marketplace/${product.id}`}>
                    <Button className="bg-white text-black hover:bg-white/90 rounded-none h-9 text-xs tracking-widest uppercase px-5">
                      Purchase
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
