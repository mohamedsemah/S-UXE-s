import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipLink from '@/components/SkipLink'

export const metadata: Metadata = {
  title: 'S-UXE\'s | Sustainable Open-Source Ecosystem for User Experience Evaluation',
  description: 'An NSF-funded open-source research ecosystem addressing fragmentation in UX evaluation tools through interoperability, standards alignment, and community governance.',
  keywords: ['UX evaluation', 'user experience', 'open source', 'accessibility', 'ISO standards', 'WCAG', 'human-centered design'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

