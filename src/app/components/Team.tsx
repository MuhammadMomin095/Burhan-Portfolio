'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: "Tom Lynch",
    role: "Senior Artist",
    image: "/a.jpg"
  },
  {
    name: "Leonard Smith",
    role: "Master Artist",
    image: "/b.jpg"
  },
  {
    name: "Steven Brown",
    role: "Junior Artist",
    image: "/c.jpg"
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-black bg-gradient-to-r from-black via-black to-[#06141B]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full"style={{ boxShadow: "20px 20px 40px #06141B, -20px -20px 40px #06141B" }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-red-600 text-sm uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

