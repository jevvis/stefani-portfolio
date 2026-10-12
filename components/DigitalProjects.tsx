'use client'

const industrialProjects = [
  {
    number: '01',
    title: 'Desain Layout Fasilitas & Gambar Teknik (CAD)',
    description: 'Pemodelan tata letak fasilitas pabrik 2D/3D menggunakan AutoCAD dan SketchUp untuk memvisualisasikan alur material, stasiun kerja, dan optimalisasi ruang kerja manufaktur.',
  },
  {
    number: '02',
    title: 'Otomasi Analisis Data Spreadsheet (MS Excel Advanced)',
    description: 'Penyusunan dashboard kalkulasi yield, scrap rate, identifikasi defect, dan formulasi FMEA berbasis rumus logika, pivot table, dan grafik analitis dinamis.',
  },
  {
    number: '03',
    title: 'Penyusunan SOP & Dokumentasi Proses Manufaktur',
    description: 'Standarisasi alur kerja operasional lini produksi, instruksi kerja stasiun kerja (work instruction), dan form pencatatan mutu harian untuk menjaga konsistensi mutu produk.',
  },
  {
    number: '04',
    title: 'Administrasi & Manajemen Acara Konferensi (ICOEMIS & ICLASS)',
    description: 'Pengelolaan arsip administrasi, korespondensi naskah prosiding konferensi internasional, dan penyusunan timeline pelaksanaan acara secara terstruktur.',
  },
  {
    number: '05',
    title: 'Pengendalian Logistik & Inventory Operasional',
    description: 'Manajemen persediaan logistik acara, alur penerimaan dan pengeluaran barang, serta pengendalian inventaris untuk memastikan kesiapan operasional tepat waktu.',
  },
]

export default function DigitalProjects() {
  return (
    <section id="digital" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">MANAJERIAL & DIGITAL ENGINEERING</p>
          <h2 className="text-4xl md:text-5xl font-bold italic mb-3">Digital Tools & Tata Kelola Proses</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Pemanfaatan tools digital engineering, pemodelan data produksi berbasis spreadsheet, serta standarisasi dokumentasi operasional manufaktur.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industrialProjects.map((project) => (
            <div
              key={project.number}
              className="relative group rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden p-6 min-h-[280px] flex flex-col justify-end hover:border-[var(--muted)] transition-colors"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 text-[120px] font-black text-[var(--foreground)] opacity-[0.03] leading-none select-none">
                {project.number}
              </span>

              {/* Placeholder icon area */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[var(--card-border)] to-transparent flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--muted)] opacity-40">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
