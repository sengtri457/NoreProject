import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-primary color margin-bottom-8 backdrop-blur-md "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-architectural py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 border border-white flex items-center justify-center">
              <span className="text-xl font-bold text-white">NR</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white hidden md:block">
              NOREA ARCHITECTURE
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="relative group">
              <span className="text-sm font-medium tracking-wide text-white transition-colors group-hover:text-white">
                {link.label}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-semibold tracking-wide hover:bg-primary transition-colors duration-300"
        >
          Start a Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span
            className="w-6 h-0.5 bg-foreground"
            animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-foreground"
            animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={
          isMenuOpen
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -20, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.3 }}
      >
        <nav className="container-architectural py-10 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};
