'use client'

import { useState, useRef, MouseEvent } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Smooth subtle 3D tilt (-6 to +6 degrees)
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6

    setRotate({ x: rotateX, y: rotateY })
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Marquee text behind profile */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className={`flex w-max whitespace-nowrap animate-marquee transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-100'}`}>
          <div className="flex shrink-0">
            <span className="text-outline font-oswald text-[clamp(80px,20vw,350px)] font-bold tracking-normal pr-8 md:pr-16 select-none">
              STEFANI AURIA PUTRI WINATA
            </span>
            <span className="text-outline font-oswald text-[clamp(80px,20vw,350px)] font-bold tracking-normal pr-8 md:pr-16 select-none">
              STEFANI AURIA PUTRI WINATA
            </span>
          </div>
          <div className="flex shrink-0">
            <span className="text-outline font-oswald text-[clamp(80px,20vw,350px)] font-bold tracking-normal pr-8 md:pr-16 select-none">
              STEFANI AURIA PUTRI WINATA
            </span>
            <span className="text-outline font-oswald text-[clamp(80px,20vw,350px)] font-bold tracking-normal pr-8 md:pr-16 select-none">
              STEFANI AURIA PUTRI WINATA
            </span>
          </div>
        </div>
      </div>

      {/* Profile photo container with 3D Tilt & Interactive Effects */}
      <div className="relative z-10 flex items-end justify-center h-full pt-20">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-[340px] sm:w-[440px] md:w-[560px] lg:w-[680px] xl:w-[760px] max-w-[92vw] cursor-pointer perspective-[1200px] select-none"
        >
          {/* Ambient Aura / Glow Backdrop */}
          <div
            className={`absolute inset-0 pointer-events-none rounded-full blur-3xl transition-all duration-700 ease-out ${
              isHovered ? 'opacity-90 scale-110' : 'opacity-0 scale-90'
            }`}
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.4), rgba(14, 165, 233, 0.25) 45%, transparent 70%)`,
            }}
          />

          {/* Left Floating Achievement Tag (Pops out on hover) */}
          <div
            className={`absolute -left-2 sm:-left-4 lg:-left-8 top-[36%] z-30 pointer-events-none transition-all duration-500 ease-out ${
              isHovered
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-90'
            }`}
            style={{
              transform: isHovered
                ? `translate3d(0, 0, 30px) rotate(-3deg)`
                : 'translate3d(0, 20px, 0) scale(0.9)',
            }}
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/75 dark:bg-zinc-900/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34d399]" />
              <div className="text-left font-sans">
                <p className="text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap">
                  {t('hero.badge.major')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Floating Medal Tag (Pops out on hover) */}
          <div
            className={`absolute -right-2 sm:-right-4 lg:-right-8 top-[48%] z-30 pointer-events-none transition-all duration-500 delay-75 ease-out ${
              isHovered
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-90'
            }`}
            style={{
              transform: isHovered
                ? `translate3d(0, 0, 30px) rotate(3deg)`
                : 'translate3d(0, 20px, 0) scale(0.9)',
            }}
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/75 dark:bg-zinc-900/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_#fbbf24]" />
              <div className="text-left font-sans">
                <p className="text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap">
                  {t('hero.badge.medal')}
                </p>
                <p className="text-[10px] text-amber-400 font-semibold">
                  {t('hero.badge.event')}
                </p>
              </div>
            </div>
          </div>

          {/* Main Cutout Photo with 3D Parallax Tilt */}
          <div
            className="relative w-full will-change-transform"
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.035, 1.035, 1.035)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
              transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
          >
            <img
              src="/profile.png"
              alt="Stefani Auria Putri Winata"
              className={`w-full h-auto max-h-[82vh] object-contain transition-all duration-500 ${
                isHovered ? 'brightness-105 contrast-105' : 'brightness-100'
              }`}
              style={{
                filter: isHovered
                  ? 'drop-shadow(0 20px 45px rgba(16, 185, 129, 0.3)) drop-shadow(0 12px 30px rgba(0, 0, 0, 0.35))'
                  : 'drop-shadow(0 12px 30px rgba(0, 0, 0, 0.08))',
              }}
            />
          </div>

          {/* Interactive name pill at bottom */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-all duration-400 ${
              isHovered
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-3 scale-95'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/90 dark:bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold tracking-wider shadow-xl border border-white/20 whitespace-nowrap">
              <span>STEFANI AURIA PUTRI WINATA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute right-2 md:right-6 bottom-10 z-20 hidden sm:flex items-center gap-2">
        <span
          className="text-[10px] tracking-[0.3em] font-medium text-[var(--muted)] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          {t('hero.scroll')}
        </span>
      </div>
    </section>
  )
}
