export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'DentalClinic',
    name: 'Sorriso Dent',
    description: 'Cabinet dentar modern și profesional în București, Sector 3',
    url: 'https://www.sorrisodent.ro',
    telephone: '+40724481200',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bloc 1, Bulevardul Camil Ressu nr. 66',
      addressLocality: 'București',
      addressRegion: 'Sector 3',
      postalCode: '031761',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.4248',
      longitude: '26.1025',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    image: 'https://www.sorrisodent.ro/images/hero-1.jpg',
    sameAs: [
      'https://www.facebook.com/sorrisodent',
    ],
  }

  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Sorriso Dent',
    medicalSpecialty: 'Dentistry',
    description: 'Servicii dentare: tratamente endodontice, proteză dentară, igienizare dentară',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
    </>
  )
}

