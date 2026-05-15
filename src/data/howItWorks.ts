export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Create an Account',
    description: 'Sign up on EdgePro and choose a DART subscription plan that matches your trading style.',
  },
  {
    number: '02',
    title: 'Submit Your Username',
    description: 'Provide your TradingView handle. Access is granted personally — no app stores, no resellers.',
  },
  {
    number: '03',
    title: 'Add DART to Your Chart',
    description: 'Find it in TradingView\'s invite-only scripts and apply it to any chart, market, or timeframe.',
  },
  {
    number: '04',
    title: 'Trade with Direction',
    description: 'DART paints the background. Set alerts on flips. Execute when conditions fully align.',
  },
]
