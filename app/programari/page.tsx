import type { Metadata } from 'next'
import AppointmentForm from '@/components/AppointmentForm'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import { HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Programări - Sorriso Dent',
  description: 'Programați-vă pentru o consultație la cabinetul nostru dentar. Oferim programări flexibile și servicii de înaltă calitate. Contactați-ne pentru programări sau întrebări.',
  keywords: 'programare dentist, programare cabinet dentar, consultație dentară, contact cabinet dentar',
}

export default function Programari() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-aqua-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900">
              Programează-te Acum
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Completează formularul de mai jos pentru programare sau contactează-ne direct pentru
              orice întrebări despre serviciile noastre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <AppointmentForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
                Trimite-ne un Mesaj
              </h2>
              <p className="text-lg text-gray-600">
                Ai întrebări sau vrei să ne contactezi? Completează formularul de mai jos.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div className="p-6 rounded-xl bg-primary-50">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiPhone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-gray-900">Telefon</h3>
              <a
                href="tel:0724481200"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                0724 481 200
              </a>
            </div>
            <div className="p-6 rounded-xl bg-aqua-50">
              <div className="w-16 h-16 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiLocationMarker className="w-8 h-8 text-aqua-600" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-gray-900">Adresă</h3>
              <p className="text-gray-600">
                Bloc 1, Bulevardul Camil Ressu nr.66<br />
                București 031761
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent-gold-light/30">
              <div className="w-16 h-16 bg-accent-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <HiClock className="w-8 h-8 text-accent-gold-dark" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-gray-900">Program</h3>
              <p className="text-gray-600">
                Luni - Vineri: 09:00 - 19:00<br />
                Sâmbătă: 09:00 - 14:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center text-gray-900">
            Locația Noastră
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.1234567890123!2d26.1234567890123!3d44.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA3JzI0LjQiTiAyNsKwMDcnMjQuNCJF!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
