'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  { image: "/a.jpg", title: "Floral Sleeve" },
  { image: "/b.jpg", title: "Geometric Back Piece" },
  { image: "/c.jpg", title: "Watercolor Portrait" },
  { image: "/a.jpg", title: "Traditional Chest Piece" },
  { image: "/b.jpg", title: "Minimalist Linework" },
  { image: "/c.jpg", title: "Realistic Animal" },
]

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
    <img src="i.jpg" className="absolute inset-0 object-cover z-0" alt="Background" />
    <section id="portfolio" className="relative py-20 z-10 ">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Our Work
        </motion.h2>
  
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center h-[400px]">
            {portfolioItems.map((item, index) => {
              const position = (index - currentIndex + portfolioItems.length) % portfolioItems.length;
              const isCenter = position === 0;
              const xOffset = position === 0 ? 0 : position < 3 ? -100 * position : 100 * (5 - position);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: xOffset }}
                  animate={{
                    opacity: isCenter ? 1 : 0.7,
                    x: xOffset,
                    scale: isCenter ? 1.1 : 1,
                    zIndex: isCenter ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-64 h-80 ${isCenter ? 'z-10' : 'z-0'}`}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"style={{ boxShadow: "4px 4px 40px #06141B, -4px -4px 40px #06141B" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg"
                  >
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
  
        <div className="flex justify-center mt-8 space-x-2">
          {portfolioItems.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-red-600' : 'bg-gray-600'}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
  
  )
}

