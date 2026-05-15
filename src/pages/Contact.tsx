import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle, Mail, Clock, Send } from 'lucide-react'
import ScrollReveal from '@/animations/ScrollReveal'

const channels = [
  { icon: MessageCircle, title: 'Telegram (Fastest)', desc: 'For urgent issues and quick questions.', action: 'Open Telegram →' },
  { icon: Mail, title: 'Email Support', desc: 'For detailed questions or billing issues.', action: 'support@edgepro.online →' },
  { icon: Clock, title: 'Response Time', desc: 'We aim to reply within 4–24 hours on business days.' },
]

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">Get in Touch</span>
            </h1>
            <p className="text-gray-400">We typically respond within a few hours. For urgent issues, Telegram is fastest.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {channels.map((ch) => (
            <ScrollReveal key={ch.title}>
              <Card className="glass-card border-0 h-full">
                <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mx-auto mb-4">
                      <ch.icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{ch.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{ch.desc}</p>
                  </div>
                  {ch.action && (
                    <Button variant="link" className="text-cyber-blue font-semibold">{ch.action}</Button>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Card className="glass-card border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-xl font-bold text-white">Send a Message</h2>
              <div className="space-y-5">
                <Input placeholder="Your Name" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                <Input type="email" placeholder="Email Address" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                <Input placeholder="Subject" className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
                <Textarea placeholder="Describe your issue or question in detail..." rows={5} className="bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600 resize-none" />
              </div>
              <Button className="w-full gradient-border bg-cyber-blue/20 text-white gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
