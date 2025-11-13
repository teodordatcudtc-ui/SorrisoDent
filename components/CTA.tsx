'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiCalendar, HiPhone } from 'react-icons/hi'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-aqua-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Gata Să Începi?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Programează-te acum pentru o consultație și descoperă cum putem transforma zâmbetul
            tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/programari"
              className="group inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <HiCalendar className="w-6 h-6" />
              <span>Programează-te Online</span>
            </Link>
            <a
              href="tel:0724481200"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <HiPhone className="w-6 h-6" />
              <span>Sună Acum</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

