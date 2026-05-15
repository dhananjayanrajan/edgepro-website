import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Bot, Shield, Cpu, Download, ArrowRight, Zap } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'

const features = [
  { icon: Bot, title: 'Fully Automated Execution', description: 'Bots trade 24/7 without any manual input — enter, manage, and exit positions automatically.' },
  { icon: Shield, title: 'Built-in Risk Management', description: 'Dynamic stop-loss, position sizing, and drawdown limits baked into every strategy.' },
  { icon: Cpu, title: 'DART-Powered Strategies', description: 'Each bot is backed by the same multi-timeframe bias engine that powers DART Bias Engine v3.' },
  { icon: Download, title: 'Instant EX5 Delivery', description: 'Once live, your personalised EX5 license file is generated and delivered in seconds after purchase.' },
]

const steps = [
  { step: '01', title: 'Purchase a Bot', description: 'Select a strategy, choose your plan, and fund with your wallet balance.' },
  { step: '02', title: 'Provide MT5 Details', description: 'Enter your broker server, MT5 account number, and password securely.' },
  { step: '03', title: 'Receive Your EX5', description: 'Your personalised EX5 license file is generated and ready to install instantly.' },
]

export default function MT5Bots() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <Badge variant="outline" className="border-cyber-yellow text-cyber-yellow gap-2 px-4 py-2">
              <Zap className="w-4 h-4" />
              Launching Soon
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">MT5 Algo Bots</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Fully automated MetaTrader 5 Expert Advisors powered by the DART Bias Engine. Zero manual intervention — deployed directly to your MT5 account as a personalised EX5 file.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature) => (
            <ScrollReveal key={feature.title}>
              <Card className="glass-card border-0 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white text-center mb-12">How bot delivery will work</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {steps.map((item) => (
            <ScrollReveal key={item.step}>
              <Card className="glass-card border-0 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Card className="glass-card border-0 max-w-md mx-auto">
            <CardContent className="p-8 text-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Don't miss the launch.</h3>
                <p className="text-gray-400 text-sm">Join the waitlist and be first to get access when MT5 bots go live.</p>
              </div>
              <Input type="email" placeholder="your@email.com" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
              <Button className="w-full gradient-border bg-cyber-blue/20 text-white gap-2">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-xs text-gray-600">No spam. We'll only email when bots go live.</p>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-400 text-sm">In the meantime —</p>
            <Button variant="link" className="text-cyber-blue font-semibold">Try DART Bias Engine Now →</Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
