import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TextReveal, TextRevealByLine } from '../animations/TextReveal';
import { MagneticButton } from '../animations/MagneticButton';

export const CTASection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Accent Lines */}
      <motion.div 
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div 
        className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="container-architectural relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal>
            <span className="label-uppercase mb-6 block">Ready to Build?</span>
          </TextReveal>
          
          <TextRevealByLine delay={0.1}>
            <h2 className="heading-large mb-8">
              Let's Create Something <span className="text-primary">Extraordinary</span> Together
            </h2>
          </TextRevealByLine>

          <TextRevealByLine delay={0.2}>
            <p className="body-large max-w-2xl mx-auto mb-12">
              Whether you're planning a new development or reimagining an existing space, 
              our team is ready to bring your vision to life.
            </p>
          </TextRevealByLine>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/contact">
              <MagneticButton variant="primary" className="breathing">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </MagneticButton>
            </Link>
            <Link to="/projects">
              <MagneticButton variant="secondary">
                Explore Portfolio
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
