import { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGallery } from "@/components/projects/projects-gallery"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of completed residential and commercial construction projects in Tirupur. See our quality workmanship in action.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
    </>
  )
}
