import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Users, Star } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004c3f] py-8">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-[#a6f0c6]">
            <Globe className="w-6 h-6" />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-[#a6f0c6]">
            <Users className="w-6 h-6" />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-[#a6f0c6]">
            <Star className="w-6 h-6" />
          </motion.a>
        </div>
        <p>&copy; 2024 Trendtial - Official Shopify Partner in Pakistan. All rights reserved.</p>
      </div>
    </footer>
  )
}