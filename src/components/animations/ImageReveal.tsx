import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  wipe?: boolean;
}

export const ImageReveal = ({ 
  src, 
  alt, 
  className = '', 
  delay = 0,
  wipe = true 
}: ImageRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={wipe ? { clipPath: 'inset(0 100% 0 0)' } : { scale: 1.2, opacity: 0 }}
        animate={isInView 
          ? (wipe ? { clipPath: 'inset(0 0% 0 0)' } : { scale: 1, opacity: 1 })
          : {}
        }
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ scale: 1.3 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 1.5,
            delay: delay + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.div>
    </div>
  );
};

export const ParallaxImage = ({ 
  src, 
  alt, 
  className = '' 
}: { 
  src: string; 
  alt: string; 
  className?: string 
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
        initial={{ y: '-10%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: false }}
        transition={{
          duration: 0,
          ease: 'linear',
        }}
        style={{
          y: '-10%',
        }}
      />
    </div>
  );
};
