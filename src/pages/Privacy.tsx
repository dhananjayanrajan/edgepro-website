import { motion } from 'framer-motion'
import ScrollReveal from '@/animations/ScrollReveal'
import { privacyContent } from '@/data/legal'

export default function Privacy() {
  return (
    <div className="pt-36 pb-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold tracking-[-0.03em] text-white mb-3">
            {privacyContent.title}
          </h1>
          <p className="text-white/25 text-sm">Last updated: {privacyContent.updated}</p>
          <p className="text-white/40 text-sm mt-4 leading-relaxed">{privacyContent.intro}</p>
        </motion.div>

        <div className="space-y-12">
          {privacyContent.sections.map((section, i) => (
            <ScrollReveal key={i} delay={i * 0.02}>
              <div className="space-y-3">
                <h2 className="text-white font-semibold text-sm tracking-wide">
                  {section.title}
                </h2>
                <p className="text-white/35 text-sm leading-relaxed">{section.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
