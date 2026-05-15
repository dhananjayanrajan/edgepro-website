import { useState } from 'react'
import { Plus, Server } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import ScrollReveal from '@/animations/ScrollReveal'

export default function MT5Accounts() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">MT5 Accounts</h1>
            <p className="text-gray-400 text-sm">Manage your MT5 trading accounts for bot licensing.</p>
          </div>
          <Button variant="outline" className="glass-card text-cyber-blue gap-2" onClick={() => setShowForm(!showForm)}>
            <Plus className="w-4 h-4" />
            Add MT5 Account
          </Button>
        </div>
      </ScrollReveal>

      {showForm && (
        <ScrollReveal>
          <Card className="glass-card border-0">
            <CardContent className="p-6 space-y-6">
              <h2 className="font-semibold text-white">Add MT5 Account</h2>
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label className="text-gray-400">Broker *</Label>
                  <Select>
                    <SelectTrigger className="bg-cyber-dark border-cyber-blue/20 text-white">
                      <SelectValue placeholder="Select broker..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="icmarkets">IC Markets</SelectItem>
                      <SelectItem value="ftmo">FTMO</SelectItem>
                      <SelectItem value="pepperstone">Pepperstone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-400">Login (Account Number) *</Label>
                  <Input placeholder="e.g. 12345678" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-400">Trading Password *</Label>
                  <Input type="password" placeholder="Your MT5 trading password" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-400">Nick Name (optional)</Label>
                  <Input placeholder="e.g. My Main Account" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                </div>
                <p className="text-xs text-gray-600">Your credentials are stored securely to generate your EX5 license file.</p>
                <Button className="gradient-border bg-cyber-blue/20 text-white">Add Account</Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      )}

      <ScrollReveal>
        <Card className="glass-card border-0">
          <CardContent className="p-12 text-center space-y-4">
            <Server className="w-12 h-12 text-gray-600 mx-auto" />
            <p className="text-gray-500">No MT5 accounts yet</p>
            <p className="text-sm text-gray-600">Add your MT5 account credentials to receive bot license files.</p>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  )
}
