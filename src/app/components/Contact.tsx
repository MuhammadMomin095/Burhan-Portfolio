'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="relative">
    <img src="d.jpg" className="absolute justify-center flex items-center inset-0 object-cover z-0" alt="Background" />
    <section id="contact" className="relative py-20 z-10">
      <div className="container mx-auto px-14 ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-5 bg-black text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"style={{ boxShadow: "10px 40px 20px #06141B, -20px -20px 60px #06141B" }}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-5 bg-black text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"style={{ boxShadow: "10px 40px 20px #06141B, -20px -20px 60px #06141B" }}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-5 bg-black text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"style={{ boxShadow: "10px 40px 20px #06141B, -20px -20px 60px #06141B" }}
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-6 py-5 bg-black text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"style={{ boxShadow: "10px 40px 20px #06141B, -20px -20px 60px #06141B" }}
            ></textarea>
            <div className=' justify-center items-center flex '>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-44 bg-red-600 text-white py-3 rounded-full text-sm uppercase tracking-wider"
            >
              Send Message
            </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
    </div>

  )
}

