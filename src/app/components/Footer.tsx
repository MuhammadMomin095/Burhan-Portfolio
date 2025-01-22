"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-[#06141B] via-black to-black text-white py-12">
      <div className="container mx-auto px-14">
        
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">PORTFOLIO</h3>
            <p className="text-gray-400">Premium tattoo artistry in the heart of the city.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} passHref>
                    <motion.div
                      className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Nazimabad</p>
            <p className="text-gray-400">Karachi, 74600</p>
            <p className="text-gray-400">Phone: 0318 7648810</p>
            <p className="text-gray-400">Email: burhan77gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {currentYear}  All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

