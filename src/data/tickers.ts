export interface Ticker {
  symbol: string
  bias: 'STRONG BULL' | 'MILD BULL' | 'STRONG BEAR' | 'MILD BEAR' | 'FLIP'
}

export const liveTickers: Ticker[] = [
  { symbol: 'XAUUSD', bias: 'STRONG BULL' },
  { symbol: 'BTCUSD', bias: 'MILD BULL' },
  { symbol: 'EURUSD', bias: 'STRONG BEAR' },
  { symbol: 'NAS100', bias: 'FLIP' },
  { symbol: 'GBPUSD', bias: 'MILD BULL' },
  { symbol: 'US500', bias: 'FLIP' },
  { symbol: 'ETHUSD', bias: 'MILD BEAR' },
  { symbol: 'GBPJPY', bias: 'STRONG BULL' },
  { symbol: 'USOIL', bias: 'STRONG BULL' },
  { symbol: 'XAGUSD', bias: 'FLIP' },
  { symbol: 'USDJPY', bias: 'STRONG BEAR' },
  { symbol: 'BTCUSDT', bias: 'MILD BULL' },
]

export const biasColors: Record<Ticker['bias'], string> = {
  'STRONG BULL': 'text-cyber-green',
  'MILD BULL': 'text-green-400',
  'STRONG BEAR': 'text-red-500',
  'MILD BEAR': 'text-red-400',
  'FLIP': 'text-cyber-yellow',
}

export const biasArrows: Record<Ticker['bias'], string> = {
  'STRONG BULL': '▲',
  'MILD BULL': '▲',
  'STRONG BEAR': '▼',
  'MILD BEAR': '▼',
  'FLIP': '◈',
}
