import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: string
  duration?: number
  prefix?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 2, prefix = '' }) => {
  const nodeRef = useRef(null)
  const controls = useAnimation()
  const inView = useInView(nodeRef, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } })
      let start = 0
      const end = parseInt(target)
      const increment = end / 100
      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, duration * 10)
      return () => clearInterval(timer)
    }
  }, [controls, inView, target, duration])

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="text-5xl font-bold text-[#008060]"
    >
      {prefix}{count}
    </motion.span>
  )
}