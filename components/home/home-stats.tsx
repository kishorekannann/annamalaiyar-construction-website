"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Expert Team Members" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
      {count}
      {suffix}
    </span>
  )
}

export function HomeStats() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-primary-foreground">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-primary-foreground/70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
