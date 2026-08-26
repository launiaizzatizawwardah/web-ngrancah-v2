const variants = {
  primary:
    'bg-forest-deep text-warm-cream shadow-3d-md hover:shadow-3d-hover hover:-translate-y-1 active:translate-y-0 active:shadow-3d-sm',
  secondary:
    'bg-transparent text-forest-deep border-2 border-forest-deep hover:bg-forest-deep hover:text-warm-cream hover:-translate-y-1 hover:shadow-3d-md',
  gold: 'bg-gold text-brown-dark shadow-gold-glow hover:shadow-3d-hover hover:-translate-y-1 active:translate-y-0',
}

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream'

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
