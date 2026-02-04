"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-secondary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)] text-foreground text-balance">
                Ready to Build Your Dream Home?
              </h2>
              <p className="text-muted-foreground text-lg">
                Let&apos;s discuss your project requirements. Contact us today for a free consultation 
                and quote.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="tel:+91XXXXXXXXXX" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
