import { about } from '../../data/content'

import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import Card3D from '../ui/Card3D'

export default function About() {
  return (
    <section
      id="tentang"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-warm-cream
        py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =========================================
          BACKGROUND CAHAYA LEMBUT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-gold/10
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* =========================================
          ORNAMEN JOGJA UTAMA

          FILE:
          public/ornaments/jogja.png

          Gambar ini digunakan UTUH agar janur,
          Tugu Jogja, awan, dan ornamen lainnya
          tetap menjadi satu komposisi.

          Jika ingin mengubah posisi:
          - inset-0       = memenuhi seluruh section
          - object-cover  = memenuhi area
          - opacity-...   = tingkat ketegasan ornamen
      ========================================= */}

      <div
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

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-7xl
          flex-col
          justify-center
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================
            JUDUL
        ===================================== */}

        <div className="mb-10 lg:mb-12">
          <SectionHeading
            title={about.title}
            subtitle={about.subtitle}
          />
        </div>

        {/* =====================================
            KONTEN UTAMA
        ===================================== */}

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-14
          "
        >
          {/* =================================
              FOTO / PETA
          ================================= */}

          <ScrollReveal>
            <div className="relative perspective-container">

              {/* Layer dekorasi belakang */}
              <div
                className="
                  absolute
                  -left-3
                  -top-3
                  h-full
                  w-full
                  rounded-2xl
                  border
                  border-gold/25
                  bg-gold/5
                "
                aria-hidden="true"
              />

              {/* FOTO DENGAN EFEK 3D */}
              <div
                className="
                  image-depth
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-forest-deep/10
                  bg-warm-cream
                  p-2
                  shadow-3d-lg
                "
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={about.image.src}
                    alt={about.image.alt}
                    className="
                      h-60
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                      sm:h-72
                      md:h-80
                      lg:h-[330px]
                    "
                    loading="lazy"
                  />

                  {/* Overlay foto */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-forest-deep/35
                      via-transparent
                      to-transparent
                    "
                    aria-hidden="true"
                  />

                  {/* Badge lokasi */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-white/15
                        bg-forest-deep/75
                        px-4
                        py-3
                        shadow-lg
                        backdrop-blur-md
                      "
                    >
                      <LocationIcon />

                      <div>
                        <p className="font-display text-sm text-warm-cream">
                          Padukuhan Ngrancah
                        </p>

                        <p className="font-body text-[9px] text-warm-cream/65">
                          Sriharjo, Imogiri, Bantul
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aksen kecil */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold/70" />

                <span className="text-gold">✦</span>

                <p className="font-display text-sm italic text-forest-deep/70">
                  Guyub, Rukun, Tuwuh
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* =================================
              CERITA TENTANG NGRANCAH
          ================================= */}

          <div className="relative">
            {/* Pembuka */}
            <ScrollReveal>
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold/40
                    bg-gold/10
                  "
                >
                  <span className="text-base text-gold">✦</span>
                </div>

                <div>
                  <p className="font-display text-lg italic text-gold">
                    Sugeng Rawuh
                  </p>

                  <p
                    className="
                      font-body
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-brown-dark/45
                    "
                  >
                    Cerita dari kampung kami
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Paragraf */}
            <div className="space-y-4">
              {about.paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <p
                    className="
                      font-body
                      text-sm
                      leading-7
                      text-brown-dark/80
                      sm:text-base
                      md:leading-8
                    "
                  >
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Quote Jawa */}
            <ScrollReveal delay={250}>
              <div
                className="
                  relative
                  mt-6
                  overflow-hidden
                  rounded-xl
                  border
                  border-gold/20
                  bg-warm-cream/60
                  px-5
                  py-4
                  shadow-sm
                  backdrop-blur-sm
                "
              >
                <div className="flex items-start gap-3">
                  <span className="font-display text-2xl text-gold">
                    “
                  </span>

                  <div>
                    <p className="font-display text-sm italic text-forest-deep sm:text-base">
                      Sesarengan, Ngrancah tansah tuwuh lan ngrembaka.
                    </p>

                    <p className="mt-1 font-body text-[9px] text-brown-dark/50">
                      Bersama, Ngrancah terus tumbuh dan berkembang.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* =====================================
            STATISTIK
        ===================================== */}

        <ScrollReveal delay={300}>
          <div
            className="
              mt-8
              grid
              grid-cols-2
              overflow-hidden
              rounded-2xl
              border
              border-forest-deep/10
              bg-warm-cream/75
              shadow-sm
              backdrop-blur-md
              sm:grid-cols-4
            "
          >
            {about.highlights.map((item, index) => (
              <Card3D
                key={item.label}
                className="
                  relative
                  border-0
                  bg-transparent
                  p-4
                  text-center
                  sm:p-5
                "
              >
                <div className="mb-2 flex justify-center text-gold">
                  {index === 0 && <VillageIcon />}
                  {index === 1 && <PeopleIcon />}
                  {index === 2 && <HomeIcon />}
                  {index === 3 && <LocationPinIcon />}
                </div>

                <p
                  className="
                    font-body
                    text-[9px]
                    uppercase
                    tracking-wide
                    text-brown-dark/50
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-1
                    font-display
                    text-base
                    font-semibold
                    text-forest-deep
                    sm:text-lg
                  "
                >
                  {item.value}
                </p>
              </Card3D>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}


/* =========================================
    ICON LOKASI FOTO
========================================= */

function LocationIcon() {
  return (
    <div
      className="
        flex
        h-8
        w-8
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-gold/40
        text-gold
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-4 w-4"
      >
        <path
          d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </div>
  )
}


/* =========================================
    ICON STATISTIK
========================================= */

function VillageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-7 w-7"
    >
      <path d="M3 21V10l9-7 9 7v11" />
      <path d="M8 21v-6h8v6" />
      <path d="M6 10h12" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-7 w-7"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="3" />
      <path d="M3 21c0-4 2-6 5-6s5 2 5 6" />
      <path d="M12 21c0-3 2-5 5-5s4 2 4 5" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-7 w-7"
    >
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  )
}

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-7 w-7"
    >
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}