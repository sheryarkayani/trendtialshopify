'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Zap, Package, BarChart } from 'lucide-react'
import { ServiceCard } from './ServiceCard'

// Services data
const services = [
  { icon: ShoppingBag, title: 'Store Building', description: 'Custom Shopify store development tailored to your brand' },
  { icon: Zap, title: 'Product Hunting', description: 'Discover trending products to boost your sales' },
  { icon: BarChart, title: 'Ads Management', description: 'Optimize your ad campaigns for maximum ROI' },
  { icon: Package, title: 'Order Fulfillment', description: 'Streamline your order processing and shipping' },
]

// Animation variants
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-gradient-to-br from-[#008060] to-[#005740] text-white py-20 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 bg-cover bg-center" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
              animate={{ opacity: 0.3, scale: Math.random() * 1.5 + 0.5 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute w-2 h-2 bg-white rounded-full blur-sm"
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading animation */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300 shadow-lg shadow-green-800/30"
        >
          Our Services
        </motion.h2>

        {/* Services grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <ServiceCard {...service} />
              
              {/* Hover effect */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#008060] to-[#005740] opacity-40 rounded-lg"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated wave effect */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f3f3f3] to-transparent opacity-70"
        initial={{ y: 20 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
