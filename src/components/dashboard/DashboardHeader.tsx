import { useLocation } from 'react-router-dom'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const titles: Record<string, string> = {
  '/dashboard': 'Overview',
  '/dashboard/wallet': 'Wallet',
  '/dashboard/subscriptions': 'Subscriptions',
  '/dashboard/mt5-accounts': 'MT5 Accounts',
  '/dashboard/marketplace': 'Marketplace',
}

export default function DashboardHeader() {
  const location = useLocation()
  const path = location.pathname
  const title = path.startsWith('/dashboard/marketplace/')
    ? 'Product Details'
    : titles[path] || 'Dashboard'

  return (
    <header className="bg-[#0a0a0a] border-b border-white/[0.06] px-8 py-4 flex items-center justify-between">
      <h1 className="text-white font-medium text-sm tracking-wide">{title}</h1>
      <div className="flex items-center gap-5">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 border border-white/[0.08] px-3 py-1.5">
          $0.00 USDT
        </span>
        <Avatar className="h-7 w-7 bg-white/10">
          <AvatarFallback className="text-white/50 text-xs font-medium bg-transparent">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
