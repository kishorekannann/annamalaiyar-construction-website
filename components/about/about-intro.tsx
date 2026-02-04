"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function AboutIntro() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Annamalaiyar Construction Office"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-primary/20 rounded-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="Who We Are"
              title="Welcome to Annamalaiyar Construction"
            />

            <div className="space-y-4 mt-6">
              <p className="text-muted-foreground leading-relaxed">
                Annamalaiyar Construction is a trusted local builder in Tirupur, committed to 
                delivering quality construction services with integrity and customer satisfaction. 
                With over a decade of experience, we have built a reputation for excellence in 
                residential and commercial construction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of skilled professionals brings expertise, dedication, and attention to 
                detail to every project. We believe in transparent communication, fair pricing, 
                and delivering projects on time.
              </p>
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg"
            >
              <Quote className="h-8 w-8 text-primary mb-3" />
              <p className="text-foreground font-medium italic">
                &ldquo;We don&apos;t just build structures — we create homes and spaces where 
                life grows and dreams take shape.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
