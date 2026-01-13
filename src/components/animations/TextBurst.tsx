import { motion, Variants } from "framer-motion";
import React from "react";

interface TextBurstProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const TextBurst = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
}: TextBurstProps) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
