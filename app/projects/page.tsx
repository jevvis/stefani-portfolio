import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'
import DigitalProjects from '@/components/DigitalProjects'

export const metadata = {
  title: 'Pengalaman & Portofolio | Stefani Auria Putri Winata',
  description: 'Pengalaman Industri, Quality Control, Supply Chain, dan Continuous Improvement',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />
      <DigitalProjects />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Stefani Auria Putri Winata. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
