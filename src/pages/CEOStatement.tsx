import { motion } from "framer-motion";
import { User, Target, TrendingUp, Award, Icon } from "lucide-react";
import profiles from "../assets/ceo-portrait.jpg";
import { ImageReveal } from "@/components/animations/ImageReveal";
const CEOStatement = () => {
  const values = [
    { icon: User, label: "Leadership" },
    { icon: Award, label: "Responsibility" },
    { icon: Target, label: "Traction" },
    { icon: TrendingUp, label: "Expertise" },
  ];

  return (
    <section className="min-h-screen bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-12">
                Meet the CEO
              </h2>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="9"
                        cy="7"
                        r="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 21v-2a4 4 0 0 0-3-3.87"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 3.13a4 4 0 0 1 0 7.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our expansion is rooted in unwavering integrity, diligence,
                    and a steadfast resolve to surpass client expectations. As
                    we advance, we remain committed to delivering superior
                    construction standards through engineering innovation and an
                    uncompromising focus on safety. While we take pride in our
                    history, we are driven by the opportunity to shape the
                    sustainable communities of tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - CEO Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative max-w-md w-full"
            >
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-2xl"
              >
                <img
                  src={profiles}
                  alt="CEO"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "3/4" }}
                />

                {/* Name Badge Overlay */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground p-6"
                >
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold"
                  >
                    Mr.MOUN KIMSEANG
                  </motion.h3>
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-sm tracking-wider mb-1"
                  >
                    CEO OF NOREA ARCHITECTURE & CONSTRUCTION CO,. LTD
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOStatement;
