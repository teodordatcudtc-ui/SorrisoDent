'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Maria Popescu',
    role: 'Pacient',
    content:
      'Am fost foarte mulțumită de serviciile oferite la Sorriso Dent. Echipa este foarte profesională, cabinetul este modern și tratamentele sunt de înaltă calitate. Recomand cu încredere!',
    rating: 5,
    treatment: 'Tratamente Endodontice',
  },
  {
    name: 'Ion Georgescu',
    role: 'Pacient',
    content:
      'Servicii excelente și personal foarte prietenos. Am făcut un tratament de igienizare dentară și rezultatele au depășit așteptările. Cabinetul este foarte curat și modern.',
    rating: 5,
    treatment: 'Igienizare Dentară',
  },
  {
    name: 'Elena Ionescu',
    role: 'Pacient',
    content:
      'Am avut o experiență fantastică la Sorriso Dent. Medicul a fost foarte atent și mi-a explicat tot procesul. Tratamentul a fost fără durere și rezultatele sunt perfecte.',
    rating: 5,
    treatment: 'Proteză Dentară',
  },
  {
    name: 'Alexandru Marin',
    role: 'Pacient',
    content:
      'Cabinet modern, echipament de ultimă generație și echipă foarte competentă. Am făcut un tratament endodontic și sunt foarte mulțumit de rezultate.',
    rating: 5,
    treatment: 'Tratamente Endodontice',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Ce Spun Pacienții Noștri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem mândri de feedback-ul pozitiv al pacienților noștri. Iată ce spun despre
            experiența lor la Sorriso Dent.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-primary-50 to-aqua-50 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <HiStar key={i} className="w-6 h-6 text-accent-gold fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 text-center italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
              <div className="text-center">
                <p className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-primary-600 font-semibold mb-2">
                  {testimonials[currentIndex].role}
                </p>
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentIndex].treatment}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg text-primary-600 hover:bg-primary-50 transition-all flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg text-primary-600 hover:bg-primary-50 transition-all flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

