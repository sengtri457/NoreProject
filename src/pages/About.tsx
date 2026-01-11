import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TextReveal, TextRevealByLine } from '../components/animations/TextReveal';
import { ImageReveal } from '../components/animations/ImageReveal';
import { LineAnimation } from '../components/animations/LineAnimation';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal';
import { Counter } from '../components/animations/Counter';
import useLenis from '../hooks/useLenis';
import heroImage from '@/assets/hero-architecture.jpg';

const timeline = [
  { year: '1999', title: 'Founded', description: 'Atelier was established with a vision to redefine architectural excellence.' },
  { year: '2005', title: 'First Major Project', description: 'Completed the landmark Meridian Tower, our first iconic skyscraper.' },
  { year: '2012', title: 'International Expansion', description: 'Opened offices in London, Dubai, and Singapore.' },
  { year: '2020', title: 'Sustainability Focus', description: 'Launched our net-zero carbon initiative across all projects.' },
  { year: '2024', title: 'Innovation Hub', description: 'Opened our R&D center for sustainable building technologies.' },
];

const About = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <TextReveal>
                  <span className="label-uppercase mb-4 block">About Us</span>
                </TextReveal>
                <TextRevealByLine delay={0.1}>
                  <h1 className="heading-display mb-8">
                    Crafting <span className="text-primary">Architectural</span> Excellence
                  </h1>
                </TextRevealByLine>
                <TextRevealByLine delay={0.2}>
                  <p className="body-large max-w-xl">
                    For over 25 years, Atelier has been transforming visions into 
                    architectural masterpieces that stand the test of time.
                  </p>
                </TextRevealByLine>
              </div>
              <div className="aspect-[4/5] lg:aspect-square">
                <ImageReveal 
                  src={heroImage} 
                  alt="Atelier studio" 
                  className="w-full h-full"
                />
              </div>
            </div>
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
                  <span className="label-uppercase mb-4 block">Our Mission</span>
                  <h2 className="heading-medium mb-6">
                    Designing Spaces That <span className="text-primary">Inspire</span>
                  </h2>
                  <p className="body-regular">
                    We believe that great architecture has the power to transform lives. 
                    Our mission is to create buildings and spaces that not only serve 
                    their functional purpose but also inspire, uplift, and connect people 
                    to their environment.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-1 hidden lg:flex justify-center">
                <LineAnimation orientation="vertical" className="h-full" delay={0.3} />
              </div>
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.2}>
                  <span className="label-uppercase mb-4 block">Our Vision</span>
                  <h2 className="heading-medium mb-6">
                    Leading <span className="text-primary">Sustainable</span> Innovation
                  </h2>
                  <p className="body-regular">
                    We envision a future where every building contributes positively 
                    to its environment and community. Through innovative design and 
                    sustainable practices, we're working to make this vision a reality.
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
                <h2 className="heading-large">25 Years of <span className="text-primary">Excellence</span></h2>
              </TextRevealByLine>
            </div>

            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              
              <StaggerContainer className="space-y-12" staggerDelay={0.15}>
                {timeline.map((item, index) => (
                  <StaggerItem key={item.year}>
                    <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="text-5xl font-bold text-primary">{item.year}</span>
                        <h3 className="heading-small mt-2 mb-2">{item.title}</h3>
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
                { value: 150, suffix: '+', label: 'Projects Completed' },
                { value: 25, suffix: '', label: 'Years Experience' },
                { value: 85, suffix: '+', label: 'Team Members' },
                { value: 12, suffix: '', label: 'Countries' },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
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
      <Footer />
    </div>
  );
};

export default About;
