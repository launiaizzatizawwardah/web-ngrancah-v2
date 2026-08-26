import { useState, useEffect } from 'react'
import { navLinks, siteInfo } from '../../data/content'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  /* =====================================================
     Detect scroll
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* =====================================================
     Lock page scroll when mobile menu is open
  ===================================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  /* =====================================================
     Close menu when navigation is clicked
  ===================================================== */

  const handleNavClick = () => {
    setIsOpen(false)
  }

  /* =====================================================
     Close menu when screen becomes desktop
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* ===================================================
          HEADER
      =================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${
            isScrolled || isOpen
              ? 'bg-warm-cream shadow-3d-sm'
              : 'bg-warm-cream/90 backdrop-blur-md'
          }
        `}
      >
        <nav
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
          aria-label="Navigasi utama"
        >
          <div
            className="
              flex
              h-16
              items-center
              justify-between
              md:h-20
            "
          >

            {/* =================================================
                LOGO
            ================================================= */}

            <a
              href="#beranda"
              onClick={handleNavClick}
              className="
                group
                flex
                min-w-0
                flex-col
                rounded-lg
                px-1
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold
              "
            >
              <span
                className="
                  font-display
                  text-lg
                  font-semibold
                  leading-tight
                  text-forest-deep
                  transition-colors
                  duration-200
                  group-hover:text-forest
                  sm:text-xl
                "
              >
                {siteInfo.name}
              </span>

              <span
                className="
                  hidden
                  font-body
                  text-xs
                  leading-tight
                  text-brown-dark/60
                  sm:block
                "
              >
                {siteInfo.location}
              </span>
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <ul
              className="
                hidden
                items-center
                gap-1
                lg:flex
              "
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      relative
                      block
                      rounded-lg
                      px-3
                      py-2
                      font-body
                      text-sm
                      font-medium
                      text-brown-dark/80
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-cream/70
                      hover:text-forest-deep
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-gold
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                relative
                z-[70]
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-forest-deep/10
                bg-warm-cream
                transition-all
                duration-300
                hover:bg-cream
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-gold
                lg:hidden
              "
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            >
              <span className="sr-only">
                {isOpen ? 'Tutup menu' : 'Buka menu'}
              </span>

              <div className="relative h-5 w-5">

                {/* Top line */}
                <span
                  className={`
                    absolute
                    left-0
                    top-[4px]
                    block
                    h-[2px]
                    w-5
                    rounded-full
                    bg-forest-deep
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? 'top-[9px] rotate-45'
                        : ''
                    }
                  `}
                />

                {/* Middle line */}
                <span
                  className={`
                    absolute
                    left-0
                    top-[9px]
                    block
                    h-[2px]
                    w-5
                    rounded-full
                    bg-forest-deep
                    transition-all
                    duration-200
                    ${
                      isOpen
                        ? 'scale-x-0 opacity-0'
                        : 'scale-x-100 opacity-100'
                    }
                  `}
                />

                {/* Bottom line */}
                <span
                  className={`
                    absolute
                    left-0
                    top-[14px]
                    block
                    h-[2px]
                    w-5
                    rounded-full
                    bg-forest-deep
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? 'top-[9px] -rotate-45'
                        : ''
                    }
                  `}
                />

              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU BACKDROP
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[55]
          bg-forest-deep/15
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          lg:hidden
          ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE MENU PANEL
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={`
          fixed
          left-0
          right-0
          top-16
          z-[60]
          overflow-hidden
          border-t
          border-forest-deep/10
          bg-warm-cream
          shadow-3d-lg
          transition-all
          duration-300
          md:top-20
          lg:hidden
          ${
            isOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-3 opacity-0'
          }
        `}
      >
        <div
          className="
            mx-auto
            max-h-[calc(100dvh-4rem)]
            w-full
            max-w-7xl
            overflow-y-auto
            px-5
            py-5
            md:max-h-[calc(100dvh-5rem)]
            md:px-8
            md:py-7
          "
        >

          {/* Small decorative heading */}

          <div
            className="
              mb-4
              flex
              items-center
              gap-3
              px-1
            "
          >
            <span
              className="
                h-px
                w-8
                bg-gold
              "
            />

            <span
              className="
                font-body
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-forest-deep/60
              "
            >
              Jelajahi Ngrancah
            </span>
          </div>

          {/* Navigation */}

          <ul className="flex flex-col gap-1">

            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: isOpen
                    ? `${index * 35}ms`
                    : '0ms',
                }}
                className={`
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0'
                  }
                `}
              >
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    font-body
                    text-[15px]
                    font-medium
                    text-brown-dark
                    transition-all
                    duration-200
                    hover:bg-cream
                    hover:text-forest-deep
                    active:scale-[0.98]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-gold
                  "
                >
                  <span>
                    {link.label}
                  </span>

                  <span
                    className="
                      translate-x-0
                      text-forest-deep/40
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      group-hover:text-forest-deep
                    "
                  >
                    →
                  </span>
                </a>
              </li>
            ))}

          </ul>

          {/* Bottom location */}

          <div
            className="
              mt-5
              border-t
              border-forest-deep/10
              px-1
              pt-4
            "
          >
            <p
              className="
                font-body
                text-xs
                text-brown-dark/50
              "
            >
              {siteInfo.location}
            </p>
          </div>

        </div>
      </div>
    </>
  )
}