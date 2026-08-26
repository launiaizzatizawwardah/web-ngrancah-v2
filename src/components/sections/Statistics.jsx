import { useEffect, useRef, useState } from 'react'
import { statistics } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import Card3D from '../ui/Card3D'

function AnimatedNumber({ value, isVisible }) {
  const [display, setDisplay] = useState(0)
  const numericValue = parseInt(value.replace(/\./g, ''), 10)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * numericValue)
      setDisplay(start)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, numericValue])

  const formatted = display.toLocaleString('id-ID')
  return <>{formatted}</>
}

function StatCard({ item, index }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <ScrollReveal delay={index * 80}>
      <div ref={ref}>
        <Card3D className="p-6 md:p-8 text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-forest-deep mb-1">
            <AnimatedNumber value={item.value} isVisible={isVisible} />
          </p>
          <p className="font-body text-sm font-medium text-gold mb-1">{item.suffix}</p>
          <p className="font-body text-sm text-brown-dark/60">{item.label}</p>
        </Card3D>
      </div>
    </ScrollReveal>
  )
}

export default function Statistics() {
  return (
    <section id="statistik" className="py-20 md:py-28 bg-forest-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={statistics.title}
          subtitle={statistics.subtitle}
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {statistics.items.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
