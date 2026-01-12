import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const MagneticNavLink = ({ label, href }: { label: string; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 120,
    damping: 22,
    mass: 0.6,
  });

  const springY = useSpring(y, {
    stiffness: 120,
    damping: 22,
    mass: 0.6,
  });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    // Dead zone to prevent shaking
    if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;

    x.set(dx * 0.15);
    y.set(dy * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <Link to={href}>
      <motion.a
        ref={ref}
        style={{
          x: springX,
          y: springY,
        }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={reset}
        className="relative px-4 py-2 text-sm font-medium tracking-wide text-white group cursor-pointer"
      >
        {/* Smooth shaking text */}
        <span className="relative inline-block">
          {label.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              animate={
                isHovered
                  ? {
                      y: [0, -3, 2, -2, 1, 0],
                      rotate: [0, -2, 1, -1, 0.5, 0],
                    }
                  : {
                      y: 0,
                      rotate: 0,
                    }
              }
              transition={{
                delay: i * 0.03,
                duration: 0.8,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 0.2,
                ease: "easeInOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>

        {/* Simple animated underline */}
        <motion.span
          className="absolute left-0 -bottom-1 h-px w-full origin-left bg-white"
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.a>
    </Link>
  );
};

/* ---------- Header ---------- */
export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/80"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-architectural py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3"
          >
            <motion.div
              className="w-10 h-10 border border-white flex items-center justify-center relative"
              whileHover={{
                rotate: [0, -2, 2, -1, 1, 0],
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.span
                className="text-xl font-bold text-white"
                whileHover={{
                  y: [0, -1, 1, -1, 0],
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                NR
              </motion.span>
            </motion.div>
            <span className="hidden md:block text-lg font-semibold text-white">
              NOREA ARCHITECTURE
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <MagneticNavLink
              key={link.href}
              label={link.label}
              href={link.href}
            />
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg"
      >
        <nav className="h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ y: 20, opacity: 0 }}
              animate={
                isMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
              }
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-semibold text-foreground"
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
