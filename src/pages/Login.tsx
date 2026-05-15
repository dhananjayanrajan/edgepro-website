import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock } from 'lucide-react'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm"
      >
        <Link
          to="/"
          className="text-white/30 text-[10px] tracking-[0.3em] uppercase hover:text-white/50 transition-colors block mb-12"
        >
          ← EdgePro
        </Link>

        <div className="mb-10 space-y-3">
          <h1 className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.03em] text-white leading-none">
            Welcome back.
          </h1>
          <p className="text-white/30 text-sm">Sign in to access your dashboard.</p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">Email</Label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
              <Input
                type="email"
                placeholder="your@email.com"
                className="pl-10 bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-none h-11 focus-visible:ring-0 focus-visible:border-white/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
              <Input
                type="password"
                placeholder="••••••••"
                className="pl-10 bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-none h-11 focus-visible:ring-0 focus-visible:border-white/20"
              />
            </div>
          </div>

          <Button className="w-full bg-white text-black hover:bg-white/90 text-[11px] tracking-[0.2em] uppercase font-semibold h-11 rounded-none mt-2">
            Sign In
          </Button>
        </div>

        <p className="text-center text-white/25 text-xs mt-8">
          No account yet?{' '}
          <button className="text-white/50 hover:text-white transition-colors underline underline-offset-2">
            Request access
          </button>
        </p>
      </motion.div>
    </div>
  )
}
