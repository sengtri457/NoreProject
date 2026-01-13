import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Header } from "../components/layout/Header";
import profiles from "../assets/ceo-portrait.jpg";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import {
  Award,
  Shield,
  CheckCircle2,
  FileCheck,
  X,
  ZoomIn,
  Download,
} from "lucide-react";

const licenses = [
  {
    id: 1,
    title: "Business Registration Certificate",
    issueDate: "January 15, 2020",
    authority: "Ministry of Commerce",
    image: profiles,
    category: "Business",
  },
  {
    id: 2,
    title: "Construction License Grade A",
    issueDate: "March 22, 2020",
    authority: "Ministry of Public Works",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    category: "Construction",
  },
  {
    id: 3,
    title: "Tax Registration Certificate",
    issueDate: "February 10, 2020",
    authority: "Tax Department",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    category: "Tax",
  },
  {
    id: 4,
    title: "Safety Compliance Certificate",
    issueDate: "June 5, 2021",
    authority: "Labor Department",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    category: "Safety",
  },
  {
    id: 5,
    title: "Environmental Permit",
    issueDate: "August 12, 2021",
    authority: "Environmental Protection Agency",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    category: "Environment",
  },
];

const stats = [
  { icon: Award, label: "Licensed Since", value: "2020" },
  { icon: Shield, label: "Certifications", value: "5+" },
  { icon: CheckCircle2, label: "Compliance Rate", value: "100%" },
  { icon: FileCheck, label: "Active Projects", value: "50+" },
];

