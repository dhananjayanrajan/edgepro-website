import { Link } from 'react-router-dom'
import { Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ScrollReveal from '@/animations/ScrollReveal'

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#111] border border-white/[0.07] ${className}`}>{children}</div>
)

export default function Subscriptions() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Subscriptions</h2>
          <p className="text-white/30 text-sm">Your active and expired indicator subscriptions.</p>
        </div>
      </ScrollReveal>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="bg-white/[0.04] border border-white/[0.07] rounded-none h-10">
          <TabsTrigger value="active" className="rounded-none text-xs tracking-wide data-[state=active]:bg-white/[0.08] data-[state=active]:text-white text-white/40">
            Active
          </TabsTrigger>
          <TabsTrigger value="expired" className="rounded-none text-xs tracking-wide data-[state=active]:bg-white/[0.08] data-[state=active]:text-white text-white/25">
            Expired
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollReveal>
        <Card className="p-16 text-center space-y-5">
          <Package className="w-8 h-8 text-white/10 mx-auto" />
          <p className="text-white/30 text-sm">No subscriptions yet.</p>
          <p className="text-white/20 text-xs">Purchase an indicator from the marketplace to get started.</p>
          <Link to="/dashboard/marketplace">
            <Button
              variant="outline"
              className="border-white/[0.08] bg-transparent text-white/40 hover:text-white hover:border-white/20 rounded-none h-9 text-xs tracking-widest uppercase px-6 mt-2"
            >
              Browse Marketplace
            </Button>
          </Link>
        </Card>
      </ScrollReveal>
    </div>
  )
}
