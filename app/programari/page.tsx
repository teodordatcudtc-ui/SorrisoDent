'use client'

import ContactInfo from '@/components/ContactInfo'
import { HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
              Pentru programări, vă rugăm să ne contactați telefonic. Suntem aici să vă ajutăm cu 
              orice întrebări despre serviciile noastre.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-aqua-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiPhone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
                Programare Telefonică
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Pentru a programa o consultație sau pentru orice întrebări, vă rugăm să ne sunați. 
                Echipa noastră este pregătită să vă ajute să găsiți cel mai potrivit moment pentru vizita dvs.
              </p>
              <Link
                href="tel:0724481200"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-aqua-600 text-white px-10 py-5 rounded-full font-semibold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <HiPhone className="w-6 h-6" />
                <span>Sună Acum: 0724 481 200</span>
              </Link>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactInfo />
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
