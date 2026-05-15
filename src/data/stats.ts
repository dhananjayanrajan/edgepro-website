export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '1,247', label: 'Active Traders' },
  { value: '94.2%', label: 'Signal Accuracy' },
  { value: '200+', label: 'Markets Covered' },
  { value: '<24h', label: 'Average Access Time' },
]
