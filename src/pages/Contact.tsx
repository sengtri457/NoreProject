import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import { ScrollReveal } from "../components/animations/ScrollReveal";
import useLenis from "../hooks/useLenis";

// Import your QR code image here - replace with your actual image path
// import qrCodeImage from '../assets/qr-code.png';

const Contact = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
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
                  Get in <span className="text-primary">Touch</span>
                </h1>
              </TextRevealByLine>
              <TextRevealByLine delay={0.2}>
                <p className="body-large max-w-2xl text-muted-foreground">
                  Whether you're an architect, developer, or designer, we're
                  here to help you create stunning visualizations that bring
                  your projects to life. Reach out to discuss your needs and get
                  a quote.
                </p>
              </TextRevealByLine>
            </div>
          </div>
        </section>

        {/* QR Code & Contact Info */}
        <section className="pb-20 md:pb-32">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left: Animated QR Code */}
              <ScrollReveal>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Single animated ring - much lighter than 3 rings */}
                    <motion.div
                      className="absolute inset-0 -m-10"
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-full h-full border-2 border-primary rounded-2xl" />
                    </motion.div>

                    {/* Corner decorations - static, no animation for better performance */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />

                    {/* QR Code container with subtle float */}
                    <motion.div
                      className="relative bg-white p-8 rounded-xl shadow-2xl"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Simple glow effect instead of scan line */}
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(var(--primary-rgb, 59, 130, 246), 0.2)",
                            "0 0 40px rgba(var(--primary-rgb, 59, 130, 246), 0.4)",
                            "0 0 20px rgba(var(--primary-rgb, 59, 130, 246), 0.2)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* QR Code Image */}
                      <motion.div
                        className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src="https://www.lbl-group.com/wp-content/uploads/2024/03/Application_QR-300x298.png"
                          alt="QR Code"
                          className="w-full h-full object-contain"
                        />
                      </motion.div>

                      {/* Scan instruction with simple fade */}
                      <motion.div
                        className="mt-6 text-center"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <p className="text-sm font-medium text-gray-800">
                          Scan to Connect
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Quick contact access
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* Reduced to 3 particles instead of 6 */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                        style={{
                          left: `${25 + i * 25}%`,
                          top: `${30 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -25, 0],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 1.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Contact Information */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-10">
                  {/* Email */}
                  <motion.div
                    className="group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-primary"
                        >
                          <path
                            d="M3 8L10.89 13.26C11.54 13.67 12.46 13.67 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                          Email
                        </p>
                        <a
                          href="mailto:architipsbox@gmail.com"
                          className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          noreaarchitecture@gmail.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Telegram */}
                  <motion.div
                    className="group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-primary"
                        >
                          <path
                            d="M21.198 3.588c.282-.283.318-.768.034-1.117-.284-.35-.792-.406-1.142-.124L3.027 12.285c-.53.427-.408 1.302.194 1.554l4.023 1.682 1.682 4.023c.252.602 1.127.724 1.554.194l9.718-16.15z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.5 14.5l5-5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                          Telegram
                        </p>
                        <a
                          href="https://t.me/noreaarchitecture"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          @noreaarchitecture
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-primary"
                        >
                          <path
                            d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                          Phone
                        </p>
                        <a
                          href="tel:+855887651615"
                          className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          (+855) 99 4444 34 / (+855) 70 7777 95
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-primary"
                        >
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                            fill="currentColor"
                          />
                        </svg>
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                          Location
                        </p>
                        <p className="text-xl md:text-2xl font-semibold text-foreground">
                          Phnom Penh, Cambodia
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Business Hours */}
                  <motion.div
                    className="pt-10 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
                      Business Hours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Monday - Friday</span>
                        <span className="text-muted-foreground">
                          9:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Saturday</span>
                        <span className="text-muted-foreground">
                          10:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Social Media */}
                  <motion.div
                    className="pt-10 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
                      Follow Us
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { icon: "🌐", label: "Website" },
                        { icon: "📷", label: "Instagram" },
                        { icon: "🎵", label: "TikTok" },
                        { icon: "▶️", label: "YouTube" },
                        { icon: "🎨", label: "Behance" },
                        { icon: "📌", label: "Pinterest" },
                        { icon: "✈️", label: "Telegram" },
                        { icon: "🌍", label: "Global" },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-xl transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.05 }}
                          title={social.label}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
