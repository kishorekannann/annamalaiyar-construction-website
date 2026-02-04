"use client"

import { motion } from "framer-motion"
import { Eye, Target } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function AboutVisionMission() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Our Purpose"
          title="Vision & Mission"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl shadow-lg border border-border"
          >
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)] text-card-foreground">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become one of the most trusted construction companies in Tirupur by 
              delivering affordable, modern, and sustainable construction solutions that 
              exceed our clients&apos; expectations.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-8 rounded-2xl shadow-lg border border-border"
          >
            <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)] text-card-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide high-quality construction services with transparency, timely 
              delivery, and strong client relationships. We strive to build lasting 
              partnerships based on trust and mutual respect.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
