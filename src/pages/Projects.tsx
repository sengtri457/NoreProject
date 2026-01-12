import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import useLenis from "../hooks/useLenis";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const filters = {
  type: ["All", "Residential", "Commercial", "Cultural", "Hospitality"],
  status: ["All", "Completed", "In Progress", "Concept"],
};

const projects = [
  {
    id: 1,
    title: "Villa Serenity",
    type: "Residential",
    status: "Completed",
    year: "2024",
    location: "Malibu, CA",
    image: project1,
    area: "12,500",
    description:
      "A stunning coastal residence that seamlessly blends indoor and outdoor living spaces with panoramic ocean views.",
    architect: "Sarah Mitchell",
    services: ["Architecture", "Interior Design", "Landscape"],
    pics: "4 pics",
  },
  {
    id: 2,
    title: "Apex Tower",
    type: "Commercial",
    status: "Completed",
    year: "2023",
    location: "Manhattan, NY",
    image: project2,
    area: "85,000",
    description:
      "A 45-story mixed-use tower featuring state-of-the-art office spaces and retail environments in the heart of Manhattan.",
    architect: "Michael Chen",
    services: ["Architecture", "Urban Planning", "Structural Engineering"],
    pics: "6 pics",
  },
  {
    id: 3,
    title: "Horizon Gallery",
    type: "Cultural",
    status: "Completed",
    year: "2023",
    location: "Los Angeles, CA",
    image: project3,
    area: "35,000",
    description:
      "A contemporary art gallery designed to showcase large-scale installations with flexible exhibition spaces and natural lighting.",
    architect: "Elena Rodriguez",
    services: ["Architecture", "Exhibition Design", "Lighting Design"],
    pics: "8 pics",
  },
  {
    id: 4,
    title: "Azure Resort",
    type: "Hospitality",
    status: "In Progress",
    year: "2025",
    location: "Miami, FL",
    image: project1,
    area: "120,000",
    description:
      "A luxury beachfront resort featuring 200 suites, multiple dining venues, spa facilities, and conference centers.",
    architect: "David Park",
    services: ["Architecture", "Interior Design", "Hospitality Consulting"],
    pics: "12 pics",
  },
  {
    id: 5,
    title: "The Meridian",
    type: "Commercial",
    status: "Completed",
    year: "2022",
    location: "Chicago, IL",
    image: project2,
    area: "65,000",
    description:
      "A sustainable office building with LEED Platinum certification, featuring rooftop gardens and advanced energy systems.",
    architect: "James Wilson",
    services: ["Architecture", "Sustainable Design", "MEP Engineering"],
    pics: "5 pics",
  },
  {
    id: 6,
    title: "Casa Verde",
    type: "Residential",
    status: "Concept",
    year: "2025",
    location: "Austin, TX",
    image: project3,
    area: "8,500",
    description:
      "An eco-friendly family home integrating passive solar design, rainwater harvesting, and native landscaping.",
    architect: "Ana Martinez",
    services: ["Architecture", "Sustainable Design", "Landscape Architecture"],
    pics: "3 pics",
  },
];

const Projects = () => {
  useLenis();
  const [activeType, setActiveType] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const typeMatch = activeType === "All" || project.type === activeType;
    const statusMatch =
      activeStatus === "All" || project.status === activeStatus;
    return typeMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container-architectural">
            <TextReveal>
              <span className="label-uppercase mb-4 block">Our Portfolio</span>
            </TextReveal>
            <TextRevealByLine delay={0.1}>
              <h1 className="heading-display mb-8">
                Featured <span className="text-primary">Projects</span>
              </h1>
            </TextRevealByLine>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-12">
          <div className="container-architectural">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {filters.type.map((type) => (
                  <motion.button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all ${
                      activeType === type
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
              <div className="w-px h-8 bg-border hidden md:block" />
              <div className="flex flex-wrap gap-2">
                {filters.status.map((status) => (
                  <motion.button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={`px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all ${
                      activeStatus === status
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {status}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid - Perfect Grid Layout like Reference */}
        <section className="pb-20 md:pb-32">
          <div className="container-architectural">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="group relative aspect-[4/3] overflow-hidden cursor-pointer border border-border/50"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>

                    {/* Dark Overlay - Always visible but intensifies on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 0.85 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                      {/* Top Section - Category & Type */}
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <div className="text-xs md:text-sm font-bold text-white/80 uppercase tracking-[0.2em] mb-2">
                          {project.type} & Entertainment
                        </div>
                      </motion.div>

                      {/* Center Section - Title */}
                      <motion.div
                        className="flex-1 flex items-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                      >
                        <div>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>

                          {/* Location Badge - like in reference image */}
                          <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20"
                            initial={{ x: -20, opacity: 0 }}
                            whileHover={{
                              x: 0,
                              opacity: 1,
                              backgroundColor: "rgba(255,255,255,0.15)",
                            }}
                            transition={{ delay: index * 0.05 + 0.3 }}
                          >
                            <span className="text-white text-sm font-medium">
                              {project.location}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Bottom Section - Pics Count */}
                      <motion.div
                        className="flex items-center justify-between"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.4 }}
                      >
                        <span className="text-sm text-white/70 uppercase tracking-wider">
                          {project.pics}
                        </span>

                        {/* Arrow indicator on hover */}
                        <motion.div
                          className="w-10 h-10 flex items-center justify-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Hover Border Effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Corner Accent - Top Right */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "top right" }}
                    />

                    {/* Corner Accent - Bottom Left */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      style={{ transformOrigin: "bottom left" }}
                    />

                    {/* Status Badge - Bottom Right Corner */}
                    <motion.div
                      className="absolute bottom-6 right-6"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${
                          project.status === "Completed"
                            ? "bg-emerald-500/90 text-white"
                            : project.status === "In Progress"
                            ? "bg-amber-500/90 text-white"
                            : "bg-slate-500/90 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-muted-foreground text-lg mb-4">
                  No projects match your current filters.
                </p>
                <motion.button
                  onClick={() => {
                    setActiveType("All");
                    setActiveStatus("All");
                  }}
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-[90vh] bg-background overflow-y-auto"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="sticky top-4 right-4 ml-auto z-20 w-14 h-14 bg-background/95 backdrop-blur-sm border-2 border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-xl"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Hero Image */}
              <div className="relative w-full h-[50vh] overflow-hidden -mt-[72px]">
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Floating Info Card */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:max-w-xl bg-background/95 backdrop-blur-sm p-8 border border-border shadow-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">
                      {selectedProject.type}
                    </span>
                    <span className="w-12 h-px bg-primary" />
                    <span
                      className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        selectedProject.status === "Completed"
                          ? "bg-emerald-500 text-white"
                          : selectedProject.status === "In Progress"
                          ? "bg-amber-500 text-white"
                          : "bg-slate-500 text-white"
                      }`}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Project Details Grid */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Location
                    </h3>
                    <p className="text-lg font-semibold">
                      {selectedProject.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Year
                    </h3>
                    <p className="text-lg font-semibold">
                      {selectedProject.year}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Area
                    </h3>
                    <p className="text-lg font-semibold">
                      {selectedProject.area} sq ft
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Lead Architect
                    </h3>
                    <p className="text-lg font-semibold">
                      {selectedProject.architect}
                    </p>
                  </div>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                    Services Provided
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.services.map((service, index) => (
                      <motion.span
                        key={service}
                        className="px-6 py-3 bg-muted text-foreground font-semibold border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Projects;
