import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TextReveal, TextRevealByLine } from '../components/animations/TextReveal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { MagneticButton } from '../components/animations/MagneticButton';
import useLenis from '../hooks/useLenis';

const offices = [
  { city: 'New York', address: '123 Architecture Avenue, Design District, NY 10001', phone: '+1 (212) 555-1234' },
  { city: 'London', address: '45 Regent Street, Mayfair, London W1B 2EL', phone: '+44 20 7123 4567' },
  { city: 'Dubai', address: 'Tower 5, Design Quarter, DIFC, Dubai', phone: '+971 4 123 4567' },
];

const Contact = () => {
  useLenis();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-architectural">
            <div className="max-w-4xl">
              <TextReveal>
                <span className="label-uppercase mb-4 block">Contact Us</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h1 className="heading-display mb-8">
                  Let's <span className="text-primary">Build</span> Together
                </h1>
              </TextRevealByLine>
              <TextRevealByLine delay={0.2}>
                <p className="body-large max-w-2xl">
                  Have a project in mind? We'd love to hear from you. Reach out and 
                  let's discuss how we can bring your vision to life.
                </p>
              </TextRevealByLine>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-20 md:pb-32">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <ScrollReveal>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { name: 'name', label: 'Name', type: 'text', required: true },
                      { name: 'email', label: 'Email', type: 'email', required: true },
                      { name: 'company', label: 'Company', type: 'text', required: false },
                    ].map((field) => (
                      <motion.div
                        key={field.name}
                        className="relative"
                        whileFocus={{ scale: 1.01 }}
                      >
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          value={formState[field.name as keyof typeof formState]}
                          onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                          className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder={field.label + (field.required ? ' *' : '')}
                        />
                      </motion.div>
                    ))}

                    <div>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-border py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="" className="bg-background">Project Type</option>
                        <option value="residential" className="bg-background">Residential</option>
                        <option value="commercial" className="bg-background">Commercial</option>
                        <option value="cultural" className="bg-background">Cultural</option>
                        <option value="hospitality" className="bg-background">Hospitality</option>
                        <option value="other" className="bg-background">Other</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your project"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase w-full md:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <motion.span
                          className="flex items-center justify-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </motion.span>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </motion.div>
                    <h3 className="heading-medium mb-4">Thank You!</h3>
                    <p className="body-regular">We'll be in touch within 24-48 hours.</p>
                  </motion.div>
                )}
              </ScrollReveal>

              {/* Contact Info */}
              <div className="space-y-12">
                <ScrollReveal delay={0.2}>
                  <div>
                    <h3 className="label-uppercase mb-4">Email</h3>
                    <a href="mailto:hello@atelier.studio" className="heading-small hover:text-primary transition-colors">
                      hello@atelier.studio
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div>
                    <h3 className="label-uppercase mb-6">Offices</h3>
                    <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                      {offices.map((office) => (
                        <StaggerItem key={office.city}>
                          <motion.div 
                            className="p-6 border border-border hover:border-primary transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            <h4 className="font-semibold mb-2">{office.city}</h4>
                            <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                            <a href={`tel:${office.phone}`} className="text-primary text-sm">
                              {office.phone}
                            </a>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </ScrollReveal>

                {/* Careers Link */}
                <ScrollReveal delay={0.4}>
                  <div className="pt-8 border-t border-border">
                    <h3 className="label-uppercase mb-4">Careers</h3>
                    <a 
                      href="/careers" 
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                    >
                      <span>View Open Positions</span>
                      <motion.svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </motion.svg>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
