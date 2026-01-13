import { motion } from "framer-motion";
import { TextReveal, TextRevealByLine } from "../animations/TextReveal";
import { StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { FlipOnScroll } from "../animations/flipscroll";
import { TextBurst } from "../animations/TextBurst";
const logos = [
  { id: 1, name: "Starbucks", src: "/src/assets/logo-1.png", bg: "/src/assets/img-1.jpg" },
  { id: 2, name: "Chipotle", src: "/src/assets/logo-2.png", bg: "/src/assets/bg-chipotle.jpg" },
  { id: 3, name: "Nike", src: "/src/assets/logo-3.png", bg: "/src/assets/bg-nike.jpg" },
  { id: 4, name: "Google", src: "/src/assets/logo-4.png", bg: "/src/assets/bg-google.jpg" },
  { id: 5, name: "Microsoft", src: "/src/assets/logo-1.png", bg: "/src/assets/bg-microsoft.jpg" },
  { id: 6, name: "Amazon", src: "/src/assets/logo-2.png", bg: "/src/assets/bg-amazon.jpg" },
  { id: 7, name: "Meta", src: "/src/assets/logo-3.png", bg: "/src/assets/bg-meta.jpg" },
  { id: 8, name: "Adobe", src: "/src/assets/logo-4.png", bg: "/src/assets/bg-adobe.jpg" },
];

export const CollaborationsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container-architectural relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <TextReveal>
            <span className="label-uppercase mb-6 block">
              Website, Multimedia, Marketing, & SEO
            </span>
          </TextReveal>
                    <TextBurst
            text="Our Collaborations"
            className="heading-medium text-center mb-4"
            delay={0.1}
            stagger={0.05}
            />

        </div>

        {/* Logo Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {logos.map((logo, index) => (
            <StaggerItem key={logo.id}>
              <FlipOnScroll delay={index * 0.08}>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                   boxShadow: "0 20px 40px rgba(255, 185, 0, 0.3)", // golden shadow
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="
                    group relative flex items-center justify-center
                    rounded-2xl border border-border
                    bg-background
                    overflow-hidden
                    p-8 md:p-10
                    transition-shadow
                  "
                >
                  {/* Background Image */}
                  <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `url(${logo.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 0.2 }} // Slightly visible background
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />

                  {/* Rolling Logo */}
                  <motion.div
                    whileHover={{
                      rotateY: 360,
                      rotateX: 20,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative z-10 h-12 md:h-14 w-full flex items-center justify-center perspective-1000"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      className="max-h-full max-w-[160px] object-contain"
                    />
                  </motion.div>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-primary/60"
                  />
                </motion.div>
              </FlipOnScroll>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
