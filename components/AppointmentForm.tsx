'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiXCircle, HiCalendar } from 'react-icons/hi'

const appointmentSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  email: z.string().email('Adresa de email nu este validă'),
  phone: z.string().min(10, 'Numărul de telefon nu este valid'),
  preferredDate: z.string().min(1, 'Vă rugăm să selectați o dată'),
  preferredTime: z.string().min(1, 'Vă rugăm să selectați o oră'),
  service: z.string().min(1, 'Vă rugăm să selectați un serviciu'),
  message: z.string().optional(),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

const services = [
  'Consultație',
  'Implantologie',
  'Estetică Dentară',
  'Ortodonție',
  'Albire Dentară',
  'Tratamente Endodontice',
  'Proteză Dentară',
  'Igienizare Dentară',
  'Stomatologie Pediatrică',
  'Alt serviciu',
]

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
]

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  })

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulare trimitere formular (înlocuiește cu API call real)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      console.log('Appointment data:', data)
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

  // Get tomorrow's date as minimum date
  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-aqua-500 rounded-full flex items-center justify-center">
          <HiCalendar className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-gray-900">Formular Programare</h2>
      </div>
      
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

        <div className="grid md:grid-cols-2 gap-6">
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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Data Preferată *
            </label>
            <input
              {...register('preferredDate')}
              type="date"
              id="preferredDate"
              min={getMinDate()}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.preferredDate ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
            />
            {errors.preferredDate && (
              <p className="mt-1 text-sm text-red-500">{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
              Ora Preferată *
            </label>
            <select
              {...register('preferredTime')}
              id="preferredTime"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.preferredTime ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
            >
              <option value="">Selectează ora</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-red-500">{errors.preferredTime.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
            Serviciu Dorit *
          </label>
          <select
            {...register('service')}
            id="service"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
          >
            <option value="">Selectează serviciul</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Mesaj (Opțional)
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            placeholder="Alte detalii sau întrebări..."
          />
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
          >
            <HiCheckCircle className="w-5 h-5" />
            <span>
              Programarea a fost trimisă cu succes! Vă vom contacta în cel mai scurt timp pentru
              confirmare.
            </span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
          >
            <HiXCircle className="w-5 h-5" />
            <span>
              A apărut o eroare. Vă rugăm să încercați din nou sau să ne sunați direct la 0724 481
              200.
            </span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-600 to-aqua-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Se trimite...</span>
            </>
          ) : (
            <>
              <HiCalendar className="w-5 h-5" />
              <span>Trimite Cererea de Programare</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

