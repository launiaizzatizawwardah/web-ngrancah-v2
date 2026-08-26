import { gallery } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={gallery.title} subtitle={gallery.subtitle} />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.images.map((image, index) => (
            <ScrollReveal key={image.src} delay={index * 80}>
              <div
                className={`gallery-item perspective-container rounded-xl overflow-hidden shadow-3d-md ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className="image-depth relative group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      index === 0 ? 'h-64 md:h-96' : 'h-40 md:h-52'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/30 transition-colors duration-300 flex items-end">
                    <p className="font-body text-sm text-warm-cream p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
