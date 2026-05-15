import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <Card className={cn('glass-card border-0', className)}>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  )
}
