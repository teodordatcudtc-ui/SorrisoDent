import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sorriso Dent - Cabinet Dentar Premium București',
  description: 'Cabinet dentar modern și profesional în București. Oferim servicii dentare de înaltă calitate: implantologie, estetică dentară, ortodonție și multe altele. Programează-te acum!',
  keywords: 'cabinet dentar bucurești, dentist bucurești, implantologie, estetică dentară, ortodonție, albire dentară, stomatologie',
  authors: [{ name: 'Sorriso Dent' }],
  openGraph: {
    title: 'Sorriso Dent - Cabinet Dentar Premium București',
    description: 'Cabinet dentar modern și profesional în București. Servicii dentare de înaltă calitate.',
    type: 'website',
    locale: 'ro_RO',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  )
}

