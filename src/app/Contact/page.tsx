"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header";


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formState)
    setIsSubmitted(true)
  }

  return (
    <div>
      <Header />
    <div className="relative min-h-screen">
      <Image src="/d.png" alt="Background" layout="fill" objectFit="cover" quality={100} priority className="opacity-80" />
      <div className="relative z-10 min-h-screen flex items-center justify-center py-40">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg"
          >
            Get in Touch
          </motion.h1>

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
              className="w-full px-6 py-5 bg-black text-white lg:rounded-full  focus:outline-none focus:ring-2 focus:ring-red-600"style={{ boxShadow: "10px 40px 20px #06141B, -20px -20px 60px #06141B" }}
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
      </div>
    </div>
    </div>
   

  )
}

