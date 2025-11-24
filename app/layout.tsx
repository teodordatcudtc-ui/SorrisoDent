import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import StructuredData from '@/components/StructuredData'

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
  metadataBase: new URL('https://www.sorrisodent.ro'),
  title: 'Sorriso Dent - Cabinet Dentar București',
  description: 'Cabinet dentar modern în București. Tratamente endodontice, proteză dentară, igienizare. Programează-te la 0724 481 200!',
  keywords: 'cabinet dentar bucurești, dentist bucurești, tratamente endodontice, proteză dentară, igienizare dentară, stomatologie',
  authors: [{ name: 'Sorriso Dent' }],
  alternates: {
    canonical: 'https://www.sorrisodent.ro',
  },
  openGraph: {
    title: 'Sorriso Dent - Cabinet Dentar București',
    description: 'Cabinet dentar modern în București. Tratamente endodontice, proteză dentară, igienizare. Programează-te acum!',
    url: 'https://www.sorrisodent.ro',
    siteName: 'Sorriso Dent',
    type: 'website',
    locale: 'ro_RO',
    images: [
      {
        url: '/images/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sorriso Dent - Cabinet Dentar București',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sorriso Dent - Cabinet Dentar București',
    description: 'Cabinet dentar modern în București. Tratamente endodontice, proteză dentară, igienizare.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <StructuredData />
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

