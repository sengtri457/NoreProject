import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ImageReveal } from '../animations/ImageReveal';
import { TextReveal } from '../animations/TextReveal';
import { Counter } from '../animations/Counter';
import { Link } from 'react-router-dom';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Villa Serenity',
    category: 'Residential',
    year: '2024',
    location: 'Malibu, CA',
    image: project1,
    area: '12,500',
  },
  {
    id: 2,
    number: '02',
    title: 'Apex Tower',
    category: 'Commercial',
    year: '2023',
    location: 'Manhattan, NY',
    image: project2,
    area: '85,000',
  },
  {
    id: 3,
    number: '03',
    title: 'Horizon Gallery',
    category: 'Cultural',
    year: '2023',
    location: 'Los Angeles, CA',
    image: project3,
    area: '35,000',
  },
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Section Header */}
      <div className="container-architectural mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <TextReveal>
              <span className="label-uppercase mb-4 block">Featured Work</span>
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
              <span className="text-sm font-medium tracking-wide">View All Projects</span>
              <motion.svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
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
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-2xl text-muted-foreground">/</span>
          <span className="text-2xl text-muted-foreground">
            {String(projects.length).padStart(2, '0')}
          </span>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto scrollbar-architectural pb-8 px-6 md:px-12 lg:px-20 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'thin' }}
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
            <Link to={`/projects/${project.id}`} className="group block">
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
                <motion.div 
                  className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <span className="text-sm font-medium tracking-widest uppercase text-primary">
                    View Project
                  </span>
                </motion.div>
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
                  <span>{project.area} sq ft</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Scroll Progress Bar */}
      <div className="container-architectural mt-8">
        <div className="h-px bg-border relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary"
            style={{ width: `${(activeIndex + 1) / projects.length * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};
