import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ArrowRight, ArrowLeft, ExternalLink, ChevronDown } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { useInView } from 'react-intersection-observer'
import watchstoreImage from '../assets/Images/watchstore.png';
import beautybakrieImage from '../assets/Images/beautybakrie.png';
import petluxeImage from '../assets/Images/petluxe.png';
import lafahImage from '../assets/Images/lafah.png';
import coffeeImage from '../assets/Images/coffee.png';
import skcosmeticsImage from '../assets/Images/skcosmetics.png';
import kitchenImage from '../assets/Images/kitchen.png';
import neonImage from '../assets/Images/neon.png';
import partyImage from '../assets/Images/party.png';

const caseStudies = [
  {
    image: watchstoreImage,
    heading: 'Watch Direct',
    subheading: 'Premium Watches & Accessories',
    revenue: '1.2M',
    growth: '450%',
    description: 'Watch Direct saw a significant boost in sales after implementing our custom Shopify solutions.',
  },
  {
    image: beautybakrieImage,
    heading: 'Beauty Bakerie',
    subheading: 'Cosmetics That Inspire',
    revenue: '2.5M',
    growth: '600%',
    description: 'Our tailored marketing strategies helped Beauty Bakerie reach a wider audience and increase conversions.',
  },
  {
    image: petluxeImage,
    heading: 'Pet Luxe',
    subheading: 'Pet Care & Accessories',
    revenue: '800K',
    growth: '300%',
    description: 'Pet Luxe experienced rapid growth with our optimized product pages and streamlined checkout process.',
  },
  {
    image: lafahImage,
    heading: 'Lafah Scarf',
    subheading: 'Trendy Hijabs & Scarves',
    revenue: '1.5M',
    growth: '400%',
    description: 'Lafah Scarf expanded their market reach globally with our international shipping and currency solutions.',
  },
  {
    image: coffeeImage,
    heading: 'Dona Fello',
    subheading: 'Delicious Coffee & Sweets',
    revenue: '950K',
    growth: '250%',
    description: 'Dona Fellos subscription model, implemented by our team, led to consistent revenue growth.',
  },
  {
    image: skcosmeticsImage,
    heading: 'SK Cosmetics',
    subheading: 'Beauty Essentials & Makeup',
    revenue: '3M',
    growth: '700%',
    description: 'SK Cosmetics leveraged our influencer marketing strategies to become a leader in the beauty industry.',
  },
  {
    image: kitchenImage,
    heading: 'My Kitchen',
    subheading: 'Kitchenware & Home Essentials',
    revenue: '1.8M',
    growth: '500%',
    description: 'My Kitchens sales skyrocketed after we implemented advanced product filtering and recommendation systems.',
  },
  {
    image: neonImage,
    heading: 'NEON',
    subheading: 'Innovative Gadgets & Accessories',
    revenue: '2.2M',
    growth: '550%',
    description: 'NEONs conversion rates improved dramatically with our optimized mobile shopping experience.',
  },
  {
    image: partyImage,
    heading: 'Kids Essentials',
    subheading: 'Stay Tuned for More!',
    revenue: '1.1M',
    growth: '350%',
    description: 'Kids Essentials saw a surge in repeat customers after implementing our loyalty program solution.',
  },
]

const CaseStudyCard: React.FC<{
  image: string
  heading: string
  subheading: string
  revenue: string
  growth: string
  onClick: () => void
  index: number
}> = ({ image, heading, subheading, revenue, growth, onClick, index }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
        hidden: { opacity: 0, y: 50 }
      }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform perspective-1000"
      onClick={onClick}
    >
      <div className="relative group">
        <img src={image} alt={heading} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white font-semibold"
          >
            View Details
          </motion.span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-[#212326]">{heading}</h3>
        <p className="text-[#6b7177] mb-4">{subheading}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <p className="text-[#6b7177]">Revenue: ${revenue}</p>
            <p className="text-[#008060] font-semibold">Growth: {growth}</p>
          </div>
          <motion.div
            className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 90 }}
          >
            <ArrowRight className="text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export const CaseStudiesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + caseStudies.length) % caseStudies.length)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-[#f3f3f3] to-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold mb-16 relative inline-block text-center w-full"
        >
          <span className="text-emerald-600">Our Success</span>
          <br />
          <span className="text-gray-800">explained using </span>
          <span className="text-red-600 relative">
            Case Studies
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
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
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`grid ${isExpanded ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'} gap-8`}
            >
              {(isExpanded ? caseStudies : caseStudies.slice(currentIndex, currentIndex + 3)).map((study, index) => (
                <CaseStudyCard
                  key={index}
                  {...study}
                  onClick={() => setSelectedCase(study)}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          {!isExpanded && (
            <>
              <motion.div
                className="absolute top-1/2 -left-16 transform -translate-y-1/2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/80 backdrop-blur-sm rounded-full w-12 h-12"
                  onClick={prevCase}
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-16 transform -translate-y-1/2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/80 backdrop-blur-sm rounded-full w-12 h-12"
                  onClick={nextCase}
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </motion.div>
            </>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 space-y-4"
        >
          <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <a href="#contact">
              Start Your Success Story <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button variant="outline" onClick={toggleExpand} className="ml-4 px-6 py-2 rounded-full">
            {isExpanded ? 'Show Less' : 'Show All'} <ChevronDown className={`ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </Button>
        </motion.div>
      </div>
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl bg-gradient-to-br from-white to-gray-100">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-emerald-600">{selectedCase?.heading}</DialogTitle>
            <DialogDescription className="text-lg text-gray-600">{selectedCase?.subheading}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={selectedCase?.image}
                alt={selectedCase?.heading}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white text-2xl font-bold">Revenue: ${selectedCase?.revenue}</p>
                  <p className="text-emerald-400 text-xl font-semibold">Growth: {selectedCase?.growth}</p>
                </div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {selectedCase?.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-end"
            >
              <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#contact">
                  Get Started <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
