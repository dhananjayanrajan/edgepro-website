import { Link } from 'react-router-dom'
import { Wallet, Package, ShoppingBag, Server } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import ScrollReveal from '@/animations/ScrollReveal'

const stats = [
  { icon: Wallet, label: 'Wallet Balance', value: '$0.00 USDT', link: '/dashboard/wallet' },
  { icon: Package, label: 'Active Bots', value: '0', link: '/dashboard/subscriptions' },
  { icon: ShoppingBag, label: 'Total Deposited', value: '$0.00', link: '/dashboard/wallet' },
  { icon: Server, label: 'License Files', value: '0', link: '/dashboard/mt5-accounts' },
]

export default function Overview() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400 text-sm">Here's what's happening with your trading bots today.</p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <ScrollReveal key={stat.label}>
            <Link to={stat.link}>
              <Card className="glass-card border-0 hover:border-cyber-blue/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <stat.icon className="w-5 h-5 text-cyber-blue" />
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </CardContent>
              </Card>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ScrollReveal>
          <Card className="glass-card border-0">
            <CardContent className="p-6 space-y-4">
              <h2 className="font-semibold text-white">Bot Slots Utilized</h2>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">0</span>
                <span className="text-gray-500 text-sm mb-1">/ 5 slots</span>
              </div>
              <Progress value={0} className="h-2 bg-cyber-dark" />
              <p className="text-xs text-gray-500">0%</p>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-white">Recent Subscriptions</h2>
                <Button variant="link" className="text-cyber-blue text-xs">View all</Button>
              </div>
              <p className="text-sm text-gray-500">No subscriptions yet.</p>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <h2 className="font-semibold text-white mb-4">Recent Activity</h2>
              <p className="text-sm text-gray-500">No activity yet.</p>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="glass-card border-0">
            <CardContent className="p-6 flex flex-col gap-4">
              <Link to="/dashboard/wallet">
                <Button variant="outline" className="w-full glass-card text-cyber-blue">Deposit USDT</Button>
              </Link>
              <Link to="/dashboard/marketplace">
                <Button variant="outline" className="w-full glass-card text-cyber-purple">Browse Marketplace</Button>
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
