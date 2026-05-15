export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'STARTER',
    price: '$49',
    period: '/month',
    description: 'Individual TradingView access to DART.',
    features: [
      'TradingView invite-only access',
      'Bull/Bear bias visuals',
      'Flip markers & alerts',
      'Setup guide',
      'Email support',
    ],
    highlighted: false,
    cta: 'Start Monthly →',
  },
  {
    name: 'PRO',
    price: '$99',
    period: '/month',
    description: 'DART access plus live onboarding.',
    features: [
      'Everything in Starter',
      'Live walkthrough session',
      'Execution checklist',
      'Private support channel',
      'Early access to tools',
    ],
    highlighted: true,
    cta: 'Get Pro Access →',
  },
  {
    name: 'LIFETIME FOUNDERS',
    price: '$499',
    period: 'one-time',
    description: 'Permanent access. No recurring charges.',
    features: [
      'Lifetime DART access',
      'All future updates',
      'Founder recognition',
      'MT5 bot priority',
      'VIP support',
    ],
    highlighted: false,
    cta: 'Claim Lifetime Access →',
  },
]
