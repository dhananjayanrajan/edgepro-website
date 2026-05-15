export interface Feature {
  title: string
  description: string
  icon: string
}

export const features: Feature[] = [
  {
    title: 'See whether you\'re with or against the market',
    description: 'DART paints the chart background to reflect the active bias state — your eye reads direction before processing individual candles.',
    icon: 'Eye',
  },
  {
    title: 'Know the moment a major bias shift happens',
    description: 'Flip labels appear directly on the chart when DART detects a meaningful transition — not noise, only confirmed material shifts.',
    icon: 'RefreshCw',
  },
  {
    title: 'Filter high-conviction bias from weak noise',
    description: "DART's confidence layer helps you distinguish strong bias states from uncertain ones — reducing poor entries.",
    icon: 'Filter',
  },
  {
    title: 'Get context beyond the current candle',
    description: 'Multi-timeframe awareness avoids single-candle myopia. Output reflects broader market context.',
    icon: 'Layers',
  },
  {
    title: 'Use it without configuring anything',
    description: 'Clean, locked distribution. No parameter optimisation. No curve-fitting. Add it and it works.',
    icon: 'Lock',
  },
  {
    title: 'Get notified on flips without watching screens',
    description: 'Set TradingView alerts to fire on bias flips or high-confidence states. Trade without constant monitoring.',
    icon: 'Bell',
  },
]
