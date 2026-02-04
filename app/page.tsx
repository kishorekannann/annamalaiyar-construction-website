import { Metadata } from "next"
import { HeroSlider } from "@/components/hero-slider"
import { HomeAbout } from "@/components/home/home-about"
import { HomeServices } from "@/components/home/home-services"
import { HomeStats } from "@/components/home/home-stats"
import { HomeCTA } from "@/components/home/home-cta"

export const metadata: Metadata = {
  title: "Annamalaiyar Construction | Trusted Builders in Tirupur",
  description:
    "Annamalaiyar Construction delivers quality residential and commercial construction in Tirupur, Tamil Nadu. Built on trust, transparency, and skilled craftsmanship.",
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HomeAbout />
      <HomeServices />
      <HomeStats />
      <HomeCTA />
    </>
  )
}
