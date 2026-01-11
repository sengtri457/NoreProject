import { motion } from 'framer-motion';
import { TextReveal, TextRevealByLine } from '../animations/TextReveal';
import { LineAnimation } from '../animations/LineAnimation';
import { Counter } from '../animations/Counter';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '', label: 'Years Experience' },
  { value: 40, suffix: '+', label: 'Design Awards' },
  { value: 12, suffix: '', label: 'Countries' },
];

export const OverviewSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-architectural">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Vertical Line */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <LineAnimation 
              orientation="vertical" 
              className="h-full min-h-[400px]"
              delay={0.3}
            />
          </div>

          {/* Center Column - Content */}
          <div className="lg:col-span-7">
            <TextReveal>
              <span className="label-uppercase mb-4 block">About Atelier</span>
            </TextReveal>
            
            <TextRevealByLine delay={0.1}>
              <h2 className="heading-large mb-8">
                Building Tomorrow's <span className="text-primary">Landmarks</span> Today
              </h2>
            </TextRevealByLine>

            <div className="space-y-6">
              <TextRevealByLine delay={0.2}>
                <p className="body-large">
                  For over two decades, Atelier has been at the forefront of 
                  architectural innovation, crafting spaces that seamlessly blend 
                  form and function.
                </p>
              </TextRevealByLine>

              <TextRevealByLine delay={0.3}>
                <p className="body-regular">
                  Our multidisciplinary team of architects, engineers, and designers 
                  work collaboratively to deliver projects that exceed expectations. 
                  From conceptual design to final construction, we maintain an 
                  unwavering commitment to excellence and sustainability.
                </p>
              </TextRevealByLine>

              <TextRevealByLine delay={0.4}>
                <p className="body-regular">
                  Every project we undertake is a testament to our belief that 
                  architecture should inspire, endure, and elevate the human experience.
                </p>
              </TextRevealByLine>
            </div>

            {/* Horizontal Line */}
            <div className="my-12">
              <LineAnimation orientation="horizontal" delay={0.5} />
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="heading-large text-primary mb-2">
                    <Counter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
