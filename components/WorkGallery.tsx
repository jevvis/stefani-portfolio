'use client'

import { useState } from 'react'
import TypewriterTitle from './TypewriterTitle'

const internships = [
  {
    number: '01',
    role: 'Production Intern',
    institution: 'CV. Pangan Berkah Sentosa (PBS)',
    location: 'Jawa Timur, Indonesia',
    period: 'Februari — Maret 2025',
    subtitle: 'Manufaktur Industri Pangan — Cheese Dumpling Production Line 4',
    description:
      'Mengamati dan menganalisis seluruh alur proses produksi Cheese Dumpling pada Line 4, mulai dari penyiapan bahan baku, pencampuran adonan, proses pencetakan, hingga tahap pengemasan. Memastikan setiap tahapan berjalan sesuai standar efisiensi lini manufaktur.',
    tags: ['Line 4 Production', 'Process Observation', 'Raw Material Prep', 'Food Manufacturing', 'Packaging Process', 'SOP Compliance'],
    images: ['/projects/production.jpg', '/projects/biofarma-industry.jpg', '/projects/pharmacy-qc.jpg'],
    align: 'right' as const,
  },
  {
    number: '02',
    role: 'Quality Risk & FMEA Analysis',
    institution: 'CV. Pangan Berkah Sentosa (PBS)',
    location: 'Jawa Timur, Indonesia',
    period: 'Februari — Maret 2025',
    subtitle: 'Identifikasi Defect Mutu & Failure Mode and Effect Analysis (FMEA)',
    description:
      'Mengidentifikasi dan mengkaji empat jenis cacat kualitas utama: bentuk tidak teratur (irregular shapes), lubang (holes), kebocoran (leakage), dan produk pecah (broken products). Melakukan analisis risiko kualitas menggunakan metode FMEA dengan menentukan failure modes, akar penyebab, dampak kecacatan, serta prioritas risiko (RPN).',
    tags: ['FMEA Analysis', 'Defect Identification', 'Leakage & Hole Reduction', 'Risk Priority Number (RPN)', 'Root Cause Analysis', 'Quality Assurance'],
    images: ['/projects/pharmacy-qc.jpg', '/projects/rfid-system.jpg', '/projects/production.jpg'],
    align: 'left' as const,
  },
  {
    number: '03',
    role: 'Yield & Efficiency Evaluation',
    institution: 'CV. Pangan Berkah Sentosa (PBS)',
    location: 'Jawa Timur, Indonesia',
    period: 'Februari — Maret 2025',
    subtitle: 'Monitoring Yield, Reject Produk & Rekomendasi Continuous Improvement',
    description:
      'Memantau dan merekapitulasi data yield produksi, reject produk, serta sisa adonan secara sistematis sebagai dasar evaluasi efisiensi lini produksi. Berkoordinasi aktif dengan tim Produksi dan Quality Control untuk menganalisis faktor penyebab cacat dan menyusun rekomendasi perbaikan kualitas produk berkelanjutan.',
    tags: ['Yield Monitoring', 'Reject Rate Reduction', 'Dough Scrap Analysis', 'Production Efficiency', 'Team Coordination', 'Continuous Improvement'],
    images: ['/projects/biofarma-industry.jpg', '/projects/production.jpg', '/projects/docutrack.jpg'],
    align: 'right' as const,
  },
]

