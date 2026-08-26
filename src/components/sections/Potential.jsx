import { potential } from '../../data/content'

import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import Card3D from '../ui/Card3D'

export default function Potential() {
  return (
    <section
      id="potensi"
      className="relative min-h-screen overflow-hidden bg-cream py-20 md:py-28"
    >
      {/* =========================================
          ORNAMEN BATIK JAWA
          File gambar yang digunakan:
          public/images/ornaments/batik.png
          ========================================= */}
       <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/ornaments/.png"
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

      {/* BATIK — POJOK KANAN ATAS */}
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

      

      {/* Cahaya hangat lembut di tengah */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gold/10
          blur-[120px]
        "
        aria-hidden="true"
      />


      {/* =========================================
          KONTEN UTAMA
          ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* JUDUL SECTION */}
        <SectionHeading
          title={potential.title}
          subtitle={potential.subtitle}
        />

        {/* Aksen Jawa di bawah judul */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold/60 sm:w-16" />

          <span className="font-display text-xl text-gold">
            ❖
          </span>

          <span className="h-px w-10 bg-gold/60 sm:w-16" />
        </div>

        {/* =====================================
            CARD POTENSI
            ===================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {potential.items.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 100}
            >
              <Card3D
                className="
                  group
                  relative
                  flex
                  h-full
                  min-h-[270px]
                  flex-col
                  overflow-hidden
                  border
                  border-forest-deep/10
                  bg-warm-cream/85
                  p-6
                  shadow-[0_18px_50px_rgba(35,77,60,0.10)]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-gold/50
                "
              >
                {/* Lingkaran dekoratif di pojok */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    border
                    border-gold/15
                  "
                  aria-hidden="true"
                />

                {/* Nomor urutan */}
                <span className="mb-5 font-body text-[10px] font-semibold tracking-[0.25em] text-gold/70">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-gold/25
                    bg-gold/5
                    text-3xl
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <span role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>

                {/* Nama Potensi */}
                <h3 className="font-display text-xl font-semibold text-forest-deep">
                  {item.title}
                </h3>

                {/* Garis emas */}
                <div className="my-4 h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-16" />

                {/* Deskripsi */}
                <p className="flex-1 font-body text-sm leading-relaxed text-brown-dark/70">
                  {item.description}
                </p>

                {/* Aksen bawah */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
                  <span className="h-px flex-1 bg-forest-deep/10" />
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* =====================================
            QUOTE / PENUTUP
            ===================================== */}

        <ScrollReveal delay={400}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold/40" />
              <span className="text-gold/70">✦</span>
              <span className="h-px w-8 bg-gold/40" />
            </div>

            <p className="font-display text-lg italic text-forest-deep/75 sm:text-xl">
              “Saka bumi, kanggo sesami, lan tumuju masa depan.”
            </p>

            <p className="mt-2 font-body text-xs text-brown-dark/50">
              Dari bumi sendiri, untuk sesama, menuju masa depan bersama.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* =========================================
          BATIK SEBAGAI BORDER BAWAH
          Tetap memakai batik.png yang sama
          ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-0
          h-20
          w-full
          overflow-hidden
          opacity-[0.12]
        "
        aria-hidden="true"
      >
        <img
          src="/images/ornaments/batik.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}