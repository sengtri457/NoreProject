import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ValuesSection } from "../components/sections/ValuesSection";
import { CTASection } from "../components/sections/CTASection";
import useLenis from "../hooks/useLenis";
import About from "./About";
import Contact from "./Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Projects from "./Projects";

const Index = () => {
  // Initialize smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <About />
        <ValuesSection />
        <Projects />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
