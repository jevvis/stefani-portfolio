import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Stefani Auria Putri Winata | Portfolio Industrial Engineering',
  description: 'Industrial Engineering Graduate | Quality Control & Continuous Improvement — Universitas Brawijaya',
  keywords: ['Stefani Auria Putri Winata', 'Industrial Engineering', 'Teknik Industri', 'Quality Control', 'Universitas Brawijaya', 'FMEA', 'Supply Chain', 'PPC'],
  openGraph: {
    title: 'Stefani Auria Putri Winata | Portfolio Industrial Engineering',
    description: 'Industrial Engineering Graduate | Quality Control & Continuous Improvement',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
