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
    <footer className="relative bg-primary dark:bg-zinc-950 text-primary-foreground border-t border-primary/40 dark:border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container-architectural py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <TextRevealByLine>
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <motion.div
                  className="w-12 h-12 border-2 border-white flex items-center justify-center group-hover:border-secondary transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">NR</span>
                </motion.div>
                <span className="text-xl font-semibold tracking-tight text-white group-hover:text-secondary transition-colors duration-300">
                  NOREA ARCHITECTURE
                </span>
              </Link>
            </TextRevealByLine>
            <TextRevealByLine delay={0.1}>
              <p className="body-regular max-w-xs text-white/80 mb-6">
                Transforming ambitious concepts into high-performance constructible realities through innovation, precision, and excellence.
              </p>
            </TextRevealByLine>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {footerLinks.social.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all duration-300"
                    aria-label={link.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <TextRevealByLine>
              <h4 className="label-uppercase mb-6 text-secondary">Navigation</h4>
            </TextRevealByLine>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, i) => (
                <TextRevealByLine key={link.href} delay={0.05 * i}>
                  <li>
                    <Link
                      to={link.href}
                      className="group relative text-white/80 hover:text-secondary transition-colors duration-300 inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                </TextRevealByLine>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <TextRevealByLine>
              <h4 className="label-uppercase mb-6 text-secondary">Services</h4>
            </TextRevealByLine>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <TextRevealByLine key={link.href} delay={0.05 * i}>
                  <li>
                    <Link
                      to={link.href}
                      className="group relative text-white/80 hover:text-secondary transition-colors duration-300 inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                </TextRevealByLine>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <TextRevealByLine>
              <h4 className="label-uppercase mb-6 text-secondary">Contact</h4>
            </TextRevealByLine>
            <TextRevealByLine delay={0.1}>
              <address className="not-italic text-white/80 space-y-4">
                <div>
                  <p className="font-semibold text-white mb-1">Phnom Penh Office</p>
                  <p>Phnom Penh, Cambodia</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Poipet Office</p>
                  <p>Poipet City, Cambodia</p>
                </div>
                <div className="pt-2 space-y-2">
                  <a
                    href="mailto:info@norea-architecture.com"
                    className="block hover:text-secondary transition-colors duration-300 group"
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span> info@norea-architecture.com
                  </a>
                  <a
                    href="tel:+855123456789"
                    className="block hover:text-secondary transition-colors duration-300 group"
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span> +855 12 345 6789
                  </a>
                </div>
              </address>
            </TextRevealByLine>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Norea Architecture & Construction Co., Ltd. All rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center gap-2 text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Built with</span>
            <span className="text-secondary">excellence</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

