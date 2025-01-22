'use client'

import { motion } from 'framer-motion'
import { Link } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    
    <section id="about" className="relative py-20  bg-gradient-to-r from-black via-black to-[#06141B]">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Image
              src="/a.jpg"
              alt="Tattoo Machine"
              width={600}
              height={100}
              className="rounded-lg h-[550px]"style={{ boxShadow: "14px 14px 62px #06141B, -8px -8px 62px #06141B" }}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-gray-400">
              Berger Tattoo Studio is a premier destination for high-quality tattoos and exceptional artistry. Our team of skilled artists is dedicated to bringing your vision to life with precision and creativity.
            </p>
            <Link href="about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 py-2 rounded text-sm uppercase tracking-wider"
            >
              Learn More
            </motion.button>
            </Link>
            
          </div>
        </motion.div>
      </div>
    </section>
   

  )
}

