import { news } from '../../data/content'

import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import Card3D from '../ui/Card3D'

export default function News() {
  return (
    <section
      id="berita"
      className="relative overflow-hidden bg-cream py-20 md:py-28"
    >
      {/* =========================================
          ORNAMEN MAHKOTA — BACKGROUND
          File: public/images/ornaments/mahkota.png
          ========================================= */}
       <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/ornaments/mahkota.png"
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

      {/* Mahkota kanan atas */}
      <img
        src="/ornaments/mahkota.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-10
          z-0
          w-52
          opacity-20
          rotate-12
          sm:w-64
          md:w-80
          lg:w-[380px]
        "
      />

      {/* Mahkota kiri bawah */}
      <img
        src="/images/ornaments/mahkota.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          z-0
          w-44
          opacity-15
          -rotate-12
          sm:w-56
          md:w-72
          lg:w-[330px]
        "
      />

      {/* Cahaya lembut di tengah */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gold/10
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* =========================================
          ISI BERITA
          ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={news.title}
          subtitle={news.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.items.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 120}
            >
              <Card3D className="group flex h-full flex-col overflow-hidden bg-warm-cream/95 backdrop-blur-sm">

                {/* FOTO BERITA */}
                <div className="image-depth relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
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

                  {/* Kategori */}
                  <span className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-forest-deep/90
                    px-3
                    py-1
                    font-body
                    text-xs
                    font-medium
                    text-warm-cream
                    backdrop-blur-sm
                  ">
                    {item.category}
                  </span>
                </div>

                {/* ISI BERITA */}
                <div className="flex flex-1 flex-col p-6">
                  <time className="mb-2 font-body text-xs text-brown-dark/50">
                    {item.date}
                  </time>

                  <h3 className="mb-3 font-display text-lg font-semibold text-forest-deep line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm leading-relaxed text-brown-dark/70 line-clamp-3">
                    {item.excerpt}
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