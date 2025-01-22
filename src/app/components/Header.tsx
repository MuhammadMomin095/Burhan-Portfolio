"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/Services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-90"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-600 cursor-pointer">
            <motion.span whileHover={{ scale: 1.1 }}>MY PORTFOLIO</motion.span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`cursor-pointer ${pathname === item.path ? "text-red-600" : "text-white"}`}
              >
                <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            Menu
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-2 cursor-pointer ${pathname === item.path ? "text-red-600" : "text-white"}`}
                onClick={() => setIsOpen(false)}
              >
                <motion.span whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

