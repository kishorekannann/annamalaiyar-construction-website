"use client"

import {
  Compass,
  Building,
  Warehouse,
  Paintbrush,
  Grid3X3,
  DoorOpen,
  LayoutGrid,
  Lightbulb,
  Droplets,
  Wrench,
  Home,
} from "lucide-react"
import { ServiceCard } from "@/components/service-card"

const services = [
  {
    icon: Compass,
    title: "Project Planning & Design Consultation",
    description:
      "Expert consultation to understand your requirements, budget, and vision. We create detailed blueprints and 3D visualizations.",
  },
  {
    icon: Building,
    title: "Foundation Work",
    description:
      "Strong and reliable foundations built using quality materials and proven techniques to ensure structural integrity.",
  },
  {
    icon: Warehouse,
    title: "Basement Construction",
    description:
      "Professional basement construction with proper waterproofing and ventilation for optimal usability.",
  },
  {
    icon: Paintbrush,
    title: "Interior & Exterior Design",
    description:
      "Beautiful interior and exterior solutions that combine aesthetics with functionality for modern living.",
  },
  {
    icon: Grid3X3,
    title: "Grill Work",
    description:
      "Custom-designed security grills and decorative metalwork that enhance safety without compromising style.",
  },
  {
    icon: DoorOpen,
    title: "Windows & Door Work",
    description:
      "Quality windows and doors installation with modern designs, proper fitting, and durable materials.",
  },
  {
    icon: LayoutGrid,
    title: "Tile Works",
    description:
      "Expert tile installation for floors, walls, and bathrooms with precision cutting and perfect alignment.",
  },
  {
    icon: Lightbulb,
    title: "Electrical Work",
    description:
      "Safe and efficient electrical installations by certified professionals, including wiring, switches, and fittings.",
  },
  {
    icon: Droplets,
    title: "Plumbing Work",
    description:
      "Complete plumbing solutions with quality fittings, proper drainage, and expert installation.",
  },
  {
    icon: Wrench,
    title: "Renovation & Maintenance",
    description:
      "Transform your existing space with our professional renovation services. We handle repairs and upgrades.",
  },
  {
    icon: Home,
    title: "Turnkey Construction",
    description:
      "Complete end-to-end construction solution from land selection to key handover. One-stop for all your needs.",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
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
