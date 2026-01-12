import { motion } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  TextReveal,
  TextRevealByLine,
} from "../components/animations/TextReveal";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollReveal";
import { LineAnimation } from "../components/animations/LineAnimation";
import useLenis from "../hooks/useLenis";

const leadership = [
  {
    name: "Alexandra Chen",
    role: "Founding Principal",
    bio: "With over 30 years of experience, Alexandra has led Atelier to become a globally recognized architecture firm.",
  },
  {
    name: "Marcus Williams",
    role: "Design Director",
    bio: "Marcus brings a unique blend of artistic vision and technical precision to every project.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Engineering",
    bio: "Elena leads our structural and MEP engineering teams with innovative sustainable solutions.",
  },
];

const departments = [
  { name: "Architecture", count: 32 },
  { name: "Engineering", count: 24 },
  { name: "Interior Design", count: 12 },
  { name: "Project Management", count: 8 },
  { name: "Sustainability", count: 6 },
];

const Team = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container-architectural">
            <div className="max-w-4xl">
              <TextReveal>
                <span className="label-uppercase mb-4 block">Our Team</span>
              </TextReveal>
              <TextRevealByLine delay={0.1}>
                <h1 className="heading-display mb-8">
                  The <span className="text-primary">Minds</span> Behind Our
                  Work
                </h1>
              </TextRevealByLine>
              <TextRevealByLine delay={0.2}>
                <p className="body-large max-w-2xl">
                  Our diverse team of architects, engineers, and designers
                  brings together expertise from around the world.
                </p>
              </TextRevealByLine>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="pb-20 md:pb-32">
          <div className="container-architectural">
            <TextReveal>
              <h2 className="heading-medium mb-12">Leadership</h2>
            </TextReveal>
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {leadership.map((person) => (
                <StaggerItem key={person.name}>
                  <motion.div
                    className="card-architectural p-8 h-full group"
                    whileHover={{ y: -4 }}
                  >
                    {/* Placeholder Avatar */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-bronze-dark mb-6 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-foreground">
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="heading-small mb-1 group-hover:text-primary transition-colors">
                      {person.name}
                    </h3>
                    <span className="label-uppercase text-xs block mb-4">
                      {person.role}
                    </span>
                    <p className="body-regular">{person.bio}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Departments */}
        <section className="section-padding bg-card">
          <div className="container-architectural">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <TextReveal>
                  <span className="label-uppercase mb-4 block">
                    Organization
                  </span>
                </TextReveal>
                <TextRevealByLine delay={0.1}>
                  <h2 className="heading-large mb-6">
                    Our <span className="text-primary">Structure</span>
                  </h2>
                </TextRevealByLine>
                <TextRevealByLine delay={0.2}>
                  <p className="body-large">
                    85+ professionals across 5 specialized departments, working
                    collaboratively to deliver excellence.
                  </p>
                </TextRevealByLine>
              </div>
              <div>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {departments.map((dept, index) => (
                    <StaggerItem key={dept.name}>
                      <div className="flex items-center justify-between py-4 border-b border-border">
                        <span className="font-medium">{dept.name}</span>
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="h-2 bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${(dept.count / 32) * 120}px`,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                          <span className="text-muted-foreground w-8 text-right">
                            {dept.count}
                          </span>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="section-padding">
          <div className="container-architectural text-center">
            <TextReveal>
              <span className="label-uppercase mb-4 block">Careers</span>
            </TextReveal>
            <TextRevealByLine delay={0.1}>
              <h2 className="heading-large mb-8">
                Join Our <span className="text-primary">Team</span>
              </h2>
            </TextRevealByLine>
            <TextRevealByLine delay={0.2}>
              <p className="body-large max-w-xl mx-auto mb-8">
                We're always looking for talented individuals who share our
                passion for architectural excellence.
              </p>
            </TextRevealByLine>
            <ScrollReveal delay={0.3}>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 text-primary font-semibold group"
              >
                <span>View Open Positions</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