// License Card Component
const LicenseCard = ({ license, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="relative bg-card rounded-2xl overflow-hidden shadow-lg"
        whileHover={{ y: -12, rotateY: 5, rotateX: 5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        {/* Hanging Clip Effect */}
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
          animate={isHovered ? { y: [0, -5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-6 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-b-lg shadow-md relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-zinc-900" />
            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-b-lg" />
          </div>
        </motion.div>

        {/* Glowing Border on Hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* License Image with Paper Effect */}
        <div className="relative h-80 bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 overflow-hidden">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4=')]" />

          {/* Actual License Image */}
          <motion.div
            className="relative h-full rounded-lg overflow-hidden shadow-inner border border-zinc-200"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={license.image}
              alt={license.title}
              className="w-full h-full object-cover"
            />

            {/* Verified Badge */}
            <motion.div
              className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.3,
                type: "spring",
                stiffness: 200,
              }}
            >
              <CheckCircle2 className="w-3 h-3" />
              Verified
            </motion.div>

            {/* Category Tag */}
            <motion.div
              className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {license.category}
            </motion.div>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={
                isHovered
                  ? {
                      background: [
                        "linear-gradient(90deg, transparent, transparent)",
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        "linear-gradient(90deg, transparent, transparent)",
                      ],
                      x: ["-100%", "100%", "100%"],
                    }
                  : {}
              }
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          {/* Corner Stamps */}
          <motion.div
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-red-600/20 border-2 border-red-600/50 flex items-center justify-center text-[8px] font-bold text-red-600 rotate-12"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          >
            OFFICIAL
          </motion.div>
        </div>

        {/* License Details */}
        <div className="p-6 bg-card relative">
          {/* Decorative Line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />

          <motion.h3
            className="font-bold text-lg mb-2 group-hover:text-primary transition-colors"
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {license.title}
          </motion.h3>

          <div className="space-y-1 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Issued: {license.issueDate}
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Authority: {license.authority}
            </p>
          </div>

          {/* View Details Button */}
          <motion.button
            onClick={() => onViewDetails(license)}
            className="mt-4 w-full py-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileCheck className="w-4 h-4" />
            View Details
          </motion.button>
        </div>

        {/* Shadow Effect */}
        <motion.div
          className="absolute -bottom-2 left-4 right-4 h-4 bg-black/20 blur-xl rounded-full"
          animate={
            isHovered
              ? { scale: 1.1, opacity: 0.4 }
              : { scale: 1, opacity: 0.2 }
          }
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Stats Card Component
const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-bronze-dark mb-4 relative"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-8 h-8 text-primary-foreground" />

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="text-4xl font-bold text-primary mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 200,
        }}
      >
        {stat.value}
      </motion.div>

      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  );
};

// License Modal Component
const LicenseModal = ({ license, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!license) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          className="relative bg-card rounded-3xl shadow-2xl max-w-4xl w-full  overflow-hidden"
          initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-bronze-dark/10 p-6 border-b border-border">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full text-xs font-bold text-primary mb-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Document
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-2">{license.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {license.category}
                    </span>
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {license.authority}
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-card hover:bg-destructive/10 text-foreground hover:text-destructive flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Animated Underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-bronze-dark to-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Image Container */}
          <div className="p-6 overflow-auto max-h-[calc(90vh-200px)]">
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-zinc-50 shadow-inner"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <motion.button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground flex items-center justify-center shadow-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <ZoomIn className="w-5 h-5" />
                </motion.button>

                <motion.button
                  onClick={() => {
                    // Download functionality
                    const link = document.createElement("a");
                    link.href = license.image;
                    link.download = `${license.title}.jpg`;
                    link.click();
                  }}
                  className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground flex items-center justify-center shadow-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <Download className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                className="relative cursor-zoom-in"
                animate={isZoomed ? { scale: 1.5 } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={license.image}
                  alt={license.title}
                  className="w-full h-auto"
                />

                {/* Image Shine Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                />
              </motion.div>

              {/* Decorative Corner Stamps */}
              <motion.div
                className="absolute top-4 left-4 w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-600/50 flex items-center justify-center text-[10px] font-bold text-red-600 rotate-12"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 12 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                OFFICIAL
              </motion.div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-sm text-muted-foreground mb-1">
                  Issue Date
                </div>
                <div className="font-semibold">{license.issueDate}</div>
              </div>
              <div className="p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-sm text-muted-foreground mb-1">
                  Issuing Authority
                </div>
                <div className="font-semibold">{license.authority}</div>
              </div>
              <div className="p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-sm text-muted-foreground mb-1">
                  Category
                </div>
                <div className="font-semibold">{license.category}</div>
              </div>
              <div className="p-4 bg-card/50 rounded-xl border border-border">
                <div className="text-sm text-muted-foreground mb-1">Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-semibold text-green-600">Active</span>
                </div>
              </div>
            </motion.div>

            {/* Verification Info */}
            <motion.div
              className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    Verification Information
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    This document has been verified and authenticated by the
                    issuing authority. All information contained within is
                    official and legally binding.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Actions */}
          <motion.div
            className="p-6 border-t border-border bg-card/50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex gap-3 justify-end">
              <motion.button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
              <motion.button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = license.image;
                  link.download = `${license.title}.jpg`;
                  link.click();
                }}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BusinessLicense = () => {
  const [selectedLicense, setSelectedLicense] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedLicense) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedLicense]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--primary-rgb), 0.1) 0%, transparent 50%, rgba(var(--bronze-dark-rgb), 0.1) 100%)",
            }}
          >
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-bronze-dark/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="container-architectural relative z-10"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="label-uppercase text-primary">
                    Certified & Verified
                  </span>
                </div>
              </motion.div>

              <TextRevealByLine delay={0.1}>
                <h1 className="heading-display mb-8">
                  Business <span className="text-primary">License</span>
                </h1>
              </TextRevealByLine>

              <TextRevealByLine delay={0.2}>
                <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-12">
                  Fully licensed and certified by government authorities. Our
                  credentials reflect our commitment to quality, safety, and
                  compliance.
                </p>
              </TextRevealByLine>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </section>

        {/* Licenses Grid */}
        <section className="section-padding">
          <div className="container-architectural">
            <div className="text-center mb-16">
              <TextReveal>
                <span className="label-uppercase mb-4 block">
                  Our Credentials
                </span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h2 className="heading-large mb-6">
                  Official <span className="text-primary">Certifications</span>
                </h2>
              </TextRevealByLine>
              <TextRevealByLine delay={0.2}>
                <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
                  View our complete collection of licenses, permits, and
                  certifications that authorize our operations.
                </p>
              </TextRevealByLine>
            </div>

            {/* Masonry Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {licenses.map((license, index) => (
                <LicenseCard
                  key={license.id}
                  license={license}
                  index={index}
                  onViewDetails={setSelectedLicense}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* License Modal */}
      {selectedLicense && (
        <LicenseModal
          license={selectedLicense}
          onClose={() => setSelectedLicense(null)}
        />
      )}
    </div>
  );
};

export default BusinessLicense;
