"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/hero-1.jpg",
    tagline: "CREATIVE • TRUSTED • PROFESSIONAL",
    heading: "Building Your Dream Home with Precision",
    description:
      "Annamalaiyar Construction delivers quality residential and commercial construction in Tirupur, built on trust, transparency, and skilled craftsmanship.",
  },
  {
    image: "/images/hero-2.jpg",
    tagline: "INNOVATIVE • RELIABLE • LOCAL",
    heading: "Strong Foundations for Modern Living",
    description:
      "We turn ideas into durable structures through smart planning, quality materials, and timely execution.",
  },
  {
    image: "/images/hero-3.jpg",
    tagline: "QUALITY • INTEGRITY • EXCELLENCE",
    heading: "Your Vision, Our Expertise",
    description:
      "From concept to completion, we bring your construction dreams to life with dedication and precision that stands the test of time.",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].heading}
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block text-white/80 text-sm tracking-widest mb-4">
                {slides[currentSlide].tagline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-heading)] text-balance">
                {slides[currentSlide].heading}
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
