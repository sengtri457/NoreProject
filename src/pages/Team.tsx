import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollReveal";
import useLenis from "../hooks/useLenis";
import { useState, useEffect } from "react";
const leadership = [
  {
    name: "Leo",
    role: "Product Owner",
    bio: "With over 30 years of experience, Leo has led Atelier to become a globally recognized architecture firm.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    name: "Bonchay",
    role: "Backend Team Lead",
    bio: "Bonchay brings a unique blend of artistic vision and technical precision to every project.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
  {
    name: "Jason",
    role: "Backend Assistant Team Lead",
    bio: "Jason leads our structural and MEP engineering teams with innovative sustainable solutions.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
  {
    name: "Marcus",
    role: "Design Director",
    bio: "Marcus crafts beautiful interfaces with attention to detail and user experience.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Elena",
    role: "Head of Engineering",
    bio: "Elena drives innovation with cutting-edge technology and sustainable practices.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  },
];
// Team Card Component
const TeamCard = ({ person, isCenter, position }) => {
  const getCardScale = () => {
    if (isCenter) return 1;
    if (position === "adjacent") return 0.85;
    return 0.7;
  };

  const getCardOpacity = () => {
    if (isCenter) return 1;
    if (position === "adjacent") return 0.6;
    return 0.3;
  };

  const getZIndex = () => {
    if (isCenter) return 30;
    if (position === "adjacent") return 20;
    return 10;
  };

  return (
    <motion.div
      className="relative"
      initial={{ scale: getCardScale(), opacity: getCardOpacity() }}
      animate={{
        scale: getCardScale(),
        opacity: getCardOpacity(),
      }}
      transition={{
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
      }}
      style={{ zIndex: getZIndex() }}
    >
      <motion.div
        className={`relative rounded-3xl overflow-hidden ${
          isCenter
            ? "border-4 border-primary shadow-2xl shadow-primary/20"
            : "border-2 border-muted"
        }`}
        whileHover={isCenter ? { y: -10 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Background Glow Effect for Center Card */}
        {isCenter && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Card Content */}
        <div className="relative bg-card/95 backdrop-blur-sm">
          {/* Image Container */}
          <div className="relative h-72 overflow-hidden">
            <motion.img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
              animate={
                isCenter
                  ? {
                      scale: [1, 1.05, 1],
                    }
                  : {}
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

            {/* Animated Corner Borders - Only on Center Card */}
            {isCenter && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 border-t-3 border-r-3 border-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-12 h-12 border-b-3 border-l-3 border-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-primary"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </>
            )}
          </div>

          {/* Info Section */}
          <div className="p-6 text-center">
            {/* Name */}
            <motion.h3
              className={`text-xl font-bold mb-1 ${
                isCenter ? "text-primary" : "text-foreground"
              }`}
              animate={
                isCenter
                  ? {
                      scale: [1, 1.05, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {person.name}
            </motion.h3>

            {/* Role */}
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              {person.role}
            </p>

            {/* Bio - Only show on center card */}
            <AnimatePresence>
              {isCenter && (
                <motion.p
                  className="text-sm text-foreground/80 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {person.bio}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Shine Effect on Hover - Only on Center */}
        {isCenter && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{
              x: "100%",
              opacity: [0, 0.5, 0],
              transition: { duration: 1, ease: "easeInOut" },
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const departments = [
  { name: "Architecture", count: 32 },
  { name: "Engineering", count: 24 },
  { name: "Interior Design", count: 12 },
  { name: "Project Management", count: 8 },
  { name: "Sustainability", count: 6 },
];

const Team = () => {
  useLenis();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % leadership.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + leadership.length) % leadership.length
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get visible cards indices
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + leadership.length) % leadership.length;
      cards.push({
        person: leadership[index],
        index: index,
        offset: i,
        position:
          Math.abs(i) === 1 ? "adjacent" : Math.abs(i) === 0 ? "center" : "far",
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-architectural">
            <div className="max-w-4xl">
              <TextReveal>
                <span className="label-uppercase mb-4 block">Our Team</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h1 className="heading-display mb-8">
                  The <span className="text-primary">Minds</span> Behind Our
                  Work
                </h1>
              </TextRevealByLine>
              <TextRevealByLine delay={0.2}>
                <p className="body-large max-w-2xl">
                  Our diverse team of architects, engineers, and designers
                  brings together expertise from around the world.
                </p>
              </TextRevealByLine>
            </div>
          </div>
        </section>
        {/* LeaderShip */}
        <section className="pb-16 md:pb-24 relative overflow-hidden">
          {/* Background Ambient Effects */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="container-architectural relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-medium mb-3">
                Leadership
                <motion.span
                  className="inline-block ml-3 text-primary"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.span>
              </h2>
              <p className="body-regular text-muted-foreground text-sm">
                Meet the talented minds driving our vision forward
              </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Cards Display */}
              <div className="flex items-center justify-center gap-2 px-4 min-h-[500px]">
                <AnimatePresence mode="popLayout" initial={false}>
                  {visibleCards.map((card) => (
                    <motion.div
                      key={card.index}
                      className="flex-shrink-0 w-64"
                      initial={{
                        x: direction > 0 ? 300 : -300,
                        opacity: 0,
                        rotateY: direction > 0 ? 45 : -45,
                      }}
                      animate={{
                        x: card.offset * 220,
                        opacity: card.position === "far" ? 0 : 1,
                        rotateY: 0,
                      }}
                      exit={{
                        x: direction > 0 ? -300 : 300,
                        opacity: 0,
                        rotateY: direction > 0 ? -45 : 45,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    >
                      <TeamCard
                        person={card.person}
                        isCenter={card.offset === 0}
                        position={card.position}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
                <motion.button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/50 flex items-center justify-center text-primary shadow-lg pointer-events-auto hover:bg-primary hover:text-primary-foreground transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border-2 border-primary/50 flex items-center justify-center text-primary shadow-lg pointer-events-auto hover:bg-primary hover:text-primary-foreground transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {leadership.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Outer Ring */}
                  <motion.div
                    className={`w-2.5 h-2.5 rounded-full border-2 ${
                      index === currentIndex
                        ? "border-primary"
                        : "border-muted-foreground/30"
                    }`}
                    animate={
                      index === currentIndex
                        ? {
                            scale: [1, 1.3, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Inner Dot */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                    initial={{ width: 0, height: 0 }}
                    animate={
                      index === currentIndex
                        ? {
                            width: 6,
                            height: 6,
                          }
                        : {
                            width: 0,
                            height: 0,
                          }
                    }
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Progress Ring for Active Indicator */}
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="relative w-32 h-0.5 bg-muted rounded-full mx-auto mt-4 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-bronze-dark rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                key={currentIndex}
              />
            </div>
          </div>
        </section>
        );
        {/* Departments */}
        <section className="section-padding bg-card">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <TextReveal>
                  <span className="label-uppercase mb-4 block">
                    Organization
                  </span>
                </TextReveal>
                <TextRevealByLine delay={0.1}>
                  <h2 className="heading-large mb-6">
                    Our <span className="text-primary">Structure</span>
                  </h2>
                </TextRevealByLine>
                <TextRevealByLine delay={0.2}>
                  <p className="body-large">
                    85+ professionals across 5 specialized departments, working
                    collaboratively to deliver excellence.
                  </p>
                </TextRevealByLine>
              </div>
              <div>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {departments.map((dept, index) => (
                    <StaggerItem key={dept.name}>
                      <div className="flex items-center justify-between py-4 border-b border-border">
                        <span className="font-medium">{dept.name}</span>
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="h-2 bg-secondary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${(dept.count / 32) * 120}px`,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                          <span className="text-muted-foreground w-8 text-right">
                            {dept.count}
                          </span>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>
        {/* Join Us CTA */}
        <section className="section-padding">
          <div className="container-architectural text-center">
            <TextReveal>
              <span className="label-uppercase mb-4 block">Careers</span>
            </TextReveal>
            <TextRevealByLine delay={0.1}>
              <h2 className="heading-large mb-8">
                Join Our <span className="text-primary">Team</span>
              </h2>
            </TextRevealByLine>
            <TextRevealByLine delay={0.2}>
              <p className="body-large max-w-xl mx-auto mb-8">
                We're always looking for talented individuals who share our
                passion for architectural excellence.
              </p>
            </TextRevealByLine>
            <ScrollReveal delay={0.3}>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 text-primary font-semibold group"
              >
                <span>View Open Positions</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
