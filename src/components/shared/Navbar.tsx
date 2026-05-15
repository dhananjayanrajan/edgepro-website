import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mainNav } from '@/data/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'border-b border-white/[0.06] bg-[#080808]/90 backdrop-blur-md' : ''
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-white font-bold tracking-[0.22em] text-sm uppercase select-none"
        >
          EdgePro
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {mainNav.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-white/40 hover:text-white transition-colors duration-300 text-[13px] tracking-wide flex items-center gap-2"
            >
              {link.label}
              {link.badge && (
                <span className="text-[9px] tracking-[0.2em] border border-white/20 text-white/30 px-2 py-0.5">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/login">
            <Button
              variant="outline"
              size="sm"
              className="border-white/15 bg-transparent text-white/50 hover:text-white hover:border-white/30 text-[11px] tracking-[0.2em] uppercase rounded-none h-8 px-5"
            >
              Enter
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-white/[0.06] bg-[#080808] overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {mainNav.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button
                  variant="outline"
                  className="border-white/15 bg-transparent text-white/50 w-full text-[11px] tracking-[0.2em] uppercase rounded-none"
                >
                  Enter
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
