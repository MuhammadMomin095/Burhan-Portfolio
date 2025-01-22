"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
    <div className="relative min-h-screen">
      {/* Ensure parent has 'relative' position */}
      <div className="relative w-full h-full">
        <Image
          src="/d.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-90"
        />
      </div>
      <div className="container z-10 relative mx-auto px-16 py-40 bg-gradient-to-r from-black via-black to-[#06141B]">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/1.JPG"
              alt="Tattoo Studio"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: "62px 80px 80px #06141B, -62px -80px 80px #06141B" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg">
              Berger Tattoo Studio is a premier destination for high-quality tattoos and exceptional artistry. Our team
              of skilled artists is dedicated to bringing your vision to life with precision and creativity.
            </p>
            <p className="text-lg">
              Founded in 2010, we have been at the forefront of the tattoo industry, constantly pushing boundaries and
              setting new standards for quality and innovation.
            </p>
            <p className="text-lg">
              At Berger, we believe that every tattoo tells a story. Our mission is to help you tell yours in the most
              beautiful and meaningful way possible.
            </p>
            <p className="text-lg">
              Berger Tattoo Studio is a premier destination for high-quality tattoos and exceptional artistry. Our team
              of skilled artists is dedicated to bringing your vision to life with precision and creativity.
            </p>
            <p className="text-lg">
              Founded in 2010, we have been at the forefront of the tattoo industry, constantly pushing boundaries and
              setting new standards for quality and innovation.
            </p>
            <p className="text-lg">
              At Berger, we believe that every tattoo tells a story. Our mission is to help you tell yours in the most
              beautiful and meaningful way possible.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}
