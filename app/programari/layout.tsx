import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programări - Sorriso Dent',
  description: 'Programați-vă pentru o consultație la cabinetul nostru dentar. Contactați-ne telefonic pentru programări sau întrebări.',
  keywords: 'programare dentist, programare cabinet dentar, consultație dentară, contact cabinet dentar',
}

export default function ProgramariLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

