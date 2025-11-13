'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle, HiShieldCheck, HiClock, HiStar, HiHeart } from 'react-icons/hi'

const reasons = [
  {
    icon: HiShieldCheck,
    title: 'Siguranță Maximă',
    description: 'Standarde înalte de igienă și sterilizare pentru siguranța ta.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: HiClock,
    title: 'Programări Flexibile',
    description: 'Programări adaptate nevoilor tale, inclusiv în weekend.',
    color: 'text-aqua-600',
    bgColor: 'bg-aqua-50',
  },
  {
    icon: HiStar,
    title: 'Calitate Premium',
    description: 'Materiale și tehnologii de ultimă generație pentru rezultate perfecte.',
    color: 'text-accent-gold',
    bgColor: 'bg-accent-gold-light/30',
  },
  {
    icon: HiHeart,
    title: 'Abordare Personalizată',
    description: 'Fiecare tratament este adaptat nevoilor și preferințelor tale.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            De Ce Să Ne Alegi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Sorriso Dent, ne dedicăm să oferim cea mai bună experiență pentru fiecare pacient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

