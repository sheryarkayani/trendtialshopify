import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

interface CaseStudyCardProps {
  name: string
  revenue: string
  growth: string
  image: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ name, revenue, growth, image }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-white text-xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {name}
          </motion.h3>
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-full p-2"
            whileHover={{ scale: 1.1, rotate: 90 }}
          >
            <ArrowRight className="text-white" size={20} />
          </motion.div>
        </motion.div>
      </div>
      <div className="p-6">
        <motion.div
          className="flex justify-between items-center mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div variants={fadeInUp} className="text-[#6b7177]">
            Revenue
            <span className="block text-2xl font-bold text-[#212326]">${revenue}</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-right">
            Growth
            <span className="block text-2xl font-bold text-[#008060]">{growth}</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full bg-gray-200 h-2 rounded-full overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#008060] to-emerald-400"
            initial={{ width: 0 }}
            animate={{ width: growth }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-2"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TrendingUp className="text-[#008060]" size={20} />
      </motion.div>
    </motion.div>
  )
}
