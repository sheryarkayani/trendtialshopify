import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg"
    >
      <div className="container mx-auto py-4 px-4">
        <nav className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <ShoppingBag className="w-8 h-8 text-[#008060]" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#008060] to-[#00a86b]">
              Trendtial
            </span>
          </motion.div>

          <ul className="hidden md:flex space-x-6">
            {['Services', 'Success', 'Case Studies', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#008060] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#008060] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#004c3f] transition-colors duration-300 shadow-md"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#008060]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {['Services', 'Success', 'Case Studies', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[#008060] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
