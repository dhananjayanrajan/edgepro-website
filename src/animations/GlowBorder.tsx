import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowBorderProps {
  children: ReactNode
  className?: string
}

export default function GlowBorder({ children, className }: GlowBorderProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)' }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink p-px">
        <div className="w-full h-full rounded-lg bg-cyber-dark" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  )
}
