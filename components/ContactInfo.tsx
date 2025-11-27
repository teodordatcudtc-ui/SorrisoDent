'use client'

import { motion } from 'framer-motion'
import { HiPhone, HiLocationMarker, HiMail, HiClock } from 'react-icons/hi'
import { FaFacebook } from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Informații Contact</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <HiPhone className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
              <a
                href="tel:0724481200"
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors"
              >
                0724 481 200
              </a>
            </div>
          </div>Echipa Noast

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-aqua-100 rounded-full flex items-center justify-center flex-shrink-0">
              <HiLocationMarker className="w-6 h-6 text-aqua-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Adresă</h3>
              <p className="text-gray-600">
                Bloc 1, Bulevardul Camil Ressu nr.66<br />
                București 031761
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent-gold-light rounded-full flex items-center justify-center flex-shrink-0">
              <HiMail className="w-6 h-6 text-accent-gold-dark" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a
                href="mailto:contact@sorrisodent.ro"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                contact@sorrisodent.ro
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <HiClock className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Program</h3>
              <div className="text-gray-600 space-y-1">
                <p>Luni - Vineri: 09:00 - 19:00</p>
                <p>Sâmbătă: 09:00 - 14:00</p>
                <p>Duminică: Închis</p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FaFacebook className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Facebook</h3>
              <a
                href="https://www.facebook.com/sorrisodent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Sorriso Dent Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

