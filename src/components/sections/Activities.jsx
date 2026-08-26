import { activities } from '../../data/content'

import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import Card3D from '../ui/Card3D'

export default function Activities() {
  return (
    <section
      id="kegiatan"
      className="relative overflow-hidden bg-warm-cream py-20 md:py-28"
    >
      {/* =========================================
          BACKGROUND BATIK
          File lokasi: public/ornaments/batik.png
          ========================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/ornaments/batik.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '420px',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      {/* Overlay agar batik tidak mengganggu tulisan */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-warm-cream/70"
        aria-hidden="true"
      />

      {/* Cahaya lembut di tengah */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]"
        aria-hidden="true"
      />

      {<div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/ornaments/jogja.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-80
          "
        />

        {/* Lapisan lembut agar ornamen menyatu */}
        <div className="absolute inset-0 bg-warm-cream/25" />
      </div>


      }

      {/* =========================================
          ISI KEGIATAN
          ========================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={activities.title}
          subtitle={activities.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 120}>
              <Card3D className="flex h-full flex-col overflow-hidden bg-warm-cream/95 backdrop-blur-sm">
                
                {/* FOTO KEGIATAN */}
                <div className="image-depth h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* ISI CARD */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 font-body text-xs font-semibold uppercase tracking-wide text-gold">
                    {item.date}
                  </span>

                  <h3 className="mb-3 font-display text-xl font-semibold text-forest-deep">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm leading-relaxed text-brown-dark/70">
                    {item.description}
                  </p>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}