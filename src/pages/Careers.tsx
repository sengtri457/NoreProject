import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TextReveal, TextRevealByLine } from '../components/animations/TextReveal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { MagneticButton } from '../components/animations/MagneticButton';
import { ImageReveal } from '../components/animations/ImageReveal';
import useLenis from '../hooks/useLenis';
import heroImage from '@/assets/hero-architecture.jpg';

const openings = [
  { title: 'Senior Architect', department: 'Architecture', location: 'New York', type: 'Full-time' },
  { title: 'Structural Engineer', department: 'Engineering', location: 'New York', type: 'Full-time' },
  { title: 'Interior Designer', department: 'Interior Design', location: 'London', type: 'Full-time' },
  { title: 'Project Manager', department: 'Project Management', location: 'Dubai', type: 'Full-time' },
  { title: 'Sustainability Consultant', department: 'Sustainability', location: 'Remote', type: 'Full-time' },
];

const benefits = [
  { title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
  { title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision coverage' },
  { title: 'Professional Growth', description: 'Continuous learning and development opportunities' },
  { title: 'Work-Life Balance', description: 'Flexible schedules and remote work options' },
  { title: 'Creative Environment', description: 'Inspiring studios designed for collaboration' },
  { title: 'Global Projects', description: 'Work on landmark projects around the world' },
];

const Careers = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <TextReveal>
                  <span className="label-uppercase mb-4 block">Careers</span>
                </TextReveal>
                <TextRevealByLine delay={0.1}>
                  <h1 className="heading-display mb-8">
                    Build Your <span className="text-primary">Future</span> With Us
                  </h1>
                </TextRevealByLine>
                <TextRevealByLine delay={0.2}>
                  <p className="body-large max-w-xl">
                    Join a team of passionate architects, engineers, and designers 
                    shaping the built environment of tomorrow.
                  </p>
                </TextRevealByLine>
              </div>
              <div className="aspect-[4/3]">
                <ImageReveal src={heroImage} alt="Atelier office" className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="pb-20 md:pb-32">
          <div className="container-architectural">
            <TextReveal>
              <h2 className="heading-medium mb-12">Open Positions</h2>
            </TextReveal>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {openings.map((job, index) => (
                <StaggerItem key={job.title}>
                  <motion.div
                    className="card-architectural p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 group cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div>
                      <h3 className="heading-small group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <motion.div
                      className="flex items-center gap-2 text-primary"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-sm font-medium">Apply Now</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-card">
          <div className="container-architectural">
            <div className="text-center mb-16">
              <TextReveal>
                <span className="label-uppercase mb-4 block">Why Join Us</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h2 className="heading-large">
                  Benefits & <span className="text-primary">Perks</span>
                </h2>
              </TextRevealByLine>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <motion.div
                    className="p-6 border border-border hover:border-primary transition-colors"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="heading-small mb-2">{benefit.title}</h3>
                    <p className="body-regular">{benefit.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Culture */}
        <section className="section-padding">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video relative overflow-hidden">
                <motion.img
                  src={heroImage}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                  initial={{ y: '20%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div>
                <TextReveal>
                  <span className="label-uppercase mb-4 block">Our Culture</span>
                </TextReveal>
                <TextRevealByLine delay={0.1}>
                  <h2 className="heading-large mb-6">
                    Where <span className="text-primary">Creativity</span> Thrives
                  </h2>
                </TextRevealByLine>
                <TextRevealByLine delay={0.2}>
                  <p className="body-large mb-6">
                    At Atelier, we believe that great architecture emerges from 
                    collaboration, curiosity, and a relentless pursuit of excellence.
                  </p>
                </TextRevealByLine>
                <TextRevealByLine delay={0.3}>
                  <p className="body-regular">
                    Our studios are designed to inspire creativity and foster 
                    meaningful connections. We celebrate diverse perspectives and 
                    encourage every team member to bring their unique vision to the table.
                  </p>
                </TextRevealByLine>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
