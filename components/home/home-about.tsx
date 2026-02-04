"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

const highlights = [
  "Quality Construction",
  "Timely Delivery",
  "Transparent Pricing",
  "Expert Team",
]

export function HomeAbout() {
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
                src="/images/about-home.jpg"
                alt="Annamalaiyar Construction Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)]">10+</div>
              <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="About Us"
              title="Welcome to Annamalaiyar Construction"
              description="We are a trusted local builder in Tirupur, committed to delivering quality construction services with integrity and customer satisfaction."
            />

            <div className="grid grid-cols-2 gap-4 my-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We don&apos;t just build structures — we create homes and spaces where life grows 
              and dreams take shape. Our commitment to quality materials, skilled craftsmanship, 
              and transparent communication sets us apart.
            </p>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about" className="inline-flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
