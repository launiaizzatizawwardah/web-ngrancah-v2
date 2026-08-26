export default function Card3D({ children, className = '', hover = true }) {
  return (
    <div
      className={`card-3d rounded-2xl bg-warm-cream border border-beige/40 ${
        hover ? 'card-3d-hover' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
