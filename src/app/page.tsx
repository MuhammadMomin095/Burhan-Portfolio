"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <main className="min-h-screen bg-black text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-red-600 transform-origin-0" style={{ scaleX }} />
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Contact />
    
    </main>
  )
}

