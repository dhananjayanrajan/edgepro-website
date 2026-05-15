import Hero from '@/components/sections/Hero'
import ScrollingMarquee from '@/components/sections/ScrollingMarquee'
import Stats from '@/components/sections/Stats'
import ProblemSolution from '@/components/sections/ProblemSolution'
import LiveDemo from '@/components/sections/LiveDemo'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'

export default function Landing() {
  return (
    <>
      <Hero />
      <ScrollingMarquee />
      <Stats />
      <ProblemSolution />
      <LiveDemo />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTASection />
    </>
  )
}
