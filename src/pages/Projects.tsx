import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TextReveal, TextRevealByLine } from '../components/animations/TextReveal';
import { ImageReveal } from '../components/animations/ImageReveal';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import useLenis from '../hooks/useLenis';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const filters = {
  type: ['All', 'Residential', 'Commercial', 'Cultural', 'Hospitality'],
  status: ['All', 'Completed', 'In Progress', 'Concept'],
};

const projects = [
  { id: 1, title: 'Villa Serenity', type: 'Residential', status: 'Completed', year: '2024', location: 'Malibu, CA', image: project1, area: '12,500' },
  { id: 2, title: 'Apex Tower', type: 'Commercial', status: 'Completed', year: '2023', location: 'Manhattan, NY', image: project2, area: '85,000' },
  { id: 3, title: 'Horizon Gallery', type: 'Cultural', status: 'Completed', year: '2023', location: 'Los Angeles, CA', image: project3, area: '35,000' },
  { id: 4, title: 'Azure Resort', type: 'Hospitality', status: 'In Progress', year: '2025', location: 'Miami, FL', image: project1, area: '120,000' },
  { id: 5, title: 'The Meridian', type: 'Commercial', status: 'Completed', year: '2022', location: 'Chicago, IL', image: project2, area: '65,000' },
  { id: 6, title: 'Casa Verde', type: 'Residential', status: 'Concept', year: '2025', location: 'Austin, TX', image: project3, area: '8,500' },
];

const Projects = () => {
  useLenis();
  const [activeType, setActiveType] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');

  const filteredProjects = projects.filter((project) => {
    const typeMatch = activeType === 'All' || project.type === activeType;
    const statusMatch = activeStatus === 'All' || project.status === activeStatus;
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
                    className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                      activeType === type
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                    className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                      activeStatus === status
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-muted-foreground hover:text-foreground border border-border'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 md:pb-32">
          <div className="container-architectural">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden mb-4">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="label-uppercase text-primary">View Project</span>
                      </div>
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                          project.status === 'Completed' ? 'bg-primary text-primary-foreground' :
                          project.status === 'In Progress' ? 'bg-secondary text-secondary-foreground' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{project.type}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="heading-small group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <span>{project.year}</span>
                        <span>{project.area} sq ft</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.p 
                className="text-center text-muted-foreground py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No projects match your current filters.
              </motion.p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
