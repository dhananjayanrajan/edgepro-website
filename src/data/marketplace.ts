export interface MarketplaceProduct {
  id: string
  name: string
  version: string
  description: string
  tags: string[]
  plans: {
    duration: string
    price: number
  }[]
}

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    id: 'dart-bias-engine-v5',
    name: 'DART Bias Engine v5',
    version: '[EdgePro]',
    description: 'A premium market bias indicator that helps traders identify bullish and bearish conditions with clean visuals, directional alerts, and execution-support guidance.',
    tags: ['DART', 'EdgePro', 'Market Bias', 'Trend Analysis', 'Trading Signals', 'XAUUSD', 'Gold Trading', 'Forex', 'Crypto', 'Indices', 'Intraday Trading', 'Scalping', 'Volatility', 'Momentum'],
    plans: [
      { duration: '1 Month', price: 49 },
      { duration: '3 Months', price: 129 },
      { duration: '12 Months', price: 399 },
      { duration: 'Lifetime', price: 799 },
    ],
  },
]
