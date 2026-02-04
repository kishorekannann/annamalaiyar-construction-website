import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive construction services including project planning, foundation work, interior design, renovation, and turnkey construction solutions in Tirupur.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
