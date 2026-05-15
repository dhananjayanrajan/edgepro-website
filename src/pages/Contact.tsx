import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import ScrollReveal from '@/animations/ScrollReveal'
import { contactContent } from '@/data/contact'

export default function Contact() {
  return (
    <div className="pt-36 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 mb-5 block">
            Support
          </span>
          <div>
            {contactContent.headline.map((line, i) => (
              <h1
                key={i}
                className={`text-[clamp(48px,7vw,110px)] font-bold tracking-[-0.04em] leading-[0.93] ${
                  i === 1 ? 'text-white/25' : 'text-white'
                }`}
              >
                {line}
              </h1>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24">
          <ScrollReveal>
            <div className="space-y-10">
              {contactContent.channels.map((channel) => (
                <div key={channel.method} className="space-y-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 block">
                    {channel.method}
                  </span>
                  <a
                    href={channel.href}
                    className="text-white font-medium hover:text-white/70 transition-colors block text-lg"
                  >
                    {channel.value}
                  </a>
                  <p className="text-white/30 text-sm">{channel.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form className="space-y-5">
              {contactContent.form.fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                    {field.label}
                  </Label>
                  {field.type === 'textarea' ? (
                    <Textarea
                      placeholder={field.placeholder}
                      rows={5}
                      className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-none resize-none focus-visible:ring-0 focus-visible:border-white/20"
                    />
                  ) : (
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/20 rounded-none h-11 focus-visible:ring-0 focus-visible:border-white/20"
                    />
                  )}
                </div>
              ))}
              <Button className="bg-white text-black hover:bg-white/90 text-[11px] tracking-[0.2em] uppercase font-semibold h-11 rounded-none px-8 mt-2">
                {contactContent.form.cta}
              </Button>
              <p className="text-white/20 text-xs">{contactContent.form.note}</p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
