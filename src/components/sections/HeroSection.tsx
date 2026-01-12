import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero.jpg";
import { TextReveal, TextRevealByWord } from "../animations/TextReveal";
import { MagneticButton } from "../animations/MagneticButton";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      {/* Background Image with Scale and Drift */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, x: imageX }}
      >
        <motion.img
          src={heroImage}
          alt="Modern architecture"
          className="w-full h-full object-cover"
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-architectural h-full flex flex-col justify-center py-20 md:py-24"
        style={{ y: textY, opacity }}
      >
        {/* Label */}
        <TextReveal delay={0.3}>
          <span className="label-uppercase mb-4 md:mb-6 block">
            Architecture & Design Studio
          </span>
        </TextReveal>

        {/* Main Heading */}
        <div className="mb-6 md:mb-8">
          <TextRevealByWord
            text="We Design Spaces"
            className="heading-display text-foreground"
            wordClassName="text-foreground"
          />
          <TextRevealByWord
            text="That Inspire"
            className="heading-display text-primary"
            wordClassName="text-primary"
          />
        </div>

        {/* Subheading */}
        <TextReveal delay={0.6}>
          <p className="body-large max-w-xl mb-8 md:mb-10 text-white/90">
            Transforming visionary concepts into architectural masterpieces that
            stand the test of time through innovation and precision.
          </p>
        </TextReveal>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/projects">
            <MagneticButton
              variant="primary"
              className="breathing px-7 py-4 text-sm tracking-wide"
            >
              View Our Work
            </MagneticButton>
          </Link>

          <Link to="/contact">
            <MagneticButton
              variant="ghost"
              className="
                  px-7 py-4
                  text-sm tracking-wide
                  bg-white text-background
                  border border-white
                  hover:bg-white
                  hover:text-primary
                  transition-colors duration-300
                "
            >
              Contact Us
            </MagneticButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground text-white">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};
