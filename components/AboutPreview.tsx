'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const features = [
  'Echipament de ultimă generație',
  'Echipa cu peste 7 ani experiență',
  'Mediu modern și confortabil',
  'Standarde înalte de igienă',
]

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-aqua-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Despre Sorriso Dent
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              La Sorriso Dent, ne dedicăm să oferim servicii dentare de cea mai înaltă calitate,
              într-un mediu modern, confortabil și prietenos. Cu o experiență de peste 7 ani în
              domeniul stomatologiei, echipa noastră de profesioniști este dedicată să vă ofere
              cele mai bune tratamente dentare.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <HiCheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/despre-noi"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-aqua-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Află Mai Multe</span>
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-aqua-400"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl font-serif font-bold mb-4">7+</div>
                  <div className="text-2xl mb-2">Ani de Experiență</div>
                  <div className="text-lg opacity-90">Mii de zâmbete transformate</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-gold rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary-300 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

