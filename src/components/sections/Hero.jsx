import { hero } from '../../data/content'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden bg-forest-deep text-warm-cream"
    >
      {/* =========================================
          BACKGROUND FOTO FULL
          ========================================= */}
      <div className="absolute inset-0">
        <img
          src={hero.image.src}
          alt=""
          className="h-full w-full scale-[1.02] object-cover"
          aria-hidden="true"
        />

        {/* Overlay agar background lebih adem dan tulisan terbaca */}
        <div className="absolute inset-0 bg-forest-deep/35" />

        {/* Efek hangat dari atas */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-cream/15 via-transparent to-forest-deep/55" />

        {/* Blur sangat tipis supaya tidak terlalu tajam */}
        <div className="absolute inset-0 backdrop-blur-[1.5px]" />
      </div>

      {/* Cahaya lembut */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-gold/15 blur-[120px]"
        aria-hidden="true"
      />

      {/* =========================================
          CONTENT
          ========================================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-36 pt-28 sm:px-6 lg:px-8">
        {/* Perspective adalah kunci efek 3D */}
        <div className="w-full [perspective:1600px]">
          {/* =====================================
              GLASS CONTENT CARD — 3D
              ===================================== */}
          <div
            className="
              group
              w-full
              max-w-[600px]
              rounded-[2rem]
              border border-white/25
              bg-forest-deep/30
              p-7
              shadow-[0_25px_80px_rgba(15,40,28,0.30)]
              backdrop-blur-xl
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              [transform-style:preserve-3d]
              [transform:rotateX(2deg)_rotateY(-3deg)]
              hover:[transform:translateY(-10px)_rotateX(0deg)_rotateY(1deg)]
              hover:shadow-[0_45px_100px_rgba(10,30,20,0.42)]
              sm:p-10
              lg:p-14
            "
          >
            {/* Kilau kaca */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[2rem]
                bg-gradient-to-br
                from-white/10
                via-transparent
                to-transparent
                opacity-80
              "
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Location / Eyebrow */}
              <div className="mb-8 flex items-center gap-4 transition-transform duration-700 group-hover:[transform:translateZ(25px)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/10 shadow-lg">
                  <span className="text-lg text-gold">✦</span>
                </div>

                <div>
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-cream/75">
                    Sriharjo · Imogiri · Bantul
                  </p>
                  <div className="mt-2 h-px w-12 bg-gold/60" />
                </div>
              </div>

              {/* Sentuhan Jawa */}
              <p className="mb-2 font-display text-2xl italic text-gold/90 transition-transform duration-700 group-hover:[transform:translateZ(35px)] sm:text-3xl">
                Sugeng Rawuh
              </p>

              {/* Judul */}
              <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] text-warm-cream transition-transform duration-700 group-hover:[transform:translateZ(45px)] sm:text-6xl lg:text-7xl">
                Padukuhan
                <br />
                Ngrancah
              </h1>

              {/* Garis aksen */}
              <div className="my-8 h-px w-20 bg-gold/65 transition-transform duration-700 group-hover:[transform:translateZ(30px)]" />

              {/* Deskripsi */}
              <p className="max-w-md font-body text-base leading-8 text-warm-cream/80 transition-transform duration-700 group-hover:[transform:translateZ(25px)] sm:text-lg">
                {hero.subtitle}
              </p>

              {/* Tombol */}
              <div className="mt-9 flex flex-wrap gap-3 transition-transform duration-700 group-hover:[transform:translateZ(40px)]">
                <Button
                  href={hero.ctaPrimary.href}
                  variant="gold"
                  className="
                    !border-0
                    !bg-forest-deep/90
                    !text-warm-cream
                    shadow-lg
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:!bg-forest-deep
                  "
                >
                  <span className="mr-2">⌁</span>
                  {hero.ctaPrimary.label}
                </Button>

                <Button
                  href={hero.ctaSecondary.href}
                  variant="secondary"
                  className="
                    !border-warm-cream/45
                    !bg-warm-cream/10
                    !text-warm-cream
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:!bg-warm-cream/20
                  "
                >
                  {hero.ctaSecondary.label}
                </Button>
              </div>
            </div>
          </div>

          {/* =====================================
              LOCATION BADGE — FLOATING 3D
              ===================================== */}
          <div
            className="
              mt-5
              flex
              w-full
              max-w-[340px]
              items-center
              gap-4
              rounded-2xl
              border border-white/20
              bg-forest-deep/50
              px-5
              py-4
              shadow-[0_15px_40px_rgba(15,40,28,0.25)]
              backdrop-blur-xl
              transition-all
              duration-500
              [transform-style:preserve-3d]
              hover:-translate-y-2
              hover:shadow-[0_25px_55px_rgba(10,30,20,0.4)]
              lg:absolute
              lg:bottom-40
              lg:right-8
              lg:mt-0
              lg:[transform:rotateY(-5deg)]
              lg:hover:[transform:translateY(-8px)_rotateY(0deg)]
            "
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-warm-cream/25 bg-warm-cream/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 text-warm-cream"
              >
                <path
                  d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <div>
              <p className="font-display text-xl text-warm-cream">
                Padukuhan Ngrancah
              </p>
              <p className="mt-1 font-body text-xs text-warm-cream/65">
                Sriharjo, Imogiri, Bantul
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM VALUES — 3D GLASS
          ========================================= */}
      <div className="relative z-20 mx-auto -mt-28 w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 [perspective:1400px]">
        <div
          className="
            grid
            overflow-hidden
            rounded-[1.75rem]
            border border-white/20
            bg-forest-deep/55
            shadow-[0_20px_60px_rgba(10,30,20,0.30)]
            backdrop-blur-xl
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            [transform-style:preserve-3d]
            [transform:rotateX(2deg)]
            hover:[transform:translateY(-6px)_rotateX(0deg)]
            hover:shadow-[0_35px_80px_rgba(10,30,20,0.4)]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <ValueItem
            icon="♧"
            title="Guyub Rukun"
            description="Kebersamaan adalah kekuatan kami"
          />

          <ValueItem
            icon="❋"
            title="Lestari"
            description="Menjaga alam, menjaga kehidupan"
          />

          <ValueItem
            icon="⌂"
            title="Berbudaya"
            description="Melestarikan tradisi dan identitas"
          />

          <ValueItem
            icon="⌁"
            title="Berkarya"
            description="Membangun masa depan bersama"
          />
        </div>
      </div>

      {/* Fade bagian bawah */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-forest-deep/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}

function ValueItem({ icon, title, description }) {
  return (
    <div
      className="
        relative
        flex
        items-center
        gap-4
        px-6
        py-5
        transition-all
        duration-500
        hover:bg-white/5
        hover:[transform:translateZ(20px)]
        sm:px-7
      "
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center text-2xl text-gold/90">
        {icon}
      </span>

      <div>
        <p className="font-display text-lg text-warm-cream">
          {title}
        </p>
        <p className="mt-1 font-body text-xs leading-5 text-warm-cream/65">
          {description}
        </p>
      </div>
    </div>
  )
}