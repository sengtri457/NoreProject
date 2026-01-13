import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Briefcase, Facebook, Linkedin, Instagram } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
          className="absolute left-0 -bottom-1 h-px w-full origin-left bg-secondary"
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "backdrop-blur-md bg-primary/80 dark:bg-background/95 border-b border-transparent dark:border-white/10 shadow-sm"
        : "bg-transparent border-transparent"
        }`}
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

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ModeToggle />
          {/* Contact Info Button */}
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 bg-primary hover:bg-primary/90 hover:border-primary transition-all duration-300 text-primary-foreground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-primary text-primary-foreground overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-white mb-2">Contact Information</SheetTitle>
                <SheetDescription className="text-white/80">
                  Get in touch with Norea Architecture & Construction Co., Ltd
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8 space-y-8">
                {/* Address Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <MapPin className="w-5 h-5" />
                    Address
                  </h3>
                  <div className="space-y-4 text-white/90">
                    <div>
                      <p className="font-semibold text-white mb-2">Head Office Phnom Penh:</p>
                      <p className="leading-relaxed">
                        #BT2-870, Street Boeung Torteung Thngai 2, Doeum kor village, Sangkat Chroy Changvar, Khan Chroy Changvar, Phnom Penh, Cambodia
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Office Poipet:</p>
                      <p className="leading-relaxed">
                        #Street…, Phum Kilo lekh4, Sangkat Phsar Kandal, Poipet city, Banteay Meanchey Province, Cambodia.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <Phone className="w-5 h-5" />
                    Phone
                  </h3>
                  <div className="space-y-2 text-white/90">
                    <a
                      href="tel:+85599444434"
                      className="block hover:text-secondary transition-colors duration-300"
                    >
                      (+855) 99 4444 34
                    </a>
                    <a
                      href="tel:+85570777795"
                      className="block hover:text-secondary transition-colors duration-300"
                    >
                      (+855) 70 7777 95
                    </a>
                  </div>
                </div>

                {/* Email Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <Mail className="w-5 h-5" />
                    Email
                  </h3>
                  <div className="space-y-2 text-white/90">
                    <a
                      href="mailto:noreaarchitecture@gmail.com"
                      className="block hover:text-secondary transition-colors duration-300"
                    >
                      noreaarchitecture@gmail.com
                    </a>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      <a
                        href="mailto:norearecruitment@gmail.com"
                        className="block hover:text-secondary transition-colors duration-300"
                      >
                        norearecruitment@gmail.com
                      </a>
                      <span className="text-xs text-white/60">(Careers)</span>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <span>Social Media</span>
                  </h3>
                  <p className="text-white/90 mb-4">Norea Architecture & Construction Co., Ltd</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-3">
          <ModeToggle />
          {/* Contact Info Button - Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 bg-primary hover:bg-primary/90 hover:border-primary transition-all duration-300 text-primary-foreground"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-primary text-primary-foreground overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-white mb-2">Contact Information</SheetTitle>
                <SheetDescription className="text-white/80">
                  Get in touch with Norea Architecture & Construction Co., Ltd
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8 space-y-8">
                {/* Address Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <MapPin className="w-5 h-5" />
                    Address
                  </h3>
                  <div className="space-y-4 text-white/90">
                    <div>
                      <p className="font-semibold text-white mb-2">Head Office Phnom Penh:</p>
                      <p className="leading-relaxed">
                        #BT2-870, Street Boeung Torteung Thngai 2, Doeum kor village, Sangkat Chroy Changvar, Khan Chroy Changvar, Phnom Penh, Cambodia
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Office Poipet:</p>
                      <p className="leading-relaxed">
                        #Street…, Phum Kilo lekh4, Sangkat Phsar Kandal, Poipet city, Banteay Meanchey Province, Cambodia.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <Phone className="w-5 h-5" />
                    Phone
                  </h3>
                  <div className="space-y-2 text-white/90">
                    <a
                      href="tel:+85599444434"
                      className="block hover:text-secondary transition-colors duration-300"
                    >
                      (+855) 99 4444 34
                    </a>
                    <a
                      href="tel:+85570777795"
                      className="block hover:text-secondary transition-colors duration-300"
                    >
                      (+855) 70 7777 95
                    </a>
                  </div>
                </div>

                {/* Email Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <Mail className="w-5 h-5" />
                    Email
                  </h3>
                  <div className="space-y-2 text-white/90">
                    <a
                      href="mailto:noreaarchitecture@gmail.com"
                      className="block hover:text-secondary transition-colors duration-300"
                    >
                      noreaarchitecture@gmail.com
                    </a>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      <a
                        href="mailto:norearecruitment@gmail.com"
                        className="block hover:text-secondary transition-colors duration-300"
                      >
                        norearecruitment@gmail.com
                      </a>
                      <span className="text-xs text-white/60">(Careers)</span>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-secondary mb-4">
                    <span>Social Media</span>
                  </h3>
                  <p className="text-white/90 mb-4">Norea Architecture & Construction Co., Ltd</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <button
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              className="w-6 h-0.5 bg-white"
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white"
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
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
