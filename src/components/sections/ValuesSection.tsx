import { motion } from 'framer-motion';
import { TextReveal, TextRevealByLine } from '../animations/TextReveal';
import { SVGIcon } from '../animations/SVGIcon';
import { StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

const values = [
  {
    icon: 'blueprint' as const,
    title: 'Precision Engineering',
    description: 'Every detail is meticulously planned and executed with mathematical precision.',
  },
  {
    icon: 'compass' as const,
    title: 'Design Excellence',
    description: 'We push boundaries to create spaces that are both beautiful and functional.',
  },
  {
    icon: 'structure' as const,
    title: 'Structural Integrity',
    description: 'Our buildings are engineered to stand the test of time and nature.',
  },
  {
    icon: 'precision' as const,
    title: 'Sustainable Vision',
    description: 'Environmental responsibility is woven into every design decision we make.',
  },
];

export const ValuesSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-architectural">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal>
            <span className="label-uppercase mb-4 block">Our Values</span>
          </TextReveal>
          <TextRevealByLine delay={0.1}>
            <h2 className="heading-large">
              Principles That <span className="text-primary">Define</span> Us
            </h2>
          </TextRevealByLine>
        </div>

        {/* Values Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {values.map((value, index) => (
            <StaggerItem key={value.title}>
              <motion.div
                className="card-architectural p-8 h-full group cursor-pointer"
                whileHover={{ 
                  y: -8,
                  boxShadow: 'var(--shadow-lift)'
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 text-primary">
                  <SVGIcon 
                    icon={value.icon} 
                    className="w-full h-full"
                    delay={index * 0.1}
                  />
                </div>

                {/* Content */}
                <h3 className="heading-small mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="body-regular">
                  {value.description}
                </p>

                {/* Hover Accent Line */}
                <motion.div 
                  className="mt-6 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ transformOrigin: 'left' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
