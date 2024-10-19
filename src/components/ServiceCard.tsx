'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.1, rotateY: 10, boxShadow: '0 8px 20px rgba(0, 128, 96, 0.4)' }}
      className="bg-white bg-opacity-5 p-8 rounded-xl backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-300 border border-white border-opacity-10 group"
    >
      {/* Icon animation */}
      <motion.div 
        className="flex items-center justify-center mb-6 relative"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white p-4 rounded-full relative z-10 shadow-md">
          <Icon className="w-10 h-10 text-[#006241]" />
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#008060] to-[#005740] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          initial={{ scale: 0.7 }}
          whileHover={{ scale: 1.3 }}
        />
      </motion.div>

      {/* Title & description animation */}
      <h3 className="text-2xl font-bold mb-2 text-center group-hover:text-green-300 transition-colors duration-300">{title}</h3>
      <p className="text-center text-white text-opacity-80 group-hover:text-opacity-100 transition-opacity duration-300">{description}</p>

      {/* Animated underline */}
      <motion.div
        className="w-0 h-1 bg-green-300 mx-auto mt-4"
        initial={{ width: 0 }}
        whileHover={{ width: '80%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
