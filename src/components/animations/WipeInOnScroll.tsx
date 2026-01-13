import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WipeInOnScrollProps {
  children: ReactNode;
  direction?: "left" | "right"; // direction of wipe
  delay?: number;
  duration?: number;
  className?: string;
}

export const WipeInOnScroll = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  className = "",
}: WipeInOnScrollProps) => {
  // Start x position for the mask
  const initialX = direction === "left" ? "-100%" : "100%";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ x: initialX }}
        whileInView={{ x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
