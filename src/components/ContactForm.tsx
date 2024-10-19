import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiMail, FiMessageSquare } from 'react-icons/fi'

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="py-20 bg-[#008060] relative overflow-hidden">
      {/* Add animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-64 h-64 rounded-full bg-white absolute"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="w-48 h-48 rounded-full bg-white absolute"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ right: '15%', bottom: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-white mb-12"
        >
          Ready to Grow?
        </motion.h2>
        <AnimatePresence>
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="relative mb-6">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#008060]" />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004c3f] bg-gray-100"
                />
              </div>
              <div className="relative mb-6">
                <FiMessageSquare className="absolute left-3 top-5 text-[#008060]" />
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004c3f] bg-gray-100"
                ></motion.textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#008060] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#006048] transition-all duration-300 flex items-center justify-center"
              >
                <span>Let's Talk</span>
                <FiSend className="ml-2" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-lg text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-6xl text-[#008060] mb-4"
              >
                🎉
              </motion.div>
              <h3 className="text-2xl font-bold text-[#008060] mb-4">Thank you for reaching out!</h3>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
