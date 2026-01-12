import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import { ImageReveal } from "../components/animations/ImageReveal";
import { LineAnimation } from "../components/animations/LineAnimation";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollReveal";
import { Counter } from "../components/animations/Counter";
import useLenis from "../hooks/useLenis";
import heroImage from "@/assets/hero-architecture.jpg";

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
    icon: "🏢",
    content: `Norea Architecture & Construction co., Ltd is a professional company based in Phnom Penh and Poi Pet city, Cambodia. We specialize in providing full services including Design & consultant, Design & Build, Construction and Maintenance services.`,
  },
  {
    id: "approach",
    title: "Our Approach",
    icon: "🎯",
    content: `We transform ambitious concepts into high-performance constructible realities by merging creative vision with technical precision. Our team of specialized engineers and creative architects is dedicated to delivering innovative, sustainable and functional spaces that define the future of modern living in Cambodia.`,
  },
  {
    id: "expertise",
    title: "Expertise",
    icon: "⚡",
    content: `The company has experienced in all sectors of construction fields such as High-Rise building, Office building, Commercial building, International School, Hospital, Casino, Hotels, Condominium, infrastructure, Mansion villa and many other constructions field.`,
  },
];

const expertiseAreas = [
  "High-Rise Building",
  "Office Building",
  "Commercial Building",
  "International School",
  "Hospital",
  "Casino",
  "Hotels",
  "Condominium",
  "Infrastructure",
  "Mansion Villa",
];
const coreServices = [
  {
    icon: "🏗️",
    title: "Structural Design",
    description:
      "Providing comprehensive structural analysis, calculations and design solutions to ensure all structures comply with safety standards, local & international regulations. Our engineers work closely with architects, contractors to ensure structural integrity matches the aesthetic and functional vision of the project.",
  },
  {
    icon: "📐",
    title: "Architectural Design",
    description:
      "Developing functional design solutions for diverse building projects, utilizing advanced Computer-Aided Design (CAD) software to produce detailed architectural plans and 3D renderings. Our designs always focus on the space requirements, balancing aesthetics, functionality, environment friendly and client's budget. Their duties include client consultation, creating technical drawings/models, collaborating with engineers, interior designers and contractors to ensure all aspects of the project are integrated.",
  },
];

const About = () => {
  useLenis();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main>
        {/* Hero Section - OPTION 1: Tabs Design */}
        <section className="pt-32 pb-20 md:pt-20 md:pb-32">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <TextReveal>
                  <span className="label-uppercase mb-4 block">About Us</span>
                </TextReveal>
                <TextRevealByLine delay={0.1}>
                  <h1 className="heading-display mb-8">
                    Crafting <span className="text-primary">Architectural</span>{" "}
                    Excellence
                  </h1>
                </TextRevealByLine>

                {/* Tabs Navigation */}
                <div className="flex gap-2 mb-8 flex-wrap">
                  {aboutContent.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-muted-foreground hover:bg-card/80"
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[200px]"
                >
                  {aboutContent.map((tab) =>
                    activeTab === tab.id ? (
                      <div key={tab.id}>
                        <h3 className="text-2xl font-bold mb-4 text-primary">
                          {tab.title}
                        </h3>
                        <p className="body-large leading-relaxed">
                          {tab.content}
                        </p>
                      </div>
                    ) : null
                  )}
                </motion.div>
              </div>

              <div className="aspect-[4/5] lg:aspect-square sticky top-24">
                <ImageReveal
                  src={heroImage}
                  alt="Atelier studio"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Core Services Section - NEW */}
        <section className="section-padding">
          <div className="container-architectural">
            <div className="text-center mb-16">
              <TextReveal>
                <span className="label-uppercase mb-4 block text-primary">
                  What We Offer
                </span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h2 className="heading-display mb-6">
                  CORE <span className="text-primary">SERVICES</span>
                </h2>
              </TextRevealByLine>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions from concept to completion, delivered by
                our expert team
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {coreServices.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <motion.div
                    className="group relative"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-6">
                      {/* Icon Column */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="body-regular text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        {/* Decorative Line */}
                        <motion.div
                          className="h-px bg-primary mt-6 origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2 + index * 0.1,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        {/* OPTION 2: Card Grid with Icons - Expertise Areas */}
        <section className="section-padding bg-card/30">
          <div className="container-architectural">
            <div className="text-center mb-12">
              <TextReveal>
                <span className="label-uppercase mb-4 block">
                  Our Expertise
                </span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h2 className="heading-large">
                  Diverse{" "}
                  <span className="text-primary">Project Portfolio</span>
                </h2>
              </TextRevealByLine>
            </div>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {expertiseAreas.map((area, index) => (
                <StaggerItem key={area}>
                  <motion.div
                    className="bg-background p-6 rounded-sm border border-border hover:border-primary transition-all duration-300 group cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      🏗️
                    </div>
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                      {area}
                    </h4>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-card">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <LineAnimation orientation="vertical" className="h-full" />
              </div>
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <span className="label-uppercase mb-4 block">
                    Our Mission
                  </span>
                  <h2 className="heading-medium mb-6">
                    Designing Spaces That{" "}
                    <span className="text-primary">Inspire</span>
                  </h2>
                  <p className="body-regular">
                    To deliver high-quality, sustainable construction solutions
                    through engineering excellence, skilled workmanship. We
                    prioritize safety, efficiency and responsible project
                    management to ensure client satisfaction in every project we
                    undertake.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <LineAnimation
                  orientation="vertical"
                  className="h-full"
                  delay={0.3}
                />
              </div>
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.2}>
                  <span className="label-uppercase mb-4 block">Our Vision</span>
                  <h2 className="heading-medium mb-6">
                    Leading <span className="text-primary">Sustainable</span>{" "}
                    Innovation
                  </h2>
                  <p className="body-regular">
                    To be a trusted leader in the construction industry,
                    delivering sustainable, high-quality projects that shape
                    communities and create long-term value.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-architectural">
            <div className="text-center mb-16">
              <TextReveal>
                <span className="label-uppercase mb-4 block">Our Journey</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h2 className="heading-large">
                  25 Years of <span className="text-primary">Excellence</span>
                </h2>
              </TextRevealByLine>
            </div>

            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

              <StaggerContainer className="space-y-12" staggerDelay={0.15}>
                {timeline.map((item, index) => (
                  <StaggerItem key={item.year}>
                    <div
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <span className="text-5xl font-bold text-primary">
                          {item.year}
                        </span>
                        <h3 className="heading-small mt-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="body-regular">{item.description}</p>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-primary hidden md:block" />
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-secondary">
          <div className="container-architectural">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: 150, suffix: "+", label: "Projects Completed" },
                { value: 25, suffix: "", label: "Years Experience" },
                { value: 85, suffix: "+", label: "Team Members" },
                { value: 12, suffix: "", label: "Countries" },
              ].map((stat, i) => (
                <ScrollReveal
                  key={stat.label}
                  delay={i * 0.1}
                  className="text-center"
                >
                  <div className="heading-display text-primary mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="body-regular">{stat.label}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
