import type { Metadata } from 'next'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata: Metadata = {
  title: 'Servicii Dentare - Sorriso Dent',
  description: 'Oferim o gamă completă de servicii dentare: tratamente endodontice, proteză dentară, igienizare dentară și multe altele.',
  keywords: 'servicii dentare, tratamente endodontice, proteză dentară, igienizare dentară, tratamente dentare',
}

export default function Servicii() {
  return (
    <div className="pt-24">
      <div className="section-padding bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900">
              Serviciile Noastre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim servicii dentare complete și moderne, folosind tehnologii de ultimă generație
              pentru a vă oferi cele mai bune rezultate.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </div>
    </div>
  )
}

