import React from 'react'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import ServicesSection  from '../components/ServicesSection'
import { SuccessSection } from '../components/SuccessSection'
import  TestimonialsSection  from '../components/TestimonialsSection'
import { CaseStudiesSection } from '../components/CaseStudiesSection'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#212326]">
      <Header />
      <main>
        <HeroSection />
        <SuccessSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;