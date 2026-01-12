import { motion } from "framer-motion";
import { useState } from "react";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import { ImageReveal } from "../components/animations/ImageReveal";
import useLenis from "../hooks/useLenis";
import heroImage from "@/assets/hero-architecture.jpg";
import constructionTeam from "@/assets/project-2.jpg";

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
    icon: "🏗️",
    title: "Structural Design",
    description:
      "Providing comprehensive structural analysis, calculations and design solutions to ensure all structures comply with safety standards, local & international regulations.",
  },
  {
    icon: "📐",
    title: "Architectural Design",
    description:
      "Developing functional design solutions for diverse building projects, utilizing advanced CAD software to produce detailed architectural plans and 3D renderings.",
  },
];

const coreValues = [
  {
    icon: "🛡️",
    title: "Safety",
    description:
      "We prioritize the health and well-being of all employees and management team above all else.",
    image: constructionTeam,
  },
  {
    icon: "⭐",
    title: "High Quality",
    description:
      "We continuously improve our work and provide high-quality projects to ensure customer satisfaction.",
    image: constructionTeam,
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description:
      "We build strong relationships with clients, vendors, and partners to achieve common goals.",
    image: constructionTeam,
  },
  {
    icon: "📋",
    title: "Accountability",
    description:
      "We take full ownership of actions, decisions, and outcomes, ensuring projects meet timelines and budgets.",
    image: constructionTeam,
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
                    className={`px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-lg ${
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-md"
                        : "bg-card text-muted-foreground"
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
                      <div key={tab.id}>
                        <h3 className="text-3xl font-bold mb-4 text-primary">
                          {tab.title}
                        </h3>
                        <p className="body-medium leading-relaxed">
                          {tab.content}
                        </p>
                      </div>
                    )
                )}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative aspect-[4/5] lg:aspect-square sticky top-24">
              <div className="absolute inset-0 bg-primary translate-x-6 translate-y-6 -z-10 rounded-md" />
              <ImageReveal src={heroImage} alt="Atelier studio" className="w-full h-full relative z-10 rounded-md shadow-lg" />
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 md:py-20">
          <div className="container-architectural grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-md ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-primary text-primary-foreground p-10 lg:p-12"
            >
              <span className="label-uppercase mb-6 block text-white/80">
                Core Services
              </span>
              <div className="space-y-8">
                {coreServices.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full min-h-[400px]"
            >
              <img
                src={constructionTeam}
                alt="Construction Team"
                className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 container-architectural">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              Our Foundation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Mission & <span className="text-primary">Vision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-primary text-white p-8 md:p-10 rounded-lg shadow-lg hover:bg-primary/90 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <p className="text-xs md:text-sm font-semibold tracking-wider mb-3 uppercase opacity-90">
                Our Mission
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Excellence in Construction
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                To deliver high-quality, sustainable construction solutions
                through engineering excellence, skilled workmanship, and
                responsible project management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white text-gray-800 p-8 md:p-10 rounded-lg shadow-lg hover:bg-gray-50 hover:scale-[1.02] transition-transform cursor-pointer border-b-4 border-primary"
            >
              <p className="text-xs md:text-sm font-semibold tracking-wider mb-3 uppercase text-gray-500">
                Our Vision
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Building the Future
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                To be a trusted leader in the construction industry, delivering
                sustainable, high-quality projects that shape communities.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
