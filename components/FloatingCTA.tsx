'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCalendar, HiX } from 'react-icons/hi'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY < 100) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm border border-gray-100">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <HiX className="w-5 h-5" />
            </button>
            <div className="mb-4">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Programează-te Acum
              </h3>
              <p className="text-gray-600 text-sm">
                Oferă-ți zâmbetul pe care îl meriți. Programează o consultație astăzi!
              </p>
            </div>
            <Link
              href="/programari"
              className="inline-flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-primary-600 to-aqua-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <HiCalendar className="w-5 h-5" />
              <span>Programare Rapidă</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

