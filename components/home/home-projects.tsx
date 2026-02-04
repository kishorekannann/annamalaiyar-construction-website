"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

const featuredProjects = [
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
]

export function HomeProjects() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <SectionHeading
                        label="Our Projects"
                        title="Featured Work"
                        description="Explore our portfolio of successfully completed construction projects"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                            <Link href="/projects" className="inline-flex items-center gap-2">
                                View All Projects
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link href="/projects">
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                        <span className="text-xs text-white/70 uppercase tracking-wider mb-1">
                                            {project.category}
                                        </span>
                                        <h3 className="text-base font-semibold text-white font-[family-name:var(--font-heading)] line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                                            <MapPin className="h-3 w-3" />
                                            {project.location}
                                        </div>
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        <ArrowRight className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
