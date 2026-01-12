import { motion } from "framer-motion";
import { TextReveal, TextRevealByLine } from "../animations/TextReveal";
import { LineAnimation } from "../animations/LineAnimation";
import { Counter } from "../animations/Counter";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Design Awards" },
  { value: 12, suffix: "", label: "Countries" },
];

const sections = [
  {
    number: "1.",
    title: "INTRODUCTION",
    items: [
      "About Us",
      "Our Service",
      "30 Years of Construction Experience",
      "CEO Statement",
      "Organization Chart",
      "Our Vision, Our Mission, Our Values",
      "Quality Policy",
      "Business License",
    ],
  },
  {
    number: "2.",
    title: "PROJECT",
    items: [
      "OVERVIEW",
      "TIME TOWER",
      "CIA INTERNATION SCHOOL",
      "THE LOTUS",
      "J-TOWER 3",
      "AURA CITY",
      "STARGOLD CASINO",
      "CASINO 97",
      "DREAM VILLE",
      "CONDO 7F",
      "VIMEAN DEY",
      "MINGHUA SCHOOL",
      "KADI MENG HOTEL",
      "8F RESIDENCE",
      "8F RESIDENCE 8G",
      "MEANCHEY FLAT",
      "PM OFFICE BUILDING",
      "VILLA PROJECTS",
    ],
  },
];

export const OverviewSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-architectural">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Contents Title */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-6">
                CONTENTS
              </h2>
              <div className="w-full h-1 bg-primary" />

              {/* Watermark Style Background Text */}
              <div className="relative mt-8 overflow-hidden h-64">
                <div className="absolute inset-0 flex items-center justify-center ">
                  <span className="text-[9.5rem] font-bold text-primary whitespace-nowrap">
                    01/02
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid - Below Contents on Mobile, Keep for Desktop */}
            {/* <div className="grid grid-cols-2 gap-8 mt-12 lg:mt-24">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
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
                  <p className="text-sm text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div> */}
          </div>

          {/* Vertical Divider Line */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <LineAnimation
              orientation="vertical"
              className="h-full"
              delay={0.3}
            />
          </div>

          {/* Right Column - Sections List */}
          <div className="lg:col-span-6">
            <div className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: sectionIndex * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {section.number}
                    </span>
                    <div className="flex-1 pt-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {section.title}
                      </h3>
                      <div className="w-full h-px bg-border" />
                    </div>
                  </div>

                  {/* Section Items */}
                  <div className="pl-16 md:pl-20">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + itemIndex * 0.05,
                          }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Description Section */}
        {/* <div className="mt-20 lg:mt-32">
          <LineAnimation
            orientation="horizontal"
            delay={0.5}
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-1" />

            <div className="lg:col-span-7">
              <TextReveal>
                <span className="label-uppercase mb-4 block">
                  About Atelier
                </span>
              </TextReveal>

              <TextRevealByLine delay={0.1}>
                <h2 className="heading-large mb-8">
                  Building Tomorrow's{" "}
                  <span className="text-primary">Landmarks</span> Today
                </h2>
              </TextRevealByLine>

              <div className="space-y-6">
                <TextRevealByLine delay={0.2}>
                  <p className="body-large">
                    For over two decades, Atelier has been at the forefront of
                    architectural innovation, crafting spaces that seamlessly
                    blend form and function.
                  </p>
                </TextRevealByLine>

                <TextRevealByLine delay={0.3}>
                  <p className="body-regular">
                    Our multidisciplinary team of architects, engineers, and
                    designers work collaboratively to deliver projects that
                    exceed expectations. From conceptual design to final
                    construction, we maintain an unwavering commitment to
                    excellence and sustainability.
                  </p>
                </TextRevealByLine>

                <TextRevealByLine delay={0.4}>
                  <p className="body-regular">
                    Every project we undertake is a testament to our belief that
                    architecture should inspire, endure, and elevate the human
                    experience.
                  </p>
                </TextRevealByLine>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
