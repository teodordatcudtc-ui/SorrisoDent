'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FaMicroscope, FaShieldAlt, FaSprayCan } from 'react-icons/fa'

const services = [
  {
    icon: FaMicroscope,
    title: 'Tratamente Endodontice',
    description: 'Tratamente de canal cu tehnologie modernă și fără durere.',
    color: 'from-aqua-400 to-primary-400',
    image: '/images/services/endodontie.jpg',
  },
  {
    icon: FaShieldAlt,
    title: 'Proteză Dentară',
    description: 'Proteze dentare personalizate pentru confort și estetică maximă.',
    color: 'from-primary-500 to-accent-gold',
    image: '/images/services/proteza.jpg',
  },
  {
    icon: FaSprayCan,
    title: 'Igienizare Dentară',
    description: 'Curățare profesională și prevenție pentru sănătatea dentară.',
    color: 'from-aqua-500 to-primary-500',
    image: '/images/services/igienizare.jpg',
  },
]

export default function ServicesPreview() {
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
            Serviciile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim o gamă completă de servicii dentare, folosind tehnologii moderne și materiale
            premium.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image Background */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`}></div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center ${service.color.replace('from-', 'text-').split(' ')[0]}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                    ></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-base">{service.description}</p>
                      <Link
                        href="/servicii"
                        className="inline-flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors text-base"
                      >
                        <span>Află mai multe</span>
                        <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicii"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-aqua-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Vezi Toate Serviciile</span>
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

