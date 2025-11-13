'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi'

const contactSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  email: z.string().email('Adresa de email nu este validă'),
  phone: z.string().min(10, 'Numărul de telefon nu este valid'),
  subject: z.string().min(3, 'Subiectul trebuie să aibă cel puțin 3 caractere'),
  message: z.string().min(10, 'Mesajul trebuie să aibă cel puțin 10 caractere'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulare trimitere formular (înlocuiește cu API call real)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
    >
      <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Trimite-ne un Mesaj</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nume Complet *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
            placeholder="Introdu numele tău"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
            placeholder="email@exemplu.ro"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Telefon *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
            placeholder="0724 481 200"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subiect *
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
            placeholder="Subiectul mesajului"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Mesaj *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none`}
            placeholder="Scrie mesajul tău aici..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
          >
            <HiCheckCircle className="w-5 h-5" />
            <span>Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
          >
            <HiXCircle className="w-5 h-5" />
            <span>A apărut o eroare. Vă rugăm să încercați din nou sau să ne sunați direct.</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-600 to-aqua-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
        </button>
      </form>
    </motion.div>
  )
}