function InternshipImageStack({
  images,
  title,
  align,
}: {
  images: string[]
  title: string
  align: 'left' | 'right'
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  // Direction of the stacked peek:
  // If align is right: peek to top-left (-x, -y)
  // If align is left: peek to top-right (+x, -y)
  const isRight = align === 'right'
  const xSign = isRight ? -1 : 1
  const rotSign = isRight ? -1 : 1

  return (
    <div className="w-full relative pt-7 pb-3 px-3 select-none">
      <div
        className="relative w-full aspect-video cursor-pointer group"
        onClick={handleNext}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((img, idx) => {
          const offset = (idx - activeIndex + images.length) % images.length

          let transformStyle = ''
          let zIndex = 0
          let opacity = 0
          let filter = 'brightness(1)'

          if (offset === 0) {
            transformStyle = 'translate(0px, 0px) rotate(0deg) scale(1)'
            zIndex = 20
            opacity = 1
            filter = 'brightness(1)'
          } else if (offset === 1) {
            const tx = isHovered ? xSign * 18 : xSign * 12
            const ty = isHovered ? -18 : -12
            const rot = isHovered ? rotSign * 4 : rotSign * 2.5
            transformStyle = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0.97)`
            zIndex = 10
            opacity = 0.88
            filter = isHovered ? 'brightness(0.92)' : 'brightness(0.82)'
          } else if (offset === 2) {
            const tx = isHovered ? xSign * 32 : xSign * 22
            const ty = isHovered ? -32 : -22
            const rot = isHovered ? rotSign * 7 : rotSign * 4.5
            transformStyle = `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0.94)`
            zIndex = 5
            opacity = 0.68
            filter = isHovered ? 'brightness(0.82)' : 'brightness(0.68)'
          }

          if (offset > 2) return null

          return (
            <div
              key={idx}
              className="absolute inset-0 rounded-3xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xl transition-all duration-500 ease-out"
              style={{
                transform: transformStyle,
                zIndex,
                opacity,
                filter,
              }}
            >
              <img
                src={img}
                alt={`${title} - foto ${idx + 1}`}
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          )
        })}

        {/* Floating pill badge: Image indicator + click hint */}
        <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
          <div className="bg-black/65 backdrop-blur-md text-white/95 px-3.5 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-2 shadow-xl border border-white/15 group-hover:bg-black/85 transition-all">
            <span className="font-sans font-medium">
              {activeIndex + 1} / {images.length}
            </span>
            <span className="opacity-40">•</span>
            <span className="text-[10px] tracking-wider uppercase text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-sans">
              Klik Foto
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </div>
        </div>

        {/* Thumbnail Dots on bottom left */}
        <div className="absolute bottom-4 left-4 z-30 flex items-center gap-1.5 pointer-events-auto">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 bg-emerald-500 shadow-md'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Lihat foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WorkGallery() {
  return (
    <section id="work" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold font-sans">
              PENGALAMAN INDUSTRI & MANUFAKTUR
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight font-sans">
              <TypewriterTitle text="Pengalaman Magang" />
            </h2>
            <p className="text-[var(--muted)] text-sm md:text-base max-w-xl font-sans">
              Pengalaman magang di industri manufaktur pangan, berfokus pada analisis proses produksi Line 4, Failure Mode and Effect Analysis (FMEA), yield & reject monitoring, serta peningkatan kualitas berkelanjutan.
            </p>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] text-xs font-semibold tracking-wider hover:opacity-90 transition-opacity shrink-0 w-max font-sans"
          >
            LIHAT DETAIL PORTOFOLIO →
          </a>
        </div>

        {/* Alternating Story Cards with Animated Stacked Photos */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {internships.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                item.align === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col font-sans">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-sans font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {item.number}
                  </span>
                  <span className="text-[11px] tracking-widest text-[var(--muted)] uppercase font-sans font-semibold">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1 font-sans">
                  {item.institution}
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-emerald-500 mb-2 font-sans">
                  {item.role}
                </h4>
                <p className="text-xs md:text-sm font-semibold text-[var(--muted)] mb-5 font-sans">
                  {item.subtitle} • <span className="opacity-75">{item.location}</span>
                </p>

                <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 text-justify font-sans">
                  {item.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-3 py-1.5 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] opacity-90 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stacked Animated Photos */}
              <div className="w-full lg:w-1/2">
                <InternshipImageStack
                  images={item.images}
                  title={item.institution}
                  align={item.align}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
