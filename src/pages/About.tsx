import { motion } from "framer-motion";
import { useState } from "react";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import { ImageReveal } from "../components/animations/ImageReveal";
import useLenis from "../hooks/useLenis";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/project-6.jpg";
import constructionTeam from "@/assets/project-5.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { FaBuilding, FaDraftingCompass } from "react-icons/fa";
import { 
  HiShieldCheck, 
  HiStar, 
  HiUserGroup, 
  HiClipboardDocumentCheck 
} from "react-icons/hi2";

const timeline = [
  {
    year: "1999",
    title: "Founded",
    description:
      "Atelier was established with a vision to redefine architectural excellence.",
  },
  {
    year: "2005",
    title: "First Major Project",
    description:
      "Completed the landmark Meridian Tower, our first iconic skyscraper.",
  },
  {
    year: "2012",
    title: "International Expansion",
    description: "Opened offices in London, Dubai, and Singapore.",
  },
  {
    year: "2020",
    title: "Sustainability Focus",
    description: "Launched our net-zero carbon initiative across all projects.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Opened our R&D center for sustainable building technologies.",
  },
];

const aboutContent = [
  {
    id: "overview",
    title: "Overview",
    content: `Norea Architecture & Construction co., Ltd is a professional company based in Phnom Penh and Poi Pet city, Cambodia. We specialize in providing full services including Design & consultant, Design & Build, Construction and Maintenance services.`,
  },
  {
    id: "approach",
    title: "Our Approach",
    content: `We transform ambitious concepts into high-performance constructible realities by merging creative vision with technical precision. Our team of specialized engineers and creative architects is dedicated to delivering innovative, sustainable and functional spaces that define the future of modern living in Cambodia.`,
  },
  {
    id: "expertise",
    title: "Expertise",
    content: `The company has experience in all sectors of construction fields such as High-Rise building, Office building, Commercial building, International School, Hospital, Casino, Hotels, Condominium, infrastructure, Mansion villa and many other constructions.`,
  },
];

const coreServices = [
  {
    icon: <FaBuilding size={30} color="#4CAF50" />,
    title: "Structural Design",
    description:
      "Providing comprehensive structural analysis, calculations and design solutions to ensure all structures comply with safety standards, local & international regulations.",
  },
  {
    icon: <FaDraftingCompass size={30} color="#2196F3" />,
    title: "Architectural Design",
    description:
      "Developing functional design solutions for diverse building projects, utilizing advanced CAD software to produce detailed architectural plans and 3D renderings.",
  },
];

const coreValues = [
  {
    icon: HiShieldCheck,
    title: "Safety",
    description:
      "We prioritize the health and well-being of all employees and management team above all else.",
    image: project1,
  },
  {
    icon: HiStar,
    title: "High Quality",
    description:
      "We continuously improve our work and provide high-quality projects to ensure customer satisfaction.",
    image: project2,
  },
  {
    icon: HiUserGroup,
    title: "Collaboration",
    description:
      "We build strong relationships with clients, vendors, and partners to achieve common goals.",
    image: project3,
  },
  {
    icon: HiClipboardDocumentCheck,
    title: "Accountability",
    description:
      "We take full ownership of actions, decisions, and outcomes, ensuring projects meet timelines and budgets.",
    image: project4,
  },
];

const About = () => {
  useLenis();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-20 md:pb-24 relative">
          <div className="container-architectural grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TextReveal>
                <span className="label-uppercase mb-4 block">About Us</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h1 className="heading-display mb-8">
                  Crafting <span className="text-primary">Architectural</span>{" "}
                  Excellence
                </h1>
              </TextRevealByLine>

              <div className="flex gap-3 mb-8 flex-wrap">
                {aboutContent.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 border ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:bg-accent/50"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-[200px]"
              >
                {aboutContent.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <div key={tab.id} className="space-y-4">
                        <h3 className="heading-small text-primary">
                          {tab.title}
                        </h3>
                        <p className="body-large leading-relaxed">
                          {tab.content}
                        </p>
                      </div>
                    )
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] lg:aspect-square sticky top-24"
            >
              {/* Background shadow block */}
              <div className="absolute inset-0 bg-primary translate-x-6 translate-y-6 -z-10 rounded-md" />

              {/* Image */}
              <ImageReveal
                src={heroImage}
                alt="Atelier studio"
                className="w-full h-full relative z-10 rounded-md shadow-lg"
              />

                {/* Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <Button
                    asChild
                    size="lg"
                    className="shadow-lg hover:shadow-xl transition-all duration-300 bg-secondary text-secondary-foreground"
                  >
                    <a
                      href="/company-profile.pdf"
                      download
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Company Profile
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 md:py-24">
          <div className="container-architectural grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground p-10 lg:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -mr-32 -mt-32" />
              <div className="relative z-10">
                <TextReveal>
                  <span className="label-uppercase mb-6 block text-primary-foreground/80">
                    Core Services
                  </span>
                </TextReveal>
                <TextRevealByLine delay={0.1}>
                  <h2 className="heading-medium mb-8 text-primary-foreground">
                    What We <span className="text-primary-foreground/80">Offer</span>
                  </h2>
                </TextRevealByLine>
                <div className="space-y-8">
                  {coreServices.map((service, idx) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex gap-4 group"
                    >
                      <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="heading-small mb-2 text-primary-foreground">
                          {service.title}
                        </h4>
                        <p className="body-regular text-primary-foreground/90">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] lg:min-h-[500px]"
            >
              <ImageReveal
                src={constructionTeam}
                alt="Construction Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

       

        {/* Core Values Section */}
        

        {/* Mission & Vision */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
          </div>

          <div className="container-architectural relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <TextReveal>
                <span className="label-uppercase mb-4 block">Our Foundation</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h2 className="heading-medium mb-4">
                  Mission & <span className="text-secondary">Vision</span>
                </h2>
              </TextRevealByLine>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mission Card - Golden Background */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-10 rounded-xl shadow-lg bg-primary text-secondary-foreground overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl"
              >
                {/* Logo/Icon Area - Top Left */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaBuilding className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80 font-semibold mb-1">
                      Mission
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Our Mission
                    </h3>
                  </div>
                </div>

                {/* Large Quote Icon - Top Right */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute top-6 right-6"
                >
                  <svg
                    className="w-16 h-16 md:w-20 md:h-20 text-white opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-base md:text-lg leading-relaxed text-white/95 pr-8">
                    To deliver high-quality, sustainable construction solutions through
                    engineering excellence, skilled workmanship, and responsible project
                    management. We are committed to transforming ambitious concepts into
                    high-performance constructible realities.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card - Light Gray Background */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-10 rounded-xl shadow-lg bg-card border border-border overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:border-secondary/30"
              >
                {/* Logo/Icon Area - Top Left */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors duration-300"
                  >
                    <FaDraftingCompass className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                      Vision
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                      Our Vision
                    </h3>
                  </div>
                </div>

                {/* Large Quote Icon - Top Right */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute top-6 right-6"
                >
                  <svg
                    className="w-16 h-16 md:w-20 md:h-20 text-secondary opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-base md:text-lg leading-relaxed text-foreground pr-8">
                    To be a trusted leader in the construction industry, delivering
                    sustainable, high-quality projects that shape communities and create
                    lasting value. We envision a future where innovative design meets
                    exceptional execution.
                  </p>
                </div>

                {/* Golden Accent Line at Bottom */}
                <motion.div
                  initial={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-secondary origin-left"
                />
              </motion.div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;
