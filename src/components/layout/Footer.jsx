import { siteInfo, navLinks, footer } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-semibold text-warm-cream mb-3">
              {siteInfo.name}
            </h3>
            <p className="font-body text-sm text-cream/80 leading-relaxed mb-4">
              {siteInfo.fullLocation}
            </p>
            <p className="font-body text-sm text-cream/70 leading-relaxed">
              {siteInfo.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold text-warm-cream mb-4">Navigasi</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/70 hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-warm-cream mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 font-body text-sm text-cream/70">
              <li>
              </li>
              <li>
               
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {Object.entries(siteInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-forest/50 flex items-center justify-center text-cream/80 hover:bg-gold hover:text-brown-dark transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold capitalize text-xs font-body"
                  aria-label={platform}
                >
                  {platform[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="font-body text-sm text-cream/60">{footer.copyright}</p>
          <p className="font-body text-xs text-cream/40 mt-1">{footer.credits}</p>
        </div>
      </div>
    </footer>
  )
}
