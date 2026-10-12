'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const mainLinks = [
  { label: 'TENTANG SAYA', href: '/#about' },
  { label: 'PENDIDIKAN', href: '/#education' },
  { label: 'ORGANISASI', href: '/#trainings' },
  { label: 'MAGANG', href: '/#work' },
  { label: 'SERTIFIKASI', href: '/#awards' },
  { label: 'TEKNIS', href: '/#skills' },
  { label: 'PERSONAL & SOFTWARE', href: '/#personal-skills' },
]

const projectLinks = [
  { label: 'TECHNICAL', href: '#technical' },
  { label: 'DIGITAL', href: '#digital' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isProjectSection = pathname?.startsWith('/projects')
  const [activeProjectTab, setActiveProjectTab] = useState('technical')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isProjectSection) return

    const handleScroll = () => {
      const digitalEl = document.getElementById('digital')
      if (digitalEl && window.scrollY >= digitalEl.offsetTop - 100) {
        setActiveProjectTab('digital')
      } else {
        setActiveProjectTab('technical')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isProjectSection])

  const currentLinks = isProjectSection ? projectLinks : mainLinks

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isProjectSection) return

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '')
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        e.preventDefault()
        const navOffset = 85
        const elementPos = targetEl.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPos - navOffset,
          behavior: 'smooth',
        })
        window.history.pushState(null, '', `/#${targetId}`)
        if (mobileMenuOpen) setMobileMenuOpen(false)
      }
    }
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl">
      <nav className="flex items-center justify-between px-3.5 sm:px-5 py-2 rounded-full bg-[var(--background)]/85 backdrop-blur-xl border border-[var(--card-border)] shadow-lg transition-all">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 shrink-0 pr-3 lg:pr-5 group"
          onClick={(e) => {
            if (!isProjectSection && pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              window.history.pushState(null, '', '/')
            }
          }}
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[var(--foreground)] flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-[var(--background)] font-serif text-sm italic font-bold">S</span>
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-wider hidden sm:block">STEFANI</span>
        </a>

        {/* Desktop Links (All uniform) */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-1.5 xl:gap-3 2xl:gap-4 px-1 xl:px-3">
          {currentLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`whitespace-nowrap text-[10.5px] xl:text-[11.5px] tracking-wider font-semibold px-2 py-1 rounded-full transition-all hover:text-[var(--foreground)] ${
                isProjectSection && link.label.toLowerCase() === activeProjectTab
                  ? 'text-[var(--foreground)] bg-[var(--foreground)]/10'
                  : 'text-[var(--muted)] hover:bg-[var(--foreground)]/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0 pl-3 lg:pr-1">
          <ThemeToggle />
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="whitespace-nowrap px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity shadow-sm"
          >
            Hubungi Saya
          </a>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-1 p-1.5 rounded-lg hover:bg-[var(--card-border)]/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-3 sm:p-4 rounded-2xl bg-[var(--background)]/95 backdrop-blur-xl border border-[var(--card-border)] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {currentLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2 rounded-xl text-xs tracking-wider font-semibold text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
