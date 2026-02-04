"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-primary-foreground/70 text-sm tracking-wider uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-heading)] text-balance">
            Building Dreams Since Day One
          </h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            At Annamalaiyar Construction, we believe in creating spaces that inspire and endure. 
            Our commitment to quality and customer satisfaction has made us a trusted name in Tirupur.
          </p>
        </motion.div>
      </div>
      
      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
