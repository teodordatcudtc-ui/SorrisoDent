'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiCalendar } from 'react-icons/hi'
import { 
  FaMicroscope, 
  FaShieldAlt, 
  FaSprayCan
} from 'react-icons/fa'

const allServices = [
  {
    icon: FaMicroscope,
    title: 'Tratamente Endodontice',
    description: 'Tratamente de canal cu tehnologie modernă și fără durere.',
    features: [
      'Microscop operator',
      'Tratament fără durere',
      'Obturație termică',
      'Rezultate durabile',
    ],
    color: 'from-aqua-400 to-primary-400',
    image: '/images/services/endodontie.jpg',
  },
  {
    icon: FaShieldAlt,
    title: 'Proteză Dentară',
    description: 'Proteze dentare personalizate pentru confort și estetică maximă.',
    features: [
      'Proteze fixe',
      'Proteze mobile',
      'Proteze pe implanturi',
      'Materiale premium',
    ],
    color: 'from-primary-500 to-accent-gold',
    image: '/images/services/proteza.jpg',
  },
  {
    icon: FaSprayCan,
    title: 'Igienizare Dentară',
    description: 'Curățare profesională și prevenție pentru sănătatea dentară.',
    features: [
      'Detartraj ultrasunete',
      'Air Flow',
      'Fluorizare',
      'Consiliere igienă',
    ],
    color: 'from-aqua-500 to-primary-500',
    image: '/images/services/igienizare.jpg',
  },
]

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allServices.map((service, index) => {
        const IconComponent = service.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
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

            {/* Content Section */}
            <div className="p-8">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <HiCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/programari"
                  className="inline-flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-primary-600 to-aqua-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  <HiCalendar className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  <span>Programează-te</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

