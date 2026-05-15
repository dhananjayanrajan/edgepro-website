import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Cpu, Mail, Lock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <Card className="glass-card border-0 w-full max-w-md">
        <CardContent className="p-8 space-y-8">
          <div className="text-center space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <Cpu className="w-8 h-8 text-cyber-blue" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">EdgePro</span>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
              <p className="text-gray-400 text-sm">Sign in to access your dashboard</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input type="email" placeholder="Email address" className="pl-11 bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input type="password" placeholder="Password" className="pl-11 bg-cyber-dark border-cyber-blue/20 text-white placeholder:text-gray-600" />
            </div>
            <Button className="w-full gradient-border bg-cyber-blue/20 text-white gap-2">
              Sign In
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Button variant="link" className="text-cyber-blue p-0">Create free account</Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
