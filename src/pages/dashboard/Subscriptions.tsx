import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ScrollReveal from '@/animations/ScrollReveal'

export default function Subscriptions() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Subscriptions</h1>
          <p className="text-gray-400 text-sm">Your purchased bot subscriptions.</p>
        </div>
      </ScrollReveal>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="glass-card border-0">
          <TabsTrigger value="active" className="text-cyber-blue">Active</TabsTrigger>
          <TabsTrigger value="expired" className="text-gray-500">Expired</TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollReveal>
        <Card className="glass-card border-0">
          <CardContent className="p-12 text-center space-y-4">
            <ShoppingBag className="w-12 h-12 text-gray-600 mx-auto" />
            <p className="text-gray-500">No subscriptions yet</p>
            <p className="text-sm text-gray-600">Purchase a bot from the marketplace to get started.</p>
            <Link to="/dashboard/marketplace">
              <Button variant="outline" className="glass-card text-cyber-blue">Browse Marketplace</Button>
            </Link>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  )
}
