import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TextRevealByLine } from '../animations/TextReveal';
import { FaLinkedin, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa';

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
    { label: 'LinkedIn', href: '#', icon: FaLinkedin },
    { label: 'Instagram', href: '#', icon: FaInstagram },
    { label: 'Twitter', href: '#', icon: FaTwitter },
    { label: 'Behance', href: '#', icon: FaBehance },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-primary/40">
      <div className="container-architectural section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <TextRevealByLine>
              <Link to="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-white flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">ATELIER</span>
              </Link>
            </TextRevealByLine>
            <TextRevealByLine delay={0.1}>
              <p className="body-regular max-w-xs text-white/80">
                Crafting architectural excellence through innovation, precision, and timeless design.
              </p>
            </TextRevealByLine>
          </div>

          {/* Navigation Column */}
          <div>
            <TextRevealByLine>
              <h4 className="label-uppercase mb-6 text-white">Navigation</h4>
            </TextRevealByLine>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, i) => (
                <TextRevealByLine key={link.href} delay={0.05 * i}>
                  <li>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300"
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
              <h4 className="label-uppercase mb-6 text-white">Services</h4>
            </TextRevealByLine>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <TextRevealByLine key={link.href} delay={0.05 * i}>
                  <li>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300"
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
              <h4 className="label-uppercase mb-6 text-white">Contact</h4>
            </TextRevealByLine>
            <TextRevealByLine delay={0.1}>
              <address className="not-italic text-white/80 space-y-3">
                <p>123 Architecture Avenue</p>
                <p>Design District, NY 10001</p>
                <a
                  href="mailto:hello@atelier.studio"
                  className="block hover:text-white transition-colors"
                >
                  hello@atelier.studio
                </a>
                <a
                  href="tel:+12125551234"
                  className="block hover:text-white transition-colors"
                >
                  +1 (212) 555-1234
                </a>
              </address>
            </TextRevealByLine>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Atelier Architecture. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-6">
            {footerLinks.social.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-lg transition-colors duration-300"
                  aria-label={link.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
