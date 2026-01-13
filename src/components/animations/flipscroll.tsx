import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FlipOnScrollProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FlipOnScroll = ({ 
    children, 
    delay = 0, 
    duration = 0.8,
    className = ""
}: FlipOnScrollProps) => {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                rotateY: -90,
                transformPerspective: 1000,
            }}
            whileInView={{ 
                opacity: 1, 
                rotateY: 0,
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
            style={{ 
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }}
        >
            {children}
        </motion.div>
    );
};

interface FlipOnHoverProps {
    children: ReactNode;
    className?: string;
}

export const FlipOnHover = ({ 
    children, 
    className = ""
}: FlipOnHoverProps) => {
    return (
        <motion.div
            whileHover={{ 
                rotateY: 360,
            }}
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
            style={{ 
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
            }}
        >
            {children}
        </motion.div>
    );
};

interface FlipCardProps {
    front: ReactNode;
    back: ReactNode;
    className?: string;
}

export const FlipCard = ({ 
    front, 
    back, 
    className = ""
}: FlipCardProps) => {
    return (
        <motion.div
            className={`relative ${className}`}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Front */}
            <div
                className="w-full h-full"
                style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                }}
            >
                {front}
            </div>

            {/* Back */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                }}
            >
                {back}
            </div>
        </motion.div>
    );
};