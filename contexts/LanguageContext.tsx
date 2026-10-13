'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

// ─── COMPLETE BILINGUAL TRANSLATION DICTIONARY ──────────────────────────────
const translations: Record<Language, Record<string, string>> = {
  id: {
    // ── Navbar
    'nav.about': 'TENTANG SAYA',
    'nav.education': 'PENDIDIKAN',
    'nav.work': 'MAGANG',
    'nav.org': 'ORGANISASI',
    'nav.awards': 'SERTIFIKASI',
    'nav.skills': 'KEAHLIAN',
    'nav.contact': 'HUBUNGI SAYA',

    // ── Hero
    'hero.scroll': 'GULIR KE BAWAH',
    'hero.badge.major': 'Teknik Industri UB',
    'hero.badge.medal': '3x Gold Medalist',
    'hero.badge.event': 'GYIIF & ISPC 2025',

    // ── About Section
    'about.label': 'TENTANG SAYA',
    'about.title': 'Industrial Engineer. Quality First.',
    'about.ipk': 'IPK',
    'about.toefl': 'TOEFL Score',
    'about.year': 'Angkatan',
    'about.bio1': 'Mahasiswi Teknik Industri Universitas Brawijaya dengan pengalaman di bidang produksi, analisis proses, dan peningkatan kualitas melalui program magang di industri pangan. Berpengalaman dalam menganalisis proses produksi, memahami Production Planning & Control (PPC), Quality Control, Process Improvement, Supply Chain, dan Inventory Management. Meraih Gold Medal dalam kompetisi Engineering dan Environmental Science, dengan komitmen kuat untuk mengembangkan karir di bidang Industrial Engineering, Produksi, Kualitas, dan Supply Chain.',
    'about.cv.prompt': 'Ingin tahu lebih lanjut?',
    'about.cv.link': 'Download CV saya',
    'about.current.label': 'FOKUS SAAT INI',
    'about.current.1.title': 'Quality Control',
    'about.current.1.sub': 'FMEA & Process Analysis',
    'about.current.2.title': 'Supply Chain',
    'about.current.2.sub': 'Inventory & Warehouse',
    'about.current.3.title': 'Lean & Kaizen',
    'about.current.3.sub': 'Continuous Improvement',

    // ── Trait Deck
    'trait.card.label': 'KARAKTER KERJA',
    'trait.change': 'Ganti',
    'trait.hint': 'Klik untuk melihat karakter kerja lainnya',
    'trait.1.title': 'Analitis',
    'trait.1.sub': 'Data-Driven Mindset',
    'trait.1.tag': 'FMEA & Statistika',
    'trait.1.desc': 'Menganalisis proses manufaktur dan data produksi untuk mengidentifikasi akar masalah serta memetakan prioritas risiko mutu.',
    'trait.2.title': 'Teliti',
    'trait.2.sub': 'Quality & Precision First',
    'trait.2.tag': 'Zero Defect Focus',
    'trait.2.desc': 'Memastikan akurasi tinggi dalam pemantauan yield & reject produk, verifikasi SOP, dan pengawasan standar mutu produksi.',
    'trait.3.title': 'Adaptif',
    'trait.3.sub': 'Agile & Collaborative',
    'trait.3.tag': 'Cepat Belajar',
    'trait.3.desc': 'Cepat beradaptasi dengan ritme lantai pabrik yang dinamis, koordinasi tim lintas fungsi, dan penerapan teknologi baru.',
    'trait.4.title': 'Inovatif',
    'trait.4.sub': 'Continuous Improvement',
    'trait.4.tag': 'Lean & Kaizen',
    'trait.4.desc': 'Mengusung pola pikir perbaikan berkelanjutan untuk mengeliminasi pemborosan proses dan mendorong efisiensi kerja.',

    // ── Quote
    'about.quote': '“Berinovasi dengan data, berkontribusi dengan kualitas, berkembang dengan konsistensi.”',

    // ── Metrics
    'metric.ipk': 'IPK KUMULATIF',
    'metric.ipk.sub': 'Prestasi akademik konsisten (3.62 / 4.00)',
    'metric.medal': 'GOLD MEDAL IYSA',
    'metric.medal.sub': 'Ajang internasional GYIIF & ISPC 2025',
    'metric.org': 'KEGIATAN ORGANISASI',
    'metric.org.sub': 'Kepengurusan & kepanitiaan HMTI UB',
    'metric.toefl': 'TOEFL SCORE',
    'metric.toefl.sub': 'Kemahiran bahasa Inggris profesional',

    // ── Education Section
    'education.label': 'RIWAYAT AKADEMIK',
    'education.title': 'Pendidikan',
    'education.institution': 'Universitas Brawijaya',
    'education.program': 'Sarjana Teknik Industri',
    'education.degree': 'Sarjana Teknik (S.T.)',
    'education.degreeLabel': 'Gelar',
    'education.status': 'Aktif — Semester 7',
    'education.desc': 'Mendalami ilmu Teknik Industri mencakup Production Planning & Control (PPC), Quality Control & Improvement, Supply Chain Management, Inventory Management, serta analisis sistem manufaktur dan proses industri.',
    'education.highlights.label': 'Kompetensi & Aktivitas Utama',
    'education.h1': 'Magang Production Intern di CV. Pangan Berkah Sentosa — analisis FMEA & yield monitoring',
    'education.h2': 'Meraih 3x Gold Medal IYSA di kompetisi sains internasional (Engineering & Environmental Science)',
    'education.h3': 'Aktif sebagai Event Staff, Secretary Staff, dan Logistics Staff di 4 kegiatan organisasi kampus',
    'education.h4': 'Penguasaan tools: MS Office (Excellent Grade), AutoCAD, SketchUp, Python, Google Workspace',
    'education.tag': 'TEKNIK INDUSTRI UB',
    'education.caption': 'Pendidikan Akademik, Riset Industri & Kegiatan Organisasi',

    // ── Awards / Certifications Section
    'awards.label': 'PRESTASI & SERTIFIKASI',
    'awards.title': 'Prestasi & Sertifikasi',
    'awards.sub': 'Penghargaan medali emas pada kompetisi riset sains internasional (IYSA), sertifikasi kompetensi Microsoft Office, dan kemahiran bahasa Inggris (TOEFL).',
    'awards.openDoc': 'Buka Dokumen',
    'awards.viewOriginal': 'Lihat Dokumen Asli →',
    'awards.issuer': 'Penerbit',
    'award.1.title': 'Gold Medal — GYIIF 2025 (Environmental Science)',
    'award.1.issuer': 'Indonesian Young Scientist Association (IYSA)',
    'award.1.cat': 'KOMPETISI INTERNASIONAL',
    'award.1.desc': 'Penghargaan medali emas kategori Environmental Science pada ajang Global Youth Invention and Innovation Fair (GYIIF) 2025 yang diselenggarakan oleh IYSA.',
    'award.2.title': 'Gold Medal — ISPC 2025 (Engineering Category)',
    'award.2.issuer': 'Indonesian Young Scientist Association (IYSA)',
    'award.2.cat': 'KOMPETISI INTERNASIONAL',
    'award.2.desc': 'Penghargaan medali emas kategori Engineering pada Indonesia Science Project Competition (ISPC) 2025 untuk karya inovasi teknik industri dan sistem manufaktur.',
    'award.3.title': 'Gold Medal — ISPC 2025 (Environmental Science)',
    'award.3.issuer': 'Indonesian Young Scientist Association (IYSA)',
    'award.3.cat': 'KOMPETISI INTERNASIONAL',
    'award.3.desc': 'Penghargaan medali emas kategori Environmental Science pada ajang Indonesia Science Project Competition (ISPC) 2025 atas riset keberlanjutan lingkungan dan industri ramah lingkungan.',
    'award.4.title': 'Microsoft Office Desktop Application Competency',
    'award.4.issuer': 'Trust Training Partners',
    'award.4.cat': 'SERTIFIKASI KOMPETENSI',
    'award.4.desc': 'Sertifikasi kompetensi aplikasi desktop Microsoft Office dengan predikat Excellent Grade, menguasai pengolahan data spreadsheet lanjutan, pemodelan analisis, dan dokumentasi.',
    'award.5.title': 'Test of English Language Proficiency (TOEFL Score: 557)',
    'award.5.issuer': 'Royal English / PT. Royal Raya Indonesia',
    'award.5.cat': 'KEMAHIRAN BAHASA',
    'award.5.desc': 'Sertifikasi kemahiran bahasa Inggris standar internasional dengan skor TOEFL 557, mendukung komunikasi profesional, literatur teknik global, dan konferensi internasional.',

    // ── Trainings / Organizations
    'trainings.label': 'PENGALAMAN KEPEMIMPINAN & ORGANISASI',
    'trainings.title': 'Pengalaman Organisasi',
    'trainings.campus': 'UNIVERSITAS BRAWIJAYA',
    'org.1.role': 'Event Staff',
    'org.1.inst': 'ICLASS 2024 — HMTI Universitas Brawijaya',
    'org.1.desc': 'Mendukung persiapan dan pelaksanaan rangkaian kegiatan ICLASS 2024 sesuai dengan timeline dan tanggung jawab panitia. Mengkoordinasikan kebutuhan teknis acara bersama anggota panitia dan divisi terkait untuk memastikan kesiapan operasional acara.',
    'org.2.role': 'Secretary Staff',
    'org.2.inst': 'ICOEMIS 2024 (International Conference)',
    'org.2.desc': 'Mendukung kegiatan administratif dan kesekretariatan sepanjang persiapan dan implementasi International Conference on Engineering and Management in Industrial System. Berkoordinasi dengan anggota panitia untuk pemenuhan dokumentasi dan persyaratan administrasi.',
    'org.3.role': 'Secretary Staff',
    'org.3.inst': 'INVENT 2024 — HMTI Universitas Brawijaya',
    'org.3.desc': 'Mendukung kegiatan administratif dan kesekretariatan sepanjang persiapan dan pelaksanaan acara tahunan INVENT (Industrial Event) yang diselenggarakan oleh Himpunan Mahasiswa Teknik Industri Universitas Brawijaya.',
    'org.4.role': 'Logistics Staff',
    'org.4.inst': 'ENC 2024 — KBM FT Universitas Brawijaya',
    'org.4.desc': 'Mendukung persiapan dan pemenuhan kebutuhan logistik, perlengkapan, serta sarana prasarana selama masa persiapan dan pelaksanaan acara ENC oleh Keluarga Besar Mahasiswa Fakultas Teknik Universitas Brawijaya.',

    // ── Work Gallery / Magang
    'work.label': 'PENGALAMAN INDUSTRI & MANUFAKTUR',
    'work.title': 'Pengalaman Magang',
    'work.subtitle': 'Pengalaman magang di industri manufaktur pangan, berfokus pada analisis proses produksi Line 4, Failure Mode and Effect Analysis (FMEA), yield & reject monitoring, serta peningkatan kualitas berkelanjutan.',
    'work.cta': 'LIHAT DETAIL PORTOFOLIO →',
    'work.1.role': 'Production Intern',
    'work.1.sub': 'Manufaktur Industri Pangan — Cheese Dumpling Production Line 4',
    'work.1.desc': 'Mengamati dan menganalisis seluruh alur proses produksi Cheese Dumpling pada Line 4, mulai dari penyiapan bahan baku, pencampuran adonan, proses pencetakan, hingga tahap pengemasan. Memastikan setiap tahapan berjalan sesuai standar efisiensi lini manufaktur.',
    'work.2.role': 'Quality Risk & FMEA Analysis',
    'work.2.sub': 'Identifikasi Defect Mutu & Failure Mode and Effect Analysis (FMEA)',
    'work.2.desc': 'Mengidentifikasi dan mengkaji empat jenis cacat kualitas utama: bentuk tidak teratur (irregular shapes), lubang (holes), kebocoran (leakage), dan produk pecah (broken products). Melakukan analisis risiko kualitas menggunakan metode FMEA dengan menentukan failure modes, akar penyebab, dampak kecacatan, serta prioritas risiko (RPN).',
    'work.3.role': 'Yield & Efficiency Evaluation',
    'work.3.sub': 'Monitoring Yield, Reject Produk & Rekomendasi Continuous Improvement',
    'work.3.desc': 'Memantau dan merekapitulasi data yield produksi, reject produk, serta sisa adonan secara sistematis sebagai dasar evaluasi efisiensi lini produksi. Berkoordinasi aktif dengan tim Produksi dan Quality Control untuk menganalisis faktor penyebab cacat dan menyusun rekomendasi perbaikan kualitas produk berkelanjutan.',

    // ── Skills Section
    'skills.label': 'KOMPETENSI SAYA',
    'skills.title': 'Kemampuan Teknis',
    'skills.desc': 'Menggabungkan kompetensi teknik industri, quality control, supply chain, dan process improvement untuk meningkatkan efisiensi dan kualitas operasional.',
    'skills.card1.tag': 'PRODUKSI & KUALITAS',
    'skills.card1.desc': 'Menganalisis proses produksi, identifikasi defect menggunakan FMEA, pemantauan yield & reject produk, quality risk analysis, serta koordinasi dengan tim Produksi dan Quality Control untuk rekomendasi perbaikan.',
    'skills.card2.tag': 'SUPPLY CHAIN & IMPROVEMENT',
    'skills.card2.desc': 'Pemahaman mendalam tentang Supply Chain Management, inventory management, warehouse management, serta process improvement menggunakan pendekatan Lean Manufacturing, Kaizen, dan analisis data untuk keputusan berbasis data.',

    // ── Personal & Software Skills
    'personal.label': 'KOMPETENSI PERSONAL & DIGITAL',
    'personal.title': 'Kemampuan Personal & Software',
    'personal.sub': 'Karakteristik kerja analitis berorientasi pada peningkatan kualitas berkelanjutan serta penguasaan software pendukung analisis data, gambar teknik, dan dokumentasi manufaktur.',
    'personal.soft.label': 'INTERPERSONAL & KARAKTER',
    'personal.soft.title': 'Kemampuan Personal',
    'personal.hard.label': 'DIGITAL & PRODUKTIVITAS',
    'personal.hard.title': 'Penguasaan Software',
    'personal.orientation': 'Orientasi: Continuous Improvement',
    'personal.quality': '100% Quality & Safety',
    'personal.app': 'Aplikasi: Produksi, CAD, Spreadsheet & Dokumentasi',
    'personal.ready': 'Siap Digunakan',
    'personal.soft.1.t': 'Analitis & Kritis',
    'personal.soft.1.d': 'Kemampuan kuat dalam menganalisis data produksi, evaluasi yield/reject, dan pemecahan masalah berbasis data.',
    'personal.soft.2.t': 'Detail & Teliti',
    'personal.soft.2.d': 'Akurasi tinggi dalam identifikasi cacat kualitas (defect) serta mitigasi risiko proses menggunakan metode FMEA.',
    'personal.soft.3.t': 'Komunikatif & Kolaboratif',
    'personal.soft.3.d': 'Komunikasi proaktif dalam tim lintas fungsi antara divisi Produksi, Quality Control, dan manajemen.',
    'personal.soft.4.t': 'Continuous Improvement',
    'personal.soft.4.d': 'Mindset berorientasi pada peningkatan kualitas berkelanjutan, efisiensi operasional, dan eliminasi waste.',
    'personal.soft.5.t': 'Adaptif & Cepat Belajar',
    'personal.soft.5.d': 'Tangkas memahami alur kerja lini manufaktur, sistem industri modern, dan implementasi teknologi baru.',
    'personal.soft.6.t': 'Manajemen Waktu & Organisasi',
    'personal.soft.6.d': 'Terbukti handal mengelola tanggung jawab akademis, magang industri, dan kepanitiaan organisasi secara simultan.',

    // ── Contact
    'contact.label': 'KONTAK',
    'contact.title': "LET'S\nWORK\nTOGETHER",
    'contact.tagline': 'Industrial Engineer — Quality & Continuous Improvement First.',
    'contact.desc': 'Terbuka untuk peluang karir dan kolaborasi di bidang Production Engineering, Quality Control, Process Improvement, Supply Chain, serta operasional industri manufaktur.',
    'contact.cv': 'UNDUH CV',
    'contact.email': 'Kirim Email Langsung →',
    'contact.location': 'DOMISILI',
    'contact.phone': 'WHATSAPP & TELEPON',

    // ── Footer
    'footer.rights': 'Hak Cipta Dilindungi',
  },

  en: {
    // ── Navbar
    'nav.about': 'ABOUT',
    'nav.education': 'EDUCATION',
    'nav.work': 'INTERNSHIP',
    'nav.org': 'ORGANIZATIONS',
    'nav.awards': 'CERTIFICATIONS',
    'nav.skills': 'SKILLS',
    'nav.contact': 'CONTACT ME',

    // ── Hero
    'hero.scroll': 'SCROLL DOWN',
    'hero.badge.major': 'Industrial Engineering UB',
    'hero.badge.medal': '3x Gold Medalist',
    'hero.badge.event': 'GYIIF & ISPC 2025',

    // ── About Section
    'about.label': 'ABOUT ME',
    'about.title': 'Industrial Engineer. Quality First.',
    'about.ipk': 'GPA',
    'about.toefl': 'TOEFL Score',
    'about.year': 'Class of',
    'about.bio1': 'Industrial Engineering student at Universitas Brawijaya with hands-on experience in production, process analysis, and quality improvement through an internship in the food manufacturing industry. Proficient in Production Planning & Control (PPC), Quality Control, Process Improvement, Supply Chain, and Inventory Management. Gold Medal winner at international science competitions, with a strong commitment to building a career in Industrial Engineering, Production, Quality, and Supply Chain.',
    'about.cv.prompt': 'Want to know more?',
    'about.cv.link': 'Download my CV',
    'about.current.label': 'CURRENT FOCUS',
    'about.current.1.title': 'Quality Control',
    'about.current.1.sub': 'FMEA & Process Analysis',
    'about.current.2.title': 'Supply Chain',
    'about.current.2.sub': 'Inventory & Warehouse',
    'about.current.3.title': 'Lean & Kaizen',
    'about.current.3.sub': 'Continuous Improvement',

    // ── Trait Deck
    'trait.card.label': 'WORK CHARACTER',
    'trait.change': 'Next',
    'trait.hint': 'Click to see other work traits',
    'trait.1.title': 'Analytical',
    'trait.1.sub': 'Data-Driven Mindset',
    'trait.1.tag': 'FMEA & Statistics',
    'trait.1.desc': 'Analyzing manufacturing processes and production data to identify root causes and map quality risk priorities.',
    'trait.2.title': 'Detail-Oriented',
    'trait.2.sub': 'Quality & Precision First',
    'trait.2.tag': 'Zero Defect Focus',
    'trait.2.desc': 'Ensuring high accuracy in yield & reject monitoring, SOP verification, and production quality standard oversight.',
    'trait.3.title': 'Adaptive',
    'trait.3.sub': 'Agile & Collaborative',
    'trait.3.tag': 'Fast Learner',
    'trait.3.desc': 'Quickly adapting to the dynamic pace of factory floors, cross-functional team coordination, and new technology adoption.',
    'trait.4.title': 'Innovative',
    'trait.4.sub': 'Continuous Improvement',
    'trait.4.tag': 'Lean & Kaizen',
    'trait.4.desc': 'Embracing a continuous improvement mindset to eliminate process waste and drive operational efficiency.',

    // ── Quote
    'about.quote': '“Innovate with data, contribute with quality, grow with consistency.”',

    // ── Metrics
    'metric.ipk': 'CUMULATIVE GPA',
    'metric.ipk.sub': 'Consistent academic achievement (3.62 / 4.00)',
    'metric.medal': 'IYSA GOLD MEDAL',
    'metric.medal.sub': 'International GYIIF & ISPC 2025 competition',
    'metric.org': 'ORGANIZATIONAL ACTIVITIES',
    'metric.org.sub': 'Leadership & committee roles at HMTI UB',
    'metric.toefl': 'TOEFL SCORE',
    'metric.toefl.sub': 'Professional English language proficiency',

    // ── Education Section
    'education.label': 'ACADEMIC BACKGROUND',
    'education.title': 'Education',
    'education.institution': 'Universitas Brawijaya',
    'education.program': 'Bachelor of Industrial Engineering',
    'education.degree': 'Bachelor of Engineering (S.T.)',
    'education.degreeLabel': 'Degree',
    'education.status': 'Active — 7th Semester',
    'education.desc': 'Studying Industrial Engineering covering Production Planning & Control (PPC), Quality Control & Improvement, Supply Chain Management, Inventory Management, and manufacturing system analysis.',
    'education.highlights.label': 'Key Competencies & Activities',
    'education.h1': 'Production Intern at CV. Pangan Berkah Sentosa — FMEA analysis & yield monitoring',
    'education.h2': 'Won 3x IYSA Gold Medal at international science competitions (Engineering & Environmental Science)',
    'education.h3': 'Active as Event Staff, Secretary Staff, and Logistics Staff across 4 campus committee roles',
    'education.h4': 'Tools proficiency: MS Office (Excellent Grade), AutoCAD, SketchUp, Python, Google Workspace',
    'education.tag': 'INDUSTRIAL ENGINEERING UB',
    'education.caption': 'Academic Education, Industrial Research & Campus Organizations',

    // ── Awards / Certifications Section
    'awards.label': 'ACHIEVEMENTS & AWARDS',
    'awards.title': 'Awards & Certifications',
    'awards.sub': 'Gold medal awards at international science research competitions (IYSA), Microsoft Office competency certification, and TOEFL English proficiency.',
    'awards.openDoc': 'Open Document',
    'awards.viewOriginal': 'View Original Document →',
    'awards.issuer': 'Issuer',
    'award.1.title': 'Gold Medal — GYIIF 2025 (Environmental Science)',
    'award.1.issuer': 'Indonesian Young Scientist Association (IYSA)',
    'award.1.cat': 'INTERNATIONAL COMPETITION',
    'award.1.desc': 'Gold Medal Award in Environmental Science category at the Global Youth Invention and Innovation Fair (GYIIF) 2025 organized by IYSA.',
    'award.2.title': 'Gold Medal — ISPC 2025 (Engineering Category)',
    'award.2.issuer': 'Indonesian Young Scientist Association (IYSA)',
    'award.2.cat': 'INTERNATIONAL COMPETITION',
    'award.2.desc': 'Gold Medal Award in Engineering category at Indonesia Science Project Competition (ISPC) 2025 for industrial engineering and manufacturing system innovation.',
    'award.3.title': 'Gold Medal — ISPC 2025 (Environmental Science)',
    'award.3.issuer': 'Indonesian Young Scientist Association (IYSA)',
    'award.3.cat': 'INTERNATIONAL COMPETITION',
    'award.3.desc': 'Gold Medal Award in Environmental Science category at Indonesia Science Project Competition (ISPC) 2025 for environmental sustainability research.',
    'award.4.title': 'Microsoft Office Desktop Application Competency',
    'award.4.issuer': 'Trust Training Partners',
    'award.4.cat': 'COMPETENCY CERTIFICATION',
    'award.4.desc': 'Microsoft Office desktop application competency certification with Excellent Grade, proficient in advanced spreadsheet processing and modeling.',
    'award.5.title': 'Test of English Language Proficiency (TOEFL Score: 557)',
    'award.5.issuer': 'Royal English / PT. Royal Raya Indonesia',
    'award.5.cat': 'LANGUAGE PROFICIENCY',
    'award.5.desc': 'International standard English language proficiency certification with TOEFL score 557, supporting professional global engineering communication.',

    // ── Trainings / Organizations
    'trainings.label': 'LEADERSHIP & ORGANIZATIONS',
    'trainings.title': 'Organizational Experience',
    'trainings.campus': 'UNIVERSITAS BRAWIJAYA',
    'org.1.role': 'Event Staff',
    'org.1.inst': 'ICLASS 2024 — HMTI Universitas Brawijaya',
    'org.1.desc': 'Supported preparation and execution of ICLASS 2024 in accordance with timeline and committee duties. Coordinated technical event requirements across divisions.',
    'org.2.role': 'Secretary Staff',
    'org.2.inst': 'ICOEMIS 2024 (International Conference)',
    'org.2.desc': 'Handled administrative and secretarial activities throughout the preparation and implementation of the International Conference on Engineering and Management in Industrial System.',
    'org.3.role': 'Secretary Staff',
    'org.3.inst': 'INVENT 2024 — HMTI Universitas Brawijaya',
    'org.3.desc': 'Handled secretarial and administrative functions during the preparation and execution of the annual INVENT event organized by the Industrial Engineering Student Association.',
    'org.4.role': 'Logistics Staff',
    'org.4.inst': 'ENC 2024 — KBM FT Universitas Brawijaya',
    'org.4.desc': 'Supported logistics procurement, equipment preparation, and infrastructure facilities during the preparation and execution of the ENC event by the Faculty of Engineering.',

    // ── Work Gallery / Magang
    'work.label': 'INDUSTRY & MANUFACTURING EXPERIENCE',
    'work.title': 'Internship Experience',
    'work.subtitle': 'Internship experience in the food manufacturing industry, focused on Line 4 production process analysis, Failure Mode and Effect Analysis (FMEA), yield & reject monitoring, and continuous quality improvement.',
    'work.cta': 'VIEW FULL PORTFOLIO →',
    'work.1.role': 'Production Intern',
    'work.1.sub': 'Food Manufacturing Industry — Cheese Dumpling Production Line 4',
    'work.1.desc': 'Observed and analyzed the complete production workflow of Cheese Dumplings on Line 4, from raw material preparation, dough mixing, molding, to packaging, ensuring adherence to manufacturing efficiency standards.',
    'work.2.role': 'Quality Risk & FMEA Analysis',
    'work.2.sub': 'Quality Defect Identification & Failure Mode and Effect Analysis (FMEA)',
    'work.2.desc': 'Identified and examined four primary defect types: irregular shapes, holes, leakage, and broken products. Conducted quality risk analysis using FMEA to determine failure modes, root causes, severity impacts, and Risk Priority Numbers (RPN).',
    'work.3.role': 'Yield & Efficiency Evaluation',
    'work.3.sub': 'Yield Monitoring, Product Rejects & Continuous Improvement Recommendations',
    'work.3.desc': 'Systematically monitored and aggregated production yield data, product reject rates, and dough waste as the foundation for line efficiency evaluation. Actively collaborated with Production and QC teams to devise quality improvement strategies.',

    // ── Skills Section
    'skills.label': 'MY COMPETENCIES',
    'skills.title': 'Technical Skills',
    'skills.desc': 'Combining industrial engineering, quality control, supply chain, and process improvement competencies to enhance operational efficiency and quality.',
    'skills.card1.tag': 'PRODUCTION & QUALITY',
    'skills.card1.desc': 'Analyzing production processes, identifying defects using FMEA, monitoring yield & reject products, quality risk analysis, and coordinating with Production and Quality Control teams for improvement recommendations.',
    'skills.card2.tag': 'SUPPLY CHAIN & IMPROVEMENT',
    'skills.card2.desc': 'In-depth understanding of Supply Chain Management, inventory management, warehouse management, and process improvement using Lean Manufacturing, Kaizen, and data-driven decision making.',

    // ── Personal & Software Skills
    'personal.label': 'PERSONAL & DIGITAL COMPETENCY',
    'personal.title': 'Personal & Software Skills',
    'personal.sub': 'Analytical work ethics oriented towards continuous quality improvement, paired with software proficiency in data analytics, engineering drawing, and manufacturing documentation.',
    'personal.soft.label': 'INTERPERSONAL & CHARACTER',
    'personal.soft.title': 'Personal Skills',
    'personal.hard.label': 'DIGITAL & PRODUCTIVITY',
    'personal.hard.title': 'Software Proficiency',
    'personal.orientation': 'Orientation: Continuous Improvement',
    'personal.quality': '100% Quality & Safety',
    'personal.app': 'Applications: Production, CAD, Spreadsheet & Docs',
    'personal.ready': 'Ready to Deploy',
    'personal.soft.1.t': 'Analytical & Critical Thinking',
    'personal.soft.1.d': 'Strong capability in analyzing production data, yield/reject evaluation, and data-driven problem solving.',
    'personal.soft.2.t': 'Detail & Precision',
    'personal.soft.2.d': 'High accuracy in identifying quality defects and mitigating process risks using FMEA methodology.',
    'personal.soft.3.t': 'Communicative & Collaborative',
    'personal.soft.3.d': 'Proactive communication across cross-functional teams between Production, Quality Control, and Management.',
    'personal.soft.4.t': 'Continuous Improvement',
    'personal.soft.4.d': 'Mindset focused on ongoing quality enhancement, operational efficiency, and waste reduction.',
    'personal.soft.5.t': 'Adaptive & Fast Learner',
    'personal.soft.5.d': 'Quick to grasp manufacturing workflows, modern industrial systems, and adoption of new technologies.',
    'personal.soft.6.t': 'Time & Task Management',
    'personal.soft.6.d': 'Proven track record of managing academic responsibilities, industrial internships, and campus committees simultaneously.',

    // ── Contact
    'contact.label': 'CONTACT',
    'contact.title': "LET'S\nWORK\nTOGETHER",
    'contact.tagline': 'Industrial Engineer — Quality & Continuous Improvement First.',
    'contact.desc': 'Open to career opportunities and collaboration in Production Engineering, Quality Control, Process Improvement, Supply Chain, and manufacturing operations.',
    'contact.cv': 'DOWNLOAD CV',
    'contact.email': 'Send Direct Email →',
    'contact.location': 'LOCATION',
    'contact.phone': 'WHATSAPP & PHONE',

    // ── Footer
    'footer.rights': 'All rights reserved',
  },
}

// ─── PROVIDER COMPONENT ───────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // 1. Check localStorage for manual user preference
    const saved = localStorage.getItem('lang') as Language | null
    if (saved === 'id' || saved === 'en') {
      setLangState(saved)
      return
    }

    // 2. Auto-detect visitor location / language
    // Indonesian or Malay -> id, everything else -> en
    const browserLang = (navigator.language || '').toLowerCase()
    if (browserLang.startsWith('id') || browserLang.startsWith('ms')) {
      setLangState('id')
    } else {
      setLangState('en')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
