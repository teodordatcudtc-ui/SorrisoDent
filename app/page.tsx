import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import AboutPreview from '@/components/AboutPreview'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <AboutPreview />
      <Testimonials />
      <CTA />
    </>
  )
}

