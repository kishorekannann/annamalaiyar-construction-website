"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)] text-foreground text-balance">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Every project is unique. Contact us to discuss your specific requirements 
            and get a personalized quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>
      </div>
    </section>
  )
}
