"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import {
  Compass,
  Home,
  Paintbrush,
  Wrench,
  Lightbulb,
  Droplets,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"

const services = [
  {
    icon: Compass,
    title: "Project Planning",
    description:
      "Expert consultation and planning to bring your vision to life with detailed blueprints.",
  },
  {
    icon: Home,
    title: "Foundation Work",
    description:
      "Strong, reliable foundations built to last using quality materials and techniques.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "Beautiful interior solutions that combine aesthetics with functionality.",
  },
  {
    icon: Wrench,
    title: "Renovation",
    description:
      "Transform your existing space with our professional renovation services.",
  },
  {
    icon: Lightbulb,
    title: "Electrical Work",
    description:
      "Safe and efficient electrical installations by certified professionals.",
  },
  {
    icon: Droplets,
    title: "Plumbing Work",
    description:
      "Complete plumbing solutions with quality fittings and expert installation.",
  },
]

export function HomeServices() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            label="Our Services"
            title="What We Offer"
            description="Comprehensive construction services tailored to your needs"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <Link href="/services" className="inline-flex items-center gap-2">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
