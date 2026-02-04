import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Annamalaiyar Construction for your construction needs in Tirupur. Request a free quote or schedule a consultation.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}
