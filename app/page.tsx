import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import AboutPreview from '@/components/AboutPreview'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Sorriso Dent - Cabinet Dentar București',
  description: 'Cabinet dentar modern în București. Tratamente endodontice, proteză dentară, igienizare. Programează-te la 0724 481 200!',
  alternates: {
    canonical: 'https://www.sorrisodent.ro',
  },
  openGraph: {
    title: 'Sorriso Dent - Cabinet Dentar București',
    description: 'Cabinet dentar modern în București. Tratamente endodontice, proteză dentară, igienizare. Programează-te acum!',
    url: 'https://www.sorrisodent.ro',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <AboutPreview />
      <Testimonials />
      <CTA />
      
      {/* SEO Content Section - Hidden visually but readable by search engines */}
      <section className="sr-only">
        <div className="container-custom py-8">
          <h2>Cabinet Dentar Sorriso Dent București</h2>
          <p>
            Sorriso Dent este un <Link href="/despre-noi">cabinet dentar modern și profesional</Link> situat în București, Sector 3, 
            pe Bulevardul Camil Ressu nr. 66. Oferim <Link href="/servicii">servicii dentare de înaltă calitate</Link> într-un 
            mediu confortabil și prietenos, folosind tehnologii de ultimă generație și materiale premium.
          </p>
          <h3>Servicii Dentare București</h3>
          <p>
            La cabinetul nostru dentar din București, oferim o gamă completă de <Link href="/servicii">servicii dentare</Link> 
            pentru a vă asigura sănătatea și frumusețea zâmbetului. Specializăm în tratamente 
            endodontice, proteză dentară și igienizare dentară profesională.
          </p>
          <h3>Tratamente Endodontice</h3>
          <p>
            Tratamentele endodontice, cunoscute și sub numele de tratamente de canal, sunt efectuate 
            cu tehnologie modernă, inclusiv microscop operator, pentru rezultate precise și fără durere. 
            Folosim tehnici avansate de obturație termică pentru a asigura rezultate durabile. 
            <Link href="/servicii">Află mai multe despre tratamentele endodontice</Link>.
          </p>
          <h3>Proteză Dentară</h3>
          <p>
            Oferim proteze dentare personalizate, atât fixe cât și mobile, realizate din materiale 
            premium pentru confort maxim și estetică naturală. Protezele pot fi realizate și pe 
            implanturi pentru o soluție completă și durabilă. <Link href="/servicii">Descoperă serviciile noastre de proteză dentară</Link>.
          </p>
          <h3>Igienizare Dentară</h3>
          <p>
            Serviciile noastre de igienizare dentară includ detartraj cu ultrasunete, Air Flow 
            pentru curățare profundă, fluorizare pentru protecție împotriva cariilor și consiliere 
            personalizată pentru menținerea igienei orale. <Link href="/servicii">Vezi toate serviciile de igienizare</Link>.
          </p>
          <h3>Echipa Noastră</h3>
          <p>
            <Link href="/despre-noi">Echipa Sorriso Dent</Link> este formată din medici stomatologi specializați cu peste 7 ani de 
            experiență în domeniul stomatologiei. Fiecare membru al echipei aduce expertiză și 
            dedicare pentru a vă oferi cele mai bune servicii dentare.
          </p>
          <h3>Tehnologie Modernă</h3>
          <p>
            Cabinetul nostru este dotat cu echipamente de ultimă generație pentru tratamente precise 
            și confortabile. Respectăm cele mai stricte standarde de igienă și sterilizare pentru 
            siguranța pacienților noștri. <Link href="/despre-noi">Află mai multe despre cabinetul nostru</Link>.
          </p>
          <h3>Locație și Contact</h3>
          <p>
            Ne găsiți în București, Sector 3, la adresa Bloc 1, Bulevardul Camil Ressu nr. 66, 
            cod poștal 031761. Pentru <Link href="/programari">programări</Link>, vă rugăm să ne sunați la numărul de telefon 
            0724 481 200. Programul nostru este: Luni - Vineri: 09:00 - 19:00, Sâmbătă: 09:00 - 14:00.
          </p>
        </div>
      </section>
    </>
  )
}
