import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { OverviewSection } from '../components/sections/OverviewSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { CTASection } from '../components/sections/CTASection';
import useLenis from '../hooks/useLenis';

const Index = () => {
  // Initialize smooth scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <ProjectsSection />
        <ValuesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
