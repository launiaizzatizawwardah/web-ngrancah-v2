import { location } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import Card3D from '../ui/Card3D'

export default function Location() {
  return (
    <section id="lokasi" className="py-20 md:py-28 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={location.title} subtitle={location.subtitle} />

        <div className="grid lg:grid-cols-5 gap-8">
          <ScrollReveal className="lg:col-span-2">
            <Card3D className="p-8 h-full">
              <h3 className="font-display text-xl font-semibold text-forest-deep mb-4">
                Alamat
              </h3>
              <p className="font-body text-brown-dark/80 leading-relaxed mb-6">
                {location.address}
              </p>
              <h3 className="font-display text-xl font-semibold text-forest-deep mb-4">
                Petunjuk Arah
              </h3>
              <p className="font-body text-brown-dark/70 leading-relaxed mb-6">
                {location.directions}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-forest hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
              >
                Buka di Google Maps
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Card3D>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" delay={150}>
            <Card3D hover={false} className="overflow-hidden h-full min-h-[300px]">
              <iframe
                title="Peta lokasi Padukuhan Ngrancah"
                src={location.mapEmbedUrl}
                className="w-full h-full min-h-[300px] md:min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Card3D>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
