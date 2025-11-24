import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre Noi - Sorriso Dent',
  description: 'Echipa Sorriso Dent București: peste 7 ani experiență. Cabinet modern cu tehnologie avansată și profesionalism.',
  keywords: 'despre cabinet dentar, echipa dentară, profesionalism, experiență',
  alternates: {
    canonical: 'https://www.sorrisodent.ro/despre-noi',
  },
  openGraph: {
    title: 'Despre Noi - Sorriso Dent',
    description: 'Echipa Sorriso Dent București: peste 7 ani experiență. Cabinet modern cu tehnologie avansată.',
    url: 'https://www.sorrisodent.ro/despre-noi',
    type: 'website',
  },
}

export default function DespreNoiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

