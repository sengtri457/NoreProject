import { motion } from "framer-motion";
import { TextReveal, TextRevealByLine } from "../animations/TextReveal";
import { SVGIcon } from "../animations/SVGIcon";
import { StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { SlideInOnScroll } from "../animations/SlideInOnScroll";
import { WipeInOnScroll } from "../animations/WipeInOnScroll";


const values = [
  {
    icon: "blueprint" as const,
    title: "Safety",
    description:
      "We are always prioritizing the health and well-being of all employees and management team above all else.",
  },
  {
    icon: "compass" as const,
    title: "High Quality",
    description:
      "We continuously improve our work and are committed to providing high-quality projects to ensure customer satisfaction.",
  },
  {
    icon: "structure" as const,
    title: "Collaboration / Teamwork",
    description:
      "We build strong relationships with clients, vendors, and partners to achieve common goals.",
  },
  {
    icon: "precision" as const,
    title: "Accountability",
    description:
      "We take full ownership of actions, decisions, and outcomes, ensuring projects meet agreed-upon timelines and budgets.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* Animated Gradient Orbs - Increased opacity for more visible color */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

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
            const isGolden = index % 2 === 1;
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <StaggerItem key={index}>
                <WipeInOnScroll direction={direction} delay={index * 0.08}>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    className="
            group relative overflow-hidden rounded-lg
            border border-border bg-white
            p-8 shadow-sm
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1
          "
                  >
                    {/* Background Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <SVGIcon
                        {...value}
                        className={`w-32 h-32 ${isGolden ? "text-secondary" : "text-primary"}`}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <motion.div
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 0.08 },
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-primary"
                    />

                    {/* Accent Line */}
                    <motion.span
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`absolute bottom-0 left-0 h-1 w-full origin-left ${isGolden ? "bg-secondary" : "bg-primary"
                        }`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        variants={{
                          rest: { y: 0, scale: 1 },
                          hover: { y: -6, scale: 1.1 },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${isGolden ? "bg-secondary" : "bg-primary"
                          } text-white`}
                      >
                        <SVGIcon {...value} className="w-7 h-7" />
                      </motion.div>

                      <h4 className="heading-small mb-3 group-hover:text-primary">{value.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                </WipeInOnScroll>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
