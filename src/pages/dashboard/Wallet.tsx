import { Copy, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/animations/ScrollReveal'

const networks = [
  { name: 'Ethereum', standard: 'ERC-20', accepts: 'USDT, USDC', address: '0x...' },
  { name: 'BNB Chain', standard: 'BEP-20', accepts: 'USDT, USDC', address: '0x...' },
  { name: 'Polygon', standard: 'POL', accepts: 'USDT, USDC', address: '0x...' },
]

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#111] border border-white/[0.07] ${className}`}>{children}</div>
)

export default function Wallet() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Wallet</h2>
          <p className="text-white/30 text-sm">Deposit funds and manage your balance.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Card className="p-8 space-y-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/25">Available Balance</p>
          <div className="text-[clamp(32px,4vw,56px)] font-bold tracking-[-0.03em] text-white leading-none">
            0.00 <span className="text-white/30 text-2xl font-medium">USDT</span>
          </div>
          <p className="text-white/20 text-xs">Credited in USDT equivalent after blockchain confirmation.</p>
        </Card>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="space-y-4">
          <p className="text-white/30 text-sm">
            Each network has a permanent deposit address. Send USDT or USDC to any of them.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {networks.map((net) => (
              <Card key={net.name} className="p-5 space-y-4 hover:border-white/15 transition-colors duration-300">
                <div>
                  <h3 className="text-white font-medium text-sm">{net.name}</h3>
                  <p className="text-white/30 text-xs">{net.standard} · {net.accepts}</p>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] px-3 py-2">
                  <span className="text-xs text-white/25 truncate flex-1 font-mono">{net.address}</span>
                  <button className="text-white/20 hover:text-white/50 transition-colors">
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-white/15 text-xs">
            Addresses are permanent and unique to your account.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white/60 text-sm font-medium">Deposit History</h3>
            <button className="text-white/20 hover:text-white/40 transition-colors">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-white/20 text-sm">No deposits yet.</p>
        </Card>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white/60 text-sm font-medium">Transaction History</h3>
            <Button variant="ghost" className="text-white/25 hover:text-white/50 text-xs h-auto p-0">
              Refresh
            </Button>
          </div>
          <p className="text-white/20 text-sm">No transactions yet.</p>
        </Card>
      </ScrollReveal>
    </div>
  )
}
