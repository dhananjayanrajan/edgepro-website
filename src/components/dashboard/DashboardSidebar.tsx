import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Wallet, Package, Server, ShoppingBag, ArrowLeft } from 'lucide-react'

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
    <aside className="w-56 min-h-screen bg-[#0a0a0a] border-r border-white/[0.06] p-6 flex flex-col shrink-0">
      <Link
        to="/"
        className="text-white font-bold tracking-[0.22em] text-sm uppercase mb-12 block"
      >
        EdgePro
      </Link>

      <nav className="flex flex-col gap-1 flex-1">
        {links.map(({ to, icon: Icon, label }) => {
          const active =
            location.pathname === to ||
            (to !== '/dashboard' && location.pathname.startsWith(to))
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-200 ${
                active
                  ? 'text-white bg-white/[0.06]'
                  : 'text-white/35 hover:text-white/60'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      <Link
        to="/"
        className="flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors text-xs tracking-wide"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to site
      </Link>
    </aside>
  )
}
