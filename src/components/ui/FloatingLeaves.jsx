export default function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute top-[12%] left-[5%] w-8 h-8 text-sage/30 animate-float"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 8C8 10 5.9 16.2 4 20c2.1-1.5 4.5-2.5 7-2.5 2.5 0 4.9 1 7 2.5C16.1 16.2 14 10 17 8z" />
      </svg>
      <svg
        className="absolute top-[25%] right-[8%] w-6 h-6 text-forest/20 animate-float-slow"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 8C8 10 5.9 16.2 4 20c2.1-1.5 4.5-2.5 7-2.5 2.5 0 4.9 1 7 2.5C16.1 16.2 14 10 17 8z" />
      </svg>
      <svg
        className="absolute bottom-[30%] left-[10%] w-10 h-10 text-gold/20 animate-float-delayed"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 8C8 10 5.9 16.2 4 20c2.1-1.5 4.5-2.5 7-2.5 2.5 0 4.9 1 7 2.5C16.1 16.2 14 10 17 8z" />
      </svg>
      <svg
        className="absolute bottom-[15%] right-[12%] w-7 h-7 text-sage/25 animate-float"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 8C8 10 5.9 16.2 4 20c2.1-1.5 4.5-2.5 7-2.5 2.5 0 4.9 1 7 2.5C16.1 16.2 14 10 17 8z" />
      </svg>
    </div>
  )
}
