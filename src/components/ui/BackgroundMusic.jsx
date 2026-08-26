import { useEffect, useRef, useState } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Dengarkan perintah untuk memutar musik dari tombol Hero
  useEffect(() => {
    const handlePlayMusic = async () => {
      if (!audioRef.current) return

      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Musik tidak dapat diputar:', error)
      }
    }

    window.addEventListener('play-ngrancah-music', handlePlayMusic)

    return () => {
      window.removeEventListener('play-ngrancah-music', handlePlayMusic)
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error('Musik tidak dapat diputar:', error)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/gendingjawa.mp3"
        loop
        preload="auto"
      />

      {/* Tombol kontrol musik */}
      <button
        type="button"
        onClick={toggleMusic}
        className="
          fixed bottom-5 right-5 z-[60]
          flex items-center gap-2
          rounded-full
          border border-gold/40
          bg-forest-deep/80
          px-4 py-3
          text-warm-cream
          shadow-[0_10px_30px_rgba(15,40,28,0.25)]
          backdrop-blur-xl
          transition-all duration-300
          hover:scale-105
          hover:bg-forest-deep
          active:scale-95
        "
        aria-label={isPlaying ? 'Matikan musik' : 'Putar musik'}
      >
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 text-base ${
            isPlaying ? 'animate-pulse' : ''
          }`}
        >
          {isPlaying ? '♫' : '♪'}
        </span>

        <span className="font-body text-xs tracking-wide">
          {isPlaying ? 'Musik Aktif' : 'Putar Musik'}
        </span>
      </button>
    </>
  )
}