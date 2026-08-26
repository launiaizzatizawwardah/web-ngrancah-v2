import { umkm } from '../../data/content'

import SectionHeading from '../ui/SectionHeading'

import ScrollReveal from '../ui/ScrollReveal'

import Card3D from '../ui/Card3D'

export default function UMKM() {
  return (
    <section
      id="umkm"
      className="relative overflow-hidden bg-warm-cream py-20 md:py-28"
    >
      {/* =========================================
          ORNAMEN BACKGROUND UMKM

          MASUKKAN FILE GAMBAR DI:
          public/ornaments/umkm.png

          Kalau nama gambarnya berbeda, ganti:
          /ornaments/umkm.png
          ========================================= */}
      
       <div
        className="pointer-events-none absolute inset-0 z-100 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/ornaments/beras.png"
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

      {/* Ornamen kanan atas */}
      <img
        src="/ornaments/umkm.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-10
          z-0
          w-52
          opacity-20
          md:w-72
          lg:w-96
        "
      />

      {/* Ornamen kiri bawah */}
      <img
        src="/ornaments/umkm.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          z-0
          w-48
          rotate-180
          opacity-15
          md:w-64
          lg:w-80
        "
      />

      {/* Cahaya lembut di background */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gold/10
          blur-[130px]
        "
        aria-hidden="true"
      />

      {/* =========================================
          ISI UMKM
          ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={umkm.title}
          subtitle={umkm.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {umkm.items.map((item, index) => (
            <ScrollReveal
              key={item.name}
              delay={index * 100}
            >
              <Card3D className="group flex h-full flex-col overflow-hidden bg-warm-cream/95 backdrop-blur-sm">
                
                {/* FOTO PRODUK / USAHA */}
                <div className="image-depth h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />
                </div>

                {/* ISI CARD */}
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-1 font-body text-xs font-medium uppercase tracking-wide text-gold">
                    {item.category}
                  </span>

                  <h3 className="mb-2 font-display text-lg font-semibold text-forest-deep">
                    {item.name}
                  </h3>

                  <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-brown-dark/70">
                    {item.description}
                  </p>

                  <a
                    href={`tel:${item.contact}`}
                    className="
                      font-body
                      text-sm
                      font-medium
                      text-forest
                      transition-colors
                      hover:text-gold
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-gold
                      rounded
                    "
                  >
                    {item.contact}
                  </a>
                </div>

              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}