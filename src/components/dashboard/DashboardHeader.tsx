import { useLocation } from 'react-router-dom'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

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
  const title = path.startsWith('/dashboard/marketplace/') ? 'Product Details' : titles[path] || 'Dashboard'

  return (
    <header className="glass-card border-b border-cyber-blue/10 px-8 py-4 flex items-center justify-between">
      <h1 className="text-white font-semibold text-lg">{title}</h1>
      <div className="flex items-center gap-4">
        <Badge variant="outline" className="border-cyber-green text-cyber-green gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-green" />
          Wallet: $0.00 USDT
        </Badge>
        <Avatar className="h-9 w-9 bg-gradient-to-r from-cyber-blue to-cyber-purple">
          <AvatarFallback className="text-white font-bold">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
