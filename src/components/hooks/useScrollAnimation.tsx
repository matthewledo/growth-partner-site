import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

export function useScrollAnimation(delay = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return {
    ref,
    controls,
    variants: {
      hidden: { 
        opacity: 0, 
        y: 50,
        transition: { duration: 0.6, delay }
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, delay }
      }
    }
  };
}

export function useStaggerAnimation(staggerDelay = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return {
    ref,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.2
        }
      }
    },
    itemVariants: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }
    },
    animate: isInView ? "visible" : "hidden"
  };
}

export { motion };