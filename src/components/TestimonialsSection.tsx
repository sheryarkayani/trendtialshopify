'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, User, Quote } from 'lucide-react'
import Image from 'next/image'

// Updated testimonials array with leading slash in image paths
const testimonials = [
  {
    name: 'Zain Ahmed',
    company: 'PakFashion',
    quote: 'Trendtial has revolutionized our online presence. Our sales have skyrocketed by 400% since partnering with them!',
    rating: 5,
    image: '/assets/Images/coffee.png',
  },
  {
    name: 'Fatima Malik',
    company: 'EcoGreen Pakistan',
    quote: "Trendtial's ads management increased our ROAS from 2.5x to 9x. The results are beyond our expectations!",
    rating: 5,
    image: '/assets/Images/client2.jpeg',
  },
  {
    name: 'Hassan Raza',
    company: 'PakTech Solutions',
    quote: 'Their insights into the local market have been invaluable. Our customer engagement has improved significantly.',
    rating: 4,
    image: '/assets/Images/client3.jpeg',
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(1)
  const [imageError, setImageError] = useState(false)

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', e.currentTarget.src)
    setImageError(true)
    const imgElement = e.currentTarget
    imgElement.onerror = null // prevents looping
    imgElement.src = '/assets/Images/fallback-avatar.png'
  }

  useEffect(() => {
    console.log('Current testimonial:', testimonials[currentTestimonial])
  }, [currentTestimonial])

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-800 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/assets/patterns/circuit-board.svg')] opacity-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="text-6xl font-bold text-white mb-12 tracking-tight"
        >
          What Our Pakistani Clients Say
        </motion.h2>
        <div className="relative h-[500px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              initial={{ opacity: 0, rotateY: 90 * direction }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 * direction }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="relative w-32 h-32 mx-auto mb-8"
              >
                {imageError ? (
                  <User className="w-32 h-32 text-gray-400" />
                ) : (
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full border-4 border-emerald-300 shadow-lg"
                    onError={handleImageError}
                  />
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-emerald-300 opacity-50" />
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl italic mb-6 text-white leading-relaxed"
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.p>
                <Quote className="absolute -bottom-6 -right-6 w-12 h-12 text-emerald-300 opacity-50 transform rotate-180" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        i < testimonials[currentTestimonial].rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="font-semibold text-2xl text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-emerald-300 text-lg">
                  {testimonials[currentTestimonial].company}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-8 space-x-4"
        >
          <button
            onClick={prevTestimonial}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 transform hover:scale-110"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
