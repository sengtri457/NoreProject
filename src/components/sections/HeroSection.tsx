import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-architecture.jpg';
import { TextReveal, TextRevealByWord } from '../animations/TextReveal';
import { MagneticButton } from '../animations/MagneticButton';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageX = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-architectural h-full flex flex-col justify-end pb-24 md:pb-32"
        style={{ y: textY, opacity }}
      >
        {/* Label */}
        <TextReveal delay={0.3}>
          <span className="label-uppercase mb-6 block">Architecture & Design Studio</span>
        </TextReveal>

        {/* Main Heading */}
        <div className="mb-8">
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
          <p className="body-large max-w-xl mb-10">
            Transforming visionary concepts into architectural masterpieces that 
            stand the test of time through innovation and precision.
          </p>
        </TextReveal>

        {/* CTAs */}
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/projects">
            <MagneticButton variant="primary" className="breathing">
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </MagneticButton>
          </Link>
          <Link to="/contact">
            <MagneticButton variant="ghost">
              Start a Project
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
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
};
