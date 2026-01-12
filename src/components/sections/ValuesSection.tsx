import { motion } from 'framer-motion';
import { TextReveal, TextRevealByLine } from '../animations/TextReveal';
import { SVGIcon } from '../animations/SVGIcon';
import { StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

const values = [
  {
    icon: 'blueprint' as const,
    title: 'Safety',
    description:
      'We are always prioritizing the health and well-being of all employees and management team above all else.',
  },
  {
    icon: 'compass' as const,
    title: 'High Quality',
    description:
      'We continuously improve our work and are committed to providing high-quality projects to ensure customer satisfaction.',
  },
  {
    icon: 'structure' as const,
    title: 'Collaboration / Teamwork',
    description:
      'We build strong relationships with clients, vendors, and partners to achieve common goals.',
  },
  {
    icon: 'precision' as const,
    title: 'Accountability',
    description:
      'We take full ownership of actions, decisions, and outcomes, ensuring projects meet agreed-upon timelines and budgets.',
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container-architectural relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <TextReveal>
            <span className="label-uppercase mb-4 block">Our Foundation</span>
          </TextReveal>
          <TextRevealByLine delay={0.1}>
            <h2 className="heading-medium mb-4">
              Core <span className="text-primary">Values</span>
            </h2>
          </TextRevealByLine>
          <p className="body-large max-w-xl mx-auto mt-6">
            The principles that guide everything we do and shape our commitment to excellence
          </p>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const isGolden = index % 2 === 1; // Alternate: odd indices get golden background icon
            return (
              <StaggerItem key={index}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="group relative overflow-hidden rounded-lg border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Background Icon - Large decorative icon behind content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <SVGIcon 
                      {...value} 
                      className={`w-32 h-32 ${isGolden ? "text-secondary" : "text-primary"}`}
                    />
                  </div>

                  {/* Animated Gradient Overlay */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0, backgroundPosition: "0% 50%" },
                      hover: { opacity: 0.08, backgroundPosition: "200% 50%" },
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/50 to-primary bg-[length:200%_100%]"
                  />

                  {/* Accent Line */}
                  <motion.span
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`absolute bottom-0 left-0 z-20 h-1 w-full origin-left ${
                      isGolden ? "bg-secondary" : "bg-primary"
                    }`}
                  />

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500 ${
                    isGolden ? "bg-secondary/5" : "bg-primary/5"
                  }`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Circle Icon */}
                    <motion.div
                      variants={{
                        rest: { y: 0, scale: 1, rotate: 0 },
                        hover: { y: -8, scale: 1.1, rotate: 5 },
                      }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 300, 
                        damping: 20 
                      }}
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors duration-300 ${
                        isGolden
                          ? "bg-secondary text-white"
                          : "bg-primary text-white"
                      }`}
                    >
                      <SVGIcon {...value} className="w-7 h-7" />
                    </motion.div>

                    <h4 className="heading-small mb-3 transition-colors group-hover:text-primary">
                      {value.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
