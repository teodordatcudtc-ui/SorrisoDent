import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre Noi - Sorriso Dent',
  description: 'Aflați mai multe despre cabinetul nostru dentar, echipa noastră de profesioniști și valorile care ne ghidează.',
  keywords: 'despre cabinet dentar, echipa dentară, profesionalism, experiență',
}

export default function DespreNoiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

