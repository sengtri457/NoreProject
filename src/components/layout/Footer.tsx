import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TextRevealByLine } from '../animations/TextReveal';

const footerLinks = {
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Structural Design', href: '/services#structural' },
    { label: 'Architectural Design', href: '/services#architectural' },
    { label: 'MEP Engineering', href: '/services#mep' },
    { label: 'Interior Design', href: '/services#interior' },
    { label: 'Construction', href: '/services#construction' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Behance', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-architectural section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <TextRevealByLine>
              <Link to="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">A</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">ATELIER</span>
              </Link>
            </TextRevealByLine>
            <TextRevealByLine delay={0.1}>
              <p className="body-regular max-w-xs">
                Crafting architectural excellence through innovation, precision, and timeless design.
              </p>
            </TextRevealByLine>
          </div>

          {/* Navigation Column */}
          <div>
            <TextRevealByLine>
              <h4 className="label-uppercase mb-6">Navigation</h4>
            </TextRevealByLine>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, i) => (
                <TextRevealByLine key={link.href} delay={0.05 * i}>
                  <li>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                </TextRevealByLine>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <TextRevealByLine>
              <h4 className="label-uppercase mb-6">Services</h4>
            </TextRevealByLine>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <TextRevealByLine key={link.href} delay={0.05 * i}>
                  <li>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                </TextRevealByLine>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <TextRevealByLine>
              <h4 className="label-uppercase mb-6">Contact</h4>
            </TextRevealByLine>
            <TextRevealByLine delay={0.1}>
              <address className="not-italic text-muted-foreground space-y-3">
                <p>123 Architecture Avenue</p>
                <p>Design District, NY 10001</p>
                <a href="mailto:hello@atelier.studio" className="block hover:text-primary transition-colors">
                  hello@atelier.studio
                </a>
                <a href="tel:+12125551234" className="block hover:text-primary transition-colors">
                  +1 (212) 555-1234
                </a>
              </address>
            </TextRevealByLine>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Atelier Architecture. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-6">
            {footerLinks.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
