"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/a.jpg"
          alt="Tattoo Artist"
          layout="fill"
          objectFit="cover"
          priority
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="text-red-600">CONTENT</span>
            <span className="text-red-600 text-2xl">✕</span>
            <span className="text-red-600">WRITER</span>
          </motion.div>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6"style={{ textShadow: "14px 8px 40px #658da1, -8px -8px 40px #658da1" }}
          >
            MUHAMMAD BURHAN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-xl mb-8 max-w-md mx-auto"
          >
            Hi I am a Content Writer
          </motion.p>
          <motion.div className="flex justify-center space-x-4">
            <Link href="/about" passHref>
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-600 text-white px-8 py-3 rounded text-sm uppercase tracking-wider cursor-pointer"
              >
                Learn More
              </motion.div>
            </Link>
            <Link href="/portfolio" passHref>
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-red-600 px-8 py-3 rounded text-sm uppercase tracking-wider cursor-pointer"
              >
                View Our Work
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

