"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header";


const services = [
  {
    icon: "🎨",
    title: "Custom Designs",
    description: "Unique tattoos tailored to your vision",
  },
  {
    icon: "🖌️",
    title: "Cover-Ups",
    description: "Transform old tattoos into new art",
  },
  {
    icon: "✨",
    title: "Touch-Ups",
    description: "Revitalize and refresh existing tattoos",
  },
  {
    icon: "🔬",
    title: "Laser Removal",
    description: "Safe and effective tattoo removal",
  },
  {
    icon: "🖼️",
    title: "Tattoo Design",
    description: "Professional designs for your next tattoo",
  },
]

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <Header />
    <div className="relative min-h-screen">
      <Image
        src="/n.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-80"
      />
      <div className="relative z-10 min-h-screen bg-black bg-opacity-50 text-white py-40">
        <div className="container mx-auto px-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16"
          >
            Our Services
          </motion.h1>

          <div className="relative overflow-hidden">
            <div className="flex justify-center items-center h-[300px]">
              {services.map((service, index) => {
                const position = (index - currentIndex + services.length) % services.length
                const isCenter = position === 0
                const xOffset = position === 0 ? 0 : position < 3 ? -100 * position : 100 * (5 - position)
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
                    className={`absolute bg-gray-900 border border-gray-800 p-6 text-center rounded-lg h-64 lg:w-full max-w-sm ${
                      isCenter ? "z-10" : "z-0"
                    }`}
                    style={{ boxShadow: "14px 80px 62px #06141B, -8px -80px 62px #06141B" }}
                  >
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-red-600">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-600"}`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

