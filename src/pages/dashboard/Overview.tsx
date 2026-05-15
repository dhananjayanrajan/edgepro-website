import { Link } from 'react-router-dom'
import { Wallet, Package, ShoppingBag, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import ScrollReveal from '@/animations/ScrollReveal'

const overviewStats = [
  { icon: Wallet, label: 'Wallet Balance', value: '$0.00 USDT', link: '/dashboard/wallet' },
  { icon: Package, label: 'Active Subscriptions', value: '0', link: '/dashboard/subscriptions' },
  { icon: ShoppingBag, label: 'Total Deposited', value: '$0.00', link: '/dashboard/wallet' },
  { icon: Server, label: 'License Files', value: '0', link: '/dashboard/mt5-accounts' },
]

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#111] border border-white/[0.07] ${className}`}>{children}</div>
)

export default function Overview() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Dashboard</h2>
          <p className="text-white/30 text-sm">Your trading activity at a glance.</p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {overviewStats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.06}>
            <Link to={stat.link}>
              <Card className="p-6 hover:border-white/15 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <stat.icon className="w-4 h-4 text-white/20" />
                  <span className="text-xs text-white/30 tracking-wide">{stat.label}</span>
                </div>
                <span className="text-xl font-semibold text-white">{stat.value}</span>
              </Card>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        <ScrollReveal>
          <Card className="p-6 space-y-5">
            <h3 className="text-white/60 text-sm font-medium">Slot Utilization</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-white tracking-tight">0</span>
              <span className="text-white/25 text-sm mb-1">/ 5 slots</span>
            </div>
            <Progress value={0} className="h-px bg-white/[0.07] [&>div]:bg-white" />
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white/60 text-sm font-medium">Recent Subscriptions</h3>
              <Link to="/dashboard/subscriptions">
                <Button variant="ghost" className="text-white/30 hover:text-white/60 text-xs h-auto p-0">
                  View all
                </Button>
              </Link>
            </div>
            <p className="text-white/20 text-sm">No subscriptions yet.</p>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <Card className="p-6 space-y-4">
            <h3 className="text-white/60 text-sm font-medium">Recent Activity</h3>
            <p className="text-white/20 text-sm">No activity yet.</p>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Card className="p-6 space-y-3">
            <Link to="/dashboard/wallet">
              <Button variant="outline" className="w-full border-white/[0.08] bg-transparent text-white/50 hover:text-white hover:border-white/20 rounded-none h-10 text-xs tracking-widest uppercase">
                Deposit Funds
              </Button>
            </Link>
            <Link to="/dashboard/marketplace">
              <Button variant="outline" className="w-full border-white/[0.08] bg-transparent text-white/50 hover:text-white hover:border-white/20 rounded-none h-10 text-xs tracking-widest uppercase">
                Browse Marketplace
              </Button>
            </Link>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
