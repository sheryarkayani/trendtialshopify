import React, { useEffect, useRef } from 'react'
import { AnimatedCounter } from './AnimatedCounter'
import { motion, useInView } from 'framer-motion'

export const SuccessSection: React.FC = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="success" className="py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold mb-16 relative inline-block"
        >
          <span className="text-emerald-600">Our Success</span>
          <br />
          <span className="text-gray-800">in </span>
          <span className="text-red-600 relative">
            Numbers
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,5 Q50,0 100,5 T200,5"
                fill="none"
                stroke="#DC2626"
                strokeWidth="2"
              />
            </motion.svg>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { target: "200", prefix: "+", label: "Stores Built", icon: "🏪" },
            { target: "50000", prefix: "+", label: "Orders Fulfilled", icon: "📦" },
            { target: "98", prefix: "", label: "Client Satisfaction %", icon: "😊" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
                <div className="text-6xl mb-4">{item.icon}</div>
                <AnimatedCounter target={item.target} prefix={item.prefix} />
                <p className="text-xl text-[#6b7177] mt-4 font-semibold">{item.label}</p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="absolute -z-10 inset-0 bg-[#212326] opacity-10 rounded-lg transform rotate-3"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16"
        >
          <a href="#" className="inline-block bg-[#212326] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
            Learn More About Our Success
          </a>
        </motion.div>
      </div>
    </section>
  )
}
