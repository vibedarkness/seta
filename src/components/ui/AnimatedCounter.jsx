/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }) => {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const spring = useSpring(count, { 
    stiffness: 100, 
    damping: 30 
  });
  
  const rounded = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value]);

  useEffect(() => {
    const unsubscribe = spring.onChange((latest) => {
      rounded.set(Math.round(latest));
    });
    return unsubscribe;
  }, []);

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="inline-flex items-center">
      {prefix && <span className="text-gradient font-bold">{prefix}</span>}
      <motion.span className="text-gradient font-bold text-4xl md:text-5xl">
        {rounded}
      </motion.span>
      {suffix && <span className="text-gradient font-bold">{suffix}</span>}
    </div>
  );
};

export default AnimatedCounter;