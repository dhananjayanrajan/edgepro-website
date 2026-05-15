import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Wallet, Package, Server, ShoppingBag, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const links = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { to: '/dashboard/wallet', icon: Wallet, label: 'Wallet' },
  { to: '/dashboard/subscriptions', icon: Package, label: 'Subscriptions' },
  { to: '/dashboard/mt5-accounts', icon: Server, label: 'MT5 Accounts' },
  { to: '/dashboard/marketplace', icon: ShoppingBag, label: 'Marketplace' },
]

export default function DashboardSidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 min-h-screen glass-card border-r border-cyber-blue/10 p-6 flex flex-col">
      <Link to="/" className="flex items-center gap-3 mb-8">
        <Cpu className="w-7 h-7 text-cyber-blue" />
        <span className="text-xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">EdgePro</span>
      </Link>
      <nav className="flex flex-col gap-1 flex-1">
        {links.map(({ to, icon: Icon, label }) => {
          const active = location.pathname === to || (to !== '/dashboard' && location.pathname.startsWith(to))
          return (
            <Link key={to} to={to}>
              <Button
                variant={active ? 'secondary' : 'ghost'}
                className={`w-full justify-start gap-3 ${active ? 'bg-cyber-blue/10 text-cyber-blue' : 'text-gray-400 hover:text-cyber-blue'}`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Button>
            </Link>
          )
        })}
      </nav>
      <Separator className="bg-cyber-blue/10 my-4" />
      <Button variant="ghost" className="text-gray-400 hover:text-cyber-blue justify-start gap-3">
        <Link to="/" className="flex items-center gap-3">
          ← Back to Site
        </Link>
      </Button>
    </aside>
  )
}
