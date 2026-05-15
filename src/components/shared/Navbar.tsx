import { Link } from 'react-router-dom'
import { Cpu, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'Access', href: '/#access' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'MT5 Bots', href: '/mt5-bots', badge: 'SOON' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Cpu className="w-8 h-8 text-cyber-blue" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            EdgePro
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-gray-300 hover:text-cyber-blue transition-colors text-sm flex items-center gap-2"
            >
              {link.label}
              {link.badge && (
                <Badge variant="outline" className="border-cyber-yellow text-cyber-yellow text-[10px]">
                  {link.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>

        <nav className="hidden lg:block">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-white" />
          </SheetTrigger>
          <SheetContent side="right" className="glassmorphism border-cyber-blue/10">
            <nav className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <Link key={link.label} to={link.href} className="text-gray-300 hover:text-cyber-blue text-sm py-2">
                  {link.label}
                  {link.badge && (
                    <Badge variant="outline" className="ml-2 border-cyber-yellow text-cyber-yellow text-[10px]">
                      {link.badge}
                    </Badge>
                  )}
                </Link>
              ))}
              <Separator className="bg-cyber-blue/10" />
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </nav>
  )
}
