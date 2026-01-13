import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInOnScrollProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideInOnScroll = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  className = "",
}: SlideInOnScrollProps) => {
  const xFrom = direction === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x: xFrom }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
