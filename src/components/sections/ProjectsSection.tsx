import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ImageReveal } from "../animations/ImageReveal";
import { TextReveal } from "../animations/TextReveal";
import { Counter } from "../animations/Counter";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    number: "01",
    title: "SBC Tower",
    category: "Commercial",
    year: "2023",
    location: "Poi Pet city",
    image: project1,
    area: "18,000",
    status: "Under Construction",
    description:
      "SBC Tower is a contemporary office building strategically located in the commercial heart of the city. Designed with a focus on sustainability, high performance and energy efficiency, maximizing natural light while ensuring occupant comfort. With state-of-the-art facilities and advanced building systems, the tower provides a sophisticated and functional environment for modern businesses. SBC Tower stands as a new vertical landmark, its refined architectural language symbolizing the evolution of urban sophistication.",
    details: {
      client: "SBC Development Corp",
      architect: "Norea Architecture & Construction Co., Ltd",
      type: "Office Building",
      floors: "15",
      parkingSpaces: "200",
    },
    gallery: [project1, project2, project3], // Multiple images for gallery
  },
  {
    id: 2,
    number: "02",
    title: "Apex Tower",
    category: "Commercial",
    year: "2023",
    location: "Manhattan, NY",
    image: project2,
    area: "85,000",
    status: "Completed",
    description:
      "A landmark commercial development featuring cutting-edge design and sustainable technologies. The tower redefines the Manhattan skyline with its innovative facade and intelligent building systems.",
    details: {
      client: "Apex Real Estate",
      architect: "Norea Architecture & Construction Co., Ltd",
      type: "Mixed-Use",
      floors: "45",
      parkingSpaces: "500",
    },
    gallery: [project2, project1, project3],
  },
  {
    id: 3,
    number: "03",
    title: "Horizon Gallery",
    category: "Cultural",
    year: "2023",
    location: "Los Angeles, CA",
    image: project3,
    area: "35,000",
    status: "Completed",
    description:
      "A stunning cultural venue that seamlessly blends art, architecture, and public space. The gallery features flexible exhibition spaces bathed in natural light, creating an inspiring environment for artists and visitors alike.",
    details: {
      client: "Los Angeles Arts Foundation",
      architect: "Norea Architecture & Construction Co., Ltd",
      type: "Cultural Center",
      floors: "3",
      parkingSpaces: "150",
    },
    gallery: [project3, project1, project2],
  },
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentGalleryIndex(0);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentGalleryIndex((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentGalleryIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section className="section-padding bg-card relative overflow-hidden">
        {/* Section Header */}
        <div className="container-architectural mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <TextReveal>
                <span className="label-uppercase mb-4 block">
                  Featured Work
                </span>
              </TextReveal>
              <TextReveal delay={0.1}>
                <h2 className="heading-large">
                  Selected <span className="text-primary">Projects</span>
                </h2>
              </TextReveal>
            </div>
            <TextReveal delay={0.2}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium tracking-wide">
                  View All Projects
                </span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </Link>
            </TextReveal>
          </div>
        </div>

        {/* Project Counter */}
        <div className="container-architectural mb-8">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl md:text-8xl font-semibold text-primary">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-2xl text-muted-foreground">/</span>
            <span className="text-2xl text-muted-foreground">
              {String(projects.length).padStart(2, "0")}
            </span>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scrollbar-architectural pb-8 px-6 md:px-12 lg:px-20 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center"
              onViewportEnter={() => setActiveIndex(index)}
              initial={{ opacity: 0.5, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="group block cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-6">
                  <ImageReveal
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"
                    delay={index * 0.1}
                    wipe={true}
                  />

                  {/* Hover Overlay */}
                  <motion.div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-medium tracking-widest uppercase text-primary">
                      View Project
                    </span>
                  </motion.div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-sm text-xs font-medium">
                    {project.status}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="heading-medium group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>{project.year}</span>
                    <span>{project.area} sq m</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="container-architectural mt-8">
          <div className="h-px bg-border relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              style={{
                width: `${((activeIndex + 1) / projects.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-6xl bg-card rounded-sm border border-border shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Column - Image Gallery */}
                <div className="relative bg-background">
                  {/* Main Image */}
                  <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full">
                    <img
                      src={selectedProject.gallery[currentGalleryIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gallery Navigation */}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>

                        {/* Gallery Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.gallery.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentGalleryIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentGalleryIndex
                                  ? "bg-primary w-8"
                                  : "bg-background/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {selectedProject.gallery.length > 1 && (
                    <div className="flex gap-2 p-4 overflow-x-auto">
                      {selectedProject.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentGalleryIndex(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
                            idx === currentGalleryIndex
                              ? "border-primary scale-105"
                              : "border-transparent opacity-50 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.title} ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column - Project Details */}
                <div className="p-8 lg:p-12 overflow-y-auto max-h-[80vh]">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                        {selectedProject.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {selectedProject.location}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      {selectedProject.title}
                    </h2>
                    <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-sm text-sm font-medium">
                      {selectedProject.status}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">Project Overview</h3>
                    <p className="body-regular text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Specifications Grid */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-sm border border-border">
                        <span className="text-xs text-muted-foreground block mb-1">
                          Year
                        </span>
                        <span className="text-lg font-semibold">
                          {selectedProject.year}
                        </span>
                      </div>
                      <div className="bg-background p-4 rounded-sm border border-border">
                        <span className="text-xs text-muted-foreground block mb-1">
                          Area
                        </span>
                        <span className="text-lg font-semibold">
                          {selectedProject.area} sq m
                        </span>
                      </div>
                      <div className="bg-background p-4 rounded-sm border border-border">
                        <span className="text-xs text-muted-foreground block mb-1">
                          Floors
                        </span>
                        <span className="text-lg font-semibold">
                          {selectedProject.details.floors}
                        </span>
                      </div>
                      <div className="bg-background p-4 rounded-sm border border-border">
                        <span className="text-xs text-muted-foreground block mb-1">
                          Parking
                        </span>
                        <span className="text-lg font-semibold">
                          {selectedProject.details.parkingSpaces}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4 border-t border-border pt-8">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">
                        Client
                      </span>
                      <span className="font-medium">
                        {selectedProject.details.client}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        Architect
                      </span>
                      <span className="font-medium text-right">
                        {selectedProject.details.architect}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        Type
                      </span>
                      <span className="font-medium">
                        {selectedProject.details.type}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <Link
                      to={`/projects/${selectedProject.id}`}
                      className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                    >
                      <span>View Full Case Study</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
