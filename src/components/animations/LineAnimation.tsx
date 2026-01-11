import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface LineAnimationProps {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
  delay?: number;
  duration?: number;
}

export const LineAnimation = ({ 
  orientation = 'vertical', 
  className = '',
  delay = 0,
  duration = 1.5
}: LineAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const isVertical = orientation === 'vertical';

  return (
    <div 
      ref={ref}
      className={`${isVertical ? 'w-px' : 'h-px w-full'} bg-primary overflow-hidden ${className}`}
    >
      <motion.div
        className={`${isVertical ? 'w-full h-full' : 'h-full w-full'} bg-primary`}
        initial={isVertical ? { scaleY: 0 } : { scaleX: 0 }}
        animate={isInView 
          ? (isVertical ? { scaleY: 1 } : { scaleX: 1 })
          : {}
        }
        style={{ 
          transformOrigin: isVertical ? 'top' : 'left'
        }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
};

export const SVGLineAnimation = ({ className = '' }: { className?: string }) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg 
      ref={ref}
      className={className} 
      viewBox="0 0 100 2" 
      fill="none"
    >
      <motion.line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </svg>
  );
};
