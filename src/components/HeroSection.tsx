import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, ShoppingBag, Star, TrendingUp } from 'lucide-react'
import { Button } from "../components/ui/button"
import { TypeAnimation } from 'react-type-animation'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const stats = [
  { icon: ShoppingBag, value: '200+', label: 'Stores Built' },
  { icon: Star, value: '98%', label: 'Client Satisfaction' },
  { icon: TrendingUp, value: '5+', label: 'Years of Growth' },
]

export const HeroSection: React.FC = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <section ref={ref} className="relative bg-[#008060] text-white py-16 md:py-20 overflow-hidden min-h-screen flex items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 2, straight: false },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center w-full max-w-6xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={stagger}
          className="text-center w-full px-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200"
          >
            <TypeAnimation
              sequence={[
                'Dominate Online',
                2000,
                'Transform Your Business',
                2000,
                'Elevate Your E-commerce',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <br />
            <span className="block">in Pakistan</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl mb-6 md:mb-8 max-w-xl mx-auto"
          >
            As Pakistan's premier Shopify partner, we transform your vision into a thriving online business.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#008060] hover:bg-green-100 hover:text-[#005740] transition-all duration-300 transform hover:scale-105 shadow-lg group w-full sm:w-auto"
            >
              <a href="#contact" className="flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#008060] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <a href="#case-studies" className="flex items-center justify-center">
                View Success Stories
              </a>
            </Button>
          </motion.div>
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#006f52] rounded-lg p-4 md:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-opacity-90 hover:scale-105 group"
              >
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-4 text-white transition-transform duration-300 group-hover:rotate-12" />
                <motion.span
                  className="text-2xl md:text-3xl font-bold mb-1 md:mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm md:text-base font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
