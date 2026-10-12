'use client'

const techColors: Record<string, string> = {
  FMEA: 'bg-emerald-600',
  'Quality Control': 'bg-blue-600',
  Yield: 'bg-cyan-600',
  'Root Cause': 'bg-indigo-600',
  'Process Improvement': 'bg-purple-600',
  'Supply Chain': 'bg-rose-600',
  PPC: 'bg-amber-600',
  'AutoCAD': 'bg-red-600',
  SketchUp: 'bg-teal-600',
  Python: 'bg-green-700',
  Logistics: 'bg-orange-500',
  Administration: 'bg-violet-600',
  Research: 'bg-pink-600',
  Documentation: 'bg-blue-500',
}

const projects = [
  {
    number: '01',
    title: 'Analisis FMEA — Cheese Dumpling Production Line 4',
    description: 'Mengidentifikasi mode kegagalan proses, menentukan akar penyebab dan dampak kegagalan, serta menghitung Risk Priority Number (RPN) untuk memitigasi risiko cacat produk.',
    framework: 'QUALITY CONTROL — CV. PANGAN BERKAH SENTOSA',
    techStack: ['FMEA', 'Quality Control', 'Root Cause'],
    link: '#',
  },
  {
    number: '02',
    title: 'Monitoring Yield & Reject Produk Manufaktur',
    description: 'Melakukan pemantauan dan pencatatan harian data yield produksi, scrap sisa adonan, dan tingkat reject sebagai dasar evaluasi efisiensi lini produksi.',
    framework: 'MANUFAKTUR & PRODUKSI — CV. PANGAN BERKAH SENTOSA',
    techStack: ['Yield', 'Quality Control', 'PPC'],
    link: '#',
  },
  {
    number: '03',
    title: 'Identifikasi Empat Kategori Cacat Kualitas Produk',
    description: 'Analisis kecacatan mutu produk meliputi irregular shapes, lubang (holes), kebocoran adonan (leakage), dan produk pecah untuk perbaikan standar produksi.',
    framework: 'QUALITY CONTROL — CV. PANGAN BERKAH SENTOSA',
    techStack: ['Quality Control', 'FMEA', 'Process Improvement'],
    link: '#',
  },
  {
    number: '04',
    title: 'Rekomendasi Peningkatan Mutu Proses Produksi',
    description: 'Berkolaborasi aktif dengan tim Produksi dan Quality Control untuk menganalisis faktor penyebab defect dan merumuskan langkah continuous improvement.',
    framework: 'PROCESS IMPROVEMENT — CV. PANGAN BERKAH SENTOSA',
    techStack: ['Process Improvement', 'Quality Control', 'Root Cause'],
    link: '#',
  },
  {
    number: '05',
    title: 'Riset Inovasi Sains Lingkungan (Gold Medal GYIIF 2025)',
    description: 'Karya inovasi dan penelitian bidang Environmental Science yang meraih penghargaan Gold Medal pada Global Youth Invention and Innovation Fair oleh IYSA.',
    framework: 'KOMPETISI RISET INTERNASIONAL — IYSA',
    techStack: ['Research', 'Documentation'],
    link: '#',
  },
  {
    number: '06',
    title: 'Riset Rekayasa Teknik Industri (Gold Medal ISPC 2025)',
    description: 'Pengembangan proyek inovasi kategori Engineering yang berhasil meraih medali emas pada ajang Indonesia Science Project Competition 2025.',
    framework: 'KOMPETISI RISET INTERNASIONAL — IYSA',
    techStack: ['Research', 'Process Improvement'],
    link: '#',
  },
  {
    number: '07',
    title: 'Riset Solusi Sains Lingkungan (Gold Medal ISPC 2025)',
    description: 'Penelitian inovatif kategori Environmental Science yang berhasil meraih penghargaan Gold Medal pada Indonesia Science Project Competition 2025.',
    framework: 'KOMPETISI RISET INTERNASIONAL — IYSA',
    techStack: ['Research', 'Documentation'],
    link: '#',
  },
  {
    number: '08',
    title: 'Koordinasi Operasional & Teknis Acara ICLASS 2024',
    description: 'Mendukung persiapan, manajemen timeline, dan pemenuhan kebutuhan teknis divisi acara bersama Himpunan Mahasiswa Teknik Industri Universitas Brawijaya.',
    framework: 'KEPANITIAAN MAHASISWA — HMTI UNIVERSITAS BRAWIJAYA',
    techStack: ['Administration', 'Documentation'],
    link: '#',
  },
  {
    number: '09',
    title: 'Kesekretariatan Konferensi Internasional ICOEMIS 2024',
    description: 'Mendukung administrasi, korespondensi, dan dokumentasi pada International Conference on Engineering and Management in Industrial System.',
    framework: 'KONFERENSI INTERNASIONAL — UNIVERSITAS BRAWIJAYA',
    techStack: ['Administration', 'Documentation'],
    link: '#',
  },
  {
    number: '10',
    title: 'Kesekretariatan & Pelaksanaan Acara INVENT 2024',
    description: 'Menjalankan tugas administratif kesekretariatan dan koordinasi tim selama rangkaian kegiatan Industrial Event (INVENT) oleh HMTI Universitas Brawijaya.',
    framework: 'KEPANITIAAN MAHASISWA — HMTI UNIVERSITAS BRAWIJAYA',
    techStack: ['Administration', 'Documentation'],
    link: '#',
  },
  {
    number: '11',
    title: 'Manajemen Logistik & Pengadaan Sarana ENC 2024',
    description: 'Mengelola pengadaan perlengkapan, inventaris barang, dan distribusi logistik operasional kegiatan Keluarga Besar Mahasiswa Fakultas Teknik Universitas Brawijaya.',
    framework: 'LOGISTIK & OPERASIONAL — KBM FT UNIVERSITAS BRAWIJAYA',
    techStack: ['Logistics', 'Supply Chain'],
    link: '#',
  },
  {
    number: '12',
    title: 'Perancangan Tata Letak Fasilitas & CAD Modeling',
    description: 'Pemodelan tata letak fasilitas pabrik (plant layout), gambar teknik manufaktur 2D/3D menggunakan AutoCAD dan SketchUp untuk optimasi alur material.',
    framework: 'ENGINEERING DESIGN — TEKNIK INDUSTRI UB',
    techStack: ['AutoCAD', 'SketchUp', 'Process Improvement'],
    link: '#',
  },
]

export default function ProjectList() {
  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PORTOFOLIO TEKNIK INDUSTRI & PROYEK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman Industri & Riset</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Daftar kegiatan teknik industri mencakup analisis proses manufaktur, Quality Control FMEA, yield monitoring, kompetisi riset sains internasional, dan manajemen kepanitiaan.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColors[tech] || 'bg-gray-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
