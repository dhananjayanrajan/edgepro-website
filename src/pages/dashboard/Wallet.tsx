import { Copy, RefreshCw } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import ScrollReveal from '@/animations/ScrollReveal'

const networks = [
  { name: 'Ethereum', standard: 'ERC-20', accepts: 'USDT, USDC', address: '0x...' },
  { name: 'BNB Chain', standard: 'BEP-20', accepts: 'USDT, USDC', address: '0x...' },
  { name: 'Polygon', standard: 'POL', accepts: 'USDT, USDC', address: '0x...' },
]

export default function Wallet() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
          <p className="text-gray-400 text-sm">Deposit funds and manage your balance.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Card className="glass-card border-0">
          <CardContent className="p-8 space-y-4">
            <p className="text-sm text-gray-400">Available Balance</p>
            <h2 className="text-4xl font-bold text-white">0.00 USDT</h2>
            <p className="text-xs text-gray-500">Credited in USDT equivalent</p>
            <Button variant="outline" className="glass-card text-cyber-blue">Add Funds</Button>
          </CardContent>
        </Card>
      </ScrollReveal>

      <ScrollReveal>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">Each network has one permanent address — send USDT or USDC to any of them.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {networks.map((net) => (
              <Card key={net.name} className="glass-card border-0">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white text-sm">{net.name}</h3>
                      <p className="text-xs text-gray-500">{net.standard}</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-[10px]">QR</Button>
                  </div>
                  <p className="text-xs text-gray-500">Accepts: {net.accepts}</p>
                  <div className="flex items-center gap-2 bg-cyber-dark rounded-lg px-3 py-2">
                    <span className="text-xs text-gray-400 truncate flex-1">{net.address}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Copy className="w-3 h-3 text-gray-500 hover:text-cyber-blue" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-gray-600">These addresses are permanent and unique to your account. Deposits are credited automatically after blockchain confirmation.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Card className="glass-card border-0">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-white">Deposit History</h2>
              <Button variant="ghost" size="icon">
                <RefreshCw className="w-4 h-4 text-gray-500 hover:text-cyber-blue" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">No deposits yet.</p>
            <p className="text-xs text-gray-600">Send USDT or USDC to any of your deposit addresses above.</p>
          </CardContent>
        </Card>
      </ScrollReveal>

      <ScrollReveal>
        <Card className="glass-card border-0">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-white">Transaction History</h2>
              <Button variant="link" className="text-cyber-blue text-xs">Check for new transactions</Button>
            </div>
            <p className="text-sm text-gray-500">No transactions yet.</p>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  )
}
