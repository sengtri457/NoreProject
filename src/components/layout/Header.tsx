import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Briefcase, Facebook, Linkedin, Instagram } from "lucide-react";
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

        {/* Contact Info Button */}
        <Sheet>
          <SheetTrigger asChild>
            <motion.button
              className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-secondary transition-all duration-300 text-white hover:text-secondary"
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


        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Contact Info Button - Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-secondary transition-all duration-300 text-white hover:text-secondary"
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

          {/* Mobile Menu Button */}
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
