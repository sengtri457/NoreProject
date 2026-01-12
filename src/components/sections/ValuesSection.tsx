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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <TextReveal>
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
            Our Values
          </h2>
        </TextReveal>
        <TextRevealByLine>
          <h3 className="mt-4 text-4xl font-bold">
            Principles That Define Us
          </h3>
        </TextRevealByLine>
      </div>

      {/* Grid */}
      <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <StaggerItem key={index}>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative overflow-hidden rounded-xl border bg-background p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              {/* --- Animated Golden Gradient Overlay --- */}
              <motion.div
                variants={{
                  rest: { opacity: 0, backgroundPosition: "0% 50%" },
                  hover: { opacity: 1, backgroundPosition: "200% 50%" },
                }}
                transition={{
                  duration: 0.4, // faster
                  ease: "easeOut",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 bg-[length:200%_100%]"
              />

              {/* Accent Line */}
              <motion.span
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 z-20 h-[3px] w-full origin-left bg-primary"
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  variants={{
                    rest: { y: 0, scale: 1 },
                    hover: { y: -5, scale: 1.05 },
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="mb-6 flex h-10 w-10 items-center justify-center"
                >
                  <SVGIcon {...value} />
                </motion.div>

                <h4 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                  {value.title}
                </h4>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};
