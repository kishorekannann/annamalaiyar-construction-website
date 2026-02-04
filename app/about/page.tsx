import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutVisionMission } from "@/components/about/about-vision-mission"
import { AboutProcess } from "@/components/about/about-process"
import { AboutPayment } from "@/components/about/about-payment"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Annamalaiyar Construction - a trusted local builder in Tirupur committed to quality construction with integrity and customer satisfaction.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutVisionMission />
      <AboutProcess />
      <AboutPayment />
    </>
  )
}
