import { liveTickers, biasColors, biasArrows } from '@/data/tickers'

export default function TickerTape() {
  const repeated = [...liveTickers, ...liveTickers, ...liveTickers]

  return (
    <div className="overflow-hidden border-y border-cyber-blue/10 bg-cyber-dark/80 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {repeated.map((ticker, i) => (
          <div key={i} className="flex items-center gap-2 mx-6">
            <span className="text-gray-400 text-sm font-mono">{ticker.symbol}</span>
            <span className={`text-sm font-bold ${biasColors[ticker.bias]}`}>
              {biasArrows[ticker.bias]} {ticker.bias}
            </span>
            {i < repeated.length - 1 && (
              <span className="text-cyber-blue/20 mx-2">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
