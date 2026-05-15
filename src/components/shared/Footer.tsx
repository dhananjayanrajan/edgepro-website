import { Link } from 'react-router-dom'
import { Cpu } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const productLinks = [
  { label: 'DART Bias Engine', href: '/' },
  { label: 'MT5 Bots (Soon)', href: '/mt5-bots' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

const legalLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="glass-card py-16 mt-24 border-t border-cyber-blue/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Cpu className="w-7 h-7 text-cyber-blue" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                EdgePro
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium trading execution tools — built around clarity, discipline, and directional structure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-cyber-blue transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-cyber-blue transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/contact" className="hover:text-cyber-blue transition-colors">Telegram Support</a></li>
              <li><a href="mailto:support@edgepro.online" className="hover:text-cyber-blue transition-colors">support@edgepro.online</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-cyber-blue/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2026 EdgePro. All rights reserved.</p>
          <p className="text-xs text-gray-600 text-center">
            DART is a technical analysis tool, not financial advice.{' '}
            <Link to="/terms" className="text-cyber-blue hover:underline">Risk Disclosure</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
