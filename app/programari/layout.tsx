import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programări - Sorriso Dent',
  description: 'Programează-te la Sorriso Dent București. Sună la 0724 481 200 pentru consultație dentară. Program flexibil.',
  keywords: 'programare dentist, programare cabinet dentar, consultație dentară, contact cabinet dentar',
  alternates: {
    canonical: 'https://www.sorrisodent.ro/programari',
  },
  openGraph: {
    title: 'Programări - Sorriso Dent',
    description: 'Programează-te la Sorriso Dent București. Sună la 0724 481 200 pentru consultație dentară.',
    url: 'https://www.sorrisodent.ro/programari',
    type: 'website',
  },
}

export default function ProgramariLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

