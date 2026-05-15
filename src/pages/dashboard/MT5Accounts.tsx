import { useState } from 'react'
import { Plus, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import ScrollReveal from '@/animations/ScrollReveal'

const brokers = [
  { value: 'icmarkets', label: 'IC Markets' },
  { value: 'ftmo', label: 'FTMO' },
  { value: 'pepperstone', label: 'Pepperstone' },
  { value: 'xm', label: 'XM' },
  { value: 'other', label: 'Other' },
]

const formFields = [
  { name: 'login', label: 'Account Number', type: 'text', placeholder: 'e.g. 12345678' },
  { name: 'password', label: 'Trading Password', type: 'password', placeholder: 'MT5 trading password' },
  { name: 'nickname', label: 'Nickname (optional)', type: 'text', placeholder: 'e.g. My Main Account' },
]

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#111] border border-white/[0.07] ${className}`}>{children}</div>
)

export default function MT5Accounts() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">MT5 Accounts</h2>
            <p className="text-white/30 text-sm">Manage credentials for bot license generation.</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowForm(!showForm)}
            className="border-white/[0.08] bg-transparent text-white/50 hover:text-white hover:border-white/20 rounded-none h-9 text-xs tracking-widest uppercase px-5 gap-2"
          >
            <Plus className="w-3 h-3" />
            Add Account
          </Button>
        </div>
      </ScrollReveal>

      {showForm && (
        <ScrollReveal>
          <Card className="p-6 space-y-6 max-w-md">
            <h3 className="text-white/60 text-sm font-medium">New MT5 Account</h3>

            <div className="space-y-2">
              <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">Broker</Label>
              <Select>
                <SelectTrigger className="bg-white/[0.03] border-white/[0.07] text-white rounded-none h-10 focus:ring-0 text-sm">
                  <SelectValue placeholder="Select broker..." />
                </SelectTrigger>
                <SelectContent className="bg-[#111] border-white/[0.07] rounded-none">
                  {brokers.map((b) => (
                    <SelectItem key={b.value} value={b.value} className="text-white/60 focus:text-white focus:bg-white/[0.06]">
                      {b.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formFields.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">{field.label}</Label>
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 rounded-none h-10 focus-visible:ring-0 focus-visible:border-white/15"
                />
              </div>
            ))}

            <p className="text-white/20 text-xs">Credentials are stored securely to generate your EX5 license file.</p>

            <Button className="bg-white text-black hover:bg-white/90 rounded-none h-9 text-xs tracking-widest uppercase px-6">
              Add Account
            </Button>
          </Card>
        </ScrollReveal>
      )}

      <ScrollReveal>
        <Card className="p-16 text-center space-y-4">
          <Server className="w-8 h-8 text-white/10 mx-auto" />
          <p className="text-white/30 text-sm">No MT5 accounts yet.</p>
          <p className="text-white/20 text-xs">Add credentials to receive personalised EX5 license files.</p>
        </Card>
      </ScrollReveal>
    </div>
  )
}
