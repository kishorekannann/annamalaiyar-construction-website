"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Modern Villa Residence",
    location: "Tirupur",
    category: "Completed",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Luxury Duplex Home",
    location: "Tirupur",
    category: "Completed",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Commercial Office Complex",
    location: "Tirupur",
    category: "Ongoing",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Contemporary Bungalow",
    location: "Tirupur",
    category: "Completed",
    image: "/images/projects/project-4.jpg",
  },
  {
    id: 5,
    title: "Premium Apartments",
    location: "Tirupur",
    category: "Ongoing",
    image: "/images/projects/project-5.jpg",
  },
  {
    id: 6,
    title: "Classic Modern Home",
    location: "Tirupur",
    category: "Completed",
    image: "/images/projects/project-6.jpg",
  },
]

const categories = ["All", "Completed", "Ongoing"]

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject)
    : -1

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1].id)
    }
  }

  const currentProject = projects.find((p) => p.id === selectedProject)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white/70 uppercase tracking-wider mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white font-[family-name:var(--font-heading)]">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-white/80 text-sm mt-2">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Gallery */}
      <AnimatePresence>
        {selectedProject && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedProject(null)}
              aria-label="Close gallery"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <button
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            )}

            {currentIndex < filteredProjects.length - 1 && (
              <button
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-contain"
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs text-white/70 uppercase tracking-wider">
                  {currentProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                  {currentProject.title}
                </h3>
                <div className="flex items-center gap-1 text-white/80 mt-2">
                  <MapPin className="h-4 w-4" />
                  {currentProject.location}
                </div>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentIndex + 1} / {filteredProjects.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
