"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Tirupur, Tamil Nadu", "India"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@annamalaiyarconstruction.com", "support@annamalaiyarconstruction.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
]

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-heading)] text-foreground">
              Contact Information
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to start your construction project? Reach out to us through any of 
              the following methods. We&apos;re here to help you build your dream.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 rounded-xl overflow-hidden border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40216346498!2d77.2627458!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0754f0001%3A0x4d01e8f5b8b2a4c7!2sTirupur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Annamalaiyar Construction Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
