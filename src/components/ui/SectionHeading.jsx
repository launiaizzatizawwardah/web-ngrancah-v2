import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ title, subtitle, light = false, centered = true }) {
  return (
    <ScrollReveal className={centered ? 'text-center mb-12 md:mb-16' : 'mb-12 md:mb-16'}>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
          light ? 'text-warm-cream' : 'text-forest-deep'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-base md:text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-cream/90' : 'text-brown-dark/70'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-gold ${centered ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </ScrollReveal>
  )
}
