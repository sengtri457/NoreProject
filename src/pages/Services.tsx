import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TextReveal, TextRevealByLine } from '../components/animations/TextReveal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { SVGIcon } from '../components/animations/SVGIcon';
import { MagneticButton } from '../components/animations/MagneticButton';
import { Link } from 'react-router-dom';
import useLenis from '../hooks/useLenis';

const services = [
  {
    id: 'structural',
    icon: 'structure' as const,
    title: 'Structural Design',
    description: 'Engineering excellence that ensures safety, stability, and longevity. Our structural designs balance innovation with proven methodologies.',
    features: ['Load Analysis', 'Foundation Design', 'Steel & Concrete Structures', 'Seismic Engineering'],
  },
  {
    id: 'architectural',
    icon: 'blueprint' as const,
    title: 'Architectural Design',
    description: 'Creating spaces that inspire through thoughtful design, perfect proportions, and masterful use of light and materials.',
    features: ['Concept Development', 'Space Planning', 'Facade Design', 'Material Selection'],
  },
  {
    id: 'mep',
    icon: 'precision' as const,
    title: 'MEP Engineering',
    description: 'Integrated mechanical, electrical, and plumbing systems that ensure comfort, efficiency, and sustainability.',
    features: ['HVAC Systems', 'Electrical Design', 'Plumbing & Fire Protection', 'Energy Optimization'],
  },
  {
    id: 'interior',
    icon: 'compass' as const,
    title: 'Interior Design',
    description: 'Transforming interiors into harmonious environments that reflect purpose, personality, and refined aesthetics.',
    features: ['Space Programming', 'Furniture Design', 'Lighting Design', 'Material Finishes'],
  },
  {
    id: 'construction',
    icon: 'structure' as const,
    title: 'Construction Management',
    description: 'From groundbreaking to completion, we ensure every project is delivered on time, within budget, and to the highest standards.',
    features: ['Project Scheduling', 'Cost Management', 'Quality Control', 'Safety Oversight'],
  },
];

const Services = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-architectural">
            <div className="max-w-4xl">
              <TextReveal>
                <span className="label-uppercase mb-4 block">Our Services</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h1 className="heading-display mb-8">
                  Comprehensive <span className="text-primary">Design</span> Solutions
                </h1>
              </TextRevealByLine>
              <TextRevealByLine delay={0.2}>
                <p className="body-large max-w-2xl">
                  From initial concept to final construction, we offer a full spectrum 
                  of architectural and engineering services tailored to your vision.
                </p>
              </TextRevealByLine>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-20 md:pb-32">
          <div className="container-architectural">
            <div className="space-y-8">
              {services.map((service, index) => (
                <ScrollReveal 
                  key={service.id} 
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <motion.div 
                    id={service.id}
                    className="card-architectural p-8 md:p-12 group"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Icon & Number */}
                      <div className="lg:col-span-2 flex items-center gap-6">
                        <span className="text-6xl font-bold text-muted-foreground/30">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="w-12 h-12 text-primary">
                          <SVGIcon icon={service.icon} className="w-full h-full" delay={index * 0.1} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-6">
                        <h2 className="heading-medium mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                        <p className="body-regular">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="lg:col-span-4">
                        <h4 className="label-uppercase mb-4">Includes</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-architectural text-center">
            <TextReveal>
              <span className="label-uppercase mb-4 block">Get Started</span>
            </TextReveal>
            <TextRevealByLine delay={0.1}>
              <h2 className="heading-large mb-8">
                Ready to Begin Your <span className="text-primary">Project</span>?
              </h2>
            </TextRevealByLine>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact">
                <MagneticButton variant="primary">
                  Contact Us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
