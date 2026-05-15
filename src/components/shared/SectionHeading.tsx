interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
